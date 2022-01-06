import React from "react";
import { useFormikContext } from "formik";
import styles from "../AppText/style";
import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function AppFormField({ name, ...props }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <AppTextInput
        {...props}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage err={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}
