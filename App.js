if (__DEV__) {
  const originalConsoleWarn = console.warn;
  console.warn = (...args) => {
    if (!args[0].includes('Stack guards not supported in this environment')) {
      originalConsoleWarn(...args);
    }
  };
}

import 'react-native-url-polyfill/auto';
import 'expo-dev-client';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './redux';
import { Screens } from './screens';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Screens />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
