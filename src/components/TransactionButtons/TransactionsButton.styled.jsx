import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const LinkButton = styled(NavLink)`
  color: #000000;
  display: inline-block;
  text-decoration: none;
  margin-top: 60px;

  background-color: #fafbfd;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
    width: 158px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
   border-radius: 0;
  border: none;
  @media  screen and (min-width: 768px){
     width: 138px;
  height: 40px;
  border-radius: 21px 21px 0 0;

   }
  &.active {
    background-color:#ff751d;
    color:#fefefe;
    @media  screen and (min-width: 768px){
   
    color: #ff751d;
    background-color: #fefefe;
   }
  }
`;

export const Buttons = styled.div`
  display: flex;
   justify-content: center;
       position: absolute;
       bottom: 0;
       justify-content: center;
           width: 100%;

   @media  screen and (min-width: 768px){
    justify-content: start;
    position: relative;
   }
`;
