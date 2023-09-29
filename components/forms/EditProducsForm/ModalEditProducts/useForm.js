import { useEffect, useState } from 'react';

export function useForm() {
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  return { initialValues };
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
