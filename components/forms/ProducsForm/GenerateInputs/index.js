import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const GenerateInputs = ({
  handleChange,
  handleBlur,
  values,
  name,
  className,
  placeholder,
  type = 'default',
  title,
}) => {
  return (
    <View className="flex flex-row my-1 bg-amber-300">
      <Text className="text-base bg-amber-400 w-44">{title}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        className={className}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
};
