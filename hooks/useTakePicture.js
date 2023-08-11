const useTakePicture = async (values) => {
  if (cameraRef) {
    try {
      const data = await cameraRef.current.takePictureAsync();
      setImage(data.uri);
      values.image_url = data.uri;
    } catch (error) {
      console.log('ERROR CAMERA', error);
    }
  }
};
