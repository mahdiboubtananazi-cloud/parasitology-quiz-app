// navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ProposScreen from '../screens/ProposScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack للصفحة الرئيسية
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
}

// Stack للكويز
function QuizStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuizMain" component={QuizScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
}

// Bottom Navigation - 3 تابات فقط
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Quiz') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'Propos') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#004643',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      {/* Tab 1 - الرئيسية */}
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarLabel: 'Accueil',
        }}
      />

      {/* Tab 2 - الكويز */}
      <Tab.Screen 
        name="Quiz" 
        component={QuizStack}
        options={{
          tabBarLabel: 'Quiz',
        }}
      />

      {/* Tab 3 - المعلومات */}
      <Tab.Screen 
        name="Propos" 
        component={ProposScreen}
        options={{
          tabBarLabel: 'À propos',
        }}
      />
    </Tab.Navigator>
  );
}