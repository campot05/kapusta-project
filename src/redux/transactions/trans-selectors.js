import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.transactions;
export const selectExpenseCategories = state =>
  state.transactions.expenseCategory;
