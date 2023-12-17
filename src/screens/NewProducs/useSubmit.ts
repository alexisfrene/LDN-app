import { useDispatch } from 'react-redux';
import {
  setImageProduc,
  setNewProduc,
  startLoading,
  stopLoading,
} from '../../redux/slices';

type SpecParams = {
  gender: string;
  age: string;
  style: string;
  brand: string;
  size: string;
  name: string;
  description: string;
  price: any;
  color: string;
  category: string;
  image_url: string;
  dollar_today: number;
  uri?: string;
  id: string;
};

interface Spec {
  produc_gender: string;
  produc_age: string;
  produc_style: string;
  produc_brand: string;
  produc_size: string;
  produc_name: string;
  produc_description: string;
  produc_price: string;
  produc_color: string;
  produc_category: string;
  produc_image_url: string;
  produc_dollar_today: number;
  user: string;
}

export function useSubmit(
  id: string,
  setDisable: (e: boolean) => void,
  resetState: () => void,
  image: string,
) {
  const dispatch = useDispatch();
  return async (spec: SpecParams, { resetForm }) => {
    try {
      setDisable(true);
      dispatch(startLoading());
      const status = await axiosPromise({ ...spec, id, uri: image }, dispatch);
      if (status.payload === 201) {
        resetState();
        resetForm();
      } else {
        console.error('ERROR SUMBIT', status);
      }
    } catch (error) {
      console.error('FORM NEW PRODUC', error);
    } finally {
      setDisable(false);
      dispatch(stopLoading());
    }
  };
}

async function axiosPromise(spec: SpecParams, dispatch: any) {
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
  if (image_url) {
    const data = await dispatch(setNewProduc(apiSpec));
    return data;
  } else {
    return { payload: 400 };
  }
}

function transformSpec(spec: SpecParams): Spec {
  spec.price = Number(spec.price.replace(/\$/g, ''));
  const apiSpec: Spec = {
    user: spec.id,
    produc_gender: spec.gender,
    produc_age: spec.age,
    produc_style: spec.style,
    produc_brand: spec.brand,
    produc_size: spec.size,
    produc_name: spec.name,
    produc_description: spec.description,
    produc_price: spec.price,
    produc_color: spec.color,
    produc_category: spec.category,
    produc_image_url: spec.image_url,
    produc_dollar_today: spec.dollar_today,
  };
  return apiSpec;
}
