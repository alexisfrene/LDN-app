export const producsCategory = [
  { type: 't-shirts', title: 'Remeras' },
  { type: 'pants', title: 'Pantalones' },
  { type: 'sneakers', title: 'Zapatillas' },
  { type: 'sweatshirts', title: 'Buzos' },
  { type: 'accessories', title: 'Accesorios' },
  { type: 'toys', title: 'Juguetes' },
  { type: 'jackets', title: 'Camperas' },
  { type: 'cap', title: 'Gorras' },
  { type: 'boots', title: 'Borcegos' },
  { type: 'handbags', title: 'Bolsos' },
  { type: 'bags', title: 'Mochilas' },
  { type: 'bed sheets', title: 'Sabanas' },
  { type: 'socks', title: 'Medias' },
  { type: 'underwear', title: 'Ropa interior' },
  { type: 'leggings', title: 'Calzas' },
  { type: 'jeans', title: 'Jeans' },
  { type: 'sandals', title: 'Sandalias' },
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
  { name: 'brand', placeholder: 'Nike ...', title: 'Marca :' },
  { name: 'color', placeholder: 'Amarrillo con blanco...', title: 'Color :' },
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

export const productsSize = () => {
  let size_number = [];
  for (let i = 1; i <= 45; i++) {
    size_number.push(i);
  }

  return {
    number: size_number,
    letter: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  };
};

export const selectedOption = [
  { title: 'Genero :', options: ['Masculino', 'Femenino'], change: 'gender' },
  { title: 'Edad :', options: ['Niño', 'Adulto'], change: 'age' },
  {
    title: 'Estilo :',
    options: ['Deportivo', 'Urbano', 'Salida'],
    change: 'style',
  },
];
