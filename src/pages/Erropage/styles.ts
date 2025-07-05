import styled from "styled-components";

interface Props {
  type: boolean;
}

export const Background = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 10rem;
  color: #fff;
  letter-spacing: 1rem;
`;

export const Subtitle = styled.h3`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  color: #fff;
`;

export const ButtonHome = styled.button`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: transparent;
  color: #fff;
  font-family: Raleway;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
`;

export const Text = styled.p<Props>`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: ${({ type }) => (type ? "1.5rem" : "1rem")};
  font-weight: 100;
  @media (max-width: 780px) {
    margin: 0;
  }
`;

export const Container = styled.div``;
