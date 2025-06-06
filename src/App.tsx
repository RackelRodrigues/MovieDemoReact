import Header from "./components/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Background } from "./app";
import { MediaDTO } from "./DTO/MediaDTO/MediaDTO";
import api from "./server/api";
import { useDispatch } from "react-redux";
import UserActionTypes from "./redux/id/action-types";
import { useNavigate } from "react-router-dom";
import { TitlePage } from "./components";
import Banner from "./components/Banner";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [moviesRated, setMoviesRated] = useState<MediaDTO[]>();
  const [featuredMedia, setFeaturedMedia] = useState<MediaDTO[]>([]);

  const fetchMoviesrated = async () => {
    try {
      const response = await api.get(`/movie/top_rated`);
      // console.log({ response });
      const top6 = response.data.results.slice(0, 1);
      console.log(top6);
      setMoviesRated(top6);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };
  const fetchMoviesDetails = async () => {
    try {
      const response = await api.get(`/movie/278`);
      // console.log("detalhes do filme", response);
      // setSidebarActive(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await api.get(`/discover/movie`);

      // console.log("data", response.data);
      setFeaturedMedia(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleUpdate = async (id: any) => {
    console.log(id);
    dispatch({
      type: UserActionTypes.ATUALIZAR_Id,
      payload: id,
    });
    navigate("/Details");
  };

  useEffect(() => {
    fetchMoviesrated();
    fetchMoviesDetails();
    fetchMovies();
  }, []);

  return (
    <>
      <Background>
        <Header />
        <div className="ContainerTitle">
          <TitlePage size="regular" text="Recomendados" />
        </div>
        <Banner data={moviesRated} />
        <div className="ContainerTitle2">
          <TitlePage size="regular" text="Destaques Da Semana " />
        </div>
        <Card data={featuredMedia} onClick={(id) => handleUpdate(id)} />
      </Background>
    </>
  );
}

export default App;
