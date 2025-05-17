import React from "react";
import { OpinionsWrapper } from "./OpinionsStyles";
import opinion1 from "../../imgs/Opinions/opinion1.webp";
import opinion2 from "../../imgs/Opinions/opinion2.webp";
import opinion3 from "../../imgs/Opinions/opinion3.webp";

export const Opinions = () => {
  const opinions = [opinion1, opinion2, opinion3];
  return (
    <OpinionsWrapper>
      <h2>Testimonios</h2>
      <div>
        {opinions.map((img, index) => {
          return (
            <a
              key={index}
              href="https://maps.app.goo.gl/MuDzaEkscywn51hK8"
              target="_blank"
            >
              <img src={img} alt="opinion" />;
            </a>
          );
        })}
      </div>
    </OpinionsWrapper>
  );
};

export default Opinions;
