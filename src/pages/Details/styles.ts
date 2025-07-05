import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
interface Props {
  UrlImage?: string;
}
export const Background = styled.div`
  background: transparent;

  width: 100%;
  height: 100%;

  padding-bottom: 10rem;
  .Container {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    background: transparent;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    z-index: 1000;
    @media (min-width: 834px) and (max-width: 1194px) {
      padding-top: 2rem;
    }

    @media (max-width: 768px) {
      padding-top: 2rem;
    }
  }

  .ContainerTitle {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding-top: 4rem;
    @media (min-width: 834px) and (max-width: 1194px) {
      padding: 2rem;
    }
    @media (max-width: 768px) {
      padding: 2rem;
    }

    @media (max-width: 480px) {
      padding: 0;
    }

    @media (max-width: 350px) {
      padding: 0 0 0 0.5rem;
    }
  }
`;

export const CardLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const BackgroundContent = styled.div<Props>`
  position: relative;
  padding: 2rem;
  width: 100%;
  height: 40rem;
  mask-image: linear-gradient(
    to bottom,
    black 50%,
    rgba(0, 0, 0, 0.3) 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 50%,
    rgba(0, 0, 0, 0.3) 80%,
    transparent 100%
  );

  background-image: ${({ UrlImage }) =>
    UrlImage ? `url(https://image.tmdb.org/t/p/w500/${UrlImage})` : "none"};
  background-size: cover;
  background-position: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    z-index: 1;
    border-radius: inherit;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .image {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  .year {
    display: flex;
    width: 100%;
    display: inline-flex;
    align-items: baseline;

    flex-wrap: wrap;
  }

  div {
    background: transparent;
  }
`;

export const ImgMedia = styled.img`
  width: 100%;
  height: auto;
  max-width: 20rem;
  max-height: 28rem;
  z-index: 1000;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    max-width: 25rem;
  }

  @media (max-width: 480px) {
    max-width: 10rem;
    max-height: 15rem;
  }

  @media (max-width: 350px) {
    max-width: 7rem;
    max-height: 10rem;
  }
`;

export const Tag = styled.h3`
  background: transparent;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 1.25rem;
  color: #000;

  span {
    font-weight: bold;
    background: transparent;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
export const TagAn = styled.h3`
  background: transparent;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--color-white);

  span {
    font-weight: bold;
    background: transparent;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
export const Star = styled.div`
  background: transparent;
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--color-white);

  display: flex;
  align-items: center;
`;

export const ContainerInfo = styled.div``;

export const Title = styled.h2`
  color: #000;
  background-color: transparent;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.8rem;
  text-transform: uppercase;

  @media (min-width: 834px) and (max-width: 1194px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const Year = styled.h4`
  font-family: var(--font-inter);
  font-weight: 300;
  color: #000;
  background-color: transparent;
  margin-left: 0.4rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-left: 0;
  }
`;
export const TagGender = styled.p`
  color: #000;
  width: auto;
  font-family: var(--font-inter);
  font-weight: 400;

  background-color: transparent;
`;

export const Description = styled.p`
  font-family: var(--font-inter);
  font-weight: 300;
  color: #000;
  background: transparent;
  width: 100%;
  max-width: 51rem;
  font-size: 1rem;

  @media screen and (max-width: 450px) and (min-width: 310px) {
    font-size: 0.8rem;
    max-width: 100%;
    font-size: 0.6rem;
    font-weight: 500;
  }
`;

export const ContainerActors = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 834px) and (max-width: 1194px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 1rem;
    gap: 1rem;
    height: 100%;
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
    gap: 1.5rem;
    width: 100%;
  }
  .actorContainer {
    height: 100%;

    @media screen and (max-width: 480px) {
      padding: 0.5rem 0;
    }
  }
`;

export const ImgActor = styled.img`
  width: 100%;
  height: 100%;
  max-height: 12rem;
  max-width: 10rem;
  border-radius: 0.5rem;

  @media (min-width: 834px) and (max-width: 1194px) {
    max-width: 15rem;
    max-height: 16rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 0.3rem;
  }

  @media (max-width: 350px) {
    max-width: 24rem;
    max-height: 24rem;
    border-radius: 0.2rem;
  }
`;
export const NameActor = styled.h5`
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  font-weight: 300;

  color: var(--color-white);
  max-width: 10rem;
  margin-top: 0.5rem;
  text-align: center;
  @media (max-width: 480px) {
    margin-top: 0.2rem;
    max-width: 20rem;
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    margin-top: 0.2rem;
    max-width: 20rem;
    font-size: 0.5rem;
    text-align: center;
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  color: black;
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  @media (max-width: 350px) {
    font-size: 1.1rem;
  }
`;

export const ContainerItens = styled.div`
  gap: 4rem;
`;

export const ImgPath = styled.img`
  cursor: pointer;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  max-width: 18rem;
  max-height: 15rem;
  @media (min-width: 609px) and (max-width: 1024px) {
    max-width: 15rem;
    max-height: 12rem;
  }

  @media (max-width: 480px) {
    max-width: 10rem;
    max-height: 15rem;
  }
  @media (max-width: 350px) {
    max-width: 11rem;
    max-height: 15rem;
  }
`;
