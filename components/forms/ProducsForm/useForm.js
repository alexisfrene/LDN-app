import { useCallback, useEffect, useState } from 'react';

export function useForm(dollar) {
  const [initialValues, setInitialValues] = useState(() =>
    getInitialValues(dollar),
  );

  useEffect(() => {
    setInitialValues(getInitialValues(dollar));
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

function getInitialValues(dollar) {
  const dollarValue = parseFloat(dollar.venta.replace(',', '.'));
  const initialValues = {
    gender: '',
    age: '',
    style: '',
    brand: '',
    size: '',
    name: '',
    description: '',
    price: '$ 1',
    color: null,
    category: 'other',
    image_url: null,
    dollar_today: dollarValue,
  };

  return initialValues;
}
