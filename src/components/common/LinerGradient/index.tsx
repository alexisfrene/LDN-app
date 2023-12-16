import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const LinerGradientConteiner: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
