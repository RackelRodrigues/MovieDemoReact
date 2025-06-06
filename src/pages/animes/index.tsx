import api from "../../server/api";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import { Background } from "./styles";
import Card from "../../components/Card";
import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/id/action-types";
import { useNavigate } from "react-router-dom";
import { Select, Input } from "../../components";
import { TitlePage } from "../../components";

type Genre = {
  id: number;
  name: string;
};

const Anime = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [countAnimes, setCountAnimes] = useState();

  const fetchAnimes = async () => {
    try {
      const response = await api.get(`/discover/tv?with_keywords=210024`);

      setAnimes(response.data.results);
      const count = response.data.results.length;
      setCountAnimes(count);
      console.log(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchAnimes();
    fetchGenders();
  }, []);

  const fetchGenders = async () => {
    try {
      const response = await api.get(`/genre/tv/list?language=ja`);

      console.log("data", response.data);
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    console.log(genre);
    setSelectedGenre(genre);
    fetchAnimesByGenre(genre);
  };

  const fetchAnimesByGenre = async (genreId: string) => {
    try {
      const response = await api.get(
        `/discover/tv?with_origin_country=JP&with_genres=${genreId}`
      );
      setAnimes(response.data.results);
      const count = response.data.results.length;
      setCountAnimes(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  const handleUpdate = async (id: any) => {
    dispatch({
      type: UserActionTypes.ATUALIZAR_IdANIME,
      payload: id,
    });
    navigate("/Details");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("passou por aqui handlechange");
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchAnimesByname(search);
    }
  };
  const fetchAnimesByname = async (AnimeName: string) => {
    try {
      const response = await api.get(
        `/search/tv?query=${AnimeName}&language=pt-BR&with_original_language=ja`
      );
      setAnimes(response.data.results);
      const count = response.data.results.length;
      setCountAnimes(count);
    } catch (error) {
      console.error("Erro ao buscar por gênero:", error);
    }
  };

  return (
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
      </div>
      <div className="ContainerTitle">
        <TitlePage size="regular" text={`Todos os Animes (${countAnimes})`} />
      </div>
      <Card data={animes} onClick={(id) => handleUpdate(id)} />
    </Background>
  );
};

export default Anime;
