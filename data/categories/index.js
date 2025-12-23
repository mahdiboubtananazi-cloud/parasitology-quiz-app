// data/categories/index.js
// 🌐 The Central Hub for All Quiz Data

// 1. Import Sub-Modules
import * as protozoaData from './protozoa';
import * as helminthsData from './helminths';
import * as arthropodsData from './arthropods';

// 2. Import Microscopy Modules DIRECTLY (لتجنب مشاكل التصدير)
import { selles } from './microscopy/selles';
import { sang } from './microscopy/sang';
import { urines } from './microscopy/urines';
import { tissus } from './microscopy/tissus';

// ==========================================
// 1. PROTOZOA
// ==========================================
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

// ==========================================
// 2. HELMINTHS
// ==========================================
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

// ==========================================
// 3. ARTHROPODS
// ==========================================
export const arthropodsQuestions = {
  diptera: arthropodsData.diptera || [],
  arachnids: arthropodsData.arachnids || [],
  other_insects: arthropodsData.other_insects || [],
  medical_entomology: arthropodsData.medical_entomology || [],
  control_prevention: arthropodsData.control_prevention || [],
};

export const arthropodsLabels = {
  diptera: "Diptères (Moustiques)",
  arachnids: "Arachnides (Tiques)",
  other_insects: "Autres Insectes",
  medical_entomology: "Entomologie",
  control_prevention: "Lutte & Prévention"
};

// ==========================================
// 4. MICROSCOPY (THE NEW SECTION) 🔬
// ==========================================
export const microscopyQuestions = {
  selles: selles || [],
  sang: sang || [],
  urines: urines || [],
  tissus: tissus || [],
};

export const microscopyLabels = {
  selles: "Selles (Copro)",
  sang: "Sang (Hémato)",
  urines: "Urines & Liquides",
  tissus: "Peau & Tissus"
};

// ==========================================
// Utility
// ==========================================
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
