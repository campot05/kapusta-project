
import {  LinkButton, Buttons } from './TransactionsButton.styled'


const TransactionButtons = () => {
      
      return (
            <><Buttons>
                  <LinkButton to="/" >Expenses</LinkButton>
            
                  <LinkButton to="/income "  >Income</LinkButton>
                  </Buttons>
                  </>
     )
}
export default TransactionButtons;