import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getDataFormatDMA } from '../../../utils';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { supabase } from '../../../lib/supabse';
//const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
const data = [
  {
    name: 'Ingresos',
    value: 10000,
    color: '#2ECC71',
  },
  {
    name: 'Salidas',
    value: 600,
    color: '#E74C3C',
  },
];

export const SummaryCard = () => {
  const { month, year } = getDataFormatDMA();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('ldn_producs')
        .select('*')
        .eq('produc_state', false);

      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        const totalPrice = data.reduce(
          (sum, product) => sum + product.produc_price,
          0,
        );

        setProducts(totalPrice);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View className="bg-amber-300 px-3 py-2 rounded-2xl mt-3">
      <Text className="font-bold text-base text-blue-500 text-center">
        RESUMEN
      </Text>
      <View>
        <Text className="font-bold">{`${month} - ${year}`}</Text>
        <View className="flex flex-row">
          <PieChart
            data={data}
            width={120}
            height={120}
            chartConfig={chartConfig}
            accessor={'value'}
            backgroundColor={'transparent'}
            center={[20, 0]}
            hasLegend={false}
          />
          <View className="w-56">
            <View className="flex flex-row justify-between pt-2 border-b">
              <Text className="font-semibold"> Ingresos :</Text>
              <Text className="font-extrabold text-green-500 ">{`$ ${
                products || 0
              }`}</Text>
            </View>
            <View className="flex flex-row justify-between pt-2 border-b">
              <Text className="font-semibold"> Gastos :</Text>
              <Text className="font-extrabold text-red-500 ">{`$ ${0}`}</Text>
            </View>
            <View className="flex flex-row justify-between pt-2 border-b">
              <Text className="font-semibold"> Toltal :</Text>
              <Text className="font-extrabold text-slate-900 ">{`$ ${
                products - 0
              }`}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
