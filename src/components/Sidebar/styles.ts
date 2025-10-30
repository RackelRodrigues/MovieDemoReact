import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

interface SidebarProps {
  isActive?: boolean;
}
export const PageWrapper = styled.aside`
  height: 100%;
`;

export const SidebarContainer = styled.aside<SidebarProps>`
  position: absolute;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  max-width: 25rem;
  min-width: 18rem;
  height: 100%;
  z-index: 9999;
  background-color: var(--color-accent);
  padding-left: 2rem;
  transition: all 0.5s ease-in-out;
  @media (max-width: 480px) {
    max-width: 10rem;
  }
  .ContainerNav {
    display: flex;
    flex-direction: column;

    padding-top: 3rem;
    gap: 2rem;
    background: transparent;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  z-index: 10000;
`;

export const NavLink = styled.a`
  font-family: var(--font-inter);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-white);
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  z-index: 10000;
  margin-top: 2rem;
  background: transparent;
  &:hover {
    text-decoration: none;
    border-right: 2px solid #fff;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  z-index: 9999;
  background: transparent;
  border: none;

  @media (max-width: 767px) and (min-width: 364px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    background-color: transparent;
  }
`;

export const HamburgerMenu = styled(RxHamburgerMenu)`
  cursor: pointer;
  background-color: transparent;
  color: var(--color-white);
  width: 1.8rem;
  height: 1.8rem;
`;
export const HamburgerMenuopen = styled(RiCloseLargeLine)`
  cursor: pointer;
  background-color: transparent;
  color: var(--color-white);
  width: 1.8rem;
  height: 1.8rem;
`;
