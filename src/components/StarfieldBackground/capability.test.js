import { describe, it, expect } from "vitest";
import { shouldRenderStarfield } from "./capability";

describe("shouldRenderStarfield", () => {
  it("desktop capaz: sí", () => {
    expect(shouldRenderStarfield({ width: 1440, cores: 8, saveData: false })).toBe(true);
  });
  it("ancho < 768: no", () => {
    expect(shouldRenderStarfield({ width: 767, cores: 8, saveData: false })).toBe(false);
  });
  it("4 núcleos o menos: no", () => {
    expect(shouldRenderStarfield({ width: 1440, cores: 4, saveData: false })).toBe(false);
  });
  it("ahorro de datos: no", () => {
    expect(shouldRenderStarfield({ width: 1440, cores: 8, saveData: true })).toBe(false);
  });
  it("sin dato de núcleos (Safari): sí", () => {
    expect(shouldRenderStarfield({ width: 1440, cores: undefined, saveData: false })).toBe(true);
  });
});
