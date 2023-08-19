import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { View, Image } from 'react-native';
import { CardCategory } from '../Card';
import { useEffect } from 'react';

const pantalones = require('../../../assets/pantalones.png');
const collar = require('../../../assets/collar.png');
const elipsis = require('../../../assets/elipsis.png');
const todo = require('../../../assets/todo.png');
const sudadera = require('../../../assets/sudadera.png');
const juguetes = require('../../../assets/juguetes.png');
const campera = require('../../../assets/campera.png');
const gorra = require('../../../assets/gorra.png');
const botas = require('../../../assets/botas.png');
const bolso = require('../../../assets/bolso.png');
const mochila = require('../../../assets/mochila.png');
const sabanas = require('../../../assets/sabanas.png');
const calcetines = require('../../../assets/calcetines.png');
const boxers = require('../../../assets/boxers.png');
const calzas = require('../../../assets/calzas.png');
const jeans = require('../../../assets/jeans.png');

export const SelectedCategory = ({ handlePress }) => {
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
      <View className="p-2">
        <CardCategory title="Ver todos" onPress={() => handlePress('all')}>
          <Image source={todo} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory
          title="Zapatillas"
          onPress={() => handlePress('sneakers')}
        >
          <MaterialCommunityIcons name="shoe-sneaker" size={64} color="black" />
        </CardCategory>
        <CardCategory title="Borcegos" onPress={() => handlePress('boots')}>
          <Image source={botas} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Remeras" onPress={() => handlePress('t-shirts')}>
          <Ionicons name="shirt" size={64} color="black" />
        </CardCategory>
        <CardCategory title="Pantalones" onPress={() => handlePress('pants')}>
          <Image source={pantalones} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Jeans" onPress={() => handlePress('jeans')}>
          <Image source={jeans} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Buzos" onPress={() => handlePress('sweatshirts')}>
          <Image source={sudadera} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Camperas" onPress={() => handlePress('jackets')}>
          <Image source={campera} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Gorras" onPress={() => handlePress('cap')}>
          <Image source={gorra} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Bolsos" onPress={() => handlePress('handbags')}>
          <Image source={bolso} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Mochilas" onPress={() => handlePress('bags')}>
          <Image source={mochila} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Medias" onPress={() => handlePress('socks')}>
          <Image source={calcetines} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory
          title="Ropa interior"
          onPress={() => handlePress('underwear')}
        >
          <Image source={boxers} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Calzas" onPress={() => handlePress('leggings')}>
          <Image source={calzas} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory
          title="Accesorios"
          onPress={() => handlePress('accessories')}
        >
          <Image source={collar} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Juguetes" onPress={() => handlePress('toys')}>
          <Image source={juguetes} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Sabanas" onPress={() => handlePress('bed sheets')}>
          <Image source={sabanas} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Otros" onPress={() => handlePress('other')}>
          <Image source={elipsis} className="h-16 w-16 ml-1" />
        </CardCategory>
      </View>
    </LinearGradient>
  );
};
