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
  InstagramLogo,
  LinkedinLogo,
  DiscordLogo,
  TitleLogo,
} from "./styles";
import Sidebar from "../Sidebar";

interface Props {}

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
                <DiscordLogo />
              </ContainerIcon>
              <ContainerIcon>
                <LinkedinLogo />
              </ContainerIcon>
              <ContainerIcon>
                <InstagramLogo />
              </ContainerIcon>
            </ContainerMenu>
          </div>
        ) : (
          //aqui fica o sidebar
          // <ContainerButton2>
          <Sidebar TitlePage={Menuitens} isMobile={isLargeScreen} />
          // {/* </ContainerButton2> */}
        )}
      </Wrapper>
    </>
  );
};

export default Header;
