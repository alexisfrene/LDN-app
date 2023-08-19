import { useDispatch } from 'react-redux';
import {
  setImageProduc,
  setNewProduc,
  startLoading,
  stopLoading,
} from '../../../redux/slices';

export function useSubmit(id, setSuccefull, setDisable, setImage, image) {
  const dispatch = useDispatch();
  return async (spec, { resetForm }) => {
    try {
      setDisable(true);
      dispatch(startLoading());
      const status = await axiosPromise({ ...spec, id, uri: image }, dispatch);
      if (status.payload === 201) {
        setSuccefull(true);
        setImage(null);
        resetForm();
      } else {
        console.log('ERROR SUMBIT', status);
      }
    } catch (error) {
      console.log('FORM NEW PRODUC', error);
    } finally {
      setDisable(false);
      dispatch(stopLoading());
    }
  };
}

async function axiosPromise(spec, dispatch) {
  const { uri, ...newData } = spec;
  const {
    payload: { image_url },
  } = await dispatch(
    setImageProduc({ image_url: uri, category: spec?.category }),
  );
  const apiSpec = transformSpec({
    ...newData,
    image_url,
  });
  const data = await dispatch(setNewProduc(apiSpec));
  return data;
}

function transformSpec(spec) {
  spec.price = Number(spec.price.replace(/\$/g, ''));
  const apiSpec = {
    user: spec.id,
    produc_name: spec.name,
  };

  for (let key in spec) {
    if (!!spec[key]) {
      if (key !== 'id') {
        apiSpec['produc_' + key] = spec[key];
      }
    }
  }

  return apiSpec;
}
