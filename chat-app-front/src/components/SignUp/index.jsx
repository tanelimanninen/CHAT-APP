import { StyleSheet, View, Pressable } from "react-native";

import Logo from "./Logo";
import Text from "../Text";
import SignUpForm from "./SignUpForm";


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 60
    },
    returnLink: {
        alignItems: 'center',
        marginTop: 25
    }
});


const SignUp = ({ setToken, setMode }) => {
    const handleReturnNavigation = () => {
        setMode('sign-in');
    };

    return (
        <View style={styles.container}>
            <Logo />
            <Text color='textBlack' fontWeight='bold'>Sign Up</Text>
            <SignUpForm setToken={setToken} setMode={setMode} />
            <View style={styles.returnLink}>
                <Pressable onPress={handleReturnNavigation}>
                    <Text color='textBlack' fontSize='subheading'>Return</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUp;