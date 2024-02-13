import { StyleSheet, View } from "react-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        paddingStart: 25,
        paddingTop: 10,
        paddingBottom: 10,
        //backgroundColor: theme.colors.bloodishred
    }
});

const Header = () => {
    return (
        <View style={styles.container}>
            <Text fontSize='subheading' fontWeight='bold'>Feed</Text>
        </View>
    );
};

export default Header;