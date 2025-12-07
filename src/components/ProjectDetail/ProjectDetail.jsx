import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../utils/projects";
import { ProjectDetailWrapper } from "./ProjectDetailStyles";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <ProjectDetailWrapper>
      {/* ---------- HERO ---------- */}
      <header
        className="banner"
        style={{ background: project.color.background }}
      >
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={project.logo}
            alt={project.name}
            className="project-logo"
          />
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </motion.div>
      </header>

      {/* ---------- BODY ---------- */}
      <section className="case-body">
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Sobre el proyecto</h2>
          <p>{project.description}</p>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="tech-stack"
        >
          <h2>Stack tecnológico</h2>
          <ul>
            {project.tech?.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </motion.div> */}

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn"
          whileHover={{ boxShadow: "0 0 15px rgba(0,0,0,0.4)" }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          Ver sitio en vivo
        </motion.a>
      </section>
    </ProjectDetailWrapper>
  );
}
