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
  produc_gender: string;
  produc_age: string;
  produc_style: string;
  produc_brand: string;
  produc_size: string;
  produc_name: string;
  produc_description: string;
  produc_price: string;
  produc_color: string;
  produc_category: string;
  produc_image_url: string;
  produc_dollar_today: number;
  user: string;
}

export const updateProduc = createAsyncThunk(
  'producs/updateProduc',
  async (spec: Spec) => {
    try {
      const res = await updateProduct(spec);
      return res.status;
    } catch (error) {
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
        let res = await uploadImageProduc(image_url, category);
        return { image_url: res };
      } else {
        return { image_url: null };
      }
    } catch (err) {
      throw new Error('Error setting image for product');
    }
  },
);

export const filterCategoryProducts = createAsyncThunk(
  'producs/filterCategoryProducts',
  async (spec: string) => {
    try {
      const res = await filterCategoryProduc(spec);
      return res;
    } catch (error) {
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
