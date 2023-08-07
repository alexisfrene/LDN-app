import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  home: [],
};

// export const homeParams = createAsyncThunk('home', async () => {
//   return { home: ['hola', 'Juancarlos_HOME'] };
// });

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //   builder.addCase(homeParams.fulfilled, (state, action) => {
    //     const { home } = action.payload;
    //     state.home = home;
    //   });
  },
});

export default homeSlice.reducer;
