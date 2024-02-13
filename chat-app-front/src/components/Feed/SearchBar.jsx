import { StyleSheet, View, TextInput as NativeTextInput } from "react-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        //backgroundColor: theme.colors.green
    },
    input: {
        height: 40,
        width: 350,
        paddingStart: 20,
        borderRadius: 30,
        backgroundColor: theme.colors.creamywhite
    }
});

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.input} 
                placeholder="Search..."
            />
        </View>
    );
};

export default SearchBar;