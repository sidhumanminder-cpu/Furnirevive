import VisibleBeforeHydration from "@/components/visible-before-hydration.tsx";
import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ConvexQueryClient } from "@convex-dev/react-query";
import type { ConvexReactClient } from "convex/react";
import { getAuthAction, getIdTokenAction } from "@usehercules/auth-tanstack";
import type { ClientUserInfo, NoUserInfo } from "@usehercules/auth-tanstack";
import ConvexAppProvider from "@/components/providers/convex.tsx";
import RouteError from "@/components/route-error.tsx";
import { useAuthErrorToast } from "@/hooks/use-auth-error-toast.ts";
import App from "@/app-shell.tsx";
import { siteOrigin } from "@/lib/site-origin.ts";
import NotFound from "@/pages/NotFound.tsx";
import appCss from "@/index.css?url";



function canonicalUrl(pathname: string): string {
  return siteOrigin() + (pathname.length > 1 ? pathname.replace(/[/]+$/, "") : "/");
}

// The client reuses one session snapshot across navigations (`getAuthAction`
// is a round trip) until it is a minute old or the tab was hidden.
const CLIENT_AUTH_TTL_MS = 60_000;

let clientAuth:
  | { promise: Promise<ClientUserInfo | NoUserInfo>; fetchedAt: number }
  | undefined;
let clearsOnHide = false;

function getClientAuth(): Promise<ClientUserInfo | NoUserInfo> {
  if (!clearsOnHide) {
    clearsOnHide = true;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") clientAuth = undefined;
    });
  }
  const now = Date.now();
  if (clientAuth === undefined || now - clientAuth.fetchedAt > CLIENT_AUTH_TTL_MS) {
    const promise = getAuthAction().catch((error: unknown) => {
      // Don't cache a rejection: let the next navigation retry.
      if (clientAuth?.promise === promise) clientAuth = undefined;
      throw error;
    });
    clientAuth = { promise, fetchedAt: now };
  }
  return clientAuth.promise;
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexClient: ConvexReactClient;
  convexQueryClient: ConvexQueryClient;
}>()({
  // During SSR the ID token authenticates the server Convex client; only the
  // sanitized session reaches the browser.
  beforeLoad: async (ctx) => {
    const serverHttpClient = ctx.context.convexQueryClient.serverHttpClient;
    if (serverHttpClient) {
      const [auth, idToken] = await Promise.all([getAuthAction(), getIdTokenAction()]);
      if (idToken) serverHttpClient.setAuth(idToken);
      return { auth };
    }
    return { auth: await getClientAuth() };
  },
  // Site-wide tags from the old index.html, and each page's canonical URL.
  // Pages add their own title, description and robots in their route's head().
  head: ({ matches }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Sofa, Furniture & Chair Repair in Delhi NCR | FurniRevive" },
      {"name":"msvalidate.01","content":"1395DACDD6C813303889816D3B2328EC"},
      {"name":"description","content":"Doorstep sofa, furniture, chair &amp; bed repair, wood polish &amp; carpenter service across Delhi NCR. 4.9★ rated. 10,000+ sofas repaired since 2016. Same-day."},
      {"name":"google-site-verification","content":"vGjpZ264w7BU2kY-NL5eyFDiBa6CuKhg8ldeB6t5uZM"},
      {"name":"author","content":"FurniRevive"},
      {"name":"keywords","content":"furniture repair delhi, sofa repair near me, carpenter near me, furniture repair delhi ncr, sofa repair delhi, chair repair delhi, wood polish delhi, bed repair delhi, carpenter home service delhi, furniture repair noida, furniture repair gurgaon, chair repair near me, bed repair near me"},
      {"property":"og:title","content":"Sofa, Furniture &amp; Chair Repair in Delhi NCR | FurniRevive"},
      {"property":"og:description","content":"Doorstep sofa, furniture, chair &amp; bed repair, wood polish &amp; carpenter service across Delhi NCR. 4.9★ rated. 10,000+ sofas repaired since 2016. Same-day."},
      {"property":"og:type","content":"website"},
      {"property":"og:image","content":"https://hercules-cdn.com/cdn-cgi/image/w=1200,h=630,q=85,fit=cover,format=auto/file_1dBth9xZXL7ISsww165M6X3J"},
      {"property":"og:image:type","content":"image/png"},
      {"name":"twitter:card","content":"summary_large_image"},
      {"name":"twitter:description","content":"Doorstep sofa, furniture, chair &amp; bed repair, wood polish &amp; carpenter service across Delhi NCR. 4.9★ rated. 10,000+ sofas repaired since 2016. Same-day."},
      {"name":"twitter:image","content":"https://hercules-cdn.com/cdn-cgi/image/w=1200,h=630,q=85,fit=cover,format=auto/file_1dBth9xZXL7ISsww165M6X3J"},
    ],
    links: [
      ...(matches.at(-1)?.staticData?.ownCanonical
        ? []
        : [{ rel: "canonical", href: canonicalUrl(matches.at(-1)?.pathname ?? "/") }]),
      {"rel":"sitemap","type":"application/xml","href":"/sitemap.xml"},
      {"rel":"icon","type":"image/svg+xml","href":"\"data:image/svg+xml,<svg","xmlns":"http://www.w3.org/2000/svg","viewbox":"0 0 100 100"},
      {"rel":"preconnect","href":"https://fonts.googleapis.com"},
      {"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"},
      {"href":"https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap","rel":"stylesheet","crossOrigin":"anonymous"},
      { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: RootRouteError,
  notFoundComponent: NotFoundPage,
  component: RootComponent,
  shellComponent: RootDocument,
});

function RootComponent() {
  const { convexClient, auth } = Route.useRouteContext();
  useAuthErrorToast(auth.user !== null);
  return (
    <ConvexAppProvider client={convexClient} initialAuth={auth}>
      <VisibleBeforeHydration>
        <App />
      </VisibleBeforeHydration>
    </ConvexAppProvider>
  );
}

// Scripts from the old index.html stay plain elements here, so they run once
// per page load. Never move them into head().scripts: those re-run on every
// client navigation.
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17387565456" />
        <script dangerouslySetInnerHTML={{ __html: "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-6Z44V0B67N');\n      gtag('config', 'AW-17387565456');\n    " }} />
        <script dangerouslySetInnerHTML={{ __html: "\n      (function () {\n        try {\n          var path = window.location.pathname.replace(/\\/$/, \"\") || \"/\";\n          var canonical = document.getElementById(\"canonical-tag\");\n          if (canonical) {\n            canonical.href = \"https://furnirevive.com\" + path;\n          }\n        } catch (e) {}\n      })();\n    " }} />
        <script dangerouslySetInnerHTML={{ __html: "\n      (function () {\n        try {\n          var theme = localStorage.getItem(\"theme\");\n          if (theme === \"system\" || !theme) {\n            var prefersDark = window.matchMedia(\n              \"(prefers-color-scheme: dark)\",\n            ).matches;\n            theme = prefersDark ? \"dark\" : \"light\";\n          }\n          document.documentElement.classList.add(theme);\n        } catch (e) {}\n      })();\n    " }} />
      </head>
      <body>
        {children}
        
        <Scripts />
      </body>
    </html>
  );
}

function RootRouteError(props: ErrorComponentProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <RouteError {...props} />
    </div>
  );
}

function NotFoundPage() {
  return (
    <>
      <meta name="robots" content="noindex" />
      <NotFound />
    </>
  );
}

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    /** The route's head() sets the canonical URL the old page had. */
    ownCanonical?: boolean;
  }
}
