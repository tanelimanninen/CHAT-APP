import { StyleSheet, View, Image, Pressable, Platform } from 'react-native';
import { useNavigate } from "react-router-native";

import Text from '../../Text';
import theme from '../../../theme';
//USER IMAGE IF ACCOUNT HAS NO IMAGE URI
import defaultImage from '../../../../assets/icons8-user-90-darkgrey.png';


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: Platform.OS === 'ios' ? 340 : 320,
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
        maxWidth: Platform.OS === 'ios' ? 260 : 240
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
            {image ? (
                <Image
                    style={styles.avatar}
                    source={{ uri: image }}
                />
            ) : (
                <Image
                    style={styles.avatar}
                    source={defaultImage}
                />
            )}
                
            </View>
           <View style={styles.textContainer}>
                <Text color='textBlack' fontWeight='bold'>{user}</Text>
                <Text color='textBlack'>{text}</Text>
           </View>
        </View>
    );
};

const CardBottomRow = ({ post, likes, dislikes }) => {
    const navigate = useNavigate();

    const handleLikes = () => {
        console.log('Like pushed');
    };
    
    const handleDislikes = () => {
        console.log('Dislike pushed');
    };

    if (!post) {
        return <Text>Post not found</Text>;
    }
    
    const handleCommentsNavigation = () => {
        //console.log('Comments pushed');
    
        navigate(`/post/${post.id}`);
    };

    return (
        <View style={styles.bottomRowContainer}>
            <Pressable onPress={handleLikes} style={styles.likeButton}>
                <Image style={styles.icon} source={require('../../../../assets/icons8-like-96.png')} />
                <Text color='textBlack'>{likes}</Text>
            </Pressable>
            <Pressable onPress={handleDislikes} style={styles.dislikeButton}>
                <Image style={styles.icon} source={require('../../../../assets/icons8-dislike-96.png')} />
                <Text color='textBlack'>{dislikes}</Text>
            </Pressable>
            <Pressable onPress={handleCommentsNavigation} style={styles.commentButton}>
                <Image style={styles.icon} source={require('../../../../assets/icons8-message-96.png')} />
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
                post={post}
                likes={post.likes}
                dislikes={post.dislikes}        
            />
        </View>
    )
};

export default ChatListItem;