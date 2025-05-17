import { useState, useEffect } from "react";
import { NavbarWrapper, NavLink } from "./NavbarStyles";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../imgs/LogoAstral.webp";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

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
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/projects"}>Proyectos</NavLink>
        <NavLink to={"/contact"}>Contacto</NavLink>
        <NavLink to={"/services"}>Servicios</NavLink>
      </div>

      {showMenu ? (
        <HiOutlineX onClick={handleToggleMenu} className="text-2xl toggle-menu" />
      ) : (
        <HiOutlineMenu onClick={handleToggleMenu} className="text-2xl toggle-menu" />
      )}

      <div className={`menu-mobile ${showMenu ? "menu-mobile-open" : "menu-mobile-close"}`}>
        <NavLink onClick={handleToggleMenu} to={"/"}>
          Inicio
        </NavLink>
        <NavLink onClick={handleToggleMenu} to={"/projects"}>
          Proyectos
        </NavLink>
        <NavLink onClick={handleToggleMenu} to={"/contact"}>
          Contacto
        </NavLink>
        <NavLink onClick={handleToggleMenu} to={"/services"}>
          Servicios
        </NavLink>

        <small>
          <h4>Astral Vision.©</h4>
          {new Date().getFullYear()}
        </small>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
