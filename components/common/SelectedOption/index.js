import { useState, useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';
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
    <View className="flex flex-row my-1 justify-between bg-amber-300">
      <Text className="text-base font-bold pl-1 bg-amber-400 w-44">
        {title}
      </Text>
      {options.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={{
              backgroundColor:
                option === item ? 'rgb(245 158 11)' : 'rgb(252 211 77)',
            }}
            onPress={() => handlePress(item)}
          >
            <Text className="m-0.5 rounded-md mr-2 font-bold">{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
