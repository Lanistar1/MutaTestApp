import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import { useNavigation } from "@react-navigation/native";

const languageIcons = {
  Swahili: require("../../assets/images/Swahili.png"),
  Amharic: require("../../assets/images/Amharic.png"),
  Yoruba: require("../../assets/images/Yoruba.png"),
  Fula: require("../../assets/images/Fula.png"),
  Igbo: require("../../assets/images/Igbo.png"),
  Hausa: require("../../assets/images/Hausa.png"),
  Oromo: require("../../assets/images/Oromo.png"),
  Zulu: require("../../assets/images/Zulu.png"),
  Shona: require("../../assets/images/Shona.png"),
};

const languages = [
  { id: "1", name: "Swahili", icon: languageIcons.Swahili },
  { id: "2", name: "Amharic", icon: languageIcons.Amharic },
  { id: "3", name: "Yoruba", icon: languageIcons.Yoruba },
  { id: "4", name: "Fula", icon: languageIcons.Fula },
  { id: "5", name: "Igbo", icon: languageIcons.Igbo },
  { id: "6", name: "Hausa", icon: languageIcons.Hausa },
  { id: "7", name: "Oromo", icon: languageIcons.Oromo },
  { id: "8", name: "Zulu", icon: languageIcons.Zulu },
  { id: "9", name: "Shona", icon: languageIcons.Shona },
];

const LanguageToLearnPage = () => {
  // ======== Navigation==============
  const navigation = useNavigation();

  const ToProficiencypage = () => {
    navigation.navigate("ProficiencyPage");
  };

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const selectLanguage = (id) => {
    setSelectedLanguage(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageOption,
        selectedLanguage === item.id && styles.selectedLanguageOption,
      ]}
      onPress={() => selectLanguage(item.id)}
    >
      <Image source={item.icon} style={styles.languageIcon} />
      <Text
        style={[
          styles.languageText,
          selectedLanguage === item.id && styles.selectedLanguageText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

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
      <Text style={styles.header}>I want to learn...</Text>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.languageContainer}
        columnWrapperStyle={styles.languageRow}
      />
      <CustomButton
        title="CONTINUE"
        style={styles.continueButton}
        onPress={ToProficiencypage}
        disabled={!selectedLanguage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  backIcon: {
    fontSize: 24,
    color: colors.text,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    color: colors.text,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
  languageContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  languageRow: {
    justifyContent: "space-between",
  },
  languageOption: {
    width: "48%",
    borderColor: "#2A2F3A",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  selectedLanguageOption: {
    borderColor: colors.buttonBackground,
    borderWidth: 2,
  },
  languageIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  languageText: {
    color: "#ABB3C7",
    fontSize: 16,
    fontFamily: "Axiforma-Regular",
  },
  selectedLanguageText: {
    color: colors.buttonBackground,
  },
  continueButton: {
    marginTop: 20,
  },
  iconContainer: {
    alignItems: "start",
  },
  icon: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
});

export default LanguageToLearnPage;
