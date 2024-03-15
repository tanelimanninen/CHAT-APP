import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Link } from "react-router-native";

import Text from '../../Text';
import theme from '../../../theme';

import defaultImage from '../../../../assets/icons8-customer-96.png'


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    },
    topRowContainer: {
        flexDirection: "row",
        flexGrow: 1,
        marginBottom: 10
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 20
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 45,
    },
    textContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: 260
    },
    bottomRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    likeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        padding: 5,
        marginEnd: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.green
    },
    dislikeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.bloodishred
    },
    commentButton: {
        alignItems: 'center',
        width: 60,
        padding: 5,
        marginStart: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.persimmon
    },
    icon: {
        width: 20,
        height: 20,
        marginEnd: 5
    }
});


const CardTopRow = ({ text, image, user }) => {

    return (
        <View style={styles.topRowContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: image }}
                    defaultSource={defaultImage}
                />
            </View>
           <View style={styles.textContainer}>
                <Text color='textBlack' fontWeight='bold'>{user}</Text>
                <Text color='textBlack'>{text}</Text>
           </View>
        </View>
    );
};

const CardBottomRow = ({ likes, dislikes }) => {
    return (
        <View style={styles.bottomRowContainer}>
            <Pressable style={styles.likeButton}>
                <Image style={styles.icon} source={require('../../../../assets/icons8-like-96.png')} />
                <Text color='textBlack'>{likes}</Text>
            </Pressable>
            <Pressable style={styles.dislikeButton}>
                <Image style={styles.icon} source={require('../../../../assets/icons8-dislike-96.png')} />
                <Text color='textBlack'>{dislikes}</Text>
            </Pressable>
            <Pressable style={styles.commentButton}>
                <Link to='/chat/:id'>
                    <Image style={styles.icon} source={require('../../../../assets/icons8-message-96.png')} />
                </Link>
            </Pressable>
        </View>
    );
};

const ChatListItem = ({ post }) => {
    return (
        <View style={styles.container}>
            <CardTopRow
                image={post.user.image}
                text={post.text}
                user={post.user.username}
            />
            <CardBottomRow
                likes={post.likes}
                dislikes={post.dislikes}        
            />
        </View>
    )
};

export default ChatListItem;