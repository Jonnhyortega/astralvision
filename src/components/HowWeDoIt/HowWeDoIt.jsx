import { motion } from "framer-motion";
import { WrapperHWDI, ContentGrid } from "./HowWeDoItStyles";

const info = [
  {
    title: "Estudio de mercado",
    info: "Identificamos y analizamos los actores principales de tu mercado con el fin de contribuir a desarrollar una estrategia más competente.",
    image: "https://img.icons8.com/fluency/96/what-i-do.png",
  },
  {
    title: "Diseño UI/UX",
    info: "Creamos interfaces para tu app centradas en los usuarios objetivo para que sean completamente intuitivas y atractivas.",
    image: "https://img.icons8.com/color-glass/100/web-design.png",
  },
  {
    title: "Responsive Design",
    info: "Desarrollamos sitios webs responsivos o Mobile-First según cada proyecto, para que se adapte a todos los dispositivos del mercado.",
    image: "https://img.icons8.com/color-glass/100/media-queries.png",
  },
  {
    title: "Desarrollo Front y Back-End",
    info: "Cada proyecto es distinto, por eso cada uno se desarrolla a medida según los requerimientos del proyecto y la necesidad de los usuarios.",
    image: "https://img.icons8.com/plasticine/100/code--v2.png",
  },
];

export const HowWeDoIt = () => {
  return (
    <WrapperHWDI>
      <ContentGrid>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Cómo trabajamos?
        </motion.h2>

        {info.map((x, index) => (
          <motion.div
            key={x.title}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={x.image}
              alt={`Icono ${x.title}`}
              className="img"
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.8 } }}
            />
            <div>
              <h3 className="title">{x.title}</h3>
              <p className="info">{x.info}</p>
            </div>
          </motion.div>
        ))}
      </ContentGrid>
    </WrapperHWDI>
  );
};

export default HowWeDoIt;
