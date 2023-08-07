import { supabase } from '../lib/supabse';
import { formatUrl } from '../utils';

export const uploadImageProduc = async (image_url, category) => {
  const { formData, filePath } = formatUrl(image_url, category);

  return await supabase.storage.from('ldn_bucket').upload(filePath, formData);
};

export const uploadProduc = async (spec) => {
  return await supabase.from('ldn_producs').insert(spec);
};
