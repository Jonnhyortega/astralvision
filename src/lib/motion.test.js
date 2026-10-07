import { describe, it, expect } from "vitest";
import {
  durations,
  easings,
  distances,
  fadeUp,
  fadeIn,
  staggerContainer,
  pageTransition,
  hoverLift,
  tapPress,
} from "./motion";

const ALLOWED = ["opacity", "x", "y", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY"];
const keysOf = (target) => Object.keys(target).filter((k) => k !== "transition");

describe("motion tokens", () => {
  it("expone duraciones, easings y distancias del spec", () => {
    expect(durations).toEqual({ fast: 0.2, base: 0.5, slow: 0.8 });
    expect(easings.out).toEqual([0.22, 1, 0.36, 1]);
    expect(distances.reveal).toBe(24);
    expect(distances.parallax).toBe(40);
  });

  it("fadeUp parte de opacity 0 y 24px abajo", () => {
    expect(fadeUp.hidden).toEqual({ opacity: 0, y: 24 });
  });

  it("staggerContainer escalona a 0.08s", () => {
    expect(staggerContainer.visible.transition.staggerChildren).toBe(0.08);
  });

  it("variantes solo usan transform/opacity", () => {
    const states = [
      ...[fadeUp, fadeIn, staggerContainer, pageTransition].flatMap((v) => Object.values(v)),
      hoverLift,
      tapPress,
    ];
    for (const s of states) {
      for (const k of keysOf(s)) expect(ALLOWED).toContain(k);
    }
  });
});
