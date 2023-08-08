import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { uploadImageProduc, uploadProduc } from '../../../services';

const initialState = {
  producs: [],
};

export const setNewProduc = createAsyncThunk(
  'producs/setNewProduc',
  async (spec) => {
    try {
      const res = await uploadProduc(spec);

      return res.status;
    } catch (error) {
      console.log('producs/setNewProduc', error);
    }
  },
);

export const setImageProduc = createAsyncThunk(
  'producs/setImageProduc',
  async (spec) => {
    const { image_url, category } = spec;
    try {
      if (image_url) {
        let { data } = await uploadImageProduc(image_url, category);

        return { image_url: data?.path };
      } else {
        return { image_url: null };
      }
    } catch (err) {
      console.log('producs/setImageProduc', err);
    }
  },
);

export const producsSlice = createSlice({
  name: 'producs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default producsSlice.reducer;
