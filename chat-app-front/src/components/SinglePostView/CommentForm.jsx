import { useState } from "react";
import { StyleSheet, View, TextInput as NativeTextInput, Pressable, Image, Platform, Alert } from "react-native";
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from "../../graphql/mutations";
import { GET_SINGLE_POST } from "../../graphql/queries";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    inputContainer: {
        textAlignVertical: 'top',
        flexGrow: 1,
        maxWidth: Platform.OS === 'ios' ? 280 : 258,
        height: 80,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.creamywhite
    },
    buttonContainer : {
        alignItems: 'flex-start',
        flexGrow: 0,
    },
    commentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 45,
        marginStart: 15,
        borderRadius: 30,
        backgroundColor: theme.colors.persimmon
    },
    pressedCommentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 82,
        height: 47,
        marginStart: 13,
        borderRadius: 30,
        backgroundColor: `${theme.colors.persimmon}70`, // Opacity of 70%
    },
    icon: {
        width: 30,
        height: 30,
    }
});


const CommentForm = ({ postId }) => {
    const [text, setText] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    
    const [createComment] = useMutation(CREATE_COMMENT, {
        // UPDATE FUNCTION FOR THE CACHE AFTER NEW COMMENT ADDED
        update: (cache, { data: { createComment } }) => {
            // READ POST DATA FROM CACHE
            const cachedData = cache.readQuery({
                query: GET_SINGLE_POST,
                variables: { id: postId }
            });
            // UPDATE THE POST CACHE WITH NEW COMMENT
            cache.writeQuery({
                query: GET_SINGLE_POST,
                variables: { id: postId },
                data: {
                    singlePost: {
                        ...cachedData.singlePost,
                        comments: [
                            ...cachedData.singlePost.comments,
                            createComment
                        ]
                    }
                }
            });
        }
    });

    const handleComment = async () => {
        if (text === '') {
            Alert.alert('Failed to add comment', 'Can not add empty comment');
            return;
        };

        try {
            // CREATE NEW COMMENT
            await createComment({ variables: { postId, text } });
            // CLEAR INPUT FIELD
            setText('');
        } catch (error) {
            Alert.alert('Failed to add comment', 'Something went wrong');
        }
    }

    return (
        <View style={styles.container}>
            <NativeTextInput
                style={styles.inputContainer} 
                placeholder="Write a comment here..."
                value={text}
                onChangeText={setText}
                multiline
            />
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={handleComment}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    style={isPressed ? styles.pressedCommentButton : styles.commentButton}
                >
                    <Image style={styles.icon} source={require('../../../assets/icons8-message-96.png')} />
                </Pressable>
            </View>
        </View>
    );
};

export default CommentForm;