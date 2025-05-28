import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  loaded?: boolean;
}

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  margin-left: 15px;
  &::placeholder {
    font-family: Raleway;
    font-size: 17.1px;
    font-weight: 200;
    font-size: 15px;
  }
`;

export const StyledSearchIcon = styled(IoSearchOutline)`
  margin-right: 7px;
  color: #1c1d20;
  font-size: 35px;
`;

export const DivFilmes = styled.div`
  margin-top: 60px;
`;

export const ContainerInput = styled.div`
  width: 940px;
  height: 48px;
  border-radius: 13px;
  background-color: #e8e6e5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 70px;
  @media (max-width: 960px) {
    width: 100%;
    max-width: 600px;
    height: 48px;
  }
  @media (max-width: 780px) {
    width: 100%;
    max-width: 500px;
    height: 38px;
  }
`;

export const ButtonSend = styled.button`
  height: 48px;
  width: 55px;
  background-color: #198de0;
  outline: none;
  border: none;
  border-radius: 0px 12px 12px 0px;
  @media (max-width: 780px) {
    width: 100%;
    max-width: 40px;
    height: 38px;
  }
`;

export const Background = styled.div<Props>`
  background-color: #1c1d20;
  height: ${({ loaded }) => (loaded ? "100%" : "100vh")};
  align-items: center;
  flex-direction: column;
`;
