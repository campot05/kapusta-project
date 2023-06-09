import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerDiv = styled.div`
  max-width: 1130px;
  padding: 0px 15px;
  margin: 0 auto;
  @media (max-width: 767.98px) {
    max-width: 480px;
  }
`;
export const TransactionsContainer = styled.div`
  margin: 0 auto;
  padding: 24px 40px 42px 40px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
  @media (min-width: 1280px) {
    padding: 32px 32px 61px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 75px;
  @media screen and(max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    justify-content: center;
    display: flex;
    align-self: baseline;
  }
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
  margin-left: 20px;
`;
export const LinkReport = styled(NavLink)`
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 35px;
  display: inline-block;

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
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;
