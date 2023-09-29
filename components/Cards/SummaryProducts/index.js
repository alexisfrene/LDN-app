import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { productOverview } from '../../../services';

export const SummaryProducts = ({ dollayToDay }) => {
  const [products, setProducts] = useState('N/A');
  const [priceDollar, setPriceDollar] = useState(null);
  const [cantProducts, setCantProducts] = useState('N/A');
  const isFocused = useIsFocused();
  const getDataProducs = async () => {
    const { cantProducts, priceInDollar, totalPricePeso } =
      await productOverview(dollayToDay);
    setCantProducts(cantProducts);
    setPriceDollar(priceInDollar);
    setProducts(totalPricePeso);
  };
  useEffect(() => {
    getDataProducs();
  }, [isFocused, dollayToDay]);

  return (
    <View className="bg-amber-300 px-3 py-2 rounded-2xl mt-3">
      <Text className="font-bold text-base text-blue-500 text-center">
        PRODUCTOS
      </Text>
      <View className="flex flex-row justify-between pt-2 border-b">
        <Text className="font-semibold"> Cantidad de productos cargados :</Text>
        <Text className="font-extrabold text-slate-900 ">{` ${cantProducts}`}</Text>
      </View>
      <View className="flex flex-row justify-between pt-2 border-b">
        <Text className="font-semibold">Valoracion total en pesos :</Text>
        <Text className="font-extrabold text-green-500 ">{`$ ${products}`}</Text>
      </View>
      <View className="flex flex-row justify-between pt-2 border-b">
        <Text className="font-semibold">Valoracion total en dolares :</Text>
        <Text className="font-extrabold text-green-500 ">{`USD ${
          priceDollar || '-'
        }`}</Text>
      </View>
    </View>
  );
};
