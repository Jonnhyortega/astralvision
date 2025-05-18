import { useState, useEffect } from "react";
import { NavbarWrapper, NavLink } from "./NavbarStyles";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../imgs/LogoAstral.webp";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const { pathname } = useLocation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <NavbarWrapper scrollDirection={scrollDirection}>
      <img src={logo} alt="Astral Vision Estudio" />
      <div className="deco"></div>

      <div className="menu-desktop">
        <NavLink className={pathname === "/" ? "active-menu" : ""} to={"/"}>
          Inicio
        </NavLink>
        <NavLink
          className={pathname === "/projects" ? "active-menu" : ""}
          to={"/projects"}
        >
          Proyectos
        </NavLink>
        <NavLink
          className={pathname === "/contact" ? "active-menu" : ""}
          to={"/contact"}
        >
          Contacto
        </NavLink>
        <NavLink
          className={pathname === "/services" ? "active-menu" : ""}
          to={"/services"}
        >
          Servicios
        </NavLink>
      </div>

      {showMenu ? (
        <HiOutlineX
          onClick={handleToggleMenu}
          className="text-2xl toggle-menu"
        />
      ) : (
        <HiOutlineMenu
          onClick={handleToggleMenu}
          className="text-2xl toggle-menu"
        />
      )}

      <div
        className={`menu-mobile ${
          showMenu ? "menu-mobile-open" : "menu-mobile-close"
        }`}
      >
        <NavLink
          className={pathname === "/" ? "active-menu-mobile" : ""}
          onClick={handleToggleMenu}
          to={"/"}
          style={{ marginTop: "150px" }}
        >
          Inicio
        </NavLink>
        <NavLink
          className={pathname === "/projects" ? "active-menu-mobile" : ""}
          onClick={handleToggleMenu}
          to={"/projects"}
        >
          Proyectos
        </NavLink>
        <NavLink
          className={pathname === "/contact" ? "active-menu-mobile" : ""}
          onClick={handleToggleMenu}
          to={"/contact"}
        >
          Contacto
        </NavLink>
        <NavLink
          className={pathname === "/services" ? "active-menu-mobile" : ""}
          onClick={handleToggleMenu}
          to={"/services"}
        >
          Servicios
        </NavLink>

        <div className="astral-logo">
          <h1>Astral Vision.©</h1>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
