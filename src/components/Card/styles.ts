import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const H1 = styled.h1`
  font-family: Raleway;
  font-size: 32px;
  font-weight: 200;
  color: #e8e6e5;

  @media (max-width: 780px) {
    text-align: center;
    font-size: 25px;
  }
`;

export const Containername = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StarWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  right: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);

  padding: 0.2rem;
  border-radius: 0.2rem;
  @media (min-width: 834px) and (max-width: 1194px) {
    right: 3rem;
    bottom: 5px;
  }
  @media (max-width: 768px) {
    right: 2rem;
    bottom: 5px;
  }

  @media (max-width: 480px) {
    right: 1rem;
  }

  @media (max-width: 350px) {
    right: 1rem;
  }
`;

export const ImgMovie = styled.img`
  width: 14rem;
  height: 19rem;
  cursor: pointer;
  transition: filter 0.3s;
  z-index: 0;
  border-radius: 0.3rem;
  &:hover {
    filter: brightness(70%);
  }

  &:hover + button {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 14rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 12rem;
  }

  @media (max-width: 350px) {
    width: 15rem;
    height: 18rem;
  }
`;

export const Classification = styled.p`
  font-family: var(--font-poppins);
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  margin: 0;
  background-color: transparent;
`;

export const TitleMovie = styled.p`
  font-family: var(--font-poppins);
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--color-primary);
  margin: 0;
  background-color: transparent;
  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 350px) {
    max-width: 16rem;
  }
`;

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 2.8rem;
  max-width: 92rem;
  margin: 0 auto;

  @media (min-width: 834px) and (max-width: 1194px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    justify-items: center;
  }
`;

export const ContainerStar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 12rem;
`;
export const Star = styled(FaStar)`
  cursor: pointer;
  background-color: transparent;
  color: black;
  width: 1rem;
`;
