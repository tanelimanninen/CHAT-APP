import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    textWhite: {
        color: theme.colors.creamywhite,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    textBlack: {
        color: theme.colors.darkgrey
    },
    textBlue: {
        color: theme.colors.ashblue
    },
    textError: {
        color: theme.colors.bloodishred
    },
    textSuccess: {
        color: theme.colors.green
    },
    Subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    Heading: {
        fontSize: theme.fontSizes.heading,
    },
    Bold: {
        fontWeight: theme.fontWeights.bold
      },
  });
  
  const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
      styles.textWhite,
      color === 'textBlack' && styles.textBlack,
      color === 'textBlue' && styles.textBlue,
      color === 'textError' && styles.textError,
      color === 'textSuccess' && styles.textSuccess,
      fontSize === 'subheading' && styles.Subheading,
      fontSize === 'heading' && styles.Heading,
      fontWeight === 'bold' && styles.Bold,
      style
    ];
  
    return <NativeText style={textStyle} {...props} />;
  };
  
  export default Text;