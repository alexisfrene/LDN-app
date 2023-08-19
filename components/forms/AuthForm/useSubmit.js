import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { setLogin, setLogIn } from '../../../redux/slices';

export function useSubmit(setLoading) {
  const dispatch = useDispatch();
  return async (spec) => {
    try {
      setLoading(true);
      const data = await axiosPromise(spec, dispatch);
      if (data?.payload?.data?.role === 'authenticated') {
        dispatch(setLogIn());
      }
      setLoading(false);
    } catch (error) {
      Alert('fail', error.message);
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
    email: spec.email,
    password: spec.password,
  };
  return apiSpec;
}
