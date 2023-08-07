export const formatUrl = (image_url, category) => {
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
