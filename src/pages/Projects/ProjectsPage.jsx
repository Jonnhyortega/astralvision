import React from "react";
import { ProjectsWrapper } from "./ProjectsPageStyles";
import projects from "../../utils/projects";
import { CardProject } from "../../components/CardProject/CardProject";

export default function ProjectsPage() {
  return (
    <ProjectsWrapper>
      <div>
        {projects.map((project) => (
          <CardProject key={project.id} projectObject={project} />
        ))}
      </div>
    </ProjectsWrapper>
  );
}
