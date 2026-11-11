import { SITE_ORIGIN } from "@/lib/site-origin.ts";
import SITEMAP from "./sitemap.xml?raw";

// robots.txt from the old app. Its Sitemap lines follow this app's own.
const ROBOTS = "User-agent: *\nAllow: /";
const OLD_SITEMAP_LINES = "";
// Old public/ pages a redirect route shadows (`/staff` and `/staff/`
// redirect, the file answered only at `/staff/index.html`), served at their own path.
const PUBLIC_PAGES: Record<string, string> = {};
const SLASH_REDIRECTS: Record<string, string> = {};

function xml(body: string): Response {
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}

/** robots.txt, sitemap.xml and shadowed public pages, answered before the app renders. */
export async function seoFileResponse(request: Request): Promise<Response | undefined> {
  if (request.method !== "GET" && request.method !== "HEAD") return undefined;
  const { pathname, origin: requestOrigin } = new URL(request.url);
  const origin = SITE_ORIGIN || requestOrigin;
  const publicPage = PUBLIC_PAGES[pathname];
  if (publicPage !== undefined) {
    return new Response(publicPage, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
  const redirectTo = SLASH_REDIRECTS[pathname];
  if (redirectTo !== undefined) return new Response(null, { status: 301, headers: { location: redirectTo } });
  if (pathname === "/robots.txt") {
    return new Response(`${ROBOTS}\n\nSitemap: ${origin}/sitemap.xml\n${OLD_SITEMAP_LINES}`, {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }
  if (pathname === "/sitemap.xml") return xml(SITEMAP);
  return undefined;
}
