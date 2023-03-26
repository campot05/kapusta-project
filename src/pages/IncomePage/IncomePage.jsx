import { LinkReport, ToTransactionLink,ContainerDiv } from './IncomePage.styled';
import IncomeInput from 'components/IncomeInput';
import TransactionButtons from 'components/TransactionButtons';
import { TransactionsContainer, Wrapper } from './IncomePage.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import Background from 'components/Background/Background';
import Summary from 'components/Summary/Summary';
import { Balance } from 'components/Balance/Balance';
import {useWindowSize} from 'react-use';
import React from "react";
import { ReactComponent as Reports } from '../../images/reports.svg';
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';

export default function Home() {
  const { width } = useWindowSize();

  return (
    <Background type="Main">
      <ContainerDiv>
      {width < 768 && (
        <ToTransactionLink to='/mobileincome'>
          <ArrowBack style={{fill: '#FF751D', marginLeft:'22px'}}/>
          TO TRANSACTION</ToTransactionLink>
      )}
       <LinkReport to="/report" >
        Reports
        <Reports/>
      </LinkReport>
      
      <Balance />
      <TransactionButtons />
       {width > 768 && (
        
      <TransactionsContainer>
        <IncomeInput />
        <Wrapper>
          <OperationsTable />
          <Summary />
        </Wrapper>
      </TransactionsContainer>
      )}
     </ContainerDiv>
    </Background>
  );
}