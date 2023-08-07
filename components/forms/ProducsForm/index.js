import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import { CheckBox } from '@rneui/themed';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useForm } from './useForm';
import { producsCategory } from '../../../mocks';
import { pickImage } from '../../../lib/imagePicker';
import { ImageViewer } from '../../commons';
import { useSubmit } from './useSubmit';
import { useSelector } from 'react-redux';
import { Dialog } from 'react-native-elements';

const imageDafult = require('../../../assets/not_image.png');

export const ProducsForm = () => {
  const [succefull, setSuccefull] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [checkedItems, setCheckedItems] = useState('other');
  const idUser = useSelector((state) => state.login.infoUser.id);
  const { initialValues } = useForm();
  const handlerCheckbox = (e, values) => {
    setCheckedItems(e);
    values.category = e;
  };
  const [image, setImage] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async (values) => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
        values.image_url = data.uri;
      } catch (error) {
        console.log('ERROR CAMERA', error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      {
        <>
          <Text>Agregar nuevo producto</Text>
          <View className="bg-amber-200 h-80">
            <ImageViewer
              placeholderImageSource={imageDafult}
              selectedImage={image}
            />
          </View>
          <Formik
            initialValues={initialValues}
            onSubmit={useSubmit(idUser, setSuccefull)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View className="bg-blue-100 h-full">
                {openCamera ? (
                  <View>
                    <Camera
                      type={type}
                      flashMode={flash}
                      ref={cameraRef}
                      className="h-screen"
                    >
                      <View>
                        <Button
                          title="Sacar foto"
                          onPress={() => takePicture(values)}
                        />
                        <Button
                          onPress={() => setOpenCamera(false)}
                          title="Cerrar Camera"
                        />
                      </View>
                    </Camera>
                  </View>
                ) : (
                  <>
                    <TextInput
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      className="bg-slate-200 my-1"
                      placeholder="Nombre del producto.."
                    />
                    <TextInput
                      onChangeText={handleChange('description')}
                      onBlur={handleBlur('description')}
                      value={values.description}
                      className="bg-slate-200 my-1"
                      placeholder="Descripcion..."
                    />
                    <TextInput
                      onChangeText={handleChange('price')}
                      onBlur={handleBlur('price')}
                      value={values.price}
                      className="bg-slate-200 my-1"
                      placeholder="Precio..."
                      keyboardType="numeric"
                    />
                    <TextInput
                      onChangeText={handleChange('color')}
                      onBlur={handleBlur('color')}
                      value={values.color}
                      className="bg-slate-200 my-1"
                      placeholder="Color.."
                    />

                    <TouchableOpacity
                      className="bg-blue-600 py-2 rounded-sm active:bg-blue-400"
                      onPress={() => setModalVisible(true)}
                    >
                      <Text className="text-center text-base font-semibold">
                        Seleccione una categoria
                      </Text>
                    </TouchableOpacity>

                    <Pressable
                      onPress={() => pickImage(setImage, values)}
                      className="bg-blue-600 py-2 rounded-sm active:bg-blue-400 mt-3"
                    >
                      <Text className="text-center text-base font-semibold">
                        Seleccione una imagen
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => setOpenCamera(true)}
                      className="bg-blue-600 py-2 rounded-sm active:bg-blue-400 my-3"
                    >
                      <Text className="text-center text-base font-semibold">
                        Saca una foto
                      </Text>
                    </Pressable>
                    <Dialog
                      isVisible={succefull}
                      onBackdropPress={() => setSuccefull(false)}
                    >
                      <Dialog.Title title="Producdo creado exitosamente" />
                      <Text>
                        Su producto a sido creado , puedes seguir creando mas
                      </Text>
                    </Dialog>

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
                                  onPress={() =>
                                    handlerCheckbox(category.type, values)
                                  }
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
                    <Button onPress={handleSubmit} title="Crear producto" />
                  </>
                )}
              </View>
            )}
          </Formik>
        </>
      }
    </View>
  );
};
