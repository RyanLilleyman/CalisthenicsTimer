import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import FloatingLabelInput from "../../universal-components/FloatingLabelInput";
import Separator from "../../universal-components/Separator";
import { Colors, Sizes } from "../../universal-components/Separator";

const SignIn2 = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#023c49",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    box: {
      backgroundColor: "rgba(0, 193, 190, 0.5)",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#03363D",
      width: 200,
      padding: 10,
      margin: 20,
      borderRadius: 10,
    },
    text: { color: "#F5F5F5", fontSize: 22, textAlign: "center" },
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.box}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FloatingLabelInput
              label="Email"
              isPassword={false}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FloatingLabelInput
              label="Password"
              isPassword={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              setSecureTextEntry={setSecureTextEntry}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <Separator label="Or" color={Colors.White} fontSize={Sizes.Large}/>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUpForm")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn2;
