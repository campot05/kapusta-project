import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { setAuthHeader, clearAuthHeader } from 'utils/axiosSetting';
import axios from 'axios';
import { Notify } from 'notiflix';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);

      Notify.success('Successfully registered, you can log in 👌');
      return res.data;
    } catch (error) {
      Notify.failure(
        'This email may already be registered, please try again 😢'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.accessToken);

      return res.data;
    } catch (error) {
      Notify.failure('Повторите ещё раз');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/auth/logout');

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const { sid, refreshToken } = state.auth;

    if (!sid) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(refreshToken);

    try {
      // If there is a token, add it to the HTTP header and perform the request
      const res = await axios.post('/auth/refresh', { sid });
      setAuthHeader(res.data.newAccessToken);
      console.log(res.data.newAccessToken)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/user');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
