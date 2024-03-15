import 'dotenv/config';

export default {
    "name": "chat-app-front",
    "slug": "chat-app-front",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/CHAT_ICON_TRANSPARENT.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/CHAT_ICON_TRANSPARENT.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/CHAT_ICON_TRANSPARENT.png"
    },
    extra: {
      env: process.env.ENV,
      apolloUri: process.env.APOLLO_URI
    },
  }

