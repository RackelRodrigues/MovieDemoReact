import { useNavigate } from "react-router-dom";
import { Background, ButtonHome, ContainerErro, H1, Subtitle } from "./styles";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Background>
        <ContainerErro>
          <H1>Ooops!</H1>
          <Subtitle>
            Parece que a página que você está procurando não existe.
          </Subtitle>
          <ButtonHome onClick={() => navigate("/")}>ir para Home</ButtonHome>
        </ContainerErro>
      </Background>
    </>
  );
};

export default ErrorPage;
