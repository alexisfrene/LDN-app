import { useDispatch } from 'react-redux';
import { setLogin } from '../../../redux/slices';

export function useSubmit(setLoading, navigation) {
  const dispatch = useDispatch();
  return async (spec) => {
    try {
      setLoading(true);
      const res = await axiosPromise(spec, dispatch);
      if (res?.payload?.aud === 'authenticated') {
        navigation.navigate('Inicio');
      }
    } catch (error) {
      console.log('Fail', error);
    } finally {
      setLoading(false);
    }
  };
}

async function axiosPromise(spec, dispatch) {
  const apiSpec = transformSpec(spec);
  const data = await dispatch(setLogin(apiSpec));

  return data;
}

function transformSpec(spec) {
  const apiSpec = {
    email: spec?.email,
    password: spec?.password,
  };
  return apiSpec;
}
