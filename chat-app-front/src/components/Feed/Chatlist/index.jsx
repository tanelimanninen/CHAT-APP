import { StyleSheet, View, FlatList } from "react-native";

import ChatListItem from "./ChatListItem";

import Text from "../../Text";

import theme from "../../../theme";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
        //backgroundColor: theme.colors.persimmon
    }
});    

const chats = [
    {
      id: 'chat1',
      firstname: 'Pekka',
      lastname: 'Puupää',
      username: 'peksi',
      text: 'Haistakaa kaikki *******.',
      likes: 223,
      dislikes: 13
    },
    {
        id: 'chat2',
        firstname: 'Pasi',
        lastname: 'Kuikka',
        username: 'kusipaikka',
        text: 'Kävin kaupassa.',
        likes: 7,
        dislikes: 1
    },
    {
        id: 'chat3',
        firstname: 'Martta',
        lastname: 'Korhonen',
        username: 'Matrz',
        text: 'Ei mitään tärkeää...',
        likes: 4000,
        dislikes: 57
    },
];

const ItemSeparator = () => <View style={styles.separator} />;

const ChatList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => <ChatListItem chat={item} />}
            />
        </View>
    );
};

export default ChatList;