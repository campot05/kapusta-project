import { Link } from 'react-router-dom';
import InputArea from 'components/InputArea';
import TransactionButtons from 'components/TransactionButtons';
import { TransactionsContainer, Wrapper } from './Operations.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import Background from 'components/Background/Background';
import Summary from 'components/Summary/Summary';

export default function Home() {
  return (
    <Background type="Main">
      <TransactionButtons />
      <TransactionsContainer>
        <InputArea />
        <Wrapper>
          <OperationsTable />
          <Summary />
        </Wrapper>
      </TransactionsContainer>

      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
    </Background>
  );
}
