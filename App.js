import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  LogBox,
} from "react-native";

import IconView from "./app/components/IconView/IconView";
import ListItem from "./app/components/ListItem/ListItem";
import ScreenView from "./app/components/ScreenView/ScreenView";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { styles } from "./AppCss";

const App = () => {
  return <ListingsScreen />;
};

export default App;
