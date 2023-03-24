import { Link } from 'react-router-dom';
import TransactionButtons from 'components/TransactionButtons';
import IncomeInput from 'components/IncomeInput';
import { TransactionsContainer } from '../Operations/Operations.styled';
import Background from 'components/Background/Background';
import { Balance } from 'components/Balance/Balance';
export default function Home() {
  return (
    <Background type="Main">
      <Balance />
      <div>
        <TransactionButtons />
        <TransactionsContainer>
          <IncomeInput />
        </TransactionsContainer>
        <Link to="/report" style={{ display: 'block' }}>
          REPORT
        </Link>
      </div>
    </Background>
  );
}
