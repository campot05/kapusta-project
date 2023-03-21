import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fb;
  label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14 / 12);
    color: #000000;
    margin-bottom: 12px;
  }
`;

export const FormContainer = styled.div`
  width: 426px;
  padding: 56px 83px;
`;
