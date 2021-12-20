import { StyleSheet } from "react-native";
import colors from "../config/colors";
export const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  container: { backgroundColor: colors.black, flex: 1 },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
