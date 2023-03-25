import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  overflow: none;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Modal = styled.div`
  position: absolute;
  top: 60px;
  z-index: 15;
  max-width: 280px;
  box-sizing: border-box;
  max-height: 150px;
  width: 100%;
  padding: 25px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -10%;
    left: 20%;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #162c5b;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: #ffffff;
`;
