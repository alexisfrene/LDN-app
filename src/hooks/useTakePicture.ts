import { Camera } from 'expo-camera';

interface Values {
  image_url: string;
}

export const useTakePicture = async (
  values: Values,
  cameraRef: React.RefObject<Camera>,
  setImage: (uri: string) => void,
) => {
  if (cameraRef.current) {
    try {
      const data = await cameraRef.current.takePictureAsync();
      setImage(data.uri);
      values.image_url = data.uri;
    } catch (error) {
      console.log('ERROR CAMERA', error);
    }
  }
};
