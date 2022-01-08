import React from "react";
import { Text } from "react-native";
import { styles } from "./style";

export default function AppText({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}
