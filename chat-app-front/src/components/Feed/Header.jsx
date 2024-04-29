import { StyleSheet, View, Image } from "react-native";
import { useQuery } from '@apollo/client';
import { GET_USER } from "../../graphql/queries";
import Text from "../Text";

// USER IMAGE IF ACCOUNT HAS NO IMAGE URI
import defaultImage from '../../../assets/icons8-user-90.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 5,
        paddingBottom: 5,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 45,
        marginStart: 5
    },
});

const Header = () => {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return <View style={styles.text}><Text>Loading...</Text></View>;
    if (error) return <View style={styles.text}><Text>Error: {error.message}</Text></View>;

    const username = data.me.username;
    const image = data.me.image;

    return (
        <View style={styles.container}>
            <Text fontSize='heading' fontWeight='bold'>Feed</Text>
            <View style={styles.userContainer}>
                <Text fontSize='subheading'>{username}</Text>
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
        </View>
    );
};

export default Header;