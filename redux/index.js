import { configureStore, combineReducers } from '@reduxjs/toolkit';
//import storage from 'redux-persist/lib/storage';
//import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { loginReducer, commonsReducer } from './slices';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['login'],
// };

const rootReducer = combineReducers({
  commons: commonsReducer,
  login: loginReducer,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
