import { useState, useEffect, useRef } from "react";
import { getNavbarState } from "../../lib/navbarState";
import { getLenis } from "../../lib/lenis";
import { NavbarWrapper, NavLink } from "./NavbarStyles";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import logo from "../../imgs/LogoAstral.webp";
import { useLocation } from "react-router-dom";

export const Navbar = ({ onOpenChat }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [navState, setNavState] = useState({ hidden: false, scrolled: false });
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const { pathname } = useLocation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const next = getNavbarState(lastScrollY.current, y);
      lastScrollY.current = y;
      setNavState((prev) =>
        prev.hidden === next.hidden && prev.scrolled === next.scrolled ? prev : next
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      getLenis()?.stop();
    } else {
      document.body.style.overflow = "auto";
      getLenis()?.start();
    }

    return () => {
      document.body.style.overflow = "auto";
      getLenis()?.start();
    };
  }, [showMenu]);


  return (
    <NavbarWrapper $hidden={navState.hidden} $scrolled={navState.scrolled} $showMenu={showMenu}>
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
        <button
          className="chatbot-nav-btn"
          onClick={() => onOpenChat && onOpenChat()}
        >
          <SmartToyIcon style={{ fontSize: "1.2rem" }} />
          <span>Asistente IA</span>
        </button>
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
        className={`menu-mobile ${showMenu ? "menu-mobile-open" : "menu-mobile-close"
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

        <button
          className="chatbot-nav-btn mobile-chat-btn"
          onClick={() => {
            handleToggleMenu();
            if (onOpenChat) onOpenChat();
          }}
        >
          <SmartToyIcon style={{ fontSize: "1.4rem" }} />
          <span>Asistente IA</span>
        </button>

        <div className="astral-logo">
          <h1>Astral Vision.©</h1>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
