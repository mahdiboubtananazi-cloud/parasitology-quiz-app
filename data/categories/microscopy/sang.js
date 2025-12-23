// data/categories/microscopy/sang.js

export const sang = [
  // --- TECHNIQUES (Goutte Épaisse vs Frottis) ---
  {
    id: 'tp_sang_1',
    question: "Quelle est la différence majeure entre la Goutte Épaisse (GE) et le Frottis Mince ?",
    options: ["La GE concentre les parasites (sensibilité), le Frottis permet l'identification (morphologie)", "La GE préserve les hématies, le Frottis les lyse", "La GE est pour les virus, le Frottis pour les parasites", "Aucune différence"],
    correct: 0,
    explanation: "La Goutte Épaisse concentre le sang (20-30x plus sensible) mais lyse les hématies, rendant l'identification d'espèce difficile. Le frottis préserve la morphologie pour le diagnostic d'espèce."
  },
  {
    id: 'tp_sang_2',
    question: "Quel est le colorant de référence pour le diagnostic du Paludisme ?",
    options: ["Le Giemsa (pH 7.2)", "Le Gram", "Le Bleu de Méthylène", "L'Hematoxyline-Eosine"],
    correct: 0,
    explanation: "Le Giemsa dilué à 10% (pH 7.2) est le standard mondial (Gold Standard) car il colore distinctement la chromatine (rouge) et le cytoplasme (bleu) des parasites."
  },
  {
    id: 'tp_sang_3',
    question: "Quand faut-il idéalement prélever le sang pour une recherche de Microfilaires sanguicoles (ex: Wuchereria) ?",
    options: ["La nuit (entre 22h et 2h)", "Au pic fébrile", "Le matin à jeun", "N'importe quand"],
    correct: 0,
    explanation: "Wuchereria bancrofti présente une périodicité nocturne. Les microfilaires ne sortent dans le sang périphérique que la nuit."
  },
  
  // --- PLASMODIUM (PALUDISME) ---
  {
    id: 'tp_sang_4',
    question: "Sur un frottis, vous voyez des hématies de taille normale, avec des taches de Maurer et des trophozoïtes en bague. Quel est le diagnostic ?",
    options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale", "Plasmodium malariae"],
    correct: 0,
    explanation: "Les taches de Maurer et l'absence d'augmentation de taille des GR sont typiques de P. falciparum. P. vivax a des granulations de Schüffner et agrandit le GR."
  },
  {
    id: 'tp_sang_5',
    question: "Quelle espèce de Plasmodium présente des gamétocytes en forme de 'banane' ou 'croissant' ?",
    options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium knowlesi", "Plasmodium malariae"],
    correct: 0,
    explanation: "C'est un signe pathognomonique de P. falciparum. Les autres espèces ont des gamétocytes ronds ou ovales."
  },
  {
    id: 'tp_sang_6',
    question: "Quel est le seuil de parasitémie définissant un accès palustre grave (OMS) ?",
    options: ["> 4% ou 5%", "> 0.1%", "> 10%", "Présence de schizontes"],
    correct: 0,
    explanation: "Une parasitémie > 4-5% (ou > 250,000 parasites/µl) est un critère de gravité nécessitant une hospitalisation urgente."
  },
  {
    id: 'tp_sang_7',
    question: "La présence de Schizontes de P. falciparum dans le sang périphérique indique :",
    options: ["Un accès grave / pernicieux", "Une infection débutante", "Une guérison en cours", "Une erreur de coloration"],
    correct: 0,
    explanation: "Normalement, P. falciparum séquestre dans les capillaires profonds. Voir des schizontes en périphérie signe une charge parasitaire massive et un danger imminent."
  },

  // --- AUTRES PARASITES SANGUINS ---
  {
    id: 'tp_sang_8',
    question: "Comment différencier Loa loa de Wuchereria bancrofti au microscope ?",
    options: ["Les noyaux vont jusqu'au bout de la queue chez Loa loa", "Loa loa n'a pas de gaine", "Wuchereria a une queue enroulée", "Impossible au microscope"],
    correct: 0,
    explanation: "Les noyaux somatiques de Loa loa vont jusqu'à l'extrémité de la queue. Chez Wuchereria, l'extrémité caudale est vide (sans noyaux)."
  },
  {
    id: 'tp_sang_9',
    question: "Quelle forme de Leishmania recherche-t-on dans un frottis de moelle osseuse (Myélogramme) ?",
    options: ["Amastigotes (dans les macrophages)", "Promastigotes", "Tripomastigotes", "Kystes"],
    correct: 0,
    explanation: "Dans l'hôte humain, Leishmania est sous forme Amastigote intracellulaire (Corps de Leishman-Donovan). La forme Promastigote se trouve chez le phlébotome."
  },
  {
    id: 'tp_sang_10',
    question: "Les Trypanosomes africains (Maladie du sommeil) se trouvent :",
    options: ["Libres dans le plasma (extracellulaires)", "À l'intérieur des globules rouges", "Dans les lymphocytes", "Dans les plaquettes"],
    correct: 0,
    explanation: "Contrairement au Paludisme, les Trypanosomes sont des flagellés extracellulaires qui nagent entre les cellules sanguines."
  },

  // --- TECHNIQUES AVANCÉES ---
  {
    id: 'tp_sang_11',
    question: "La technique de QBC (Quantitative Buffy Coat) est basée sur :",
    options: ["La fluorescence des parasites centrifugés (Acridine Orange)", "La réaction antigène-anticorps", "La culture in vitro", "La PCR"],
    correct: 0,
    explanation: "Le QBC concentre les parasites dans la couche leucocytaire et utilise l'Acridine Orange pour les rendre fluorescents sous UV."
  },
  {
    id: 'tp_sang_12',
    question: "En cas de parasitémie très faible, quelle technique de concentration est recommandée pour les microfilaires ?",
    options: ["Technique de Knott (Filtration/Lyse)", "Goutte épaisse simple", "Frottis mince", "Kato-Katz"],
    correct: 0,
    explanation: "La technique de Knott utilise 1ml de sang (vs 20µl pour la GE), lyse les GR au formol et concentre les microfilaires par centrifugation."
  }
];

export default sang;
