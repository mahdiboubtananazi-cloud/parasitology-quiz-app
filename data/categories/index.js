// data/categories/index.js
// 🌐 The Master Hub: All Parasites & Techniques (v5.0 - Grouped Filter)

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
// EXPORTS: STRUCTURED BY GROUP
// ==========================================

// 1. PROTOZOA (Grouped by Site)
export const protozoaQuestions = {
  paludisme: { name: "Paludisme", group: "Sanguins", data: paludisme },
  leishmaniose: { name: "Leishmaniose", group: "Sanguins / Tissulaires", data: leishmaniose },
  trypanosomiase: { name: "Trypanosomiase", group: "Sanguins / Tissulaires", data: trypanosomiase },
  toxoplasmose: { name: "Toxoplasmose", group: "Sanguins / Tissulaires", data: toxoplasmose },
  
  amibiase: { name: "Amibiase", group: "Intestinaux", data: amibiase },
  giardiase: { name: "Giardiase", group: "Intestinaux", data: giardiase },
  coccidies: { name: "Coccidies", group: "Intestinaux", data: coccidies },
  
  trichomonase: { name: "Trichomonase", group: "Urogénitaux", data: trichomonase },
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

// 2. HELMINTHS (Grouped by Class)
export const helminthsQuestions = {
  // Nématodes (Vers ronds)
  ascaridiose: { name: "Ascaridiose", group: "Nématodes (Ronds)", data: ascaridiose },
  oxyurose: { name: "Oxyurose", group: "Nématodes (Ronds)", data: oxyurose },
  ankylostomiase: { name: "Ankylostomiase", group: "Nématodes (Ronds)", data: ankylostomiase },
  anguillulose: { name: "Anguillulose", group: "Nématodes (Ronds)", data: anguillulose },
  trichocephalose: { name: "Trichocéphalose", group: "Nématodes (Ronds)", data: trichocephalose },
  trichinellose: { name: "Trichinellose", group: "Nématodes (Ronds)", data: trichinellose },
  filarioses: { name: "Filarioses", group: "Nématodes (Ronds)", data: filarioses },
  dracunculose: { name: "Dracunculose", group: "Nématodes (Ronds)", data: dracunculose },

  // Cestodes (Vers plats segmentés)
  teniase: { name: "Téniase & Cysticercose", group: "Cestodes (Plats)", data: teniase },
  echinococcose: { name: "Échinococcose", group: "Cestodes (Plats)", data: echinococcose },
  hymenolepiase: { name: "Hyménolépiase", group: "Cestodes (Plats)", data: hymenolepiase },
  diphyllobothriase: { name: "Bothriocéphalose", group: "Cestodes (Plats)", data: diphyllobothriase },

  // Trématodes (Vers plats non segmentés)
  schistosomiase: { name: "Schistosomiase", group: "Trématodes (Douves)", data: schistosomiase },
  fasciolose: { name: "Fasciolose", group: "Trématodes (Douves)", data: fasciolose },
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
  trichinellose: "Trichinellose",
  dracunculose: "Dracunculose",
  hymenolepiase: "Hyménolépiase",
  diphyllobothriase: "Bothriocéphalose",
};

// 3. ARTHROPODS (Grouped by Type)
export const arthropodsQuestions = {
  gale: { name: "Gale", group: "Acariens", data: gale },
  tiques: { name: "Tiques", group: "Acariens", data: tiques },
  
  poux_puces: { name: "Poux & Puces", group: "Insectes (Ectoparasites)", data: poux_puces },
  myiases: { name: "Myiases", group: "Insectes (Larves)", data: myiases },
  moustiques: { name: "Moustiques", group: "Insectes (Vecteurs)", data: moustiques },
};

export const arthropodsLabels = {
  gale: "Gale (Sarcoptes)",
  poux_puces: "Poux & Puces",
  tiques: "Tiques (Ixodes)",
  moustiques: "Moustiques Vecteurs",
  myiases: "Myiases"
};

// 4. TECHNIQUES (Grouped by Category)
export const microscopyQuestions = {
  prelevements: { name: "Prélèvements", group: "Pré-analytique", data: prelevements },
  
  coprologie: { name: "Coprologie", group: "Analytique", data: coprologie },
  hematologie: { name: "Hématologie", group: "Analytique", data: hematologie },
  colorations: { name: "Colorations", group: "Analytique", data: colorations },
  
  immuno: { name: "Immuno & Moléculaire", group: "Spécialisé", data: immuno },
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