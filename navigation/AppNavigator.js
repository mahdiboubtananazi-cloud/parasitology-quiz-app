import React from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ProposScreen from '../screens/ProposScreen';
import DiagnosticScreen from '../screens/DiagnosticScreen'; // ✅ تم إضافة الصفحة الجديدة هنا

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ HomeStack
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
}

// ✅ QuizStack 
function QuizStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuizMain" component={QuizScreen} />
    </Stack.Navigator>
  );
}

// Custom Tab Icon Component
const CustomTabIcon = ({ focused, iconLibrary, iconName }) => {
  const IconComponent = iconLibrary === 'material' ? MaterialCommunityIcons : Ionicons;
  
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      top: Platform.OS === 'ios' ? 10 : 0, 
    }}>
      <View
        style={{
          width: 45,
          height: 45,
          borderRadius: 22.5,
          backgroundColor: focused ? '#004643' : 'transparent', 
          justifyContent: 'center',
          alignItems: 'center',
          elevation: focused ? 4 : 0,
        }}
      >
        <IconComponent 
          name={iconName} 
          size={24} 
          color={focused ? '#FFFFFF' : '#999999'} 
        />
      </View>
    </View>
  );
};

// Bottom Navigation
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 15, 
          right: 15,
          elevation: 4, 
          backgroundColor: '#ffffff',
          borderRadius: 15, 
          height: 60,
          borderTopWidth: 0, 
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      }}
    >
      {/* Tab 1 - الرئيسية */}
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

      {/* Tab 2 - الكويز */}
      <Tab.Screen 
        name="Quiz" 
        component={QuizStack}
        options={{
          tabBarStyle: { display: 'none' }, 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="material" 
              iconName={focused ? "microscope" : "microscope"} 
            />
          ),
        }}
      />

      {/* Tab 3 - التشخيص (الصفحة الجديدة) */}
      <Tab.Screen 
        name="Diagnostic" 
        component={DiagnosticScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="ionic" 
              iconName={focused ? "medkit" : "medkit-outline"} // أيقونة طبية مناسبة للتشخيص
            />
          ),
        }}
      />

      {/* Tab 4 - المعلومات */}
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
