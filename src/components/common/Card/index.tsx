import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const CardCategory = ({ title, children, onPress }) => {
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: '#FFD54F' }}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.childrenContainer}>{children}</View>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pressable: {
    activeOpacity: 0.8,
    borderRadius: 16,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    height: 100,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginTop: 2,
  },
  childrenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
