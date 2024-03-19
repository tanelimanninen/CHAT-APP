import { StyleSheet, View, Image, Platform } from "react-native";
import { Link } from "react-router-native";
import { useQuery } from '@apollo/client';
import { GET_USER } from "../graphql/queries";

import Text from "./Text";

import defaultImage from '../../assets/icons8-back-96-darkgrey.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Platform.OS === 'ios' ? 80 : 60,
        paddingBottom: 30,
        //backgroundColor: theme.colors.bloodishred
    },
    arrowIcon: {
        width: 40,
        height: 40,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 45,
    },
});

const Header = ({ text }) => {
    const { loading, error, data } = useQuery(GET_USER);

    if (loading) return <View style={styles.text}><Text>Loading...</Text></View>;
    if (error) return <View style={styles.text}><Text>Error: {error.message}</Text></View>;

    const image = data.me.image;

    return (
        <View style={styles.container}>
            <Link to='/'>
                <Image 
                    style={styles.arrowIcon}
                    source={require('../../assets/icons8-back-96.png')}
                />
            </Link>
            <Text fontSize='heading'>{text}</Text>
            {image ? (
                    <Image
                        style={styles.avatar}
                        source={{ uri: image }}
                    />
                ) : (
                    <Image 
                        style={styles.arrowIcon}
                        source={defaultImage}
                    />
                )}
        </View>
    );
};

export default Header;