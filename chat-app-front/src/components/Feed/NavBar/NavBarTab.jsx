import { Pressable } from 'react-native';
import { Link } from "react-router-native";

import Text from '../../Text';


const NavBarTab = ({ text, route, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Link to={route}>
                <Text fontSize='subheading'>
                    {text}
                </Text>
            </Link>
        </Pressable>
    );
};

export default NavBarTab;