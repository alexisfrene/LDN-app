import React, { useEffect, useState } from 'react';
import { Auth } from '../../components';
import { useSelector } from 'react-redux';

export const LoginScreen = ({ navigation }) => {
  const {
    login: { infoUser },
  } = useSelector((state) => state);

  useEffect(() => {
    if (infoUser?.aud === 'authenticated') {
      navigation.navigate('Inicio');
    }
  }, [infoUser]);

  return <Auth />;
};
