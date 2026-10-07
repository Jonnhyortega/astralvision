// Decide si el dispositivo puede mostrar el canvas 3D o se queda con el fondo estático.
export const shouldRenderStarfield = ({ width, cores, saveData }) => {
  if (width < 768) return false;
  if (typeof cores === "number" && cores <= 4) return false;
  if (saveData) return false;
  return true;
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
