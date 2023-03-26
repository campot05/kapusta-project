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
  display: none;
  @media ${DEVICE.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${DEVICE.laptop} {
    flex-direction: row;
    justify-self: flex-start;
    flex-wrap: nowrap;
  }
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: contents;
  flex-direction: column;
  //justify-content: space-evenly;
  border-bottom-left-radius: 30%;
  background-color: transparent;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 44px;
  }
  @media ${DEVICE.laptop} {
    height: 40px;
    text-align: center;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  margin-right: 44px;

  margin-bottom: 32px;
  @media ${DEVICE.tablet} {
    margin-bottom: 0px;
  }
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
`;
export const DescriptionInput = styled.input`
  width: 184px;
  height: 44px;
  border-top-left-radius: 16px;
  font-size: 12px;
  line-height: 1.14;
  background-color: transparent;
  padding-left: 20px;
  border: 2px solid #ffffff;
  border-bottom: none;
  color: #52555f;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
  @media ${DEVICE.tablet} {
    margin-right: -8px;
    border: 2px solid #f6f7fc;
    display: flex;
    padding-left: 12px;
  }
  @media ${DEVICE.laptop} {
    width: 240px;
  }
`;

export const FormControl = styled.input``;

export const CountWrapper = styled.div`
  @media ${DEVICE.tablet} {
    gap: 5px;
    justify-content: end;
    align-items: center;
    position: relative;
    display: flex;
    background-color: transparent;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 110px;
    border: 2px solid #f6f7fc;
    margin-left: -8px;
  }
  @media ${DEVICE.laptop} {
    width: 121px;
  }
`;

export const CountInput = styled.input`
  width: 183px;
  height: 44px;
  // padding-right: 55px;
  // padding-left: 55px;
  margin-right: 5px;
  border-radius: 22px;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.14;
  text-align: center;
  margin-top: 32px;
  order: 2px solid #f6f7fc;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  @media ${DEVICE.tablet} {
    height: 40px;
    width: 125px;
    margin-top: 0;

    border: transparent;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media ${DEVICE.laptop} {
    width: 121px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 20px;
  @media ${DEVICE.tablet} {
    margin-top: 32px;
  }
  @media ${DEVICE.laptop} {
    margin-left: 32px;
    margin-top: 0;
    gap: 15px;
  }
`;
