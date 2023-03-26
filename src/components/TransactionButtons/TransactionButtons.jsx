import { LinkButton, Buttons, Wrapper } from './TransactionsButton.styled';

const TransactionButtons = () => {
  return (
    <Wrapper>
      <Buttons>
        <LinkButton to="/">Expenses</LinkButton>

        <LinkButton to="/income ">Income</LinkButton>
      </Buttons>
    </Wrapper>
  );
};
export default TransactionButtons;
