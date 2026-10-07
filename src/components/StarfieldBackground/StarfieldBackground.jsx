import { Component, Suspense, lazy, useEffect, useState } from "react";
import { Fallback, CanvasLayer } from "./StarfieldStyles";
import { shouldRenderStarfield, prefersReducedMotion } from "./capability";
import { durations, easings } from "../../lib/motion";

const StarfieldCanvas = lazy(() => import("./StarfieldCanvas"));

// Si WebGL falla, se queda solo el fondo estático.
class CanvasBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const whenIdle = (cb) => {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(cb, { timeout: 3000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(cb, 1500);
  return () => clearTimeout(id);
};

// Fondo decorativo fijo detrás de todo el sitio.
export const StarfieldBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const capable = shouldRenderStarfield({
      width: window.innerWidth,
      cores: navigator.hardwareConcurrency,
      saveData: navigator.connection?.saveData,
    });
    if (!capable) return undefined;
    return whenIdle(() => setReady(true));
  }, []);

  return (
    <div data-starfield aria-hidden="true">
      <Fallback />
      {ready && (
        <CanvasLayer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: durations.slow, ease: easings.out }}
        >
          <CanvasBoundary>
            <Suspense fallback={null}>
              <StarfieldCanvas reducedMotion={prefersReducedMotion()} />
            </Suspense>
          </CanvasBoundary>
        </CanvasLayer>
      )}
    </div>
  );
};

export default StarfieldBackground;
