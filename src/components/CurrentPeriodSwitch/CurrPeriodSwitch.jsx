import { Typography } from '@mui/material';
import { StyledCarouselDiv } from 'components/CarouselItem/CarouselItem.styled';
import { StyledTitle } from './CurrPeriodSwitch.styled';
import { format } from 'date-fns';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenseSummary,
  getIncomeSummary,
} from 'redux/transactions/trans-operations';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { ArrowNext, ArrowPrev } from 'images/images';
import { getPeriodData } from 'redux/transactions/trans-operations';

export const CurrPeriodSwitch = ({ setChartToDefault = () => null }) => {
  const [idx, setIdx] = useState(0);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const expensesMonths = useSelector(state => state.transactions.transExpense);
  const incomeMonths = useSelector(state => state.transactions.transIncome);

  // NEED TO COMMENT AND ERASE AFTER =======
  useEffect(() => {
    if (isRefreshing) return;
    dispatch(getIncomeSummary());
    dispatch(getExpenseSummary());
  }, [dispatch, isRefreshing]);
  //================================

  const handleSelect = idx => {
    setIdx(idx);
  };

  if (!expensesMonths || !incomeMonths) return;
  const monthListExpense = createMonthList(expensesMonths);
  const monthListIncome = createMonthList(incomeMonths);
  const allMonths = [...monthListExpense, ...monthListIncome];

  function createMonthList(summary) {
    return Array.from(
      new Set([
        ...summary
          .map(obj => ({ ...obj, date: new Date(obj.date) }))
          .sort((objA, objB) => Number(objB.date) - Number(objA.date))
          .map(obj => format(new Date(obj.date), 'MMMM yyyy')),
      ])
    );
  }

  return (
    <StyledCarouselDiv>
      <StyledTitle>Current period: </StyledTitle>
      <Carousel
        className="js-period"
        style={{ width: '155px', display: 'flex' }}
        slide={false}
        activeIndex={idx}
        defaultActiveIndex={idx}
        interval={null}
        indicators={false}
        nextIcon={<ArrowNext />}
        prevIcon={<ArrowPrev />}
        onSlid={idx => {
          const divEl = document.querySelector('.js-period');
          const value = divEl.querySelector('.active.carousel-item').firstChild
            .textContent;

          dispatch(getPeriodData(format(new Date(value), 'yyyy-MM')));
          setChartToDefault();
        }}
        onSelect={handleSelect}
      >
        {allMonths.map((item, idx) => (
          <Carousel.Item
            key={idx}
            style={{
              backgroundColor: 'trasparent',
              color: 'black',
              marginTop: '20px',
              textAlign: 'center',
              margin: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="button">{item}</Typography>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledCarouselDiv>
  );
};
