import React, { useEffect, useState } from 'react';
import { Auth } from '../../components';
import { useSelector } from 'react-redux';

export const LoginScreen = ({ navigation }) => {
  const infoUser = useSelector((state) => state.login.infoUser);

  useEffect(() => {
    if (infoUser?.aud === 'authenticated') {
      navigation.navigate('Inicio');
    }
  }, [infoUser]);

  return <Auth />;
};
