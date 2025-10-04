export const topicLabels = {
  protozoa: 'Protozoaires',
  helminths: 'Helminthes',
  arthropods: 'Arthropodes',
  diagnosis: 'Diagnostic',
  treatment: 'Traitement',
  epidemiology: 'Épidémiologie',
  lifecycle: 'Cycle de vie',
  pathogenesis: 'Pathogenèse',
  prevention: 'Prévention',
  clinical: 'Clinique'
};

export const sampleQuestions = [
  // الأسئلة الأصلية (1-10)
  {
    id: 1,
    topic: 'protozoa',
    question: 'Lequel des protozoaires suivants cause le paludisme ?',
    options: [
      'Toxoplasma gondii',
      'Plasmodium falciparum',
      'Entamoeba histolytica',
      'Giardia lamblia'
    ],
    correctAnswer: 1,
    explanation: 'Plasmodium falciparum est l\'une des espèces de parasites du paludisme les plus dangereuses',
    difficulty: 'medium'
  },
  {
    id: 2,
    topic: 'helminths',
    question: 'Quel est l\'hôte intermédiaire des schistosomes ?',
    options: [
      'Moustiques',
      'Escargots d\'eau douce',
      'Mouches',
      'Tiques'
    ],
    correctAnswer: 1,
    explanation: 'L\'escargot d\'eau douce est l\'hôte intermédiaire nécessaire pour compléter le cycle de vie des schistosomes',
    difficulty: 'easy'
  },
  {
    id: 3,
    topic: 'diagnosis',
    question: 'Lequel des tests suivants est le plus précis pour diagnostiquer le paludisme ?',
    options: [
      'Examen des selles',
      'Frottis sanguin coloré',
      'Analyse d\'urine',
      'Radiographie'
    ],
    correctAnswer: 1,
    explanation: 'Le frottis sanguin coloré au Giemsa est la méthode standard pour diagnostiquer le paludisme',
    difficulty: 'medium'
  },
  {
    id: 4,
    topic: 'protozoa',
    question: 'Quel parasite cause la leishmaniose ?',
    options: [
      'Trypanosoma cruzi',
      'Leishmania donovani',
      'Trichomonas vaginalis',
      'Balantidium coli'
    ],
    correctAnswer: 1,
    explanation: 'Leishmania est un genre de protozoaires parasites responsables de la leishmaniose',
    difficulty: 'medium'
  },
  {
    id: 5,
    topic: 'helminths',
    question: 'Lequel des vers suivants cause la filariose ?',
    options: [
      'Ascaris lumbricoides',
      'Wuchereria bancrofti',
      'Taenia solium',
      'Trichuris trichiura'
    ],
    correctAnswer: 1,
    explanation: 'Wuchereria bancrofti est le ver nématode responsable de la plupart des cas de filariose lymphatique',
    difficulty: 'medium'
  },
  {
    id: 6,
    topic: 'treatment',
    question: 'Quel médicament est utilisé pour traiter l\'infection à Giardia ?',
    options: [
      'Albendazole',
      'Metronidazole',
      'Praziquantel',
      'Ivermectin'
    ],
    correctAnswer: 1,
    explanation: 'Le métronidazole est le traitement principal de l\'infection à Giardia',
    difficulty: 'easy'
  },
  {
    id: 7,
    topic: 'lifecycle',
    question: 'Dans quel organe le parasite du paludisme se reproduit-il sexuellement ?',
    options: [
      'Foie humain',
      'Globules rouges',
      'Moustique Anophèles',
      'Rate'
    ],
    correctAnswer: 2,
    explanation: 'La reproduction sexuée du parasite du paludisme se produit dans l\'estomac du moustique Anophèles',
    difficulty: 'hard'
  },
  {
    id: 8,
    topic: 'pathogenesis',
    question: 'Quel est le principal mécanisme de pathogénicité d\'Entamoeba histolytica ?',
    options: [
      'Production d\'exotoxines',
      'Destruction tissulaire directe',
      'Stimulation de la réponse immunitaire',
      'Occlusion vasculaire'
    ],
    correctAnswer: 1,
    explanation: 'Entamoeba histolytica provoque la maladie en envahissant et en détruisant directement les tissus du côlon',
    difficulty: 'hard'
  },
  {
    id: 9,
    topic: 'epidemiology',
    question: 'Laquelle des maladies suivantes est transmise par la mouche tsé-tsé ?',
    options: [
      'Leishmaniose',
      'Maladie du sommeil africaine',
      'Maladie de Chagas',
      'Paludisme'
    ],
    correctAnswer: 1,
    explanation: 'La mouche tsé-tsé est le vecteur du parasite Trypanosoma qui cause la maladie du sommeil africaine',
    difficulty: 'medium'
  },
  {
    id: 10,
    topic: 'arthropods',
    question: 'Quel est le principal vecteur de la maladie de Lyme ?',
    options: [
      'Moustiques',
      'Tiques',
      'Puces',
      'Poux'
    ],
    correctAnswer: 1,
    explanation: 'La tique du chevreuil (Ixodes) est le principal vecteur de la bactérie Borrelia qui cause la maladie de Lyme',
    difficulty: 'easy'
  },

  // الأسئلة الجديدة (11-50) - مستوى مبتدئ (15 سؤال)
  {
    id: 11,
    topic: 'protozoa',
    question: 'Quel est le vecteur principal du paludisme ?',
    options: [
      'Moustique Culex',
      'Moustique Anophèles',
      'Mouche tsé-tsé',
      'Puce'
    ],
    correctAnswer: 1,
    explanation: 'Le moustique Anophèles femelle est le vecteur principal du paludisme',
    difficulty: 'easy'
  },
  {
    id: 12,
    topic: 'diagnosis',
    question: 'Quelle technique est utilisée pour diagnostiquer la giardiase ?',
    options: [
      'Frottis sanguin',
      'Examen des selles',
      'Sérologie',
      'PCR'
    ],
    correctAnswer: 1,
    explanation: 'L\'examen microscopique des selles permet de détecter les kystes de Giardia',
    difficulty: 'easy'
  },
  {
    id: 13,
    topic: 'treatment',
    question: 'Quel médicament est utilisé contre les vers intestinaux comme Ascaris ?',
    options: [
      'Metronidazole',
      'Albendazole',
      'Chloroquine',
      'Doxycycline'
    ],
    correctAnswer: 1,
    explanation: 'L\'albendazole est un vermifuge large spectre efficace contre Ascaris',
    difficulty: 'easy'
  },
  {
    id: 14,
    topic: 'helminths',
    question: 'Comment se transmet généralement l\'ascaridiose ?',
    options: [
      'Piqûre de moustique',
      'Ingestion d\'œufs dans l\'eau ou les aliments',
      'Contact avec la peau',
      'Transfusion sanguine'
    ],
    correctAnswer: 1,
    explanation: 'L\'ascaridiose se transmet par ingestion d\'œufs embryonnés présents dans l\'eau ou les aliments contaminés',
    difficulty: 'easy'
  },
  {
    id: 15,
    topic: 'protozoa',
    question: 'Quelle forme de Toxoplasma gondii est responsable de la transmission de la toxoplasmose ?',
    options: [
      'Tachyzoïte',
      'Bradyzolite',
      'Oocyste',
      'Sporozoïte'
    ],
    correctAnswer: 2,
    explanation: 'Les oocystes excrétés par les chats sont la forme infectante pour l\'homme',
    difficulty: 'easy'
  },
  {
    id: 16,
    topic: 'prevention',
    question: 'Quelle mesure prévient efficacement la transmission de la bilharziose ?',
    options: [
      'Utilisation de moustiquaires',
      'Éviter de nager dans les eaux douces',
      'Cuisson complète de la viande',
      'Lavage des mains'
    ],
    correctAnswer: 1,
    explanation: 'Éviter le contact avec les eaux douces contaminées prévient l\'infection par les cercaires',
    difficulty: 'easy'
  },
  {
    id: 17,
    topic: 'clinical',
    question: 'Quel symptôme est caractéristique de l\'infection par Entamoeba histolytica ?',
    options: [
      'Fièvre hémorragique',
      'Dysenterie amibienne',
      'Ictère',
      'Éruption cutanée'
    ],
    correctAnswer: 1,
    explanation: 'La dysenterie amibienne avec selles glairo-sanglantes est caractéristique',
    difficulty: 'easy'
  },
  {
    id: 18,
    topic: 'arthropods',
    question: 'Quel arthropode est le vecteur de la maladie de Chagas ?',
    options: [
      'Mouche tsé-tsé',
      'Punaise réduve',
      'Moustique',
      'Tique'
    ],
    correctAnswer: 1,
    explanation: 'La punaise réduve (Triatoma) transmet Trypanosoma cruzi',
    difficulty: 'easy'
  },
  {
    id: 19,
    topic: 'helminths',
    question: 'Quel est le site de localisation habituel de la douve du foie (Fasciola hepatica) ?',
    options: [
      'Intestin grêle',
      'Foie et voies biliaires',
      'Poumons',
      'Cerveau'
    ],
    correctAnswer: 1,
    explanation: 'Fasciola hepatica adulte vit dans les canaux biliaires',
    difficulty: 'easy'
  },
  {
    id: 20,
    topic: 'protozoa',
    question: 'Quelle est la forme de résistance de Giardia lamblia ?',
    options: [
      'Kyste',
      'Oocyste',
      'Sporozoïte',
      'Mérozoïte'
    ],
    correctAnswer: 0,
    explanation: 'Giardia forme des kystes résistants dans l\'environnement',
    difficulty: 'easy'
  },
  {
    id: 21,
    topic: 'epidemiology',
    question: 'Dans quelle région la trypanosomiase africaine est-elle endémique ?',
    options: [
      'Amérique du Sud',
      'Afrique subsaharienne',
      'Asie du Sud-Est',
      'Europe de l\'Est'
    ],
    correctAnswer: 1,
    explanation: 'La maladie du sommeil est endémique en Afrique subsaharienne',
    difficulty: 'easy'
  },
  {
    id: 22,
    topic: 'treatment',
    question: 'Quel médicament est utilisé pour traiter la gale ?',
    options: [
      'Ivermectine',
      'Metronidazole',
      'Chloroquine',
      'Praziquantel'
    ],
    correctAnswer: 0,
    explanation: 'L\'ivermectine est le traitement de choix de la gale',
    difficulty: 'easy'
  },
  {
    id: 23,
    topic: 'diagnosis',
    question: 'Quel échantillon est prélevé pour diagnostiquer une oxyurose ?',
    options: [
      'Sang',
      'Selles',
      'Scotch-test anal',
      'Urine'
    ],
    correctAnswer: 2,
    explanation: 'Le scotch-test anal permet de collecter les œufs d\'Enterobius vermicularis',
    difficulty: 'easy'
  },
  {
    id: 24,
    topic: 'prevention',
    question: 'Comment prévenir la transmission de la cysticercose ?',
    options: [
      'Cuisson complète du porc',
      'Éviter les eaux stagnantes',
      'Utilisation de répulsifs',
      'Vaccination'
    ],
    correctAnswer: 0,
    explanation: 'La cuisson complète de la viande de porc détruit les cysticerques',
    difficulty: 'easy'
  },
  {
    id: 25,
    topic: 'clinical',
    question: 'Quelle complication est associée à l\'infection par Strongyloides stercoralis ?',
    options: [
      'Syndrome d\'hyperinfection',
      'Anévrisme cérébral',
      'Cirrhose hépatique',
      'Insuffisance rénale'
    ],
    correctAnswer: 0,
    explanation: 'Le syndrome d\'hyperinfection peut survenir chez les immunodéprimés',
    difficulty: 'easy'
  },

  // مستوى متوسط (15 سؤال)
  {
    id: 26,
    topic: 'protozoa',
    question: 'Quelle est la phase hépatique du paludisme appelée ?',
    options: [
      'Phase érythrocytaire',
      'Phase pré-érythrocytaire',
      'Phase sporogonique',
      'Phase gamétocytaire'
    ],
    correctAnswer: 1,
    explanation: 'La phase pré-érythrocytaire a lieu dans les hépatocytes',
    difficulty: 'medium'
  },
  {
    id: 27,
    topic: 'treatment',
    question: 'Quel médicament est le traitement de choix pour la leishmaniose viscérale ?',
    options: [
      'Metronidazole',
      'Amphotéricine B liposomale',
      'Praziquantel',
      'Ivermectine'
    ],
    correctAnswer: 1,
    explanation: 'L\'amphotéricine B liposomale est le traitement de référence pour la leishmaniose viscérale',
    difficulty: 'medium'
  },
  {
    id: 28,
    topic: 'diagnosis',
    question: 'Quel test sérologique est utilisé pour le diagnostic de la toxoplasmose ?',
    options: [
      'Test de Wright',
      'Test de Sabin-Feldman',
      'Test de Machado-Guerreiro',
      'Test de Weil-Felix'
    ],
    correctAnswer: 1,
    explanation: 'Le test de Sabin-Feldman est un test sérologique spécifique pour la toxoplasmose',
    difficulty: 'medium'
  },
  {
    id: 29,
    topic: 'helminths',
    question: 'Quelle est la particularité du cycle de Strongyloides stercoralis ?',
    options: [
      'Cycle direct obligatoire',
      'Auto-infestation possible',
      'Nécessite deux hôtes intermédiaires',
      'Transmission transplacentaire'
    ],
    correctAnswer: 1,
    explanation: 'Strongyloides peut réaliser un cycle d\'auto-infestation permettant la persistance de l\'infection',
    difficulty: 'medium'
  },
  {
    id: 30,
    topic: 'pathogenesis',
    question: 'Quel mécanisme pathogénique est responsable de l\'anémie dans le paludisme ?',
    options: [
      'Hémolyse intravasculaire',
      'Insuffisance médullaire',
      'Splénomégalie',
      'Carence martiale'
    ],
    correctAnswer: 0,
    explanation: 'L\'hémolyse des globules rouges infectés cause l\'anémie',
    difficulty: 'medium'
  },
  {
    id: 31,
    topic: 'epidemiology',
    question: 'Quel facteur favorise la transmission de la dengue ?',
    options: [
      'Fortes précipitations',
      'Basses températures',
      'Altitude élevée',
      'Faible humidité'
    ],
    correctAnswer: 0,
    explanation: 'Les fortes précipitations favorisent la multiplication des moustiques Aedes',
    difficulty: 'medium'
  },
  {
    id: 32,
    topic: 'clinical',
    question: 'Quel signe est caractéristique de la fièvre hémorragique de la dengue ?',
    options: [
      'Leucocytose',
      'Thrombopénie',
      'Éosinophilie',
      'Lymphocytose'
    ],
    correctAnswer: 1,
    explanation: 'La thrombopénie est un signe caractéristique des formes sévères de dengue',
    difficulty: 'medium'
  },
  {
    id: 33,
    topic: 'protozoa',
    question: 'Quelle est la forme infectante de Cryptosporidium pour l\'homme ?',
    options: [
      'Tachyzoïte',
      'Oocyste sporulé',
      'Kyste',
      'Mérozoïte'
    ],
    correctAnswer: 1,
    explanation: 'Les oocystes sporulés de Cryptosporidium sont directement infectants',
    difficulty: 'medium'
  },
  {
    id: 34,
    topic: 'treatment',
    question: 'Quelle association médicamenteuse est utilisée pour le paludisme à P. falciparum ?',
    options: [
      'Chloroquine + Primaquine',
      'Artéméther + Luméfantrine',
      'Metronidazole + Albendazole',
      'Praziquantel + Ivermectine'
    ],
    correctAnswer: 1,
    explanation: 'L\'association artéméther-luméfantrine est une ACT (Combinaison Thérapeutique à base d\'Artémisinine)',
    difficulty: 'medium'
  },
  {
    id: 35,
    topic: 'diagnosis',
    question: 'Quelle technique moléculaire est utilisée pour le diagnostic des parasitoses ?',
    options: [
      'ELISA',
      'PCR',
      'Frottis mince',
      'Culture'
    ],
    correctAnswer: 1,
    explanation: 'La PCR permet une détection spécifique et sensible de l\'ADN parasitaire',
    difficulty: 'medium'
  },
  {
    id: 36,
    topic: 'helminths',
    question: 'Quelle larve est responsable de la larva migrans cutanée ?',
    options: [
      'Larve L3 d\'Ancylostoma',
      'Cercaire de Schistosoma',
      'Larve de Taenia',
      'Microfilaire de Wuchereria'
    ],
    correctAnswer: 0,
    explanation: 'Les larves L3 d\'Ancylostoma provoquent la larva migrans cutanée',
    difficulty: 'medium'
  },
  {
    id: 37,
    topic: 'prevention',
    question: 'Quelle mesure prévient la transmission de l\'échinococcose ?',
    options: [
      'Traitement des chiens',
      'Éviter les bains en rivière',
      'Cuisson du bœuf',
      'Moustiquaires'
    ],
    correctAnswer: 0,
    explanation: 'Le traitement vermifuge des chiens interrompt le cycle de Echinococcus',
    difficulty: 'medium'
  },
  {
    id: 38,
    topic: 'arthropods',
    question: 'Quel est l\'agent responsable de la gale humaine ?',
    options: [
      'Pediculus humanus',
      'Sarcoptes scabiei',
      'Cimex lectularius',
      'Pulex irritans'
    ],
    correctAnswer: 1,
    explanation: 'Sarcoptes scabiei var. hominis est l\'acarien responsable de la gale',
    difficulty: 'medium'
  },
  {
    id: 39,
    topic: 'clinical',
    question: 'Quelle manifestation est typique de l\'infection par Loa loa ?',
    options: [
      'Oedème de Calabar',
      'Éléphantiasis',
      'Hépatosplénomégalie',
      'Méningo-encéphalite'
    ],
    correctAnswer: 0,
    explanation: 'L\'œdème de Calabar est une manifestation caractéristique de la loase',
    difficulty: 'medium'
  },
  {
    id: 40,
    topic: 'epidemiology',
    question: 'Quelle population est la plus à risque de paludisme grave ?',
    options: [
      'Adultes immunisés',
      'Femmes enceintes',
      'Personnes âgées',
      'Enfants de moins de 5 ans'
    ],
    correctAnswer: 3,
    explanation: 'Les enfants de moins de 5 ans en zone d\'endémie ont un risque élevé de paludisme grave',
    difficulty: 'medium'
  },

  // مستوى متقدم (10 أسئلة)
  {
    id: 41,
    topic: 'pathogenesis',
    question: 'Quel mécanisme permet à Trypanosoma brucei d\'échapper à la réponse immune ?',
    options: [
      'Variation antigénique',
      'Inhibition du complément',
      'Production de superantigènes',
      'Mimétisme moléculaire'
    ],
    correctAnswer: 0,
    explanation: 'La variation antigénique des VSG permet l\'évasion immunitaire',
    difficulty: 'hard'
  },
  {
    id: 42,
    topic: 'treatment',
    question: 'Quel médicament est contre-indiqué dans l\'infection par Loa loa avec forte microfilarémie ?',
    options: [
      'Ivermectine',
      'Albendazole',
      'Praziquantel',
      'Diéthylcarbamazine'
    ],
    correctAnswer: 3,
    explanation: 'La diéthylcarbamazine peut provoquer des encéphalopathies graves en cas de forte microfilarémie',
    difficulty: 'hard'
  },
  {
    id: 43,
    topic: 'diagnosis',
    question: 'Quelle technique permet de différencier les espèces de Plasmodium ?',
    options: [
      'Frottis sanguin coloré au Giemsa',
      'Test rapide',
      'PCR nichée',
      'Sérologie'
    ],
    correctAnswer: 2,
    explanation: 'La PCR nichée permet l\'identification spécifique des espèces de Plasmodium',
    difficulty: 'hard'
  },
  {
    id: 44,
    topic: 'protozoa',
    question: 'Quelle est la voie de signalisation ciblée par l\'artémisinine dans le paludisme ?',
    options: [
      'Voie du calcium',
      'Voie de l\'hème',
      'Voie des kinases',
      'Voie des canaux ioniques'
    ],
    correctAnswer: 1,
    explanation: 'L\'artémisinine agit en générant des radicaux libres qui alkylent l\'hème',
    difficulty: 'hard'
  },
  {
    id: 45,
    topic: 'helminths',
    question: 'Quel mécanisme permet à Schistosoma d\'échapper à la réponse immune de l\'hôte ?',
    options: [
      'Acquisition d\'antigènes du soi',
      'Variation antigénique',
      'Production de protéases',
      'Inhibition du TNF-alpha'
    ],
    correctAnswer: 0,
    explanation: 'Schistosoma acquiert des antigènes de l\'hôte pour se camoufler',
    difficulty: 'hard'
  },
  {
    id: 46,
    topic: 'clinical',
    question: 'Quelle complication neurologique est associée à l\'infection par Angiostrongylus cantonensis ?',
    options: [
      'Méningo-encéphalite éosinophilique',
      'Accident vasculaire cérébral',
      'Myélite transverse',
      'Neuropathie périphérique'
    ],
    correctAnswer: 0,
    explanation: 'Angiostrongylus cantonensis provoque une méningo-encéphalite éosinophilique',
    difficulty: 'hard'
  },
  {
    id: 47,
    topic: 'epidemiology',
    question: 'Quel facteur explique la résurgence de la maladie de Chagas en zone urbaine ?',
    options: [
      'Migration des populations rurales',
      'Changement climatique',
      'Résistance aux insecticides',
      'Déforestation'
    ],
    correctAnswer: 0,
    explanation: 'La migration des populations rurales vers les villes a urbanisé la maladie',
    difficulty: 'hard'
  },
  {
    id: 48,
    topic: 'treatment',
    question: 'Quelle mutation confère la résistance à la chloroquine dans le paludisme ?',
    options: [
      'Mutation PfMDR1',
      'Mutation PfCRT',
      'Mutation DHFR',
      'Mutation K13'
    ],
    correctAnswer: 1,
    explanation: 'La mutation PfCRT (Chloroquine Resistance Transporter) est responsable de la résistance',
    difficulty: 'hard'
  },
  {
    id: 49,
    topic: 'pathogenesis',
    question: 'Quelle toxine est produite par Entamoeba histolytica ?',
    options: [
      'Amœbapore',
      'Entérotoxine',
      'Cytolysine',
      'Hémolysine'
    ],
    correctAnswer: 0,
    explanation: 'L\'amœbapore est une protéine poroforme qui lyse les cellules cibles',
    difficulty: 'hard'
  },
  {
    id: 50,
    topic: 'diagnosis',
    question: 'Quelle technique permet le diagnostic de la neurocysticercose active ?',
    options: [
      'IRM cérébrale',
      'Ponction lombaire',
      'Scanner cérébral avec contraste',
      'Électroencéphalogramme'
    ],
    correctAnswer: 2,
    explanation: 'Le scanner cérébral avec contraste montre les kystes viables avec œdème périlésionnel',
    difficulty: 'hard'
  }
];