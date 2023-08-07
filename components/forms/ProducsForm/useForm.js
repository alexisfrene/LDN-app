import { useCallback, useEffect, useState } from 'react';

export function useForm() {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  const validate = useCallback((values) => {
    const errors = {};
    const requiredMsg = 'Campo requerido';
    const requiredFields = ['name', 'price', 'category'];
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
    name: '',
    description: '',
    price: 1,
    color: null,
    category: 'other',
    image_url: null,
  };

  return initialValues;
}
