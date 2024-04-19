import styled from "styled-components";
import Header from "../../components/header";
import { useState } from "react";
import ContainerSeries from "../../components/ConteinerSeries";

const Background = styled.div`
background-color: #1C1D20;
height: 100%;
`;

const Series =()=>{
   
    return(
    <>
    <Background>
    <Header />
    <ContainerSeries/>
    </Background>
    </>)
}


export default Series;