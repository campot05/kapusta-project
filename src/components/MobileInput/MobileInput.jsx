import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useAuth } from 'hooks';
import { ReactComponent as Calendar } from '../../images/calendar.svg';
import { ReactComponent as Calculator } from '../../images/calculator.svg';
import {
  addExpense,
  getExpenseCategories,
  getExpenseSummary,
  // eslint-disable-next-line
} from '../../redux/transactions/trans-operations';
import {
  // eslint-disable-next-line
  selectExpenseCategories,
} from '../../redux/transactions/trans-selectors';
import { Button } from '../InputArea/Button';
import moment from 'moment';
import Notiflix from 'notiflix';
import {
  ButtonWrapper,
  // eslint-disable-next-line
  CountInput,
  CountWrapper,
  DateSelection,
  DateWrapper,
  DescriptionInput,
  FormWrapper,
  InputWrapper,
  DescriptionWrapper,
} from './MobileInput.styled';

const MobileInput = ({ value }) => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = React.useState('');
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('');
  const { isRefreshing } = useAuth();

  useEffect(() => {
    if (isRefreshing) {
      return;
    }
    dispatch(getExpenseCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);
  const transactions = useSelector(selectExpenseCategories);

  const handleChangeList = event => {
    setCategory(event.target.value);
  };
  //  month: moment(date).format('MMMM'),
  // year: moment(date).format('YYYY'),
  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !category || !amount) {
      return Notiflix.Notify.warning('Missing required fields');
    }
    const userEnteredData = {
      description: description,
      date: date,
      category: category,
      amount: amount,
    };

    dispatch(addExpense(userEnteredData))
      .unwrap()
      .then(() => dispatch(getExpenseSummary()));

    resetForm();
    // return;
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        const regex = /^\d+(\.\d{0,2})?$/;
        if (regex.test(value) || value === '') {
          setAmount(value);
        }
        break;

      default:
        break;
    }
  };
  const resetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  useEffect(() => {
    if (value) {
      resetForm();
    }
  }, [value]);

  // useEffect(() => {
  //    dispatch
  //   }, []);

  return (
    <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
      <InputWrapper>
        <DateWrapper>
          <Calendar />

          <DateSelection
            aria-label="Date"
            name="date"
            dateFormat="yyyy-MM-dd"
            onChange={handleChange}
            type="date"
            id="123"
            value={date}
          />
        </DateWrapper>
        <DescriptionWrapper>
          <DescriptionInput
            placeholder={'Product description'}
            name="description"
            aria-label="Text"
            onChange={handleChange}
            type="text"
            value={description}
            maxLength="25"
          />

          <FormControl sx={{ m: 1, minWidth: 169 }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              style={{
                fontSize: '12px',
                color: '#c7ccdc',
                lineHeight: '1.14',
                paddingLeft: '12px',
                paddingTop: '9px',
              }}
            >
              Product category
            </InputLabel>

            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={category ?? ''}
              onChange={handleChangeList}
              variant="standard"
              disableUnderline={true}
              style={{
                border: '2px solid rgb(255, 255, 255)',
                width: '280px',
                height: '44px',
                top: '-8px',
                color: '#c7ccdc',
                fontSize: '12px',
                paddingLeft: '20px',
                paddingTop: '9px',
              }}
            >
              {transactions.map(el => (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CountWrapper>
            <CountInput
              onChange={handleChange}
              type="number"
              name="amount"
              placeholder="00.00"
              min="0.01"
              step="0.01"
              value={amount}
            />
            <Calculator
              style={{
                fill: 'black',
                position: 'absolute',
                marginRight: '23px',
                marginTop: '50px',
              }}
            />
          </CountWrapper>
        </DescriptionWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit" color="accent" design="operation">
          {'Input'}
        </Button>
        <Button
          type="button"
          color="white"
          design="operation"
          onClick={resetForm}
        >
          {'Clear'}
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
export default MobileInput;
