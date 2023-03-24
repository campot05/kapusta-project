import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateUserBalance = createAsyncThunk(
  'user/updateBalance',
  async (request, thunkAPI) => {
    try {
      const response = await axios.patch('/user/balance', request);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
