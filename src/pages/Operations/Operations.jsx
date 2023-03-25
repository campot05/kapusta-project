import { Link } from 'react-router-dom';
import InputArea from 'components/InputArea';
import TransactionButtons from 'components/TransactionButtons';
import { TransactionsContainer, Wrapper } from './Operations.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import Background from 'components/Background/Background';
import Summary from 'components/Summary/Summary';
import { Balance } from 'components/Balance/Balance';
import {useWindowSize} from 'react-use';
import React from "react";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <Background type="Main">
      <Balance />
      <TransactionButtons />
       {width > 768 && (
        
      <TransactionsContainer>
        <InputArea />
        <Wrapper>
          <OperationsTable />
          <Summary />
        </Wrapper>
      </TransactionsContainer>

      )}
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
    </Background>
  );
}
