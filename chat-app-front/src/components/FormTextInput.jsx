import { StyleSheet, TextInput as NativeTextInput, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        width: 270,
        marginBottom: 25,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 15 : 10,
        paddingBottom: Platform.OS === 'ios' ? 15: 10,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    }
});

const FormTextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <NativeTextInput
            style={styles.inputContainer}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default FormTextInput;