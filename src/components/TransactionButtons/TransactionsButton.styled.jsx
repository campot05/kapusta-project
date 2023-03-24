import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const LinkButton = styled(NavLink)`
  color: #000000;
  display: inline-block;
  text-decoration: none;
  margin-top: 60px;
  width: 138px;
  height: 40px;
  background-color: #fafbfd;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 21px 21px 0 0;
  border: none;
  &.active {
    color: #ff751d;
    background-color: #fefefe;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;
