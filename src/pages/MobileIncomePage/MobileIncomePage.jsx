import MobileIncome from 'components/MobileIncome';
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import Background from 'components/Background/Background';

import { ArrowLink } from './MobileIncomePage.styled';
import { ContainerDiv } from 'pages/IncomePage/IncomePage.styled';
export default function MobileIncomePage() {
  return (
    <Background type="Main">
      <ContainerDiv>
        <ArrowLink to="/income">
          <ArrowBack style={{ fill: '#FF751D'}} />
        </ArrowLink>
        <MobileIncome />
      </ContainerDiv>
    </Background>
  );
}
