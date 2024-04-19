import styled from "styled-components";
import { Row} from 'react-bootstrap';
import axios from "axios";
import { useEffect } from 'react';
import UserActionType from "../redux/Screen/action.types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Containerfavorite from "./Containerfavorite";

const H1 = styled.h1`
font-family: Raleway;
font-size: 32px;
font-weight: 200;
color:#E8E6E5;
text-align: center;
margin: 10px 0 20px 0;
@media (max-width: 780px) {
 
  text-align: center;
  font-size: 25px;
    }
`;




const Containername = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;



`;

const Div = styled.div`
display: flex;
flex-direction: row;


`;


const ImgMovie = styled.img`
width: 180px;
height: 260px;
cursor: pointer;
transition: filter 0.3s; 
z-index: 0; 
  &:hover {
    filter: brightness(70%);
  }

  &:hover + button {
    opacity: 1;
  }

`;



const Classification = styled.p`
font-family: Raleway;
font-size: 14px;
font-weight: 200;
color:#E8E6E5;
`;

const DivFilmes = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
overflow-x: hidden;

`;


const ContainerStar= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 180px;
`;








const ContainerMovie = ()=>{
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&language=pt-BR&page=1`, {
          method: 'GET',
        });
      
        const data = await response.json();
        
        setMovies(data.results);
        
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    const dispatch = useDispatch();

  useEffect(() => {
      fetchMovies();
      dispatch({
        type: UserActionType.ATUALIZAR_SCREEN,
        payload: { currentScreen: 'movie' }
      });
  }, []);

  const [atualizacao, setAtualizacao] = useState('');
  const { currentId } = useSelector((rootReducer) => rootReducer.IdReducer);



  const fetchMoviesGenero = async () => {
    setAtualizacao(currentId);
    console.log(currentId);
    
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&with_genres=${atualizacao}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  useEffect(() => {
    if (currentId !== 0) {
      fetchMoviesGenero();
    } else {
      fetchMovies();
    }
  }, [currentId]);

  const [showContainerFavorite, setShowContainerFavorite] = useState(false);
   
  const handleImageClick = () => {
    setShowContainerFavorite(true);
  };

  const hideContainerFavorite = () => {
    setShowContainerFavorite(false);
  };

    return(
    <>
     
   <H1>Destaques da Semana</H1>
  
<DivFilmes>

  <Row xs={2}  sm={3} md={2} lg={5} className="d-flex justify-content-center align-items-center">
    {movies.map(movie => (
    <Containername key={movie.id}>
      {showContainerFavorite && <Containerfavorite movieId={movie.id} onHide={hideContainerFavorite}/>}
   
    <ImgMovie 
    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
    alt={movie.title}
    onClick={handleImageClick}
    /> 
    <ContainerStar>
    <Classification>{movie.title}</Classification> 
    <Div>
    <FaStar size={20}color="#FACC15"/>
    <Classification>{Number(movie.vote_average).toFixed(1)}</Classification>
    </Div>
    </ContainerStar>
    </Containername>
    ))}
       </Row>

    </DivFilmes>
    </>
    )
}


export default ContainerMovie;