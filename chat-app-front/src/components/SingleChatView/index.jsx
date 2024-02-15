import { StyleSheet, View } from "react-native";

import Header from "./Header";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});


const SingleChatView = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
};

export default SingleChatView;