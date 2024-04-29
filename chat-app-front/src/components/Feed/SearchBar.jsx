import { StyleSheet, View, TextInput as NativeTextInput, Image } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 30,
        backgroundColor: theme.colors.creamywhite,
      },
      input: {
        flex: 1, 
        height: 40,
      },
      icon: {
        width: 20,
        height: 20,
        marginHorizontal: 15
      },
});


const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/icons8-search-30.png')}
                style={styles.icon}
            />
            <NativeTextInput
                style={styles.input} 
                placeholder="Search..."
            />
        </View>
    );
};

export default SearchBar;