import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  uploadImageProduc,
  uploadProduc,
  updateProduct,
  filterCategoryProduc,
  downloadProducImage,
} from '../../../services';

const initialState = {
  producs: [],
};

export const updateProduc = createAsyncThunk(
  'producs/updateProduc',
  async (spec) => {
    try {
      const res = await updateProduct(spec);

      return res.status;
    } catch (error) {
      console.log('producs/updateProduc', error);
    }
  },
);

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

export const filterCategoryProducts = createAsyncThunk(
  'producs/filterCategoryProducts',
  async (spec) => {
    try {
      const res = await filterCategoryProduc(spec);
      return res;
    } catch (error) {
      console.log('producs/filterCategoryProducts', error);
    }
  },
);

export const downloadImage = createAsyncThunk(
  'producs/downloadImage',
  async (spec) => {
    try {
      const publicUrl = downloadProducImage(spec);
      return publicUrl;
    } catch (error) {
      console.log('producs/downloadImage', error);
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
