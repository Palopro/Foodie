import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TextInput } from '../../components/TextInput';
import { RoundButton } from '../../components/RoundButton';
import { useLoginMutation } from '../../../data/dataSource/api/authService';
import { useNavigation } from '@react-navigation/native';
import { AppScreen } from '../../../navigation/AppScreen';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('testUser');
  const [pass, setPass] = useState('u12345678');

  const [loginUser, { isLoading, isSuccess }] = useLoginMutation();

  const handleLogin = async () => {
    await loginUser({
      userCredentials: { identifier: username, password: pass },
    });

    navigation.navigate(AppScreen.MainApp);
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
        {isLoading ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator color={'#FF460A'} animating hidesWhenStopped />
          </View>
        ) : (
          <RoundButton
            text={'Login'}
            onPress={handleLogin}
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
  loaderWrapper: {
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
