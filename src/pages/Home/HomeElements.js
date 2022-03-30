import styled from "styled-components";

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
`;