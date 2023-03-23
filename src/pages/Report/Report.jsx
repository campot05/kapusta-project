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
        СТО: 3500,
        Мойка: 500,
      },
      housing: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      education: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      technique: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      utilities: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      entertainment: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      health: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      other: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      hobbies: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      products: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
      alcohol: {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
    },
  },
};

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
  const { incomes } = mockByDate; // change from above
  const { expenses } = mockByDate; // change from above

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
      <ExpIncSwitch />
      <ExpIncMenu categories={categoriesToShow} />
    </div>
  );
}
