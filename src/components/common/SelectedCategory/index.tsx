import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dialog, Button } from '@rneui/themed';
import { producsCategory } from '../../../mocks';
import { CardCategory } from '../Card';

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
      <LinearGradient colors={['#fdfac7', '#fc930a']} style={styles.gradient}>
        <View style={styles.container}>
          {producsCategory.map((category, index) => (
            <ImageIcons
              value={category.type}
              image={category.icon}
              onPress={() => handleCategory(category.type)}
              key={index}
              title={category.title}
            />
          ))}
        </View>
      </LinearGradient>
      <Dialog isVisible={openModal} onBackdropPress={() => setOpenModal(false)}>
        <Dialog.Title title="Filtrar : " />
        <View style={styles.filterContainer}>
          <Text>Por talle/numero :</Text>
          <TextInput
            style={styles.input}
            placeholder="XXL.."
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Filtrar"
            buttonStyle={styles.filterButton}
            containerStyle={styles.buttonContainerStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() =>
              handlePress({
                type: categorySelected,
                search: inputValue.toUpperCase(),
              })
            }
          />
          <Button
            title="Buscar todo"
            buttonStyle={styles.filterButton}
            containerStyle={styles.buttonContainerStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() =>
              handlePress({
                type: categorySelected,
              })
            }
          />
        </View>
      </Dialog>
    </ScrollView>
  );
};

const ImageIcons = ({ value, title, image, onPress }) => {
  return (
    <CardCategory title={title} onPress={() => onPress(value)}>
      <Image source={image} style={styles.iconImage} />
    </CardCategory>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 4,
  },
  filterContainer: {
    flexDirection: 'row',
    width: 150,
    marginVertical: 20,
  },
  input: {
    width: 120,
    height: 20,
    padding: 1,
    backgroundColor: '#F4EAD7',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonContainerStyle: {
    width: 130,
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
  },
  iconImage: {
    height: 75,
    width: 75,
    marginLeft: 1,
  },
});
