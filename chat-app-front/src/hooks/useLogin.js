import { useMutation, useApolloClient } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../graphql/mutations'

const useLogin = () => {
  const [loginMutation] = useMutation(LOGIN);
  const apolloClient = useApolloClient();

  const login = async (username, password) => {
    try {
      //LOGIN USER TO SERVER
      const result = await loginMutation({ variables: { username, password } });
      const token = result.data.login.value;
      //SET TOKEN TO ASYNC STORAGE
      await AsyncStorage.setItem('chatapp-user-token', token);
      //RESET APOLLO CLIENT STORE
      await apolloClient.resetStore();
      console.log('Token set to Async Storage');

      return token;
    } catch (error) {
      throw new Error('Invalid username or password');
    }
  };

  return login;
};

export default useLogin;