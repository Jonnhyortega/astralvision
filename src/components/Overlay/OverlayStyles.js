import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  z-index: 2;
`;
