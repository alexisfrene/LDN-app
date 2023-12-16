import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
interface TitleProps {
  text: string;
}
export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    backgroundColor: '#FFC107',
    borderRadius: 10,
    marginBottom: 3,
    marginTop: 6,
  },
  titleText: {
    fontSize: 24,
  },
});
