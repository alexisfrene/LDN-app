import { Formik } from 'formik';
import { View } from 'react-native';
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
        <LinearGradient colors={['#fdfac7', '#fc930a']} className="flex-1">
          <View className="h-screen flex justify-center px-1">
            <View className="bg-amber-100 rounded-2xl p-1 text-slate-950 pb-0">
              <Input
                className="active:bg-amber-50"
                label="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={handleChange('email')}
                value={values?.email}
                placeholder="email@address.com"
                autoCapitalize={'none'}
              />
            </View>
            <View className="bg-amber-100 rounded-2xl p-1 my-4 pb-0 shadow">
              <Input
                className="active:bg-amber-50"
                label="Contraseña"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={handleChange('password')}
                value={values?.password}
                secureTextEntry={true}
                autoCapitalize={'none'}
              />
            </View>
            <View className="mb-20 mt-8 h-20 active:bg-white">
              <Button
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                  height: 50,
                }}
                titleStyle={{ fontWeight: 'bold' }}
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
