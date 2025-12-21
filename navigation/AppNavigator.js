import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ProposScreen from '../screens/ProposScreen';
import DiagnosticScreen from '../screens/DiagnosticScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// --- Stacks ---
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function QuizStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuizMain" component={QuizScreen} />
    </Stack.Navigator>
  );
}

// --- Custom Tab Icon (Minimalist & Modern) ---
const CustomTabIcon = ({ focused, iconLibrary, iconName, label }) => {
  const IconComponent = iconLibrary === 'material' ? MaterialCommunityIcons : Ionicons;
  const activeColor = '#0F766E'; // Teal Professional
  const inactiveColor = '#94A3B8'; // Slate Gray

  return (
    <View style={styles.iconWrapper}>
      <IconComponent 
        name={iconName} 
        size={26} 
        color={focused ? activeColor : inactiveColor} 
        style={{ marginBottom: 4 }}
      />
      {/* Optional: Dot indicator instead of full background */}
      {focused && <View style={[styles.activeDot, { backgroundColor: activeColor }]} />}
    </View>
  );
};

// --- Bottom Navigation ---
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // We handle visuals in the icon component
        tabBarStyle: styles.floatingTabBar,
      }}
    >
      {/* Tab 1 - Dashboard */}
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="ionic" 
              iconName={focused ? "grid" : "grid-outline"} 
            />
          ),
        }}
      />

      {/* Tab 2 - Quiz (Theoretical) */}
      <Tab.Screen 
        name="Quiz" 
        component={QuizStack}
        options={{
          tabBarStyle: { display: 'none' }, // Hide tab bar inside quiz
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="material" 
              iconName={focused ? "brain" : "brain"} // Corrected Logic: Quiz = Brain/Learning
            />
          ),
        }}
      />

      {/* Tab 3 - Diagnostic (Microscope) */}
      <Tab.Screen 
        name="Diagnostic" 
        component={DiagnosticScreen}
        options={{
          tabBarStyle: { display: 'none' }, // Hide tab bar during focus mode
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="material" 
              iconName="microscope" // Corrected Logic: Diagnostic = Microscope
            />
          ),
        }}
      />

      {/* Tab 4 - Atlas/Info */}
      <Tab.Screen 
        name="Propos" 
        component={ProposScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="ionic" 
              iconName={focused ? "book" : "book-outline"} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  floatingTabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 10, // High elevation for floating effect
    backgroundColor: '#ffffff',
    borderRadius: 24, // Softer roundness
    height: 64,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    paddingBottom: 0, // Fix alignment on some Androids
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 12 : 0,
    height: '100%',
  },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 2,
  }
});
