// data/categories/index.js
// 🌐 The Master Hub: Disease-Centric Data Structure (v3.0)

// ==========================================
// 1. PROTOZOA IMPORTS
// ==========================================
import { questions as paludisme } from './protozoa/maladies/paludisme';
import { questions as amibiase } from './protozoa/maladies/amibiase';
import { questions as giardiase } from './protozoa/maladies/giardiase';
import { questions as leishmaniose } from './protozoa/maladies/leishmaniose';

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
// 4. MICROSCOPY IMPORTS (No Changes)
// ==========================================
import { selles } from './microscopy/selles';
import { sang } from './microscopy/sang';
import { urines } from './microscopy/urines';
import { tissus } from './microscopy/tissus';

// ==========================================
// EXPORTS: STRUCTURED BY DISEASE
// ==========================================

// 1. PROTOZOA
export const protozoaQuestions = {
  // Key = ID of the disease module
  paludisme: { name: "Paludisme", data: paludisme },
  amibiase: { name: "Amibiase", data: amibiase },
  giardiase: { name: "Giardiase", data: giardiase },
  leishmaniose: { name: "Leishmaniose", data: leishmaniose },
};

export const protozoaLabels = {
  paludisme: "Paludisme (Malaria)",
  amibiase: "Amibiase (Entamoeba)",
  giardiase: "Giardiase (Lamblia)",
  leishmaniose: "Leishmaniose"
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

// 4. MICROSCOPY
export const microscopyQuestions = {
  selles,
  sang,
  urines,
  tissus
};

export const microscopyLabels = {
  selles: "Selles (Copro)",
  sang: "Sang (Hémato)",
  urines: "Urines & Liquides",
  tissus: "Peau & Tissus"
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