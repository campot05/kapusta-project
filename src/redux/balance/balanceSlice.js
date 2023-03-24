import { createSlice } from '@reduxjs/toolkit';
import { updateUserBalance } from './balanceOperations';

const initialState = {
  balance: 0,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUserBalance.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance = action.payload.balance;
      })
      .addCase(updateUserBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
