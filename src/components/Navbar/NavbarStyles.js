import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: transparent;
  transition: transform 0.3s ease;
`;

export const NavLink = styled(Link)`
  color: var(--color2);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1px 5px;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background-color: var(--third);
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color1);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 6px;
  &:hover {
    color: #fff;
  }
`;
