import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* Contexto de apilamiento propio: el fondo de constelación (z-index -1)
     queda detrás de todo el contenido pero encima del fondo del body. */
  position: relative;
  isolation: isolate;
`;
