import { useCallback, useEffect, useState } from 'react';

export function useForm() {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  const validate = useCallback((values) => {
    const errors = {};
    const requiredMsg = 'Campo requerido';
    const requiredFields = ['webuser', 'user', 'password'];
    requiredFields.forEach((requiredField) => {
      if (!values[requiredField]) {
        errors[requiredField] = requiredMsg;
      }
    });

    return errors;
  }, []);

  return { initialValues, validate };
}

function getInitialValues() {
  const initialValues = {
    email: '',
    password: '',
  };

  return initialValues;
}
