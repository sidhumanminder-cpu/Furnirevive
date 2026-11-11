import { createFileRoute } from "@tanstack/react-router";

// Shows why `/auth/callback` refused the sign-in, as the old sign-in page did.
// Only messages the app throws show; other `?message=` text shows the generic
// one, so a link can't put its own words on this page.
const KNOWN_MESSAGES: string[] = [];
const GENERIC_MESSAGE = "Sign-in didn't complete. Please try again.";

export const Route = createFileRoute("/auth/error")({
  validateSearch: (search: Record<string, unknown>) => ({
    message:
      typeof search.message === "string" && KNOWN_MESSAGES.includes(search.message)
        ? search.message
        : undefined,
  }),
  head: () => ({
    meta: [{ title: "Unable to sign you in" }, { name: "robots", content: "noindex" }],
  }),
  component: AuthError,
});

function AuthError() {
  const { message } = Route.useSearch();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex max-w-md flex-col gap-2">
        <p className="text-lg font-semibold">Unable to sign you in</p>
        <p className="text-muted-foreground text-sm break-words whitespace-pre-wrap">
          {message ?? GENERIC_MESSAGE}
        </p>
      </div>
      <div className="flex gap-3">
        <a className="rounded-md border px-4 py-2 text-sm" href="/">
          Return home
        </a>
        <a
          className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm"
          href="/auth/sign-in"
        >
          Try again
        </a>
      </div>
    </div>
  );
}
