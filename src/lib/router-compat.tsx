/* eslint-disable react-refresh/only-export-components -- react-router-dom's API mixes components and functions */
// The react-router-dom API this app used, on top of TanStack Router. Links
// and navigation take runtime string paths, resolved the way react-router
// resolved them, so existing components keep working unchanged.
import {
  RouterContextProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet as RouterOutlet,
  useMatch as useRouterMatch,
  useParams as useRouterParams,
  useParentMatches,
  useRouter,
  useRouterState,
  type ParsedLocation,
} from "@tanstack/react-router";
import {
  Children,
  Fragment,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";

export interface Path {
  pathname: string;
  search: string;
  hash: string;
}
export type To = string | Partial<Path>;
export interface Location extends Path {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- react-router's type, which app code reads unchecked
  state: any;
  key: string;
}
export type RelativeRoutingType = "route" | "path";
export interface NavigateOptions {
  replace?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
}
export interface NavigateFunction {
  (to: To, options?: NavigateOptions): void;
  (delta: number): void;
}
export type Params<Key extends string = string> = { readonly [K in Key]: string | undefined };

/**
 * Search params as plain strings, the way react-router read them, and a list
 * for a repeated key. Pass both to the router.
 */
export function parseSearch(search: string): Record<string, string | string[]> {
  const out: Record<string, string | string[]> = {};
  for (const [key, value] of new URLSearchParams(search)) {
    const seen = out[key];
    out[key] = seen === undefined ? value : [...(Array.isArray(seen) ? seen : [seen]), value];
  }
  return out;
}
export function stringifySearch(search: Record<string, unknown>): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(search)) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item !== undefined) query.append(key, String(item));
    }
  }
  const text = query.toString();
  return text ? `?${text}` : "";
}

let hydrated = false;

/** Marks the end of hydration for `pageOrigin`. The router renders it around the app. */
export function MarkHydrated({ children }: { children: ReactNode }) {
  useEffect(() => {
    hydrated = true;
  }, []);
  return <>{children}</>;
}

/**
 * `window.location.origin` after hydration. The server and the hydrating
 * render use `siteOrigin`, so both render the same HTML.
 */
export function pageOrigin(siteOrigin: string): string {
  return typeof window !== "undefined" && hydrated ? window.location.origin : siteOrigin;
}

/** A TanStack location (`beforeLoad`'s `location`) in react-router's shape. */
export function routerPath(location: { pathname: string; searchStr: string; hash: string }): Path {
  return {
    pathname: location.pathname,
    search: location.searchStr,
    hash: location.hash ? `#${location.hash}` : "",
  };
}

const EXTERNAL = /^([a-z][a-z\d+.-]*:|\/\/)/i;

function splitPath(path: string): Path {
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const rest = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const searchAt = rest.indexOf("?");
  return {
    pathname: searchAt >= 0 ? rest.slice(0, searchAt) : rest,
    search: searchAt >= 0 ? rest.slice(searchAt) : "",
    hash,
  };
}

function joinRelative(relative: string[], base: string): string {
  const segments = base.split("/").filter(Boolean);
  for (const segment of relative) {
    if (segment === "..") segments.pop();
    else if (segment && segment !== ".") segments.push(segment);
  }
  return `/${segments.join("/")}`;
}

/**
 * An absolute href for `to`. A relative path resolves from the current
 * route, and each leading `..` goes up one route, as in react-router; with
 * `relative: "path"` it goes up one URL segment. A search-only `to` keeps the URL.
 */
