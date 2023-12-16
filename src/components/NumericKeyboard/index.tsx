import { useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const NumericKeyboard = ({ setPassword, password, handleSubmit }) => {
  const buttonsKey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Borrar', 0, 'Entrar'];
  const handlePress = (item) => {
    if (item !== 'Entrar') {
      if (item === 'Borrar') {
        setPassword(password.substring(0, password.length - 1));
      } else {
        setPassword(password + item);
      }
    } else {
      return handleSubmit();
    }
  };

  useEffect(() => {
    if (password.length === 6) {
      return handleSubmit();
    }
  }, [password]);

  return (
    <View style={styles.container}>
      {buttonsKey.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.buttonConteiner}
            key={index}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 350,
  },
  buttonConteiner: {
    backgroundColor: '#F59F0A',
    width: 100,
    height: 50,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
