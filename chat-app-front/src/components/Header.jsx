import { StyleSheet, View, Image } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 60,
        paddingBottom: 30,
        //backgroundColor: theme.colors.bloodishred
    },
    arrowIcon: {
        width: 40,
        height: 40,
    }
});

const Header = ({ text }) => {
    return (
        <View style={styles.container}>
            <Link to='/'>
                <Image 
                    style={styles.arrowIcon}
                    source={require('../../assets/icons8-back-96.png')}
                />
            </Link>
            <Text fontSize='heading'>{text}</Text>
            <Image 
                style={styles.arrowIcon}
                source={require('../../assets/icons8-back-96-darkgrey.png')}
            />
        </View>
    );
};

export default Header;