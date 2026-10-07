import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  transform-origin: 0 50%;
  z-index: 1001;
  pointer-events: none;
  background: linear-gradient(90deg, #6411ad, #00d4ff);
`;

// Barra fina de progreso de lectura, ligada al scroll de la página.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <Bar aria-hidden="true" style={{ scaleX }} />;
};

export default ScrollProgress;
