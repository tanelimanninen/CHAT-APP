import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const { apolloUri } = Constants.expoConfig.extra;
console.log(apolloUri);

const createApolloClient = () => {
  return new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;