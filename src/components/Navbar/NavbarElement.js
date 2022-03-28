   
import styled from "styled-components";
import { MEDIA_QUERY_LG } from "../style";

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: calc(100% - 2rem);
  height: 3.5rem;
  background: ${(props) => props.bgColor || '#ccc'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem 0rem;
  margin: 0 1rem;
  ${(props) => props.variant === "left" && `flex-direction: row-reverse;`}
`;

export const NavItemsWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const BurgerWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 50px;
  margin: 0 0.25rem;
  padding-right: 0.5rem;
  z-index: 100;
  cursor: pointer;
  span {
    background: black;
    border-radius: 10px;
    height: 6px;
    margin: 5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 100%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 100%;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(12px, 10px);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg) translate(-1px, 0px);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 0%;
    transform: translate(20px, -9px) rotatez(45deg);
  }
  ${MEDIA_QUERY_LG} {
    display: none;
  }
`;