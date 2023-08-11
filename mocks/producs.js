export const producsCategory = [
  { type: 't-shirts', title: 'Remeras' },
  { type: 'pants', title: 'Pantalones' },
  { type: 'sneakers', title: 'Zapatillas' },
  { type: 'accessories', title: 'Accesorios' },
  { type: 'other', title: 'Otros' },
];
export const inputProducs = [
  {
    name: 'name',
    placeholder: 'Zapatilla Deportiva Nike..',
    title: 'Nombre del producto :',
  },
  {
    name: 'price',
    placeholder: '$ 7000',
    title: 'Precio :',
    type: 'numeric',
  },
  { name: 'size', placeholder: 'XL ...', title: 'Numero / Talle :' },
  { name: 'brand', placeholder: 'Nike ...', title: 'Marca :' },
  { name: 'color', placeholder: 'Amarrillo con blanco...', title: 'Color :' },
  { name: 'style', placeholder: 'Deportivas ...', title: 'Estilo :' },
  { name: 'age', placeholder: 'Adulto / Niño ...', title: 'Edades :' },
  { name: 'gender', placeholder: 'Masculino/Femenino ...', title: 'Genero :' },
  {
    name: 'description',
    placeholder: 'Zapatilla modelo ancho...',
    title: 'Descripcion :',
  },
];
export const newProduc = {
  user: 'id del usuario',
  produc_name: 'Nombre del producto OBLIGATORIO',
  produc_brand: 'marca del producto typarlo',
  produc_style: 'estilo Depo , formal etc',
  produc_size: 'talla , typarlo',
  produc_description: 'des',
  produc_price: 999,
  produc_color: 'colores',
  produc_category: 'categorias (fotos)',
  produc_image_url: 'image',
  produc_age: '',
  produc_gender: 'genero',
  produc_state: true,
  produc_stock: 10,
  produc_discount: 'asds',
};
