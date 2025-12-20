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

// --- التغيير هنا ---
// دمج أسئلة Arthropods
export const arthropodsQuestions = {
  diptera: arthropodsData.diptera || [],
  arachnids: arthropodsData.arachnids || [],
  other_insects: arthropodsData.other_insects || [],
  medical_entomology: arthropodsData.medical_entomology || [],
  control_prevention: arthropodsData.control_prevention || [],
};

export const arthropodsLabels = {
  diptera: "Diptères (Moustiques/Mouches)",
  arachnids: "Arachnides (Tiques/Gale)",
  other_insects: "Autres (Poux/Puces/Punaises)",
  medical_entomology: "Entomologie Médicale",
  control_prevention: "Lutte et Prévention"
};
// ------------------

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
