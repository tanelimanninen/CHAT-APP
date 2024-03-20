import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_SINGLE_POST } from "../../graphql/queries";

import Header from "../Header";
import Post from "./Post";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

import theme from "../../theme";
//import data from "../../data";
import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: theme.colors.darkgrey
    },
    listContainer: {
        flex: 1,
        marginTop: 25
    },
    text: {
        alignSelf: 'center',
    }
});

//THESE ARE FOR THE MOCK DATA USED BEFORE
//const comments = data.comments

const SinglePostView = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_SINGLE_POST, {
        variables: { id },
        fetchPolicy: 'cache-and-network'
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const post = data.singlePost;
    const comments = data.singlePost.comments
    //console.log(post)
    //console.log(comments);

    return (
        <View style={styles.container}>
            <Header text='Comments' />
            <Post post={post} />
            <CommentForm />
            <FlatList
                style={styles.listContainer} 
                data={comments}
                renderItem={({ item }) => <Comment comment={item} />}
                keyExtractor={({ id }) => id}
                ListEmptyComponent={<Text fontSize='subheading' style={styles.text}>No comments yet</Text>}
            />
        </View>
    );
};

export default SinglePostView;