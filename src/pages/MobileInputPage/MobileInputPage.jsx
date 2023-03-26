import  MobileInput  from "components/MobileInput"
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import Background from 'components/Background/Background';

import { ArrowLink } from "./MobileInputPage.styled";
export default function MobileInputPage() {
      return (
             <Background type="Main">
<ArrowLink to='/'>
          <ArrowBack style={{fill: '#FF751D', marginLeft:'22px'}}/>
                  </ArrowLink>
                  <MobileInput/>
                  </Background>
      )
}