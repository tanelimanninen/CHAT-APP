import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const { apolloUri } = Constants.expoConfig.extra;
console.log(apolloUri);

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: apolloUri,
  });

  const authLink = setContext(async (_, { headers }) => {
    // Retrieve the user token from AsyncStorage
    const token = await AsyncStorage.getItem('chatapp-user-token');

    // Return the headers to the context
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;