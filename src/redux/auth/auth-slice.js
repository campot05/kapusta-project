import { createSlice } from '@reduxjs/toolkit';
import { updateUserBalance } from 'redux/balance/balanceOperations';
import {
  addExpense,
  addIncome,
  deleteTransaction,
} from 'redux/transactions/trans-operations';
import { logIn, refreshToken, refreshUser, logOut } from './auth-operations';
const initialState = {
  user: { email: '', balance: 0, transactions: null },
  token: null,
  accessToken: null,
  sid: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.userData;
      state.accessToken = payload.accessToken;
      state.sid = payload.sid;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
    },
    [logOut.pending](state, action) {
      state.isRefreshing = true;
    },
    [logOut.fulfilled](state, action) {
      return initialState;
    },
    [refreshToken.pending](state) {
      state.isRefreshing = true;
    },
    [refreshToken.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.accessToken = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sid = payload.newSid;
      state.isRefreshing = false;
    },
    [refreshToken.rejected](state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isRefreshing = false;
    },
    [updateUserBalance.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [updateUserBalance.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user.balance = payload.balance;
    },
    [updateUserBalance.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.action;
    },
    [addExpense.fulfilled](state, { payload }) {
      state.user.balance = payload.newBalance;
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      state.user.balance = payload.newBalance;
    },
    [addIncome.fulfilled](state, { payload }) {
      state.user.balance = payload.newBalance;
    },
  },
});

export const authReducer = authSlice.reducer;
