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

const ggg = {
  _persist: { rehydrated: true, version: -1 },
  commons: { isLogged: false, isLoggedIn: false, loading: false },
  config: { params: [] },
  home: { home: [] },
  login: {
    infoUser: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsImtpZCI6IjdTWVpjUnNrWlpPMzNaVzIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxMzkyNzcxLCJpYXQiOjE2OTEzODkxNzEsImlzcyI6Imh0dHBzOi8venN3aWFlaGFnY3J2dnV2bHhzbWcuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjlmZWQ1ODJmLTFkNTAtNGU5OS1hYjk4LTE1NzJhZTJlNTEyMSIsImVtYWlsIjoiYWxleGlzZnJlbmVAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2OTEzODkxNzF9XSwic2Vzc2lvbl9pZCI6IjEyNWU0NWQzLWQ2MWYtNDdhNS1hMmEyLWYzM2E2ZWNkM2ViYSJ9.nTNPSnbIoeqooi7EMmoc8d2q8sLyQqdZ3VeywjRlaWM',
      aud: 'authenticated',
      email: 'alexisfrene@gmail.com',
      id: '9fed582f-1d50-4e99-ab98-1572ae2e5121',
      phone: '',
      role: 'authenticated',
    },
  },
};

const imageDafult = require('../../../assets/not_image.png');

export const ProducsForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [checkedItems, setCheckedItems] = useState('');
  const {
    login: {
      infoUser: { id },
    },
  } = useSelector((state) => state);
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
          <Formik initialValues={initialValues} onSubmit={useSubmit(id)}>
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

// const AddProducsForm = ({ DDD }) => {
//   const [producsName, setProducsName] = useState('');
//   const [imageSupa, setImageSupa] = useState('');

//   return (
//     <View>
//       <Text>Agrega un producto nuevo</Text>
//       {/* <TextInput value={producsName} onChangeText={setProducsName} />
//       <TouchableOpacity
//         onPress={pickImage}
//         style={{
//           width: 320,
//           height: 440,
//           borderRadius: 18,
//         }}
//       >
//         <ImageViewer
//           placeholderImageSource={imageDafult}
//           selectedImage={imageSupa}
//         />
//       </TouchableOpacity>
//       <Button
//         title="Publicar"
//         onPress={() => {
//           DDD(producsName, imageSupa);
//           setProducsName("");
//         }}
//       /> */}
//     </View>
//   );
// };
