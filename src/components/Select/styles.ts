import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
`;

export const StyledSelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
    /* padding: 0.5rem 0; */
  }
`;

export const Option = styled.option`
  background-color: white;
  color: black;
  width: 100%;
  max-width: 20rem;
  font-size: inherit;
  background-color: blueviolet;
  /* font-size: 1rem; */

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
