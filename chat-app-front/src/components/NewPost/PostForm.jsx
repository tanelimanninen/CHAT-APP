import { useState } from "react";
import { StyleSheet, View, TextInput as NativeTextInput, Pressable, Alert } from "react-native";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { CREATE_POST } from "../../graphql/mutations";

import Text from "../Text";
import Button from "../Button";

import theme from "../../theme";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputContainer: {
        textAlignVertical: 'top',
        width: '100%',
        height: 300,
        marginBottom: 40,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: theme.colors.persimmon
    },
    pressedButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 182,
        height: 52,
        borderRadius: 30,
        backgroundColor: `${theme.colors.persimmon}70`, // Opacity of 50%
    },
});

const PostForm = () => {
    const [text, setText] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [createPost] = useMutation(CREATE_POST);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            //console.log('Post pushed');
            await createPost({ variables: { text } });
            //NAVIGATE TO FEED
            navigate('/');
        } catch (error) {
            //console.error('Error creating post:', error.message);
            Alert.alert('Failed to create post', 'Post can not be empty');
        }
    };

    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer}
                value={text}
                onChangeText={setText}
                placeholder="Write your post here..."
                multiline
            />
            <Pressable 
                onPress={handleSubmit}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                style={isPressed ? styles.pressedButtonContainer : styles.buttonContainer}
            >
                <Text fontSize='subheading'>POST</Text>
            </Pressable>
        </View>
    );
};

export default PostForm;