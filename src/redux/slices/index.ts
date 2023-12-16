import commonsReducer, {
  startLoading,
  stopLoading,
  setPhotoUri,
  setDollarToDay,
} from './common';

import loginReducer, { setLogin } from './login';
import producsSlice, {
  setNewProduc,
  setImageProduc,
  updateProduc,
  filterCategoryProducts,
  downloadImage,
} from './producs';

export { loginReducer, commonsReducer, producsSlice };
export {
  setLogin,
  startLoading,
  stopLoading,
  setNewProduc,
  setImageProduc,
  updateProduc,
  filterCategoryProducts,
  downloadImage,
  setPhotoUri,
  setDollarToDay,
};
