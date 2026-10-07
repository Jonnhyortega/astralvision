import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { distances } from "../../lib/motion";

// Desplaza su contenido levemente más lento que el scroll. Sin efecto con reduced motion.
export const Parallax = ({ offset = distances.parallax, children, style, ...rest }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={reduced ? style : { ...style, y }} {...rest}>
      {children}
    </motion.div>
  );
};
