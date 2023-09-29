import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export const LinerGradientConteiner = ({ children }) => {
  return (
    <LinearGradient
      colors={['#F5F4CA', '#EBBB3A']}
      style={{
        flex: 1,
        paddingHorizontal: 2,
      }}
    >
      {children}
    </LinearGradient>
  );
};
