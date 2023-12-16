import { useState } from 'react';
import { View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, ModalSuccefull } from '../common';

export const DownloadsImages = () => {
  const [modalOpenDownloads, setModalOpenDownloads] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setModalOpenDownloads(true)}
        style={{
          position: 'absolute',
          bottom: 1,
          borderRadius: 999,
          backgroundColor: '#FFC107',
          padding: 16,
          margin: 16,
        }}
      >
        <MaterialIcons name="file-download" size={38} color="black" />
      </Pressable>
      <ModalSuccefull
        title="Descargar imagenes de productos"
        menssage="Se descargarán las imágenes de manera local, por lo que esta acción puede ocupar espacio en el dispositivo."
        isVisible={modalOpenDownloads}
        setSuccefull={setModalOpenDownloads}
      >
        <Button onPress={() => console.log('CLICK')} text="Descargar" />
        <Button onPress={() => setModalOpenDownloads(false)} text="Calcelar" />
      </ModalSuccefull>
    </View>
  );
};
