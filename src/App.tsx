import React from 'react';
import './App.css';
import styled from "styled-components";
import { StyledBtn, SuperBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import {Menu} from "./components/Menu.styled";



function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href={"https://www.npmjs.com/package/%40types/styled-components"}>1</a></li>
                    <li><a href={"https://www.npmjs.com/package/%40types/styled-components"}>2</a></li>
                    <li><a href={"https://www.npmjs.com/package/%40types/styled-components"}>3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"https://www.npmjs.com/package/%40types/styled-components"} >LinkComponent</StyledBtn>
                <StyledBtn as="a" href={"https://styled-components.com/docs/basics#installation"} >Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn>SuperButton</SuperBtn>
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

