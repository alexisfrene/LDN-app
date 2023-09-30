import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  uploadImageProduc,
  uploadProduc,
  updateProduct,
  filterCategoryProduc,
  downloadProducImage,
} from '../../../services';

interface Product {
  id: string;
  name: string;
}

interface State {
  producs: Product[];
}

const initialState: State = {
  producs: [],
};

interface Spec {
  id: string;
}

export const updateProduc = createAsyncThunk(
  'producs/updateProduc',
  async (spec: Spec) => {
    try {
      const res = await updateProduct(spec);
      return res.status;
    } catch (error) {
      console.log('producs/updateProduc', error);
      throw new Error('Error updating product');
    }
  },
);

export const setNewProduc = createAsyncThunk(
  'producs/setNewProduc',
  async (spec: Spec) => {
    try {
      const res = await uploadProduc(spec);
      return res.status;
    } catch (error) {
      console.log('producs/setNewProduc', error);
      throw new Error('Error setting new product');
    }
  },
);

export const setImageProduc = createAsyncThunk(
  'producs/setImageProduc',
  async (spec: { image_url: string; category: string }) => {
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
      throw new Error('Error setting image for product');
    }
  },
);

export const filterCategoryProducts = createAsyncThunk(
  'producs/filterCategoryProducts',
  async (spec: Spec) => {
    try {
      const res = await filterCategoryProduc(spec);
      return res;
    } catch (error) {
      console.log('producs/filterCategoryProducts', error);
      throw new Error('Error filtering products by category');
    }
  },
);

export const downloadImage = createAsyncThunk(
  'producs/downloadImage',
  async (spec: string) => {
    try {
      const publicUrl = downloadProducImage(spec);
      return publicUrl;
    } catch (error) {
      console.log('producs/downloadImage', error);
      throw new Error('Error downloading image');
    }
  },
);

const producsSlice = createSlice({
  name: 'producs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default producsSlice.reducer;
