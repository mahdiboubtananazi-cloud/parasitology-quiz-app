// data/categories/index.js - استيراد من الملفات الفرعية
import * as protozoaData from './protozoa';
import * as helminthsData from './helminths';
import * as arthropodsData from './arthropods';

// دمج أسئلة Protozoa
export const protozoaQuestions = {
  classification: protozoaData.classification || [],
  morphology: protozoaData.morphology || [],
  pathogenesis: protozoaData.pathogenesis || [],
  diagnosis: protozoaData.diagnosis || [],
  treatment: protozoaData.treatment || [],
};

export const protozoaLabels = {
  classification: "Classification",
  morphology: "Morphologie",
  pathogenesis: "Pathogénie",
  diagnosis: "Diagnostic",
  treatment: "Traitement"
};

// دمج أسئلة Helminths
export const helminthsQuestions = {
  nematodes: helminthsData.nematodes || [],
  cestodes: helminthsData.cestodes || [],
  trematodes: helminthsData.trematodes || [],
  lifecycle: helminthsData.lifecycle || [],
  clinical: helminthsData.clinical || [],
};

export const helminthsLabels = {
  nematodes: "Nématodes",
  cestodes: "Cestodes",
  trematodes: "Trématodes",
  lifecycle: "Cycle de vie",
  clinical: "Clinique"
};

// دمج أسئلة Arthropods
export const arthropodsQuestions = {
  ectoparasites: arthropodsData.ectoparasites || [],
  vectors: arthropodsData.vectors || [],
  control: arthropodsData.control || [],
  identification: arthropodsData.identification || [],
  medical: arthropodsData.medical || [],
};

export const arthropodsLabels = {
  ectoparasites: "Ectoparasites",
  vectors: "Vecteurs",
  control: "Contrôle",
  identification: "Identification",
  medical: "Importance médicale"
};

// حساب إجمالي الأسئلة
export const getTotalQuestions = (questions) => {
  let total = 0;
  Object.keys(questions).forEach(key => {
    if (Array.isArray(questions[key])) {
      total += questions[key].length;
    }
  });
  return total;
};

// للتحقق في console
console.log('📊 Protozoa:', getTotalQuestions(protozoaQuestions), 'questions');
console.log('📊 Helminths:', getTotalQuestions(helminthsQuestions), 'questions');
console.log('📊 Arthropods:', getTotalQuestions(arthropodsQuestions), 'questions');