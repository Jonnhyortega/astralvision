import { useMemo } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../motion";
import { durations } from "../../lib/motion";
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
        <Reveal as="h4">
            Marcas que <span>confían en nosotros</span>
        </Reveal>
        
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
                width="160"
                height="100"
                loading="lazy"
                whileHover={{ scale: 1.15, transition: { duration: durations.fast } }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </TechnologiesContent>
  );
}
