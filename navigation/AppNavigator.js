import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// --- Import Screens ---
// تأكد من صحة المسارات في مشروعك
import HomeScreen from '../screens/home/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import DiagnosticScreen from '../screens/DiagnosticScreen';
import ProposScreen from '../screens/ProposScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 🎨 الألوان الاحترافية (Medical Theme)
const COLORS = {
  primary: '#0f172a', // Dark Navy
  accent: '#3b82f6',  // Bright Blue (Action)
  inactive: '#94a3b8', // Slate Gray
  bg: '#f8fafc',      // Very Light Gray for App Background
  white: '#ffffff',
  shadow: '#000000',
};

// --- 1. Tab Bar (الشريط السفلي العائم) ---
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // إخفاء التسميات لتصميم أنظف
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true, // إخفاء الشريط عند الكتابة
      }}
    >
      {/* Tab 1: Home */}
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons 
                name={focused ? "grid" : "grid-outline"} 
                size={26} 
                color={focused ? COLORS.primary : COLORS.inactive} 
              />
            </View>
          ),
        }}
      />

      {/* Tab 2: Quick Action (الزر العائم المركزي) */}
      <Tab.Screen
        name="QuickPlay"
        component={View} // مكون وهمي
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // منع فتح التبويب
            navigation.navigate('Quiz'); // فتح الكويز مباشرة
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.centerButtonContainer}>
              <View style={styles.centerButton}>
                <MaterialCommunityIcons name="brain" size={32} color="#fff" />
              </View>
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
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons 
                name={focused ? "book" : "book-outline"} 
                size={26} 
                color={focused ? COLORS.primary : COLORS.inactive} 
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// --- 2. Root Stack (الملاحة الرئيسية) ---
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* الشاشات الرئيسية مع الشريط السفلي */}
      <Stack.Screen name="Main" component={HomeTabs} />
      
      {/* الشاشات الكاملة (تغطي الشريط السفلي) */}
      <Stack.Screen 
        name="Diagnostic" 
        component={DiagnosticScreen} 
        options={{ presentation: 'card', animationEnabled: true }}
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{ presentation: 'card', animationEnabled: true }}
      />
    </Stack.Navigator>
  );
}

// --- 3. Styles (التصميم الجديد) ---
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25, // ارتفاع عن الحافة السفلية
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: COLORS.white,
    borderRadius: 20, // زوايا دائرية
    borderTopWidth: 0, // إزالة الخط العلوي الافتراضي
    
    // الظلال (Shadows) - تعطي تأثير الطفو
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1, // ظل ناعم
    shadowRadius: 10,
    elevation: 10, // للأندرويد
  },
  
  // حاوية الزر المركزي
  centerButtonContainer: {
    position: 'absolute',
    top: -30, // يرفع الزر ليخرج نصفه خارج الشريط
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // الدائرة الملونة نفسها
  centerButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    
    // خدعة الحدود: لون الحدود نفس لون خلفية التطبيق ليعطي إيحاء "بالقطع"
    borderWidth: 5,
    borderColor: '#f2f2f2', // ⚠️ هام: غير هذا اللون ليطابق خلفية الـ HomeScreen تماماً
    
    // ظلال للزر نفسه
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
});
