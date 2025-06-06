import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  ContainerUrl,
  NavLink,
  ContainerButton,
  HamburgerMenu,
  HamburgerMenuopen,
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
    <>
      <ContainerButton>
        <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HamburgerMenuopen /> : <HamburgerMenu />}
        </ButtonMenu>
      </ContainerButton>
      <SidebarContainer isActive={isOpen}>
        {isOpen && (
          <div className="ContainerNav">
            {TitlePage?.map((Title, index) => (
              <ContainerUrl key={index}>
                <NavLink
                  href={
                    Title.path.startsWith("/") ? Title.path : `/${Title.path}`
                  }
                >
                  {Title.label}
                </NavLink>
              </ContainerUrl>
            ))}
          </div>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
