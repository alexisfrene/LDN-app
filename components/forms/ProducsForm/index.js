import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import { object, string } from 'yup';
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
  Loading,
} from '../../../components';

let userSchema = object({
  name: string().required('El nombre es obligatorio!'),
});

export const ProducsForm = ({ navigation }) => {
  const [image, setImage] = useState();
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [modalCamera, setModalCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const idUser = useSelector((state) => state.login.infoUser.id);
  const loading = useSelector((state) => state.commons.loading);
  const photoUri = useSelector((state) => state.commons.photoUri);
  const { initialValues } = useForm();
  useEffect(() => {
    setImage(photoUri);
  }, [photoUri]);

  return (
    <LinearGradient
      colors={['#fdfac7', '#fc930a']}
      className="flex-1 px-2 justify-evenly"
    >
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
          onSubmit={useSubmit(
            idUser,
            setSuccefull,
            setDisable,
            setImage,
            image,
          )}
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
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                values={values}
                searchValue="category"
              />
            </View>
          )}
        </Formik>
      </ScrollView>
      <Loading isVisible={loading} />
    </LinearGradient>
  );
};
