import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.transactions;
export const getTransByDate = state => state.transactions.transByDate;
