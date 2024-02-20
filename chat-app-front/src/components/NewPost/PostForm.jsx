import { StyleSheet, View, TextInput as NativeTextInput, Pressable } from "react-native";

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
    }
});

const PostForm = () => {
    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer}
                placeholder="Write your post here..."
                multiline
            />
            <Button route='/' text='POST' color='persimmon' />
        </View>
    );
};

export default PostForm;