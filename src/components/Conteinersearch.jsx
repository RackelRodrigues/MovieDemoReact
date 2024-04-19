import styled from "styled-components";
import { Row} from 'react-bootstrap';
import { FaStar } from "react-icons/fa";




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
color: #fff;
  &:hover {
    filter: brightness(70%);
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


const Containersearch = ({ movies }) => {
 

    return(
        <>
        
<DivFilmes>
  <Row xs={2}  sm={3} md={2} lg={5} className="d-flex justify-content-center align-items-center">
    {movies.map(movie => (
    <Containername key={movie.id}>
    
    <ImgMovie 
    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
    alt={movie.title ? movie.title : "Carregando..."}
    
    />
    <ContainerStar>
    <Classification>{movie.name ?? movie.title}</Classification> 
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

export default Containersearch;