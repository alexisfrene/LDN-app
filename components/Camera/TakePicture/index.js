import { Camera } from 'expo-camera';
import { Text, View, Button } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { CircleButton } from '../../CircleButton';

export const TakePicture = ({
  setOpenCamera,
  values,
  setImage,
  closeModal,
}) => {
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  const cameraRef = useRef(null);
  const takePicture = async (values) => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
        values.image_url = data.uri;
        setOpenCamera(false);
        closeModal(false);
      } catch (error) {
        console.log('ERROR CAMERA', error);
      }
    }
  };
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      type={type}
      flashMode={flash}
      ref={cameraRef}
      className="h-[80vh] flex flex-col-reverse"
      focusDepth={0.5}
      pictureSize="1280x720"
    >
      <View className="flex flex-row justify-center">
        <CircleButton icon="photo-camera" onPress={() => takePicture(values)} />
        <CircleButton icon="close" onPress={() => setOpenCamera(false)} />
      </View>
    </Camera>
  );
};
