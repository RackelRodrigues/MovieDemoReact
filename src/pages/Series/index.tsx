import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Background } from "./styles";
import api from "../../server/api";
import countries from "world-countries";
import { Select, Input } from "../../components";
import { TitlePage } from "../../components";
import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/id/action-types";
import { useNavigate } from "react-router-dom";

type Genre = {
  id: number;
  name: string;
};

const Series = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [countSeries, setCountSeries] = useState();
  const countryOptions = countries.map((country) => ({
    label: `${country.name.common}`,
    value: country.cca2,
  }));
  const fetchSeries = async () => {
    try {
      const response = await api.get(`/discover/tv`);

      setSeries(response.data.results);
      const count = response.data.results.length;
      setCountSeries(count);
    } catch (error) {
      console.error("Erro ao buscar series:", error);
    }
  };

  useEffect(() => {
    fetchSeries();
    fetchGenders();
  }, []);

  const handleUpdate = async (id: any) => {
    dispatch({
      type: UserActionTypes.ATUALIZAR_IdSeries,
      payload: id,
    });
    navigate("/Details");
  };

  const fetchGenders = async () => {
    try {
      const response = await api.get(`/genre/tv/list?`);

      setGenres(response.data.genres);
    } catch (error) {
      console.error("Erro ao buscar series:", error);
    }
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    console.log(genre);
    setSelectedGenre(genre);
    fetchMoviesByGenre(genre);
  };

  const fetchMoviesByGenre = async (genreId: string) => {
    try {
      const response = await api.get(`/discover/tv?with_genres=${genreId}`);
      setSeries(response.data.results);
      const count = response.data.results.length;
      setCountSeries(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    console.log(genre);
    setSelectedCountry(genre);
    fetchMoviesByCountries(genre);
  };

  const fetchMoviesByCountries = async (countryCode: string) => {
    try {
      const response = await api.get(
        `/discover/tv?with_origin_country=${countryCode}`
      );
      setSeries(response.data.results);
      const count = response.data.results.length;
      setCountSeries(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchSeriesByname(search);
    }
  };
  const fetchSeriesByname = async (SerieName: string) => {
    try {
      const response = await api.get(`/search/tv?query=${SerieName}`);
      setSeries(response.data.results);
      const count = response.data.results.length;
      setCountSeries(count);
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
          <TitlePage size="regular" text={`Todos os filmes (${countSeries})`} />
        </div>
        <Card data={series} onClick={(id) => handleUpdate(id)} />
      </Background>
    </>
  );
};

export default Series;
