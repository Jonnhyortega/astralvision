# Lighthouse mobile — efectos visuales

Procedimiento: `npm run build` → `npx vite preview --port 4173` → `npm run perf -- <label>` (Lighthouse preset mobile, solo Performance, 3 corridas, mediana).

## Baseline (main @ cc31d88)

| Métrica | Valor |
|---|---|
| Performance | 32 (runs 28, 32, 32) |
| LCP | 8.49 s |
| TBT | 2486 ms |
| CLS | 0.000 |
| Speed Index | 6.94 s |
| JS transferido | 790 KB |

Nota: el bundle principal (`index-*.js`) pesa 1.36 MB minificado (399 KB gzip) e incluye three/R3F, porque lo comparten `HeroScene` y `GalaxyBackground`.
