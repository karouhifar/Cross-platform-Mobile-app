import React from "react";
import { Image } from "react-native";
import * as Yup from "yup";

import styles from "../styles/LoginScreenCSS";
import ScreenView from "../components/ScreenView/ScreenView";
import AppFormField from "../components/AppFormField/AppFormField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import AppForm from "../components/AppForm/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <ScreenView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          placeholder="Password"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </ScreenView>
  );
}
