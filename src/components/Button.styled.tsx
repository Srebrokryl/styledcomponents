import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    primary?: boolean,
    outlined?: boolean,
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  //border: none;
  //background-color: fuchsia;
/ / background-color: ${props => props.color || "fuchsia"};
  padding: 10px 20px;
  //color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: rgb(52, 65, 112);
  }

  /* &:last-child {
     background-color: #5a689d;
   }*/

  
  
  
  //primary
  background-color: ${props => props.color || "fuchsia"};
  color: snow;

  //outlined
  border: 2px solid ${props => props.color || "fuchsia"};
  color: ${props => props.color || "fuchsia"};
  background-color: transparent;
`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: gold;
  color: black;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`