import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Sphere } from "@react-three/drei";

const AstralObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
        // Subtle rotation for extra life - increased speed since camera won't rotate
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Soft Liquid Core */}
        <Sphere args={[1.4, 100, 100]} ref={meshRef}>
            <MeshDistortMaterial
                color="#6411ad" 
                attach="material"
                distort={0.4} // Waviness
                speed={2} // Animation speed
                roughness={0.2}
                metalness={0.6}
            />
        </Sphere>
      </Float>
    </group>
  );
};

export default AstralObject;
