import React from "react";
import { LayoutWrapper } from "./LayoutStyles";

// El scroll al inicio en cada cambio de ruta lo hace AppRoutes (onExitComplete).
export const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
