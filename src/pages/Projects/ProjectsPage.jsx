
import React, { useMemo } from "react";
import { Reveal } from "../../components/motion";
import { fadeUp, hoverLift, revealViewport } from "../../lib/motion";
import projects from "../../utils/projects";
import SEO from "../../components/SEO/SEO";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { 
  ProjectsWrapper, 
  Headline,
  ProjectsGrid, 
  ProjectCard, 
  CardHeader, 
  CardBody, 
  ProjectTitle, 
  ProjectDescription, 
  CardFooter,
  VisitButton 
} from "./ProjectsPageStyles";

export default function ProjectsPage() {
  const projectsRandom = useMemo(() => {
    return [...projects].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <ProjectsWrapper>
      <SEO 
        title="Portfolio de Proyectos | Astral Vision"
        description="Descubre nuestros últimos trabajos en diseño web, e-commerce y desarrollo de software."
      />

      <Reveal>
        <Headline>Nuestros Proyectos</Headline>
      </Reveal>

      <ProjectsGrid>
        {projectsRandom.map((project) => (
          <ProjectCard
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeUp}
            whileHover={hoverLift}
            $accent={project.color.button || project.color.font}
          >
            {/* Header con el logo del proyecto sobre sus colores */}
            <CardHeader $bg={project.color.background} $accent={project.color.button || project.color.font}>
              <img
                src={project.logo}
                alt={`Logo de ${project.name}`}
                className="project-logo"
                loading="lazy"
              />
            </CardHeader>
            
            <CardBody>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <CardFooter>
                <VisitButton 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  $hoverColor={project.color.button || '#fff'}
                  $shadowColor={project.color.button ? project.color.button + '66' : 'rgba(255,255,255,0.3)'}
                >
                  Visitar Sitio <ArrowOutwardIcon style={{ fontSize: '1.1rem' }} />
                </VisitButton>
              </CardFooter>
            </CardBody>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
}