function resolveHref(
  to: To,
  routeBases: string[],
  currentPathname: string,
  relative?: RelativeRoutingType,
): string {
  if (typeof to === "string" && EXTERNAL.test(to)) return to;
  const { pathname = "", search = "", hash = "" } = typeof to === "string" ? splitPath(to) : to;
  let resolved = currentPathname;
  if (pathname.startsWith("/")) resolved = pathname;
  else if (pathname) {
    const segments = pathname.split("/");
    let level = routeBases.length - 1;
    while (relative !== "path" && segments[0] === "..") {
      segments.shift();
      level--;
    }
    resolved = joinRelative(segments, routeBases[level] ?? "/");
  }
  const query = search && !search.startsWith("?") ? `?${search}` : search;
  const fragment = hash && !hash.startsWith("#") ? `#${hash}` : hash;
  return `${resolved}${query}${fragment}`;
}

/**
 * The pathname of each route from the root to the current one, then of each
 * `<Routes>` match. A pathless layout or an index route adds no level, as
 * react-router counts routes for `..`.
 */
function useRouteBases(): string[] {
  // One string, so the memo below changes only when a pathname does.
  const parents = useParentMatches({ select: (ms) => ms.map((m) => m.pathname).join("\n") });
  const own = useRouterMatch({ strict: false, shouldThrow: false, select: (m) => m.pathname });
  const matched = useContext(RoutesMatch).bases.join("\n");
  return useMemo(() => {
    const bases: string[] = [];
    for (const pathname of [
      ...parents.split("\n"),
      own ?? "/",
      ...(matched ? matched.split("\n") : []),
    ]) {
      const base = pathname.replace(/(.)\/$/, "$1") || "/";
      if (base !== bases.at(-1)) bases.push(base);
    }
    return bases;
  }, [parents, own, matched]);
}

// MemoryRouter's location. It never loads routes, so the router's own
// location stays where it started.
const MemoryLocation = createContext<ParsedLocation | undefined>(undefined);

// The rendered location, as react-router gives it: while a navigation is
// pending the old page keeps its own, so an effect that navigates on a
// location change does not run again for every pending one.
function useRouterLocation() {
  const memory = useContext(MemoryLocation);
  const routed = useRouterState({ select: (s) => s.resolvedLocation ?? s.location });
  return memory ?? routed;
}

export function useLocation(): Location {
  const location = useRouterLocation();
  return useMemo(() => {
    const state: Record<string, unknown> = { ...location.state };
    const { key, __TSR_key, __TSR_index, __hashScrollIntoViewOptions, ...user } = state;
    return {
      ...routerPath(location),
      state: Object.keys(user).length > 0 ? user : null,
      key: typeof key === "string" ? key : "default",
    };
  }, [location]);
}

export function useHref(to: To, { relative }: { relative?: RelativeRoutingType } = {}): string {
  const routeBases = useRouteBases();
  const { pathname } = useRouterLocation();
  return resolveHref(to, routeBases, pathname, relative);
}

export function useNavigate(): NavigateFunction {
  const router = useRouter();
  const routeBases = useRouteBases();
  const memory = useContext(MemoryLocation);
  return useCallback(
    (to: To | number, options: NavigateOptions = {}) => {
      if (typeof to === "number") {
        router.history.go(to);
        return;
      }
      // MemoryRouter never loads, so the latest location, which navigate()
      // checks against, only moves here.
      if (memory) router.updateLatestLocation();
      const current = router.latestLocation;
      const href = resolveHref(to, routeBases, current.pathname, options.relative);
      // An effect that navigates again to where a pending navigation goes
      // would restart it forever.
      if (router.state.status === "pending" && href === router.latestLocation.href) return;
      if (EXTERNAL.test(href)) {
        if (options.replace) window.location.replace(href);
        else window.location.assign(href);
        return;
      }
      void router.navigate({
        href,
        replace: options.replace,
        // Like react-router apps, stay put when only the search or hash changes.
        resetScroll: !options.preventScrollReset && splitPath(href).pathname !== current.pathname,
        ...(options.state === undefined ? {} : { state: options.state as never }),
      });
    },
    [router, routeBases, memory],
  ) as NavigateFunction;
}

export function useParams<
  P extends string | Record<string, string | undefined> = string,
