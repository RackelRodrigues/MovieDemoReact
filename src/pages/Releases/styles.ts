import styled from "styled-components";

export const Background = styled.div`
  background-color: #1c1d20;
  height: 100%;
  padding: 2rem;
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
  .ContainerTitle {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem 0 0.5rem 0;
    @media (max-width: 480px) {
      padding: 1rem 0 0.5rem 0.5rem;
    }
  }
`;
