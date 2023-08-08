import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
export const ImageMineature = ({ title, imageURL, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="p-0.5">
        <Text className="w-28 bg-blue-400">{title}</Text>
        {imageURL && <Image src={imageURL} className="h-28 w-28" />}
      </View>
    </Pressable>
  );
};
