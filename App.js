import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MyStack from "./src/navigation/MyStack";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Axiforma-Light": require("./src/assets/fonts/fonnts.com-Axiforma_Light.ttf"),
    "Axiforma-Regular": require("./src/assets/fonts/fonnts.com-Axiforma_Regular.ttf"),
    "Axiforma-Medium": require("./src/assets/fonts/fonnts.com-Axiforma_Medium.ttf"),
    "Axiforma-Black": require("./src/assets/fonts/fonnts.com-Axiforma-Black.ttf"),
    "Magica-Black": require("./src/assets/fonts/Magica.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <MyStack />
        <StatusBar
          style="auto"
          barStyle="dark-content"
          backgroundColor="#FFFFFF"
        />
      </SafeAreaView>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
