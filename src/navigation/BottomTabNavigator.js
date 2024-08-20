import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomeScreen/HomePage';
import LearnPage from '../screens/LearnScreen/LearnPage';
import LiveSectionPage from '../screens/LiveSessionScreen/LiveSectionPage';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Learn') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Live Session') {
            iconName = focused ? 'headset' : 'headset-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CA6A8',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#1B1E26', 
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Learn" component={LearnPage} />
      <Tab.Screen name="Live Session" component={LiveSectionPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
