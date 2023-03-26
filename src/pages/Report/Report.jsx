import { ExpIncBar } from 'components/ExpIncBar/ExpIncBar';
import { CurrPeriodSwitch } from 'components/CurrentPeriodSwitch/CurrPeriodSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  AddIncome,
  Alcohol,
  Education,
  Entertainment,
  Health,
  Hobbies,
  Housing,
  Products,
  Salary,
  Technique,
  Transport,
  Ufo,
  Utilities,
  ArrowBack,
} from 'images/images';
import { getTransByDate } from 'redux/transactions/trans-selectors';
import { ExpIncMenu } from 'components/ExpIncMenu/ExpIncMenu';
import { ExpIncSwitch } from 'components/ExpIncSwitch/ExpIncSwitch';
import { useSwitchContext } from 'contexts/SwitchProvider';
import BarChart from 'components/BarChart/BarChart';
import {
  getExpenseCategories,
  getIncomeCategories,
  getPeriodData,
} from 'redux/transactions/trans-operations';
import { useAuth } from 'hooks';
import { format } from 'date-fns';
import { useWindowSize } from 'react-use';
import {
  StyledLinkBackToMain,
  StyledTitle,
} from 'components/CurrentPeriodSwitch/CurrPeriodSwitch.styled';
import Background from 'components/Background/Background';
import { Balance } from 'components/Balance/Balance';
import {
  Container,
  StyledCommonBar,
  StyledReportAppbar,
} from './Report.styled';

const categoryIcons = {
  Alcohol: Alcohol,
  Products: Products,
  Entertainment: Entertainment,
  Health: Health,
  Technics: Technique,
  Transport: Transport,
  'For home': Housing,
  'Sports and hobby': Hobbies,
  Education: Education,
  Other: Ufo,
  Utilities: Utilities,
  Salary: Salary,
  'Additional income': AddIncome,
};

export default function Reports() {
  const { isRefreshing } = useAuth();
  const transByDate = useSelector(getTransByDate);
  const categoriesExpense = useSelector(
    state => state.transactions.expenseCategory
  );
  const categoriesIncome = useSelector(
    state => state.transactions.incomeCategory
  );
  const dispatch = useDispatch();
  const { transSwitch } = useSwitchContext();
  const { width } = useWindowSize();
  let categoriesToShow = [];

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (isRefreshing) return;
    dispatch(getPeriodData(format(new Date(), 'yyyy-MM')));
  }, [dispatch, isRefreshing]);

  // NEED TO COMMENT AND ERASE AFTER =======
  useEffect(() => {
    if (isRefreshing) return;
    dispatch(getIncomeCategories());
    dispatch(getExpenseCategories());
  }, [dispatch, isRefreshing]);
  // =========================================

  if (!transByDate || !categoriesExpense || !categoriesIncome) return null;

  const { incomes } = transByDate;
  const { expenses } = transByDate;
  const { incomeTotal, incomesData } = incomes;
  const { expenseTotal, expensesData } = expenses;

  // SET INIT CHART ON PAGE LOAD
  const initChart = [
    { trans: 'Income', total: incomeTotal },
    { trans: 'Expense', total: expenseTotal },
  ];
  const initChartSetup = {
    labels: initChart.map(row => row.trans),
    datasets: [
      {
        label: transSwitch,
        data: initChart.map(row => row.total),
        backgroundColor: initChart.map((_, idx) =>
          idx % 1 === 0 && idx % 4 === 0 ? '#FF751D' : '#FED9BF'
        ),
        borderRadius: 10,
      },
    ],
  };

  function changeExpIncMarkup() {
    if (transSwitch === 'expenses') {
      createCategories(categoriesExpense, expensesData);
    } else {
      createCategories(categoriesIncome, incomesData);
    }
  }

  function createCategories(categories, categoriesData) {
    for (let category of categories) {
      if (category in categoriesData) {
        categoriesToShow.push({
          total: categoriesData[category].total,
          SvgIcon: categoryIcons[category],
          category,
        });
      }
    }
  }

  changeExpIncMarkup();

  //============
  // CHART BEGIN
  //============

  const getChartData = category => {
    let data;
    if (transSwitch === 'income') {
      data = incomesData[category];
    } else {
      data = expensesData[category];
    }
    const result = Object.keys(data)
      .map(key => ({ subCategory: key, amount: data[key] }))
      .slice(1)
      .sort((objA, objB) => Number(objB.amount) - Number(objA.amount));

    setChartData({
      labels: result.map(row => row.subCategory),
      datasets: [
        {
          label: transSwitch,
          data: result.map(row => row.amount),
          backgroundColor: result.map((_, idx) =>
            idx % 1 === 0 && idx % 4 === 0 ? '#FF751D' : '#FED9BF'
          ),
          borderRadius: 10,
          barPercentage: 0.5,
        },
      ],
    });
  };

  const setChartToDefault = () => {
    setChartData(null);
  };
  //======
  // END CHART
  //======
  return (
    <Background type="Main">
      <Container style={{ padding: '20px' }}>
        {width <= 767.95 ? (
          <>
            <StyledLinkBackToMain to="/" width={width}>
              <ArrowBack fill="#FF751D" />
              {width >= 480 && <StyledTitle>Main page</StyledTitle>}
            </StyledLinkBackToMain>
            <StyledReportAppbar>
              <Balance />
              <CurrPeriodSwitch setChartToDefault={setChartToDefault} />
            </StyledReportAppbar>
          </>
        ) : (
          <StyledCommonBar>
            <StyledLinkBackToMain to="/">
              <ArrowBack fill="#FF751D" />
              {width >= 480 && <StyledTitle>Main page</StyledTitle>}
            </StyledLinkBackToMain>
            <Balance />
            <CurrPeriodSwitch setChartToDefault={setChartToDefault} />
          </StyledCommonBar>
        )}
        <ExpIncBar incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
        <ExpIncMenu
          categories={categoriesToShow}
          onCategoryClick={getChartData}
        >
          <ExpIncSwitch setChartToDefault={setChartToDefault} />
        </ExpIncMenu>
        <BarChart chartData={chartData ?? initChartSetup} />
      </Container>
    </Background>
  );
}
