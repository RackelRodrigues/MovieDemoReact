import styled from "styled-components";
import { PiPopcornFill } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import UserActionTypes from "../redux/id_gener/action-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoHome } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { MdCameraRoll } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

const Wrapper = styled.div`
background-color: #1C1D20;
width: 100%;
height: 70px;
display:  flex;
align-items: center;
justify-content: space-between;

`;

const StyledPipop = styled(PiPopcornFill)`
 color: #198DE0;
  font-size: 50px;
 
  @media (max-width: 776px) {
    font-size: 40px;
    color: #198DE0;
    }
`;



const HomeIcon = styled(IoHome)`
  color: #E8E6E5;
  font-size: 30px;
  margin-right: 10px;
`;

const SearchIcon = styled(IoSearch)`
  color: #E8E6E5;
  font-size: 30px;

`;

const MovieIcon = styled(BiCameraMovie)`
  color: #E8E6E5;
  font-size: 30px;
  margin-left: 10px;
`;

const CameraIcon = styled(MdCameraRoll)`
  color: #E8E6E5;
  font-size: 30px;
  margin-left: 10px;
`;

const TituloLogo = styled.h2`
font-family: Raleway;
font-size: 30px;
font-weight: 300;
color: #198DE0;
margin-left: 2px;

@media (max-width: 776px) {
    display: none;
  }

@media (max-width: 700px) {
font-family: Raleway;
font-size: 25px;
font-weight: 300;
color: #198DE0;
margin-left: 2px;
    }
`;

const ContainerLogo = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-left: 40px;
`;


const H2 = styled.h2`
font-family: Raleway;
font-size: 20px;
font-weight: 200;
color: #E8E6E5;
cursor: pointer;
padding-left: 40px;
@media (max-width: 780px) {
    display: none;
    }
`;

const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-right: 40px;
@media (max-width: 776px) {
    display: none;
    }
`;


const ContainerButton2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-right: 40px;

`;

const BoxGener = styled.div`
width: 100%;
height: 40px;
background-color: #198DE0;
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
justify-content: space-around;
@media (max-width: 450px) {
 display: none;
   }
`;


const Genero = styled.a`
font-family: Raleway;
font-size: 18px;
font-weight: 200;
outline: none;
color: #E8E6E5;
text-decoration: none;
cursor: pointer;
@media (max-width: 547px) {
  font-size: 7px;
    }
@media (max-width: 780px) {
  font-size: 15px;
    }
`;



const Header =()=>{

    const [generos, setGeneros] = useState([]);
    const [Screenname, setScreenname] = useState([]);
    const navigate = useNavigate();

    const Navigation = (route) => {
    navigate(route);
  };
   
  const { currentScreen } = useSelector((rootReducer) => rootReducer.ScreenName);
  
    useEffect(() => {
      const fetchGeneros = async () => {
        setScreenname(currentScreen.currentScreen);
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/genre/${Screenname}/list?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&language=pt-BR`);
          setGeneros(response.data.genres);
        } catch (error) {
          console.error('Erro ao buscar gêneros:', error);
        }
      };
  
      fetchGeneros();
    }, []);

    const [generoSelecionado, setGeneroSelecionado] = useState(null);
    const dispatch = useDispatch();

    const armazenarGenero = (genero) => {
      
      

      dispatch({
        type: UserActionTypes.ATUALIZAR_Id,
        payload: genero.id
      });

        setGeneroSelecionado(genero) ;
      
    };

    const resetCurrentId = () => {
      dispatch({
        type: UserActionTypes.ATUALIZAR_Id,
        payload: 0
      });
    };

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 776);

   const handleResize = () => {
  setIsLargeScreen(window.innerWidth > 776);
};

   useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


    return(
    <>
    <Wrapper>

    <ContainerLogo>
    <StyledPipop/>
    <TituloLogo>CineFlix</TituloLogo>
    </ContainerLogo>
    {isLargeScreen ? (
        <ContainerButton>
          <H2 onClick={() => { Navigation('/'); resetCurrentId(); }}>Home</H2>
          <H2 onClick={() => Navigation('/search')}>Search</H2>
          <H2 onClick={() => Navigation('/')}>Filmes</H2>
          <H2 onClick={() => { Navigation('/series'); resetCurrentId(); }}>Series</H2>
        </ContainerButton>
      ) : (
        <ContainerButton2>
          <HomeIcon onClick={() => { Navigation('/'); resetCurrentId(); }}/>
          <SearchIcon onClick={() => Navigation('/search')}/>
          <MovieIcon onClick={() => Navigation('/')}/>
          <CameraIcon onClick={() => { Navigation('/series'); resetCurrentId(); }}/>
        </ContainerButton2>
      )}

    </Wrapper>
    <BoxGener>
    {generos.slice(0, 9).map((genero) => (
          <Genero key={genero.id} onClick={() => armazenarGenero(genero)}>{genero.name}</Genero>
       ))}

</BoxGener>

    </>
)
}


export default Header;