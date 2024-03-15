//THIS COMPONENT MIGHT BE UNECESSARY

import { StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        borderRadius: 30
    },
    backgroundBlue: {
        backgroundColor: theme.colors.blue
    },
    backgroundPersimmon: {
        backgroundColor: theme.colors.persimmon
    }
});




const Button = ({ text, color, onPress }) => {
    const dynamicStyles = color === "blue" ? styles.backgroundBlue : styles.backgroundPersimmon;

    const handlePress = async () => {
        console.log('Button pressed');
        if (onPress) {
          await onPress();
        }
    };

    return (
        <Pressable onPress={handlePress} style={[styles.buttonContainer, dynamicStyles]}>
            <Text fontSize='subheading'>{text}</Text>
        </Pressable>
    );
};

export default Button;