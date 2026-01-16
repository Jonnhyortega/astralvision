import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const generateStarTexture = () => {
  if (typeof document === 'undefined') return null; // SSR safety
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(220, 220, 255, 0.8)'); // Slight blue tint
  gradient.addColorStop(0.5, 'rgba(100, 100, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

const generateNebulaTexture = () => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    // Softer, cloudier gradient
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
};

const RealisticStars = () => {
  const count = 4000; // Increased density
  const mesh = useRef();
  
  // Generate material texture once
  const texture = useMemo(() => generateStarTexture(), []);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const s = new Float32Array(count);

    // Realistic Star Colors (Kelvin approximation)
    const starColors = [
      new THREE.Color('#9bb0ff'), // Blue-white
      new THREE.Color('#aabfff'), // Light blue
      new THREE.Color('#cad7ff'), // White-blue
      new THREE.Color('#ffddb4'), // Yellow-white
      new THREE.Color('#ffcc6f'), // Orange-ish
      new THREE.Color('#ff5c5c'), // Reddish (keeping user preference for red)
    ];

    for (let i = 0; i < count; i++) {
        // Spread stars in a tunnel/cylinder shape for the warp effect
        const r = 20 + Math.random() * 80; // Radius from center
        const theta = Math.random() * Math.PI * 2;
        
        pos[i * 3] = r * Math.cos(theta);     // X
        pos[i * 3 + 1] = r * Math.sin(theta); // Y
        pos[i * 3 + 2] = (Math.random() - 0.5) * 200; // Z spread long

        const color = starColors[Math.floor(Math.random() * starColors.length)];
        // Add some random variation to brightness
        const intensity = 0.5 + Math.random() * 0.5;
        
        cols[i * 3] = color.r * intensity;
        cols[i * 3 + 1] = color.g * intensity;
        cols[i * 3 + 2] = color.b * intensity;

        // Varied sizes
        s[i] = Math.random() * 2 + 0.5; 
    }
    return { positions: pos, colors: cols, sizes: s };
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    const positionsArray = mesh.current.geometry.attributes.position.array;
    const speed = 30 * delta; // Faster warp
    
    for (let i = 0; i < count; i++) {
        let z = positionsArray[i * 3 + 2];
        z += speed;
        
        // Reset when passing camera
        if (z > 50) { 
            z = -150; 
        }
        
        positionsArray[i * 3 + 2] = z;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.z += delta * 0.05; // Gentle rotation
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} /> 
        {/* Note: size attribute only works if shader uses it or PointsMaterial size is constant. 
            Standard PointsMaterial uses uniform size. 
            To use varying sizes we need a shader or multiple systems. 
            Let's stick to uniform size + alphaMap for realism for now to ensure stability 
            without external shader code blocks, or simple random size trick via sizeAttenuation.
            The sizes attribute above is ignored by standard pointsMaterial unfortunately. 
            We will rely on texture alpha for "softness" and random flickering later if needed. */}
      </bufferGeometry>
      <pointsMaterial 
        map={texture}
        size={0.8} 
        vertexColors 
        sizeAttenuation 
        transparent 
        alphaTest={0.01}
        opacity={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const RealisticNebula = () => {
  const count = 40;
  const mesh = useRef();
  const texture = useMemo(() => generateNebulaTexture(), []);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    const nebulaColors = [
      new THREE.Color('#3b0066'), // Deep Purple
      new THREE.Color('#660022'), // Deep Red
      new THREE.Color('#002266'), // Deep Blue
    ];

    for (let i = 0; i < count; i++) {
      // Much more spread out and distant
      pos[i * 3] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50; 

      const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return { positions: pos, colors: cols };
  }, []);

  useFrame((state, delta) => {
    if (mesh.current) {
        // Very slow atmospheric rotation
        mesh.current.rotation.z -= delta * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        map={texture}
        size={40} // Huge clouds
        vertexColors 
        sizeAttenuation 
        transparent 
        opacity={0.3} // Subtle
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default function GalaxyBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#020204' }}>
      <Canvas 
        camera={{ position: [0, 0, 50], fov: 60 }} 
        // dpr setup helps with realism on high res screens
        dpr={[1, 2]}
      >
        <color attach="background" args={['#020204']} />
        <fog attach="fog" args={['#020204', 30, 100]} />
        
        <RealisticNebula />
        <RealisticStars />
      </Canvas>
    </div>
  );
}
