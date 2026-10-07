import { motion } from "framer-motion";
import { fadeUp, staggerContainer, revealViewport } from "../../lib/motion";

const withDelay = (variants, delay) =>
  delay
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }
    : variants;

// Entrada de una sección al aparecer en pantalla (una sola vez).
export const Reveal = ({ as = "div", delay = 0, variants = fadeUp, children, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={withDelay(variants, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Contenedor de listas/grillas: escalona la entrada de sus RevealItem.
export const RevealGroup = ({ as = "div", children, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggerContainer}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const RevealItem = ({ as = "div", variants = fadeUp, children, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag variants={variants} {...rest}>
      {children}
    </Tag>
  );
};
