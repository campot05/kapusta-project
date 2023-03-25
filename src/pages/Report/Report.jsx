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
import { getExpenseCategories,getIncomeCategories,getPeriodData } from 'redux/transactions/trans-operations';
import { useAuth } from 'hooks';
import {format} from 'date-fns';
import { useWindowSize } from 'react-use';
import { StyledLinkBackToMain, StyledTitle } from 'components/CurrentPeriodSwitch/CurrPeriodSwitch.styled';


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
  //PRODUCTION
  const {isRefreshing} = useAuth();
  const transByDate = useSelector(getTransByDate);
  const categoriesExpense = useSelector(state => state.transactions.expenseCategory)
  const categoriesIncome = useSelector(state=> state.transactions.incomeCategory)
  const dispatch = useDispatch();
  const { transSwitch } = useSwitchContext();
  const {width} = useWindowSize();
  let categoriesToShow = [];

  const [chartData, setChartData] = useState(null);
  
  useEffect(() => {
    if(isRefreshing)return;
    dispatch(getPeriodData(format(new Date(),'yyyy-MM')));
  },[dispatch,isRefreshing]);

  // NEED TO COMMENT AND ERASE AFTER =======
  useEffect(() => {
    if(isRefreshing)return;
    dispatch(getIncomeCategories());
    dispatch(getExpenseCategories());
  },[dispatch,isRefreshing])
// =========================================

  if(!transByDate || !categoriesExpense || !categoriesIncome)return;

  console.log('transByDate',transByDate)
  const { incomes } = transByDate; 
  const { expenses } = transByDate; 
  const { incomeTotal, incomesData } = incomes;
  const { expenseTotal, expensesData } = expenses;

  // SET INIT CHART ON PAGE LOAD
  const initChart = [
    {trans:'Income',total:incomeTotal},
    {trans:'Expense',total:expenseTotal}
  ]
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
  }

  function changeExpIncMarkup() {
    //  console.log('switch', transSwitch);
    if (transSwitch === 'expenses') {
      createCategories(categoriesExpense, expensesData);
    } else {
      createCategories(categoriesIncome, incomesData);
    }
  }
 
  function createCategories(categories, categoriesData) {
    for (let category of categories) {
      // console.log('category', category);
      if (category in categoriesData) {
        // console.log('total', categoriesData[category].total);
        // console.log('svg', categoryIcons[category]);
        // console.log('category', category);
        categoriesToShow.push({
          total: categoriesData[category].total,
          SvgIcon: categoryIcons[category],
          category,
        });
      }
    }
  }

  changeExpIncMarkup();

  //======
  // CHART
  //======

  const getChartData = category => {
    let data;
    if (transSwitch === 'income') {
      // console.log('predata', incomesData[category]);
      data = incomesData[category];
      // console.log('data', data);
    } else {
      // console.log('predata', expensesData[category]);
      data = expensesData[category];
      // console.log('data', data);
    }
    const result = Object.keys(data)
      .map(key => ({ subCategory: key, amount: data[key]}))
      .slice(1)
      .sort((objA,objB) => Number(objA.amount) - Number(objB.amount));
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
        },
      ],
    });
  };

  const setChartToDefault = () =>{
    setChartData(null);
  }
  //======
  // END CHART
  //======
  return (
    <div
      style={{
        backgroundColor: '#F5F6FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}
    ><StyledLinkBackToMain to='/'><ArrowBack fill='#FF751D'/>{width >= 480 && <StyledTitle>Main page</StyledTitle>}</StyledLinkBackToMain>
      <CurrPeriodSwitch  setChartToDefault={setChartToDefault}/>
      <ExpIncBar incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
      <ExpIncMenu categories={categoriesToShow} onCategoryClick={getChartData}>
        <ExpIncSwitch setChartToDefault={setChartToDefault}/>
      </ExpIncMenu>
      <BarChart chartData={chartData ?? initChartSetup} />
    </div>
  );
}
