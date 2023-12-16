import React, { useState } from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';
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
      <Dialog.Title title="Selecciona uno:" />
      <View style={styles.sizeOptionsContainer}>
        <Pressable
          style={{
            ...styles.sizeOption,
            backgroundColor: size === 'letter' ? '#F59E0B' : '#FCD34D',
          }}
          onPress={() => setSize('letter')}
        >
          <Text style={styles.optionText}>Talles</Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.sizeOption,
            backgroundColor: size === 'number' ? '#F59E0B' : '#FCD34D',
          }}
          onPress={() => setSize('number')}
        >
          <Text style={styles.optionText}>Numeros</Text>
        </Pressable>
      </View>

      <ScrollView style={{ height: 300 }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data[size].map((item, i) => (
            <Pressable
              key={i}
              style={{
                ...styles.sizeButton,
                backgroundColor: sizeSelected === item ? 'gray' : 'lightgray',
              }}
              onPress={() => handlePress(item)}
            >
              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            values.size = sizeSelected;
            resetSize();
          }}
          text="Guardar"
        />
        <Button onPress={resetSize} text="Cerrar" />
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  sizeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFD54F',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sizeOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sizeButton: {
    margin: 2,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
  },
});
