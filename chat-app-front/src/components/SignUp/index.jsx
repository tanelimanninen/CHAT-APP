import { StyleSheet, View } from "react-native";

import Logo from "./Logo";
import Text from "../Text";
import SignUpForm from "./SignUpForm";


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 60
    }
});


const SignUp = () => {
    return (

            <View style={styles.container}>
                <Logo />
                <Text color='textBlack' fontWeight='bold'>Sign Up</Text>
                <SignUpForm />
            </View>
    );
};

export default SignUp;