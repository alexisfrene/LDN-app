import { supabase } from '../../../lib/supabse';
export async function useSubmit(values) {
  const { name, description, price, color, category, image_url } = values;
  try {
    const { formData, filePath } = formatUrl(image_url, category);
    let res;

    if (formData && filePath) {
      res = await supabase.storage
        .from('ldn_bucket')
        .upload(filePath, formData);
    }

    await supabase.from('ldn_producs').insert({
      name,
      description,
      price,
      color,
      category,
      image_url: res?.data.path || '',
    });
  } catch (err) {
    console.log('aca', err);
  }
}

const formatUrl = (image_url, category) => {
  if (!!image_url) {
    const fileExt = image_url.split('.').pop();
    const fileName = image_url.replace(/^.*[\\\/]/, '');
    const filePath = `ldn-images/${category}/${Date.now()}.${fileExt}`;
    const formData = new FormData();
    const photo = {
      uri: image_url,
      name: fileName,
      type: `image/${fileExt}`,
    };
    formData.append('file', photo);

    return { formData, filePath };
  } else {
    return { formData: undefined, filePath: undefined };
  }
};
//     const res = await supabase.storage
//       .from("ldn_bucket")
//       .upload(filePath, formData);
//     console.log("RES SUPABASE", res);
//   }
