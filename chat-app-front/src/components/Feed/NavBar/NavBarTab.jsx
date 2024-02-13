import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Text from '../../Text';

const styles = StyleSheet.create({
    tab: {



    },
});

const NavBarTab = ({ text, route, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Link to={route}>
                <Text fontSize='subheading' style={styles.tab}>
                    {text}
                </Text>
            </Link>
        </Pressable>
    );
};

export default NavBarTab;