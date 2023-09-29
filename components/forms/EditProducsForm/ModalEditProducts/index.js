import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Dialog } from 'react-native-elements';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useSubmit } from './useSubmit';
import { generateProductsValues } from '../../../../utils';
import { Button, ModalCategory, ModalSuccefull } from '../../../common';

export const ModalEditProducts = ({
  produc,
  openEdit,
  setOpenEdit,
  setOpenDetail,
  typeSearch,
  handlePress,
}) => {
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const producsValues = generateProductsValues(produc);
  const selectedCategory = (values) => {
    values.category = produc.produc_category;
    setModalVisible(true);
  };
  //Todo : esto se podria mejorar
  const initialValues = {
    produc_gender: null,
    produc_age: null,
    produc_style: null,
    produc_brand: null,
    produc_size: null,
    produc_name: null,
    produc_description: null,
    produc_price: null,
    produc_color: null,
    category: null,
  };
  const closeAll = () => {
    setOpenEdit(false);
    setOpenDetail(false);
  };
  return (
    <Dialog isVisible={openEdit} onBackdropPress={() => setOpenEdit(false)}>
      <Dialog.Title title="Editando producto" />
      <Formik
        initialValues={initialValues}
        onSubmit={useSubmit(produc?.id, closeAll, setDisable, () =>
          handlePress(typeSearch),
        )}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            {producsValues.map(({ name, value, key }, i) => {
              return (
                <View className="flex flex-row border-b" key={i}>
                  <Text className="w-24">{name}</Text>
                  {key === 'produc_category' ? (
                    <Pressable
                      onPress={() => selectedCategory(values)}
                      className="bg-amber-500 active:bg-amber-400 rounded-lg p-1 my-0.5 flex-1"
                    >
                      <Text className="text-center font-bold">Seleccionar</Text>
                    </Pressable>
                  ) : (
                    <TextInput
                      placeholder={value?.toString()}
                      className="flex-1 font-normal text-center bg-slate-200 rounded-lg my-0.5"
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
              <Button disable={disable} onPress={closeAll} text="Cerrar" />
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
