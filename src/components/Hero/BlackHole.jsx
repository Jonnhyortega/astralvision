
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

const BlackHole = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group rotation={[Math.PI / 3, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Event Horizon (The Black Sphere) - Original Size */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="black" />
        </mesh>

        {/* Accretion Disk (Glowing Ring) - Original Geometry (Torus) but Blue/Cyan Colors */}
        <mesh ref={meshRef}>
            <torusGeometry args={[3, 0.4, 16, 100]} />
             <meshStandardMaterial 
                color="#00ffff" // Cyan
                emissive="#00bfff" // Deep Sky Blue
                emissiveIntensity={2}
                roughness={0.1}
                metalness={0.8}
                transparent
                opacity={0.8}
             />
        </mesh>
         
         {/* Inner Glow Ring - Original Size */}
         <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.55, 1.8, 64]} />
            <meshBasicMaterial color="#e0ffff" side={THREE.DoubleSide} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
         </mesh>

        {/* Swirling Particles around - Original Scales with New Colors */}
        <Sparkles 
            count={300} 
            scale={8} 
            size={4} 
            speed={0.4} 
            opacity={0.6}
            color="#00ffff" // Cyan
        />
        <Sparkles 
            count={150} 
            scale={12} 
            size={6} 
            speed={0.2} 
            opacity={0.4}
            color="#4169e1" // Royal Blue
        />
      </Float>
    </group>
  );
};

export default BlackHole;
