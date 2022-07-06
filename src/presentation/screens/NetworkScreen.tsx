import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import { StylingText, TextType } from '../components/StylingText';
import wifiIcon from '../../assets/images/wifi.png';
import { ColorType, RoundButton } from '../components/RoundButton';

interface NetworkScreenProps {
  onTryAgain: () => void;
}

export const NetworkScreen: React.FC<NetworkScreenProps> = ({ onTryAgain }) => (
  <SafeAreaView style={styles.container}>
    <Image source={wifiIcon} style={styles.image} />
    <StylingText style={styles.title} textType={TextType.Bold}>
      No internet Connection
    </StylingText>
    <StylingText style={styles.desc} textType={TextType.Regular}>
      Your internet connection is currently not available please check or try
      again.
    </StylingText>

    <View style={styles.button}>
      <RoundButton
        text="Try again"
        onPress={onTryAgain}
        colorType={ColorType.Orange}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
    justifyContent: 'center',
  },
  image: {
    width: 133,
    height: 120,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 32,
    paddingHorizontal: 50,
    marginTop: 30,
  },
  desc: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
    paddingHorizontal: 65,
    marginTop: 17,
  },
  button: {
    marginTop: 55,
    marginHorizontal: 50,
  },
});
