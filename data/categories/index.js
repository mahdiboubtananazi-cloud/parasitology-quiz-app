import * as protozoaData from './protozoa';
import * as helminthsData from './helminths';
import * as arthropodsData from './arthropods';
import * as microscopyData from './microscopy'; // <-- استيراد القسم الجديد

// 1. Protozoa (Protozoaires)
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

// 2. Helminths (Helminthes)
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

// 3. Arthropods (Arthropodes)
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

// 4. Microscopy (Diagnostic Microscopique - TP) -- القسم الجديد --
export const microscopyQuestions = {
  selles: microscopyData.selles || [],
  sang: microscopyData.sang || [],
  tissus: microscopyData.tissus || [],
  urines: microscopyData.urines || [],
};

export const microscopyLabels = {
  selles: "Examen des Selles (Copro)",
  sang: "Examen Sanguin (Frottis/GE)",
  tissus: "Cutané & Tissus (Biopsie)",
  urines: "Examen des Urines"
};

// Utility: حساب إجمالي الأسئلة
export const getTotalQuestions = (questions) => {
  let total = 0;
  if (!questions) return 0;
  Object.keys(questions).forEach(key => {
    if (Array.isArray(questions[key])) {
      total += questions[key].length;
    }
  });
  return total;
};

// Logging for Debugging
console.log('📊 Protozoa:', getTotalQuestions(protozoaQuestions), 'questions');
console.log('📊 Helminths:', getTotalQuestions(helminthsQuestions), 'questions');
console.log('📊 Arthropods:', getTotalQuestions(arthropodsQuestions), 'questions');
console.log('📊 Microscopy:', getTotalQuestions(microscopyQuestions), 'questions'); // <-- العداد الجديد
