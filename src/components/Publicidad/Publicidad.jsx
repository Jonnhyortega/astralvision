import { motion } from "framer-motion";
import { PubliWrapper } from "./PublicidadStyles";

export const Publicidad = () => {
  return (
    <PubliWrapper
      as={motion.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3>
        Impulsá tu <span>negocio</span> 🚀
      </h3>

      <p>
        Llevá tu marca al siguiente nivel con{" "}
        <strong>sitios web modernos, optimizados y funcionales</strong> que
        reflejan la identidad de tu negocio.  
        Además, desarrollamos{" "}
        <strong>campañas publicitarias efectivas</strong> en redes sociales para
        atraer a tu público objetivo.  
      </p>

      <p className="highlight">
        Desde la <strong>creación</strong> hasta la{" "}
        <strong>conversión</strong>, te ayudamos a{" "}
        <strong>transformar clics en clientes</strong>.
      </p>

      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => window.open("https://wa.link/zbxw90", "_blank")}
      >
        💬 Cotizar mi sitio web
      </motion.button>
    </PubliWrapper>
  );
};

export default Publicidad;
