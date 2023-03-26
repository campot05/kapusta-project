import { LinkReport, ToTransactionLink } from './Operations.styled';
import InputArea from 'components/InputArea';
import TransactionButtons from 'components/TransactionButtons';
import {
  TransactionsContainer,
  Wrapper,
  ContainerDiv,
  Wrap,
} from './Operations.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import Background from 'components/Background/Background';
import Summary from 'components/Summary/Summary';
import { Balance } from 'components/Balance/Balance';
import { useWindowSize } from 'react-use';
import React from 'react';
import { ReactComponent as Reports } from '../../images/reports.svg';
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import MobileExpensesTrans from 'components/MobileExpensesTrans/MobileExpensesTrans';
export default function Home() {
  const { width } = useWindowSize();
  return (
    <Background type="Main">
      <ContainerDiv>
        {width < 767.98 && (
          <>
            <ToTransactionLink to="/mobileinput">
              CREATE TRANSACTION
            </ToTransactionLink>
          </>
        )}
        <Wrap>
          <LinkReport to="/report">
            Reports
            <Reports style={{ marginLeft: 20 }} />
          </LinkReport>

          <Balance />
        </Wrap>
        {width < 767.98 && <MobileExpensesTrans />}
        <TransactionButtons />
        {width >= 768 && width < 1280 && (
          <>
            <TransactionsContainer>
              <InputArea />
              <Wrapper>
                <OperationsTable />
              </Wrapper>
            </TransactionsContainer>
            <Summary />
          </>
        )}
        {width >= 1280 && (
          <TransactionsContainer>
            <InputArea />
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
