import { supabase } from '../lib/supabse';
import { formatUrl } from '../utils';

export const getAllProducs = async () => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .not('produc_state', 'eq', false);
};
export const getCategoryProducs = async (category) => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_category', category)
    .not('produc_state', 'eq', false);
};
export const getCategoryProducsAndSize = async (category, size) => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_category', category)
    .not('produc_state', 'eq', false)
    .eq('produc_size', size);
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

export const updateProduct = async (spec) => {
  const { id, ...editColum } = spec;

  return await supabase.from('ldn_producs').update(editColum).eq('id', id);
};

export const filterCategoryProduc = async (filter) => {
  if (filter.type === 'all') {
    return await getAllProducs();
  } else {
    if (filter?.search) {
      return await getCategoryProducsAndSize(filter.type, filter?.search);
    } else {
      return await getCategoryProducs(filter.type);
    }
  }
};
