import { setLogin } from '../../redux/slices';
import { useDispatch } from 'react-redux';

type UseSubmitParams = {
  setLoading: (value: boolean) => void;
  navigation: { navigate: (value: string) => void };
};
type SpecProps = {
  email: string;
  password: string;
};

export const useSubmit = ({ setLoading, navigation }: UseSubmitParams) => {
  const dispatch = useDispatch();
  return async (spec: SpecProps) => {
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
};

const axiosPromise = async (spec: SpecProps, dispatch: any) => {
  const data = await dispatch(setLogin(spec));
  return data;
};
