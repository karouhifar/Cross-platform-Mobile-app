import { StyleSheet } from "react-native";
import colors from "../config/colors";
export const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  container: { backgroundColor: colors.black, flex: 1 },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
