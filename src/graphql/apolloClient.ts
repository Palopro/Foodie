import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { storage, StorageKeys } from '../data/dataSource/storage';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://strapi-url/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await storage.getFromStorage(StorageKeys.JWT);

  return {
    ...headers,
    Authorization: token ? `Bearer ${token}` : undefined,
  };
});

export const apollo = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
