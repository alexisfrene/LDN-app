import { getImageByCloudinary } from '@/lib';
import { Image } from '@rneui/themed';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export const ImageMineature = ({ title, imageURL, onPress, price, size }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      {imageURL && (
        <Image
          source={{ uri: getImageByCloudinary(imageURL) }}
          style={styles.image}
        />
      )}
      <View style={styles.details}>
        <Text style={styles.sizeText}>
          {size !== 'Sin especificar' ? size.toUpperCase() : 'N/A'}
        </Text>
        <Text style={styles.priceText}>{`$ ${price}`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 5 },
  title: {
    backgroundColor: '#FFC107',
    padding: 1,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  image: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFC107',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
