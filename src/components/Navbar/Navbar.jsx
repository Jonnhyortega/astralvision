import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faFolder,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // Icono de menú
import { NavbarWrapper, NavLink, ToggleButton } from "./NavbarStyles";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { LogoComponent } from "../LogoComponent/LogoComponent";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavbarWrapper isOpen={isOpen}>
      <div>
        <NavLink to="/" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/promocion" onClick={toggleNavbar}>
        Promo
          {/* <FontAwesomeIcon icon={faHome} /> */}
        </NavLink>
        <NavLink to="/contact" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        {/* <NavLink to="/projects" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faFolder} />
        </NavLink> */}
      </div>
      <ToggleButton onClick={toggleNavbar}>
        {isOpen ? <MdOutlineArrowBackIosNew /> : <MdOutlineArrowForwardIos />}
      </ToggleButton>

      <LogoComponent />
    </NavbarWrapper>
  );
}
