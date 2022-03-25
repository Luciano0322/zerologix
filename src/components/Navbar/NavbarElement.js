   
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 3.5rem;
  background: ${(props) => props.bgColor || '#ccc'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem 0;
  ${(props) => props.variant === "left" && `flex-direction: row-reverse;`}
`;

export const OptionsWapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;