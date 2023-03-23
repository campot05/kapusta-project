import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useAuth} from 'hooks'
import {ReactComponent as Calendar} from '../../images/calendar.svg'
import {addExpense,getExpenseCategories,getExpenseSummary} from '../../redux/transactions/trans-operations';
import useMediaQuery from '@mui/material/useMediaQuery';
//import {calendar, calculator} from '../../images/images';
import { getTransactions } from '../../redux/transactions/trans-selectors';
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
Container
} from './InputArea.styled';
//import { Container } from '@mui/system';



 const InputArea = ({ value }) => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');
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
       }, [isRefreshing])
       const transactions = useSelector(getTransactions);

      

  const handleChangeList = (event) => {
        setCategory(event.target.value);
        console.log(event)
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !category || !amount) {
      return Notiflix.Notify.warning('Missing required fields');
    }
    const userEnteredData = {
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
        <Container>
    <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
      <InputWrapper>
                    <DateWrapper>
                          
                                {/* <use href={`${calendar}#icon-calendar`}></use> */}
                 <Calendar/>           
          
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
                                value={category ?? ''}
                                
          onChange={handleChangeList}
          autoWidth
          label="product"
        >
          {transactions.map((el) => (
                                <MenuItem key = {el} value={el}>{el}</MenuItem>
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
            {/* <use href={`${calculator}#icon-calculator`}></use> */}
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
                   </Container>
  );
};

// InputArea.propTypes = {
//   value: PropTypes.number,
// };

export default InputArea;

