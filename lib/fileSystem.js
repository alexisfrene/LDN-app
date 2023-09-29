import * as FileSystem from 'expo-file-system';

const guardarImagen = async (imagen, ruta) => {
  try {
    const { uri } = imagen;
    const fileUri = `${FileSystem.documentDirectory}${ruta}`;

    await FileSystem.copyAsync({
      from: uri,
      to: fileUri,
    });

    return fileUri;
  } catch (error) {
    console.error('Error al guardar la imagen:', error);
  }
};
