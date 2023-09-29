import React, { useState } from 'react';
import { ScrollView, Pressable, View, Text } from 'react-native';
import { Dialog } from '@rneui/themed';
import { productsSize } from '../../../mocks';
import { Button } from '../Button';

export const ModalSize = ({ sizeModal, setSizeModal, values }) => {
  const data = productsSize();
  const [sizeSelected, setSizeSelected] = useState(null);
  const [size, setSize] = useState('letter');
  const handlePress = (value) => {
    setSizeSelected(value);
  };
  const resetSize = () => {
    setSizeSelected(null);
    setSizeModal(false);
  };
  return (
    <Dialog onBackdropPress={resetSize} isVisible={sizeModal}>
      <Dialog.Title title="Selecciones uno :" />
      <View className="flex flex-row flex-wrap justify-around bg-amber-300 border-2">
        <Pressable
          style={{
            flex: 1,
            backgroundColor:
              size === 'letter' ? 'rgb(245 158 11)' : 'rgb(252 211 77)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setSize('letter')}
        >
          <Text className="font-bold">Talles</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            backgroundColor:
              size === 'number' ? 'rgb(245 158 11)' : 'rgb(252 211 77)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setSize('number')}
        >
          <Text className="font-bold">Numeros</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View className="flex flex-row flex-wrap justify-center h-[420]">
          {data[size].map((item, i) => (
            <Pressable
              key={i}
              style={{
                backgroundColor: sizeSelected === item ? 'gray' : 'lightgray',
                margin: 2,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handlePress(item)}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{ marginTop: 100 }}>
          <Button
            onPress={() => {
              values.size = sizeSelected;
              resetSize();
            }}
            text="Guardar"
          />
          <Button onPress={() => resetSize()} text="Cerrar" />
        </View>
      </ScrollView>
    </Dialog>
  );
};
