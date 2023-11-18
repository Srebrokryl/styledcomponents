import React from 'react';
import './App.css';
import styled from "styled-components";
import { StyledBtn, SuperBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import {Menu} from "./components/Menu.styled";



function App() {
    return (
        <div className="App">
           <Box>
               {/*<StyledBtn>Hello</StyledBtn>
               <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
               <StyledBtn color={"brown"} fontSize={"30px"}>Hello</StyledBtn>*/}

               <StyledBtn primary>Hello</StyledBtn>
               <StyledBtn outlined active>Hello</StyledBtn>
           </Box>
        </div>
    );
}

export default App;





const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 30px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  


@media screen and (max-width: 800px){
  flex-direction: column;
}
`

