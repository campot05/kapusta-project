import { Link } from 'react-router-dom';
import TransactionButtons from 'components/TransactionButtons';
import IncomeInput from 'components/IncomeInput';
import { TransactionsContainer } from '../Operations/Operations.styled';
import Background from 'components/Background/Background';
import { Balance } from 'components/Balance/Balance';
import IncomesTransTable from 'components/IncomesTransTable/IncomesTransTable';
import IncomeSummery from 'components/IncomeSummery/IncomeSummery';
import { Wrapper } from './IncomePage.styled';
import MobileIncomeTrans from 'components/MobileIncomeTrans/MobileIncomeTrans';

export default function Home() {
  return (
    <Background type="Main">
      <Balance />
      <MobileIncomeTrans />
      <div>
        <TransactionButtons />
        <TransactionsContainer>
          <IncomeInput />
          <Wrapper>
            <IncomesTransTable />
            <IncomeSummery />
          </Wrapper>
        </TransactionsContainer>
        <Link to="/report" style={{ display: 'block' }}>
          REPORT
        </Link>
      </div>
    </Background>
  );
}
