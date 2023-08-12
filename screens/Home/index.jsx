import { LinearGradient } from 'expo-linear-gradient';
import { Button, Title } from '../../components';

export const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1 px-2">
      <Title text="Seleccióne una acción" />
      <Button
        text="Agregar nuevo producto"
        onPress={() => navigation.navigate('Crear Producto')}
      />
      <Button
        text="Ver todos los productos"
        onPress={() => navigation.navigate('Lista de productos')}
      />
    </LinearGradient>
  );
};
