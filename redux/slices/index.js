import commonsReducer, {
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
} from './common';

import loginReducer, { setLogin, autoLogin } from './login';
import homeReducer, { homeParams } from './home';
import configReducer, { getPermissions } from './config';
import producsSlice, {
  setNewProduc,
  setImageProduc,
  updateProduc,
} from './producs';

export {
  loginReducer,
  commonsReducer,
  homeReducer,
  configReducer,
  producsSlice,
};
export {
  setLogin,
  autoLogin,
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
  homeParams,
  getPermissions,
  setNewProduc,
  setImageProduc,
  updateProduc,
};
