import * as FileSystem from 'expo-file-system';

export const guardarImagen = async (
  imagen: { uri: string },
  ruta: string,
): Promise<string | null> => {
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
    return null;
  }
};
