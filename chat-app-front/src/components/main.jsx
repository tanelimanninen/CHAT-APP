import { StyleSheet, View, ImageBackground } from 'react-native';
import { Route, Routes } from 'react-router-native';


//COMPONENTS
import Feed from './Feed';
import NewPost from './NewPost';
import SingleChatView from './SingleChatView';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    }
});

const Main = () => {
    return (
      <ImageBackground
            source={require('../../assets/BACKGROUND_VER3-01.jpg')}
            style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/new-post' element={<NewPost />} />
              <Route path='/chat/:id' element={<SingleChatView />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
          </View>
        </ImageBackground>
        
    );
};

export default Main;