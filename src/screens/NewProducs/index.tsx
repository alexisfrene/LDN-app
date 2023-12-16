import React, { useState, useEffect } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { LoginState } from '@/types';
import { inputProducs, selectedOption } from '@/mocks';
import { pickImage } from '@/lib';
import { GenerateInputs } from './GenerateInputs';
import { useForm } from './useForm';
import { useSubmit } from './useSubmit';
import {
  Loading,
  ModalCategory,
  ModalSize,
  ModalSuccefull,
  SelectedOption,
  Button as ButtonLDN,
  ImageViewer,
  LinerGradientConteiner,
  Title,
} from '@/components';

interface ProducsFormProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}
interface ReduxProps {
  login: LoginState;
}

export const NewProducsScreen: React.FC<ProducsFormProps> = ({
  navigation,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [disable, setDisable] = useState(false);
  const [succefull, setSuccefull] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [modalCamera, setModalCamera] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const idUser = useSelector((state: ReduxProps) => state.login.infoUser.id);
  const { loading, photoUri, dollar } = useSelector(
    (state: any) => state.commons,
  );
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
              {selectedOption.map(({ title, options, change }, index) => (
                <SelectedOption
                  title={title}
                  options={options}
                  values={values}
                  change={change}
                  key={index}
                />
              ))}
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
                menssage="Su producto a sido creado, puedes seguir creando mas"
              />
              <ButtonLDN
                onPress={handleSubmit}
                text="Crear producto"
                disable={disable || !!errors.name}
              />
              <ModalSuccefull
                isVisible={modalCamera}
                setSuccefull={setModalCamera}
                title="Seleccione un accion"
              >
                <ButtonLDN
                  onPress={() => pickImage(setImage, values, setModalCamera)}
                  text="Subir imagen"
                  icon="image"
                />
                <ButtonLDN
                  onPress={() => navigation.navigate('Camara')}
                  text="Sacar una foto"
                  icon="camera"
                />
              </ModalSuccefull>
              <ModalCategory
                modalVisible={categoryModal}
                setModalVisible={setCategoryModal}
                values={values}
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
