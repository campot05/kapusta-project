import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TransactionsContainer = styled.div`
  margin: 0 auto;
  padding: 24px 40px 42px 40px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 75px;
  flex-wrap: wrap;
`;

export const ToTransactionLink = styled(NavLink)`
  font-family: 'Roboto';
font-weight: 700;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #000000;
text-decoration: none;

`
export const LinkReport = styled(NavLink)`
gap: 20px;
margin-top: 24px;
margin-right: 37px;
margin-bottom: 35px;
display: flex;
justify-content: center;
    align-items: baseline;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.16;
text-align: right;
letter-spacing: 0.04em;
color: rgba(82, 85, 95, 0.7);
  text-decoration: none;
@media  screen and (min-width: 768px){
    justify-content: end;
    top: 67px;
    position: relative;
   }

`