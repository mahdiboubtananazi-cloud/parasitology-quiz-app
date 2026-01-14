export const questions = [
  // =========================
  // SÉROLOGIE (7)
  // =========================
  {
    id: "immuno_sero_1",
    axis: "immuno",
    question: "Les principales indications de la sérologie parasitaire concernent :",
    options: ["Parasitoses tissulaires comme Toxoplasmose, Hydatidose, Amibiase hépatique, Trichinellose", "Poux et puces", "Anguillulose intestinale asymptomatique", "Paludisme non compliqué"],
    correctAnswer: 0,
    explanation: "La sérologie est particulièrement utile pour les parasites qui ne sont pas détectables facilement dans les selles ou le sang, donc tissulaires."
  },
  {
    id: "immuno_sero_2",
    axis: "immuno",
    question: "ELISA en parasitologie est utilisée pour :",
    options: ["Dépistage initial d’anticorps spécifiques", "Observation directe de trophozoïtes", "Coloration de kystes dans les selles", "Concentration des œufs par flottation"],
    correctAnswer: 0,
    explanation: "ELISA permet de détecter les anticorps spécifiques de manière sensible et quantitative, utile en dépistage."
  },
  {
    id: "immuno_sero_3",
    axis: "immuno",
    question: "Western Blot est surtout utilisé pour :",
    options: ["Confirmation sérologique et typage d’espèces (Toxoplasma, Lyme)", "Observation microscopique", "Quantification des œufs dans les selles", "Flottation des larves d’helminthes"],
    correctAnswer: 0,
    explanation: "Western Blot confirme la présence d’anticorps spécifiques et peut différencier les espèces apparentées."
  },
  {
    id: "immuno_sero_4",
    axis: "immuno",
    question: "Avantage principal de la sérologie parasitaire :",
    options: ["Détecter infections tissulaires où le parasite est peu accessible", "Identifier la motilité des trophozoïtes", "Compter les œufs dans le selles", "Mesurer les microfilaires dans le sang"],
    correctAnswer: 0,
    explanation: "Elle est utile lorsque le parasite n’est pas directement observable dans les échantillons classiques."
  },
  {
    id: "immuno_sero_5",
    axis: "immuno",
    question: "Limite de la sérologie :",
    options: ["Ne permet pas de distinguer infection actuelle d’ancienne exposition", "Impossible sur liquide amniotique", "Ne détecte pas les anticorps IgG", "Non utilisable pour toxoplasmose"],
    correctAnswer: 0,
    explanation: "Les anticorps peuvent persister longtemps après l’infection, rendant la distinction infection récente ou passée difficile."
  },
  {
    id: "immuno_sero_6",
    axis: "immuno",
    question: "Sérologie de toxoplasmose chez la femme enceinte :",
    options: ["ELISA pour dépistage + Western Blot pour confirmation", "Observation des kystes dans le sang", "PCR sur selles", "Flottation des œufs dans l’urine"],
    correctAnswer: 0,
    explanation: "ELISA détecte IgG/IgM et Western Blot confirme, ce qui est crucial pour le diagnostic fœtal."
  },
  {
    id: "immuno_sero_7",
    axis: "immuno",
    question: "Pour l’hydatidose, la sérologie permet de :",
    options: ["Confirmer le diagnostic lorsqu’imagerie suggère un kyste", "Colorer les protoscolex au microscope", "Détecter les œufs dans les selles", "Mesurer les microfilaires dans le sang"],
    correctAnswer: 0,
    explanation: "Les anticorps spécifiques sont recherchés pour confirmer la présence du parasite dans le foie ou autres organes."
  },

  // =========================
  // RECHERCHE D'ANTIGÈNES (6)
  // =========================
  {
    id: "biologie_ag_1",
    axis: "biologie",
    question: "TDR paludisme détecte principalement :",
    options: ["Antigènes HRP2 et pLDH", "Œufs d’Ascaris", "Trophozoïtes Giardia", "Microfilaires Wuchereria"],
    correctAnswer: 0,
    explanation: "Les tests rapides immunologiques détectent les antigènes spécifiques de Plasmodium pour diagnostic rapide."
  },
  {
    id: "biologie_ag_2",
    axis: "biologie",
    question: "Les copro-antigènes servent à détecter :",
    options: ["Giardia, Cryptosporidium, Entamoeba", "Oocystes de Toxoplasma", "Larves Strongyloides", "Microfilaires de Loa"],
    correctAnswer: 0,
    explanation: "Ces tests immunologiques permettent de détecter les antigènes du parasite dans les selles."
  },
  {
    id: "biologie_ag_3",
    axis: "biologie",
    question: "Avantage principal de la détection d’antigènes :",
    options: ["Diagnostic rapide et indépendant de la morphologie des parasites", "Détection de microfilaires vivantes uniquement", "Identification de l’espèce par microscopie", "Quantification exacte des œufs"],
    correctAnswer: 0,
    explanation: "Les antigènes peuvent être détectés même si les parasites sont fragmentés ou peu abondants."
  },
  {
    id: "biologie_ag_4",
    axis: "biologie",
    question: "Limite des tests antigéniques :",
    options: ["Peuvent persister après éradication du parasite, donnant faux positifs", "Ne détectent pas les trophozoïtes", "Toujours spécifiques à l’espèce", "Impossible sur selles fraîches"],
    correctAnswer: 0,
    explanation: "Les antigènes peuvent rester détectables après disparition du parasite vivant."
  },
  {
    id: "biologie_ag_5",
    axis: "biologie",
    question: "TDR paludisme a l’avantage de :",
    options: ["Permettre un diagnostic rapide hors laboratoire équipé", "Identifier les microfilaires Wuchereria", "Typage d’E. histolytica", "Quantification précise des œufs Schistosoma"],
    correctAnswer: 0,
    explanation: "Il est utilisable au point de soins pour dépister rapidement le paludisme."
  },
  {
    id: "biologie_ag_6",
    axis: "biologie",
    question: "Copro-antigènes permettent de distinguer :",
    options: ["E. histolytica pathogène vs E. dispar non pathogène", "Toxoplasma IgG vs IgM", "Larves Strongyloides vivantes vs mortes", "Œufs de Schistosoma selon espèce"],
    correctAnswer: 0,
    explanation: "Ces tests immunologiques permettent de différencier espèces morphologiquement similaires."
  },

  // =========================
  // BIOLOGIE MOLÉCULAIRE (PCR) (12)
  // =========================
  {
    id: "biologie_pcr_1",
    axis: "biologie",
    question: "Avantage majeur de la PCR parasitaire :",
    options: ["Sensibilité extrême et typage précis de l’espèce", "Observation directe des trophozoïtes", "Coloration rapide des œufs", "Concentration par flottation"],
    correctAnswer: 0,
    explanation: "La PCR permet de détecter des charges parasitaires très faibles et de différencier espèces morphologiquement identiques."
  },
  {
    id: "biologie_pcr_2",
    axis: "biologie",
    question: "PCR pour Toxoplasmose fœtale utilise :",
    options: ["Liquide amniotique", "Selles", "Sang maternel uniquement", "Urine"],
    correctAnswer: 0,
    explanation: "La PCR sur liquide amniotique permet de diagnostiquer une infection intra-utérine du fœtus."
  },
  {
    id: "biologie_pcr_3",
    axis: "biologie",
    question: "PCR pour Leishmaniose sert à :",
    options: ["Typage pour adapter le traitement spécifique", "Observation des amastigotes par microscopie", "Coloration trichrome", "Quantification de microfilaires"],
    correctAnswer: 0,
    explanation: "Le typage moléculaire guide le choix du traitement antiparasitaire approprié."
  },
  {
    id: "biologie_pcr_4",
    axis: "biologie",
    question: "PCR peut distinguer :",
    options: ["E. histolytica vs E. dispar", "Plasmodium falciparum vs vivax par microscopie", "Cryptosporidium vs Giardia par couleur", "Strongyloides larves vs œufs par taille"],
    correctAnswer: 0,
    explanation: "La PCR détecte des séquences spécifiques, ce qui permet de différencier les espèces morphologiquement similaires."
  },
  {
    id: "biologie_pcr_5",
    axis: "biologie",
    question: "Limite de la PCR parasitaire :",
    options: ["Nécessite équipement et expertise spécialisée", "Ne détecte pas les antigènes", "N’évalue pas la morphologie", "Impossible sur sang"],
    correctAnswer: 0,
    explanation: "La PCR est sensible mais dépend d’installations spécialisées et d’un personnel formé."
  },
  {
    id: "biologie_pcr_6",
    axis: "biologie",
    question: "Échantillon type pour PCR Giardia/Cryptosporidium :",
    options: ["Selles fraîches ou conservées", "Liquide céphalo-rachidien", "Sang pour microfilaires", "Urine pour Trichinella"],
    correctAnswer: 0,
    explanation: "Les oocystes et trophozoïtes sont détectables par PCR dans les selles."
  },
  {
    id: "biologie_pcr_7",
    axis: "biologie",
    question: "PCR a l’avantage de :",
    options: ["Détecter infections à faible charge parasitaire", "Colorer les œufs rapidement", "Observer la motilité des trophozoïtes", "Concentrer les larves par centrifugation"],
    correctAnswer: 0,
    explanation: "Même avec peu de parasites présents, la PCR peut détecter l’ADN spécifique."
  },
  {
    id: "biologie_pcr_8",
    axis: "biologie",
    question: "Limitation de PCR pour Toxoplasmose fœtale :",
    options: ["Dépend de la qualité de l’échantillon amniotique", "Impossible à réaliser sur liquide amniotique", "Coloration non spécifique", "Ne distingue pas les anticorps IgG/IgM"],
    correctAnswer: 0,
    explanation: "La sensibilité dépend de la quantité d’ADN parasitaire dans le liquide amniotique."
  },
  {
    id: "biologie_pcr_9",
    axis: "biologie",
    question: "PCR Leishmania permet :",
    options: ["Identification des espèces cutanées ou viscérales", "Flottation des œufs dans les selles", "Observation microscopique de trophozoïtes uniquement", "Coloration acido-alcoolo-résistante"],
    correctAnswer: 0,
    explanation: "Le typage moléculaire guide le traitement selon le type de Leishmania impliqué."
  },
  {
    id: "biologie_pcr_10",
    axis: "biologie",
    question: "Erreur fréquente en PCR :",
    options: ["Contamination croisée donnant faux positifs", "Ne pas colorer avec Giemsa", "Fixation trop longue du frottis", "Hémolyse des GR"],
    correctAnswer: 0,
    explanation: "La PCR est très sensible et la contamination peut générer des résultats faussement positifs."
  },
  {
    id: "biologie_pcr_11",
    axis: "biologie",
    question: "PCR copro-parasitaire permet :",
    options: ["Détecter parasites intestinaux difficiles à distinguer morphologiquement", "Quantifier les microfilaires", "Colorer les oocystes Cryptosporidium", "Concentrer les larves Strongyloides"],
    correctAnswer: 0,
    explanation: "Elle permet un diagnostic spécifique et sensible des parasites morphologiquement similaires dans les selles."
  },
  {
    id: "biologie_pcr_12",
    axis: "biologie",
    question: "Avantage de PCR par rapport à sérologie :",
    options: ["Détecte l’ADN du parasite et non seulement la réponse immunitaire", "Visualise la morphologie fine", "Concentre les œufs dans les selles", "Coloration acido-alcoolo-résistante"],
    correctAnswer: 0,
    explanation: "La PCR détecte directement le parasite, même avant la production d’anticorps, ce qui permet un diagnostic précoce."
  }
];
