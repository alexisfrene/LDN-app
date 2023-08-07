import { StyleSheet, Image } from 'react-native';

export function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    <Image
      source={imageSource}
      alt="Imagen grande"
      className="h-80 w-full overflow-hidden"
      resizeMode="cover"
    />
  );
}
