import { useNavigate } from "react-router-dom";
import {
  Background,
  ButtonHome,
  Container,
  Subtitle,
  Text,
  Title,
} from "./styles";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Background>
        <Container>
          <Title>404</Title>
          <Subtitle>whoops!</Subtitle>
          <Text type={true}>Perdemos esse caminho...</Text>
          <Text type={false}>Que tal voltar para o inicio?</Text>
          <ButtonHome onClick={() => navigate("/")}>
            Voltar para o Home
          </ButtonHome>
        </Container>
      </Background>
    </>
  );
};

export default ErrorPage;
