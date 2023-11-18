import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: fuchsia;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: rgb(52, 65, 112);
  }

  &:last-child {
    background-color: #25ff9c;
  }
`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: gold;
  color: black;
  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`