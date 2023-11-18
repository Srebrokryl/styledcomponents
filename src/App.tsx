import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn></SuperBtn>
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
  `
const SuperBtn = styled(StyledBtn) `
  border-radius: 5px;

`

const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`