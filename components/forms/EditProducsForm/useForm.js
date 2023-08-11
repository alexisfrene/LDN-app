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
    produc_gender: null,
    produc_age: null,
    produc_style: null,
    produc_brand: null,
    produc_size: null,
    produc_name: null,
    produc_description: null,
    produc_price: null,
    produc_color: null,
    category: null,
  };

  return initialValues;
}
