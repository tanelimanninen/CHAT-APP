import { StyleSheet, View, Image } from "react-native";

import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        backgroundColor: theme.colors.creamywhite
    },
    topRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    bottomRowContainer: {
        flexDirection: 'column',
        marginTop: 10,
        paddingHorizontal: 60
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 45,
    },
    dataContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 75
    }
});

const CardTopRow = ({ image, likes, dislikes }) => {
    return (
        <View style={styles.topRowContainer}>
            <Image style={styles.avatar} source={{ uri: image }} />
            <View style={styles.dataContainer}>
                <Text color='textBlack' fontWeight='bold'>{likes}</Text>
                <Text color='textBlack' fontWeight='bold'>Likes</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text color='textBlack' fontWeight='bold'>{dislikes}</Text>
                <Text color='textBlack' fontWeight='bold'>Dislikes</Text>
            </View>
        </View>
    );
};

const CardBottomRow = ({ username, text }) => {
    return (
        <View style={styles.bottomRowContainer}>
            <Text color='textBlack' fontWeight='bold'>{username}</Text>
            <Text color='textBlack'>{text}</Text>
        </View>
    );
};

const Post = ({ chat }) => {
    return (
        <View style={styles.container}>
            <CardTopRow image={chat.image} likes={chat.likes} dislikes={chat.dislikes} />
            <CardBottomRow username={chat.username} text={chat.text} />
        </View>
    );
};

export default Post;