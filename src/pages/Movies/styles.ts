import styled from "styled-components";

export const Background = styled.div`
  background-color: #1c1d20;

  width: 100%;

  box-sizing: border-box;
  @media (min-width: 834px) and (max-width: 1194px) {
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
  @media (max-width: 350px) {
    gap: 0.2rem;
    padding: 0.4rem 0.1rem;
  }
  .ContainerSearch {
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 90rem;
    flex-direction: row;
    gap: 0.5rem;
    padding: 2rem 0;

    @media (min-width: 834px) and (max-width: 1194px) {
      padding: 2rem 0;
    }
    @media (max-width: 1024px) {
      padding: 1rem 0;
    }
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
    @media (max-width: 480px) {
      width: 100%;
      padding: 0;
    }
    @media (max-width: 350px) {
      display: flex;
      width: 100%;
      margin: 0;
      padding: 1rem 0;
    }
  }

  .ContainerSearch > input {
    flex: 2;
  }

  .ContainerSearch > select,
  .ContainerSearch > div {
    flex: 1;
  }
  .ContainerTitle {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding-bottom: 1rem;
    @media (max-width: 480px) {
      /* padding: 0 0 0 0.5rem; */
    }
  }
`;

export const CardLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
