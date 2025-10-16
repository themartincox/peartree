// check-sitemap-status.mjs
import https from "https";
import http from "http";
import { writeFileSync } from "fs";

const fetchText = url =>
  new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, res => {
        let data = "";
        res.on("data", c => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });

const headStatus = url =>
  new Promise(resolve => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.request(url, { method: "HEAD" }, res => {
      resolve(res.statusCode || 0);
    });
    req.on("error", () => resolve(0));
    req.end();
  });

const extractLocs = xml =>
  Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map(m => m[1]);

const uniq = arr => [...new Set(arr)];

const SITEMAP = process.argv[2] || "https://peartree.dental/sitemap.xml";

const main = async () => {
  const root = await fetchText(SITEMAP);
  let sitemaps = extractLocs(root);

  // If root is an index, expand; otherwise it's a plain sitemap
  let urls = [];
  const looksLikeIndex = sitemaps.some(u => u.endsWith(".xml"));
  if (looksLikeIndex) {
    for (const sm of sitemaps) {
      const xml = await fetchText(sm);
      urls.push(...extractLocs(xml));
    }
  } else {
    urls = sitemaps;
  }

  urls = uniq(urls);
  const rows = [["status","url"]];
  for (const u of urls) {
    const status = await headStatus(u);
    rows.push([status, u]);
  }
  const csv = rows.map(r => r.join(",")).join("\n");
  writeFileSync("peartree_status.csv", csv);
  console.log("Wrote peartree_status.csv with", rows.length - 1, "rows");

  const bad = rows.slice(1).filter(([s]) => String(s).match(/^(3|4|5)/));
  console.log("Problem URLs:");
  bad.forEach(r => console.log(r.join(",")));
};

main();
