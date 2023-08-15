import { Camera } from 'expo-camera';
import { Text, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { CircleButton } from '../../common/CircleButton';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../../../redux/slices';

export const TakePicture = ({
  setOpenCamera,
  values,
  setImage,
  closeModal,
}) => {
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const dispatch = useDispatch();
  const cameraRef = useRef(null);
  const takePicture = async (values) => {
    if (cameraRef) {
      try {
        dispatch(startLoading());
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
        values.image_url = data.uri;
        setOpenCamera(false);
        closeModal(false);
        dispatch(stopLoading());
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
      className="h-[100vh] flex flex-col-reverse"
      pictureSize="1920x1080"
    >
      <View className="flex flex-row justify-center">
        <CircleButton icon="photo-camera" onPress={() => takePicture(values)} />
        <CircleButton icon="close" onPress={() => setOpenCamera(false)} />
      </View>
    </Camera>
  );
};
