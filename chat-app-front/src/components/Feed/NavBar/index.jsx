import { StyleSheet, View } from "react-native";

//import Text from "../Text";
import NavBarTab from "./NavBarTab";
import ImageTab from "./ImageTab";

import theme from "../../../theme";

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

const NavBar = () => {
    return (
        <View style={styles.container}>
            <ImageTab imageSource={require('../../../../assets/CHAT_ICON_TRANSPARENT.png')} route='/' />
            <NavBarTab text='New Post' route='/new-post' />
            <NavBarTab text='Sign Out' route='/sign-in' />
        </View>
    );
};

export default NavBar;