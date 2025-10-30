import Header from "../../components/Header";
import { useTransition, useEffect, useState } from "react";
import Card from "../../components/Card";
import { Background, CardLoading } from "./styles";
import api from "../../server/api";
import countries from "world-countries";
import { Select, Input } from "../../components";
import { TitlePage } from "../../components";
import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/id/action-types";
import { useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";

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
  const [isPending, startTransition] = useTransition();

  const countryOptions = countries.map((country) => ({
    label: `${country.name.common}`,
    value: country.cca2,
  }));
  const fetchSeries = async () => {
    try {
      const response = await api.get(`/discover/tv`);
      startTransition(() => {
        setSeries(response.data.results);
      });

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

  const handleUpdate = async (id: number) => {
    dispatch({
      type: UserActionTypes.UPDATE_SERIES_ID,
      payload: id,
    });
    navigate("/Details");
  };

  const fetchGenders = async () => {
    try {
      const response = await api.get(`/genre/tv/list?`);
      startTransition(() => {
        setGenres(response.data.genres);
      });
    } catch (error) {
      console.error("Erro ao buscar series:", error);
    }
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    fetchMoviesByGenre(genre);
  };

  const fetchMoviesByGenre = async (genreId: string) => {
    try {
      const response = await api.get(`/discover/tv?with_genres=${genreId}`);
      startTransition(() => {
        setSeries(response.data.results);
      });

      const count = response.data.results.length;
      setCountSeries(count);
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
        `/discover/tv?with_origin_country=${countryCode}`
      );
      startTransition(() => {
        setSeries(response.data.results);
      });

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
      startTransition(() => {
        setSeries(response.data.results);
      });
      const count = response.data.results.length;
      setCountSeries(count);
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
              <TitlePage
                size="regular"
                text={`Todos os filmes (${countSeries})`}
              />
            </div>
            <Card data={series} onClick={(id) => handleUpdate(id)} />
          </>
        )}
      </Background>
    </>
  );
};

export default Series;
