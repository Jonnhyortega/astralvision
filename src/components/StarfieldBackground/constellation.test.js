import { describe, it, expect } from "vitest";
import { createConstellation, colorAtProgress } from "./constellation";

describe("createConstellation", () => {
  const c = createConstellation({});

  it("genera 700 puntos con tamaño", () => {
    expect(c.positions.length).toBe(2100);
    expect(c.sizes.length).toBe(700);
  });

  it("hasta 40 segmentos, de a 6 floats", () => {
    expect(c.segments.length).toBeLessThanOrEqual(240);
    expect(c.segments.length % 6).toBe(0);
    expect(c.segments.length).toBeGreaterThan(0);
  });

  it("es determinista por seed", () => {
    expect(createConstellation({ seed: 7 }).positions).toEqual(c.positions);
    expect(createConstellation({ seed: 8 }).positions).not.toEqual(c.positions);
  });

  it("z dentro de [-12, 0] y sin NaN", () => {
    for (let i = 2; i < c.positions.length; i += 3) {
      expect(c.positions[i]).toBeGreaterThanOrEqual(-12);
      expect(c.positions[i]).toBeLessThanOrEqual(0);
    }
    expect([...c.positions, ...c.sizes, ...c.segments].some(Number.isNaN)).toBe(false);
  });
});

describe("colorAtProgress", () => {
  const close = (a, b) => a.forEach((v, i) => expect(v).toBeCloseTo(b[i], 5));

  it("0 = violeta #6411ad, 1 = cian #00d4ff", () => {
    close(colorAtProgress(0), [100 / 255, 17 / 255, 173 / 255]);
    close(colorAtProgress(1), [0, 212 / 255, 1]);
  });

  it("clampea fuera de [0, 1]", () => {
    expect(colorAtProgress(-1)).toEqual(colorAtProgress(0));
    expect(colorAtProgress(2)).toEqual(colorAtProgress(1));
  });
});
