import React, { useEffect, useState } from 'react';
import { Auth } from '../../components/Auth';
import { useSelector } from 'react-redux';

export const LoginScreen = ({ navigation }) => {
  const login = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (login?.infoUser?.aud === 'authenticated') {
      navigation.navigate('Inicio');
    }
  }, [loading]);

  return <Auth setLoading={setLoading} loading={loading} />;
};
