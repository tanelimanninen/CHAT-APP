import { StyleSheet, View, Image } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
    },
    arrowIcon: {
        width: 30,
        height: 30,
        marginTop: 10
    }
});


const NewPost = () => {
    return (
        <View style={styles.container}>
            <Text fontSize='heading'>New Post</Text>
            <Link to='/'>
                <Image 
                    style={styles.arrowIcon}
                    source={require('../../assets/CHAT_ICON_TRANSPARENT.png')}
                />
            </Link>
            <Text>Logoa painamalla pääset takaisin feediin</Text>
        </View>
    );
};

export default NewPost;