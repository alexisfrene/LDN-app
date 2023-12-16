export const formatUrl = (image_url, category) => {
  if (!!image_url) {
    const fileExt = image_url.split('.').pop();
    const fileName = image_url.replace(/^.*[\\\/]/, '');
    const filePath = `${category}/${Date.now()}`;
    const formData = new FormData();
    const photo = {
      uri: image_url,
      name: fileName,
    };
    formData.append('file', photo.uri, photo.name);
    formData.append('public_id', filePath);
    formData.append('api_key', process.env.EXPO_PUBLIC_CLOUDINARY_API_KEY);
    formData.append(
      'upload_preset',
      process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    );

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

export const generateProductsValues = (produc) => {
  return [
    { name: 'Nombre :', value: produc?.produc_name, key: 'produc_name' },
    { name: 'Edad :', value: produc?.produc_age, key: 'produc_age' },
    { name: 'Marca :', value: produc?.produc_brand, key: 'produc_brand' },
    {
      name: 'Categoria :',
      value: produc?.produc_category,
      key: 'produc_category',
    },
    { name: 'Color :', value: produc?.produc_color, key: 'produc_color' },
    {
      name: 'Descripcion :',
      value: produc?.produc_description,
      key: 'produc_description',
    },
    {
      name: 'Descuento :',
      value: produc?.produc_discount,
      key: 'produc_discount',
    },
    { name: 'Genero :', value: produc?.produc_gender, key: 'produc_gender' },
    { name: 'Precio :', value: produc?.produc_price, key: 'produc_price' },
    {
      name: produc?.produc_category === 'sneakers' ? 'Numero :' : 'Talle :',
      value: produc?.produc_size,
      key: 'produc_size',
    },
    { name: 'Stock :', value: produc?.produc_stock, key: 'produc_stock' },
    { name: 'Estilo :', value: produc?.produc_style, key: 'produc_style' },
  ];
};

const daysOfWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const currentDate = new Date();

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

export const getDataFormatDMA = () => {
  return { dayOfWeek, dayOfMonth, month, year };
};

export const formatNumberWithComma = (num) => {
  const parts = num.toString().split('.');
  const wholePart = parts[0];
  const decimalPart = parts[1] || '';

  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return formattedWholePart + (decimalPart ? `.${decimalPart}` : '');
};
