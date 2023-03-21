import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  summary: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const transactionReducer = transactionSlice.reducer;
