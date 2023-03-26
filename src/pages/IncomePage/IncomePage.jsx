import {
  LinkReport,
  ToTransactionLink,
  ContainerDiv,
} from './IncomePage.styled';
import IncomeInput from 'components/IncomeInput';
import TransactionButtons from 'components/TransactionButtons';
import { TransactionsContainer, Wrapper } from './IncomePage.styled';
import Background from 'components/Background/Background';
import IncomeSummery from 'components/IncomeSummery/IncomeSummery';
import { Balance } from 'components/Balance/Balance';
import { useWindowSize } from 'react-use';
import React from 'react';
import { ReactComponent as Reports } from '../../images/reports.svg';
import IncomesTransTable from 'components/IncomesTransTable/IncomesTransTable';
import MobileIncomeTrans from 'components/MobileIncomeTrans/MobileIncomeTrans';
import { Wrap } from './IncomePage.styled';
export default function Home() {
  const { width } = useWindowSize();

  return (
    <Background type="Main">
      <ContainerDiv>
        {width < 767.98 && (
          <ToTransactionLink to="/mobileincome">
            CREATE TRANSACTION
          </ToTransactionLink>
        )}

        <Wrap>
          <LinkReport to="/report">
            Reports
            <Reports style={{ marginLeft: 20 }} />
          </LinkReport>

          <Balance />
        </Wrap>

        {width < 767.98 && <MobileIncomeTrans />}
        <TransactionButtons />
        {width >= 768 && width < 1280 && (
          <>
            <TransactionsContainer>
              <IncomeInput />
              <Wrapper>
                <IncomesTransTable />
              </Wrapper>
            </TransactionsContainer>
            <IncomeSummery />
          </>
        )}
        {width >= 1280 && (
          <TransactionsContainer>
            <IncomeInput />
            <Wrapper>
              <IncomesTransTable />
              <IncomeSummery />
            </Wrapper>
          </TransactionsContainer>
        )}
      </ContainerDiv>
    </Background>
  );
}
