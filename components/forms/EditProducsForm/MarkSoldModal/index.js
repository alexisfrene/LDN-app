import React from 'react';
import { Dialog } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, Pressable } from 'react-native';

export const MarkSoldModa = ({
  markSold,
  setMarkSold,
  produc,
  handleMarckSold,
}) => {
  return (
    <Dialog isVisible={markSold} onBackdropPress={() => setMarkSold(false)}>
      <Dialog.Title title="Marcar como vendido :" />
      <Text>{`Nombre : ${produc?.produc_name}`}</Text>
      <Text>{`Precio : $${produc?.produc_price}`}</Text>
      <View className="flex flex-row justify-evenly mt-3">
        <Pressable
          className="flex flex-row justify-evenly bg-green-500 rounded-xl p-1 active:bg-green-300"
          onPress={() => handleMarckSold(produc)}
        >
          <Text className="font-bold pr-1">Confirmar</Text>
          <MaterialIcons name="add-business" size={24} color="black" />
        </Pressable>
        <Pressable
          className="flex flex-row justify-evenly bg-red-500 rounded-xl p-1 active:bg-red-300"
          onPress={() => setMarkSold(false)}
        >
          <Text className="font-bold">Cancelar</Text>
          <MaterialIcons name="close" size={24} color="black" />
        </Pressable>
      </View>
    </Dialog>
  );
};
