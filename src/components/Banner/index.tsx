import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MediaDTO } from "../../DTO/MediaDTO/MediaDTO";
import {
  Container,
  ImgBanner,
  Nav,
  Button,
  Title,
  Year,
  DescriptionBanner,
  PlaySvg,
  MotionWrapper,
  Dot,
} from "./styles";

interface BannerProps {
  data?: MediaDTO[];
}

const Banner = ({ data }: BannerProps) => {
  if (!data || data.length === 0) return null;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <AnimatePresence mode="wait">
      <MotionWrapper
        key={data[current]?.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImgBanner $UrlImage={data[current]?.backdrop_path}>
          <Container>
            <div className="ContainerDetails">
              <Title>{data[current]?.title}</Title>
              <Year>({data[current]?.release_date?.slice(0, 4)})</Year>
            </div>
            <DescriptionBanner>{data[current]?.overview}</DescriptionBanner>
            <Button>
              <PlaySvg />
              Assistir agora
            </Button>
          </Container>
        </ImgBanner>
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default Banner;
