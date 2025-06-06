import { Card, Header } from "../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [countMovies, setCountMovies] = useState();
  const countryOptions = countries.map((country) => ({
    label: `${country.name.common}`,
    value: country.cca2,
  }));

  const fetchMovies = async () => {
    try {
      const response = await api.get(`/discover/movie`);
      setMovies(response.data.results);
      const count = response.data.results.length;
      setCountMovies(count);
      // console.log("response fetch", count);
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

      // console.log("data", response.data);
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleUpdate = async (id: any, type: any) => {
    dispatch({
      type: UserActionTypes.ATUALIZAR_Id,
      payload: id,
    });
    navigate("/Details");
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    // console.log(genre);
    setSelectedGenre(genre);
    fetchMoviesByGenre(genre);
  };

  const fetchMoviesByGenre = async (genreId: string) => {
    try {
      const response = await api.get(`/discover/movie?with_genres=${genreId}`);
      setMovies(response.data.results);
      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    // console.log(genre);
    setSelectedCountry(genre);
    fetchMoviesByCountries(genre);
  };

  const fetchMoviesByCountries = async (countryCode: string) => {
    try {
      const response = await api.get(
        `/discover/movie?with_origin_country=${countryCode}`
      );
      setMovies(response.data.results);
      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("passou por aqui handlechange");
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("passou por aqui handleKeyDown");
    if (e.key === "Enter") {
      console.log("passou por aqui handleKeyDown entrou no if");
      fetchMoviesByname(search);
    }
  };
  const fetchMoviesByname = async (MovieName: string) => {
    console.log("name", MovieName);
    try {
      const response = await api.get(`/search/movie?query=${MovieName}`);
      setMovies(response.data.results);
      console.log(response.data.results);
      const count = response.data.results.length;
      setCountMovies(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  return (
    <>
      <Background>
        <Header />
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
        {!movies ? (
          <CardLoading>
            <OrbitProgress
              variant="track-disc"
              color="#198de0"
              size="medium"
              text="loading"
              textColor=""
            />
          </CardLoading>
        ) : (
          <Card data={movies} onClick={(id, type) => handleUpdate(id, type)} />
        )}
      </Background>
    </>
  );
};

export default Movies;
