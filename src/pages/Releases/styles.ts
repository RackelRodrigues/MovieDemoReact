import styled from "styled-components";

export const Background = styled.div`
  background-color: #1c1d20;
  height: 100%;
  padding: 0 1rem;
  .ContainerTitle {
    width: 100%;
    max-width: 103rem;
    margin: 0 auto;
    padding: 2rem 0 0.5rem 0;
    @media (max-width: 480px) {
      padding: 1rem 0 0.5rem 0.5rem;
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
