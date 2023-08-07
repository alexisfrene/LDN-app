import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  params: [],
};

export const getPermissions = createAsyncThunk(
  'account-manager/updateParams',
  async () => {
    return { params: { hola: 'Juancarlos' } };
  },
);

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPermissions.fulfilled, (state, action) => {
      const { params } = action.payload;
      state.params = params;
    });
  },
});

export default configSlice.reducer;
