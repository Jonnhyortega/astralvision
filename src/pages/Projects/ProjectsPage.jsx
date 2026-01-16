import React, { useMemo } from "react";
import { ProjectsWrapper } from "./ProjectsPageStyles";
import projects from "../../utils/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  // Use useMemo to prevent re-shuffling on every render
  const projectsRandom = useMemo(() => {
    return [...projects].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <ProjectsWrapper>
      <h2 className="headline">Proyectos recientes</h2>

      <div className="projects-list">
        {projectsRandom.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-row ${index % 2 === 0 ? "normal" : "reverse"}`}
            style={{
              background: project.color.background || 'rgba(255, 255, 255, 0.05)', 
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="image-side">
              <img src={project.logo} alt={project.name} loading="lazy" />
            </div>

            <div className="text-side">
              <h3 style={{ color: project.color.font }}>
                {project.name}
              </h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-site"
                  style={{
                    background: project.color.button,
                    color: '#fff' 
                  }}
                >
                  Ver sitio
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ProjectsWrapper>
  );
}
