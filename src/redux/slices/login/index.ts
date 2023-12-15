import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { signInWithEmail } from '../../../services';
import { LoginState } from '../../../types';

const initialState: LoginState = {
  infoUser: null,
};

interface SetLoginProps {
  email: string;
  password: string;
}

export const setLogin = createAsyncThunk(
  'login/setLogin',
  async (params: SetLoginProps) => {
    try {
      const res = await signInWithEmail(params);
      if (!res.error) {
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
      console.error('ERROR SETLOGIN', error);
      throw error;
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setLogin.fulfilled,
        (state, action: PayloadAction<LoginState['infoUser']>) => {
          const data = action.payload;
          if (data?.access_token) {
            state.infoUser = data;
          }
        },
      )
      .addCase(setLogin.rejected, (state) => {
        state.infoUser = {};
      });
  },
});

export default loginSlice.reducer;
