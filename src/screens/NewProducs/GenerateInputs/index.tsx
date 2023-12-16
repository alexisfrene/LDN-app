import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
type GenerateInputsProps = {
  handleChange: (name: string) => void;
  handleBlur: (name: string) => void;
  values: any;
  name: string;
  placeholder: string;
  type: 'default' | 'numeric';
  title: string;
};
//TODO:terminar de typar
export const GenerateInputs = ({
  handleChange,
  handleBlur,
  values,
  name,
  placeholder,
  type = 'default',
  title,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#FFD54F',
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 16,
    backgroundColor: '#FFC107',
    width: 150,
    textAlignVertical: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  input: {
    flex: 1,
    marginVertical: 8,
    height: 45,
    paddingHorizontal: 16,
  },
});
