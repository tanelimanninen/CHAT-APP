import { StyleSheet, View, Image, Platform } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 80 : 60,
        paddingBottom: Platform.OS === 'ios' ? 40 : 30,
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