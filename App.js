import React, { useEffect } from 'react'; // 👈 لا تنسَ استيراد useEffect
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';

// 👇 استيراد البيانات لحسابها
import { 
  protozoaQuestions, 
  helminthsQuestions, 
  arthropodsQuestions, 
  microscopyQuestions 
} from './data/categories';

// دالة الحساب (يمكنك وضعها هنا مباشرة للسرعة)
const logStats = () => {
  console.log("\n📊 --- RAPPORT DE CONTENU PARAQUIZ --- 📊\n");
  let grandTotal = 0;

  const countCat = (name, obj) => {
    let subTotal = 0;
    Object.values(obj).forEach(module => {
      if (module.data) subTotal += module.data.length;
      else if (Array.isArray(module)) subTotal += module.length;
    });
    console.log(`🔹 ${name}: ${subTotal} questions`);
    grandTotal += subTotal;
  };

  countCat("Protozoaires", protozoaQuestions);
  countCat("Helminthes", helminthsQuestions);
  countCat("Arthropodes", arthropodsQuestions);
  countCat("Techniques", microscopyQuestions);

  console.log(`\n🏆 TOTAL GÉNÉRAL: ${grandTotal} Questions`);
  console.log("---------------------------------------\n");
};

export default function App() {
  
  // 👇 تشغيل العداد عند فتح التطبيق
  useEffect(() => {
    logStats();
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