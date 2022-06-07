import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { TextInput } from '../../components/TextInput';
import { RoundButton } from '../../components/RoundButton';
import { useRegisterMutation } from '../../../data/dataSource/api/authService';

export const SignUpScreen = () => {
  const [username, setUsername] = useState('TestUser2');
  const [email, setEmail] = useState('111@222.com');
  const [pass, setPass] = useState('u12345678');

  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleSignUp = () => {
    registerUser({ userCredentials: { username, email, password: pass } });
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldWrapper}>
        <TextInput
          label={'Username'}
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

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

      <View style={styles.buttonWrapper}>
        {isLoading ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator color={'#FF460A'} animating hidesWhenStopped />
          </View>
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
  loaderWrapper: {
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
