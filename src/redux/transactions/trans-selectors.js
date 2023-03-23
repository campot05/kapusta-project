import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.transactions;

export const getDateTransaction = state => state.transactions.date;

export const transactionsFilteredByDate = createSelector(
  [getDateTransaction, getTransactions],
  (date, transactions) => {
    if (transactions === null) {
      return;
    }
    return transactions.expenses.filter(el => {
      return el.date === '2023-12-31';
      //   return el.date === date;
    });
  }
);
