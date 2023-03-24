import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const LinkButton = styled(NavLink)`
color: #000000;
display: inline-block;
text-decoration: none;
margin-top: 60px;
margin-left:40px;
width: 138px;
height: 40px;
background-color: #FAFBFD;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

border-radius: 21px 21px 0 0;
border: none;
&.active{
      color: #FF751D;
      background-color: #FEFEFE;

      
}
`

export const Buttons = styled.div`
display: flex;
`