import  MobileIncome  from "components/MobileIncome"
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import Background from 'components/Background/Background';

import { ArrowLink } from "./MobileIncomePage.styled";
export default function MobileIncomePage() {
      return (
             <Background type="Main">
<ArrowLink to='/income'>
          <ArrowBack style={{fill: '#FF751D', marginLeft:'22px'}}/>
                  </ArrowLink>
                  <MobileIncome/>
                  </Background>
      )
}