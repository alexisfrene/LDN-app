import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmail } from '../../../services';
import { supabase } from '../../../lib/supabse';

const initialState = {
  token: null,
  user: null,
  permissions: null,
};

export const autoLogin = createAsyncThunk(
  'login/autoLogin',
  async (setSession) => {
    const ddd = await supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
      });

    const fff = await supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log({ ddd, fff });
  },
);

export const setLogin = createAsyncThunk('login/setLogin', async (params) => {
  try {
    const {
      data: {
        session: { access_token },
        user: { email, id, role, phone, aud },
      },
    } = await signInWithEmail(params);
    return {
      data: {
        access_token,
        email,
        id,
        role,
        phone,
        aud,
      },
    };
  } catch (error) {
    console.log('ERROR SETLOGIN', error);
  }
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLogin.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.user = data;
      state.token = data.access_token;
    });
  },
});

export default loginSlice.reducer;
