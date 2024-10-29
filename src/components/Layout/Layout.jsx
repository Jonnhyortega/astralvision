import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
