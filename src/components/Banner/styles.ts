import styled from "styled-components";
import { motion } from "framer-motion";

interface ImgProps {
  $UrlImage?: string;
}

export const MotionWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;

  max-height: 23rem;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  @media (min-width: 834px) and (max-width: 1194px) {
    max-height: 30rem;
  }
  @media (max-width: 768px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    max-width: 26rem;
  }

  @media (max-width: 350px) {
    margin-left: 0.3rem;
  }
`;

export const ImgBanner = styled.div<ImgProps>`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 6.5;
  max-height: 21rem;
  border-radius: 0.5rem;
  margin: 0 auto;

  background-image: ${({ $UrlImage }) =>
    $UrlImage ? `url(https://image.tmdb.org/t/p/w500/${$UrlImage})` : "none"};
  background-size: cover;
  background-position: center;
  z-index: 1;
  @media (min-width: 834px) and (max-width: 1194px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 50rem;
  }

  @media (max-width: 480px) {
    max-width: 26rem;
    height: 14rem;
  }

  @media (max-width: 350px) {
    max-width: 100%;
    height: 10rem;
  }

  .ContainerDetails {
    display: flex;
    align-items: center;
    background-color: transparent;
  }
`;

export const Title = styled.h1`
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.8rem;
  color: white;
  z-index: 1000;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const Year = styled.h3`
  font-family: var(--font-inter);
  font-weight: 300;
  font-size: 1.5rem;
  color: white;
  background: transparent;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const DescriptionBanner = styled.p`
  color: white;
  font-family: var(--font-inter);
  font-weight: 300;
  font-size: 1rem;
  background: transparent;
  width: 100%;
  word-break: break-word;
  max-width: 50rem;

  @media (min-width: 834px) and (max-width: 1194px) {
    padding: 0;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.5rem;
    font-weight: 400;
  }
  @media (max-width: 350px) {
    width: 100%;
    max-width: 16rem;
    font-size: 0.4rem;
    font-weight: 500;
  }
`;
