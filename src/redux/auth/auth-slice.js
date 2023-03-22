import { createSlice } from '@reduxjs/toolkit';
import { logIn, refreshToken, refreshUser } from './auth-operations';
const initialState = {
  user: { email: null, balance: 0, transactions: null },
  token: null,
  accessToken: null,
  sid: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.userData;
      state.token = payload.accessToken;
      state.sid = payload.sid;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
    },
    [refreshToken.pending](state) {
      state.isRefreshing = true;
    },
    [refreshToken.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.accessToken = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sid = payload.newSid;
    },
    [refreshToken.rejected](state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {},
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
    },
    [refreshUser.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
