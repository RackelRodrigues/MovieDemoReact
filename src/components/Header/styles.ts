import styled from "styled-components";
import { PiPopcornFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { MdCameraRoll } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export const Wrapper = styled.div`
  background-color: #1c1d20;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPipop = styled(PiPopcornFill)`
  color: #198de0;
  font-size: 50px;

  @media (max-width: 776px) {
    font-size: 40px;
    color: #198de0;
  }
`;

export const HomeIcon = styled(IoHome)`
  color: #e8e6e5;
  font-size: 30px;
  margin-right: 10px;
`;

export const SearchIcon = styled(IoSearch)`
  color: #e8e6e5;
  font-size: 30px;
`;

export const MovieIcon = styled(BiCameraMovie)`
  color: #e8e6e5;
  font-size: 30px;
  margin-left: 10px;
`;

export const CameraIcon = styled(MdCameraRoll)`
  color: #e8e6e5;
  font-size: 30px;
  margin-left: 10px;
`;

export const TituloLogo = styled.h2`
  font-family: Raleway;
  font-size: 30px;
  font-weight: 300;
  color: #198de0;
  margin-left: 2px;

  @media (max-width: 776px) {
    display: none;
  }

  @media (max-width: 700px) {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 300;
    color: #198de0;
    margin-left: 2px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 40px;
`;

export const H2 = styled.h2`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 200;
  color: #e8e6e5;
  cursor: pointer;
  padding-left: 40px;
  @media (max-width: 780px) {
    display: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 40px;
  @media (max-width: 776px) {
    display: none;
  }
`;

export const ContainerButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 40px;
`;

export const BoxGener = styled.div`
  width: 100%;
  height: 40px;
  background-color: #198de0;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const Genero = styled.a`
  font-family: Raleway;
  font-size: 18px;
  font-weight: 200;
  outline: none;
  color: #e8e6e5;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 547px) {
    font-size: 7px;
  }
  @media (max-width: 780px) {
    font-size: 15px;
  }
`;
