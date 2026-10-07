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

## Final (rama feat/efectos-visuales)

| Métrica | Baseline | Final | Δ |
|---|---|---|---|
| Performance | 32 | 42 (runs 41, 42, 51) | +10 |
| LCP | 8.49 s | 7.35 s | −1.14 s |
| TBT | 2486 ms | 1104 ms | −1382 ms |
| CLS | 0.000 | 0.000 | = |
| Speed Index | 6.94 s | 5.45 s | −1.49 s |
| JS transferido | 790 KB | 562 KB | −228 KB |

Criterio (caída ≤ 5 puntos): cumplido, el puntaje sube. No hizo falta ningún ajuste del paso 3.

Por qué mejora: se eliminaron tres canvas 3D (hero, Opinions y Contacto, este último sin lazy y con 7000 estrellas + nubes renderizando siempre) y los imports sin uso de `@react-three` en Servicios. three/R3F salió del bundle principal (399 → 173 KB gzip) y ahora vive en un chunk lazy que solo descarga desktop capaz. En la corrida mobile de Lighthouse el canvas no se carga (ancho < 768), que es justamente el camino que se mide.
