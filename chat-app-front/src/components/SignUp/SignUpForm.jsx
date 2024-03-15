import { StyleSheet, View, TextInput as NativeTextInput, Platform, Pressable } from "react-native";

import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    inputsContainer: {
        marginTop: 20,
        marginBottom: 15
    },
    textInput: {
        justifyContent: 'center',
        width: 270,
        marginBottom: 25,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 15 : 10,
        paddingBottom: Platform.OS === 'ios' ? 15: 10,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: theme.colors.blue
    },
});


const SignUpForm = () => {
    const handleSignUp = () => {
        //SIGN UP FUNCTIONS HERE
        console.log('Create button pushed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='First name'

                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Last name'

                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Username'
                    
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry={true}

                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Confirm password'
                    secureTextEntry={true}

                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Image as URL (optional)'
                    
                />
            </View>
            <Pressable onPress={handleSignUp} style={styles.buttonContainer}>
                <Text fontSize='subheading'>CREATE</Text>
            </Pressable>
            
        </View>
    );
};

export default SignUpForm;