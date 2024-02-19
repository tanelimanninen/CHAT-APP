import { StyleSheet, View, TextInput as NativeTextInput, Pressable } from "react-native";
import { Link } from "react-router-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 60,
        borderRadius: 40,
        backgroundColor: theme.colors.darkgrey
    },
    inputContainer: {
        justifyContent: 'center',
        width: 270,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: theme.colors.blue
    },
    textContainer : {
        marginTop: 50,
        marginBottom: 5
    }
});


const SignInForm = () => {
    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer}
                placeholder='Username'
            />
            <NativeTextInput
                style={styles.inputContainer}
                placeholder='Password'
            />
            <Pressable style={styles.buttonContainer}>
                <Text fontSize='subheading'>SIGN IN</Text>
            </Pressable>
            <Text style={styles.textContainer} color='textBlue'>Don't have an account?</Text>
            <Pressable style={styles.buttonContainer}>
                <Link to='tähän tulee linkki rekisteröintiin'>
                    <Text fontSize='subheading'>SIGN UP</Text>
                </Link>
            </Pressable>
        </View>
    );
};

export default SignInForm;