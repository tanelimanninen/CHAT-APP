import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Platform, Alert } from 'react-native';
import { useNavigate } from "react-router-native";
import { useMutation } from '@apollo/client';

import { CREATE_LIKE, CREATE_DISLIKE } from '../../../graphql/mutations';
import { ALL_POSTS } from '../../../graphql/queries';

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
        width: Platform.OS === 'ios' ? 220 : 200
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
    pressedLikeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 62,
        padding: 5,
        marginEnd: 8,
        borderRadius: 5,
        backgroundColor: `${theme.colors.darkgrey}90`
    },
    pressedDislikeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 62,
        padding: 5,
        marginHorizontal: 9,
        borderRadius: 5,
        backgroundColor: `${theme.colors.darkgrey}90`
    },
    pressedCommentButton: {
        alignItems: 'center',
        width: 62,
        padding: 5,
        marginStart: 8,
        borderRadius: 5,
        backgroundColor: `${theme.colors.darkgrey}90`
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

const CardBottomRow = ({ post }) => {
    const [isPressedComment, setIsPressedComment] = useState(false);
    const [isPressedDislike, setIsPressedDislike] = useState(false);
    const [isPressedLike, setIsPressedLike] = useState(false);
    const navigate = useNavigate();

    const [createLike] = useMutation(CREATE_LIKE, {
        update: (cache, { data: { createLike } }) => {
            // GET ALL CATCHED POSTS
            const cachedData = cache.readQuery({ query: ALL_POSTS });

            // UPDATE CACHE WITH A NEW LIKE
            cache.writeQuery({
              query: ALL_POSTS,
              data: {
                allPosts: cachedData.allPosts.map(existingPost => {
                  if (existingPost.id === post.id) {
                    return {
                      ...existingPost,
                      likes: [...existingPost.likes, createLike]
                    };
                  }
                  return existingPost;
                })
              }
            });
        }
    });
    const [createDislike] = useMutation(CREATE_DISLIKE, {
        update: (cache, { data: { createDislike } }) => {
            // GET ALL CATCHED POSTS
            const cachedData = cache.readQuery({ query: ALL_POSTS });

            // UPDATE CACHE WITH A NEW DISLIKE
            cache.writeQuery({
              query: ALL_POSTS,
              data: {
                allPosts: cachedData.allPosts.map(existingPost => {
                  if (existingPost.id === post.id) {
                    return {
                      ...existingPost,
                      dislikes: [...existingPost.dislikes, createDislike]
                    };
                  }
                  return existingPost;
                })
              }
            });
        }
    });


    const handleLikes = async () => {
        try {
            await createLike({ variables: { postId: post.id } });
            console.log('Like created successfully');
        } catch (error) {
            //console.error('Failed to create like:', error);
            Alert.alert('Failed to add like', 'Post can be liked only once');
        }
    };
    
    const handleDislikes = async () => {
        try {
            await createDislike({ variables: { postId: post.id } });
            console.log('Dislike created successfully');
          } catch (error) {
            //console.error('Failed to create dislike:', error);
            Alert.alert('Failed to add dislike', 'Post can be disliked only once');
          }
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
            <Pressable
                onPress={handleLikes}
                onPressIn={() => setIsPressedLike(true)}
                onPressOut={() => setIsPressedLike(false)}
                style={isPressedLike ? styles.pressedLikeButton : styles.likeButton}
            >
                <Image style={styles.icon} source={require('../../../../assets/icons8-like-96.png')} />
                <Text color='textBlack'>{post.likes.length}</Text>
            </Pressable>
            <Pressable
                onPress={handleDislikes}
                onPressIn={() => setIsPressedDislike(true)}
                onPressOut={() => setIsPressedDislike(false)}
                style={isPressedDislike ? styles.pressedDislikeButton : styles.dislikeButton}
            >
                <Image style={styles.icon} source={require('../../../../assets/icons8-dislike-96.png')} />
                <Text color='textBlack'>{post.dislikes.length}</Text>
            </Pressable>
            <Pressable
                onPress={handleCommentsNavigation}
                onPressIn={() => setIsPressedComment(true)}
                onPressOut={() => setIsPressedComment(false)}
                style={isPressedComment ? styles.pressedCommentButton : styles.commentButton}
            >
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
            />
        </View>
    )
};

export default ChatListItem;