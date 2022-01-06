import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import { styles } from "./style";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
