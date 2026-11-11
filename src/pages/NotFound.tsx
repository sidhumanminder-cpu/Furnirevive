import { useEffect } from "react";
import { Link, useLocation } from "@/lib/router-compat.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function NotFound() {
  const location = useLocation();

  // Tell crawlers (and the prerender service) this is a real 404, not an indexable page.
  useEffect(() => {
    const tags = [
      { name: "robots", content: "noindex" },
      { name: "prerender-status-code", content: "404" },
    ].map(({ name, content }) => {
      const meta = document.createElement("meta");
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
      return meta;
    });
    return () => tags.forEach((m) => m.remove());
  }, []);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          This page does not exist.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
