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

export const generateInfoProduc = (produc) => {
  const mainInfo = [
    { textLeft: 'Categoria :', textRigth: produc?.produc_category },
    { textLeft: 'Precio :', textRigth: `$ ${produc?.produc_price}` },
    {
      textLeft: produc?.produc_category === 'sneakers' ? 'Numero :' : 'Talle :',
      textRigth: produc?.produc_size,
    },
  ];

  const moreInfo = [
    { textLeft: 'Edad :', textRigth: produc?.produc_age },
    { textLeft: 'Color :', textRigth: produc?.produc_color },
    { textLeft: 'Descuento :', textRigth: produc?.produc_discount },
    { textLeft: 'Genero :', textRigth: produc?.produc_gender },
    {
      textLeft: 'Estado :',
      textRigth: produc?.produc_state ? 'Disponible' : 'Vendido',
    },
    { textLeft: 'Unidades :', textRigth: produc?.produc_stock },
    {
      textLeft: 'Estilo :',
      textRigth: produc?.produc_style,
    },
    { textLeft: 'Marca :', textRigth: produc?.product_brand },
  ];
  return { mainInfo, moreInfo };
};
