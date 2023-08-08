import { Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable, ScrollView, Text } from 'react-native';
import { useForm } from './useForm';
import { useSubmit } from './useSubmit';
import { GenerateInputs } from './GenerateInputs';
import { pickImage } from '../../../lib/imagePicker';
import { inputProducs } from '../../../mocks';
import {
  ImageViewer,
  ModalCategory,
  ModalSuccefull,
  Title,
  Button as ButtonLDN,
  TakePicture,
} from '../../../components';

import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  name: string().required('El nombre es obligatorio!'),
});

export const ProducsForm = () => {
  const [image, setImage] = useState();
  const [succefull, setSuccefull] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [modalCamera, setModalCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const idUser = useSelector((state) => state.login.infoUser.id);
  const { initialValues } = useForm();

  return (
    <LinearGradient
      colors={['#fdfac7', '#fc930a']}
      className="flex-1 px-2 justify-evenly"
    >
      <Title text="Agregar nuevo producto" />
      <ScrollView>
        {!openCamera && (
          <Pressable
            onPress={() => {
              setModalCamera(true);
            }}
          >
            <ImageViewer selectedImage={image} />
          </Pressable>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={useSubmit(idUser, setSuccefull)}
          validationSchema={userSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {openCamera ? (
                <TakePicture
                  setOpenCamera={setOpenCamera}
                  closeModal={setModalCamera}
                  values={values}
                  setImage={setImage}
                />
              ) : (
                <>
                  {inputProducs.map((input, index) => (
                    <GenerateInputs
                      key={index}
                      title={input.title}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      name={input.name}
                      className="my-1"
                      placeholder={input.placeholder}
                      type={input?.type || 'default'}
                    />
                  ))}
                  <ButtonLDN
                    onPress={() => setModalVisible(true)}
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
                  <ButtonLDN onPress={handleSubmit} text="Crear producto" />

                  <ModalSuccefull
                    isVisible={modalCamera}
                    setSuccefull={setModalCamera}
                    title="Seleccione un accion"
                    menssage="Sacar una foto o seleccionar desde la galeria"
                  >
                    <ButtonLDN
                      onPress={() =>
                        pickImage(setImage, values, setModalCamera)
                      }
                      text="Seleccionar una imagen"
                    />
                    <ButtonLDN
                      onPress={() => setOpenCamera(true)}
                      text="Sacar una foto"
                    />
                  </ModalSuccefull>
                  <ModalCategory
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    values={values}
                  />
                </>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </LinearGradient>
  );
};
