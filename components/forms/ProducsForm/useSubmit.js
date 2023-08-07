import { useDispatch } from 'react-redux';
import { setImageProduc, setNewProduc } from '../../../redux/slices';

export function useSubmit(id, setSuccefull) {
  const dispatch = useDispatch();
  return async (spec, { resetForm }) => {
    try {
      const status = await axiosPromise({ ...spec, id }, dispatch);
      if (status.payload === 201) {
        setSuccefull(true);
        resetForm();
      }
    } catch (error) {
      console.log('FORM NEW PRODUC', error);
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
  const apiSpec = {
    user: spec.id,
    produc_name: spec.name,
    produc_brand: spec.brand,
    produc_style: spec.style,
    produc_size: spec.size,
    produc_description: spec.description,
    produc_price: spec.price,
    produc_color: spec.color,
    produc_category: spec.category,
    produc_image_url: spec.image_url,
    produc_age: '',
    produc_gender: 'genero',
    produc_state: true,
    produc_stock: 10,
    produc_discount: 'asds',
  };

  return apiSpec;
}
