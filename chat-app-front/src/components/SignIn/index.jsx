import { StyleSheet, View } from "react-native";

import Logo from "./Logo";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
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


const SignIn = ({ setToken, setMode }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <SignInForm setToken={setToken} setMode={setMode} />
        </View>
    );
};

export default SignIn;