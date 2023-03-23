import styled from '@emotion/styled';
import { Stack} from '@mui/material/';

//========
// EXP/INC BAR
//========
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
const StyledStack = styled(Stack)`
  width: 100%;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  padding: 20px 10px;
  @media screen and (min-width: 480px) {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;

const StyledText = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(16.41 / 14);
`;
const StyledDigits = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: calc(16.41 / 14);
  color: ${({ color }) => color};
  @media screen and (min-width: 480px) {
    margin-left: 15px;
  }
`;

export {
    StyledDigits,
    StyledText,
    StyledStack,
    Item,
}
