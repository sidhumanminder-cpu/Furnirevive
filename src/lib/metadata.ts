/**
 * Shared metadata utility for kitchen templates.
 *
 * Prevents duplicate meta tags by always updating existing elements that are
 * already present in index.html (description, og:title, og:description,
 * og:type, og:image, twitter:card, canonical) rather than appending new ones.
 *
 * Tags absent from index.html (og:url, og:site_name, twitter:title,
 * twitter:description, twitter:image) are created only when not already
 * present, and removed on cleanup.
 *
 * Usage (inside useEffect):
 *   const cleanup = setPageMetadata({ title, description, canonical, ... });
 *   return cleanup; // or call it alongside JSON-LD cleanup
 */

export type PageMetadataOpts = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export function setPageMetadata(opts: PageMetadataOpts): () => void {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogType,
    ogImage,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = opts;

  // ── document.title ──────────────────────────────────────────────────────────
  const prevTitle = document.title;
  document.title = title;

  // ── Update tags that already exist in index.html ────────────────────────────
  // Returns the previous content value so cleanup can restore it.
  function updateMeta(selector: string, value: string): string | null {
    const el = document.querySelector(selector);
    if (!el) return null;
    const prev = el.getAttribute("content");
    el.setAttribute("content", value);
    return prev;
  }

  const prevDescription = updateMeta('meta[name="description"]', description);
  const prevOgTitle = updateMeta('meta[property="og:title"]', ogTitle ?? title);
  const prevOgDescription = updateMeta('meta[property="og:description"]', ogDescription ?? description);
  const prevOgType = updateMeta('meta[property="og:type"]', ogType ?? "website");
  const prevOgImage = ogImage != null ? updateMeta('meta[property="og:image"]', ogImage) : undefined;
  const prevTwitterCard = twitterCard != null ? updateMeta('meta[name="twitter:card"]', twitterCard) : undefined;

  // ── Canonical: always update in place — never create a second one ────────────
  const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const prevCanonical = canonicalEl?.href ?? null;
  if (canonicalEl) canonicalEl.href = canonical;

  // ── Tags NOT in index.html: create only when absent ─────────────────────────
  const created: HTMLMetaElement[] = [];
  function setOrCreate(attrName: string, attrVal: string, content: string) {
    const existing = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (existing) {
      existing.setAttribute("content", content);
    } else {
      const el = document.createElement("meta");
      el.setAttribute(attrName, attrVal);
      el.setAttribute("content", content);
      document.head.appendChild(el);
      created.push(el);
    }
  }

  if (ogUrl != null) setOrCreate("property", "og:url", ogUrl);
  if (ogSiteName != null) setOrCreate("property", "og:site_name", ogSiteName);
  if (twitterTitle != null) setOrCreate("name", "twitter:title", twitterTitle);
  if (twitterDescription != null) setOrCreate("name", "twitter:description", twitterDescription);
  if (twitterImage != null) setOrCreate("name", "twitter:image", twitterImage);

  // ── Cleanup: restore originals, remove created tags ─────────────────────────
  return () => {
    document.title = prevTitle;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && prevDescription !== null) descEl.setAttribute("content", prevDescription);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl && prevOgTitle !== null) ogTitleEl.setAttribute("content", prevOgTitle);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl && prevOgDescription !== null) ogDescEl.setAttribute("content", prevOgDescription);

    const ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (ogTypeEl && prevOgType !== null) ogTypeEl.setAttribute("content", prevOgType);

    if (ogImage != null && prevOgImage !== undefined) {
      const ogImgEl = document.querySelector('meta[property="og:image"]');
      if (ogImgEl && prevOgImage !== null) ogImgEl.setAttribute("content", prevOgImage);
    }

    if (twitterCard != null && prevTwitterCard !== undefined) {
      const twCardEl = document.querySelector('meta[name="twitter:card"]');
      if (twCardEl && prevTwitterCard !== null) twCardEl.setAttribute("content", prevTwitterCard);
    }

    const canonEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonEl && prevCanonical !== null) canonEl.href = prevCanonical;

    created.forEach((el) => el.remove());
  };
}
