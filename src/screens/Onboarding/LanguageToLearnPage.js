import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "../../../context/LanguageContext";

const LanguageToLearnPage = () => {
  const navigation = useNavigation();
  const { setSelectedLanguage } = useLanguage(); // Access setSelectedLanguage from the context

  const ToProficiencyPage = () => {
    navigation.navigate("ProficiencyPage");
  };

  const [languages, setLanguages] = useState([]);
  const [localSelectedLanguage, setLocalSelectedLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          "https://muta-app.fastgenapp.com/get-all-languages"
        );
        const data = await response.json();
        if (!data.error) {
          const formattedLanguages = data.data.map((language) => ({
            id: language.language_id,
            name: language.languageName,
            icon: { uri: language.languageIcon },
          }));
          setLanguages(formattedLanguages);
        }
      } catch (error) {
        console.error("Failed to fetch languages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);


  // Saving the entire language detail to the context
  const selectLanguage = (language) => {
    setLocalSelectedLanguage(language.id);
    setSelectedLanguage(language); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageOption,
        localSelectedLanguage === item.id && styles.selectedLanguageOption,
      ]}
      onPress={() => selectLanguage(item)}
    >
      <Image source={item.icon} style={styles.languageIcon} />
      <Text
        style={[
          styles.languageText,
          localSelectedLanguage === item.id && styles.selectedLanguageText,
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
      {loading ? (
        <ActivityIndicator size="large" color={colors.buttonBackground} />
      ) : (
        <FlatList
          data={languages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.languageContainer}
          columnWrapperStyle={styles.languageRow}
        />
      )}
      <CustomButton
        title="CONTINUE"
        style={styles.continueButton}
        onPress={ToProficiencyPage}
        disabled={!localSelectedLanguage}
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
    fontSize: 20,
    color: colors.text,
    fontFamily: "Axiforma-Medium",
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
