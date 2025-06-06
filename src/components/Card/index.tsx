import { MediaDTO } from "../../DTO/MediaDTO/MediaDTO";
import {
  Classification,
  ContainerMovies,
  Containername,
  ContainerStar,
  Div,
  ImgMovie,
  ImgWrapper,
  Star,
  StarWrapper,
  TitleMovie,
} from "./styles";

type Props = {
  data: MediaDTO[];
  onClick?: (id: number, type?: string) => void;
};
const Card = ({ data, onClick }: Props) => {
  return (
    <>
      <ContainerMovies>
        {data.map((data: any) => (
          <Containername
            key={data.id}
            onClick={() =>
              onClick?.(data.id, data.first_air_date ? "Serie" : "Movie")
            }
          >
            <Div>
              <ImgWrapper>
                <ImgMovie
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  alt={data.title}
                  onError={(e) => {
                    e.currentTarget.src = "src/assets/images/image.png";
                  }}
                />
              </ImgWrapper>
            </Div>
            <ContainerStar>
              <TitleMovie>{data.title || data.name}</TitleMovie>
            </ContainerStar>
          </Containername>
        ))}
      </ContainerMovies>
    </>
  );
};

export default Card;
