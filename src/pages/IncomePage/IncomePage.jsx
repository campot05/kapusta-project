import { Link } from 'react-router-dom';
import TransactionButtons from 'components/TransactionButtons'
import IncomeInput from 'components/IncomeInput'
import {TransactionsContainer} from '../Operations/Operations.styled'
export default function Home() {
  return (
    <div>
    
      <TransactionButtons/>
      <TransactionsContainer>
        <IncomeInput />
        </TransactionsContainer>
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
      
    </div>
  );
}