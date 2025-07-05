import api from "../../server/api";
import { Header, TitlePage } from "../../components";
import Card from "../../components/Card";
import { useEffect, useState, useTransition } from "react";
import { Background, CardLoading } from "./styles";
import { useDispatch } from "react-redux";
import UserActionTypes from "../../redux/id/action-types";
import { useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";

const Releases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [releases, setReleases] = useState([]);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

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

      startTransition(() => {
        setReleases(merged);
      });
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
        type: UserActionTypes.UPDATE_SERIES_ID,
        payload: id,
      });
    } else if (type === "Movie") {
      dispatch({
        type: UserActionTypes.UPDATE_MOVIE_ID,
        payload: id,
      });
    } else {
      dispatch({
        type: UserActionTypes.UPDATE_ANIME_ID,
        payload: id,
      });
    }

    navigate("/Details");
  };

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
              <TitlePage size="regular" text={`Lançamentos`} />
            </div>
            <Card
              data={releases}
              onClick={(id, type) => handleUpdate(id, type)}
            />
          </>
        )}
      </Background>
    </>
  );
};

export default Releases;
