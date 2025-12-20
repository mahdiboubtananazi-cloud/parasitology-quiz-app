import React from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // أضفنا MaterialCommunityIcons

// Import Screens
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ProposScreen from '../screens/ProposScreen';

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
  // تحديد المكتبة المستخدمة (Ionicons أو MaterialCommunityIcons)
  const IconComponent = iconLibrary === 'material' ? MaterialCommunityIcons : Ionicons;
  
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      top: Platform.OS === 'ios' ? 10 : 0, 
    }}>
      <View
        style={{
          width: 45, // تصغير الدائرة قليلاً
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
          bottom: 15, // خفضناه من 25 إلى 15 ليقترب من الحافة
          left: 15, 
          right: 15, // توسيع العرض قليلاً بتقليل الهوامش
          elevation: 4, 
          backgroundColor: '#ffffff',
          borderRadius: 15, 
          height: 60, // تقليل الارتفاع من 70 إلى 60 ليكون أقل ضخامة
          borderTopWidth: 0, 
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      }}
    >
      {/* Tab 1 - الرئيسية (لوحة التحكم) */}
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="ionic" 
              iconName={focused ? "grid" : "grid-outline"} // أيقونة Grid
            />
          ),
        }}
      />

      {/* Tab 2 - الكويز (المجهر - أنسب للطفيليات) */}
      <Tab.Screen 
        name="Quiz" 
        component={QuizStack}
        options={{
          // إخفاء الشريط في صفحة الكويز لتجنب تغطية الأزرار!
          tabBarStyle: { display: 'none' }, 
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="material" 
              iconName={focused ? "microscope" : "microscope"} // أيقونة المجهر
            />
          ),
        }}
      />

      {/* Tab 3 - المعلومات (الكتاب/المرجع) */}
      <Tab.Screen 
        name="Propos" 
        component={ProposScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon 
              focused={focused} 
              iconLibrary="ionic" 
              iconName={focused ? "book" : "book-outline"} // أيقونة الكتاب
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
