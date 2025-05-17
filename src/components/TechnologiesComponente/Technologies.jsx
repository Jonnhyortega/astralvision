import { useState } from "react";
import Modal from "./Modal";
import { TechnologiesContent } from "./TechnologiesStyles";

export default function Technologies() {
  const [techToRender, setTechToRender] = useState("");

  const handleOnmouseEnter = (string) => {
    setTechToRender(string);
  };

  const handleOnmouseLeave = () => {
    setTechToRender("");
  };

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
  ];

  return (
    <TechnologiesContent>
      {/* <h3>Nos especializamos en</h3> */}
      <div>
        {techs.map((tech) => (
          <div
            className="content-img"
            key={tech.id}
          >
            <img
              className="img-technologies"
              src={tech.src}
              alt={tech.alt}
            />
            {techToRender === tech.id && <Modal tech={tech.id} />}
          </div>
        ))}
      </div>
    </TechnologiesContent>
  );
}
