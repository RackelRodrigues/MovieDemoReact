import Header from "./components/Header";
import { useTransition, useEffect, useState } from "react";
import Card from "./components/Card";
import { Background, CardLoading } from "./app";
import { MediaDTO } from "./DTO/MediaDTO/MediaDTO";
import api from "./server/api";
import { useDispatch } from "react-redux";
import UserActionTypes from "./redux/id/action-types";
import { useNavigate } from "react-router-dom";
import { TitlePage } from "./components";
import Banner from "./components/Banner";
import { OrbitProgress } from "react-loading-indicators";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [moviesRated, setMoviesRated] = useState<MediaDTO[]>();
  const [featuredMedia, setFeaturedMedia] = useState<MediaDTO[]>([]);
  const [isPending, startTransition] = useTransition();

  const fetchMoviesrated = async () => {
    try {
      const response = await api.get(`/movie/now_playing?language=pt-BR`);
      const top4 = response.data.results.slice(0, 4);
      startTransition(() => {
        setMoviesRated(top4);
      });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };
  const fetchMoviesDetails = async () => {
    try {
      const response = await api.get(`/movie/278`);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await api.get(`/discover/movie`);

      startTransition(() => {
        setFeaturedMedia(response.data.results);
      });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleUpdate = async (id: any) => {
    console.log(id);
    dispatch({
      type: UserActionTypes.UPDATE_MOVIE_ID,
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
      <Header />
      <Background>
        {isPending ? (
          <CardLoading>
            <OrbitProgress
              variant="track-disc"
              color="#198de0"
              size="medium"
              textColor=""
            />
          </CardLoading>
        ) : (
          <>
            <div className="ContainerTitle">
              <TitlePage size="regular" text="Recomendados" />
            </div>
            <Banner data={moviesRated} />
            <div className="ContainerTitle">
              <TitlePage size="regular" text="Destaques Da Semana " />
            </div>
            <Card data={featuredMedia} onClick={(id) => handleUpdate(id)} />
          </>
        )}
      </Background>
    </>
  );
}

export default App;
