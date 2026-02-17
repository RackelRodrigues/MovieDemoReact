import styled from "styled-components";

interface Props {
  size: "regular" | "medium" | "small";
}

export const H3 = styled.h3<Props>`
  font-family: var(--font-bebas);
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1rem";
      case "medium":
        return "1.5rem";
      case "regular":
      default:
        return "2rem";
    }
  }};
  color: var(--color-white);
`;
