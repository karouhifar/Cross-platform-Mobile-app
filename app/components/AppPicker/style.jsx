import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyle from "../../config/style";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: defaultStyle.text,
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
