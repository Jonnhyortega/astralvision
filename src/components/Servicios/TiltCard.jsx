import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TiltWrapper = styled(motion.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05); /* Sutil borde */
  border-radius: 5px;
  padding: 2.5rem 2rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* Suavizar movimiento del mouse */
  
  /* Gradiente sutil interno para volumen */
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(10, 10, 10, 0.4) 100%
  );
`;

const Glare = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.15) 0%, /* Brillo central */
    rgba(255, 255, 255, 0.0) 60%
  );
  transform: translateZ(1px); /* Asegura que esté bajo el contenido */
  pointer-events: none; /* CRITICO: No bloquear eventos del mouse */
  opacity: 0;
  mix-blend-mode: overlay;
  transition: opacity 0.3s ease;
  z-index: 5;
`;

const ContentLayer = styled.div`
  transform: translateZ(40px); /* El contenido flota */
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
  z-index: 20; /* CRITICO: Contenido por encima de todo */
  
  /* Eliminamos toda restricción de pointer-events aquí */
  /* Los eventos burbujearán normalmente hacia el TiltWrapper */
`;

export const TiltCard = ({ children, className }) => {
  console.log("TiltCard render");
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Posición del mouse relativa a la tarjeta
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calcular rotación (entre -15 y 15 grados)
    const rotateY = ((mouseX / width) - 0.5) * 20; // Rota en Y según X
    const rotateX = ((mouseY / height) - 0.5) * -20; // Rota en X según Y 

    setRotation({ x: rotateX, y: rotateY });

    // Mover el brillo
    const glowX = (mouseX / width) * 100;
    const glowY = (mouseY / height) * 100;
    setGlowPos({ x: glowX, y: glowY });
    setOpacity(1); 
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <TiltWrapper
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCard
        className={className}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <Glare 
            style={{ 
                opacity: opacity,
                background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            }} 
        />
        <ContentLayer>
            {children}
        </ContentLayer>
      </StyledCard>
    </TiltWrapper>
  );
};
