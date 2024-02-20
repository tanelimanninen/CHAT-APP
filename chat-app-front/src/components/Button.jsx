import { StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";

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


const Button = ({ route, text, color }) => {
    const dynamicStyles = color === "blue" ? styles.backgroundBlue : styles.backgroundPersimmon;

    return (
        <Pressable style={[styles.buttonContainer, dynamicStyles]}>
            <Link to={route}>
                <Text fontSize='subheading'>{text}</Text>
            </Link>
        </Pressable>
    );
};

export default Button;