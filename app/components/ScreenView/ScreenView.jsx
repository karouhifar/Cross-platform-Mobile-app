import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { View } from "react-native-web";
import GeneralStatusBarColor from "../GeneralStatusBarColor/GeneralStatusBarColor";
import { styles } from "./style";

export default function ScreenView({ children, style, bkColor = "#000" }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <GeneralStatusBarColor
        backgroundColor={bkColor}
        barStyle="light-content"
      />
      {children}
    </SafeAreaView>
  );
}
