import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLogged: false,
  photoUri: false,
  cameraOpen: false,
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
    setPhotoUri: (state, action) => {
      const { uri } = action.payload;
      state.photoUri = uri;
      state.cameraOpen = false;
    },
  },
});

export const { startLoading, stopLoading, setIsLogged, setPhotoUri } =
  commonsSlice.actions;

export default commonsSlice.reducer;
