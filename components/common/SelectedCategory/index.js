import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { CardCategory } from '../Card';
import { producsCategory } from '../../../mocks';
import { Dialog, Button } from 'react-native-elements';
export const SelectedCategory = ({ handlePress }) => {
  const [openModal, setOpenModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const handleCategory = (category) => {
    setCategorySelected(category);
    setOpenModal(true);
  };
  return (
    <ScrollView scrollEventThrottle={400}>
      <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
        <View style={{ padding: 4 }}>
          {producsCategory.map((category, index) => {
            return (
              <ImageIcons
                value={category.type}
                image={category.icon}
                onPress={() => handleCategory(category.type)}
                key={index}
                title={category.title}
              />
            );
          })}
        </View>
      </LinearGradient>
      <Dialog isVisible={openModal} onBackdropPress={() => setOpenModal(false)}>
        <Dialog.Title title="Filtrar : " />
        <View style={{ flexDirection: 'row', width: 150, marginVertical: 20 }}>
          <Text>Por talle/numero :</Text>
          <TextInput
            style={{
              width: 120,
              height: 20,
              padding: 1,
              backgroundColor: '#F4EAD7',
            }}
            placeholder="XXL.."
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            title="Filtrar"
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 130,
            }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => {
              handlePress({
                type: categorySelected,
                search: inputValue.toUpperCase(),
              });
            }}
          />
          <Button
            title="Buscar todo"
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 130,
            }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => {
              handlePress({
                type: categorySelected,
              });
            }}
          />
        </View>
      </Dialog>
    </ScrollView>
  );
};

export const ImageIcons = ({ value, title, image, onPress }) => {
  return (
    <CardCategory title={title} onPress={() => onPress(value)}>
      <Image source={image} style={{ height: 75, width: 75, marginLeft: 1 }} />
    </CardCategory>
  );
};
