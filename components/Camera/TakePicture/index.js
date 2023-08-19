import { Camera } from 'expo-camera';
import { Text, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { CircleButton } from '../../common/CircleButton';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading, setPhotoUri } from '../../../redux/slices';

export const TakePicture = ({ navigation }) => {
  // const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const dispatch = useDispatch();
  const cameraRef = useRef(null);
  const takePicture = async () => {
    if (cameraRef) {
      try {
        dispatch(startLoading());
        const data = await cameraRef.current.takePictureAsync();
        dispatch(setPhotoUri({ uri: data.uri }));
        navigation.navigate('Crear Producto');
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
      // type={type}
      // flashMode={flash}
      ref={cameraRef}
      className="h-[100vh] flex flex-col-reverse"
      pictureSize="1920x1080"
    >
      <View className="flex flex-row justify-around">
        <CircleButton icon="photo-camera" onPress={() => takePicture()} />
        <CircleButton
          icon="close"
          onPress={() => navigation.navigate('Crear Producto')}
        />
      </View>
    </Camera>
  );
};
