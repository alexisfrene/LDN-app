import { View, Text } from 'react-native';
import { getDataFormatDMA } from '../../../utils';

export const DollarCard = ({ dollar }) => {
  const { dayOfWeek, dayOfMonth, month, year } = getDataFormatDMA();

  return (
    <View className="bg-amber-300 px-3 py-2 rounded-2xl">
      <Text className="font-bold text-base text-blue-500 text-center">
        {` DOLAR BLUE HOY : ${dayOfWeek} ${dayOfMonth} de ${month} - ${year}`}
      </Text>
      <View className="flex flex-row justify-between pt-2 border-b">
        <Text className="font-semibold"> Compra :</Text>
        <Text className="font-extrabold text-green-500 ">{`$ ${
          dollar?.compra || '-'
        }`}</Text>
      </View>
      <View className="flex flex-row justify-between pt-2 border-b">
        <Text className="font-semibold"> Venta :</Text>
        <Text className="font-extrabold text-red-500 ">{`$ ${
          dollar?.venta || '-'
        }`}</Text>
      </View>
    </View>
  );
};
