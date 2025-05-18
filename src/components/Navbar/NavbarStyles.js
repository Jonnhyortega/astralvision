import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  position: fixed;
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-100px" : "0"};
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 40px;
  transition: transform 0.8s ease, top 0.6s ease;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);
  border-bottom: ${({ scrollDirection }) =>
    scrollDirection === "down"
      ? "1px solid var(--third)"
      : "5px solid var(--third)"};

  .active-menu {
    border-bottom: 3px solid var(--third);
    letter-spacing: 2px;
    color: var(--third);
  }

  .active-menu-mobile {
    border-bottom: 3px solid black;
    letter-spacing: 2px;
    color: black;
  }

  img {
    position: absolute;
    border-radius: 50%;
    width: 60px;
    border: ${({ scrollDirection }) =>
      scrollDirection === "down" ? "2px solid var(--third)" : "transparent"};
    box-shadow: ${({ scrollDirection }) =>
      scrollDirection === "down" ? "1px 1px 5px 1px black" : "none"};
    left: ${({ scrollDirection }) =>
      scrollDirection === "down" ? "5px" : "5px"};
    transition: 1s;
    top: ${({ scrollDirection }) =>
      scrollDirection === "down" ? "105px" : "10px"};
    transition: 0.8s;
  }

  .menu-desktop {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .toggle-menu {
    display: none;
    font-size: 2rem;
    color: var(--color1);
    cursor: pointer;
    position: absolute;
    top: 4px;
    top: ${({ scrollDirection }) =>
      scrollDirection === "down" ? "-100px" : "25px"};
    right: 20px;
    transition: all 0.7s ease;
    z-index: 1001;
  }

  .menu-mobile-open {
    gap: 20px;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0;
    background-color: var(--third);
    transition: all 0.4s ease;
  }

  .menu-mobile-close {
    overflow: hidden;
    width: 1px;
    height: 1px;
    transition: all 0.4s ease;
    top: -200px;
  }

  .menu-mobile {
    transition: all 1s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: absolute;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 0;
      width: 100px;
      height: 100px;
      border-top: 10px solid white;
      border-right: 10px solid transparent;
    }

    &::after {
      content: "";
      position: absolute;
      top: 15px;
      left: 0;
      width: 80px;
      height: 100px;
      border-top: 10px solid whitesmoke;
      border-right: 10px solid transparent;
    }

    a {
      color: white;
    }

    .astral-logo {
      color: white;
      font-size: 0.8rem;
      margin-top: 50px;
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
      }
    }
  }

  @media (max-width: 568px) {
    .toggle-menu {
      display: flex;
    }

    .menu-desktop {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1px 5px;
  transition: 0.1s ease;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  font-family: var(--oswald);
  padding-bottom: 5px;

  &:hover {
    border-bottom: 3px solid var(--third);
    color: var(--third);
  }
`;
