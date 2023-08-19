import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
export const ImageMineature = ({ title, imageURL, onPress, price, size }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="my-1 border-2 border-amber-700">
        <Text
          className="w-28 bg-amber-400 p-1 font-bold"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        {imageURL && <Image src={imageURL} className="h-28 w-28" />}
      </View>

      <Text className="absolute bottom-1 left-0 bg-amber-100 border border-amber-700 p-0.5 font-bold text-base">
        {size !== 'Sin especificar' ? size.toUpperCase() : 'N/A'}
      </Text>

      <Text className="absolute bottom-1 right-0 bg-amber-300 border border-amber-700 p-0.5 font-bold text-base">
        {`$ ${price}`}
      </Text>
    </Pressable>
  );
};
