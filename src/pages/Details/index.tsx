import { useEffect, useState } from "react";
import {
  Background,
  BackgroundContent,
  ContainerActors,
  Description,
  ImgActor,
  ImgMedia,
  NameActor,
  Tag,
  TagGender,
  Title,
  Year,
  ArrowLeft,
  ContainerItens,
  ImgPath,
  TagAn,
  CardLoading,
} from "./styles";
import api from "../../server/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TitlePage } from "../../components/index";
import type { RootState } from "../../redux/store";
import { MovieDetail } from "../../DTO/MovieDTO/MovieDTO";
import { OrbitProgress } from "react-loading-indicators";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>();
  const [movieCrew, setMovieCrew] = useState<any[]>([]);
  const navigate = useNavigate();
  const [diretorETrilha, setDiretorETrilha] = useState({
    diretor: "",
    compositor: "",
  });
  const { currentId, type } = useSelector(
    (state: RootState) => state.IdReducer
  );

  useEffect(() => {
    if (!currentId || !type) return;

    if (type === "Movie") {
      fetchMovie();
      fetchcrew();
    } else if (type === "Anime" || type === "Serie") {
      fetchAnime();
      fetchCrewAnimes();
    }
  }, [currentId, type]);

  const fetchMovie = async () => {
    if (type !== "Movie") return;
    try {
      const response = await api.get(`/movie/${currentId}`);

      setMovieDetails(response.data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };
  const fetchcrew = async () => {
    if (type !== "Movie") return;

    try {
      const response = await api.get(`/movie/${currentId}/credits`);

      setMovieCrew(response.data.cast);
      const crew = response.data.crew;
      const trilhaSonora = crew.find(
        (p: any) => p.job === "Original Music Composer"
      );
      const Director = crew.find((p: any) => p.job === "Director");
      setDiretorETrilha((prev) => ({
        ...prev,
        diretor: Director ? Director.name : "",
        compositor: trilhaSonora ? trilhaSonora.name : "",
      }));
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };
  const fetchCrewAnimes = async () => {
    if (type !== "Serie" && type !== "Anime") return;
    try {
      const response = await api.get(`/tv/${currentId}/credits`);

      setMovieCrew(response.data.cast);
      const crew = response.data.crew;
      const trilhaSonora = crew.find(
        (p: any) => p.job === "Original Music Composer"
      );
      const Director = crew.find((p: any) => p.department === "Production");
      setDiretorETrilha((prev) => ({
        ...prev,
        diretor: Director ? Director.name : "",
        compositor: trilhaSonora ? trilhaSonora.name : "",
      }));
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const fetchAnime = async () => {
    if (type !== "Serie" && type !== "Anime") return;
    try {
      const response = await api.get(`/tv/${currentId}`);
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Erro ao buscar anime:", error);
    }
  };

  if (!movieDetails) {
    return (
      <CardLoading>
        <OrbitProgress
          variant="track-disc"
          color="#198de0"
          size="medium"
          text="loading"
          textColor=""
        />
      </CardLoading>
    );
  }

  return (
    <>
      <Background>
        <BackgroundContent UrlImage={movieDetails?.backdrop_path}>
          <ArrowLeft onClick={() => navigate(-1)} aria-label="back page" />
          <div className="Container">
            <ImgMedia
              src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}
                
            `}
              alt={movieDetails?.title}
              onError={(e) => {
                e.currentTarget.src = "images/image.png";
              }}
            />
            <div className="image">
              <div className="year">
                <Title>{movieDetails?.title || movieDetails?.name}</Title>
                <Year>
                  (
                  {movieDetails?.release_date?.slice(0, 4) ||
                    movieDetails?.first_air_date?.slice(0, 4)}
                  )
                </Year>
              </div>
              <ContainerItens>
                <div>
                  <TagGender>
                    {movieDetails?.genres?.map((g: any) => g.name).join(", ")}
                  </TagGender>
                  <Description>{movieDetails?.overview}</Description>
                </div>
                {diretorETrilha.diretor && (
                  <Tag>
                    <span>Diretor: </span>
                    {diretorETrilha.diretor}
                  </Tag>
                )}

                {diretorETrilha.compositor && (
                  <Tag>
                    <span>Trilha sonora: </span>
                    {diretorETrilha.compositor}
                  </Tag>
                )}

                {movieDetails?.release_date && (
                  <Tag>
                    <span>Lançamento: </span>
                    {new Date(movieDetails.release_date).toLocaleDateString(
                      "pt-BR"
                    )}
                  </Tag>
                )}
                {!movieDetails?.overview &&
                movieDetails?.episode_run_time?.length ? (
                  <Tag>
                    <span>Duração do episódio: </span>
                    {movieDetails.episode_run_time[0]} min
                  </Tag>
                ) : null}

                {movieDetails?.vote_average && (
                  <Tag>
                    <span>Nota: </span>
                    {movieDetails.vote_average.toFixed(1)}
                  </Tag>
                )}
              </ContainerItens>
            </div>
          </div>
        </BackgroundContent>
        <div className="ContainerTitle">
          <TitlePage
            size="regular"
            text={
              type === "Anime"
                ? "Detalhes do Anime"
                : type === "Movie"
                ? "Elenco"
                : "Temporadas"
            }
          />
        </div>
        <ContainerActors>
          {type !== "Anime" &&
            type !== "Serie" &&
            movieCrew
              ?.filter((person: any) => person.profile_path)
              .slice(0, 15)
              .map((person: any) => (
                <div className="actorContainer" key={person.id}>
                  <ImgActor
                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    alt={person.name}
                    onError={(e) => {
                      e.currentTarget.src = "images/image.png";
                    }}
                  />
                  <NameActor>{person.name}</NameActor>
                </div>
              ))}

          {movieDetails?.seasons &&
            movieDetails.seasons.length > 0 &&
            movieDetails.seasons.map((season) => (
              <div key={season.id}>
                <ImgPath
                  src={`https://image.tmdb.org/t/p/w154${season.poster_path}`}
                  alt={season.name}
                  onError={(e) => {
                    e.currentTarget.src = "images/image.png";
                  }}
                />

                <TagAn>{season.name}</TagAn>
                <TagAn>
                  <span>Lançamento:</span>
                  {season.air_date}
                  {movieDetails.vote_average?.toFixed(1)}
                </TagAn>
                <TagAn>
                  <span>Episódios:</span>
                  {season.episode_count}
                </TagAn>
              </div>
            ))}
        </ContainerActors>
      </Background>
    </>
  );
};

export default Details;
