import { useState } from "react";
import { StyleSheet, View, TextInput as NativeTextInput, Platform, Pressable, Alert } from "react-native";
import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-native";

import { CREATE_USER } from "../../graphql/mutations";
import useLogin from "../../hooks/useLogin";

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


const SignUpForm = ({ setToken, setMode }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [createUser] = useMutation(CREATE_USER);
    const login = useLogin();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Sign up failed', 'Passwords do not match');
            return;
        }

        try {
            console.log('Create button pushed');
            // CREATE NEW USER
            await createUser({
                variables: {
                    firstname,
                    lastname,
                    username,
                    password,
                    image
                }
            });
            console.log('New user created');
            // LOG IN NEW USER (ADD THIS LATER)
            const token = await login(username, password);
            setToken(token);
            console.log('New user logged in');
            // RETURN MODE TO SIGN IN
            setMode('sign-in');
            // NAVIGATE TO FEED
            navigate('/');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='First name'
                    value={firstname}
                    onChangeText={setFirstname}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Last name'
                    value={lastname}
                    onChangeText={setLastname}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Confirm password'
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <NativeTextInput
                    style={styles.textInput}
                    placeholder='Image as URL (optional)'
                    value={image}
                    onChangeText={setImage}
                />
            </View>
            <Pressable onPress={handleSignUp} style={styles.buttonContainer}>
                <Text fontSize='subheading'>CREATE</Text>
            </Pressable>
            
        </View>
    );
};

export default SignUpForm;