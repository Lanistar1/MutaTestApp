// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const LoginWith = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const ToLoginPage = () => {
    navigation.navigate("LoginPage");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <View style={styles.container}>
        {/* Top Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/Backbutton.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={styles.title}>Log in to Muta</Text>

        {/* Social Login Buttons */}
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image
            source={require("../../assets/images/Google.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>LOG IN WITH GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image
            source={require("../../assets/images/Facebook.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>LOG IN WITH FACEBOOK</Text>
        </TouchableOpacity>

        {/* OR Separator */}
        {/* <View style={styles.separatorContainer}>
        <Text style={styles.separatorText}>OR</Text>
      </View> */}

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Email Input */}
        <CustomInput
          label="Enter email address"
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
          onClear={() => setEmail("")}
        />

        {/* Log in Button */}
        <CustomButton
          title="LOG IN WITH EMAIL"
          onPress={ToLoginPage}
          disabled={!email}
          style={[styles.loginButton, !email ? styles.disabledButton : null]}
        />

        {/* Sign Up Link */}
        <TouchableOpacity>
          <Text style={styles.signUpText}>
            Don’t have a Muta account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 20,
    alignContent: "center",
  },
  icon: {
    marginBottom: 30,
    marginTop: 20,
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Axiforma-Black",
    marginBottom: 50,
    marginTop: 0,
    textAlign: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
  },
  facebookButton: {
    backgroundColor: "#ffffff",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    color: "#2F3540",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Axiforma-Black",
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
  orText: {
    marginHorizontal: 10,
    color: "#ABB3C7",
    fontSize: 14,
    fontFamily: "Axiforma-Black",
  },
  separatorText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
  },
  signUpText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  signUpLink: {
    color: "#0ABAB5",
  },
  disabledButton: {
    backgroundColor: "#2A474D",
    opacity: 0.5,
  },
});

export default LoginWith;
