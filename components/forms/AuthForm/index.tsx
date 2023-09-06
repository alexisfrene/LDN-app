import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useSubmit } from './useSubmit';
import { useState } from 'react';

export const AuthForm = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={useSubmit(setLoading, navigation)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <LinearGradient
          colors={['#fdfac7', '#fc930a']}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <View style={styles.inputContainer}>
              <Input
                label="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={handleChange('email')}
                value={values?.email}
                placeholder="email@address.com"
                autoCapitalize={'none'}
                inputStyle={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                label="Contraseña"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={handleChange('password')}
                value={values?.password}
                secureTextEntry={true}
                autoCapitalize={'none'}
                inputStyle={styles.input}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                title="Iniciar sesión"
                disabled={loading}
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
        </LinearGradient>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#fdfac7',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    height: 50,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
