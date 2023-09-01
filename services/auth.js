import { supabase } from '../lib/supabse';

export const signInWithEmail = async (values) => {
  const body = {
    email: values?.email || '',
    password: values?.password || '',
  };
  const res = await supabase.auth.signInWithPassword(body);
  return res;
};
