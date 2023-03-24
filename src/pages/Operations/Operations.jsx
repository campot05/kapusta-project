import { Link } from 'react-router-dom';
import InputArea from 'components/InputArea';
import TransactionButtons from 'components/TransactionButtons';
import { TransactionsContainer } from './Operations.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';

export default function Home() {
  return (
    <div>
      <TransactionButtons />
      <TransactionsContainer>
        <InputArea />
        <OperationsTable />
      </TransactionsContainer>

      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
    </div>
  );
}
