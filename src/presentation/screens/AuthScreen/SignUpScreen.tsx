import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { TextInput } from '../../components/TextInput';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';
import { Loader } from './Loader';

interface RegisterFields {
  username: string;
  email: string;
  password: string;
}
import { RoundButton } from '../../components/RoundButton';
import { useRegisterMutation } from '../../../data/dataSource/api/authService';

export const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFields>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const [registerUser, { isLoading }] = foodieApi.useRegisterMutation();

  const handleSignUp = (data: RegisterFields) => {
    registerUser({
      userCredentials: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
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
          render={({ field: { value, onBlur, onChange } }) => (
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
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              label="Email address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email && 'Email is required'}
            />
          )}
        />
      </View>

      <View style={styles.fieldWrapper}>
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 32 }}
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.password && 'Password must be 6 to 32 symbols'}
              secureTextEntry
            />
          )}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <RoundButton
            text="Sign up"
            onPress={handleSubmit(handleSignUp)}
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
  buttonWrapper: {
    paddingHorizontal: 24,
  },
});
