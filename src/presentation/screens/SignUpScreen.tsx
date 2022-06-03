import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { TextInput } from '../components/TextInput';
import { RoundButton } from '../components/RoundButton';
import { signUpUser } from '../../domain/stores/reducers/authUserReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export const SignUpScreen = () => {
  const [username, setUsername] = useState('TestUser2');
  const [email, setEmail] = useState('111@222.com');
  const [pass, setPass] = useState('1234');
  const [repPass, setRepPass] = useState('1234');

  const isLoading = useAppSelector(state => state.authReducer.isLoading);

  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    dispatch(signUpUser({ username, email, password: pass }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldWrapper}>
        <TextInput
          label={'Email address'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.fieldWrapper}>
        <TextInput
          label={'Password'}
          value={pass}
          onChangeText={text => setPass(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.fieldWrapper}>
        <TextInput
          label={'repeat password'}
          value={repPass}
          onChangeText={text => setRepPass(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonWrapper}>
        {isLoading ? (
          <ActivityIndicator color={'#FF460A'} animating />
        ) : (
          <RoundButton
            text={'Sign up'}
            onPress={handleSignUp}
            colorType={'orange'}
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
