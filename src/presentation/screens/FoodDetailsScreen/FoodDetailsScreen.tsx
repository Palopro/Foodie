import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBarSearch } from '../../components/AppBar/AppBarSearch';
import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { useAppDispatch } from '../../../hooks';
import { foodCartReducer } from '../../../domain/stores/reducers/foodCartReducer';
import { CartFood } from '../../../domain/model/CartFood';
import { FavoriteButton } from './FavoriteButton';
import { StylingText, TextType } from '../../components/StylingText';
import { RootStackParams } from '../../../navigation/RootNavigation';
import { foodReducer } from '../../../domain/stores/reducers/foodReducer';

export const FoodDetailsScreen: React.FC<
  NativeStackScreenProps<RootStackParams>
> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();

  const { food } = route.params;

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

  const handleFavorite = () => {
    dispatch(foodReducer.actions.handleFavorite(food.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarSearch onBackPress={navigation.goBack} style={styles.appBar}>
        <View style={styles.favContainer}>
          <FavoriteButton onPress={handleFavorite} />
        </View>
      </AppBarSearch>

      <ImageCarousel images={food.gallery} />
      <View style={styles.nameWrapper}>
        <StylingText textType={TextType.Bold} style={styles.name}>
          {food.name}
        </StylingText>
      </View>
      <View style={styles.priceWrapper}>
        <StylingText textType={TextType.Bold} style={styles.price}>
          {food.price}
        </StylingText>
      </View>

      <View style={styles.infoView}>
        <StylingText textType={TextType.Bold} style={styles.infoTitle}>
          Delivery info
        </StylingText>
        <View style={styles.infoDesc}>
          <StylingText textType={TextType.Regular}>
            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
          </StylingText>
        </View>
      </View>

      <View style={styles.infoView}>
        <StylingText textType={TextType.Bold} style={styles.infoTitle}>
          Return policy
        </StylingText>
        <View style={styles.infoDesc}>
          <StylingText textType={TextType.Regular}>
            All our foods are double checked before leaving our stores so by any
            case you found a broken food please contact our hotline immediately.
          </StylingText>
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
    lineHeight: 32,
  },
  priceWrapper: {
    marginTop: 12,
  },
  price: {
    textAlign: 'center',
    color: 'rgba(250, 74, 12, 1)',
    fontSize: 22,
    lineHeight: 26,
  },

  infoView: {
    paddingHorizontal: 50,
    paddingVertical: 6,
  },
  infoTitle: {
    fontSize: 17,
    lineHeight: 20,
  },
  infoDesc: {
    marginTop: 3,
  },
  buttonWrapper: {
    marginTop: 30,
    paddingHorizontal: 50,
    height: 70,
  },
});
