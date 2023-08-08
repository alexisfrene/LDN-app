import { supabase } from '../lib/supabse';
import { formatUrl } from '../utils';

export const getAllProducs = async () => {
  return await supabase.from('ldn_producs').select('*');
};

export const getCategoryProducs = async (category) => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_category', category);
};

export const uploadImageProduc = async (image_url, category) => {
  const { formData, filePath } = formatUrl(image_url, category);

  return await supabase.storage.from('ldn_bucket').upload(filePath, formData);
};

export const uploadProduc = async (spec) => {
  return await supabase.from('ldn_producs').insert(spec);
};

export const downloadProducImage = (path) => {
  const { data: publicUrl } = supabase.storage
    .from('ldn_bucket')
    .getPublicUrl(path);

  return publicUrl;
};
