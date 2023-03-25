import styled from 'styled-components';
const SIZE = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px',
};
const DEVICE = {
  mobile: `screen and (min-width: ${SIZE.mobile})`,
  tablet: `screen and (min-width: ${SIZE.tablet})`,
  laptop: `screen and (min-width: ${SIZE.laptop})`,
};

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: contents;
  flex-direction: column;
  //justify-content: space-evenly;
  border-bottom-left-radius: 30%;
  background-color: transparent;
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
justify-content: center;
  margin-bottom: 32px;
  margin-top: 24px;
`;
export const DateSelection = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  border: none;
  font-weight: 900;
  font-size: 14px;
  line-height: 1.16;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: transparent;
  color: #52555f;

  &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    z-index: 0;
    width: 90px;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DescriptionInput = styled.input`
  width: 280px;
  height: 44px;
  border-top-left-radius: 16px;
  font-size: 12px;
  line-height: 1.14;
  background-color: transparent;
  padding-left: 20px;
  border: 2px solid #ffffff;
  color: #52555f;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
`;

export const FormControl = styled.input``;

export const CountWrapper = styled.div`
    gap: 5px;
    justify-content: end;
    align-items: center;
    position: relative;
    display: flex;
    background-color: transparent;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 183px;
  //  border: 2px solid #f6f7fc;
    margin-left: -8px;

`;

export const CountInput = styled.input`
  width: 183px;
  height: 44px;

  margin-right: 5px;
  border-radius: 22px;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.14;
  text-align: center;
  margin-top: 52px;
  order: 2px solid #f6f7fc;
  &:focus {
    outline: none;
  }
  background-color: transparent;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 20px;
`;
