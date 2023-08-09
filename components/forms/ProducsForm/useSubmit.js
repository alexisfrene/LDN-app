import { useDispatch } from 'react-redux';
import { setImageProduc, setNewProduc } from '../../../redux/slices';

export function useSubmit(id, setSuccefull, setDisable, setImage) {
  const dispatch = useDispatch();
  return async (spec, { resetForm }) => {
    try {
      setDisable(true);
      const status = await axiosPromise({ ...spec, id }, dispatch);
      if (status.payload === 201) {
        setSuccefull(true);
        resetForm();
      } else {
        console.log('ERROR SUMBIT', status);
      }
    } catch (error) {
      console.log('FORM NEW PRODUC', error);
    } finally {
      setImage(null);
      setDisable(false);
    }
  };
}

async function axiosPromise(spec, dispatch) {
  const {
    payload: { image_url },
  } = await dispatch(setImageProduc(spec));
  const apiSpec = transformSpec({
    ...spec,
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
