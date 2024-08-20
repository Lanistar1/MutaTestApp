import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../screens/Onboarding/WelcomePage";
import LanguageSpokenPage from "../screens/Onboarding/LanguageSpokenPage";
import LanguageToLearnPage from "../screens/Onboarding/LanguageToLearnPage";
import ProficiencyPage from "../screens/Onboarding/ProficiencyPage";
import LoginWith from "../screens/LoginScreen/LoginWith";
import SignupWith from "../screens/Onboarding/SignupWith";
import LoginPage from "../screens/LoginScreen/LoginPage";
import SignupPage from "../screens/Onboarding/SignupPage";
import BottomTabNavigator from "../navigation/BottomTabNavigator";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="LoginWith" component={LoginWith} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen
          name="LanguageSpokenPage"
          component={LanguageSpokenPage}
        />
        <Stack.Screen
          name="LanguageToLearnPage"
          component={LanguageToLearnPage}
        />
        <Stack.Screen name="ProficiencyPage" component={ProficiencyPage} />
        <Stack.Screen name="SignupWith" component={SignupWith} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
