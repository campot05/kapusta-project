import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './auth-operations';
const initialState = {
  user: { email: null, balance: 0, transactions: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.fulfilled](state, action) {
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      console.log(action, 'action');
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
