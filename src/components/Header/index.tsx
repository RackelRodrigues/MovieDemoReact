import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menuitens } from "../../utils/menuList";
import {
  ContainerLogo,
  Nav,
  Wrapper,
  ContainerIcon,
  ContainerMenu,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
  TitleLogo,
} from "./styles";
import Sidebar from "../Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 776);

  const Navigation = (route: any) => {
    navigate(route);
  };
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 776);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <ContainerLogo
          onClick={() => {
            navigate("/");
          }}
        >
          <TitleLogo>CineFlix</TitleLogo>
        </ContainerLogo>
        {isLargeScreen ? (
          <div className="ContainerHeader">
            <div className="itensMenu">
              {Menuitens.map((item, index) => (
                <Nav key={index} onClick={() => Navigation(item.path)}>
                  {item.label}
                </Nav>
              ))}
            </div>
            <ContainerMenu>
              <ContainerIcon>
                <a
                  href="https://discord.com/users/975821575326687313"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordLogo />
                </a>
              </ContainerIcon>
              <ContainerIcon>
                <a
                  href="https://www.linkedin.com/in/rackel-rodrigues-708b57212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo />
                </a>
              </ContainerIcon>
              <ContainerIcon>
                <a
                  href="https://github.com/RackelRodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo />
                </a>
              </ContainerIcon>
            </ContainerMenu>
          </div>
        ) : (
          <Sidebar TitlePage={Menuitens} isMobile={isLargeScreen} />
        )}
      </Wrapper>
    </>
  );
};

export default Header;
