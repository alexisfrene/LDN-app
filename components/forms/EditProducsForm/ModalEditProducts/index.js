import { useState } from 'react';
import { Formik } from 'formik';
import { Dialog } from 'react-native-elements';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Button, ModalCategory, ModalSuccefull } from '../../../common';
import { generateProductsValues } from '../../../../utils';
import { useSubmit } from './useSubmit';
import { useForm } from './useForm';

export const ModalEditProducts = ({
  produc,
  openEdit,
  setOpenEdit,
  setOpenDetail,
}) => {
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { initialValues } = useForm();
  const producsValues = generateProductsValues(produc);

  return (
    <Dialog isVisible={openEdit} onBackdropPress={() => setOpenEdit(false)}>
      <Dialog.Title title="Editando producto" />
      <Formik
        initialValues={initialValues}
        onSubmit={useSubmit(produc?.id, setSuccefull, setDisable)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            {producsValues.map(({ name, value, key }, i) => {
              return (
                <View className="flex flex-row border-b" key={i}>
                  <Text className="w-24">{name}</Text>
                  {key === 'produc_category' ? (
                    <Pressable
                      onPress={() => setModalVisible(true)}
                      className="bg-amber-500 active:bg-amber-400 rounded-lg p-1 my-0.5"
                    >
                      <Text>Seleccionar</Text>
                    </Pressable>
                  ) : (
                    <TextInput
                      placeholder={value?.toString()}
                      className="font-normal"
                      value={values[key]}
                      onChangeText={handleChange(key)}
                    />
                  )}
                </View>
              );
            })}
            <View className="flex flex-row justify-evenly mt-3">
              <Button
                disable={disable}
                onPress={() => handleSubmit()}
                text="Guardar"
              />
              <Button
                disable={disable}
                onPress={() => {
                  setOpenEdit(false);
                  setOpenDetail(false);
                }}
                text="Cerrar"
              />
            </View>
            <ModalCategory
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              values={values}
            />
          </>
        )}
      </Formik>
      <ModalSuccefull
        isVisible={succefull}
        setSuccefull={setSuccefull}
        title="Valor del producto editado con exito!"
        menssage="Los valores fueron editados , puedes seguir editando !"
      />
    </Dialog>
  );
};
