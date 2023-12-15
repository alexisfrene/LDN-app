import React, { useState } from 'react';
import { Text, View, Modal, ScrollView, StyleSheet } from 'react-native';
import { CheckBox, CheckBoxProps } from '@rneui/themed';
import { producsCategory } from '../../../mocks';
import { Button } from '../Button';

interface ModalCategoryProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  values: { category: string };
}

export const ModalCategory: React.FC<ModalCategoryProps> = ({
  modalVisible,
  setModalVisible,
  values,
}) => {
  const [checkedItems, setCheckedItems] = useState<string>(
    values.category || '',
  );

  const handlerCheckbox = (selectedCategory: string) => {
    setCheckedItems(selectedCategory);
    values.category = selectedCategory;
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <ScrollView style={{ height: 300 }}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Seleccione una categoría</Text>
          <View style={styles.checkBoxContainer}>
            {producsCategory.map((category, i) => (
              <CheckBox
                key={i}
                title={category.title}
                checked={checkedItems === category.type}
                checkedColor="orange"
                size={30}
                containerStyle={styles.checkBoxItem}
                textStyle={styles.checkBoxText}
                onPress={() => handlerCheckbox(category.type)}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setModalVisible(false)} text="Aceptar" />
            <Button onPress={() => setModalVisible(false)} text="Cancelar" />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  modalContent: {
    padding: 10,
    backgroundColor: '#FAE8B8',
    borderRadius: 8,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  checkBoxContainer: {
    marginTop: 10,
  },
  checkBoxItem: {
    backgroundColor: '#FAE8B8',
  },
  checkBoxText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 50,
    paddingTop: 10,
  },
});
