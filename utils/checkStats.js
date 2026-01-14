// checkStats.js
// أداة سريعة لحساب عدد الأسئلة في المشروع

// استيراد البيانات (سنستخدم require لأننا سنشغله بـ Node.js)
// ملاحظة: بما أن مشروعك يستخدم ES Modules (import/export)،
// قد نحتاج لتشغيله داخل التطبيق أو تحويله.
// الأسهل: سنضيف دالة داخل التطبيق تطبع الإحصائيات عند البدء.

/* 
   بما أنك تستخدم Expo، أسهل طريقة هي إضافة هذا الكود المؤقت 
   داخل ملف `App.js` أو `screens/HomeScreen.js` 
   ليطبع التقرير في التيرمينال عند تشغيل التطبيق.
*/

import { protozoaQuestions, helminthsQuestions, arthropodsQuestions, microscopyQuestions } from '../data/categories';

export const logQuestionStats = () => {
  console.log("\n📊 --- PARAQUIZ CONTENT REPORT --- 📊\n");

  let grandTotal = 0;

  const countCategory = (name, categoryObj) => {
    let catTotal = 0;
    console.log(`🔷 CATEGORY: ${name.toUpperCase()}`);
    
    Object.keys(categoryObj).forEach(key => {
      const module = categoryObj[key];
      let count = 0;
      
      if (module.data && Array.isArray(module.data)) {
        count = module.data.length;
      } else if (Array.isArray(module)) {
        count = module.length;
      }
      
      console.log(`   • ${key.padEnd(20)} : ${count} questions`);
      catTotal += count;
    });
    
    console.log(`   👉 TOTAL ${name}: ${catTotal}\n`);
    grandTotal += catTotal;
  };

  countCategory("Protozoaires", protozoaQuestions);
  countCategory("Helminthes", helminthsQuestions);
  countCategory("Arthropodes", arthropodsQuestions);
  countCategory("Techniques", microscopyQuestions);

  console.log("-------------------------------------");
  console.log(`🏆 GRAND TOTAL QUESTIONS: ${grandTotal}`);
  console.log("-------------------------------------\n");
};