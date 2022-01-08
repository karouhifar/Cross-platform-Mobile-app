import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  LogBox,
  TextInput,
} from "react-native";
import AppPicker from "./app/components/AppPicker/AppPicker";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen.jsx";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

const App = () => {
  return <MessagesScreen />;
};

export default App;
