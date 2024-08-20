import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import { useNavigation } from '@react-navigation/native';


const WelcomePage = () => {

  const navigation = useNavigation();

  const onGetStartedPressed = () => {
    navigation.navigate("LanguageSpokenPage");
  };

  const onLoginPressed = () => {
    navigation.navigate("LoginWith");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/Welcomebgimage.png")} // Make sure to save your image in this path
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Learn languages from</Text>
          <Text style={styles.titleLarge}>Africa</Text>
          <Text style={styles.subtitle}>
            Muta helps you learn African languages in the easiest way
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton title="GET STARTED" onPress={onGetStartedPressed} />
          <CustomButton
            title="LOG IN"
            style={styles.loginButton}
            onPress={onLoginPressed}
          />
        </View>
        <Text style={styles.footerText}>
          By continuing on this app, you agree to Muta's{" "}
          <Text style={styles.linkText}>Terms of Service</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "start",
    marginBottom: 50,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontFamily: "Axiforma-Light",
    marginBottom: 5,
  },
  titleLarge: {
    color: colors.titleText,
    fontSize: 50,
    fontFamily: "Magica-Black",
  },
  subtitle: {
    color: "#ABB3C7",
    fontSize: 16,
    textAlign: "start",
    marginTop: 10,
    fontFamily: "Axiforma-Regular",
  },
  buttonsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "transparent",
    borderColor: colors.buttonBackground,
    borderWidth: 1,
    color: "#ffffff",
  },
  footerText: {
    color: colors.text,
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 30,
  },
  linkText: {
    color: colors.linkText,
  },
});

export default WelcomePage;
