import React, { useEffect, useState } from 'react';
import { Auth } from '../../components';
import { useSelector } from 'react-redux';

export const LoginScreen = ({ navigation }) => {
  const {
    login: { token },
    commons: { isLoggedIn },
  } = useSelector((state) => state);

  useEffect(() => {
    if (token || isLoggedIn) {
      navigation.navigate('Inicio');
    }
  }, [token]);

  return <Auth />;
};
