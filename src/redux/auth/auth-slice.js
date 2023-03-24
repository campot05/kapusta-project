import { createSlice } from '@reduxjs/toolkit';
import { logIn, refreshToken, refreshUser, logOut } from './auth-operations';
const initialState = {
  user: { email: '', balance: 0, transactions: null },
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
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
