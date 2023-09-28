const pantalones = require('../assets/icons/pantalones.png');
const collar = require('../assets/icons/collar.png');
const elipsis = require('../assets/icons/elipsis.png');
const todo = require('../assets/icons/todo.png');
const sudadera = require('../assets/icons/sudadera.png');
const juguetes = require('../assets/icons/juguetes.png');
const campera = require('../assets/icons/campera.png');
const gorra = require('../assets/icons/gorra.png');
const botas = require('../assets/icons/botas.png');
const bolso = require('../assets/icons/bolso.png');
const mochila = require('../assets/icons/mochila.png');
const sabanas = require('../assets/icons/sabanas.png');
const calcetines = require('../assets/icons/calcetines.png');
const boxers = require('../assets/icons/boxers.png');
const calzas = require('../assets/icons/calzas.png');
const jeans = require('../assets/icons/jeans.png');
const sandalias = require('../assets/icons/sandalias.png');
const remera = require('../assets/icons/remera.png');
const zapatilla = require('../assets/icons/zapatilla.png');

export const producsCategory = [
  { type: 't-shirts', title: 'Remeras', icon: remera },
  { type: 'pants', title: 'Pantalones', icon: pantalones },
  { type: 'sneakers', title: 'Zapatillas', icon: zapatilla },
  { type: 'sweatshirts', title: 'Buzos', icon: sudadera },
  { type: 'accessories', title: 'Accesorios', icon: collar },
  { type: 'toys', title: 'Juguetes', icon: juguetes },
  { type: 'jackets', title: 'Camperas', icon: campera },
  { type: 'cap', title: 'Gorras', icon: gorra },
  { type: 'boots', title: 'Borcegos', icon: botas },
  { type: 'handbags', title: 'Bolsos', icon: bolso },
  { type: 'bags', title: 'Mochilas', icon: mochila },
  { type: 'bed sheets', title: 'Sabanas', icon: sabanas },
  { type: 'socks', title: 'Medias', icon: calcetines },
  { type: 'underwear', title: 'Ropa interior', icon: boxers },
  { type: 'leggings', title: 'Calzas', icon: calzas },
  { type: 'jeans', title: 'Jeans', icon: jeans },
  { type: 'sandals', title: 'Sandalias', icon: sandalias },
  { type: 'other', title: 'Otros', icon: elipsis },
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
  for (let i = 1; i <= 60; i++) {
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
