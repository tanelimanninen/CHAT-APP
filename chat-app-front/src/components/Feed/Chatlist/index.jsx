import { StyleSheet, View, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import Text from "../../Text";
import ChatListItem from "./ChatListItem";

//MOCK DATA, TÄSSÄ VAIHEESSA KOVAKOODATTU DATA HAETAAN TIEDOSTOSTA
//import data from "../../../data";
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
        alignItems: 'center',
    }
});    


const ItemSeparator = () => <View style={styles.separator} />;

const ChatList = () => {
    const { loading, error, data } = useQuery(ALL_POSTS, {
        fetchPolicy: 'cache-and-network',
    });
    //console.log(data.allPosts);

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
            />
        </View>
    );
};

export default ChatList;