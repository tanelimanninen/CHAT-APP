import { StyleSheet, View } from "react-native";

import Header from "../Header";
import PostForm from "./PostForm";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: theme.colors.darkgrey
    },
});


const NewPost = () => {
    return (
        <View style={styles.container}>
            <Header text='New Post'/>
            <PostForm />
        </View>
    );
};

export default NewPost;