import { useState } from "react";
import { StyleSheet, Pressable } from 'react-native';

import theme from "../../../theme";
import Text from '../../Text';

const styles = StyleSheet.create({
    pressedNavBarTab: {
        padding: 2,
        borderRadius: 5,
        backgroundColor: `${theme.colors.creamywhite}30`
    },
});


const NavBarTab = ({ text, onPress }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = async () => {
        if (onPress) {
          await onPress();
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={isPressed ? styles.pressedNavBarTab : null}
        >
                <Text fontSize='subheading'>
                    {text}
                </Text>
        </Pressable>
    );
};

export default NavBarTab;