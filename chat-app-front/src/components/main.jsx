import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Route, Routes } from 'react-router-native';


//COMPONENTS
import Feed from './Feed';
import NewPost from './NewPost';
import SinglePostView from './SinglePostView';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
    container: {
      flexGrow: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    }
});

const Main = () => {
  const [token, setToken] = useState(null);
  const [mode, setMode] = useState('sign-in');

  console.log('current token: ' + token);

  //ROUTING 1: USER ISN'T AUTHENTICATED
  if (!token) {
    return (
      <ImageBackground
            source={require('../../assets/BACKGROUND_VER3-01.jpg')}
            style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Routes>
            {mode === 'sign-in' && <Route path='/' element={<SignIn setToken={setToken} setMode={setMode} />} />}
            {mode === 'sign-up' && <Route path='/' element={<SignUp setToken={setToken} setMode={setMode} />} />}
          </Routes>
        </View>
      </ImageBackground>
    )
  };

  //ROUTING 2: USER IS AUTHENTICATED
  return (
    <View style={styles.container}>
      <Routes>
        <Route path='/' element={<Feed setToken={setToken} />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/post/:id' element={<SinglePostView />} />
      </Routes>
    </View>
  );
};

export default Main;