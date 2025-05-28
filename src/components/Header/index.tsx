import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserActionTypes from "../../redux/id_gener/action-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import axios from "axios";
import {
  BoxGener,
  CameraIcon,
  ContainerButton,
  ContainerButton2,
  ContainerLogo,
  Genero,
  H2,
  HomeIcon,
  MovieIcon,
  SearchIcon,
  StyledPipop,
  TituloLogo,
  Wrapper,
} from "./styles";

const Header = () => {
  const [generos, setGeneros] = useState([]);
  const [Screenname, setScreenname] = useState([]);
  const navigate = useNavigate();

  const Navigation = (route: any) => {
    navigate(route);
  };

  const { currentScreen } = useSelector(
    (rootReducer) => rootReducer.ScreenName
  );

  useEffect(() => {
    const fetchGeneros = async () => {
      setScreenname(currentScreen.currentScreen);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/${Screenname}/list?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&language=pt-BR`
        );
        setGeneros(response.data.genres);
      } catch (error) {
        console.error("Erro ao buscar gêneros:", error);
      }
    };

    fetchGeneros();
  }, []);

  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const dispatch = useDispatch();

  const armazenarGenero = (genero: any) => {
    dispatch({
      type: UserActionTypes.ATUALIZAR_Id,
      payload: genero.id,
    });

    setGeneroSelecionado(genero);
  };

  const resetCurrentId = () => {
    dispatch({
      type: UserActionTypes.ATUALIZAR_Id,
      payload: 0,
    });
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 776);

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
        <ContainerLogo>
          <StyledPipop />
          <TituloLogo>CineFlix</TituloLogo>
        </ContainerLogo>
        {isLargeScreen ? (
          <ContainerButton>
            <H2
              onClick={() => {
                Navigation("/");
                resetCurrentId();
              }}
            >
              Home
            </H2>
            <H2 onClick={() => Navigation("/search")}>Search</H2>
            <H2 onClick={() => Navigation("/")}>Filmes</H2>
            <H2
              onClick={() => {
                Navigation("/series");
                resetCurrentId();
              }}
            >
              Series
            </H2>
          </ContainerButton>
        ) : (
          <ContainerButton2>
            <HomeIcon
              onClick={() => {
                Navigation("/");
                resetCurrentId();
              }}
            />
            <SearchIcon onClick={() => Navigation("/search")} />
            <MovieIcon onClick={() => Navigation("/")} />
            <CameraIcon
              onClick={() => {
                Navigation("/series");
                resetCurrentId();
              }}
            />
          </ContainerButton2>
        )}
      </Wrapper>
      <BoxGener>
        {generos.slice(0, 9).map((genero: any) => (
          <Genero key={genero.id} onClick={() => armazenarGenero(genero)}>
            {genero.name}
          </Genero>
        ))}
      </BoxGener>
    </>
  );
};

export default Header;
