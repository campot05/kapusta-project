import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const addIncome = createAsyncThunk(
  'transactions/income',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.post('/transaction/income', transaction);
      Notiflix.Notify.success('Operation added successfully');
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
export const addExpense = createAsyncThunk(
  'transactions/expense',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.post('/transaction/expense', transaction);
      Notiflix.Notify.success('Operation added successfully');
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions',
  async (transaction_Id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/transaction/${transaction_Id}`);
      Notiflix.Notify.success('Operation deleted successfully');
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncomeSummary = createAsyncThunk(
  'transactions/income',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/income', transaction);
      return result.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        Notiflix.Notify.failure('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenseSummary = createAsyncThunk(
  'transactions/expense',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/expense', transaction);
      return result.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        Notiflix.Notify.failure('Something went wrong, please try again later');
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const getIncomeCategories = createAsyncThunk(
  '/transaction/income-categories',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        '/transaction/income-categories',
        transaction
      );
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  '/transaction/expense-categories',
  async (transaction, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        '/transaction/expense-categories',
        transaction
      );
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
