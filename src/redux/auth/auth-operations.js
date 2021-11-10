import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {}
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    unsetToken();
  } catch (error) {}
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return refreshUser();
    }
    setToken(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch {}
  },
);
