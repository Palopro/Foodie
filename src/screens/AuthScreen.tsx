import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {LoginScreen} from './LoginScreen';
import {SignUpScreen} from './SignUpScreen';

const renderScene = SceneMap({
  Login: LoginScreen,
  SignUp: SignUpScreen,
});

const routes = [
  {
    key: 'Login',
    title: 'Login',
  },
  {
    key: 'SignUp',
    title: 'Sign Up',
  },
];

export const AuthScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated />
      <Text>Auth</Text>

      <TabView
        onIndexChange={setIndex}
        navigationState={{index, routes}}
        renderScene={renderScene}
        initialLayout={{width: layout.width}}
        swipeEnabled={false}
      />
    </SafeAreaView>
  );
};
