// data/categories/microscopy/selles.js

export const selles = [
  // --- EXAMEN DIRECT & GÉNÉRALITÉS ---
  {
    id: 'tp_copro_1',
    question: "Quel est le délai idéal pour examiner une selle liquide (suspeçion d'amibes) ?",
    options: ["< 30 minutes (au chaud)", "< 2 heures", "< 24 heures (au frigo)", "Peu importe"],
    correct: 0,
    explanation: "Les formes végétatives (trophozoïtes) d'Entamoeba histolytica sont fragiles et meurent rapidement. L'examen doit être immédiat (état frais)."
  },
  {
    id: 'tp_copro_2',
    question: "Quelle est la méthode de concentration la plus utilisée pour les kystes de protozoaires et œufs d'helminthes ?",
    options: ["Ritchie (Formol-Ether)", "Baermann", "Kato-Katz", "Willis"],
    correct: 0,
    explanation: "La méthode de Ritchie (diphasique) concentre efficacement les kystes et les œufs tout en éliminant les débris par l'éther."
  },
  {
    id: 'tp_copro_3',
    question: "La technique de KATO-KATZ est spécifiquement recommandée pour le dépistage de :",
    options: ["Schistosoma mansoni (en masse)", "Entamoeba histolytica", "Giardia lamblia", "Strongyloides stercoralis"],
    correct: 0,
    explanation: "Kato-Katz est la méthode de référence (OMS) pour quantifier les œufs de Schistosoma mansoni et des géo-helminthes sur le terrain."
  },
  {
    id: 'tp_copro_4',
    question: "La technique de BAERMANN est basée sur quelle propriété des larves ?",
    options: ["L'hygrotropisme et le thermotropisme", "La flottaison", "La sédimentation spontanée", "La résistance à l'acide"],
    correct: 0,
    explanation: "Baermann utilise l'attraction des larves (anguillules) vers l'eau tiède (hydro-thermotropisme) pour les extraire des selles."
  },
  
  // --- IDENTIFICATION & COLORATIONS ---
  {
    id: 'tp_copro_5',
    question: "Quelle coloration est nécessaire pour visualiser Cryptosporidium spp. ?",
    options: ["Ziehl-Neelsen modifiée (Henriksen)", "Giemsa", "MIE (Mersthiolate-Iode-Formol)", "Bleu de méthylène"],
    correct: 0,
    explanation: "Les oocystes de Cryptosporidium sont 'Acido-Alcoolo-Résistants' et apparaissent en rouge sur fond vert/bleu au Ziehl."
  },
  {
    id: 'tp_copro_6',
    question: "Dans un examen direct à l'état frais, quelle solution est utilisée pour mieux voir les noyaux des kystes ?",
    options: ["Lugol (Iode)", "Eau physiologique", "Alcool 70%", "Formol"],
    correct: 0,
    explanation: "Le Lugol colore les noyaux et le glycogène en brun/jaune, facilitant l'identification des kystes d'amibes."
  },
  {
    id: 'tp_copro_7',
    question: "Le Scotch-Test (Test de Graham) est l'examen de référence pour :",
    options: ["Enterobius vermicularis (Oxyure)", "Taenia saginata", "Ascaris lumbricoides", "Trichuris trichiura"],
    correct: 0,
    explanation: "Les femelles d'oxyures pondent sur la marge anale, pas dans les selles. Le Scotch-test récupère les œufs collés à l'anus."
  },

  // --- PIÈGES & ARTEFACTS ---
  {
    id: 'tp_copro_8',
    question: "Lequel de ces éléments est un ARTEFACT (faux parasite) fréquent dans les selles ?",
    options: ["Grain de pollen", "Œuf de Trichuris", "Kyste de Giardia", "Œuf de Fasciola"],
    correct: 0,
    explanation: "Les grains de pollen ressemblent parfois aux œufs de Taenia ou Ascaris mais ont une paroi irrégulière et un contenu amorphe."
  },
  {
    id: 'tp_copro_9',
    question: "Une selle noire (Méléna) indique généralement :",
    options: ["Hémorragie digestive haute", "Hémorragie rectale", "Consommation de betteraves", "Infection à Giardia"],
    correct: 0,
    explanation: "Le méléna (sang digéré) suggère un saignement en amont (estomac/duodénum), contrairement aux rectorragies (sang rouge)."
  },
  {
    id: 'tp_copro_10',
    question: "Pour rechercher des cristaux de Charcot-Leyden, on s'attend à trouver aussi :",
    options: ["Une hyperéosinophilie", "Une anémie", "Une neutropénie", "Des bactéries"],
    correct: 0,
    explanation: "Les cristaux de Charcot-Leyden proviennent de la dégradation des éosinophiles et signent souvent une helminthiase tissulaire."
  },
  
  // --- TECHNIQUES SPÉCIFIQUES ---
  {
    id: 'tp_copro_11',
    question: "Quelle technique utilise une solution saturée de chlorure de sodium (NaCl) ?",
    options: ["Technique de Willis (Flottaison)", "Technique de Ritchie", "Technique de Kato", "Technique de Theermann"],
    correct: 0,
    explanation: "Willis est une méthode de flottaison : les œufs légers (Ankylostomes, Ascaris) remontent à la surface grâce à la densité du sel."
  },
  {
    id: 'tp_copro_12',
    question: "Quelle est la densité approximative des solutions de flottaison (Willis) ?",
    options: ["1.20", "1.00", "0.85", "1.50"],
    correct: 0,
    explanation: "La densité doit être supérieure à celle des œufs (généralement 1.05-1.15) pour qu'ils flottent. On vise 1.20."
  },
  {
    id: 'tp_copro_13',
    question: "La technique de clarification par lactophénol (Amman) est utilisée pour :",
    options: ["Éclaircir les vers adultes (Nématodes/Trématodes)", "Colorer les kystes", "Concentrer les œufs", "Cultiver les larves"],
    correct: 0,
    explanation: "Le lactophénol rend les tissus des vers transparents, permettant d'observer leurs organes internes pour l'identification."
  },
  {
    id: 'tp_copro_14',
    question: "Combien de temps faut-il conserver une lame de Kato-Katz avant lecture pour éclaircir les œufs d'Ascaris ?",
    options: ["30 à 60 minutes", "Immédiatement", "24 heures", "1 semaine"],
    correct: 0,
    explanation: "Il faut un temps de clarification (glycérol) pour voir les œufs à coque épaisse, mais pas trop longtemps sinon les œufs d'ankylostomes disparaissent."
  },
  {
    id: 'tp_copro_15',
    question: "Quelle technique permet la culture des larves d'ankylostomes et d'anguillules ?",
    options: ["Coproculture (Harada-Mori)", "Ritchie", "Willis", "Frottis sanguin"],
    correct: 0,
    explanation: "La coproculture sur papier buvard (Harada-Mori) permet aux œufs d'éclore et aux larves de se développer pour identification."
  }
];

export default selles;
