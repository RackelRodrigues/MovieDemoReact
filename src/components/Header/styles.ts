import styled from "styled-components";
import { RxDiscordLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Wrapper = styled.header`
  background-color: var(--color-accent);
  width: 100%;
  padding: 1rem 1rem;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  .ContainerHeader {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
  }
  @media (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  @media (max-width: 350px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.3rem;
  }
  .itensMenu {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    gap: 3.16rem;
    background-color: var(--color-accent);
    @media (max-width: 776px) {
      display: none;
    }
  }
`;

export const ContainerIcon = styled.button`
  color: var(--color-white);
  font-size: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const TitleLogo = styled.h3`
  font-size: 1.5rem;
  font-family: "Ribeye Marrow", serif;
  font-weight: 400;
  align-self: center;
  color: var(--color-primary);
  background-color: transparent;
  margin: 0;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  cursor: pointer;
  background-color: transparent;
`;
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  background-color: var(--color-accent);

  a {
    text-decoration: none;
  }
`;

export const Nav = styled.a`
  font-family: var(--font-manrope);
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-primary);
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 776px) {
    display: none;
  }
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
export const DiscordLogo = styled(RxDiscordLogo)`
  cursor: pointer;
  background-color: transparent;
  color: var(--color-white);
  width: 1.8rem;
`;
export const GithubLogo = styled(FaGithub)`
  cursor: pointer;
  background-color: transparent;
  color: var(--color-white);
  width: 1.8rem;
`;
export const LinkedinLogo = styled(FaLinkedin)`
  cursor: pointer;
  background-color: transparent;
  color: var(--color-white);
  width: 1.8rem;
`;
