import { supabase } from '../lib/supabse';

export const signInWithEmail = async (values) => {
  const body = {
    email: values.email,
    password: values.password,
  };

  return await supabase.auth.signInWithPassword(body);
};
