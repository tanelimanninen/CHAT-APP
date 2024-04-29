import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";

import Text from "../../Text";
import ChatListItem from "./ChatListItem";
import { ALL_POSTS } from "../../../graphql/queries";


const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    text: {
        marginTop: 10,
        alignItems: 'center',
    }
});    


const ItemSeparator = () => <View style={styles.separator} />;

const ChatList = () => {
    const { loading, error, data } = useQuery(ALL_POSTS, {
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return <View style={styles.text}><Text>Loading...</Text></View>;
    if (error) return <View style={styles.text}><Text>Error: {error.message}</Text></View>;
    const posts = data.allPosts;

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => <ChatListItem post={item} />}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text fontSize='heading' style={styles.text}>No posts yet</Text>}
            />
        </View>
    );
};

export default ChatList;