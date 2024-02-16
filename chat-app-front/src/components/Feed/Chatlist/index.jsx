import { StyleSheet, View, FlatList } from "react-native";

import ChatListItem from "./ChatListItem";

//MOCK DATA, TÄSSÄ VAIHEESSA KOVAKOODATTU DATA HAETAAN TIEDOSTOSTA
import data from "../../../data";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        //paddingTop: 20,
        padding: 10,
        //backgroundColor: theme.colors.persimmon
    }
});    

const chats = data.chats

const ItemSeparator = () => <View style={styles.separator} />;

const ChatList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => <ChatListItem chat={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ChatList;