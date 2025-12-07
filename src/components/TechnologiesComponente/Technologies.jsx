import { useState } from "react";
import projects from "../../utils/projects";
import { TechnologiesContent } from "./TechnologiesStyles";

export default function Technologies() {
  const [techToRender, setTechToRender] = useState("");
  const project_data = projects;

  const handleOnmouseEnter = (string) => setTechToRender(string);
  const handleOnmouseLeave = () => setTechToRender("");

  const techs = [
    {
      id: "javascript",
      src: "https://img.icons8.com/color/100/javascript--v1.png",
      alt: "Javascript",
    },
    {
      id: "react",
      src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png",
      alt: "React",
    },
    {
      id: "nextjs",
      src: "https://img.icons8.com/color/100/nextjs.png",
      alt: "Next Js",
    },
    {
      id: "nodejs",
      src: "https://img.icons8.com/color/100/nodejs.png",
      alt: "Node Js",
    },
    {
      id: "google-analytics",
      src: "https://static.cdnlogo.com/logos/a/62/analytics.svg",
      alt: "Google Analytics",
    },
    {
      id: "facebook-ads",
      src: "https://static.cdnlogo.com/logos/f/16/facebook-ads.svg",
      alt: "Facebook Ads",
    },
    {
      id: "python",
      src: "https://img.icons8.com/3d-fluency/94/python.png",
      alt: "Python",
    }
  ];

  const clients = [
    {
      name: "Viandas H&G",
      src: "https://res.cloudinary.com/do87isqjr/image/upload/v1761247975/logo_2_z1dcau.webp",
    },
    {
      name: "Sanitarios Lugano",
      src: "https://res.cloudinary.com/do87isqjr/image/upload/v1761247566/LogoBlue_myntoz.jpg",
    },
    {
      name: "Hc habilitaciones",
      src: "https://res.cloudinary.com/do87isqjr/image/upload/v1761247432/logo_au2kan.webp",
    },
    {
      name: "Creatina Sticks",
      src: "https://res.cloudinary.com/do87isqjr/image/upload/v1761247688/logo_-_copia_mvyoq5.jpg",
    },
  ];

  return (
    <TechnologiesContent>
      {/* <div className="intro">
        <h3>
          Tecnologías de vanguardia <span>confiables y profesionales</span>
        </h3>
        <p>
          En Astral Vision usamos herramientas modernas para garantizar
          rendimiento, seguridad y escalabilidad en cada proyecto.
        </p>
      </div> */}

      {/* <div className="tech-grid">
        {techs.map((tech) => (
          <div
            className="content-img"
            key={tech.id}
            
          >
            <img className="img-technologies" src={tech.src} alt={tech.alt} />
          </div>
        ))}
      </div> */}

      <div className="clients-section">
        <h4>Marcas que <span>confían en nosotros</span></h4>
        <div className="clients-logos">
          {projects.map((p) => (
            <img key={p.id} src={p.logo} alt={"Logo de " + p.name} />
          ))}
        </div>
      </div>
    </TechnologiesContent>
  );
}
