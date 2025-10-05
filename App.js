// App.js - بدون تأثير ضغط
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Animated, View, Pressable } from 'react-native';

import QuizScreen from './screens/QuizScreen';
import ProposScreen from './screens/ProposScreen';

const Tab = createBottomTabNavigator();

// مكون أيقونة محسن بدون تأثير ضغط
const EnhancedTabIcon = ({ focused, routeName, color, size }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.15 : 1,
      tension: 150,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  const getIconName = () => {
    if (routeName === 'Quiz') {
      return focused ? 'bulb' : 'bulb-outline';
    } else if (routeName === 'Info') {
      return focused ? 'book' : 'book-outline';
    }
  };

  return (
    <Animated.View style={{ 
      transform: [{ scale: scaleAnim }],
      alignItems: 'center'
    }}>
      <Ionicons name={getIconName()} size={size} color={color} />
      {/* مؤشر نشط بسيط */}
      {focused && (
        <View style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: color,
          marginTop: 4,
        }} />
      )}
    </Animated.View>
  );
};

// زر مخصص بدون تأثيرات ضغط
const CustomTabBarButton = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => ({
      // لا تأثيرات للضغط
      opacity: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    })}
    android_ripple={null} // إزالة تأثير Ripple على Android
  >
    {children}
  </Pressable>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <EnhancedTabIcon 
                focused={focused}
                routeName={route.name}
                color={color}
                size={size}
              />
            ),
            tabBarActiveTintColor: '#4f46e5',
            tabBarInactiveTintColor: '#64748b',
            headerShown: false,
            tabBarStyle: {
              height: 80,
              paddingBottom: 18,
              paddingTop: 12,
              borderTopWidth: 0,
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -8,
              },
              shadowOpacity: 0.12,
              shadowRadius: 20,
              elevation: 15,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 15,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.8)',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '700',
              marginTop: 6,
              letterSpacing: -0.2,
            },
            tabBarItemStyle: {
              borderRadius: 12,
              marginHorizontal: 4,
              // إزالة خلفية الضغط
              backgroundColor: 'transparent',
            },
            // استخدام الزر المخصص بدون تأثيرات
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          })}
        >
          <Tab.Screen 
            name="Quiz" 
            component={QuizScreen}
            options={{ 
              tabBarLabel: 'QUIZ',
            }}
          />
          <Tab.Screen 
            name="Info"
            component={ProposScreen}
            options={{ 
              tabBarLabel: 'INFO',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}