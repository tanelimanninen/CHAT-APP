import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        width: 270,
        marginBottom: 25,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    }
});

const FormTextInput = ({ placeholder, secureTextEntry }) => {
    return (
        <NativeTextInput
            style={styles.inputContainer}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default FormTextInput;