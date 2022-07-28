import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { createUploadLink, ReactNativeFile } from 'apollo-upload-client';
import { Asset } from 'react-native-image-picker/src/types';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { launchImageLibrary } from 'react-native-image-picker';

import { AppBarWithTitle } from '../../components/AppBar/AppBarWithTitle';
import { ColorType, RoundButton } from '../../components/RoundButton';
import { uploadImageMutation } from '../../../graphql/mutations';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: 'https://strapi-url/graphql',
  }),
});

export const UploadImageScreen: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const [image, setImage] = useState<Asset | null>(null);

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false,
      includeExtra: true,
    });
    setImage(result.assets[0]);
  };

  const handleUploadImage = async () => {
    if (image) {
      const file = new ReactNativeFile({
        uri: image.uri!,
        name: image.fileName,
        type: image.type,
      });

      await client.mutate({
        mutation: uploadImageMutation,
        variables: {
          refId: new Date().getMilliseconds(),
          ref: image.uri,
          field: image.fileName,
          info: {
            name: image.fileName,
            alternativeText: image.fileName,
            caption: image.timestamp,
          },
          file: file,
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBarWithTitle onBackPress={navigation.goBack} title="Upload image" />
      <RoundButton
        text={'Select image'}
        onPress={handleSelectImage}
        colorType={ColorType.Orange}
      />
      {image && (
        <RoundButton
          text={'Upload image'}
          onPress={handleUploadImage}
          colorType={ColorType.Orange}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
