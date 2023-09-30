import { supabase } from '../lib/supabse';

interface SignInValues {
  email: string;
  password: string;
}

export const signInWithEmail = async (values: SignInValues) => {
  const body = {
    email: values?.email || '',
    password: values?.password || '',
  };
  const res = await supabase.auth.signInWithPassword(body);
  return res;
};
