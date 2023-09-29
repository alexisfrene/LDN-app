import { Formik } from 'formik';
import { object, string } from 'yup';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable, ScrollView, Text } from 'react-native';
import { useForm } from './useForm';
import { useSubmit } from './useSubmit';
import { GenerateInputs } from './GenerateInputs';
import { pickImage } from '../../../lib/imagePicker';
import { inputProducs, selectedOption } from '../../../mocks';
import {
  ImageViewer,
  ModalCategory,
  ModalSuccefull,
  Title,
  Button as ButtonLDN,
  Loading,
  ModalSize,
  SelectedOption,
  LinerGradientConteiner,
} from '../../common';

let userSchema = object({
  name: string().required('El nombre es obligatorio!'),
});

export const ProducsForm = ({ navigation }) => {
  const [image, setImage] = useState();
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [modalCamera, setModalCamera] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const idUser = useSelector((state) => state.login.infoUser.id);
  const { loading, photoUri, dollar } = useSelector((state) => state.commons);
  const { initialValues } = useForm(dollar);
  const resetState = () => {
    setSuccefull(true);
    setImage(null);
  };

  useEffect(() => {
    setImage(photoUri);
  }, [photoUri]);

  return (
    <LinerGradientConteiner>
      <Title text="Agregar nuevo producto" />
      <ScrollView>
        <Pressable
          onPress={() => {
            setModalCamera(!modalCamera);
          }}
        >
          <ImageViewer selectedImage={image} />
        </Pressable>
        <Formik
          initialValues={initialValues}
          onSubmit={useSubmit(idUser, setDisable, resetState, image)}
          validationSchema={userSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              {inputProducs.map((input, index) => (
                <GenerateInputs
                  key={index}
                  title={input.title}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  name={input.name}
                  placeholder={input.placeholder}
                  type={input?.type || 'default'}
                />
              ))}
              {selectedOption.map(({ title, options, change }, index) => {
                return (
                  <SelectedOption
                    title={title}
                    options={options}
                    values={values}
                    change={change}
                    key={index}
                  />
                );
              })}
              <ButtonLDN
                onPress={() => setSizeModal(true)}
                text="Seleccione el talle/numero"
              />
              <ButtonLDN
                onPress={() => setCategoryModal(true)}
                text="Seleccione una categoria"
              />
              <ModalSuccefull
                isVisible={succefull}
                setSuccefull={setSuccefull}
                title="Producdo creado exitosamente"
                menssage="Su producto a sido creado , puedes seguir creando mas"
              />
              {errors.name ? (
                <Text className="text-center bg-white text-red-700 font-extrabold rounded-xl mb-1">
                  {errors.name}
                </Text>
              ) : null}
              <ButtonLDN
                onPress={handleSubmit}
                text="Crear producto"
                disable={disable || !!errors.name}
              />

              <ModalSuccefull
                isVisible={modalCamera}
                setSuccefull={setModalCamera}
                title="Seleccione un accion"
                menssage="Subir / Sacar una foto"
              >
                <ButtonLDN
                  onPress={() => pickImage(setImage, values, setModalCamera)}
                  text="Seleccionar una imagen"
                />
                <ButtonLDN
                  onPress={() => navigation.navigate('Camara')}
                  text="Sacar una foto"
                />
              </ModalSuccefull>
              <ModalCategory
                modalVisible={categoryModal}
                setModalVisible={setCategoryModal}
                values={values}
                searchValue="category"
              />
              <ModalSize
                sizeModal={sizeModal}
                setSizeModal={setSizeModal}
                values={values}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
      <Loading isVisible={loading} />
    </LinerGradientConteiner>
  );
};
