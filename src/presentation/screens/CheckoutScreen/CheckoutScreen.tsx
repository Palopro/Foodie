import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { foodieApi } from '../../../data/dataSource/api/foodieApi';

export const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation();

  const { data: user } = foodieApi.useMeQuery();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle title="Checkout" onBackPress={handleGoBack} />

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Delivery</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Address details</Text>

        <View style={styles.infoBox}>
          <Text style={styles.username}>{user?.username}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>
            Km 5 refinery road oppsite re public road, effurun, delta state
          </Text>
          <View style={styles.divider} />
          <Text style={styles.phoneNumber}>+234 9011039271</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  titleWrapper: {
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
  },
  infoContainer: {
    marginTop: 42,
    paddingHorizontal: 50,
  },
  infoTitle: {
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
  },
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  username: {
    fontSize: 17,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '700',
    fontFamily: 'RobotoCondensed-Bold',
    marginBottom: 8,
  },
  divider: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.3))',
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    marginVertical: 8,
  },
  phoneNumber: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 8,
  },
});
