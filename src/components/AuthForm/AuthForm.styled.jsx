import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14 / 12);
    color: #000000;
    margin-bottom: 32px;
    input {
      background-color: #f6f7fb;
      border-radius: 30px;
      height: 52px;
      padding: 17px 20px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.04em;
      color: #000;
      margin-top: 12px;
      border: none;
      outline: none;
      &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: #a6abb9;
      }
    }
    @media screen and (max-width: 767.98px) {
      margin-bottom: 20px;
    }
  }
`;

export const Container = styled.div`
  z-index: 10000;
  width: 426px;
  padding: 56px 83px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  background-color: #ffffff;
  margin: 117px 75px 125px auto;
  margin-bottom: 125px;
  margin-right: 75px;
  /* margin: 0 auto; */
  @media screen and (max-width: 767.98px) {
    width: 280px;
    padding: 40px 20px;
    margin-top: 50px;
  }
  @media screen and(max-width: 1279.98) {
    width: 426px;
    height: 552px;
    margin-top: 80px;
    margin-bottom: 155px;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: #52555f;
  margin-bottom: 20px;
  text-align: ${props => (props.google ? 'center' : null)};
  @media screen and (max-width: 767.98px) {
    margin-bottom: 16px;
  }
`;

export const Link = styled.a`
  background-color: #f6f7fb;
  border-radius: 26px;
  padding: 10px 19px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  width: 120px;
  margin: 0px auto 23px auto;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 15px 16px;
  border-radius: 16px;
  width: 122px;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  background-color: ${props => (props.login ? '#FF751D' : '#F5F6FB')};
  color: ${props => (props.login ? '#FFF' : '#52555F')};
  margin-right: ${props => (props.login ? '15px' : 0)};
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767.98px) {
    width: 116px;
    padding: 12px 14px;
    margin-right: ${props => (props.login ? '8px' : 0)};
  }
`;

export const Error = styled.div`
  color: #eb5757;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 5px;
`;
