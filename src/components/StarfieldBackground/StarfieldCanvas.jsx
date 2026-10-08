import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { BufferAttribute, BufferGeometry, CanvasTexture } from "three";
import { createConstellation, colorAtProgress } from "./constellation";

const MAX_TILT = (3 * Math.PI) / 180;
const LERP = 0.08;
const BASE_Z = 6;

const makeDotTexture = () => {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.5)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  return new CanvasTexture(c);
};

const scrollProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
};

// Mueve la cámara hacia el objetivo (mouse/scroll) y deja de renderizar cuando se asienta.
const Rig = ({ reducedMotion, materials }) => {
  const { camera, invalidate, gl } = useThree();
  const target = useRef({ rx: 0, ry: 0, progress: scrollProgress() });
  const current = useRef({ rx: 0, ry: 0, progress: target.current.progress });

  useEffect(() => {
    if (import.meta.env.DEV) window.__starfield = gl;
    if (reducedMotion) return undefined;

    const onPointer = (e) => {
      target.current.ry = -((e.clientX / window.innerWidth) * 2 - 1) * MAX_TILT;
      target.current.rx = -((e.clientY / window.innerHeight) * 2 - 1) * MAX_TILT;
      if (!document.hidden) invalidate();
    };
    const onScroll = () => {
      target.current.progress = scrollProgress();
      if (!document.hidden) invalidate();
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion, invalidate, gl]);

  useFrame(() => {
    const t = target.current;
    const c = current.current;
    c.rx += (t.rx - c.rx) * LERP;
    c.ry += (t.ry - c.ry) * LERP;
    c.progress += (t.progress - c.progress) * LERP;

    camera.rotation.set(c.rx, c.ry, 0);
    camera.position.z = BASE_Z - c.progress * 2;
    // Tono de marca aclarado hacia blanco para que se distinga sobre el negro.
    const [r, g, b] = colorAtProgress(c.progress).map((v) => v * 0.55 + 0.45);
    materials.forEach((m) => m.current?.color.setRGB(r, g, b));

    const settled =
      Math.abs(t.rx - c.rx) < 1e-4 &&
      Math.abs(t.ry - c.ry) < 1e-4 &&
      Math.abs(t.progress - c.progress) < 1e-4;
    if (!settled && !document.hidden) invalidate();
  });

  return null;
};

const Constellation = ({ reducedMotion }) => {
  const pointsMat = useRef();
  const linesMat = useRef();

  const { points, lines, dot } = useMemo(() => {
    const { positions, sizes, segments } = createConstellation({});
    // El brillo de cada estrella va en el color de vértice; el material aporta el tono.
    const colors = new Float32Array(sizes.length * 3);
    sizes.forEach((s, i) => colors.fill(0.4 + s / 2.5, i * 3, i * 3 + 3));
    const points = new BufferGeometry();
    points.setAttribute("position", new BufferAttribute(positions, 3));
    points.setAttribute("color", new BufferAttribute(colors, 3));
    const lines = new BufferGeometry();
    lines.setAttribute("position", new BufferAttribute(segments, 3));
    return { points, lines, dot: makeDotTexture() };
  }, []);

  useEffect(
    () => () => {
      points.dispose();
      lines.dispose();
      dot.dispose();
    },
    [points, lines, dot]
  );

  return (
    <>
      <points geometry={points}>
        <pointsMaterial
          ref={pointsMat}
          size={0.11}
          sizeAttenuation
          map={dot}
          vertexColors
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial ref={linesMat} transparent opacity={0.2} depthWrite={false} />
      </lineSegments>
      <Rig reducedMotion={reducedMotion} materials={[pointsMat, linesMat]} />
    </>
  );
};

const StarfieldCanvas = ({ reducedMotion }) => (
  <Canvas
    frameloop="demand"
    dpr={[1, 1.5]}
    gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
    camera={{ position: [0, 0, BASE_Z], fov: 60 }}
    style={{ pointerEvents: "none" }}
  >
    <Constellation reducedMotion={reducedMotion} />
  </Canvas>
);

export default StarfieldCanvas;
