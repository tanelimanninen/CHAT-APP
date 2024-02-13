import { StyleSheet, View } from 'react-native';

import NavBar from './NavBar';
import Header from './Header';
import SearchBar from './SearchBar';
import ChatList from './Chatlist';
import Text from '../Text';

//CSS
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        //alignItems: 'center',
    },
  });

const Feed = () => {
    return (
        <View style={styles.container}>
            <NavBar />
            <Header />
            <SearchBar />
            <ChatList />
        </View>
    );
};

export default Feed;