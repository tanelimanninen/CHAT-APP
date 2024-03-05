import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import Logo from "./Logo";
import Text from "../Text";
import SignUpForm from "./SignUpForm";


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 60
    },
    returnLink: {
        alignItems: 'center',
        marginTop: 25
    }
});


const SignUp = () => {
    return (

            <View style={styles.container}>
                <Logo />
                <Text color='textBlack' fontWeight='bold'>Sign Up</Text>
                <SignUpForm />
                <View style={styles.returnLink}>
                    <Link to='/sign-in'>
                        <Text color='textBlack' fontSize='subheading'>Return</Text>
                    </Link>
                </View>
            </View>
    );
};

export default SignUp;