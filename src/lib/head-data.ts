import { convexQuery, type ConvexQueryClient } from "@convex-dev/react-query";
import type { QueryClient } from "@tanstack/react-query";
import { notFound, redirect } from "@tanstack/react-router";
import type { FunctionReference } from "convex/server";

// Server rendering waits this long for the data a page's tags need; after
// that the page keeps its default tags and the browser loads the data.
const SERVER_TIMEOUT_MS = 3000;

type Step = string | number | { call: string; args: unknown[] };
type Ref = [number, ...Step[]];
type Query = [FunctionReference<"query">, Record<string, unknown>];
type Context = { queryClient: QueryClient; convexQueryClient: ConvexQueryClient };

const STRING_METHODS = new Set([
  "slice",
  "substring",
  "substr",
  "trim",
  "trimStart",
  "trimEnd",
  "toUpperCase",
  "toLowerCase",
  "replace",
  "replaceAll",
  "split",
  "join",
  "at",
  "toString",
  "toFixed",
  "padStart",
  "padEnd",
  "concat",
  "charAt",
]);

function pick(results: unknown[], [index, ...steps]: Ref): unknown {
  let value: unknown = results[index];
  for (const step of steps) {
    if (value === null || value === undefined) return undefined;
    if (typeof step === "object") {
      const method = (value as Record<string, unknown>)[step.call];
      if (!STRING_METHODS.has(step.call) || typeof method !== "function") return undefined;
      value = (method as (...args: unknown[]) => unknown).apply(value, step.args);
    } else value = (value as Record<string | number, unknown>)[step];
  }
  return value;
}

/**
 * One query's result. On the server it asks Convex directly, outside the
 * query cache, so the page HTML embeds only what the loader returns. In the
 * browser it reads what is already cached and never delays navigation.
 */
async function queryOnce(
  context: Context,
  query: FunctionReference<"query">,
  args: Record<string, unknown>,
): Promise<unknown> {
  if (typeof window !== "undefined") {
    return context.queryClient.getQueryData(convexQuery(query, args).queryKey);
  }
  const client = context.convexQueryClient.serverHttpClient;
  if (!client) return undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      client.query(query, args),
      new Promise<undefined>((resolve) => {
        timer = setTimeout(() => resolve(undefined), SERVER_TIMEOUT_MS);
      }),
    ]);
  } catch {
    return undefined;
  } finally {
    clearTimeout(timer);
  }
}

/** Loads the Convex data a page's tags use and returns only the picked values. */
export async function loadHeadData(
  context: Context,
  queries: Query[],
  refs: Ref[],
): Promise<unknown[]> {
  const results = await Promise.all(
    queries.map(([query, args]) => queryOnce(context, query, args)),
  );
  return refs.map((ref) => pick(results, ref) ?? null);
}

const missing = (value: unknown) => value === undefined || value === null || value === "";

/** Joins like a template literal; returns `fallback` when a value is missing. */
export function headText(
  strings: string[],
  values: unknown[],
  fallback?: string,
): string | undefined {
  if (values.some(missing)) return fallback;
  return strings.reduce((out, s, i) => out + s + (i < values.length ? String(values[i]) : ""), "");
}

/** The JSON-LD object, or undefined when a value it needs is missing. */
export function headLd<T>(
  values: unknown[] | undefined,
  needed: number[],
  object: T,
): T | undefined {
  return needed.some((i) => missing(values?.[i])) ? undefined : object;
}

/** Drops tags whose value is missing. */
export function headMeta<T extends Record<string, unknown>>(tags: T[]): T[] {
  return tags.filter((tag) =>
    Object.entries(tag).every(
      ([key, value]) => key === "rel" || key === "hrefLang" || !missing(value),
    ),
  );
}

/** A route's own tags, then the ones it loads from data, which win by coming last. */
export function withDataTags<T extends { meta?: unknown[] }>(head: T, tags: unknown[]): T {
  return tags.length ? ({ ...head, meta: [...(head.meta ?? []), ...tags] } as T) : head;
}

/** The value for this language, or the default language's value. */
export function headLang<T>(lng: string | undefined, table: Record<string, T>, fallback: T): T {
  return lng !== undefined && Object.hasOwn(table, lng) ? table[lng] : fallback;
}

/**
 * Throws notFound() when the lookup for a URL param returns null, so an
 * unknown value is the not-found page with a 404, or redirects to
 * `redirectTo` when the old page sent an unknown value there. A query that
 * fails or is slow renders the page as before.
 */
export async function notFoundUnless(
  context: Context,
  query: FunctionReference<"query">,
  args: Record<string, unknown>,
  redirectTo?: string,
): Promise<void> {
  const value = await queryOnce(context, query, args);
  if (value === null)
    throw redirectTo ? redirect({ href: redirectTo, statusCode: 302 }) : notFound();
}
