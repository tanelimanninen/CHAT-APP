import { StyleSheet, View, Text } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.darkgrey,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Haistaisitko Fredrickson persettä!</Text>
        </View>
    );
};

export default Main;