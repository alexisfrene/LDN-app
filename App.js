import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
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
} from './screens';

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
