import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { useSubmit } from './useSubmit';
import { useState } from 'react';
import { LinerGradientConteiner, Loading } from '../../common';
import { NumericKeyboard } from '../../NumericKeyboard';
import { MaterialIcons } from '@expo/vector-icons';
import ldnLogo from '../../../assets/favicon.png';

export const AuthForm = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const renderIconos = (cant: number) => {
    const iconos = [];
    for (let i = 0; i < cant; i++) {
      iconos.push(
        <MaterialIcons key={i} name="circle" size={20} color="#EBC88A" />,
      );
    }
    return iconos;
  };

  return (
    <Formik
      initialValues={{
        email: 'ale@ldn.com',
      }}
      onSubmit={useSubmit(setLoading, navigation, password)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <LinerGradientConteiner>
          <View style={styles.innerContainer}>
            <Image source={ldnLogo} style={{ width: 130, height: 130 }} />
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
              {password.length ? (
                <View style={{ flexDirection: 'row' }}>
                  {renderIconos(password.length)}
                </View>
              ) : (
                <View style={{ flexDirection: 'row' }}>{renderIconos(6)}</View>
              )}
            </View>
            <NumericKeyboard
              setPassword={setPassword}
              password={password}
              handleSubmit={handleSubmit}
            />
          </View>
          <Loading isVisible={loading} />
        </LinerGradientConteiner>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 50,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
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
