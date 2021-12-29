import { StyleSheet, Platform } from "react-native";

StyleSheet;
const fontPlatform = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "sans-serif-medium",
  },
});

export const styles = StyleSheet.create({
  text: {
    ...fontPlatform,
  },
});
