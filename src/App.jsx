import styled from 'styled-components'
import Header from './components/header'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContainerMovie from './components/ConteinerMovie';

const Background = styled.div`
background-color: #1C1D20;
height: 100%;
`;

function App() {
  const [isSidebarActive, setSidebarActive] = useState(false);
 
  return (
    <>
    <Background>
    <Header isSidebarActive={isSidebarActive}/>

    <ContainerMovie/>
    </Background>
    </>
  )
}

export default App
