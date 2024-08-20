import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LiveSectionPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Section Screen</Text>
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

export default LiveSectionPage;
