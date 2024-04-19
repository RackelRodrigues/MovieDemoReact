import styled from "styled-components";
import React from "react";
import { useState } from "react";
import axios from "axios";
import UserActionType from "../redux/StarRating/action.types";
import { useDispatch } from "react-redux";

const Background = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
width: 600px;
height: 200px;
border-radius: 15px;
background-color: rgba(255, 255, 255, 0.15);
backdrop-filter:blur(8.5px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 1; 
@media (max-width: 780px) {
  width: 300px;
height: 200px;
    }
`;

const Container = styled.div`
display: flex;
align-items: center;

`;

const H3 = styled.h3`
font-family: Raleway;
font-size: 28px;
color: #000;

@media (max-width: 780px) {
  font-size: 15px;
    }

`;



const Containerradio = styled.div`
  display: flex;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  input:checked + & {
    background-color: #ffc107;
    border-color: #ffc107;
  }
`;


const Containerfavorite =({ movieId, onHide })=>{
  const [rating, setRating] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
 const dispatch = useDispatch(); 
  

  const handleRatingClick = async (ratingValue) => {
    setRating(ratingValue);
    dispatch({
      type: UserActionType.ATUALIZAR_STAR,
      payload: ratingValue, 
    });
    
    console.log(movieId);

    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&guest_session_id=0a8b0576040e09aa2d8d3a6880391198`,
        { value: ratingValue }
      );
      console.log('Classificação bem-sucedida:', response.data);
      setIsVisible(false); 
      onHide();

    } catch (error) {
      console.error('Erro ao classificar o filme:', error);
    
    }
  };


  return (
    <>
      {isVisible && (
        <Background>
          <H3>Dê uma nota para este filme ou série?</H3>
          <Container>
            <Containerradio>
              {[1, 2, 3, 4, 5].map((value) => (
                <React.Fragment key={value}>
                  <Input
                    type="radio"
                    id={`rating-${value}`}
                    name="rating"
                    value={value}
                    checked={rating === value}
                    onChange={() => handleRatingClick(value)}
                  />
                  <Label htmlFor={`rating-${value}`}>{value}</Label>
                </React.Fragment>
              ))}
            </Containerradio>
          </Container>
        </Background>
      )}
    </>
  );
    
}


export default Containerfavorite;