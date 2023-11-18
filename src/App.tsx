import React from 'react';
import './App.css';
import styled from "styled-components";
import { StyledBtn,} from './components/Button.styled';
import { Link } from './components/Link.styled';
import {Menu} from "./components/Menu.styled";
import { myTheme } from './styles/Theme.styled';



function App() {
    return (
        <div className="App">
           <Box>
               {/*<StyledBtn>Hello</StyledBtn>
               <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
               <StyledBtn color={"brown"} fontSize={"30px"}>Hello</StyledBtn>*/}

               <StyledBtn color={myTheme.colors.primary} primary>Hello</StyledBtn>
               <StyledBtn color={myTheme.colors.secondary} outlined active>Hello</StyledBtn>
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
  


@media ${myTheme.media.tablet} {
  flex-direction: column;
}
`

