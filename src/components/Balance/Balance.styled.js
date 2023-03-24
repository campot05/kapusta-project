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
const TRANSITION = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

export const WrapperForm = styled.div`
  @media ${DEVICE.tablet} {
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: center;
  }
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  @media ${DEVICE.tablet} {
    margin: 0 21px 0 10px;
  }
  @media ${DEVICE.laptop} {
    margin: 0 20px 0;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${DEVICE.tablet} {
    position: relative;
    align-items: center;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 144px;
  height: 44px;
  padding: 1px 46px 1px 1px;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color: #000000;
  text-align: right;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  border-radius: 22px 0 0 22px;
  background-color: transparent;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-moz-outer-spin-button,
  ::-moz-inner-spin-button {
    -moz-appearance: none;
  }
  ::-ms-outer-spin-button,
  ::-ms-inner-spin-button {
    -ms-appearance: none;
  }
  @media ${DEVICE.tablet} {
    margin-right: 15px;
    border-radius: 16px;
    width: 125px;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 12px;
    line-height: 14;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 144px;
  height: 44px;
  padding: 1px 16px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  color: rgba(82, 85, 95, 0.7);
  border: 2px solid #ffffff;
  border-left: none;
  border-radius: 0 22px 22px 0;
  cursor: pointer;
  background-color: transparent;
  transition: color ${TRANSITION.duration} ${TRANSITION.timing}
      ${TRANSITION.delay},
    background-color ${TRANSITION.duration} ${TRANSITION.timing}
      ${TRANSITION.delay},
    border-color ${TRANSITION.duration} ${TRANSITION.timing} ${TRANSITION.delay};
  &:focus,
  &:hover {
    color: #ffffff;
    background-color: #ff751d;
    border-color: #ff751d;
  }
  &:disabled {
    background-color: transparent;
    cursor: default;
    border-color: #ffffff;
    color: rgba(82, 85, 95, 0.7);
  }
  @media ${DEVICE.tablet} {
    width: 125px;
    border-radius: 16px;
    border: 2px solid #ffffff;
    justify-content: center;
    padding: 0;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 16px;
  right: 15px;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  text-transform: none;
  color: #000000;
  @media ${DEVICE.tablet} {
    margin-right: 14px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
`;
