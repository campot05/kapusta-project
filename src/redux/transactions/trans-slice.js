import { createSlice } from '@reduxjs/toolkit';
import {
  addIncome,
  addExpense,
  deleteTransaction,
  getIncomeSummary,
  getExpenseSummary,
  getIncomeCategories,
  getExpenseCategories,
  getPeriodData,
} from './trans-operations';
const initialState = {
  transactions: [],
  summary: [],
  message: null,
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setOperationType(state, payload) {
      state.operationType = payload;
    },
  },
  extraReducers: {
    [addIncome.fulfilled](state, { payload }) {
      state.message = payload.message;
      state.transactions.push(payload.transaction);
      state.isLoading = false;
    },
    [addIncome.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [addIncome.pending](state) {
      state.isLoading = true;
    },
    [addExpense.fulfilled](state, { payload }) {
      state.message = payload.message;
      state.transactions.push(payload.transaction);
      state.isLoading = false;
    },
    [addExpense.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [addExpense.pending](state) {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      state.transactions = state.transactions.filter(
        ({ _id }) => _id !== payload.transaction._id
      );
      state.isLoading = false;
    },
    [deleteTransaction.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [deleteTransaction.pending](state) {
      state.isLoading = true;
    },
    [getIncomeSummary.fulfilled](state, { payload }) {
      state.summary = payload;
      state.isLoading = false;
    },
    [getIncomeSummary.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [getIncomeSummary.pending](state) {
      state.isLoading = true;
    },
    [getExpenseSummary.fulfilled](state, { payload }) {
      state.summary = payload;
      state.isLoading = false;
    },
    [getExpenseSummary.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [getExpenseSummary.pending](state) {
      state.isLoading = true;
    },
    [getIncomeCategories.fulfilled](state, { payload }) {
      state.transactions = payload;
      state.isLoading = false;
    },
    [getIncomeCategories.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [getIncomeCategories.pending](state) {
      state.isLoading = true;
    },
    [getExpenseCategories.fulfilled](state, { payload }) {
      state.transactions = payload;
      state.isLoading = false;
    },
    [getExpenseCategories.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [getExpenseCategories.pending](state) {
      state.isLoading = true;
    },
    [getPeriodData.fulfilled](state, { payload }) {
      state.message = payload.message;
      state.transactions.push(payload.transaction);
      state.isLoading = false;
    },
    [getPeriodData.rejected](state, { payload }) {
      state.error = payload.message;
      state.isLoading = false;
    },
    [getPeriodData.pending](state) {
      state.isLoading = true;
    },
  },
});

export const transactionReducer = transactionSlice.reducer;
