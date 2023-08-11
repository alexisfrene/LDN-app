import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
export const ImageMineature = ({ title, imageURL, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="my-1 border-2 border-amber-700">
        <Text
          className="w-28 bg-amber-400 p-1"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        {imageURL && <Image src={imageURL} className="h-28 w-28" />}
      </View>
    </Pressable>
  );
};
