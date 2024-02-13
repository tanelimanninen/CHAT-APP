import { StyleSheet, View } from 'react-native';

import Text from '../../Text';

const ChatListItem = ({ chat }) => {
    return (
        <View>
            <Text>{chat.text}</Text>
        </View>
    )
};

export default ChatListItem;