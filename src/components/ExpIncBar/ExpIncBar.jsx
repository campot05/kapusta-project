import { Stack, Divider} from '@mui/material/';
import {
    StyledDigits,
    StyledText,
    StyledStack,
    Item,
} from './ExpIncBar.styled'


export const ExpIncBar = () =>{

    return (
        <StyledStack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Item>
            <StyledText>Expenses:</StyledText>
            <StyledDigits color="#E53935">- 18 000 .00 UAH</StyledDigits>
          </Item>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Item>
            <StyledText>Income:</StyledText>
            <StyledDigits color="#407946"> + 45 000.00 UAH</StyledDigits>
          </Item>
        </Stack>
      </StyledStack>
    )
}