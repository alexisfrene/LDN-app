import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLogged: false,
};

export const commonsSlice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setIsLogged: (state, action) => {
      const { isLogged } = action.payload;
      state.isLogged = isLogged;
    },
    setLogIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { startLoading, stopLoading, setIsLogged, setLogIn } =
  commonsSlice.actions;

export default commonsSlice.reducer;
