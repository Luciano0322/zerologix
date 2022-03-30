import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  background: ${(props) => props.bgColor || "transparent"};
  backdrop-filter: blur(20px);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.opened ? "100%" : "0")};
  right: ${(props) => (props.opened ? "0" : "-100%")};
`;
