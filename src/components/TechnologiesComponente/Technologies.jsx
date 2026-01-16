import { useMemo } from "react";
import { motion } from "framer-motion";
import projects from "../../utils/projects";
import { TechnologiesContent } from "./TechnologiesStyles";

export default function Technologies() {
  // Generate random animation parameters for each project
  const floatingProjects = useMemo(() => {
    return projects.map((p) => ({
      ...p,
      duration: 4 + Math.random() * 4, // Random duration between 4s and 8s
      delay: Math.random() * 2, // Random delay
      yOffset: 15 + Math.random() * 20, // Random float height
      xOffset: -10 + Math.random() * 20, // Random spread
    }));
  }, []);

  return (
    <TechnologiesContent>
      <div className="clients-section">
        <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            Marcas que <span>confían en nosotros</span>
        </motion.h4>
        
        <div className="clients-logos">
          {floatingProjects.map((p) => (
            <motion.div
              key={p.id}
              className="logo-wrapper"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -p.yOffset, 0],
                // x: [0, p.xOffset, 0] // Optional horizontal drift
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: p.delay,
              }}
            >
              <motion.img
                src={p.logo}
                alt={"Logo de " + p.name}
                whileHover={{ 
                  scale: 1.15, 
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6)) grayscale(0%)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </TechnologiesContent>
  );
}
