import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMenu,
  SidebarContainer,
  NavLink,
  ContainerButton,
  HamburgerMenu,
  HamburgerMenuopen,
  PageWrapper,
} from "./styles";

type Title = {
  path: string;
  label: string;
};

interface Props {
  TitlePage?: Title[];
  isMobile?: boolean;
}

export const Sidebar: React.FC<Props> = ({ TitlePage }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageWrapper>
      <ContainerButton>
        <ButtonMenu
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HamburgerMenuopen /> : <HamburgerMenu />}
        </ButtonMenu>
      </ContainerButton>
      {isOpen && (
        <SidebarContainer isActive={isOpen}>
          <nav className="ContainerNav">
            {TitlePage?.map((Title, index) => (
              <NavLink
                key={index}
                href={
                  Title.path.startsWith("/") ? Title.path : `/${Title.path}`
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    Title.path.startsWith("/") ? Title.path : `/${Title.path}`
                  );
                }}
                aria-label={Title.label}
              >
                {Title.label}
              </NavLink>
            ))}
          </nav>
        </SidebarContainer>
      )}
    </PageWrapper>
  );
};

export default Sidebar;
