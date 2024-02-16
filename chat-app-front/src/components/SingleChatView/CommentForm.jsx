import { StyleSheet, View, TextInput as NativeTextInput } from "react-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        width: 300,
        marginTop: 20,
        marginStart: 35,
        backgroundColor: theme.colors.green
    },
    inputContainer: {

    }
});

const CommentForm = () => {
    return (
        <View style={styles.container}>
            <Text>Uutta komenttia</Text>
        </View>
    );
};

export default CommentForm;