import { StyleSheet, View } from "react-native";

import Header from "../Header";
import PostForm from "./PostForm";


const styles = StyleSheet.create({
    container: {
        
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