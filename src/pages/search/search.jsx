import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';
import ContainerSearch from '../../components/Conteinersearch';
import { IoSearchOutline } from "react-icons/io5";
import Header from "../../components/header";


const Input = styled.input`
width: 100%;
outline: none;
border: none;
background-color: transparent;
margin-left: 15px;
&::placeholder {
    font-family: Raleway;
    font-size: 17.1px;
    font-weight: 200;
    font-size: 15px;
  }
  
`;

const StyledSearchIcon = styled(IoSearchOutline)`
  margin-right: 7px;
  color: #1C1D20;
  font-size: 35px;

`;

const DivFilmes = styled.div`
margin-top: 60px;


`;


const ContainerInput = styled.div`
width: 940px;
height: 48px;
border-radius: 13px;
background-color:#E8E6E5;
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 70px;
@media (max-width: 960px) {
 
 width: 100%;
 max-width: 600px;
 height: 48px;
  }
@media (max-width: 780px) {
 
  width: 100%;
  max-width: 500px;
  height: 38px;
   }

`;


const ButtonSend = styled.button`
height: 48px;
width: 55px;
background-color:#198DE0;
outline: none;
border: none;
border-radius: 0px 12px 12px 0px;
@media (max-width: 780px) {
 
 width: 100%;
 max-width: 40px;
height: 38px;
  }
`;

const Background = styled.div`
background-color: #1C1D20;
height: ${({ loaded }) => (loaded ? "100%" : "100vh")};
align-items: center;
flex-direction: column;
`;



const Search = () =>{
   
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const searchMoviesAndSeries = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=c5ae7b435c80c3e1a95b75ea79d5ffca&language=pt-BR&query=${query}&page=1&include_adult=false`
      
      
      );
      setResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Error searching for movies and series:', error);
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      setLoaded(true);
    }
  }, [results]);


  const [isSidebarActive, setSidebarActive] = useState(false);

    return(
    <> 
   <Header/>
    <Background loaded={loaded} className="d-flex align-itms-center justify-content-center">

    <ContainerInput >
      <Input type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
<ButtonSend onClick={searchMoviesAndSeries}>
      <StyledSearchIcon/>
      </ButtonSend>
    </ContainerInput>
    <DivFilmes>
<ContainerSearch movies={results}/>
</DivFilmes>
   
    </Background>

    
    </>)
}


export default Search;