// Estado del header según el scroll: se oculta al bajar y toma fondo al pasar 40px.
export const getNavbarState = (prevY, y) => ({
  hidden: y > 100 && y > prevY,
  scrolled: y > 40,
});
