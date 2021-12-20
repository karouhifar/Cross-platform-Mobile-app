import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { styles } from "../css/welcomeScreenCSS";
export default function WelcomeSreen() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require("../assets/welcomeScreen.jpeg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
