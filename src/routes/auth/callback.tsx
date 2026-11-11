import { createFileRoute } from "@tanstack/react-router";
import { AUTH_ERROR_PARAM, handleCallbackRoute } from "@usehercules/auth-tanstack";
import { api } from "@/convex/_generated/api.js";
import { publicConvexClient } from "@/lib/convex-server.ts";

// The old sign-in page showed the error `updateCurrentUser` threw (for example
// an account the app refuses). Here the same error stops the sign-in and
// `/auth/error` shows it; provider errors return to the page with `auth_error`.
async function syncCurrentUser(idToken: string | undefined): Promise<void> {
  if (!idToken) return;
  const client = publicConvexClient();
  client.setAuth(idToken);
  await client.mutation(api.users.updateCurrentUser, {});
}

function errorMessage(error: unknown): string {
  const cause = error instanceof Error && error.cause !== undefined ? error.cause : error;
  const data = (cause as { data?: unknown } | null)?.data;
  if (typeof data === "string") return data;
  if (cause instanceof Error) return cause.message;
  return "Sign-in didn't complete. Please try again.";
}

function redirectTo(location: string): Response {
  return new Response(null, { status: 302, headers: { location, "cache-control": "no-store" } });
}

export const Route = createFileRoute("/auth/callback")({
  server: {
    handlers: {
      GET: handleCallbackRoute({
        onSuccess: ({ idToken }) => syncCurrentUser(idToken),
        onError: ({ reason, error, returnPathname }) => {
          if (reason === "on_success_failed") {
            return redirectTo(`/auth/error?message=${encodeURIComponent(errorMessage(error))}`);
          }
          const back = returnPathname?.startsWith("/") ? returnPathname : "/";
          const url = new URL(back, "https://app.invalid");
          url.searchParams.set(AUTH_ERROR_PARAM, reason);
          return redirectTo(url.pathname + url.search + url.hash);
        },
      }),
      ANY: () => new Response(null, { status: 405, headers: { allow: "GET, HEAD" } }),
    },
  },
});
