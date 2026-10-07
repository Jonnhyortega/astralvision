import { motion } from "framer-motion";
import { Reveal, Parallax } from "../motion";
import { durations, hoverLift, stagger } from "../../lib/motion";
import { WrapperHWDI, ContentGrid } from "./HowWeDoItStyles";

const info = [
  {
    title: "Estudio de mercado",
    info: "Identificamos y analizamos los actores principales de tu mercado con el fin de contribuir a desarrollar una estrategia más competente.",
    image: "/assets/icons/what-i-do.png",
  },
  {
    title: "Diseño UI/UX",
    info: "Creamos interfaces para tu app centradas en los usuarios objetivo para que sean completamente intuitivas y atractivas.",
    image: "/assets/icons/web-design.png",
  },
  {
    title: "Responsive Design",
    info: "Desarrollamos sitios webs responsivos o Mobile-First según cada proyecto, para que se adapte a todos los dispositivos del mercado.",
    image: "/assets/icons/media-queries.png",
  },
  {
    title: "Desarrollo Front y Back-End",
    info: "Cada proyecto es distinto, por eso cada uno se desarrolla a medida según los requerimientos del proyecto y la necesidad de los usuarios.",
    image: "/assets/icons/code.png",
  },
];

export const HowWeDoIt = () => {
  return (
    <WrapperHWDI>
      <ContentGrid>
        <Reveal as="h2">¿Cómo trabajamos?</Reveal>

        {info.map((x, index) => (
          <Reveal
            key={x.title}
            className="card"
            delay={index * stagger}
            whileHover={hoverLift}
          >
            <Parallax offset={12}>
              <motion.img
                src={x.image}
                alt={`Icono ${x.title}`}
                className="img"
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: durations.slow } }}
              />
            </Parallax>
            <div>
              <h3 className="title">{x.title}</h3>
              <p className="info">{x.info}</p>
            </div>
          </Reveal>
        ))}
      </ContentGrid>
    </WrapperHWDI>
  );
};

export default HowWeDoIt;
