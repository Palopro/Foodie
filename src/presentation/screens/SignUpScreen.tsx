import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from '../components/TextInput';
import { RoundButton } from '../components/RoundButton';

export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repPass, setRepPass] = useState('');

  const handleSignUp = () => {
    // TODO: handle sign up user
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

      <View style={{ paddingHorizontal: 24 }}>
        <RoundButton
          text={'Sign up'}
          onPress={handleSignUp}
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
});
