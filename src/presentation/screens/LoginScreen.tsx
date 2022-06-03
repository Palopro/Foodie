import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from '../components/TextInput';
import { RoundButton } from '../components/RoundButton';
import { useAppDispatch } from '../../hooks/hooks';
import { loginUser } from '../../domain/stores/reducers/authUserReducer';

export const LoginScreen = () => {
  const [email, setEmail] = useState('111@222.com');
  const [pass, setPass] = useState('1234');

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    // TODO: login user
    dispatch(loginUser({ email, password: pass }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldWrapper}>
        <TextInput
          label={'Email'}
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

      <View style={styles.forgotPassWrapper}>
        <Pressable>
          <Text style={styles.forgotPassText}>Forgot password?</Text>
        </Pressable>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundButton
          text={'Login'}
          onPress={handleLogin}
          colorType={'orange'}
        />
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
  forgotPassText: {
    color: '#FA4A0C',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    textAlign: 'left',
  },
  buttonWrapper: {
    paddingHorizontal: 24,
  },
});
