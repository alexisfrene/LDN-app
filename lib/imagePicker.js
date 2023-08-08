import * as ImagePicker from 'expo-image-picker';

export const pickImage = async (setImage, values, closeModal) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.canceled) {
    setImage(result.assets[0].uri);
    values.image_url = result.assets[0].uri;
    closeModal(false);
  }
};
