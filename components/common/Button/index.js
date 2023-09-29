import { Pressable, Text } from 'react-native';

import React from 'react';

export const Button = ({ onPress, text, disable = false }) => {
  const buttonStyles = `${
    disable ? 'bg-gray-300 text-slate-50' : 'bg-amber-300'
  } active:bg-amber-200 h-12 rounded-md flex justify-center mb-3 mx-1`;
  return (
    <Pressable className={buttonStyles} onPress={onPress} disabled={disable}>
      <Text className="text-center text-lg font-semibold px-2">{text}</Text>
    </Pressable>
  );
};
