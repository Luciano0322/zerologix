import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};
  flex-direction: ${(props) => props.flexDirection};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  background-color: ${(props) => props.bgColor};
`;
