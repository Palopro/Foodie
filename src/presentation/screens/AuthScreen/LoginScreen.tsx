import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { TextInput } from '../../components/TextInput';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Loader } from './Loader';
import { ForgotPasswordButton } from './ForgotPasswordButton';

interface LoginFields {
  username: string;
  password: string;
}
import { RoundButton } from '../../components/RoundButton';
import { useLoginMutation } from '../../../data/dataSource/api/authService';
import { useNavigation } from '@react-navigation/native';
import { AppScreen } from '../../../navigation/AppScreen';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    defaultValues: {
      username: 'testUser',
      password: 'u12345678',
    },
  });

  const [loginUser, { isLoading }] = foodieApi.useLoginMutation();

  const handleLogin = async () => {
    await loginUser({
      userCredentials: { identifier: username, password: pass },
    });

    navigation.navigate(AppScreen.MainApp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldWrapper}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Username"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.username && 'Username is required'}
            />
          )}
        />
      </View>

      <View style={styles.fieldWrapper}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            minLength: 6,
            maxLength: 32,
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password && 'Password must be from 6 to 32 symbols'}
              secureTextEntry
            />
          )}
        />
      </View>

      <View style={styles.forgotPassWrapper}>
        <ForgotPasswordButton />
      </View>

      <View style={styles.buttonWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <RoundButton
            text="Login"
            onPress={handleSubmit(handleLogin)}
            colorType={ColorType.Orange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  fieldWrapper: {
    paddingHorizontal: 24,
    marginVertical: 12,
  },
  forgotPassWrapper: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  buttonWrapper: {
    paddingHorizontal: 24,
  },
});
