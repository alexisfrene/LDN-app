import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { Text, View, Modal, ScrollView } from 'react-native';
import { producsCategory } from '../../../mocks';
import { Button } from '../Button';

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
      <ScrollView>
        <View className="flex bg-amber-600 justify-center mt-28  mx-1 px-4 rounded-md">
          <View>
            <Text className="text-center text-lg font-semibold mt-1">
              Seleccione una categoria
            </Text>
            <View className="p-2 bg-amber-500 rounded-md ">
              {producsCategory.map((category, i) => {
                return (
                  <CheckBox
                    key={i}
                    title={category.title}
                    onPress={() => handlerCheckbox(category.type, values)}
                    value={category.type}
                    checked={checkedItems === category.type}
                    checkedColor="orange"
                    size={30}
                    containerStyle={{
                      backgroundColor: '#FAE8B8',
                    }}
                  />
                );
              })}
            </View>
            <View className="flex flex-row justify-evenly space-x-6 h-16 py-2">
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                text="Aceptar"
              />
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                text="Cancelar"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
