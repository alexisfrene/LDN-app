import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export const SelectedOption = ({ title, options, values, change }) => {
  const [option, setOption] = useState(null);
  const isFocused = useIsFocused();

  const handlePress = (item) => {
    if (item === option) {
      setOption(null);
      values[change] = null;
    } else {
      setOption(item);
      values[change] = item;
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setOption(null);
    }
  }, [isFocused]);

  return (
    <View style={styles.optionContainer}>
      <Text style={styles.title}>{title}</Text>
      {options.map((item, index) => (
        <Pressable
          key={index}
          style={{
            ...styles.optionButton,
            backgroundColor: option === item ? '#F59E0B' : '#FCD34D',
          }}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.optionText}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 100,
    textAlignVertical: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  optionButton: {
    flex: 1,
    margin: 2,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
