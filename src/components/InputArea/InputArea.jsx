import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


import {addExpense,getExpenseSummary} from '../../redux/transactions/trans-operations';
import useMediaQuery from '@mui/material/useMediaQuery';
import {calendar, calculator} from '../../images/images';
import { selectOperationType, getTransactions } from '../../redux/transactions/trans-selectors';
 import { Button } from './Button';
import moment from 'moment';
import Notiflix from 'notiflix';
import {
  ButtonWrapper,
  CalculatorIcon,
  CalendarIcon,
  CountInput,
  CountWrapper,
  DateSelection,
  DateWrapper,
  DescriptionInput,
  FormWrapper,
InputWrapper,

} from './InputArea.styled';

//import { customStyles } from './SelectorCustomStyle';

 const InputArea = ({ value }) => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const type = useSelector(selectOperationType);
      //  const transactions = useSelector(getTransactions);
      //  console.log(transactions)
       const transactions = [
  "Продукты",
  "Алкоголь",
  "Развлечения",
  "Здоровье",
  "Транспорт",
  "Всё для дома",
  "Техника",
  "Коммуналка и связь",
  "Спорт и хобби",
  "Образование",
  "Прочее"
       ]
       //product list
       const [product, setProduct] = React.useState('');

  const handleChangeList = (evt) => {
    setProduct(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !category || !amount) {
      return Notiflix.Notify.warning('Missing required fields');
    }
    const userEnteredData = {
      operation: type,
      description: description,
      date: date,
      category: category.value,
      sum: amount,
      month: moment(date).format('MMMM'),
      year: moment(date).format('YYYY'),
      currency: 'UAH',
    };
    dispatch(addExpense(userEnteredData));
    resetForm();
    return;
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
        setAmount(value);
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
                          <CalendarIcon width={20} height={17}>
            <use href={`${calendar}#icon-calendar`}></use>
          </CalendarIcon>
          <DateSelection
            aria-label="Date"
            name="date"
            dateFormat="yyyy-MM-dd"
            onChange={handleChange}
            type="date"
            value={date}
          />
          
        </DateWrapper>
        <DescriptionInput
          placeholder={('Product description')}
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
       
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Product category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={product}
          onChange={handleChangeList}
          autoWidth
          label="product"
        >
          {transactions.map((el) => (
                                <MenuItem>{el}</MenuItem>
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
          <CalculatorIcon
            width={isScreenMoreTablet ? 20 : 40}
            height={isScreenMoreTablet ? 20 : 40}
          >
            <use href={`${calculator}#icon-calculator`}></use>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit" color="accent" design="operation">
          {('button.Input')}
        </Button>
        <Button
          type="button"
          color="white"
          design="operation"
          onClick={resetForm}
        >
          {('button.Clear')}
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// InputArea.propTypes = {
//   value: PropTypes.number,
// };

export default InputArea;
