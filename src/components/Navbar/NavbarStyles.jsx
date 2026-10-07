import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 18px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Con el menú mobile abierto no se aplica transform ni backdrop-filter:
     ambos convertirían al nav en contenedor del .menu-mobile (position: fixed). */
  transform: ${({ $hidden, $showMenu }) => ($hidden && !$showMenu ? "translateY(-100%)" : "none")};
  background-color: ${({ $scrolled, $showMenu }) => ($scrolled && !$showMenu ? "rgba(5, 5, 15, 0.75)" : "transparent")};
  backdrop-filter: ${({ $scrolled, $showMenu }) => ($scrolled && !$showMenu ? "blur(12px)" : "none")};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s ease;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  .menu-desktop {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .chatbot-nav-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(0, 119, 182, 0.25));
    border: 1px solid rgba(0, 180, 216, 0.5);
    color: #00b4d8;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: var(--font-sans);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 180, 216, 0.15);

    &:hover {
      background: #00b4d8;
      color: #000;
      transform: translateY(-2px);
      box-shadow: 0 0 15px rgba(0, 180, 216, 0.5);
    }
  }

  .mobile-chat-btn {
    padding: 12px 24px;
    font-size: 1.2rem;
  }

  .toggle-menu {
    display: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    z-index: 1001;
  }

  .menu-mobile {
  position: fixed;
  top: 0;
  transform: ${({ $showMenu }) => ($showMenu ? "none" : "translateY(-100%)")};
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0f0f14 0%, #0f3d5e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  transition: transform 0.4s ease-in-out;
  backdrop-filter: blur(10px);

  a {
    color: #e8f0f7;
    font-size: 1.6rem;
    text-decoration: none;
    transition: 0.3s ease;
    font-family: var(--oswald);
    &:hover {
      color: #0ff;
      transform: scale(1.05);
    }
  }

  .astral-logo {
    color: #ccc;
    font-size: 0.9rem;
    text-align: center;
    margin-top: auto;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1px;
    }

    span {
      font-size: 0.8rem;
      color: #aaa;
      padding-bottom: 2rem ;

    }
  }
}


  @media (max-width: 768px) {
    padding: 16px 25px;

    .menu-desktop {
      display: none;
    }

    .toggle-menu {
      display: block;
    }
  }
`;

export const NavbarWrapper = ({ $hidden, $scrolled, $showMenu, children, ...props }) => {
    return (
        <NavbarNav $hidden={$hidden} $scrolled={$scrolled} $showMenu={$showMenu} {...props}>
            {children}
        </NavbarNav>
    );
};

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &.active-menu {
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }

  &:hover {
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #0ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
