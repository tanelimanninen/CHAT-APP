import { StyleSheet, View, Image } from "react-native";

import Text from "../Text";
import theme from "../../theme";
//USER IMAGE IF ACCOUNT HAS NO IMAGE URI
import defaultImage from '../../../assets/icons8-user-90-darkgrey.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        marginBottom: 20,
        marginStart: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.lightblue
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15
    },
    textContainer: {
        flexGrow: 1,
        maxWidth: 205
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 45,
    },
});

const Comment = ({ comment }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                {comment.user.image ? (
                    <Image style={styles.avatar} source={{ uri: comment.user.image }} />
                ) : (
                    <Image style={styles.avatar} source={defaultImage} />
                )}
            </View>
            <View style={styles.textContainer}>
                <Text color='textBlack'>{comment.text}</Text>
            </View>
        </View>
    );
};

export default Comment;

// COMPONENT FOR USERNAME IF NEEDED
// <Text color='textBlack' fontWeight='bold'>{comment.user.username}</Text>