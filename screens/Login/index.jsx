import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthForm } from '../../components/forms';

export const LoginScreen = ({ navigation }) => {
  const login = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (login?.infoUser?.aud === 'authenticated') {
      navigation.navigate('Inicio');
    }
  }, [loading]);

  return <AuthForm setLoading={setLoading} loading={loading} />;
};
