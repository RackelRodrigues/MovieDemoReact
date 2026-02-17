import { useState } from "react";
import { MediaDTO } from "../../DTO/MediaDTO/MediaDTO";
import { ContainerMovies, Containername, ImgMovie, TitleMovie } from "./styles";
import { Blurhash } from "react-blurhash";

type CardProps = {
  data: MediaDTO[];
  onClick?: (id: number, type?: string, title?: string) => void;
};
const Card = ({ data, onClick }: CardProps) => {
  const DEFAULT_BLUR_HASH = "LKO2?U%2Tw=w]~RBVZRi};RPxuwH";
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  return (
    <ContainerMovies data-testid="card-component">
      {data.map((item: MediaDTO) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
        const isLoaded = loadedImages[item.id];

        return (
          <Containername
            key={item.id}
            onClick={() =>
              onClick?.(
                item.id,
                item.first_air_date ? "Serie" : "Movie",
                item.title || item.original_title,
              )
            }
          >
            <div className="image-wrapper">
              {!isLoaded && (
                <Blurhash hash={DEFAULT_BLUR_HASH} width="100%" height="100%" />
              )}

              <ImgMovie
                loading="lazy"
                src={imageUrl}
                alt={item.title || item.name}
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [item.id]: true,
                  }))
                }
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </div>

            <TitleMovie>{item.title || item.name}</TitleMovie>
          </Containername>
        );
      })}
    </ContainerMovies>
  );
};

export default Card;
