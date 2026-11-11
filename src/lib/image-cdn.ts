const CDN_FILE = /^https:\/\/hercules-cdn\.com\/(file_[A-Za-z0-9]+)$/;

type CdnImageOptions = { w: number; h?: number; q?: number };

/**
 * Returns a resized/compressed Hercules CDN URL (auto WebP/AVIF). Other hosts and URLs
 * that already carry cdn-cgi/image options are returned unchanged.
 */
export function cdnImage(url: string, { w, h, q = 75 }: CdnImageOptions): string {
  if (url.includes("cdn-cgi/image")) return url;
  const match = CDN_FILE.exec(url);
  if (!match) return url;
  const opts = [`w=${w}`, `q=${q}`, "format=auto"];
  if (h) opts.push(`h=${h}`, "fit=cover");
  return `https://hercules-cdn.com/cdn-cgi/image/${opts.join(",")}/${match[1]}`;
}
