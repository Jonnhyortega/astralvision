import logo from "../../imgs/LogoAstral.webp";
import styled from "styled-components";
import "animate.css";

const LogoContent = styled.div`
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  margin-top: 4rem;
  img {
    width: 150px;
    border-radius: 50%;
  }
`;

export const LogoComponent = () => {
  return (
    <LogoContent className="animate__animated animate__backInLeft">
      <img src={logo} alt="Logo Astral" />
    </LogoContent>
  );
};
