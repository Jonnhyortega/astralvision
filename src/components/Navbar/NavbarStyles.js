import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1000;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-right: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 250px;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(0, 0, 0, 0);
  transform: translateX(${(props) => (props.isOpen ? "0" : "-215px")});
  box-shadow: ${(props) =>
    props.isOpen ? "1px 1px 10px 1px rgba(0, 0, 0, 0)" : "none"};
  div {
    display: flex;
    justify-content: center;
    align-items: end;
  }
  transition: transform 0.3s ease;
`;

export const NavLink = styled(Link)`
  color: var(--color2);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    color: white;
    background-color: var(--color1);
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
