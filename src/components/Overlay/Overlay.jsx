import React from "react";
import { Overlay } from "./OverlayStyles";

function OverlayComponent({ children }) {
  return <Overlay>{children}</Overlay>;
}

export default OverlayComponent;
