import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmail } from '../../../services';

const initialState = {
  infoUser: null,
  hola: 'HOLAAAAAAAAAAAAAAAAA',
};

export const setLogin = createAsyncThunk('login/setLogin', async (params) => {
  try {
    const res = await signInWithEmail(params);
    if (res?.error === null) {
      const {
        data: {
          session: { access_token },
          user: { email, id, role, phone, aud },
        },
      } = res;

      return {
        access_token,
        email,
        id,
        role,
        phone,
        aud,
      };
    }
  } catch (error) {
    console.log('ERROR SETLOGIN', error);
  }
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(setLogin.fulfilled, (state, action) => {
      const data = action.payload;
      if (data?.access_token) {
        state.infoUser = data;
      }
    }),
      builder.addCase(setLogin.rejected, (state) => {
        state.infoUser = {};
      });
  },
});

export default loginSlice.reducer;
