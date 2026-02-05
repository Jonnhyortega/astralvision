
import React, { useMemo } from "react";
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

      <Headline>Nuestros Proyectos</Headline>

      <ProjectsGrid>
        {projectsRandom.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Header con gradiente de la marca y logo contenido */}
            <CardHeader bg={project.color.background || '#111'}>
              <img 
                src={project.logo} 
                alt={`${project.name} logo`} 
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
                  hoverColor={project.color.button || '#fff'}
                  shadowColor={project.color.button ? project.color.button + '66' : 'rgba(255,255,255,0.3)'}
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
