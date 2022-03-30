import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import { MEDIA_QUERY_LG } from "../../components/style";

export const HomeContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const HeroContent = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 400;
  text-align: center;
  max-width: 800;
`;

export const PostsWrapper = styled.div`
  width: min(95%, 70rem);
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(270px,1fr));
`;

export const PostCard = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 8px #ccc;
  padding: 1.25rem;
  legend {
    font-weight: bold;
  }
  h3 {
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    color: ${(props) => props.theme.colors.textSecondary};
  }
  h4 {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const LinkRegister = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-decoration: none;
  list-styled: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #43AA15;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2 ease-in-out;
  }
`;

export const RegisterForm = styled.form`
  width: min(90%, 70rem);
  border-radius: 20px;
  box-shadow: 2px 2px 8px #ccc;
  background-color: white;
  padding: 1.25rem;
  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    text-align: center;
    color: ${(props) => props.theme.colors.textSecondary};
  }
  ${MEDIA_QUERY_LG} {
    padding: 1.5rem 20ch;
  }
`;
