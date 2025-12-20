import selles from './selles';
import sang from './sang';
import tissus from './tissus';
import urines from './urines';

// المصفوفة المجمعة للعداد العام
const microscopy = [
  ...selles,
  ...sang,
  ...tissus,
  ...urines
];

export default microscopy;

// التصدير المفصل للفلترة
export {
  selles,
  sang,
  tissus,
  urines
};
