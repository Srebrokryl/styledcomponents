import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href={""}>1</a></li>
                    <li><a href={""}>2</a></li>
                    <li><a href={""}>3</a></li>
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


const StyledBtn = styled.button`
  border: none;
  background-color: fuchsia;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: rgb(52, 65, 112);
  }
  
  &:last-child{
    background-color: #25ff9c;
  }
`

const Link = styled.a`
  color:#111111;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
  `

const SuperBtn = styled(StyledBtn) `
  border-radius: 5px;
  background-color: gold;
  color:black;
`

const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap:30px;
  
  button{
    cursor:pointer;
  }
  
  ${Link}{
  cursor:zoom-in;
}
`

const Menu = styled.nav`
    ul{
      list-style: none;
      padding: 0;
      display: flex;
      
      li > a {
        color:green;
      }
    }
`