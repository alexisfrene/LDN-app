import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Button, ModalCategory, ModalSuccefull } from '../../commons';
import { useForm } from './useForm';
import { Formik } from 'formik';
import { useSubmit } from './useSubmit';

export const EditProducsForm = ({ produc, setOpenEdit, setHandle }) => {
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { initialValues } = useForm();
  const producsValues = [
    { name: 'Nombre :', value: produc.produc_name, key: 'produc_name' },
    { name: 'Edad :', value: produc.produc_age, key: 'produc_age' },
    { name: 'Marca :', value: produc.produc_brand, key: 'produc_brand' },
    {
      name: 'Categoria :',
      value: produc.produc_category,
      key: 'produc_category',
    },
    { name: 'Color :', value: produc.produc_color, key: 'produc_color' },
    {
      name: 'Descripcion :',
      value: produc.produc_description,
      key: 'produc_description',
    },
    {
      name: 'Descuento :',
      value: produc.produc_discount,
      key: 'produc_discount',
    },
    { name: 'Genero :', value: produc.produc_gender, key: 'produc_gender' },
    { name: 'Precio : :', value: produc.produc_price, key: 'produc_price' },
    {
      name: produc.produc_category === 'sneakers' ? 'Numero :' : 'Talle :',
      value: produc.produc_size,
      key: 'produc_size',
    },
    { name: 'Stock :', value: produc.produc_stock, key: 'produc_stock' },
    { name: 'Estilo :', value: produc.produc_style, key: 'produc_style' },
  ];

  return (
    <View>
      <Text className="font-bold text-lg">Editando producto</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={useSubmit(produc.id, setSuccefull, setDisable)}
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
                  setHandle(false);
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
    </View>
  );
};
