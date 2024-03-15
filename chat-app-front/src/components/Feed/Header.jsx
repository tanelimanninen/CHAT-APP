import { StyleSheet, View } from "react-native";
import { useQuery } from '@apollo/client';
import { GET_ME } from "../../graphql/queries";
import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        paddingStart: 25,
        paddingTop: 10,
        paddingBottom: 10,
        //backgroundColor: theme.colors.bloodishred
    }
});

const Header = () => {
    //const { loading, error, data } = useQuery(GET_ME);

    //if (loading) return <View style={styles.text}><Text>Loading...</Text></View>;
    //if (error) return <View style={styles.text}><Text>Error: {error.message}</Text></View>;

    //const currentUser = data.me;

    return (
        <View style={styles.container}>
            <Text fontSize='heading' fontWeight='bold'>Feed</Text>
        </View>
    );
};

export default Header;