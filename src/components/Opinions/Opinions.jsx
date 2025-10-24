import React from "react";
import { motion } from "framer-motion";
import { OpinionsWrapper } from "./OpinionsStyles";
import opinion1 from "../../imgs/Opinions/opinion1.webp";
import opinion2 from "../../imgs/Opinions/opinion2.webp";
import opinion3 from "../../imgs/Opinions/opinion3.webp";

export const Opinions = () => {
  const opinions = [opinion1, opinion2, opinion3, "https://res.cloudinary.com/do87isqjr/image/upload/v1760654661/Captura_de_pantalla_2025-10-16_193904_gip7ky.png"];

  return (
    <OpinionsWrapper>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonios
      </motion.h2>

      {/* Carrusel arrastrable */}
      <motion.div
        className="carousel"
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        dragElastic={0.3}
      >
        {opinions.map((img, index) => (
          <motion.a
            key={index}
            href="https://maps.app.goo.gl/MuDzaEkscywn51hK8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={img}
              alt={`opinion-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          </motion.a>
        ))}
      </motion.div>
    </OpinionsWrapper>
  );
};

export default Opinions;
