import * as ImagePicker from 'expo-image-picker';

interface Values {
  image_url: string;
}

export const pickImage = async (
  setImage: (image: string) => void,
  values: Values,
  closeModal: (flag: boolean) => void,
) => {
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
