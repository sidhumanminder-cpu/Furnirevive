import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button.tsx";

const RELOAD_FLAG = "chunk-reload-attempted";
const CHUNK_ERROR = /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|Loading chunk .* failed/i;

type State = { failed: boolean };

/**
 * Catches failed lazy page imports (usually a new deploy replaced the old files). Reloads once per
 * browser session to pick up the new build; if it fails again, shows a retry button instead of looping.
 */
export default class ChunkErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Page failed to load:", error, info.componentStack);
    if (!CHUNK_ERROR.test(error.message) || sessionStorage.getItem(RELOAD_FLAG)) return;
    sessionStorage.setItem(RELOAD_FLAG, "1");
    window.location.reload();
  }

  componentDidMount() {
    // A page that loads fine for a while clears the guard so a later deploy can reload again.
    window.setTimeout(() => sessionStorage.removeItem(RELOAD_FLAG), 10_000);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">This page could not load</h1>
          <p className="text-muted-foreground">Please check your connection and try again.</p>
          <Button onClick={() => window.location.reload()}>Reload page</Button>
        </div>
      </div>
    );
  }
}
