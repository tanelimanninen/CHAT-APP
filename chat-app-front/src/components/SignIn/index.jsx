import { StyleSheet, View, ImageBackground } from "react-native";

import Logo from "./Logo";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        
      },
    container: {
        alignItems: 'center',
    },
    logoContainer: {
        width: 259,
        height: 83,
        paddingTop: 150,
        paddingBottom: 140
    }
});


const SignIn = () => {
    return (
        <ImageBackground
            source={require('../../../assets/BACKGROUND_VER3-01.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Logo />
                <SignInForm />
            </View>
        </ImageBackground>
    );
};

export default SignIn;