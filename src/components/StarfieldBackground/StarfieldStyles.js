import styled from "styled-components";
import { motion } from "framer-motion";

const layer = `
  position: fixed;
  inset: 0;
  pointer-events: none;
`;

// Fondo estático: siempre presente, es lo único que se ve en mobile / gama baja.
export const Fallback = styled.div`
  ${layer}
  z-index: -1;
  background:
    radial-gradient(1px 1px at 12% 22%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 78% 14%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 34% 68%, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(1px 1px at 88% 72%, rgba(255, 255, 255, 0.45), transparent),
    radial-gradient(1px 1px at 56% 42%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(ellipse at 50% 30%, #0b1030 0%, #05060f 60%, #000 100%);
`;

export const CanvasLayer = styled(motion.div)`
  ${layer}
  z-index: -1;
`;
