import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { View, Image } from 'react-native';
import { CardCategory } from '../../../components';

const pantalones = require('../../../assets/pantalones.png');
const collar = require('../../../assets/collar.png');
const elipsis = require('../../../assets/elipsis.png');
const todo = require('../../../assets/todo.png');

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
        <CardCategory title="Remeras" onPress={() => handlePress('t-shirts')}>
          <Ionicons name="shirt" size={64} color="black" />
        </CardCategory>
        <CardCategory title="Pantalones" onPress={() => handlePress('pants')}>
          <Image source={pantalones} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory
          title="Accesorios"
          onPress={() => handlePress('accessories')}
        >
          <Image source={collar} className="h-16 w-16 ml-1" />
        </CardCategory>
        <CardCategory title="Otros" onPress={() => handlePress('other')}>
          <Image source={elipsis} className="h-16 w-16 ml-1" />
        </CardCategory>
      </View>
    </LinearGradient>
  );
};
