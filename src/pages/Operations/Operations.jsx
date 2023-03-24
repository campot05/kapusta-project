import { Link } from 'react-router-dom';
import Background from 'components/Background/Background';

import { ContainerBg } from './Operations.styled';
export default function Home() {
  return (
    <Background type="Main">
      <ContainerBg>
        {/* <Title /> */}
        <div>
          Главная страничка
          <Link to="/report" style={{ display: 'block' }}>
            REPORT
          </Link>
        </div>
      </ContainerBg>
      <div></div>
    </Background>
  );
}
