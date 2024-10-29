import React from "react";
import logo from "../../imgs/LogoAstral.jpeg";
import styled from "styled-components";

const LogoContent = styled.div`
  position: fixed;
  top: -2px;
  right: -55px;

  img {
    width: 50px;
    border-radius: 50%;
    // animation: spin 5s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LogoComponent = () => {
  return (
    <LogoContent>
      <img src={logo} alt="Logo Astral" />
    </LogoContent>
  );
};
