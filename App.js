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
import LoginScreen from "./app/screens/LoginScreen";

const App = () => {
  return <LoginScreen />;
};

export default App;
