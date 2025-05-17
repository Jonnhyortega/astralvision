import sani1 from "../imgs/Projects/Sanitarios/sani3.webp";
import sani2 from "../imgs/Projects/Sanitarios/sani2.webp";
import sani3 from "../imgs/Projects/Sanitarios/sani1.webp";
import sani4 from "../imgs/Projects/Sanitarios/sani4.webp";
import chulos1 from "../imgs/Projects/Chulos/chulo1.webp";
import chulos2 from "../imgs/Projects/Chulos/chulo2.webp";
import chulos3 from "../imgs/Projects/Chulos/chulo3.webp";
import chulos4 from "../imgs/Projects/Chulos/chulo4.webp";
import hc1 from "../imgs/Projects/Hc/hc1.webp";
import hc2 from "../imgs/Projects/Hc/hc2.webp";
import hc3 from "../imgs/Projects/Hc/hc3.webp";
import hc4 from "../imgs/Projects/Hc/hc4.webp";

export const projects = [
  {
    id: 1,
    name: "Sanitarios Lugano",
    img: [sani1, sani2, sani3, sani4],
    link: "https://sanitarioslugano.com",
    color: ["#3aa6dc", "black"],
    description:
      "Sitio web institucional para comercio dedicado a la venta de productos sanitarios y de construcción. Incluye una sección de productos destacados, barra superior dinámica para facilitar la navegacion, métodos de contacto bien claros y una sección informativa sobre la empresa.",
  },
  {
    id: 2,
    name: "Chulos design",
    img: [chulos1, chulos2, chulos3, chulos4],
    link: "https://chulosdesign.com",
    color: ["#3fca5d", "black"],
    description:
      "Sitio web institucional para marca de diseño de interiores con galería visual, sección informativa, formulario de contacto y llamado a la accion fijo (CTA) para fomentar el contacto con potenciales clientes.",
  },
  {
    id: 3,
    name: "HC habilitaciones",
    img: [hc1, hc2, hc3, hc4],
    link: "https://www.gestioncomercialhc.com",
    color: ["#454545", "#25aae7"],
    description:
      "Sitio web para empresa dedicada a la habilitación de comercios. Presenta los servicios ofrecidos, procesos de trabajo, sección de contacto y un diseño profesional orientado a generar confianza y facilitar la primera interaccion con el cliente.",
  },
];

export default projects;
