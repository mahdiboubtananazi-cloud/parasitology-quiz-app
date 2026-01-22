import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'; // استخدام Feather للأناقة

// --- Import Screens ---
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import DiagnosticScreen from '../screens/DiagnosticScreen';
import ProposScreen from '../screens/ProposScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const COLORS = {
  primary: '#0f172a', 
  active: '#0f766e',  // Teal (Medical & Modern)
  inactive: '#94a3b8',
  white: '#ffffff',
  bg: '#F8FAFC',      // لون الخلفية (مهم لحدود الزر العائم)
};

// زر مركزي مخصص (Custom Floating Button)
const CenterButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.centerButtonContainer}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View style={styles.centerButton}>
      <MaterialCommunityIcons name="microscope" size={32} color="#fff" />
    </View>
  </TouchableOpacity>
);

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // تصميم بدون نصوص (Minimalist)
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* Tab 1: Accueil (Dashboard Style) */}
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <MaterialCommunityIcons 
                name={focused ? "view-dashboard" : "view-dashboard-outline"} 
                size={26} 
                color={focused ? COLORS.active : COLORS.inactive} 
              />
            </View>
          ),
        }}
      />

      {/* Tab 2: Labo-Vision (Center Action) */}
      <Tab.Screen
        name="LaboVision"
        component={View} 
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); 
            navigation.navigate('Diagnostic'); // فتح المختبر
          },
        })}
        options={{
          tabBarButton: (props) => <CenterButton {...props} />,
        }}
      />

      {/* Tab 3: À Propos (Reference Style) */}
      <Tab.Screen
        name="ProposTab"
        component={ProposScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconBg]}>
              <Feather 
                name="book-open" 
                size={24} 
                color={focused ? COLORS.active : COLORS.inactive} 
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// --- Root Stack Navigator ---
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={HomeTabs} />
      
      {/* Screens covering tabs */}
      <Stack.Screen 
        name="Diagnostic" 
        component={DiagnosticScreen} 
        options={{ 
          presentation: 'card', 
          animationEnabled: true,
          // حركة دخول سلسة من اليمين (iOS Style)
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{ presentation: 'card', animationEnabled: true }}
      />
    </Stack.Navigator>
  );
}

// --- Modern Styles ---
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25, 
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: COLORS.white,
    borderRadius: 24, // زوايا أكثر نعومة
    borderTopWidth: 0, 
    
    // Premium Shadow (Soft Glow)
    shadowColor: "#004643",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08, 
    shadowRadius: 20,
    elevation: 10,
  },
  
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 18,
  },
  activeIconBg: {
    backgroundColor: '#F0FDFA', // خلفية ناعمة جداً عند التفعيل
  },

  centerButtonContainer: {
    top: -25, // طفو للأعلى
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#0F766E', // لون طبي مميز
    justifyContent: 'center',
    alignItems: 'center',
    
    // حدود وهمية لدمج الزر مع الخلفية
    borderWidth: 4,
    borderColor: COLORS.bg, 
    
    // ظل داخلي للزر
    shadowColor: "#0F766E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});