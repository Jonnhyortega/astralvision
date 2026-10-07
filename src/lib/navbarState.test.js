import { describe, it, expect } from "vitest";
import { getNavbarState } from "./navbarState";

describe("getNavbarState", () => {
  it("cerca del tope: visible, scrolled según 40px", () => {
    expect(getNavbarState(0, 50)).toEqual({ hidden: false, scrolled: true });
    expect(getNavbarState(0, 30)).toEqual({ hidden: false, scrolled: false });
    expect(getNavbarState(80, 99).hidden).toBe(false);
  });

  it("bajando pasado 100px se oculta", () => {
    expect(getNavbarState(200, 300)).toEqual({ hidden: true, scrolled: true });
  });

  it("subiendo se muestra", () => {
    expect(getNavbarState(300, 200)).toEqual({ hidden: false, scrolled: true });
  });
});
