import { Platform } from 'react-native';

//RETURNS PLATFORM-BASED FONT AND SHOWS THE ACTIVE PLATFORM ON THE CONSOLE
const adjustPlatformFont = () => {
  if (Platform.OS === 'android') {
    console.log(Platform.OS)
    return 'Roboto';
  } else if (Platform.OS === 'ios') {
    console.log(Platform.OS)
    return 'Verdana';
  } else {
    // Default to System for other platforms
    return 'System';
  }
};

const theme = {
    colors: {
      persimmon: '#CD5B2A',
      bloodishred: '#C83943',
      ashblue: '#84A4D3',
      lightblue: '#DFECFF',
      darkgrey: '#363636',
      creamywhite: '#FFFAEE',
      green: '#50B414'
    },
    fonts: {
      main: adjustPlatformFont()
    },
    fontSizes: {
      body: 14,
      subheading: 18,
      heading: 22
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
};

export default theme;