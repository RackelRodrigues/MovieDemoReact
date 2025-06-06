import styled from "styled-components";

export const Background = styled.div`
  background-color: #1c1d20;
  height: 100vh;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 48.75rem) {
    // 780px
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const H1 = styled.h1`
  font-family: Plus Jakarta Sans;
  font-size: 7.25rem; // 116px
  font-weight: 800;
  color: #fff;

  @media (max-width: 64.06rem) {
    // 1025px
    font-size: 4.375rem; // 70px
  }

  @media (max-width: 48.75rem) {
    // 780px
    font-size: 2.8125rem; // 45px
  }
`;

export const Subtitle = styled.p`
  font-family: Raleway;
  font-size: 2.875rem; // 46px
  font-weight: 200;
  color: #e8e6e5;
  width: 28.7rem; // 459px

  @media (max-width: 64.06rem) {
    // 1025px
    font-size: 1.875rem; // 30px
  }

  @media (max-width: 48.75rem) {
    // 780px
    font-size: 1.125rem; // 18px
    width: 12rem; // 192px
  }
`;

export const ButtonHome = styled.button`
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 1rem;
  background-color: #198de0;
  color: #e8e6e5;
  font-family: Raleway;
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  @media (max-width: 780px) {
    width: 8rem;
    height: 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-left: 2rem;
  }
`;

export const ContainerErro = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 780px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 500px;
  height: 500px;
  @media (max-width: 1025px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 780px) {
    width: 215px;
    height: 215px;
  }
`;
