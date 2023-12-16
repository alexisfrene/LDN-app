import React, { useState } from 'react';
import { Formik } from 'formik';
import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native';
import { Dialog } from '@rneui/themed';
import { useSubmit } from './useSubmit';
import { generateProductsValues } from '../../../../utils';
import { Button, ModalCategory, ModalSuccefull } from '../../../common';

interface ModalEditProductsProps {
  produc: any; // Debes especificar el tipo de tu producto según tu estructura
  openEdit: boolean;
  setOpenEdit: (open: boolean) => void;
  setOpenDetail: (open: boolean) => void;
  typeSearch: string | null;
  handlePress: (typeSearch: string | null) => void;
}

export const ModalEditProducts: React.FC<ModalEditProductsProps> = ({
  produc,
  openEdit,
  setOpenEdit,
  setOpenDetail,
  typeSearch,
  handlePress,
}) => {
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const producsValues = generateProductsValues(produc);

  const selectedCategory = (values: any) => {
    values.category = produc.produc_category;
    setModalVisible(true);
  };

  const initialValues: any = {
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
            {producsValues.map(({ name, value, key }, i) => (
              <View style={styles.rowContainer} key={i}>
                <Text style={styles.labelText}>{name}</Text>
                {key === 'produc_category' ? (
                  <Pressable
                    onPress={() => selectedCategory(values)}
                    style={styles.categoryButton}
                  >
                    <Text style={styles.buttonText}>Seleccionar</Text>
                  </Pressable>
                ) : (
                  <TextInput
                    placeholder={value?.toString()}
                    style={styles.inputField}
                    value={values[key]}
                    onChangeText={handleChange(key)}
                  />
                )}
              </View>
            ))}
            <View style={styles.buttonContainer}>
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
        isVisible={success}
        setSuccefull={setSuccess}
        title="Valor del producto editado con éxito!"
        menssage="Los valores fueron editados, ¡puedes seguir editando!"
      />
    </Dialog>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
  },
  labelText: {
    width: 100,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginVertical: 5,
    marginRight: 10,
    paddingLeft: 5,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#F59E0B',
    borderRadius: 5,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
});
