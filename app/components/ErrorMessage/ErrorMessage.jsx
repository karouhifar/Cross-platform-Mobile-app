import React from "react";
import { View, Text } from "react-native";
import AppText from "../AppText";
import styles from "./style";

export default function ErrorMessage({ err, visible }) {
  if (!err || !visible) return null;
  return <AppText style={styles.err}>{err}</AppText>;
}
