import styled from "styled-components";

export const Containername = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 768px) {
    max-width: 10rem;
  }

  @media (max-width: 480px) {
    max-width: 12rem;
  }

  @media (max-width: 350px) {
    max-width: 10rem;
  }
`;

export const ImgMovie = styled.img`
  max-width: 15rem;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: filter 0.3s;
  z-index: 0;
  border-radius: 0.3rem;
  object-fit: cover;
  &:hover {
    filter: brightness(70%);
  }

  &:hover + button {
    opacity: 1;
  }

  @media (max-width: 768px) {
    max-width: 10rem;
    height: 14rem;
  }
`;

export const TitleMovie = styled.p`
  font-family: var(--font-poppins);
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--color-primary);
  background-color: transparent;
  max-width: 15rem;

  @media (max-width: 768px) {
    max-width: 10rem;
  }

  @media (max-width: 480px) {
    max-width: 10rem;
    font-size: 1rem;
  }

  @media (max-width: 350px) {
    max-width: 16rem;
    font-size: 0.9rem;
  }
`;

export const ContainerMovies = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  box-sizing: border-box;
  width: 100%;
  gap: 3rem;

  @media (min-width: 834px) and (max-width: 1194px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    align-items: center;
    gap: 1.2rem;
  }
`;
