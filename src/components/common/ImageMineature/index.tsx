import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export const ImageMineature = ({ title, imageURL, onPress, price, size }) => {
  const imgixParams = {
    w: 100,
    h: 100,
    fit: 'crop',
    auto: 'format',
  };
  const loadImage = `${imageURL}?${new URLSearchParams(imgixParams)}`;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        {imageURL && <Image source={{ uri: loadImage }} style={styles.image} />}
      </View>

      <Text style={styles.sizeText}>
        {size !== 'Sin especificar' ? size.toUpperCase() : 'N/A'}
      </Text>

      <Text style={styles.priceText}>{`$ ${price}`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
    marginHorizontal: 0.5,
    borderWidth: 2,
    borderColor: '#FFC107',
    position: 'relative',
  },
  title: {
    backgroundColor: '#FFC107',
    padding: 1,
    fontWeight: 'bold',
  },
  image: {
    width: 125,
    height: 125,
  },
  sizeText: {
    position: 'absolute',
    bottom: 1,
    left: 0,
    backgroundColor: '#FFECB8',
    borderWidth: 1,
    borderColor: '#FFC107',
    padding: 0.5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceText: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    backgroundColor: '#FFC107',
    borderWidth: 1,
    borderColor: '#FFC107',
    padding: 0.5,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
