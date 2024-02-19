import { StyleSheet, View, TextInput as NativeTextInput, Pressable } from "react-native";

import Text from "../Text";

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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: theme.colors.persimmon
    },
});

const PostForm = () => {
    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer}
                placeholder="Write your post here..."
                multiline
            />
            <Pressable style={styles.buttonContainer}>
                <Text fontSize='subheading'>POST</Text>
            </Pressable>
        </View>
    );
};

export default PostForm;