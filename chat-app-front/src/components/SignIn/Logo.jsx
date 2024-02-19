import { StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        paddingBottom: 140,
    },
    logo: {
        width: 259,
        height: 83
    }
});


const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/CHAT_ICON_WITH_TEXT_WHITE.png')}
                style={styles.logo}
            />
        </View>
    )
};

export default Logo;