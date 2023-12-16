import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { commonsReducer, loginReducer } from './slices';

const rootReducer = combineReducers({
  commons: commonsReducer,
  login: loginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
