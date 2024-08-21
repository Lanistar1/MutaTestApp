import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };

  const handleLoginPress = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    const loginPayload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://muta-app.fastgenapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });

      const data = await response.json();

      if (!data.error) {
        // Handle successful login
        Alert.alert("Success", "Login successful!");

        // Navigate to the main app or home screen
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });

      } else {
        // Handle login failure
        Alert.alert("Login Failed", data.message || "Invalid credentials.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while trying to log in.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/icons/Backbutton.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Enter your password</Text>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={handleEmailChange}
        />

        <CustomInput
          label="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={secureTextEntry}
          onToggleSecure={toggleSecureTextEntry}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <CustomButton
          title="LOG IN"
          onPress={handleLoginPress}
          disabled={!email || !password || loading}
          style={[
            styles.loginButton,
            (!email || !password || loading) ? styles.disabledButton : null,
          ]}
          loading={loading} // Optionally add loading state to the button
        />

        <TouchableOpacity>
          <Text style={styles.signupText}>
            Don’t have a Muta account?{" "}
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191B20",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  iconContainer: {
    alignItems: "start",
    marginBottom: 20,
  },
  icon: {
    marginTop: 0,
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Axiforma-Medium",
  },
  forgotPasswordText: {
    color: "#7E7E7E",
    fontSize: 14,
    textAlign: "left",
    marginBottom: 20,
  },
  loginButton: {
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: "#2A474D",
  },
  signupText: {
    textAlign: "center",
    color: "#7E7E7E",
  },
  signupLink: {
    color: colors.linkActive,
    textDecorationLine: "underline",
  },
});

export default LoginPage;
