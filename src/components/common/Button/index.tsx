import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  disable = false,
}) => {
  const buttonStyles: ViewStyle = {
    backgroundColor: disable ? '#B0B0B0' : '#FFD700',
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    marginHorizontal: 4,
  };

  return (
    <Pressable style={buttonStyles} onPress={onPress} disabled={disable}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
  },
});
