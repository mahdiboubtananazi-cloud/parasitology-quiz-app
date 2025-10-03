export const topicLabels = {
  protozoa: 'Protozoaires',
  helminths: 'Helminthes',
  arthropods: 'Arthropodes',
  diagnosis: 'Diagnostic',
  treatment: 'Traitement',
  epidemiology: 'Épidémiologie',
  lifecycle: 'Cycle de vie',
  pathogenesis: 'Pathogenèse',
};

export const sampleQuestions = [
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
];