>(): Readonly<[P] extends [string] ? Params<P> : Partial<P>> {
  const params = useRouterParams({ strict: false, shouldThrow: false }) as Params | undefined;
  const { params: matched } = useContext(RoutesMatch);
  return useMemo(() => {
    const { _splat, ...rest }: Params = params ?? {};
    return { ...(_splat === undefined ? rest : { ...rest, "*": _splat }), ...matched } as never;
  }, [params, matched]);
}

type SearchInit = string | URLSearchParams | Record<string, string | string[]> | [string, string][];

function toSearchParams(init: SearchInit | undefined): URLSearchParams {
  if (typeof init !== "object" || init instanceof URLSearchParams || Array.isArray(init)) {
    return new URLSearchParams(init);
  }
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(init)) {
    for (const item of Array.isArray(value) ? value : [value]) params.append(key, item);
  }
  return params;
}

export type SetURLSearchParams = (
  next: SearchInit | ((prev: URLSearchParams) => SearchInit),
  options?: NavigateOptions,
) => void;

export function useSearchParams(defaultInit?: SearchInit): [URLSearchParams, SetURLSearchParams] {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => {
    const current = new URLSearchParams(search);
    for (const [key, value] of toSearchParams(defaultInit)) {
      if (!current.has(key)) current.append(key, value);
    }
    return current;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- defaultInit only seeds missing keys
  }, [search]);
  const setParams = useCallback<SetURLSearchParams>(
    (next, options) => {
      const value =
        typeof next === "function" ? next(new URLSearchParams(window.location.search)) : next;
      const query = toSearchParams(value).toString();
      navigate({ search: query ? `?${query}` : "" }, options);
    },
    [navigate],
  );
  return [params, setParams];
}

type PathPattern = { path: string; caseSensitive?: boolean; end?: boolean };

export interface PathMatch {
  params: Params;
  pathname: string;
  pattern: PathPattern;
}

export function matchPath(pattern: string | PathPattern, pathname: string): PathMatch | null {
  const options = typeof pattern === "string" ? { path: pattern } : pattern;
  const names: string[] = [];
  const base = options.path.replace(/\/*\*?$/, "").replace(/^\/*/, "/");
  let source =
    "^" +
    // `/` with `end: false` matches every path.
    (base === "/" && options.end === false ? "" : base)
      .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
      .replace(/\/:([\w-]+)(\?)?/g, (_match, name: string, optional?: string) => {
        names.push(name);
        return optional ? "(?:/([^\\/]+))?" : "/([^\\/]+)";
      });
  if (options.path.endsWith("*")) {
    names.push("*");
    source += options.path === "*" || options.path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    source += options.end === false ? "(?:(?=\\/|$))" : "\\/*$";
  }
  const match = new RegExp(source, options.caseSensitive ? undefined : "i").exec(pathname);
  if (!match) return null;
  const params = Object.fromEntries(
    names.map((name, i) => [
      name,
      match[i + 1] === undefined ? undefined : safeDecode(match[i + 1]!),
    ]),
  );
  return { params, pathname: match[0] || "/", pattern: options };
}

// The router's pathname is already decoded, except `%25`; a lone `%` stays as is.
function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function useMatch(pattern: string | PathPattern): PathMatch | null {
  const { pathname } = useLocation();
  return useMemo(() => matchPath(pattern, pathname), [pattern, pathname]);
}

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: To;
  replace?: boolean;
  state?: unknown;
  reloadDocument?: boolean;
  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
  viewTransition?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    to,
    replace,
    state,
    reloadDocument,
    preventScrollReset,
    relative,
    viewTransition,
    onClick,
    target,
    ...rest
  },
  ref,
) {
  const href = useHref(to, { relative });
  const navigate = useNavigate();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || reloadDocument || EXTERNAL.test(href)) return;
    if (event.button !== 0 || (target && target !== "_self")) return;
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    navigate(href, { replace, state, preventScrollReset });
  };
  return <a {...rest} ref={ref} href={href} target={target} onClick={handleClick} />;
});

