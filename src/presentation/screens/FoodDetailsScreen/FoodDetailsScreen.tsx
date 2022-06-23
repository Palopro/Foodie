import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AppBarSearch } from '../../components/AppBar/AppBarSearch';
import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { useAppDispatch } from '../../../hooks';
import { foodCartReducer } from '../../../domain/stores/reducers/foodCartReducer';
import { CartFood } from '../../../domain/model/CartFood';
import { HomeStackParams } from '../../../navigation/HomeNavigation';
import { FavoriteButton } from './FavoriteButton';

interface FoodDetailsScreenProps {
  route: RouteProp<HomeStackParams>;
  navigation: NavigationProp<HomeStackParams>;
}

export const FoodDetailsScreen: React.FC<FoodDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const { food } = route.params!;

  const handleAddToCard = () => {
    const cartItem: CartFood = new CartFood(
      food.id,
      1,
      food.name,
      food.price,
      food.photo,
      food.gallery,
    );

    dispatch(foodCartReducer.actions.addToCart({ cartItem }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarSearch onBackPress={navigation.goBack} style={styles.appBar}>
        <View style={styles.favContainer}>
          <FavoriteButton />
        </View>
      </AppBarSearch>

      <ImageCarousel images={food.gallery} />
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{food.name}</Text>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{food.price}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoTitle}>Delivery info</Text>
        <View style={styles.infoDesc}>
          <Text style={styles.infoDescText}>
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </Text>
        </View>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoTitle}>Return policy</Text>
        <View style={styles.infoDesc}>
          <Text style={styles.infoDescText}>
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <RoundButton
          text="Add to cart"
          onPress={handleAddToCard}
          colorType={ColorType.Orange}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  appBar: {
    backgroundColor: '#F6F6F9',
  },
  favContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  nameWrapper: {
    marginTop: 45,
  },
  name: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
    fontStyle: 'normal',
  },
  priceWrapper: {
    marginTop: 12,
  },
  price: {
    textAlign: 'center',
    color: 'rgba(250, 74, 12, 1)',
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    fontStyle: 'normal',
  },

  infoView: {
    paddingHorizontal: 50,
    paddingVertical: 6,
  },
  infoTitle: {
    textAlign: 'left',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '700',
  },
  infoDesc: {
    marginTop: 3,
  },
  infoDescText: {
    textAlign: 'left',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  buttonWrapper: {
    marginTop: 30,
    paddingHorizontal: 50,
    height: 70,
  },
});
