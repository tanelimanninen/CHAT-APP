import { Pressable } from 'react-native';

import Text from '../../Text';


const NavBarTab = ({ text, onPress }) => {
    const handlePress = async () => {
        if (onPress) {
          await onPress();
        }
    };

    return (
        <Pressable onPress={handlePress}>
                <Text fontSize='subheading'>
                    {text}
                </Text>
        </Pressable>
    );
};

export default NavBarTab;