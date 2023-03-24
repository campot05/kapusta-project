import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.transactions;

export const selectExpenseCategories = state =>
  state.transactions.expenseCategory;

export const getTransByDate = state => state.transactions.transByDate;

export const getDateTransaction = state => state.transactions.date;

// Selectors for expenses tables
export const getExpensesMonthStats = state =>
  state.transactions.expensesMonthStats;

export const getExpensesTrans = state => state.transactions.transExpense;

export const transactionsFilteredByDate = createSelector(
  [getDateTransaction, getExpensesTrans],
  (date, transactions) => {
    console.log(`🚀 ~ transactions:`, transactions);
    if (transactions === null) {
      return;
    }
    return transactions.filter(el => {
      return el.date === date;
    });
  }
);

// Selectors for incomes tables
export const getIncomeMonthStats = state => state.transactions.incomeMonthStats;
