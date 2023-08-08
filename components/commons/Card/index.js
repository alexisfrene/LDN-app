import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, View, Text } from 'react-native';

export const CardCategory = ({ title, children, onPress }) => {
  return (
    <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
      <Pressable
        className="active:bg-amber-500 rounded-2xl m-1"
        onPress={onPress}
      >
        <View className="h-32 overflow-hidden">
          <Text className="text-3xl font-semibold tracking-widest text-blue-800 text-center mt-2">
            {title}
          </Text>
          <View className=" rounded-full bg-amber-500 w-20 ml-36 p-1">
            {children}
          </View>
        </View>
      </Pressable>
    </LinearGradient>
  );
};
