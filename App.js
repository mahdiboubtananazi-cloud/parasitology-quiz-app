import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

// 👇 استيراد المحقق
import { runContentAudit } from './utils/contentAudit';

export default function App() {
  
  useEffect(() => {
    // 👇 تشغيل التدقيق عند الإقلاع
    // سيظهر التقرير في التيرمينال
    runContentAudit();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}