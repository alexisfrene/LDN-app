import React from 'react';
import { Dialog } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export const MarkSoldModal = ({
  markSold,
  setMarkSold,
  produc,
  handleMarkSold,
}) => {
  return (
    <Dialog isVisible={markSold} onBackdropPress={() => setMarkSold(false)}>
      <Dialog.Title title="Marcar como vendido :" />
      <Text>{`Nombre : ${produc?.produc_name}`}</Text>
      <Text>{`Precio : $${produc?.produc_price}`}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.confirmButton}
          onPress={() => handleMarkSold(produc)}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
          <MaterialIcons name="add-business" size={24} color="black" />
        </Pressable>
        <Pressable
          style={styles.cancelButton}
          onPress={() => setMarkSold(false)}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
          <MaterialIcons name="close" size={24} color="black" />
        </Pressable>
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  confirmButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 8,
    width: 120,
  },
  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5C5C',
    borderRadius: 8,
    padding: 8,
    width: 120,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 5,
  },
});
