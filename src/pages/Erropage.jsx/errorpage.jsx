import styled from "styled-components";
import Header from "../../components/header";
import { Row, Col} from 'react-bootstrap';
import Menino from '../../images/menino_page_erro.png';

const Background = styled.div`
background-color: #1C1D20;
height: 100vh;
display: grid;
place-items: center;
grid-template-columns: 1fr 1fr;
@media (max-width: 780px) {
 
 display: flex;
 flex-direction: column;
 align-items: center;
justify-content: center;
   }
`;

const H1 = styled.h1`
font-family: Plus Jakarta Sans;
font-size: 116px;
font-weight: 800;
color: #fff;
@media (max-width: 1025px) {
 font-size: 70px;
   }
@media (max-width: 780px) {
  font-size: 45px;
   }

`;

const Subtitle = styled.p`
font-family: Raleway;
font-size: 46px;
font-weight: 200;
color:#E8E6E5;
width: 459px;
@media (max-width: 1025px) {
 font-size: 30px;
   }
@media (max-width: 780px) {
   font-size: 18px;
   width:192px;
   }
`;


const ButtonHome = styled.button`
width: 202px;
height: 50px;
border-radius: 15px ;
background-color: #198DE0;
color: #E8E6E5;
font-family: Raleway;
font-size: 15px;
cursor: pointer;
outline: none;
@media (max-width: 780px) {
border-radius: 7px;
font-size: 15px;
 width: 125px;
 height: 30px;
 margin-left: 30px;
   }



`;

const ContainerErro = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-top: 50px;
@media (max-width: 780px) {
 
 margin: 0;
   }
`;


const Img = styled.img`
width: 500px;
height: 500px;
@media (max-width: 1025px) {
 width: 300px;
 height: 300px;

   }
@media (max-width: 780px) {
    width: 215px;
height: 215px;


   }

`;

const ErrorPage = ()=>{
    return(
        <>  
        <Header/>


<Background className="-flex align-items-center justify-content-center">

<ContainerErro>
<H1>Ooops!</H1>
<Subtitle>Parece que a página que você está procurando não existe.</Subtitle>
<ButtonHome>ir para Home</ButtonHome>
</ContainerErro>
 
<Img src={Menino} alt="imagem de menino"/>

        </Background>
       
        </>
    )
}

export default ErrorPage;