import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  padding: 0.8rem 1rem;
  border: 0.2rem solid #ccc;
  border-radius: 0.5rem;
  font-size: 16px;
  width: 100%;
  background-color: white;
  appearance: none;

  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Option = styled.option`
  background-color: white;
  color: black;
  width: 100%;
  max-width: 20rem;
  font-size: inherit;
  background-color: white;

  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    size: 10rem;
  }
`;

export const ArrowIcon = styled.div`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1.2rem;
  color: #555;
  background-color: transparent;
`;

export const ArrowDown = styled(IoIosArrowDown)`
  background-color: transparent;
  pointer-events: none;
  color: black;
  cursor: pointer;
`;

export const ArrowUp = styled(IoIosArrowUp)`
  cursor: pointer;
  background-color: transparent;
  color: black;
`;
