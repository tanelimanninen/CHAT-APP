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
    listContainer: {
        flex: 1,
        marginTop: 25
    }
});

const chat = data.chats[1]
const comments = data.comments

const SingleChatView = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Post chat={chat} />
            <CommentForm />
            <FlatList
                style={styles.listContainer} 
                data={comments}
                renderItem={({ item }) => <Comment comment={item} />}
                keyExtractor={({ id }) => id}
            />
        </View>
    );
};

export default SingleChatView;