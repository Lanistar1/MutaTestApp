// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import CustomInput from "../../components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignupWith = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  const ToSignupPage = () => {
    navigation.navigate("SignupPage");
  };

  return (
    <View style={styles.container}>
      {/* Top Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../../assets/icons/Backbutton.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      
      {/* Title */}
      <Text style={styles.title}>Sign up and start learning right away!</Text>

      {/* Social Login Buttons */}
      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <Image
          source={require("../../assets/images/Google.png")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialText}>SIGN UP WITH GOOGLE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Image
          source={require("../../assets/images/Facebook.png")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialText}>SIGN UP WITH FACEBOOK</Text>
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
        title="SIGN UP WITH EMAIL"
        onPress={ToSignupPage}
        disabled={!email}
        style={[styles.loginButton, !email ? styles.disabledButton : null]}
      />

      {/* Sign Up Link */}
      <TouchableOpacity>
        <Text style={styles.signUpText}>
          Already a Muta user? <Text style={styles.loginLink}>Log In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    padding: 20,
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
    marginBottom: 40,
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
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorText: {
    color: "#888",
    fontSize: 16,
  },
  signUpText: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  loginLink: {
    color: "#0ABAB5",
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
  disabledButton: {
    backgroundColor: "#2A474D",
    opacity: 0.5,
  },
});

export default SignupWith;
