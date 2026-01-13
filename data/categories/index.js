// data/categories/index.js
// 🌐 The Master Hub: Disease-Centric Data Structure (v3.2 - Stable)

// ==========================================
// 1. PROTOZOA IMPORTS
// ==========================================
import { questions as paludisme } from './protozoa/maladies/paludisme';
import { questions as amibiase } from './protozoa/maladies/amibiase';
import { questions as giardiase } from './protozoa/maladies/giardiase';
import { questions as leishmaniose } from './protozoa/maladies/leishmaniose';
import { questions as toxoplasmose } from './protozoa/maladies/toxoplasmose';
import { questions as trypanosomiase } from './protozoa/maladies/trypanosomiase';
import { questions as coccidies } from './protozoa/maladies/coccidies';
import { questions as trichomonase } from './protozoa/maladies/trichomonase';

// ==========================================
// 2. HELMINTHS IMPORTS
// ==========================================
import { questions as ascaridiose } from './helminths/maladies/ascaridiose';
import { questions as oxyurose } from './helminths/maladies/oxyurose';
import { questions as ankylostomiase } from './helminths/maladies/ankylostomiase';
import { questions as anguillulose } from './helminths/maladies/anguillulose';
import { questions as trichocephalose } from './helminths/maladies/trichocephalose';
import { questions as filarioses } from './helminths/maladies/filarioses';
import { questions as schistosomiase } from './helminths/maladies/schistosomiase';
import { questions as teniase } from './helminths/maladies/teniase';
import { questions as echinococcose } from './helminths/maladies/echinococcose';
import { questions as fasciolose } from './helminths/maladies/fasciolose';

// ==========================================
// 3. ARTHROPODS IMPORTS
// ==========================================
import { questions as gale } from './arthropods/maladies/gale';
import { questions as poux_puces } from './arthropods/maladies/poux_puces';
import { questions as tiques } from './arthropods/maladies/tiques';
import { questions as moustiques } from './arthropods/maladies/moustiques_vecteurs';
import { questions as myiases } from './arthropods/maladies/myiases';

// ==========================================
// 4. TECHNIQUES (LABO) IMPORTS - ✅ CORRECTED
// ==========================================
// هنا كان الخطأ: نستورد 'questions' ونسميها حسب التقنية
import { questions as prelevements } from './techniques/prelevements';
import { questions as coprologie } from './techniques/coprologie';
import { questions as hematologie } from './techniques/hematologie';
import { questions as colorations } from './techniques/colorations';
import { questions as immuno } from './techniques/immuno_moleculaire';

// ==========================================
// EXPORTS: STRUCTURED BY DISEASE / MODULE
// ==========================================

// 1. PROTOZOA
export const protozoaQuestions = {
  paludisme: { name: "Paludisme", data: paludisme },
  amibiase: { name: "Amibiase", data: amibiase },
  giardiase: { name: "Giardiase", data: giardiase },
  leishmaniose: { name: "Leishmaniose", data: leishmaniose },
  toxoplasmose: { name: "Toxoplasmose", data: toxoplasmose },
  trypanosomiase: { name: "Trypanosomiase", data: trypanosomiase },
  coccidies: { name: "Coccidies", data: coccidies },
  trichomonase: { name: "Trichomonase", data: trichomonase },
};

export const protozoaLabels = {
  paludisme: "Paludisme (Malaria)",
  amibiase: "Amibiase (Entamoeba)",
  giardiase: "Giardiase (Lamblia)",
  leishmaniose: "Leishmaniose",
  toxoplasmose: "Toxoplasmose",
  trypanosomiase: "Trypanosomiase",
  coccidies: "Coccidies (Crypto)",
  trichomonase: "Trichomonase"
};

// 2. HELMINTHS
export const helminthsQuestions = {
  ascaridiose: { name: "Ascaridiose", data: ascaridiose },
  oxyurose: { name: "Oxyurose", data: oxyurose },
  ankylostomiase: { name: "Ankylostomiase", data: ankylostomiase },
  anguillulose: { name: "Anguillulose", data: anguillulose },
  trichocephalose: { name: "Trichocéphalose", data: trichocephalose },
  filarioses: { name: "Filarioses", data: filarioses },
  schistosomiase: { name: "Schistosomiase", data: schistosomiase },
  teniase: { name: "Téniase & Cysticercose", data: teniase },
  echinococcose: { name: "Échinococcose", data: echinococcose },
  fasciolose: { name: "Fasciolose", data: fasciolose },
};

export const helminthsLabels = {
  ascaridiose: "Ascaridiose",
  oxyurose: "Oxyurose",
  ankylostomiase: "Ankylostomiase",
  anguillulose: "Anguillulose",
  trichocephalose: "Trichocéphalose",
  filarioses: "Filarioses",
  schistosomiase: "Schistosomiase",
  teniase: "Téniase",
  echinococcose: "Échinococcose",
  fasciolose: "Fasciolose"
};

// 3. ARTHROPODS
export const arthropodsQuestions = {
  gale: { name: "Gale", data: gale },
  poux_puces: { name: "Poux & Puces", data: poux_puces },
  tiques: { name: "Tiques", data: tiques },
  moustiques: { name: "Moustiques", data: moustiques },
  myiases: { name: "Myiases", data: myiases },
};

export const arthropodsLabels = {
  gale: "Gale (Sarcoptes)",
  poux_puces: "Poux & Puces",
  tiques: "Tiques (Ixodes, etc.)",
  moustiques: "Moustiques Vecteurs",
  myiases: "Myiases"
};

// 4. TECHNIQUES (Updated to match New Structure)
// ✅ تم تحديث هذا القسم ليطابق الهيكلة الجديدة
export const microscopyQuestions = {
  prelevements: { name: "Prélèvements", data: prelevements },
  coprologie: { name: "Coprologie", data: coprologie },
  hematologie: { name: "Hématologie", data: hematologie },
  colorations: { name: "Colorations", data: colorations },
  immuno: { name: "Immuno & Moléculaire", data: immuno },
};

export const microscopyLabels = {
  prelevements: "Prélèvements & Sécurité",
  coprologie: "Coprologie (Selles)",
  hematologie: "Hématologie (Sang)",
  colorations: "Colorations Spéciales",
  immuno: "Immuno & Moléculaire"
};

// ==========================================
// UTILITY: Get Stats per Axis
// ==========================================
export const getTotalQuestions = (categoryObj) => {
  let total = 0;
  if (!categoryObj) return 0;
  
  Object.values(categoryObj).forEach(module => {
    // If it's the new structure { name: "...", data: [...] }
    if (module.data && Array.isArray(module.data)) {
      total += module.data.length;
    } 
    // If it's the old structure (Direct array like microscopy)
    else if (Array.isArray(module)) {
      total += module.length;
    }
  });
  return total;
};