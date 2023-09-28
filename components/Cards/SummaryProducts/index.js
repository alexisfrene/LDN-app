import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { supabase } from '../../../lib/supabse';
import { useIsFocused } from '@react-navigation/native';
import { formatNumberWithComma } from '../../../utils';

export const SummaryProducts = ({ dollayToDay }) => {
  const [products, setProducts] = useState('N/A');
  const [priceDollar, setPriceDollar] = useState('N/A');
  const [cantProducts, setCantProducts] = useState('N/A');
  const isFocused = useIsFocused();
  //Todo : esto hay que moverlo
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('ldn_producs')
        .select('*')
        .eq('produc_state', true);

      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        const totalPrice = data.reduce(
          (sum, product) => sum + product.produc_price,
          0,
        );
        const totalPriceDollar = totalPrice / dollayToDay;
        setCantProducts(data.length);
        setPriceDollar(totalPriceDollar.toFixed(2));
        setProducts(formatNumberWithComma(totalPrice));
      }
    };

    fetchProducts();
  }, [isFocused]);

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
        <Text className="font-extrabold text-green-500 ">{`USD ${priceDollar}`}</Text>
      </View>
    </View>
  );
};
