import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  StatusBar,
  Dimensions,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeSreen from "./app/screens/WelcomeSreen";

import { styles } from "./AppCss";

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor="orange" />
      <WelcomeSreen />
    </SafeAreaView>
  );
}
