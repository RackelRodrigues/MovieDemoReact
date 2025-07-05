import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  // ContainerUrl,
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageWrapper>
      <ContainerButton>
        <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
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
