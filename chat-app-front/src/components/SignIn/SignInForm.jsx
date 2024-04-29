import { useState } from "react";
import { StyleSheet, View, Alert, TextInput as NativeTextInput, Platform, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import useLogin from '../../hooks/useLogin';

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
    pressedButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 182,
        height: 52,
        borderRadius: 30,
        backgroundColor: `${theme.colors.blue}70`, // Opacity of 70%
    },
});


const SignInForm = ({ setToken, setMode }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signInIsPressed, setsignInIsPressed] = useState(false);
    const [signUpIsPressed, setsignUpIsPressed] = useState(false);
    const login = useLogin();
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
          // LOG IN USER
          const token = await login(username, password);
          setToken(token);
          // NAVIGATE TO FEED
          navigate('/');
        } catch (error) {
          Alert.alert('Login failed', 'Invalid username or password');
        }
    };

    const handleNavigationToSignUp = () => {
        setMode('sign-up');
    };


    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <Pressable
                onPress={handleSignIn}
                onPressIn={() => setsignInIsPressed(true)}
                onPressOut={() => setsignInIsPressed(false)}
                style={signInIsPressed ? styles.pressedButtonContainer : styles.buttonContainer}
            >
                <Text fontSize='subheading'>SIGN IN</Text>
            </Pressable>
            <Text style={styles.textContainer} color='textBlue'>Don't have an account?</Text>
            <Pressable
                onPress={handleNavigationToSignUp}
                onPressIn={() => setsignUpIsPressed(true)}
                onPressOut={() => setsignUpIsPressed(false)}
                style={signUpIsPressed ? styles.pressedButtonContainer : styles.buttonContainer}
            >
                <Text fontSize='subheading'>SIGN UP</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;