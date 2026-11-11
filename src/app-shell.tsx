import { Outlet } from "@tanstack/react-router";
import { useLocation } from "@/lib/router-compat.tsx";
import { Suspense, useEffect } from "react";

// DEV-only: cross-cluster authority audit (tree-shaken in production)
if (import.meta.env.DEV) {
  import("@/lib/seoConfigs/authority-audit.ts");
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import { DefaultProviders } from "./components/providers/default.tsx";
import ChunkErrorBoundary from "./components/chunk-error-boundary.tsx";
import FloatingTestimonial from "./components/floating-testimonial.tsx";
import BusinessSchemaFallback from "./components/business-schema-fallback.tsx";
import FloatingWhatsApp from "./components/floating-whatsapp.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <>
        <ScrollToTop />
        <BusinessSchemaFallback />
        <ChunkErrorBoundary>
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Outlet />
        </Suspense>
        </ChunkErrorBoundary>
        <FloatingTestimonial />
        <FloatingWhatsApp />
      </>
    </DefaultProviders>
  );
}
