// Generación procedural de la constelación (sin React ni three, testeable en node).

const mulberry32 = (seed) => () => {
  let t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const MAX_LINK_DISTANCE = 2.5;

export const createConstellation = ({ count = 700, maxSegments = 40, seed = 7, radius = 12 } = {}) => {
  const rand = mulberry32(seed);
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  // Volumen achatado: ancho en x, algo menos en y, profundidad hacia atrás de la cámara.
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (rand() * 2 - 1) * radius;
    positions[i * 3 + 1] = (rand() * 2 - 1) * radius * 0.65;
    positions[i * 3 + 2] = -rand() * radius;
    sizes[i] = 0.5 + rand();
  }

  // Une algunos puntos al azar con su vecino más cercano si está suficientemente cerca.
  const segments = [];
  const used = new Set();
  for (let tries = 0; tries < count * 2 && segments.length < maxSegments * 6; tries++) {
    const a = Math.floor(rand() * count);
    let best = -1;
    let bestDist = Infinity;
    for (let b = 0; b < count; b++) {
      if (b === a) continue;
      const dx = positions[a * 3] - positions[b * 3];
      const dy = positions[a * 3 + 1] - positions[b * 3 + 1];
      const dz = positions[a * 3 + 2] - positions[b * 3 + 2];
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bestDist) {
        bestDist = d;
        best = b;
      }
    }
    const key = a < best ? `${a}-${best}` : `${best}-${a}`;
    if (best < 0 || Math.sqrt(bestDist) > MAX_LINK_DISTANCE || used.has(key)) continue;
    used.add(key);
    segments.push(
      positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2],
      positions[best * 3], positions[best * 3 + 1], positions[best * 3 + 2]
    );
  }

  return { positions, sizes, segments: new Float32Array(segments) };
};

const VIOLET = [100 / 255, 17 / 255, 173 / 255]; // #6411ad
const CYAN = [0, 212 / 255, 1]; // #00d4ff

export const colorAtProgress = (p) => {
  const t = Math.min(1, Math.max(0, p));
  return VIOLET.map((v, i) => v + (CYAN[i] - v) * t);
};
