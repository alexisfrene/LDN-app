import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { supabase } from '../../../lib/supabse';
import { useIsFocused } from '@react-navigation/native';

export const SummaryProducts = () => {
  const [products, setProducts] = useState('N/A');
  const [priceDollar, setPriceDollar] = useState('N/A');
  const [cantProducts, setCantProducts] = useState('N/A');
  const isFocused = useIsFocused();
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
        const totalPriceDollar = data.reduce(
          (sum, product) =>
            sum + product.produc_price / product.produc_dollar_today,
          0,
        );
        setCantProducts(data.length);
        setPriceDollar(totalPriceDollar.toFixed(2));
        setProducts(totalPrice);
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
