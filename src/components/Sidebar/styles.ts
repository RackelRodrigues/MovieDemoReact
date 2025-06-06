import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
interface SidebarProps {
  isActive?: boolean;
}
export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  width: 18rem;
  max-width: 25rem;
  min-width: 15rem;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding-left: 2rem;
  transition: right 0.3s ease-in-out;
  @media (max-width: 480px) {
    max-width: 10rem;
  }
  .ContainerNav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    gap: 4rem;
    background: transparent;
  }
`;
export const ContainerUrl = styled.div`
  width: 100%;
  background: transparent;
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
    border-right: 1px solid #fff;
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
