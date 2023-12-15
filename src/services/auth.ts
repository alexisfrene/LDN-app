import { supabase } from '../lib/supabase';

interface SignInValues {
  email: string;
  password: string;
}

export const signInWithEmail = async (values: SignInValues) => {
  const signIn = {
    email: values.email,
    password: values.password,
  };
  const res = await supabase.auth.signInWithPassword(signIn);
  return res;
};
