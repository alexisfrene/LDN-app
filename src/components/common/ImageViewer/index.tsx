import React from 'react';
import { Image, StyleSheet } from 'react-native';

const imageDefault = require('../../../../assets/not_image.png');

export const ImageViewer = ({ selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageDefault;
  return <Image source={imageSource} style={styles.image} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
  },
});
