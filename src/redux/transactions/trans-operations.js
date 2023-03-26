import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
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
  'transactions/addExpense',
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
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`/transaction/${id}`);
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
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/income');
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
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/expense');
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
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/income-categories');
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  '/transaction/expense-categories',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/expense-categories');
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPeriodData = createAsyncThunk(
  '/transaction/period-data',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axios.get('/transaction/period-data', {
        params: {
          date: date,
        },
      });
      return result.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong, please try again later');
      return rejectWithValue(error.response.data);
    }
  }
);
