import { supabase } from '../lib/supabse';
import { formatNumberWithComma, formatUrl } from '../utils';

export const getAllProducs = async () => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .not('produc_state', 'eq', false);
};
export const getCategoryProducs = async (category: string) => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_category', category)
    .not('produc_state', 'eq', false);
};
export const getCategoryProducsAndSize = async (
  category: string,
  size: string,
) => {
  return await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_category', category)
    .not('produc_state', 'eq', false)
    .eq('produc_size', size);
};

export const uploadImageProduc = async (
  image_url: string,
  category: string,
) => {
  const { formData, filePath } = formatUrl(image_url, category);

  return await supabase.storage.from('ldn_bucket').upload(filePath, formData);
};

export const uploadProduc = async (spec) => {
  return await supabase.from('ldn_producs').insert(spec);
};

export const downloadProducImage = (path: string) => {
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

export const productOverview = async (dollayToDay: number) => {
  const { data, error } = await supabase
    .from('ldn_producs')
    .select('*')
    .eq('produc_state', true);

  if (error) {
    console.error('Error in productOverview/services', error.message);
  } else {
    const totalPrice = data.reduce(
      (sum, product) => sum + product.produc_price,
      0,
    );
    const totalPriceDollar = totalPrice / dollayToDay;

    return {
      cantProducts: data.length,
      priceInDollar: totalPriceDollar.toFixed(2),
      totalPricePeso: formatNumberWithComma(totalPrice),
    };
  }
};
