import { convexAction, convexQuery } from "@convex-dev/react-query";
import {
  queryOptions,
  useQueryClient,
  useQuery as useTanStackQuery,
  type QueryClient,
  type QueryKey,
} from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import {
  usePaginatedQuery as useConvexPaginatedQuery,
  type OptionalRestArgsOrSkip,
  type PaginatedQueryArgs,
  type PaginatedQueryReference,
  type UsePaginatedQueryReturnType,
} from "convex/react";
import {
  getFunctionName,
  type FunctionArgs,
  type FunctionReference,
  type FunctionReturnType,
  type OptionalRestArgs,
} from "convex/server";
import { use, useEffect, useRef, useState } from "react";

// Server rendering waits this long per request for all of its queries
// together; a query still loading then renders its loading state in the
// server HTML, and the browser loads it.
const SERVER_TIMEOUT_MS = 3000;

// When each request's wait ends. A component that suspends inside another
// would wait the full time again at every level otherwise.
const serverDeadlines = new WeakMap<QueryClient, number>();

// How long an unused query keeps its subscription, like convex/react's
// short unsubscribe delay rather than React Query's 5 minutes.
const BROWSER_GC_TIME_MS = 10_000;

// Server loads by query hash. Each request has its own QueryClient.
const serverLoads = new WeakMap<QueryClient, Map<string, Promise<unknown>>>();

/** This request's load for `queryKey`, started by the first call. */
function serverLoad(
  queryClient: QueryClient,
  queryKey: QueryKey,
  start: () => Promise<unknown>,
): Promise<unknown> {
  const loads = serverLoads.get(queryClient) ?? new Map<string, Promise<unknown>>();
  serverLoads.set(queryClient, loads);
  const { queryHash } = queryClient.defaultQueryOptions({ queryKey });
  const load = loads.get(queryHash) ?? start();
  loads.set(queryHash, load);
  return load;
}

/**
 * `useQuery` from `convex/react` that also renders on the server: the page HTML
 * has the data, and the browser starts from it with a live subscription. A
 * query that throws or times out on the server renders its loading state there
 * and loads in the browser. In the browser it works like `convex/react`:
 * `undefined` while loading, and errors are thrown.
 */
export const useQuery: typeof useBrowserQuery = import.meta.env.SSR
  ? useServerQuery
  : useBrowserQuery;

/**
 * `usePaginatedQuery` from `convex/react` whose first page renders on the
 * server. The browser shows that page until its own subscription loads.
 */
export const usePaginatedQuery: typeof useBrowserPaginatedQuery = import.meta.env.SSR
  ? useServerPaginatedQuery
  : useBrowserPaginatedQuery;

function useBrowserQuery<Query extends FunctionReference<"query">>(
  query: Query,
  ...args: OptionalRestArgsOrSkip<Query>
): FunctionReturnType<Query> | undefined {
  return useTanStackQuery({
    ...convexQuery(query, ...(args as [FunctionArgs<Query>])),
    retry: false,
    throwOnError: true,
    gcTime: BROWSER_GC_TIME_MS,
  }).data;
}

function useServerQuery<Query extends FunctionReference<"query">>(
  query: Query,
  ...args: OptionalRestArgsOrSkip<Query>
): FunctionReturnType<Query> | undefined {
  const queryClient = useQueryClient();
  const { serverHttpClient } = useRouter().options.context.convexQueryClient;
  if (args[0] === "skip" || !serverHttpClient) return undefined;
  const { queryKey } = convexQuery(query, ...(args as [FunctionArgs<Query>]));
  const load = serverLoad(queryClient, queryKey, () => {
    const cached = queryClient.getQueryData(queryKey);
    return cached === undefined
      ? loadOnServer(queryClient, getFunctionName(query), queryKey, () =>
          serverHttpClient.consistentQuery(query, ...([args[0] ?? {}] as OptionalRestArgs<Query>)),
        )
      : // React reads a fulfilled thenable without suspending.
        Object.assign(Promise.resolve(cached), { status: "fulfilled", value: cached });
  });
  // Call `use` for cached data too: when a component retries after
  // suspending, React matches its `use` calls by position.
  return use(load) as FunctionReturnType<Query> | undefined;
}

// Resolves to `undefined` when the query fails, so the page renders its
// loading state instead of an error, and nothing about the failure reaches
// the browser.
async function loadOnServer<T>(
  queryClient: QueryClient,
  name: string,
  queryKey: QueryKey,
  run: () => Promise<T>,
): Promise<T | undefined> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const deadline = serverDeadlines.get(queryClient) ?? Date.now() + SERVER_TIMEOUT_MS;
  serverDeadlines.set(queryClient, deadline);
  const wait = Math.max(0, deadline - Date.now());
  try {
    const data = await Promise.race([
      run(),
      new Promise<never>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error(`still loading after the ${SERVER_TIMEOUT_MS} ms server wait`)),
          wait,
        );
      }),
    ]);
    // Through `fetchQuery`, so the router streams the result to the browser.
    await queryClient.fetchQuery({ queryKey, queryFn: () => data, staleTime: Infinity });
    return data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(
        `${name} renders its loading state on the server:`,
        error instanceof Error ? error.message : error,
      );
    }
    return undefined;
  } finally {
    clearTimeout(timer);
  }
}

