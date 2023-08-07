import * as React from 'react';
import { Provider } from 'react-redux';
import 'react-native-url-polyfill/auto';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { persistor, store } from './redux';
import {
  LoginScreen,
  HomeScreen,
  NewProducsScreen,
  ListOfProductsScreen,
} from './views';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Inicio" component={HomeScreen} />
              <Stack.Screen
                name="Crear Producto"
                component={NewProducsScreen}
              />
              <Stack.Screen
                name="Lista de productos"
                component={ListOfProductsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
// import { useRef, useState, useEffect } from "react";
// import * as ImagePicker from "expo-image-picker";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { StyleSheet, View, Platform, StatusBar } from "react-native";
// import * as MediaLibrary from "expo-media-library";
// import { captureRef } from "react-native-view-shot";
// import domtoimage from "dom-to-image";

// import ImageViewer from "./components/commons/ImageViewer";
// import IconButton from "./components/commons/IconButton";
// import CircleButton from "./components/CircleButton";
// import Button from "./components/commons/Button";
// import EmojiPicker from "./components/commons/EmojiPicker";
// import EmojiList from "./components/commons/EmojiList";
// import EmojiSticker from "./components/commons/EmojiSticker";
// import Account from "./components/Account";
// import Auth from "./components/Auth";
// import { Session } from "@supabase/supabase-js";
// import { supabase } from "./lib/supabse";
// const PlaceholderImage = require("./assets/images.jpg");

// export default function App() {
//   // const [status, requestPermission] = MediaLibrary.usePermissions();
//   // const [selectedImage, setSelectedImage] = useState(null);
//   // const [isModalVisible, setIsModalVisible] = useState(false);
//   // const [showAppOptions, setShowAppOptions] = useState(false);
//   // const [pickedEmoji, setPickedEmoji] = useState(null);
//   // const imageRef = useRef();
//   // const onReset = () => {
//   //   setShowAppOptions(false);
//   // };

//   // const onSaveImageAsync = async () => {
//   //   if (Platform.OS !== "web") {
//   //     try {
//   //       const localUri = await captureRef(imageRef, {
//   //         height: 440,
//   //         quality: 1,
//   //       });
//   //       await MediaLibrary.saveToLibraryAsync(localUri);
//   //       if (localUri) {
//   //         alert("Saved!");
//   //       }
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   } else {
//   //     try {
//   //       const dataUrl = await domtoimage.toJpeg(imageRef.current, {
//   //         quality: 0.95,
//   //         width: 320,
//   //         height: 440,
//   //       });

//   //       let link = document.createElement("a");
//   //       link.download = "sticker-smash.jpeg";
//   //       link.href = dataUrl;
//   //       link.click();
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }
//   // };
//   // const onModalClose = () => {
//   //   setIsModalVisible(false);
//   // };
//   // const onAddSticker = () => {
//   //   setIsModalVisible(true);
//   // };
//   // if (status === null) {
//   //   requestPermission();
//   // }
//   // const pickImageAsync = async () => {
//   //   let result = await ImagePicker.launchImageLibraryAsync({
//   //     allowsEditing: true,
//   //     quality: 1,
//   //   });

//   //   if (!result.canceled) {
//   //     setSelectedImage(result.assets[0].uri);
//   //     setShowAppOptions(true);
//   //   } else {
//   //     alert("You did not select any image.");
//   //   }
//   // };
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);
//   return (
//     // <GestureHandlerRootView style={styles.container}>
//     //   <View style={styles.container}>
//     //     <View style={styles.imageContainer}>
//     //       <View ref={imageRef} collapsable={false}>
//     //         <ImageViewer
//     //           placeholderImageSource={PlaceholderImage}
//     //           selectedImage={selectedImage}
//     //         />
//     //         {pickedEmoji !== null ? (
//     //           <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
//     //         ) : null}
//     //       </View>
//     //     </View>
//     //     {showAppOptions ? (
//     //       <View style={styles.optionsContainer}>
//     //         <View style={styles.optionsRow}>
//     //           <IconButton icon="refresh" label="Reset" onPress={onReset} />
//     //           <CircleButton onPress={onAddSticker} />
//     //           <IconButton
//     //             icon="save-alt"
//     //             label="Save"
//     //             onPress={onSaveImageAsync}
//     //           />
//     //         </View>
//     //       </View>
//     //     ) : (
//     //       <View style={styles.footerContainer}>
//     //         <Button
//     //           theme="primary"
//     //           label="Choose a photo"
//     //           onPress={pickImageAsync}
//     //         />
//     //         <Button
//     //           label="Use this photo"
//     //           onPress={() => setShowAppOptions(true)}
//     //         />
//     //       </View>
//     //     )}
//     //     <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
//     //       <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
//     //     </EmojiPicker>
//     //     <StatusBar style="light" />
//     //   </View>
//     // </GestureHandlerRootView>
//     <View>
//       {session && session.user ? (
//         <Account key={session.user.id} session={session} />
//       ) : (
//         <Auth />
//       )}
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#25292e",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   imageContainer: {
// //     flex: 1,
// //     paddingTop: 58,
// //   },
// //   image: {
// //     width: 320,
// //     height: 440,
// //     borderRadius: 18,
// //   },

// //   buttonContainer: {
// //     width: 320,
// //     height: 68,
// //     marginHorizontal: 20,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: 3,
// //   },
// //   button: {
// //     borderRadius: 10,
// //     width: "100%",
// //     height: "100%",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     flexDirection: "row",
// //   },
// //   buttonIcon: {
// //     paddingRight: 8,
// //   },
// //   buttonLabel: {
// //     color: "#fff",
// //     fontSize: 16,
// //   },
// //   footerContainer: {
// //     flex: 1 / 3,
// //     alignItems: "center",
// //   },
// //   optionsContainer: {
// //     position: "absolute",
// //     bottom: 80,
// //   },
// //   optionsRow: {
// //     alignItems: "center",
// //     flexDirection: "row",
// //   },
// // });
