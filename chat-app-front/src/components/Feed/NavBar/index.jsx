import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native";

//import Text from "../../Text";
import NavBarTab from "./NavBarTab";
import ImageTab from "./ImageTab";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 10,
        //backgroundColor: theme.colors.ashblue
    },
  });

const NavBar = ({ setToken }) => {
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
          //CHANGE TOKEN STATE TO NULL
          setToken(null);
          //REMOVE CURRENT TOKEN
          await AsyncStorage.removeItem('chatapp-user-token');
          console.log('Token removed');
          //RESET APOLLO CLIENT STORE
          await apolloClient.resetStore();
          console.log('Store reset');

          navigate("/");
        } catch (error) {
          console.error('Error signing out:', error);
        }
    };


    return (
        <View style={styles.container}>
            <ImageTab imageSource={require('../../../../assets/CHAT_ICON_TRANSPARENT.png')} route='/' />
            <NavBarTab text='New Post' route='/new-post' />
            <NavBarTab text='Sign Out' onPress={handleSignOut} />
        </View>
    );
};

export default NavBar;