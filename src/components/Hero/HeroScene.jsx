import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import AstralObject from "./AstralObject";

const HeroScene = ({ isInView }) => {
  return (
    <Canvas
      frameloop={isInView ? "always" : "never"}
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ powerPreference: "high-performance", alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Stars
        radius={100}
        depth={50}
        count={2500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={2}
        saturation={0}
        fade
        speed={2}
      />
      <Suspense fallback={null}>
        <AstralObject />
      </Suspense>
      <OrbitControls makeDefault enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default HeroScene;
