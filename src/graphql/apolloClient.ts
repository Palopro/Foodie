import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
  uri: 'https://rn-food-delivery.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: '',
  },
});
