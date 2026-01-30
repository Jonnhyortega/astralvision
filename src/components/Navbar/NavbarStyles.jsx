import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarNav = styled.nav`
  position: fixed;
  top: ${({ $scrollDirection }) => ($scrollDirection === "down" ? "-100px" : "0")};
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 18px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  transition: top 0.5s ease, background 0.3s ease;

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
    gap: 32px;
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
  top: ${({ $showMenu }) => ($showMenu ? "0" : "-100vh")};
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0f0f14 0%, #0f3d5e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  transition: top 0.4s ease-in-out;
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

export const NavbarWrapper = ({ $scrollDirection, $showMenu, children, ...props }) => {
    return (
        <NavbarNav $scrollDirection={$scrollDirection} $showMenu={$showMenu} {...props}>
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
