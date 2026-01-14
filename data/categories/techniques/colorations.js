export const questions = [
  // =========================
  // ZIEHL-NEELSEN MODIFIÉ (5)
  // =========================
  {
    id: "color_zn_1",
    axis: "coloration",
    question: "Le Ziehl-Neelsen modifié cible principalement :",
    options: ["Oocystes de Cryptosporidium, Cyclospora et Isospora", "Trophozoïtes de Giardia", "Larves d’Anguillule", "Œufs de Schistosoma"],
    correctAnswer: 0,
    explanation: "Cette coloration acido-alcoolo-résistante met en évidence les oocystes des coccidies intestinales."
  },
  {
    id: "color_zn_2",
    axis: "coloration",
    question: "Résultat typique d’un Ziehl-Neelsen modifié :",
    options: ["Oocystes rose fuchsia sur fond vert ou bleu", "Trophozoïtes verts sur fond rose", "Œufs jaunes sur fond violet", "Larves rouges sur fond clair"],
    correctAnswer: 0,
    explanation: "Les oocystes acido-alcoolo-résistants prennent une coloration rose fuchsia sur un fond coloré par contre-coloration verte ou bleue."
  },
  {
    id: "color_zn_3",
    axis: "coloration",
    question: "Principe du Ziehl-Neelsen modifié :",
    options: ["Acido-alcoolo-résistance", "Flottation osmotique", "Fixation au méthanol", "Sédimentation centrifuge"],
    correctAnswer: 0,
    explanation: "Les oocystes résistent à l’acide et à l’alcool, ce qui permet de les distinguer des autres éléments fécaux."
  },
  {
    id: "color_zn_4",
    axis: "coloration",
    question: "Erreur fréquente lors du Ziehl-Neelsen modifié :",
    options: ["Chaleur excessive détruisant les oocystes", "Ne pas ajouter Giemsa après", "Utiliser Lugol", "Séchage trop rapide"],
    correctAnswer: 0,
    explanation: "Une chaleur excessive peut altérer l’acido-alcoolo-résistance et rendre les oocystes invisibles."
  },
  {
    id: "color_zn_5",
    axis: "coloration",
    question: "Le fond vert ou bleu du Ziehl-Neelsen modifié sert à :",
    options: ["Contraster avec les oocystes rose fuchsia", "Colorer les trophozoïtes", "Fixer les œufs d’helminthes", "Flotter les larves"],
    correctAnswer: 0,
    explanation: "La contre-coloration met en évidence le contraste entre les oocystes et le reste du matériel."
  },

  // =========================
  // TRICHROME DE WEBER (5)
  // =========================
  {
    id: "color_trichrome_1",
    axis: "coloration",
    question: "Le trichrome de Weber modifié est utilisé pour :",
    options: ["Spores de Microsporidies dans les selles", "Oocystes de Cryptosporidium", "Trophozoïtes de Giardia uniquement", "Œufs de Schistosoma"],
    correctAnswer: 0,
    explanation: "Cette coloration permet de visualiser les spores de microsporidies comme des inclusions rose ou rouge avec vacuole centrale."
  },
  {
    id: "color_trichrome_2",
    axis: "coloration",
    question: "Résultat typique du Trichrome de Weber modifié :",
    options: ["Spores rose/rouge avec vacuole centrale claire", "Oocystes verts sur fond bleu", "Trophozoïtes bruns", "Œufs blancs sur fond rose"],
    correctAnswer: 0,
    explanation: "Les spores microsporidiennes prennent une coloration rose ou rouge intense, avec vacuole incolore au centre."
  },
  {
    id: "color_trichrome_3",
    axis: "coloration",
    question: "Le trichrome de Weber est principalement appliqué sur :",
    options: ["Échantillons fécaux", "Frottis sanguins", "Liquide céphalo-rachidien", "Biopsie musculaire"],
    correctAnswer: 0,
    explanation: "Les microsporidies étant excrétées dans les selles, la coloration trichrome est adaptée à cet échantillon."
  },
  {
    id: "color_trichrome_4",
    axis: "coloration",
    question: "Erreur fréquente avec Trichrome de Weber :",
    options: ["Surcoloration masquant la vacuole centrale", "Ne pas sécher la goutte épaisse", "Séchage avant fixation au méthanol", "Flottation osmotique avant coloration"],
    correctAnswer: 0,
    explanation: "Une surcoloration empêche de distinguer la vacuole centrale caractéristique des spores."
  },
  {
    id: "color_trichrome_5",
    axis: "coloration",
    question: "Avantage du trichrome modifié par rapport au trichrome classique :",
    options: ["Meilleure visibilité des spores microsporidiennes", "Détection des oocystes Cryptosporidium", "Observation des trophozoïtes vivants", "Concentration des œufs d’helminthes"],
    correctAnswer: 0,
    explanation: "La modification améliore le contraste et la détection des petites spores difficiles à visualiser."
  },

  // =========================
  // MGG (5)
  // =========================
  {
    id: "color_mgg_1",
    axis: "coloration",
    question: "La coloration May-Grünwald-Giemsa est utilisée pour :",
    options: ["Frottis sanguins, ponctions médullaires, et pus", "Observation des œufs dans les selles", "Flottation des larves d’Anguillule", "Concentration de microsporidies"],
    correctAnswer: 0,
    explanation: "MGG permet de visualiser la morphologie fine des cellules et des parasites dans le sang, la moelle ou le pus."
  },
  {
    id: "color_mgg_2",
    axis: "coloration",
    question: "MGG est adaptée pour détecter :",
    options: ["Leishmania et Trichomonas", "Oocystes de Cryptosporidium", "Spores microsporidiennes", "Œufs de ténia"],
    correctAnswer: 0,
    explanation: "La coloration colore les parasites intracellulaires et extracellulaires présents dans les frottis ou ponctions."
  },
  {
    id: "color_mgg_3",
    axis: "coloration",
    question: "Avantage principal de MGG :",
    options: ["Visualisation de la morphologie fine et identification des parasites", "Flottation des œufs lourds", "Concentration rapide par centrifugation", "Asphyxie des larves pour extraction"],
    correctAnswer: 0,
    explanation: "MGG conserve les détails morphologiques, facilitant l’identification spécifique des parasites."
  },
  {
    id: "color_mgg_4",
    axis: "coloration",
    question: "Échantillon typique pour MGG :",
    options: ["Sang, moelle osseuse, pus", "Selles", "Urine", "Lavage broncho-alvéolaire uniquement"],
    correctAnswer: 0,
    explanation: "MGG est adaptée aux échantillons cellulaires liquides pour observer les parasites intracellulaires."
  },
  {
    id: "color_mgg_5",
    axis: "coloration",
    question: "Erreur fréquente avec MGG :",
    options: ["Trop de temps de fixation dégrade la morphologie", "Ne pas centrifuger le sang", "Ne pas colorer avec Lugol", "Utiliser solution saline hypertonique"],
    correctAnswer: 0,
    explanation: "Une fixation excessive peut altérer la morphologie cellulaire et des parasites, rendant le diagnostic difficile."
  },

  // =========================
  // ENCRE DE CHINE & CALCOFLUOR (5)
  // =========================
  {
    id: "color_encre_1",
    axis: "coloration",
    question: "L’encre de Chine est utilisée pour :",
    options: ["Visualiser Cryptococcus dans le LCR", "Spores de Microsporidies", "Oocystes de Cryptosporidium", "Trophozoïtes de Leishmania"],
    correctAnswer: 0,
    explanation: "L’encre de Chine permet de mettre en évidence l’enveloppe polysaccharidique du champignon levuriforme Cryptococcus."
  },
  {
    id: "color_encre_2",
    axis: "coloration",
    question: "Résultat typique de l’encre de Chine :",
    options: ["Capsule claire autour du Cryptococcus sur fond noir", "Spores rose/rouge", "Oocystes fuchsia sur fond vert", "Trophozoïtes colorés au bleu"],
    correctAnswer: 0,
    explanation: "La capsule polysaccharidique reste incolore et contraste sur le fond noir de l’encre."
  },
  {
    id: "color_calco_1",
    axis: "coloration",
    question: "Le Calcofluor Blanc sert à :",
    options: ["Fluorescence des parois de champignons et microsporidies", "Coloration acido-alcoolo-résistante", "Flottation osmotique", "Frottis mince sanguin"],
    correctAnswer: 0,
    explanation: "Le Calcofluor se lie aux polysaccharides des parois et émet une fluorescence pour visualisation rapide."
  },
  {
    id: "color_calco_2",
    axis: "coloration",
    question: "Avantage du Calcofluor Blanc :",
    options: ["Rapidité et sensibilité dans la détection des champignons et microsporidies", "Identification spécifique des Plasmodium", "Concentration des œufs dans les selles", "Coloration des trophozoïtes Giardia"],
    correctAnswer: 0,
    explanation: "La fluorescence permet de détecter facilement les organismes difficiles à visualiser au microscope optique classique."
  },
  {
    id: "color_calco_3",
    axis: "coloration",
    question: "Limite du Calcofluor Blanc :",
    options: ["Non spécifique, nécessite confirmation morphologique", "Tue les parasites", "Ne colore que les microsporidies", "Incompatible avec le LCR"],
    correctAnswer: 0,
    explanation: "Le Calcofluor met en évidence toutes les parois polysaccharidiques, il faut donc confirmer morphologiquement l’espèce observée."
  }
];
