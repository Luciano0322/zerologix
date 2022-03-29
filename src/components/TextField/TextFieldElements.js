import styled from "styled-components";

export const InputWrapper = styled.div`
  display: ${(props) => (props.fullWidth ? "block":"inline-flex")};
  margin: 1rem;
  position: relative;
`;

export const InuptField = styled.input`
  outline: 0;
  border: 0;
  padding: 0.25rem;
  font-size: 1rem;
  ${(props) => (props.fullWidth && "width: 100%;" )}
  border-bottom: 2px solid ${(props) => (props.error ? "red" : "#ccc")};
  transition: all 0.2s ease-in-out;
  &:focus {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid ${(props) => (props.error ? "red" : props.color)};
  }
`;

export const InputLabel = styled.label`
  color: ${(props) => (props.error ? "red" : "#666")};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.25rem;
  transition: 0.2s ease all;
  top: -0.75rem;
  font-size: 0.75rem;
  ${InuptField}[value=""] ~ & {
    top: 0.5rem;
    font-size: 1rem;
  }
  ${InuptField}:focus ~ & {
    top: -0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.color};
  }
`;

export const HelperText = styled.small`
  padding-top: 0.25rem;
  color: ${(props) => (props.error ? "red" : "#666")};
  font-size: 0.5rem;
`;