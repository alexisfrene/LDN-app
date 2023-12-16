import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDataFormatDMA } from '../../../utils';

interface DollarCardProps {
  dollar: {
    compra: string;
    venta: string;
  };
}

export const DollarCard: React.FC<DollarCardProps> = ({ dollar }) => {
  const { dayOfWeek, dayOfMonth, month, year } = getDataFormatDMA();

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headerText}>
        {` DOLAR BLUE HOY : ${dayOfWeek} ${dayOfMonth} de ${month} - ${year}`}
      </Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Compra :</Text>
        <Text style={styles.infoSell}>{`$${dollar.compra || '-'}`}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Venta :</Text>
        <Text style={styles.infoValue}>{`$${dollar.venta || '-'}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 20,
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
  infoText: {
    fontWeight: '600',
  },
  infoValue: {
    fontWeight: '800',
    color: '#FF0000',
  },
  infoSell: {
    fontWeight: '800',
    color: '#008000',
  },
});
