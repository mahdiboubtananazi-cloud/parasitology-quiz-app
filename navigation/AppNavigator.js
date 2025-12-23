import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen'; 
import DiagnosticScreen from '../screens/DiagnosticScreen';
import ProposScreen from '../screens/ProposScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 🎨 الألوان الاحترافية
const COLORS = {
  primary: '#0f172a', // Dark Navy (Professional)
  accent: '#3b82f6',  // Bright Blue (Action)
  inactive: '#94a3b8', // Gray
  bg: '#ffffff'
};

// --- 1. Tab Bar (الشريط السفلي - يظهر فقط في الرئيسية) ---
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // نخفي النصوص ليكون الشكل أنظف
        tabBarStyle: styles.tabBar,
      }}
    >
      {/* Tab 1: Home */}
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "grid" : "grid-outline"} size={24} color={focused ? COLORS.primary : COLORS.inactive} />
          ),
        }}
      />

      {/* Tab 2: Quick Action (زر وهمي يفتح الكويز) */}
      <Tab.Screen 
        name="QuickPlay" 
        component={View} // مكون فارغ لأننا سنستولي على الضغط
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // نمنع فتح التبويب
            navigation.navigate('Quiz'); // نذهب للكويز بملء الشاشة
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerButton}>
              <MaterialCommunityIcons name="brain" size={28} color="#fff" />
            </View>
          ),
        }}
      />

      {/* Tab 3: Propos */}
      <Tab.Screen 
        name="ProposTab" 
        component={ProposScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "book" : "book-outline"} size={24} color={focused ? COLORS.primary : COLORS.inactive} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// --- 2. Root Stack (الملاحة الرئيسية) ---
// هنا السر: الكويز والتشخيص هما "Stacks" فوق الـ "Tabs"
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* التطبيق الأساسي (الرئيسية بالشريط السفلي) */}
      <Stack.Screen name="Main" component={HomeTabs} />
      
      {/* الشاشات التي تغطي الشريط السفلي (Fullscreen) */}
      <Stack.Screen 
        name="Diagnostic" 
        component={DiagnosticScreen} 
        options={{ 
          presentation: 'card', // حركة دخول طبيعية
          animationEnabled: true
        }} 
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{ 
          presentation: 'card',
          animationEnabled: true
        }} 
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0, // إزالة الظل القديم
    backgroundColor: COLORS.bg,
    borderTopColor: '#f1f5f9', // خط رفيع جداً
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 85 : 60, // ارتفاع مريح
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.accent, // الزر الأزرق المميز
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 30 : 20, // يرتفع قليلاً عن الشريط
    elevation: 5,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
});
