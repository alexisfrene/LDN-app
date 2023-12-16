import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { productOverview } from '../../../services';

interface SummaryProductsProps {
  dollayToDay: any;
}

export const SummaryProducts: React.FC<SummaryProductsProps> = ({
  dollayToDay,
}) => {
  const [products, setProducts] = useState('N/A');
  const [priceDollar, setPriceDollar] = useState<string | null>(null);
  const [cantProducts, setCantProducts] = useState<string | number>('N/A');
  const isFocused = useIsFocused();

  const getDataProducts = async () => {
    const { cantProducts, priceInDollar, totalPricePeso } =
      await productOverview(dollayToDay);
    setCantProducts(cantProducts);
    setPriceDollar(priceInDollar);
    setProducts(totalPricePeso);
  };

  useEffect(() => {
    getDataProducts();
  }, [isFocused, dollayToDay]);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PRODUCTOS</Text>
      <View style={styles.infoRow}>
        <Text style={styles.labelText}>Cantidad de productos cargados :</Text>
        <Text style={styles.valueText}>{cantProducts}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.labelText}>Valoracion total en pesos :</Text>
        <Text style={styles.valueText}>{`$ ${products}`}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.labelText}>Valoracion total en dolares :</Text>
        <Text style={styles.valueText}>{`USD ${priceDollar || '-'}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  labelText: {
    fontWeight: '600',
  },
  valueText: {
    fontWeight: '800',
    color: '#008000',
  },
});
