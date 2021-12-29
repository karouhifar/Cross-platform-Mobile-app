import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { View } from "react-native-web";
import GeneralStatusBarColor from "../GeneralStatusBarColor/GeneralStatusBarColor";
import { styles } from "./style";

export default function ScreenView({ children, style, bkColor = "#" }) {
  StatusBar.setBarStyle("red", true);
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GeneralStatusBarColor
        backgroundColor="#772ea2"
        barStyle="light-content"
      />
      {children}
    </SafeAreaView>
  );
}
