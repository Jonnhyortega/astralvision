import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../utils/projects";
import { ProjectDetailWrapper } from "./ProjectDetailStyles";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <ProjectDetailWrapper>
      <header className="banner">
        <img src={project.img[0]} alt={project.name} />
        <div className="title-overlay">
          <h1>{project.name}</h1>
          <p>{project.shortDesc || "Proyecto destacado del estudio"}</p>
        </div>
      </header>

      <section className="case-body">
        <h2>Sobre el proyecto</h2>
        <p>{project.description}</p>

        <h2>Stack tecnológico</h2>
        <ul>
          {project.tech?.map((t, i) => <li key={i}>{t}</li>)}
        </ul>

        <a href={project.link} className="visit-btn" target="_blank" rel="noopener noreferrer">
          Ver sitio en vivo
        </a>
      </section>
    </ProjectDetailWrapper>
  );
}