export interface NavLinkRenderProps {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}
export interface NavLinkProps extends Omit<LinkProps, "className" | "style" | "children"> {
  className?: string | ((props: NavLinkRenderProps) => string | undefined);
  style?: CSSProperties | ((props: NavLinkRenderProps) => CSSProperties | undefined);
  children?: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
  end?: boolean;
  caseSensitive?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { className, style, children, end, caseSensitive, ...rest },
  ref,
) {
  const { pathname } = useLocation();
  const target = splitPath(useHref(rest.to, { relative: rest.relative })).pathname;
  const current = caseSensitive ? pathname : pathname.toLowerCase();
  const wanted = caseSensitive ? target : target.toLowerCase();
  const slashAt = wanted !== "/" && wanted.endsWith("/") ? wanted.length - 1 : wanted.length;
  const isActive =
    current === wanted || (!end && current.startsWith(wanted) && current.charAt(slashAt) === "/");
  const renderProps = { isActive, isPending: false, isTransitioning: false };
  const resolvedClass =
    typeof className === "function"
      ? className(renderProps)
      : [className, isActive ? "active" : undefined].filter(Boolean).join(" ") || undefined;
  return (
    <Link
      {...rest}
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={resolvedClass}
      style={typeof style === "function" ? style(renderProps) : style}
    >
      {typeof children === "function" ? children(renderProps) : children}
    </Link>
  );
});

export function Navigate({ to, replace, state, relative }: { to: To } & NavigateOptions) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace, state, relative });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- navigate once, like react-router
  }, []);
  return null;
}

const OutletContext = createContext<unknown>(undefined);

export function Outlet({ context }: { context?: unknown }) {
  if (context === undefined) return <RouterOutlet />;
  return (
    <OutletContext.Provider value={context}>
      <RouterOutlet />
    </OutletContext.Provider>
  );
}

export function useOutletContext<T = unknown>(): T {
  return useContext(OutletContext) as T;
}

export interface RouteProps {
  path?: string;
  index?: boolean;
  element?: ReactNode;
  children?: ReactNode;
}

/** A `<Route>` inside `<Routes>` or route-building code. It renders nothing; its props are read. */
export function Route(_props: RouteProps): null {
  return null;
}

/**
 * The element of a `<Route>` that `routes()` returns, found by the key of each
 * route down to it (its path, `""` for an index route, null for a pathless
 * one) and its position among the sibling routes with that key. A route file
 * renders it for a route the old app built in code the migration could not copy.
 */
export function BuiltRoute({
  routes,
  at,
}: {
  routes: () => ReactNode;
  at: [string | null, number][];
}) {
  let level: ReactNode = routes();
  let route: ReactElement<RouteProps> | undefined;
  for (const [key, n] of at) {
    route = routeElements(level).filter(({ props }) =>
      key === "" ? props.index : key === null ? !props.index && !props.path : props.path === key,
    )[n];
    if (!route) return null;
    level = route.props.children;
  }
  return route?.props.element ?? null;
}

/** The `<Route>` elements of `node`, with fragments flattened. */
function routeElements(node: ReactNode): ReactElement<RouteProps>[] {
  return Children.toArray(node).flatMap((child) => {
    if (!isValidElement<RouteProps>(child)) return [];
    return child.type === Fragment ? routeElements(child.props.children) : [child];
  });
}

// The params and the pathname of each `<Route>` the `<Routes>` above matched.
const RoutesMatch = createContext<{ params: Params; bases: string[] }>({ params: {}, bases: [] });

// react-router's route ranking: static segments beat params, a `*` comes last.
function routeScore(path: string, index?: boolean): number {
  const segments = path.split("/");
  let score = segments.length + (index ? 2 : 0) + (segments.includes("*") ? -2 : 0);
  for (const segment of segments) {
    if (segment === "*") continue;
    if (segment.startsWith(":")) score += 3;
    else score += segment === "" ? 1 : 10;
  }
  return score;
}

