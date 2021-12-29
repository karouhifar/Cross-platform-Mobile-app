import React from "react";
import { Image, ImageBackground, View } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import { styles } from "../styles/welcomeScreenCSS";
export default function WelcomeSreen() {
  return (
    <ImageBackground
      blurRadius={5}
      resizeMode="cover"
      style={styles.container}
      source={require("../assets/welcomeScreen.jpeg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}
