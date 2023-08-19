import { Image } from 'react-native';
const imageDafult = require('../../../assets/not_image.png');

export function ImageViewer({ selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : imageDafult;
  return (
    <Image
      source={imageSource}
      alt="ldn-image"
      className="h-80 w-full overflow-hidden rounded-xl"
      resizeMode="cover"
    />
  );
}
