import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Smooth scroll global. No se inicia con prefers-reduced-motion (queda el scroll nativo).
let lenis = null;

export const initLenis = () => {
  if (lenis) return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  lenis = new Lenis({ autoRaf: true });
  if (import.meta.env.DEV) window.__lenis = lenis;
  return lenis;
};

export const destroyLenis = () => {
  lenis?.destroy();
  lenis = null;
};

export const getLenis = () => lenis;

export const scrollToTop = () => {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
};
