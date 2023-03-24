import {LinkButton} from './TransactionsButton.styled'
const TransactionButtons = () => {
      return (
                <>
            <LinkButton to="/" >Expenses</LinkButton>
                  <LinkButton to="/income" >Income</LinkButton>
                  </>
     )
}
export default TransactionButtons;