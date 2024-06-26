import { StyleSheet, View } from 'react-native';

import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import ChatList from './Chatlist';

// CSS
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: theme.colors.darkgrey
    },
  });

const Feed = ({ setToken }) => {
    return (
        <View style={styles.container}>
            <NavBar setToken={setToken} />
            <Header />
            <SearchBar />
            <ChatList />
        </View>
    );
};

export default Feed;