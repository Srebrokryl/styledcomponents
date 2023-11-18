import styled, {css} from "styled-components";
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
    //background-color: ${props => props.color || "fuchsia"};
  border-radius: 10px;
  padding: 10px 20px;
  //color: snow;
  //font-size: 2rem;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;

  

  /* &:last-child {
     background-color: #5a689d;
   }*/

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "fuchsia"};
    color: ${props => props.color || "fuchsia"};
    background-color: transparent;
    
    &:hover {
      border-color: green;
      color: midnightblue;
      background-color: transparent;
    }
  `}
  
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "fuchsia"};
    color: snow;

    &:hover {
      background-color: rgb(52, 65, 112);
    }
  `}


  //primary




`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: gold;
  color: black;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`