import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { getDataFormatDMA } from '../../utils';
import { Title } from '../../components';
import { getDollar } from '../../services';
import { setDollarToDay } from '../../redux/slices';

export const HomeScreen = ({ navigation }) => {
  const [dollar, setDollar] = useState();
  const dispatch = useDispatch();
  const { dayOfWeek, dayOfMonth, month, year } = getDataFormatDMA();
  const priceDollar = async () => {
    const dollarToDay = await getDollar();
    dispatch(setDollarToDay(dollarToDay));
    setDollar(dollarToDay);
  };

  useEffect(() => {
    priceDollar();
  }, []);
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1 px-2">
      <Title text="Informacion :" />
      <View className="bg-amber-300 px-3 py-2 rounded-2xl">
        <Text className="font-bold text-base text-blue-500 text-center">
          {` DOLAR BLUE HOY : ${dayOfWeek} ${dayOfMonth} de ${month} - ${year}`}
        </Text>
        <View className="flex flex-row justify-between pt-2 border-b">
          <Text className="font-semibold"> Compra :</Text>
          <Text className="font-extrabold text-green-500 ">{`$ ${dollar?.compra}`}</Text>
        </View>
        <View className="flex flex-row justify-between pt-2 border-b">
          <Text className="font-semibold"> Venta :</Text>
          <Text className="font-extrabold text-red-500 ">{`$ ${dollar?.venta}`}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
