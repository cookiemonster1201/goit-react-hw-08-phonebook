import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled]: state => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
