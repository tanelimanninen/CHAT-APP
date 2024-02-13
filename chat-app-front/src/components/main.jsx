import { StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';

import theme from '../theme';

//COMPONENTS
import Feed from './Feed';
import NewPost from './NewPost';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.darkgrey,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/new-post' element={<NewPost />} />
            </Routes>
        </View>
    );
};

export default Main;