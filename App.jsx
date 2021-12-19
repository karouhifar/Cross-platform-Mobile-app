import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { styles } from "./AppCss";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "pink" }]}>
      <Button
        color="orange"
        title="Click me"
        onPress={
          () =>
            Alert.alert("My Title", "My message", [
              { text: "Yes", onPress: () => console.log("Y") },
              { text: "No", onPress: () => console.log("N") },
            ])
          // Only works in IOS
          // Alert.prompt("My Title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}
