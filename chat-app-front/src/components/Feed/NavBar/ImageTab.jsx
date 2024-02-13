import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    logo: {
      width: 60,
      height: 54,
    },
});


const ImageTab = ({ imageSource, route, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Link to={route}>
                <Image source={imageSource} style={styles.logo} />
            </Link>
        </TouchableOpacity>
    );
};

export default ImageTab;