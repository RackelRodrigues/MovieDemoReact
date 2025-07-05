import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 480px) {
    padding: 6px 15px;
  }
`;
