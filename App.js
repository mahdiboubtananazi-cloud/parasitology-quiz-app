import React from 'react';
import ProposScreen from './screens/ProposScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'APropos') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Quiz') {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#3b82f6',
            tabBarInactiveTintColor: '#6b7280',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 1,
              borderTopColor: '#e5e7eb',
              paddingBottom: 5,
              paddingTop: 5,
              height: 60,
            },
          })}
        >
          <Tab.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
          <Tab.Screen name="APropos" component={HomeScreen} options={{ title: 'À propos' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}