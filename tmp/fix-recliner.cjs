const fs = require("fs");
const path = require("path");
const DIR = "src/lib/seo-pages";
const DRY = process.argv[2] === "dry";
const log = [];
const unsure = [];
const touchedFiles = new Set();
let pages = 0;

const needsFix = (s) => /sofa/i.test(s) && !/recliner/i.test(s);

for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".ts"))) {
  const p = path.join(DIR, f);
  let src = fs.readFileSync(p, "utf8");
  const slugRe = /\bslug:\s*"([^"]+)"/g;
  const marks = [];
  let m;
  while ((m = slugRe.exec(src))) marks.push({ slug: m[1], idx: m.index });
  const edits = []; // {start,end,text}
  marks.forEach((mk, i) => {
    if (!/recliner/i.test(mk.slug)) return;
    const end = i + 1 < marks.length ? marks[i + 1].idx : src.length;
    const region = src.slice(mk.idx, end);
    const bm = /showcaseImage:\s*\{[\s\S]*?\n\s*\},/.exec(region);
    if (!bm) return;
    const block = bm[0];
    const get = (k) => {
      const r = new RegExp("(\\b" + k + ":\\s*)\"((?:[^\"\\\\]|\\\\.)*)\"").exec(block);
      return r;
    };
    const h = get("heading"), a = get("altText"), c = get("caption");
    if (!h || !a || !c) { unsure.push(`${f} ${mk.slug}: could not parse fields`); return; }
    const hv = h[2], av = a[2], cv = c[2];
    if (!needsFix(hv) && !needsFix(av) && !needsFix(cv)) return;
    const capLoc = /^.*? in (.+?) \|/.exec(cv);
    const headLoc = /at Your (.+?) Home/.exec(hv);
    const altLoc = /(?:in an? (?:[\w\- ]*?)home|home) \(?([^)—]*)\)?/.exec(av);
    const capL = capLoc && capLoc[1];
    const headL = headLoc && headLoc[1];
    if (!capL && !headL) { unsure.push(`${f} ${mk.slug}: no locality parsed`); return; }
    const hL = headL || capL;
    const cL = capL || headL;
    let nb = block;
    const rep = (k, old, val) => {
      const r = new RegExp("(\\b" + k + ":\\s*)\"" + old.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\"");
      nb = nb.replace(r, (_, pre) => pre + JSON.stringify(val));
    };
    let newH = hv, newA = av, newC = cv;
    if (needsFix(hv)) newH = `Expert Recliner Repair at Your ${hL} Home`;
    if (needsFix(av)) newA = `Professional recliner repair technician servicing a recliner sofa mechanism in a ${cL} home — FurniRevive`;
    if (needsFix(cv)) newC = `Recliner Repair in ${cL} | Motor, mechanism & leather service | Home visit | FurniRevive`;
    if (newH !== hv) rep("heading", hv, newH);
    if (newA !== av) rep("altText", av, newA);
    if (newC !== cv) rep("caption", cv, newC);
    if (nb === block) { unsure.push(`${f} ${mk.slug}: replace failed`); return; }
    if (!(needsFix(hv) && needsFix(av) && needsFix(cv))) unsure.push(`${f} ${mk.slug}: partial fix (only some fields mentioned sofa)`);
    if (/leather|sofa/i.test(mk.slug.replace(/recliner-sofa/, ""))) unsure.push(`${f} ${mk.slug}: slug also contains sofa/leather`);
    const start = mk.idx + bm.index;
    edits.push({ start, end: start + block.length, text: nb });
    log.push(`${f} | ${mk.slug} | before: ${hv} | after: ${newH}`);
    pages++;
    touchedFiles.add(f);
  });
  edits.sort((x, y) => y.start - x.start);
  for (const e of edits) src = src.slice(0, e.start) + e.text + src.slice(e.end);
  if (edits.length && !DRY) fs.writeFileSync(p, src);
}
fs.writeFileSync("tmp/item3-log.txt", log.join("\n") + "\n\nUNSURE:\n" + unsure.join("\n") + "\n");
console.log(JSON.stringify({ pages, files: touchedFiles.size, unsure: unsure.length, DRY }));
