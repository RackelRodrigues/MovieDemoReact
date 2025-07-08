import { MediaDTO } from "../../DTO/MediaDTO/MediaDTO";
import { ContainerMovies, Containername, ImgMovie, TitleMovie } from "./styles";

type Props = {
  data: MediaDTO[];
  onClick?: (id: number, type?: string) => void;
};
const Card = ({ data, onClick }: Props) => {
  return (
    <ContainerMovies>
      {data.map((data: any) => (
        <Containername
          key={data.id}
          onClick={() =>
            onClick?.(data.id, data.first_air_date ? "Serie" : "Movie")
          }
        >
          <ImgMovie
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
            onError={(e) => {
              e.currentTarget.src = "images/image.png";
            }}
          />

          <TitleMovie>{data.title || data.name}</TitleMovie>
        </Containername>
      ))}
    </ContainerMovies>
  );
};

export default Card;
