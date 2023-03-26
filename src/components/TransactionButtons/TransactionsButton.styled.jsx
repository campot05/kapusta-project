import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const LinkButton = styled(NavLink)`
  color: #000000;
  display: inline-block;
  text-decoration: none;
  margin-top: 8px;
  background-color: #fafbfd;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  border: none;
  @media screen and (min-width: 767.98px) {
    width: 138px;
    height: 40px;
    border-radius: 21px 21px 0 0;
  }
  &.active {
    background-color: #ff751d;
    color: #fefefe;
    @media screen and (min-width: 767.98px) {
      color: #ff751d;
      background-color: #fefefe;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: calc(50% - 160px);

  justify-content: center;
  @media screen and (min-width: 767.98px) {
    justify-content: start;
    position: relative;
    left: 0;
  }
`;
