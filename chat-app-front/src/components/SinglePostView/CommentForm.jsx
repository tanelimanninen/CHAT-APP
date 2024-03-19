import { StyleSheet, View, TextInput as NativeTextInput, Pressable, Image, Platform } from "react-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginStart: 20,
        //backgroundColor: theme.colors.green
    },
    inputContainer: {
        textAlignVertical: 'top',
        width: 260,
        height: 80,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer : {
        alignItems: 'flex-start',
    },
    commentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 40,
        marginStart: 15,
        borderRadius: 30,
        backgroundColor: theme.colors.persimmon
    },
    icon: {
        width: 30,
        height: 30,
    }
});

const CommentForm = () => {
    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer} 
                placeholder="Write a comment here..."
                multiline
            />
            <View style={styles.buttonContainer}>
                <Pressable style={styles.commentButton}>
                    <Image style={styles.icon} source={require('../../../assets/icons8-message-96.png')} />
                </Pressable>
            </View>
        </View>
    );
};

export default CommentForm;