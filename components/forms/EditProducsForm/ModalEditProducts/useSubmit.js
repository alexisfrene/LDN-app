import { useDispatch } from 'react-redux';
import { updateProduc } from '../../../../redux/slices';

export function useSubmit(producId, setSuccefull, setDisable) {
  const dispatch = useDispatch();
  return async (spec, { resetForm }) => {
    try {
      setDisable(true);
      const status = await axiosPromise(spec, dispatch, producId);
      if (status.payload === 204) {
        setSuccefull(true);
        resetForm();
      } else {
        console.log('ERROR SUMBIT', status);
      }
    } catch (error) {
      console.log('FORM NEW PRODUC', error);
    } finally {
      setDisable(false);
    }
  };
}

async function axiosPromise(spec, dispatch, id) {
  const apiSpec = transformSpec(spec);
  const data = await dispatch(updateProduc({ ...apiSpec, id }));

  return data;
}

function transformSpec(spec) {
  const apiSpec = {};
  for (let key in spec) {
    if (!!spec[key]) {
      if (key === 'category') {
        if (spec[key].length && spec[key] !== null) {
          apiSpec.produc_category = spec[key];
        }
      } else {
        apiSpec[key] = spec[key];
      }
    }
  }
  if (!!spec.produc_price) {
    apiSpec.produc_price = Number(spec.produc_price.replace(/\$/g, ''));
  }

  return apiSpec;
}
