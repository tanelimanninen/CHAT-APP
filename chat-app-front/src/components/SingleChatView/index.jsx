import { StyleSheet, View, FlatList } from "react-native";

import Header from "./Header";
import Post from "./Post";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import data from "../../data";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
});

const chat = data.chats[1]
const comments = data.comments

const SingleChatView = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Post chat={chat} />
            <FlatList 
                data={comments}
                renderItem={({ item }) => <Comment comment={item} />}
                keyExtractor={({ id }) => id}
            />
        <CommentForm />
        </View>
    );
};

export default SingleChatView;