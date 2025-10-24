import React from "react";
import { ProjectsWrapper } from "./ProjectsPageStyles";
import projects from "../../utils/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <ProjectsWrapper>
      <h2 className="headline">Proyectos recientes</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-row ${index % 2 === 0 ? "normal" : "reverse"}`}
            style={{background: `linear-gradient(90deg, ${project.color[0]}, ${project.color[1]}`, padding: "5rem"}}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="image-side">
              <img src={project.logo} alt={project.name} />
            </div>

            <div className="text-side">
              <h3 style={{
                color: project.color[0]
              }}>{project.name}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <Link to={`/projects/${project.id}`} className="btn-detail">
                  Ver detalles
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-site"
                  style={{background: project.color[0]
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
