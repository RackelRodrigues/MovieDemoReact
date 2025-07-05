import { Card, Header } from "../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import api from "../../server/api";
import UserActionTypes from "../../redux/id/action-types";
import { Background, CardLoading } from "./styles";
import countries from "world-countries";
import { Select, Input } from "../../components";
import { TitlePage } from "../../components";
import { OrbitProgress } from "react-loading-indicators";

type Genre = {
  id: number;
  name: string;
};
const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [countMovies, setCountMovies] = useState(0);
  const [isPending, startTransition] = useTransition();
  const countryOptions = countries.map((country) => ({
    label: `${country.name.common}`,
    value: country.cca2,
  }));

  const fetchMovies = async () => {
    try {
      const response = await api.get(`/discover/movie`);
      startTransition(() => {
        setMovies(response.data.results);
      });

      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchGenders();
  }, []);

  const fetchGenders = async () => {
    try {
      const response = await api.get(`/genre/movie/list?`);

      setGenres(response.data.genres);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleUpdate = async (id: any, type: any) => {
    dispatch({
      type: UserActionTypes.UPDATE_MOVIE_ID,
      payload: id,
    });
    navigate("/Details");
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    fetchMoviesByGenre(genre);
  };

  const fetchMoviesByGenre = async (genreId: string) => {
    try {
      const response = await api.get(`/discover/movie?with_genres=${genreId}`);
      startTransition(() => {
        setMovies(response.data.results);
      });

      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedCountry(genre);
    fetchMoviesByCountries(genre);
  };

  const fetchMoviesByCountries = async (countryCode: string) => {
    try {
      const response = await api.get(
        `/discover/movie?with_origin_country=${countryCode}`
      );
      startTransition(() => {
        setMovies(response.data.results);
      });
      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchMoviesByname(search);
    }
  };
  const fetchMoviesByname = async (MovieName: string) => {
    try {
      const response = await api.get(`/search/movie?query=${MovieName}`);
      startTransition(() => {
        setMovies(response.data.results);
      });
      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  return (
    <>
      <Header />
      <Background>
        <div className="ContainerSearch">
          <Input
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Pesquisar pelo nome"
          />
          <Select
            value={selectedGenre}
            onChange={handleGenreChange}
            options={genres.map((g) => ({
              label: g.name,
              value: String(g.id),
            }))}
            placeholder="Gênero"
          />
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            placeholder="País"
          />
        </div>
        <div className="ContainerTitle">
          <TitlePage size="regular" text={`Todos os filmes (${countMovies})`} />
        </div>
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
            <Card
              data={movies}
              onClick={(id, type) => handleUpdate(id, type)}
            />
          </>
        )}
      </Background>
    </>
  );
};

export default Movies;
