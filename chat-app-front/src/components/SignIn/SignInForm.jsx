import { StyleSheet, View } from "react-native";

import FormTextInput from "../FormTextInput";
import Button from "../Button";
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
    inputsContainer: {
        marginBottom: 5
    },
    textContainer: {
        marginTop: 50,
        marginBottom: 15
    }
});


const SignInForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <FormTextInput placeholder='Username' />
                <FormTextInput placeholder='Password' secureTextEntry={true} />
            </View>
            <Button route='/' text='SIGN IN' color='blue' />
            <Text style={styles.textContainer} color='textBlue'>Don't have an account?</Text>
            <Button route='/sign-up' text='SIGN UP' color='blue' />
        </View>
    );
};

export default SignInForm;