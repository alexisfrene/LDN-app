import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  photoUri: false,
  cameraOpen: false,
  dollar: { compra: 'N/A', venta: 'N/A' },
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

    setPhotoUri: (state, action) => {
      const { uri } = action.payload;
      state.photoUri = uri;
      state.cameraOpen = false;
    },
    setDollarToDay: (state, action) => {
      const { compra, venta } = action.payload;
      state.dollar = { compra, venta };
    },
  },
});

export const { startLoading, stopLoading, setPhotoUri, setDollarToDay } =
  commonsSlice.actions;

export default commonsSlice.reducer;
