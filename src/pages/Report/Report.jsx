import { ExpIncBar } from 'components/ExpIncBar/ExpIncBar';
import { CurrPeriodSwitch } from 'components/CurrentPeriodSwitch/CurrPeriodSwitch';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
// import { getTransByDate } from 'redux/transactions/trans-selectors';
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
        'Cash advance': 80000,
        Allowance: 4000,
      },
      addIncome: {
        total: 15000,
        Bonus: 5000,
        'Add Allowance': 7000,
      },
    },
  },
  expenses: {
    total: 5200,
    expensesData: {
      transport: {
        total: 4000,
        'Car reparing': 3500,
        Washing: 500,
      },
      housing: {
        total: 1200,
        Vase: 150,
        Furniture: 1200,
      },
      education: {
        total: 3200,
        School: 150,
        Books: 105,
      },
      technique: {
        total: 1200,
        ScrewDrivers: 150,
        Hammer: 1050,
      },
      utilities: {
        total: 1200,
        HomeMedia: 15000,
        Electricity: 1050,
      },
      entertainment: {
        total: 1200,
        Cinema: 10000,
        Theatre: 800,
      },
      health: {
        total: 1200,
        Medicane: 2500,
        Antibaiotics: 10500,
      },
      other: {
        total: 4200,
        Travel: 15000,
        Flight: 5050,
      },
      hobbies: {
        total: 3200,
        Box: 3550,
        Gym: 45650,
        Travel: 15000,
        Flight: 5050,
        Tomato: 34650,
        Potato: 10290,
        'J&D': 5200,
        Chivas: 23050,
      },
      products: {
        total: 1200,
        Tomato: 34650,
        Potato: 10290,
      },
      alcohol: {
        total: 1200,
        'J&D': 5200,
        Chivas: 23050,
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
  // eslint-disable-next-line
  const { total: incomeTotal, incomesData } = incomes;
  // eslint-disable-next-line
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
    //  console.log('switch', transSwitch);
    if (transSwitch === 'expenses') {
      createCategories(categoriesExpense, expensesData);
    } else {
      createCategories(categoriesIncome, incomesData);
    }
  }
  changeExpIncMarkup();

  //======
  // CHART
  //======
  const [chartData, setChartData] = useState({
    labels: dummyChart.map(row => row.year),
    datasets: [
      {
        label: transSwitch,
        data: dummyChart.map(row => row.count),
        backgroundColor: dummyChart.map((_, idx) =>
          idx % 1 === 0 && idx % 4 === 0 ? '#FF751D' : '#FED9BF'
        ),
        borderRadius: 10,
      },
    ],
  });

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
      .map(key => ({ subCategory: key, amount: data[key] }))
      .slice(1);
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
      <ExpIncMenu categories={categoriesToShow} onCategoryClick={getChartData}>
        <ExpIncSwitch />
      </ExpIncMenu>
      <BarChart chartData={chartData} />
    </div>
  );
}
