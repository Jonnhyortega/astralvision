// Sistema centralizado de animaciones: tokens y variantes de Framer Motion.
// Solo se animan transform (x, y, scale, rotate) y opacity.

export const durations = { fast: 0.2, base: 0.5, slow: 0.8 };

export const easings = { out: [0.22, 1, 0.36, 1] };

export const distances = { reveal: 24, parallax: 40 };

export const stagger = 0.08;

const base = { duration: durations.base, ease: easings.out };

export const fadeUp = {
  hidden: { opacity: 0, y: distances.reveal },
  visible: { opacity: 1, y: 0, transition: base },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: base },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
};

export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: easings.out } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: easings.out } },
};

export const hoverLift = {
  y: -6,
  transition: { duration: durations.fast, ease: easings.out },
};

export const tapPress = {
  scale: 0.97,
  transition: { duration: durations.fast, ease: easings.out },
};

export const hoverGrow = {
  scale: 1.03,
  transition: { duration: durations.fast, ease: easings.out },
};

export const revealViewport = { once: true, amount: "some", margin: "0px 0px -10% 0px" };
