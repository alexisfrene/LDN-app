import { Text } from 'react-native';

export const Title = ({ text }) => {
  return (
    <Text className="h-12 text-center pt-2 text-3xl bg-amber-400 rounded-lg mb-3 mt-1">
      {text}
    </Text>
  );
};
