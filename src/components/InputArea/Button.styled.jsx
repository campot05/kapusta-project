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
export const Btn = styled.button`
 position: absolute;
    bottom: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: inherit;
  line-height: 1.17;
  border-radius: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  background-color: transparent;
  color: #52555F;
  text-transform: uppercase;
  font-weight: 700;
  height: 44px;
border: 2px solid #F6F7FC;
  transition: transform ${TRANSITION.duration} ${TRANSITION.timing} ${TRANSITION.delay};

  &:hover,
  &:focus {
    transform: scale(0.9);
    background-color: #FF751D;
    color: #FFFFFF;
  }
  width:130px;
  @media ${DEVICE.mobile} {
    width: 125px;
   position: relative;
    

  }
  @media ${DEVICE.tablet} {
    width: 125px;
  }
  @media ${DEVICE.laptop} {
    width: 136px;
  }
  
`;
