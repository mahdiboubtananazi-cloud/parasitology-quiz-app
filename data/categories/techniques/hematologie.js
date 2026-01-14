export const questions = [
  // =========================
  // GOUTTE ÉPAISSE (6)
  // =========================
  {
    id: "sang_ge_1",
    axis: "technique",
    question: "Le principe de la goutte épaisse est :",
    options: ["Hémolyse des globules rouges pour concentrer les parasites et augmenter la sensibilité", "Étaler le sang pour observer les parasites en monocouche", "Fixation immédiate au méthanol", "Coloration au bleu de toluidine"],
    correctAnswer: 0,
    explanation: "L’hémolyse des GR permet de concentrer le parasite et augmente la sensibilité environ 20 fois par rapport au frottis."
  },
  {
    id: "sang_ge_2",
    axis: "technique",
    question: "Un élément critique dans la technique de goutte épaisse est :",
    options: ["Sécher longuement avant coloration sans fixation à l’alcool", "Fixer immédiatement au méthanol", "Ajouter du Lugol avant séchage", "Centrifuger le sang avant étalement"],
    correctAnswer: 0,
    explanation: "Le séchage long permet de lysser les GR et éviter de fixer le sang, ce qui rendrait la goutte moins sensible."
  },
  {
    id: "sang_ge_3",
    axis: "technique",
    question: "L’avantage principal de la goutte épaisse par rapport au frottis mince est :",
    options: ["Sensibilité plus élevée pour détecter les parasites", "Identification facile de l’espèce de Plasmodium", "Meilleure morphologie des noyaux", "Observation des granulations de Schüffner"],
    correctAnswer: 0,
    explanation: "La concentration des parasites après hémolyse des GR augmente fortement la sensibilité du test."
  },
  {
    id: "sang_ge_4",
    axis: "technique",
    question: "La goutte épaisse ne doit jamais être :",
    options: ["Fixée à l’alcool avant séchage", "Colorée avec Giemsa", "Séchée à l’air libre", "Examiner au microscope"],
    correctAnswer: 0,
    explanation: "Fixer au méthanol détruirait les parasites et éliminerait l’avantage de concentration."
  },
  {
    id: "sang_ge_5",
    axis: "technique",
    question: "La goutte épaisse permet de détecter principalement :",
    options: ["Plasmodium et microfilaires de filarioses", "Granulations de Schüffner uniquement", "Trypanosomes dans le plasma", "RBC morphologie"],
    correctAnswer: 0,
    explanation: "La concentration rend les parasites sanguins plus visibles même à faible densité."
  },
  {
    id: "sang_ge_6",
    axis: "technique",
    question: "Erreur fréquente lors de la préparation de la goutte épaisse :",
    options: ["Ne pas attendre le séchage complet avant coloration", "Fixer le frottis mince", "Colorer avec Giemsa à pH 7,2", "Centrifuger le sang pour le concentrer"],
    correctAnswer: 0,
    explanation: "Le séchage incomplet entraîne l’hémolyse insuffisante et la dilution des parasites, rendant le test moins sensible."
  },

  // =========================
  // FROTTIS MINCE (6)
  // =========================
  {
    id: "sang_fs_1",
    axis: "technique",
    question: "Le principe du frottis sanguin mince est :",
    options: ["Étaler le sang en monocouche pour observer la morphologie fine des parasites", "Hémolyse des globules rouges", "Centrifugation avec fluorochrome", "Flottation dans solution saline"],
    correctAnswer: 0,
    explanation: "Le frottis mince permet d’observer la forme et les structures internes des parasites pour déterminer l’espèce."
  },
  {
    id: "sang_fs_2",
    axis: "technique",
    question: "Pour un frottis mince, la fixation se fait avec :",
    options: ["Méthanol", "Éther", "Formol 10%", "Glycérine"],
    correctAnswer: 0,
    explanation: "Le méthanol fixe le frottis et conserve la morphologie des parasites."
  },
  {
    id: "sang_fs_3",
    axis: "technique",
    question: "Avantage principal du frottis mince :",
    options: ["Identification spécifique des espèces de Plasmodium", "Concentration maximale des parasites", "Observation de larves d’Anguillule", "Quantification des œufs de Schistosoma"],
    correctAnswer: 0,
    explanation: "La morphologie fine est préservée, ce qui permet de distinguer P. falciparum, P. vivax, P. malariae, etc."
  },
  {
    id: "sang_fs_4",
    axis: "technique",
    question: "Frottis mince et goutte épaisse sont complémentaires car :",
    options: ["Goutte pour sensibilité, frottis pour morphologie", "Les deux pour la quantification uniquement", "Frottis pour concentration, goutte pour morphologie", "Indifférents selon le parasite"],
    correctAnswer: 0,
    explanation: "La goutte détecte les infections à faible densité, le frottis permet l’identification spécifique."
  },
  {
    id: "sang_fs_5",
    axis: "technique",
    question: "Le frottis mince doit être coloré avec :",
    options: ["Giemsa après fixation méthanol", "Éther", "Formol", "Bleu de méthylène sans fixation"],
    correctAnswer: 0,
    explanation: "La coloration Giemsa après fixation permet de visualiser la morphologie correcte des parasites."
  },
  {
    id: "sang_fs_6",
    axis: "technique",
    question: "Erreur fréquente sur frottis mince :",
    options: ["Étaler trop épais empêchant la lecture correcte", "Séchage long avant coloration", "Ne pas fixer au méthanol", "Centrifuger avant étalement"],
    correctAnswer: 0,
    explanation: "Un frottis trop épais empêche la distinction des parasites et rend le diagnostic impossible."
  },

  // =========================
  // COLORATION DE GIEMSA (4)
  // =========================
  {
    id: "sang_giemsa_1",
    axis: "coloration",
    question: "Le pH optimal de Giemsa pour observer les granulations de Schüffner ou Maurer est :",
    options: ["7,2", "6,0", "8,5", "5,5"],
    correctAnswer: 0,
    explanation: "Un pH de 7,2 permet de révéler correctement les granulations caractéristiques des érythrocytes parasités."
  },
  {
    id: "sang_giemsa_2",
    axis: "coloration",
    question: "Une coloration Giemsa incorrecte peut entraîner :",
    options: ["Difficulté à identifier l’espèce de Plasmodium", "Meilleure détection des trophozoïtes", "Quantification facile des œufs de Schistosoma", "Conservation des microfilaires"],
    correctAnswer: 0,
    explanation: "Un pH ou temps de coloration inadéquat masque les granulations et altère la morphologie du parasite."
  },
  {
    id: "sang_giemsa_3",
    axis: "coloration",
    question: "La coloration Giemsa est utilisée pour :",
    options: ["Frottis mince et goutte épaisse séchée", "Uniquement pour Baermann", "Pour Ritchie", "Pour Willis"],
    correctAnswer: 0,
    explanation: "Elle permet de visualiser les parasites dans les deux types de préparations sanguines après séchage et fixation appropriés."
  },
  {
    id: "sang_giemsa_4",
    axis: "coloration",
    question: "L’avantage principal de Giemsa :",
    options: ["Visualisation fine des structures intra-érythrocytaires et microfilaires", "Concentration rapide des parasites", "Migration thermotropique", "Flottation osmotique"],
    correctAnswer: 0,
    explanation: "Elle révèle les détails morphologiques nécessaires pour le diagnostic spécifique."
  },

  // =========================
  // QBC ET TRYPANOSOMES (9)
  // =========================
  {
    id: "sang_qbc_1",
    axis: "technique",
    question: "Le principe du QBC est :",
    options: ["Centrifugation + fluorochrome (Orange d’Acridine) + flotteur pour concentrer parasites", "Hémolyse des GR", "Flottation dans solution saline", "Frottis mince coloré au Giemsa"],
    correctAnswer: 0,
    explanation: "Les parasites sont concentrés dans le buffy coat et mis en évidence par fluorescence."
  },
  {
    id: "sang_qbc_2",
    axis: "technique",
    question: "Avantage principal du QBC :",
    options: ["Rapidité de détection", "Visualisation des granulations intra-érythrocytaires", "Quantification exacte des œufs", "Observation des trophozoïtes vivants"],
    correctAnswer: 0,
    explanation: "Le QBC permet un dépistage rapide, souvent utilisé pour le paludisme."
  },
  {
    id: "sang_qbc_3",
    axis: "technique",
    question: "La coloration du QBC utilise :",
    options: ["Orange d’Acridine", "Giemsa", "Bleu de méthylène", "Lugol"],
    correctAnswer: 0,
    explanation: "Le fluorochrome Orange d’Acridine permet de visualiser les parasites par fluorescence."
  },
  {
    id: "sang_qbc_4",
    axis: "technique",
    question: "Le QBC sépare les cellules sanguines grâce à :",
    options: ["Centrifugation et flottabilité dans le capillaire", "Fixation au méthanol", "Hémolyse des GR", "Flottation osmotique"],
    correctAnswer: 0,
    explanation: "La centrifugation concentre les leucocytes et parasites dans le buffy coat."
  },
  {
    id: "sang_tryp_1",
    axis: "technique",
    question: "La recherche de trypanosomes peut se faire par :",
    options: ["Centrifugation sur tube capillaire (Woo) ou CTC", "Frottis mince uniquement", "Goutte épaisse uniquement", "Willis ou Baermann"],
    correctAnswer: 0,
    explanation: "Ces techniques permettent de concentrer les trypanosomes pour une observation microscopique."
  },
  {
    id: "sang_tryp_2",
    axis: "technique",
    question: "Avantage de la centrifugation Woo pour trypanosomes :",
    options: ["Concentration rapide dans le capillaire pour observation", "Flottation des œufs lourds", "Observation des trophozoïtes vivants de Giardia", "Quantification des microfilaires"],
    correctAnswer: 0,
    explanation: "Elle permet d’accumuler les parasites dans un petit volume pour faciliter leur détection."
  },
  {
    id: "sang_tryp_3",
    axis: "technique",
    question: "Le CTC (capillary tube centrifugation) est utilisé pour :",
    options: ["Observation rapide de trypanosomes dans le sang", "Flottation des œufs d’helminthes", "Observation des larves d’Anguillule", "Coloration de schizontes de Plasmodium"],
    correctAnswer: 0,
    explanation: "Le CTC concentre les parasites et permet leur visualisation rapide."
  },
  {
    id: "sang_tryp_4",
    axis: "technique",
    question: "Erreur fréquente dans QBC ou Woo :",
    options: ["Ne pas respecter centrifugation ou temps de fluorochrome", "Fixer le frottis mince", "Séchage trop long de la goutte épaisse", "Flotter les œufs lourds"],
    correctAnswer: 0,
    explanation: "Un protocole incorrect peut empêcher la visualisation des parasites et donner un faux négatif."
  },
  {
    id: "sang_tryp_5",
    axis: "technique",
    question: "Les tubes QBC doivent être manipulés :",
    options: ["Avec précaution pour éviter contact avec sang infecté", "Ouverts pour pipetage direct", "Congelés immédiatement", "Colorés à l’avance"],
    correctAnswer: 0,
    explanation: "Respecter les règles de biosécurité limite le risque biologique pour le personnel."
  }
];
