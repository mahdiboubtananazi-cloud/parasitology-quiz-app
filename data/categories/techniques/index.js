// data/categories/microscopy/index.js

import { selles } from './selles';
import { sang } from './sang';
import { urines } from './urines';
import { tissus } from './tissus';

// تصدير البيانات الخام (Arrays)
export { selles, sang, urines, tissus };

// تصدير كائن الأسئلة المجمع (للاستخدام في QuizScreen)
export const microscopyQuestions = {
  selles: selles,
  sang: sang,
  urines: urines,
  tissus: tissus
};

// تصدير العناوين (للاستخدام في الفلتر)
export const microscopyLabels = {
  selles: "Selles (Copro)",
  sang: "Sang (Hémato)",
  urines: "Urines & Liquides",
  tissus: "Peau & Tissus"
};
