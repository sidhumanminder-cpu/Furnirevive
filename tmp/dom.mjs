import { chromium } from "@playwright/test";
const routes = ["/sofa-repair-sector-56-gurgaon","/sofa-upholstery-adarsh-nagar-delhi","/furniture-repair-jor-bagh","/","/modular-kitchen/kitchen-10x8","/modular-kitchen/budget","/modular-kitchen/cost-delhi","/blog/sofa-repair-cost-delhi","/contact","/book"];
const b = await chromium.launch({ executablePath: "/usr/bin/chromium", args: ["--no-sandbox","--headless=new","--disable-gpu","--disable-dev-shm-usage"] });
const out = {};
for (const r of routes) {
  const p = await b.newPage();
  try {
    await p.goto("http://127.0.0.1:5199" + r, { waitUntil: "load", timeout: 40000 });
    await p.waitForTimeout(3500);
    out[r] = await p.evaluate(() => {
      const nodes = [];
      const walk = (x) => { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === "object") { if (x["@type"]) nodes.push(x); walk(x["@graph"]); } };
      const blocks = [...document.head.querySelectorAll('script[type="application/ld+json"]')].map((s) => { let j = null; try { j = JSON.parse(s.textContent); } catch {} if (j) walk(j); return { fallback: s.hasAttribute("data-business-fallback"), types: j ? (j["@graph"] ? j["@graph"].map((n) => n["@type"]) : [j["@type"]]) : "INVALID" }; });
      const biz = nodes.filter((n) => /LocalBusiness|HomeAndConstruction/.test(String(n["@type"])));
      return { blocks: blocks.length, fallbackBlocks: blocks.filter((x) => x.fallback).length, businessNodes: biz.length, blockTypes: blocks, business: biz.map((n) => ({ "@type": n["@type"], name: n.name, url: n.url, address: n.address?.addressLocality + ", " + n.address?.postalCode, areaServed: (n.areaServed || []).length, aggregateRating: !!n.aggregateRating })) };
    });
  } catch (e) { out[r] = { error: String(e).slice(0, 160) }; }
  await p.close();
}
await b.close();
console.log(JSON.stringify(out, null, 1));
