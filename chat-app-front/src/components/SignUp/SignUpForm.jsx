import { StyleSheet, View } from "react-native";

import FormTextInput from "../FormTextInput";
import Button from "../Button";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    inputsContainer: {
        marginTop: 20,
        marginBottom: 15
    }
});


const SignUpForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <FormTextInput placeholder='First name' />
                <FormTextInput placeholder='Last name' />
                <FormTextInput placeholder='Username' />
                <FormTextInput placeholder='Password' />
                <FormTextInput placeholder='Confirm password' />
            </View>
            <Button route='/' text='CREATE' color='blue' />
        </View>
    );
};

export default SignUpForm;