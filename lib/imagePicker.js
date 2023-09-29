import * as ImagePicker from 'expo-image-picker';

export const pickImage = async (setImage, values, closeModal) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 0.12,
  });
  if (!result.canceled) {
    setImage(result.assets[0].uri);
    values.image_url = result.assets[0].uri;
    closeModal(false);
  }
};
