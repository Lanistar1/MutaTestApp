import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LearnPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Learning screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C24",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
});

export default LearnPage;
