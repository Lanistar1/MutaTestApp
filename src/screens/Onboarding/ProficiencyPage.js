import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/Button";
import colors from "../../components/colors";
import { useNavigation } from "@react-navigation/native";

const proficiencyLevels = [
  {
    id: 1,
    level: "Novice",
    description: "I'm new to Yoruba",
    icon: require("../../assets/images/Novice.png"), // Add appropriate icon paths
  },
  {
    id: 2,
    level: "Beginner",
    description: "I know some words in Yoruba",
    icon: require("../../assets/images/Beginner.png"), // Add appropriate icon paths
  },
  {
    id: 3,
    level: "Intermediate",
    description: "I can have simple conversations in Yoruba",
    icon: require("../../assets/images/Intermediate.png"), // Add appropriate icon paths
  },
];

const ProficiencyPage = () => {
  const navigation = useNavigation();

  const ToSignupWith = () => {
    navigation.navigate("SignupWith");
  };

  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleSelection = (id) => {
    setSelectedLevel(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/icons/Backbutton.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          How would you rate your proficiency in Yoruba?
        </Text>
      </View>

      {proficiencyLevels.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.optionContainer,
            selectedLevel === item.id && styles.selectedOption,
          ]}
          onPress={() => handleSelection(item.id)}
        >
          <View style={styles.optionContent}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.levelText}>{item.level}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
            {selectedLevel === item.id && (
              <Image
                source={require("../../assets/images/Checkmark.png")}
                style={styles.checkIcon}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}

      <CustomButton
        title="CONTINUE"
        style={styles.continueButton}
        onPress={ToSignupWith}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "column",
    alignItems: "start",
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontFamily: "Axiforma-Medium",
  },
  optionContainer: {
    borderColor: "#2A2F3A",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: colors.buttonBackground,
    borderWidth: 2,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  levelText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#ABB3C7",
    fontSize: 14,
    marginTop: 5,
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  continueButton: {
    marginTop: "auto",
    marginBottom: 20,
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
});

export default ProficiencyPage;
