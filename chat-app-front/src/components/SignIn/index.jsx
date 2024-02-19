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
});


const SignIn = () => {
    return (
        <ImageBackground
            source={require('../../../assets/BACKGROUND_VER3-01.jpg')} // replace with the path to your image
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