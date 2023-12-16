import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { CircleButton } from '../../common/CircleButton';
import { startLoading, stopLoading, setPhotoUri } from '../../../redux/slices';

export const TakePicture = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const dispatch = useDispatch();
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        dispatch(startLoading());
        const data = await cameraRef.current.takePictureAsync();
        dispatch(setPhotoUri({ uri: data.uri }));
        navigation.navigate('Crear Producto');
        dispatch(stopLoading());
      } catch (error) {
        console.error('ERROR CAMERA', error);
      }
    }
  };

  useEffect(() => {
    const requestPermissions = async () => {
      await MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    };

    requestPermissions();

    return () => {
      setHasCameraPermission(null);
    };
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera style={styles.camera} pictureSize="1920x1080" ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <CircleButton icon="photo-camera" onPress={takePicture} />
        <CircleButton
          icon="close"
          onPress={() => navigation.navigate('Crear Producto')}
        />
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
