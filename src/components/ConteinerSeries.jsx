import styled from "styled-components";
import { Row} from 'react-bootstrap';
import { useEffect } from 'react';
import axios from "axios";
import {useSelector, useDispatch } from "react-redux";
import UserActionType from "../redux/Screen/action.types";
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

const MovieContainer = styled.div`
  position: relative;
  margin: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10px;
  transform: translate(-82%, -40%);
  width: 110px; 
  height: 40px;
  background-color: #198DE0;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;


const ContainerSeries = ()=>{
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc', {
          method: 'GET',
        });
      
        const data = await response.json();
        console.log(data);
        setSeries(data.results);
        
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

  const dispatch = useDispatch();

  useEffect(() => {
      fetchSeries();
      dispatch({
        type: UserActionType.ATUALIZAR_SCREEN,
        payload: { currentScreen: 'tv' }
      });
  }, []);

  const [atualizacao, setAtualizacao] = useState('');    
  const { currentId } = useSelector((rootReducer) => rootReducer.IdReducer); 

  const fetchseriesGenero = async () => {
    setAtualizacao(currentId);
    console.log(currentId);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&with_genres=${atualizacao}`
      );
      setSeries(response.data.results);
      
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  useEffect(() => {
    if (currentId !== 0) {
      fetchseriesGenero();
    } else {
      fetchSeries();
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
    {series.map(series => (
    <Containername key={series.id}>
     {showContainerFavorite && <Containerfavorite movieId={series.id} onHide={hideContainerFavorite}/>}
    
    <ImgMovie src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} alt={series.title}
    onClick={handleImageClick}
    />
    
    <ContainerStar>
    <Classification>{series.original_name}</Classification> 
    <Div>
    <FaStar size={20}color="#FACC15"/>
    <Classification>{Number(series.vote_average).toFixed(1)}</Classification>
    </Div>
    </ContainerStar>
    </Containername>
    ))}
       </Row>

    </DivFilmes>
    </>
    )
}


export default ContainerSeries;