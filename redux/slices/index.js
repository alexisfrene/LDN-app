import commonsReducer, {
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
} from './common';

import loginReducer, { setLogin, autoLogin } from './login';
import homeReducer, { homeParams } from './home';
import configReducer, { getPermissions } from './config';

export { loginReducer, commonsReducer, homeReducer, configReducer };
export {
  setLogin,
  autoLogin,
  startLoading,
  stopLoading,
  setIsLogged,
  setLogIn,
  homeParams,
  getPermissions,
};
