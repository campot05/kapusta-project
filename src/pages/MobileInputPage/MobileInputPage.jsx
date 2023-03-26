import MobileInput from 'components/MobileInput';
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import Background from 'components/Background/Background';

import { ArrowLink } from './MobileInputPage.styled';
import { ContainerDiv } from 'pages/IncomePage/IncomePage.styled';
export default function MobileInputPage() {
  return (
    <Background type="Main">
      <ContainerDiv>
        <ArrowLink to="/">
          <ArrowBack style={{ fill: '#FF751D' }} />
        </ArrowLink>
        <MobileInput />
      </ContainerDiv>
    </Background>
  );
}
