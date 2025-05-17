import React from "react";
import { CardProjectWrapper } from "./CardProjectStyles";
import { FiExternalLink } from "react-icons/fi";
import "animate.css";

export const CardProject = ({ projectObject }) => {
  function limpiarURL(url) {
    return url.replace(/^https:\/\/www\./, "");
  }

  return (
    <CardProjectWrapper style={{ background: projectObject.color[0] }}>
      <h3 style={{ color: projectObject.color[1] }}>{projectObject.name}</h3>
      <div>
        <img
          className="animate__animated animate__jackInTheBox"
          src={projectObject.img[0]}
          alt={projectObject.name}
        />
      </div>

      <span style={{ color: projectObject.color[1] }}>
        {projectObject.description}
      </span>

      <a
        style={{ background: projectObject.color[0] }}
        href={projectObject.link}
        target="_blank"
      >
        Visitar
      </a>
    </CardProjectWrapper>
  );
};

export default CardProject;
