import { Pressable, Text } from 'react-native';

import React from 'react';

export const Button = ({ onPress, text, className }) => {
  const buttonStyles = `bg-amber-300 active:bg-amber-200 h-12 rounded-md flex justify-center mb-3 ${className}`;
  return (
    <Pressable className={buttonStyles} onPress={onPress}>
      <Text className="text-center text-lg font-semibold">{text}</Text>
    </Pressable>
  );
};
