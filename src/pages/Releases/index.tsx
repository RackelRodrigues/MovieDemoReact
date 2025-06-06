import api from "../../server/api";
import { Header, TitlePage } from "../../components";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Background } from "./styles";
import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/id/action-types";
import { useNavigate } from "react-router-dom";

const Releases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState("");
  const [countRealeses, setCountReleases] = useState();

  const fetchReleases = async () => {
    try {
      const [moviesRes, seriesRes] = await Promise.all([
        api.get(`/movie/now_playing`),
        api.get(`/tv/on_the_air`),
      ]);

      const merged: any = [
        ...moviesRes.data.results,
        ...seriesRes.data.results,
      ];
      setReleases(merged);
      console.log(merged);
    } catch (error) {
      console.error("Erro ao buscar filmes/séries:", error);
    }
  };
  useEffect(() => {
    fetchReleases();
  }, []);

  const handleUpdate = async (id: any, type: any) => {
    console.log(type);

    if (type === "Serie") {
      dispatch({
        type: UserActionTypes.ATUALIZAR_IdSeries,
        payload: id,
      });
    } else if (type === "Movie") {
      dispatch({
        type: UserActionTypes.ATUALIZAR_Id,
        payload: id,
      });
    } else {
      dispatch({
        type: UserActionTypes.ATUALIZAR_IdANIME,
        payload: id,
      });
    }

    navigate("/Details");
  };

  return (
    <Background>
      <Header />
      <div className="ContainerTitle">
        <TitlePage size="regular" text={`Lançamentos`} />
      </div>
      <Card data={releases} onClick={(id, type) => handleUpdate(id, type)} />
    </Background>
  );
};

export default Releases;
