// utils/contentAudit.js
import { 
    protozoaQuestions, 
    helminthsQuestions, 
    arthropodsQuestions, 
    microscopyQuestions 
  } from '../data/categories';
  
  export const runContentAudit = () => {
    console.log("\n🛑 ================================================= 🛑");
    console.log("🕵️‍♂️  RAPPORT DÉTAILLÉ DU CONTENU (DATA AUDIT)  🕵️‍♂️");
    console.log("🛑 ================================================= 🛑\n");
  
    let grandTotal = 0;
  
    const auditCategory = (categoryName, dataObject) => {
      console.log(`📂 CATÉGORIE: ${categoryName.toUpperCase()}`);
      console.log("-----------------------------------------------------");
      
      let categoryTotal = 0;
      let emptyFiles = 0;
  
      Object.keys(dataObject).forEach(key => {
        const item = dataObject[key];
        let count = 0;
        let name = key;
  
        // التعامل مع الهيكل الجديد { name, group, data }
        if (item.data && Array.isArray(item.data)) {
          count = item.data.length;
          name = item.name || key;
        } 
        // التعامل مع الهيكل القديم (Array مباشر)
        else if (Array.isArray(item)) {
          count = item.length;
        }
  
        // تنسيق السطر في التيرمينال
        const statusIcon = count === 0 ? "❌ VIDE" : (count < 10 ? "⚠️ FAIBLE" : "✅");
        const paddedName = name.padEnd(25, ' '); // لمحاذاة الأسماء
        
        console.log(`${statusIcon} | ${paddedName} : ${count} questions`);
  
        if (count === 0) emptyFiles++;
        categoryTotal += count;
      });
  
      console.log("-----------------------------------------------------");
      console.log(`📊 TOTAL ${categoryName}: ${categoryTotal} (Fichiers vides: ${emptyFiles})\n`);
      grandTotal += categoryTotal;
    };
  
    // تشغيل التدقيق على الفئات الأربع
    auditCategory("Protozoaires", protozoaQuestions);
    auditCategory("Helminthes (Les Vers)", helminthsQuestions);
    auditCategory("Arthropodes", arthropodsQuestions);
    auditCategory("Techniques Labo", microscopyQuestions);
  
    console.log("=====================================================");
    console.log(`🏆 TOTAL GÉNÉRAL DE L'APPLICATION : ${grandTotal} QUESTIONS`);
    console.log("=====================================================\n");
  };