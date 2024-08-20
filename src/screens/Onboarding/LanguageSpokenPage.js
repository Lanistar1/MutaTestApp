import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import { useNavigation } from "@react-navigation/native";

const LanguageSpokenPage = () => {
  const navigation = useNavigation();

  const onLanguageToLearnPressed = () => {
    navigation.navigate("LanguageToLearnPage");
  };

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    {
      id: 1,
      label: "I speak English",
      flag: require("../../assets/images/englishflag.png"),
    },
    {
      id: 2,
      label: "Je parle Français",
      flag: require("../../assets/images/frenchflag.png"),
    },
    {
      id: 3,
      label: "Eu falo Português",
      flag: require("../../assets/images/portugueseflag.png"),
    },
    {
      id: 4,
      label: "Yo hablo Español",
      flag: require("../../assets/images/spanishflag.png"),
    },
  ];

  const handleLanguageSelect = (id) => {
    setSelectedLanguage(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/Backbutton.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {languages.map((language) => (
        <TouchableOpacity
          key={language.id}
          style={[
            styles.languageOption,
            selectedLanguage === language.id && styles.selectedLanguage,
          ]}
          onPress={() => handleLanguageSelect(language.id)}
        >
          <Image source={language.flag} style={styles.flag} />
          <Text style={styles.languageText}>{language.label}</Text>
          {selectedLanguage === language.id && (
            <Image
              source={require("../../assets/images/Checkmark.png")}
              style={styles.checkmark}
            />
          )}
        </TouchableOpacity>
      ))}

      <CustomButton
        title="CONTINUE"
        style={[
          styles.continueButton,
          !selectedLanguage && styles.disabledButton,
        ]}
        onPress={onLanguageToLearnPressed}
        disabled={!selectedLanguage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 30,
  },
  backButton: {
    color: colors.text,
  },
  backButtonText: {
    color: "#ffffff",
  },
  languageOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    borderColor: "#2A2F3A",
    borderWidth: 1,
    marginBottom: 30,
  },
  selectedLanguage: {
    borderColor: "#ABB3C7",
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 15,
  },
  languageText: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    fontFamily: "Axiforma-Medium",
  },
  checkmark: {
    color: "#00CEC9",
    width: 20,
    height: 20,
  },
  continueButton: {
    width: "100%",
  },
  disabledButton: {
    backgroundColor: "#3B3F49",
  },
  iconContainer: {
    alignItems: "start",
    marginBottom: 20,
  },
  icon: {
    marginBottom: 30,
    marginTop: 10,
    width: 30,
    height: 30,
  },
});

export default LanguageSpokenPage;
