import React from 'react';
import { Button as ButtonRneui } from '@rneui/themed';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disable?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  disable = false,
  icon,
}) => {
  return (
    <ButtonRneui
      title={text}
      onPress={onPress}
      loadingProps={{ size: 'small', color: 'white' }}
      buttonStyle={{
        backgroundColor: '#E6B320',
        borderRadius: 5,
      }}
      titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
      containerStyle={{
        height: 50,
      }}
      icon={{
        name: icon,
        type: 'font-awesome',
        size: 15,
        color: 'white',
      }}
      disabled={disable}
    />
  );
};
