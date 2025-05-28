import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerMovie from "./components/Movie";

const Background = styled.div`
  background-color: #1c1d20;
  height: 100%;
`;

function App() {
  const [isSidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <Background>
        {/* <Header isSidebarActive={isSidebarActive} /> */}

        <ContainerMovie />
      </Background>
    </>
  );
}

export default App;
