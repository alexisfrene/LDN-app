if (__DEV__) {
  const originalConsoleWarn = console.warn;
  console.warn = (...args) => {
    if (!args[0].includes('Stack guards not supported in this environment')) {
      originalConsoleWarn(...args);
    }
  };
}

//import 'react-native-url-polyfill/auto';
import 'expo-dev-client';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './redux';
import { Screens } from './screens';
import { Alert } from 'react-native';

function App() {
  try {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Screens />
        </Provider>
      </SafeAreaProvider>
    );
  } catch (error) {
    // Aquí puedes manejar el error que ocurra al renderizar la aplicación.
    console.error('Error al renderizar la aplicación:', error);
    // Puedes renderizar un componente alternativo o realizar otra acción según el error.
    return Alert.alert('HOLAAAA');
  }
}
export default App;
