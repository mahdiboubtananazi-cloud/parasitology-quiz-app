// data/categories/index.js
// 🌐 The Master Hub: All Parasites & Techniques (v4.0 - Final Worms)

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
// 2. HELMINTHS IMPORTS (UPDATED WITH NEW FILES)
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
// 👇 NEW ADDITIONS (الجدد)
import { questions as trichinellose } from './helminths/maladies/trichinellose';
import { questions as dracunculose } from './helminths/maladies/dracunculose';
import { questions as hymenolepiase } from './helminths/maladies/hymenolepiase';
import { questions as diphyllobothriase } from './helminths/maladies/diphyllobothriase';

// ==========================================
// 3. ARTHROPODS IMPORTS
// ==========================================
import { questions as gale } from './arthropods/maladies/gale';
import { questions as poux_puces } from './arthropods/maladies/poux_puces';
import { questions as tiques } from './arthropods/maladies/tiques';
import { questions as moustiques } from './arthropods/maladies/moustiques_vecteurs';
import { questions as myiases } from './arthropods/maladies/myiases';

// ==========================================
// 4. TECHNIQUES IMPORTS
// ==========================================
import { questions as prelevements } from './techniques/prelevements';
import { questions as coprologie } from './techniques/coprologie';
import { questions as hematologie } from './techniques/hematologie';
import { questions as colorations } from './techniques/colorations';
import { questions as immuno } from './techniques/immuno_moleculaire';

// ==========================================
// EXPORTS
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

// 2. HELMINTHS (UPDATED LIST)
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
  // 👇 NEW
  trichinellose: { name: "Trichinellose", data: trichinellose },
  dracunculose: { name: "Dracunculose", data: dracunculose },
  hymenolepiase: { name: "Hyménolépiase", data: hymenolepiase },
  diphyllobothriase: { name: "Diphyllobothriase", data: diphyllobothriase },
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
  fasciolose: "Fasciolose",
  // 👇 NEW
  trichinellose: "Trichinellose (Viande)",
  dracunculose: "Dracunculose (Ver de Guinée)",
  hymenolepiase: "Hyménolépiase (H. nana)",
  diphyllobothriase: "Bothriocéphalose (Poisson)",
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

// 4. TECHNIQUES
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

// Utility
export const getTotalQuestions = (categoryObj) => {
  let total = 0;
  if (!categoryObj) return 0;
  
  Object.values(categoryObj).forEach(module => {
    if (module.data && Array.isArray(module.data)) {
      total += module.data.length;
    } else if (Array.isArray(module)) {
      total += module.length;
    }
  });
  return total;
};