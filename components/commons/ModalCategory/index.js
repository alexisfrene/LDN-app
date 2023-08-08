import { Text, View, Pressable, Modal } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { producsCategory } from '../../../mocks';
import { useState } from 'react';

export const ModalCategory = ({ modalVisible, setModalVisible, values }) => {
  const [checkedItems, setCheckedItems] = useState('other');
  const handlerCheckbox = (e, values) => {
    setCheckedItems(e);
    values.category = e;
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex bg-white justify-center mt-28  mx-1 px-1">
        <View>
          <Text>Seleccione una categoria</Text>
          <View className="py-2">
            {producsCategory.map((category, i) => {
              return (
                <CheckBox
                  key={i}
                  title={category.title}
                  onPress={() => handlerCheckbox(category.type, values)}
                  value={category.type}
                  checked={checkedItems === category.type}
                />
              );
            })}
          </View>
          <View className="flex flex-row justify-center space-x-6 h-10 pb-1">
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="bg-blue-300 w-40"
            >
              <Text>Aceptar</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="bg-blue-300 w-40"
            >
              <Text>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
