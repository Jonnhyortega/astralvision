// Corre Lighthouse (preset mobile) 3 veces contra `vite preview` y muestra la mediana.
// Uso: npm run perf -- <label>
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const label = process.argv[2] || "run";
const url = process.argv[3] || "http://localhost:4173/";
const RUNS = 3;

const median = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

const results = [];
for (let i = 1; i <= RUNS; i++) {
  const out = join(tmpdir(), `lh-${label}-${i}.json`);
  execSync(
    `npx --yes lighthouse ${url} --only-categories=performance --output=json --output-path="${out}" --chrome-flags="--headless=new" --quiet`,
    { stdio: "inherit" }
  );
  const r = JSON.parse(readFileSync(out, "utf8"));
  const a = r.audits;
  const scriptBytes = (a["network-requests"].details.items || [])
    .filter((it) => it.resourceType === "Script")
    .reduce((sum, it) => sum + (it.transferSize || 0), 0);
  results.push({
    score: Math.round(r.categories.performance.score * 100),
    lcp: a["largest-contentful-paint"].numericValue,
    tbt: a["total-blocking-time"].numericValue,
    cls: a["cumulative-layout-shift"].numericValue,
    si: a["speed-index"].numericValue,
    js: scriptBytes,
  });
}

const m = (k) => median(results.map((r) => r[k]));
console.log(`\n${label} (mediana de ${RUNS})`);
console.log(`| Performance | ${m("score")} |`);
console.log(`| LCP | ${(m("lcp") / 1000).toFixed(2)} s |`);
console.log(`| TBT | ${Math.round(m("tbt"))} ms |`);
console.log(`| CLS | ${m("cls").toFixed(3)} |`);
console.log(`| Speed Index | ${(m("si") / 1000).toFixed(2)} s |`);
console.log(`| JS transferido | ${(m("js") / 1024).toFixed(0)} KB |`);
console.log("runs:", JSON.stringify(results.map((r) => r.score)));
