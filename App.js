// App.js - مع شريط التنقل المحسن
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QuizScreen from './screens/QuizScreen';
import ProposScreen from './screens/ProposScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Quiz') {
                // أيقونة أكثر حداثة للاختبار
                iconName = focused ? 'play-circle' : 'play-circle-outline';
              } else if (route.name === 'Propos') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#3b82f6',
            tabBarInactiveTintColor: '#9ca3af',
            headerShown: false,
            tabBarStyle: {
              // التصميم الجديد
              height: 70,
              paddingBottom: 12,
              paddingTop: 8,
              borderTopWidth: 0, // إزالة الحد العلوي
              backgroundColor: '#ffffff',
              // الظلال الجديدة
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -4, // ظلال للأعلى
              },
              shadowOpacity: 0.1,
              shadowRadius: 12,
              elevation: 8,
              // الحواف المدورة
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              // لجعل الشريط يبدو عائماً
              position: 'absolute',
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              marginTop: 2,
              letterSpacing: -0.2,
            },
          })}
        >
          <Tab.Screen 
            name="Quiz" 
            component={QuizScreen}
            options={{ 
              title: 'Quiz',
              tabBarLabel: 'Quiz',
            }}
          />
          <Tab.Screen 
            name="Propos" 
            component={ProposScreen}
            options={{ 
              title: 'À propos',
              tabBarLabel: 'À propos',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}