import { LinkReport, ToTransactionLink } from './Operations.styled';
import InputArea from 'components/InputArea';
import TransactionButtons from 'components/TransactionButtons';
import {
  TransactionsContainer,
  Wrapper,
  ContainerDiv,
} from './Operations.styled';
import { StyledTitle } from 'components/CurrentPeriodSwitch/CurrPeriodSwitch.styled';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import Background from 'components/Background/Background';
import Summary from 'components/Summary/Summary';
import { Balance } from 'components/Balance/Balance';
import { useWindowSize } from 'react-use';
import React from 'react';
import { ReactComponent as Reports } from '../../images/reports.svg';
import { ReactComponent as ArrowBack } from '../../images/arrowBack.svg';
import { StyledTitleTrans } from 'pages/IncomePage/IncomePage.styled';

export default function Home() {
  const { width } = useWindowSize();
  return (
    <Background type="Main">
      <ContainerDiv>
        {width < 767.98 && (
          <ToTransactionLink to="/mobileinput">
            <ArrowBack style={{ fill: '#FF751D' }} />
            <StyledTitleTrans>TO TRANSACTION</StyledTitleTrans>
          </ToTransactionLink>
        )}
        <LinkReport to="/report">
          <StyledTitle>Reports</StyledTitle>
          <Reports />
        </LinkReport>

        <Balance />
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
