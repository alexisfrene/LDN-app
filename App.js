import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor, store } from './redux';
import { Screens } from './screens';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
