import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "../../components/index";
import {
  Background,
  ButtonSend,
  ContainerInput,
  DivFilmes,
  Input,
  StyledSearchIcon,
} from "./styles";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const searchMoviesAndSeries = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&language=pt-BR&query=${query}&page=1&include_adult=false`
      );
      setResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error searching for movies and series:", error);
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      setLoaded(true);
    }
  }, [results]);

  const [isSidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <Header />
      <Background
        loaded={loaded}
        className="d-flex align-itms-center justify-content-center"
      >
        <ContainerInput>
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ButtonSend onClick={searchMoviesAndSeries}>
            <StyledSearchIcon />
          </ButtonSend>
        </ContainerInput>
        <DivFilmes>
          aqui ficaria os filmes
          {/* <ContainerSearch movies={results} /> */}
        </DivFilmes>
      </Background>
    </>
  );
};

export default Search;
