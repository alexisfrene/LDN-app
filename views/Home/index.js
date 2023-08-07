import React from 'react';
import { View, Text, Pressable } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View className=" px-1">
      <View>
        <Text className="bg-slate-200 h-12 text-center pt-2 text-xl">
          Seleccióne una acción
        </Text>
        <Pressable
          className=" bg-cyan-300 active:bg-cyan-300/75 h-12 rounded-md flex justify-center"
          onPress={() => navigation.navigate('Crear Producto')}
        >
          <Text className="text-center text-lg font-semibold">
            Agregar nuevo producto
          </Text>
        </Pressable>
        <Pressable
          className=" bg-cyan-300 active:bg-cyan-300/75 h-12 rounded-md flex justify-center"
          onPress={() => navigation.navigate('Lista de productos')}
        >
          <Text className="text-center text-lg font-semibold">
            Ver todos los productos
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
