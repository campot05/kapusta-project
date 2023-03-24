import styled from 'styled-components';

export const ContainerBg = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 25px;
  @media screen and (min-width: 768px) {
    max-width: 458px;
    padding: 0 16px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    position: relative;
  }
`;

export const Title = styled.div`
  width: 183px;
  height: 63px;
  margin-top: 86px;
  margin-bottom: 50px;
  background-size: 100% 100%;
  background-image: url(../../images/cabagge/title.png);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 80px;
    width: 306px;
    height: 101px;
    background-repeat: no-repeat;
    background-size: 306px 101px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    margin-top: 0;
    width: 377px;
    margin-left: 0;
    height: 139px;
    top: 308px;
    left: 229px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