function useBrowserPaginatedQuery<Query extends PaginatedQueryReference>(
  query: Query,
  args: PaginatedQueryArgs<Query> | "skip",
  options: { initialNumItems: number },
): UsePaginatedQueryReturnType<Query> {
  const live = useConvexPaginatedQuery(query, args, options);
  const queryClient = useQueryClient();
  // `loadMore` on the server's page waits for the live first page, then runs.
  const [queued, setQueued] = useState(0);
  const sent = useRef(0);
  const { status, loadMore } = live;
  useEffect(() => {
    if (queued === sent.current || status === "LoadingFirstPage") return;
    if (status === "CanLoadMore") loadMore(queued - sent.current);
    sent.current = queued;
  }, [queued, status, loadMore]);
  if (status !== "LoadingFirstPage" || args === "skip") return live;
  // Widen to the base reference type so `convexQuery` accepts the args.
  const ref: FunctionReference<"query"> = query;
  const { queryKey } = convexQuery(ref, firstPageArgs(args, options.initialNumItems));
  // Only read a page the server sent. Fetching it here too would load it twice.
  const page = queryClient.getQueryData<FunctionReturnType<Query>>(queryKey);
  if (page === undefined) return live;
  const result = firstPageResult(page, (numItems) => setQueued((n) => n + numItems));
  return queued > 0 && result.status === "CanLoadMore"
    ? { ...result, status: "LoadingMore", isLoading: true }
    : result;
}

function useServerPaginatedQuery<Query extends PaginatedQueryReference>(
  query: Query,
  args: PaginatedQueryArgs<Query> | "skip",
  options: { initialNumItems: number },
): UsePaginatedQueryReturnType<Query> {
  const page = useServerQuery(
    query,
    ...([
      args === "skip" ? args : firstPageArgs(args, options.initialNumItems),
    ] as OptionalRestArgsOrSkip<Query>),
  );
  return firstPageResult(page, () => {});
}

function firstPageArgs<Query extends PaginatedQueryReference>(
  args: PaginatedQueryArgs<Query>,
  numItems: number,
): FunctionArgs<Query> {
  return { ...args, paginationOpts: { numItems, cursor: null } };
}

function firstPageResult<Query extends PaginatedQueryReference>(
  page: FunctionReturnType<Query> | undefined,
  loadMore: (numItems: number) => void,
): UsePaginatedQueryReturnType<Query> {
  if (page === undefined) {
    return { results: [], status: "LoadingFirstPage", isLoading: true, loadMore };
  }
  return {
    results: page.page,
    status: page.isDone ? "Exhausted" : "CanLoadMore",
    isLoading: false,
    loadMore,
  };
}

/**
 * Query options for a Convex action that `useSuspenseQuery` and
 * `ensureQueryData` accept, so its result can load during SSR. Actions are not
 * reactive, so the result is cached until invalidated.
 *
 * @example
 * loader: ({ context }) =>
 *   context.queryClient.ensureQueryData(
 *     convexActionQuery(api.weather.forecast, { city: "Paris" }),
 *   ),
 */
export function convexActionQuery<Action extends FunctionReference<"action">>(
  action: Action,
  ...args: OptionalRestArgs<Action>
) {
  // Widen to the base reference type so `convexAction` accepts the args.
  const ref: FunctionReference<"action"> = action;
  return queryOptions<FunctionReturnType<Action>>({
    queryKey: convexAction(ref, args[0]).queryKey,
    staleTime: Infinity,
  });
}

/**
 * The result of a Convex action a component loads in an effect, run on the
 * server so the page HTML shows it; the component starts from it. In the
 * browser it is what the server sent, or `undefined`, and the component's
 * effect loads the action as before. A failed or slow action leaves the
 * loading state, as with `useQuery`.
 */
export function useActionResult<Action extends FunctionReference<"action">>(
  action: Action,
  ...args: OptionalRestArgs<Action>
): FunctionReturnType<Action> | undefined {
  const queryClient = useQueryClient();
  const { serverHttpClient } = useRouter().options.context.convexQueryClient;
  const ref: FunctionReference<"action"> = action;
  const { queryKey } = convexAction(ref, args[0] ?? {});
  if (!import.meta.env.SSR || !serverHttpClient) {
    return queryClient.getQueryData<FunctionReturnType<Action>>(queryKey);
  }
  const load = serverLoad(queryClient, queryKey, () =>
    loadOnServer(queryClient, getFunctionName(action), queryKey, () =>
      serverHttpClient.action(action, ...args),
    ),
  );
  return use(load) as FunctionReturnType<Action> | undefined;
}
