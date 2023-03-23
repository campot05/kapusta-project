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
} from 'images/images';
import { getTransByDate } from 'redux/transactions/trans-selectors';
import { ExpIncMenu } from 'components/ExpIncMenu/ExpIncMenu';
import { ExpIncSwitch } from 'components/ExpIncSwitch/ExpIncSwitch';
import { useSwitchContext } from 'contexts/SwitchProvider';
import BarChart from 'components/BarChart/BarChart';

const categoryIcons = {
  alcohol: Alcohol,
  products: Products,
  entertainment: Entertainment,
  health: Health,
  technique: Technique,
  transport: Transport,
  housing: Housing,
  hobbies: Hobbies,
  education: Education,
  other: Ufo,
  utilities: Utilities,
  salary: Salary,
  addIncome: AddIncome,
};

// DUMMY DATA
const categoriesExpense = [
  'products',
  'alcohol',
  'entertainment',
  'health',
  'transport',
  'housing',
  'technique',
  'utilities',
  'hobbies',
  'education',
  'other',
];
const categoriesIncome = ['salary', 'addIncome'];

const mockByDate = {
  incomes: {
    total: 12000,
    incomesData: {
      salary: {
        total: 12000,
        Аванс: 5000,
        Основная: 7000,
      },
      addIncome: {
        total: 15000,
        Аванс: 5000,
        Основная: 7000,
      },
    },
  },
  expenses: {
    total: 5200,
    expensesData: {
      transport: {
        total: 4000,
        'Car reparing': 3500,
        'Washing': 500,
      },
      housing: {
        total: 1200,
        'Vase': 150,
        'Furniture': 1200,
      },
      education: {
        total: 3200,
        "School": 150,
        'Books': 105,
      },
      technique: {
        total: 1200,
        'ScrewDrivers': 150,
        'Hammer': 1050,
      },
      utilities: {
        total: 1200,
        'HomeMedia': 150,
        'Electricity': 1050,
      },
      entertainment: {
        total: 1200,
        'Cinema': 150,
        'Theatre': 1050,
      },
      health: {
        total: 1200,
        'Medicane': 150,
        'Antibaiotics': 1050,
      },
      other: {
        total: 4200,
        'Travel': 150,
        'Flight': 1050,
      },
      hobbies: {
        total: 3200,
        'Box': 150,
        'Gym': 1050,
      },
      products: {
        total: 1200,
        'Tomato': 150,
        'Potato': 102,
      },
      alcohol: {
        total: 1200,
        'J&D': 150,
        'Chivas': 1050,
      },
    },
  },
};

const dummyChart = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];
//  END DUMMY DATA


export default function Reports() {
  //PRODUCTION
  // const transByDate = useSelector(getTransByDate);
  // cosnt INCOME CAtegory = useSelector()
  // cosnt EXPENSE Category = useSelector()
  // const dispatch = useDispatch();
  // useEffect(() => {
  // })

  // MOCK
  const { transSwitch } = useSwitchContext();
  let categoriesToShow = [];
  const { incomes } = mockByDate; // change from above with useSelector()
  const { expenses } = mockByDate; // change from above with useSelector()
  
  const { total: incomeTotal, incomesData } = incomes;
  const { total: expenseTotal, expensesData } = expenses;

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

  function changeExpIncMarkup() {
    console.log('switch', transSwitch);
    if (transSwitch === 'expenses') {
      createCategories(categoriesExpense, expensesData);
    } else {
      createCategories(categoriesIncome, incomesData);
    }
  }
  changeExpIncMarkup();

  //======
  //CHART
  //======
  const [chartData,setChartData] = useState({
    labels:dummyChart.map(row => row.year),
    datasets:[{
      label:'expense/income',
      data: dummyChart.map(row => row.count),
      // backgroundColor:['#FF751D','#FED9BF']
      backgroundColor: dummyChart.map((_,idx) => (idx%1 === 0 && idx%4 === 0) ? '#FF751D':'#FED9BF'),
      borderRadius:10,
    }],
  })
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
    >
      <CurrPeriodSwitch />
      <ExpIncBar />
      <ExpIncMenu categories={categoriesToShow} >
        <ExpIncSwitch />
      </ExpIncMenu>
      <BarChart chartData={chartData}/>
    </div>
  );
}
