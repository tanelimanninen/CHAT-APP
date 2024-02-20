import { StyleSheet, View, Image } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 50,
    },
    logo: {
        width: 215,
        height: 69
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