// react-router scores each path an optional segment allows on its own: `/a/:id?` is `/a/:id` and `/a`.
function explodeOptional(pattern: string): string[] {
  let paths = [""];
  for (const segment of pattern.split("/").slice(1)) {
    const required = segment.replace(/\?$/, "");
    paths = paths.flatMap((path) =>
      required === segment ? [`${path}/${segment}`] : [`${path}/${required}`, path],
    );
  }
  return paths.map((path) => path || "/");
}

/**
 * Renders the best-ranked `<Route>` child whose path matches. An absolute path
 * matches the URL; a relative one matches the rest of it under a `*` route.
 */
export function Routes({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const { "*": rest } = useParams();
  const parent = useContext(RoutesMatch);
  let best: { score: number; element: ReactNode; params: Params; base: string } | undefined;
  for (const route of routeElements(children)) {
    const { path = "", index, element } = route.props;
    const url = path.startsWith("/") || rest === undefined ? pathname : `/${rest}`;
    for (const pattern of explodeOptional(index ? "/" : path.replace(/^\/?/, "/"))) {
      const score = routeScore(pattern, index);
      const match = matchPath(pattern, url);
      if (!match || (best && best.score >= score)) continue;
      // A `*` route's base is the part before the `*`, as relative links resolve from it.
      const matched =
        matchPath({ path: pattern.replace(/\/?\*$/, ""), end: false }, url)?.pathname ?? "/";
      const prefix = pathname.slice(0, pathname.length - url.length);
      const base = `${prefix}${matched}`.replace(/(.)\/$/, "$1");
      best = { score, element, params: match.params, base };
    }
  }
  return best ? (
    <RoutesMatch.Provider value={{ params: best.params, bases: [...parent.bases, best.base] }}>
      {best.element}
    </RoutesMatch.Provider>
  ) : null;
}

/**
 * react-router's `MemoryRouter`: its children render at once, at
 * `initialEntries`, and each navigation updates the location right away.
 */
export function MemoryRouter({
  children,
  initialEntries = ["/"],
  initialIndex,
}: {
  children?: ReactNode;
  initialEntries?: (string | Partial<Location>)[];
  initialIndex?: number;
}) {
  const [router] = useState(() => {
    const hrefs = initialEntries.map((e) =>
      typeof e === "string" ? e : `${e.pathname ?? "/"}${e.search ?? ""}${e.hash ?? ""}`,
    );
    const history = createMemoryHistory({ initialEntries: hrefs });
    // The history reads an `initialIndex` of 0 as unset.
    const index = Math.min(Math.max(initialIndex ?? hrefs.length, 0), hrefs.length - 1);
    history.go(index - (hrefs.length - 1));
    const current = initialEntries[index];
    if (typeof current === "object" && current.state != null) {
      history.replace(history.location.href, current.state as never);
    }
    const root = createRootRoute();
    return createRouter({
      routeTree: root.addChildren([createRoute({ getParentRoute: () => root, path: "$" })]),
      history,
      parseSearch,
      stringifySearch,
    });
  });
  const read = () => router.history.location;
  const entry = useSyncExternalStore(router.history.subscribe, read, read);
  const location = useMemo(() => router.parseLocation(entry), [router, entry]);
  return (
    <RouterContextProvider router={router}>
      <MemoryLocation.Provider value={location}>{children}</MemoryLocation.Provider>
    </RouterContextProvider>
  );
}

export type NavigationType = "POP" | "PUSH" | "REPLACE";

/** How the last navigation happened: back and forward are `POP`, like the first page. */
export function useNavigationType(): NavigationType {
  const router = useRouter();
  const [type, setType] = useState<NavigationType>("POP");
  useEffect(
    () =>
      router.history.subscribe(({ action }: { action: { type: string } }) => {
        setType(action.type === "PUSH" || action.type === "REPLACE" ? action.type : "POP");
      }),
    [router],
  );
  return type;
}
