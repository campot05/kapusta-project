import { Stack, Divider} from '@mui/material/';
import {
    StyledDigits,
    StyledText,
    StyledStack,
    Item,
} from './ExpIncBar.styled'


export const ExpIncBar = ({incomeTotal=null,expenseTotal=null}) =>{

    return (
        <StyledStack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Item>
            <StyledText>Expenses:</StyledText>
            <StyledDigits color="#E53935">- {expenseTotal.toFixed(2)} UAH</StyledDigits>
          </Item>
          <Divider 
          orientation="vertical" 
          variant="middle" 
          sx={{ borderBottomWidth: 2 ,bgcolor: "secondary.light" }}
          flexItem />
          <Item>
            <StyledText>Income:</StyledText>
            <StyledDigits color="#407946"> + {incomeTotal.toFixed(2)} UAH</StyledDigits>
          </Item>
        </Stack>
      </StyledStack>
    )
}