import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import {
  loginReducer,
  commonsReducer,
  homeReducer,
  configReducer,
} from './slices';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['login', 'home'],
};

const rootReducer = combineReducers({
  commons: commonsReducer,
  login: loginReducer,
  home: homeReducer,
  config: configReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
