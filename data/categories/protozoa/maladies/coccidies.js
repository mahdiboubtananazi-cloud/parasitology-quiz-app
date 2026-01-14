// ==========================================
// 1. MORPHOLOGIE (15 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "cocci_morph_1",
    "axis": "morphology",
    "question": "Quel est le critère morphologique distinctif de l'oocyste d'Isospora belli ?",
    "options": [
      "Grande taille (20–30 µm) et forme ovale",
      "Petite taille (4–5 µm) et forme ronde",
      "Forme intracellulaire obligatoire",
      "Autofluorescence intense sous UV"
    ],
    "correctAnswer": 0,
    "explanation": "Isospora belli présente de grands oocystes ovoïdes, facilement visibles au microscope optique."
  },
  {
    "id": "cocci_morph_2",
    "axis": "morphology",
    "question": "Quelle est la taille moyenne des oocystes de Cryptosporidium spp. ?",
    "options": [
      "4 à 6 µm",
      "10 à 15 µm",
      "20 à 30 µm",
      "50 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes de Cryptosporidium sont très petits, comparables à des levures."
  },
  {
    "id": "cocci_morph_3",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique permet d’identifier Cyclospora cayetanensis ?",
    "options": [
      "Autofluorescence bleue-verte sous UV",
      "Forme ovoïde allongée",
      "Présence de flagelles",
      "Taille inférieure à 3 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Cyclospora est unique par son autofluorescence spontanée en microscopie UV."
  },
  {
    "id": "cocci_morph_4",
    "axis": "morphology",
    "question": "Quelle est la forme typique de l’oocyste de Cryptosporidium ?",
    "options": [
      "Ronde",
      "Ovale",
      "En citron",
      "En croissant"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes de Cryptosporidium sont sphériques et très réguliers."
  },
  {
    "id": "cocci_morph_5",
    "axis": "morphology",
    "question": "Quel couple parasite–taille est correctement apparié ?",
    "options": [
      "Isospora belli – 25 µm",
      "Cryptosporidium – 20 µm",
      "Cyclospora – 2 µm",
      "Isospora – 5 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Isospora est la plus grande des coccidies intestinales humaines."
  },
  {
    "id": "cocci_morph_6",
    "axis": "morphology",
    "question": "Quelle coloration met classiquement en évidence les oocystes de coccidies ?",
    "options": [
      "Ziehl-Neelsen modifiée",
      "Gram",
      "Giemsa standard",
      "Bleu de méthylène"
    ],
    "correctAnswer": 0,
    "explanation": "Les coccidies sont acido-alcoolo-résistantes."
  },
  {
    "id": "cocci_morph_7",
    "axis": "morphology",
    "question": "Quel parasite présente des oocystes partiellement acido-alcoolo-résistants, parfois inconstants ?",
    "options": [
      "Cyclospora cayetanensis",
      "Cryptosporidium parvum",
      "Isospora belli",
      "Entamoeba histolytica"
    ],
    "correctAnswer": 0,
    "explanation": "La coloration de Cyclospora est variable, ce qui peut compliquer le diagnostic."
  },
  {
    "id": "cocci_morph_8",
    "axis": "morphology",
    "question": "Quel élément morphologique aide à distinguer Cryptosporidium d’une levure ?",
    "options": [
      "Coloration acido-alcoolo-résistante",
      "Taille microscopique",
      "Forme ronde",
      "Absence de noyau visible"
    ],
    "correctAnswer": 0,
    "explanation": "La résistance à l’acide est un critère clé pour éviter les confusions."
  },
  {
    "id": "cocci_morph_9",
    "axis": "morphology",
    "question": "Combien de sporocystes contient un oocyste mûr de Cyclospora ?",
    "options": [
      "2 sporocystes",
      "4 sporocystes",
      "1 sporocyste",
      "Aucun sporocyste"
    ],
    "correctAnswer": 0,
    "explanation": "Cyclospora possède 2 sporocystes contenant chacun 2 sporozoïtes."
  },
  {
    "id": "cocci_morph_10",
    "axis": "morphology",
    "question": "Quel parasite possède des oocystes immédiatement infestants à l’excrétion ?",
    "options": [
      "Cryptosporidium spp.",
      "Isospora belli",
      "Cyclospora cayetanensis",
      "Eimeria spp."
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes de Cryptosporidium sont déjà sporulés."
  },
  {
    "id": "cocci_morph_11",
    "axis": "morphology",
    "question": "Quel parasite présente des oocystes ellipsoïdes parfois décrits en « citron » ?",
    "options": [
      "Isospora belli",
      "Cryptosporidium",
      "Cyclospora",
      "Toxoplasma gondii"
    ],
    "correctAnswer": 0,
    "explanation": "La forme allongée est caractéristique d’Isospora."
  },
  {
    "id": "cocci_morph_12",
    "axis": "morphology",
    "question": "Quelle est la taille approximative des oocystes de Cyclospora ?",
    "options": [
      "8 à 10 µm",
      "4 à 5 µm",
      "20 à 30 µm",
      "15 à 20 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Cyclospora est intermédiaire en taille entre Cryptosporidium et Isospora."
  },
  {
    "id": "cocci_morph_13",
    "axis": "morphology",
    "question": "Quel aspect microscopique est typique de Cryptosporidium sur coupe histologique ?",
    "options": [
      "Parasite en position intracellulaire extracytoplasmique",
      "Parasite strictement intracellulaire cytoplasmique",
      "Parasite libre dans la lumière",
      "Parasite intra-érythrocytaire"
    ],
    "correctAnswer": 0,
    "explanation": "Cryptosporidium est fixé à la bordure en brosse sans pénétrer le cytoplasme."
  },
  {
    "id": "cocci_morph_14",
    "axis": "morphology",
    "question": "Quel parasite est le plus difficile à visualiser en examen direct standard des selles ?",
    "options": [
      "Cryptosporidium spp.",
      "Isospora belli",
      "Ascaris lumbricoides",
      "Taenia saginata"
    ],
    "correctAnswer": 0,
    "explanation": "La petite taille de Cryptosporidium impose des colorations spécifiques."
  },
  {
    "id": "cocci_morph_15",
    "axis": "morphology",
    "question": "Quel couple parasite–propriété morphologique est exact ?",
    "options": [
      "Cyclospora – autofluorescence UV",
      "Cryptosporidium – oocyste ovale de 25 µm",
      "Isospora – autofluorescence",
      "Cyclospora – taille < 5 µm"
    ],
    "correctAnswer": 0,
    "explanation": "L’autofluorescence est un critère diagnostique clé de Cyclospora."
  }
];
// ==========================================
// 2. CYCLE DE VIE (15 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "cocci_cycle_1",
    "axis": "lifecycle",
    "question": "Quel type de cycle biologique caractérise les coccidies intestinales humaines (Cryptosporidium, Isospora, Cyclospora) ?",
    "options": [
      "Cycle monoxène avec un seul hôte",
      "Cycle hétéroxène avec deux hôtes",
      "Cycle nécessitant un hôte intermédiaire animal",
      "Cycle vectoriel obligatoire"
    ],
    "correctAnswer": 0,
    "explanation": "Les coccidies intestinales accomplissent l’ensemble de leur cycle chez l’homme."
  },
  {
    "id": "cocci_cycle_2",
    "axis": "lifecycle",
    "question": "Quel est le site principal de multiplication des coccidies intestinales chez l’homme ?",
    "options": [
      "Les entérocytes de l’intestin grêle",
      "Les hépatocytes",
      "Les macrophages",
      "Le côlon uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Les parasites se développent au niveau de l’épithélium du grêle."
  },
  {
    "id": "cocci_cycle_3",
    "axis": "lifecycle",
    "question": "Quelle est la forme infestante pour l’homme dans les coccidioses intestinales ?",
    "options": [
      "L’oocyste ingéré par voie orale",
      "Le trophozoïte libre",
      "Le sporozoïte injecté par un vecteur",
      "La forme kystique tissulaire"
    ],
    "correctAnswer": 0,
    "explanation": "La contamination se fait par ingestion d’oocystes."
  },
  {
    "id": "cocci_cycle_4",
    "axis": "lifecycle",
    "question": "Quel parasite possède des oocystes déjà sporulés au moment de l’excrétion ?",
    "options": [
      "Cryptosporidium spp.",
      "Cyclospora cayetanensis",
      "Isospora belli",
      "Eimeria spp."
    ],
    "correctAnswer": 0,
    "explanation": "Cela explique le potentiel d’auto-infestation immédiate."
  },
  {
    "id": "cocci_cycle_5",
    "axis": "lifecycle",
    "question": "Quel phénomène explique la chronicité des cryptosporidioses chez l’immunodéprimé ?",
    "options": [
      "Auto-infestation endogène",
      "Multiplication hépatique secondaire",
      "Latence tissulaire prolongée",
      "Réinfection vectorielle"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes sporulés peuvent relancer le cycle chez le même hôte."
  },
  {
    "id": "cocci_cycle_6",
    "axis": "lifecycle",
    "question": "Quelle est la particularité de l’auto-infestation dans la cryptosporidiose ?",
    "options": [
      "Réplication continue sans nouvelle exposition",
      "Besoin d’un hôte intermédiaire",
      "Passage par le foie",
      "Transmission transplacentaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’auto-infestation explique l’évolution prolongée."
  },
  {
    "id": "cocci_cycle_7",
    "axis": "lifecycle",
    "question": "Pourquoi les piscines peuvent-elles être une source de cryptosporidiose ?",
    "options": [
      "Résistance extrême des oocystes au chlore",
      "Transmission aérienne",
      "Multiplication dans l’eau",
      "Contamination par les algues"
    ],
    "correctAnswer": 0,
    "explanation": "Le chlore habituel ne détruit pas les oocystes."
  },
  {
    "id": "cocci_cycle_8",
    "axis": "lifecycle",
    "question": "Quelle étape du cycle a lieu exclusivement à l’intérieur des cellules intestinales ?",
    "options": [
      "Schizogonie et gamogonie",
      "Sporogonie",
      "Contamination orale",
      "Excrétion fécale"
    ],
    "correctAnswer": 0,
    "explanation": "Les phases asexuée et sexuée sont intracellulaires."
  },
  {
    "id": "cocci_cycle_9",
    "axis": "lifecycle",
    "question": "Quel parasite nécessite une maturation environnementale de l’oocyste avant d’être infestant ?",
    "options": [
      "Cyclospora cayetanensis",
      "Cryptosporidium spp.",
      "Isospora belli",
      "Balantidium coli"
    ],
    "correctAnswer": 0,
    "explanation": "La sporulation se fait dans le milieu extérieur."
  },
  {
    "id": "cocci_cycle_10",
    "axis": "lifecycle",
    "question": "Quel est le principal mode de transmission des coccidies intestinales ?",
    "options": [
      "Voie oro-fécale",
      "Voie transcutanée",
      "Voie sexuelle exclusive",
      "Voie vectorielle"
    ],
    "correctAnswer": 0,
    "explanation": "La contamination est liée à l’ingestion d’eau ou d’aliments contaminés."
  },
  {
    "id": "cocci_cycle_11",
    "axis": "lifecycle",
    "question": "Chez quel type de patient le cycle peut-il devenir incontrôlable ?",
    "options": [
      "Immunodéprimé (VIH, greffe)",
      "Sujet immunocompétent",
      "Enfant sain",
      "Sujet vacciné"
    ],
    "correctAnswer": 0,
    "explanation": "Le contrôle immunitaire est essentiel pour limiter la réplication."
  },
  {
    "id": "cocci_cycle_12",
    "axis": "lifecycle",
    "question": "Quelle est la conséquence directe de l’atteinte des entérocytes ?",
    "options": [
      "Malabsorption et diarrhée",
      "Hémorragie massive",
      "Occlusion intestinale",
      "Ictère"
    ],
    "correctAnswer": 0,
    "explanation": "La destruction de la bordure en brosse entraîne une diarrhée aqueuse."
  },
  {
    "id": "cocci_cycle_13",
    "axis": "lifecycle",
    "question": "Quelle caractéristique rend l’éradication environnementale difficile ?",
    "options": [
      "Survie prolongée des oocystes",
      "Besoin d’un hôte animal",
      "Fragilité au dessèchement",
      "Sensibilité aux désinfectants"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes survivent longtemps dans l’environnement."
  },
  {
    "id": "cocci_cycle_14",
    "axis": "lifecycle",
    "question": "Dans quel compartiment a lieu la sporogonie chez Cyclospora et Isospora ?",
    "options": [
      "Milieu extérieur",
      "Intestin grêle",
      "Foie",
      "Ganglions"
    ],
    "correctAnswer": 0,
    "explanation": "La sporulation se fait après excrétion."
  },
  {
    "id": "cocci_cycle_15",
    "axis": "lifecycle",
    "question": "Quel élément du cycle explique la contagiosité interhumaine élevée ?",
    "options": [
      "Faible dose infestante d’oocystes",
      "Transmission aérienne",
      "Vecteur insecte",
      "Cycle long de maturation"
    ],
    "correctAnswer": 0,
    "explanation": "Quelques oocystes suffisent à provoquer l’infection."
  }
];
// ==========================================
// 3. CLINIQUE (15 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "cocci_clin_1",
    "axis": "clinical",
    "question": "Quel est le terrain le plus à risque de formes graves de coccidioses intestinales ?",
    "options": [
      "Patient immunodéprimé avec CD4 < 100/mm³",
      "Sujet immunocompétent jeune",
      "Femme enceinte immunisée",
      "Enfant sans antécédent"
    ],
    "correctAnswer": 0,
    "explanation": "Les patients VIH sévèrement immunodéprimés sont les plus exposés."
  },
  {
    "id": "cocci_clin_2",
    "axis": "clinical",
    "question": "Quel symptôme digestif est le plus caractéristique des coccidioses intestinales ?",
    "options": [
      "Diarrhée aqueuse profuse non sanglante",
      "Diarrhée glairo-sanglante",
      "Constipation chronique",
      "Douleurs coliques avec ténesme"
    ],
    "correctAnswer": 0,
    "explanation": "La diarrhée est abondante, aqueuse et sans sang."
  },
  {
    "id": "cocci_clin_3",
    "axis": "clinical",
    "question": "Chez le sujet immunocompétent, l’évolution est le plus souvent :",
    "options": [
      "Aiguë et spontanément résolutive",
      "Chronique et mortelle",
      "Toujours asymptomatique",
      "Responsable de méga-côlon"
    ],
    "correctAnswer": 0,
    "explanation": "L’immunité permet généralement une guérison spontanée."
  },
  {
    "id": "cocci_clin_4",
    "axis": "clinical",
    "question": "Quel mécanisme explique la perte de poids majeure observée ?",
    "options": [
      "Malabsorption intestinale",
      "Hyperthyroïdie associée",
      "Anorexie centrale",
      "Hémorragies digestives"
    ],
    "correctAnswer": 0,
    "explanation": "L’atteinte des entérocytes entraîne une malabsorption."
  },
  {
    "id": "cocci_clin_5",
    "axis": "clinical",
    "question": "Quelle coccidiose est classiquement associée à des complications biliaires ?",
    "options": [
      "Cryptosporidiose",
      "Isosporose",
      "Cyclosporose",
      "Toxoplasmose"
    ],
    "correctAnswer": 0,
    "explanation": "Cryptosporidium peut atteindre les voies biliaires."
  },
  {
    "id": "cocci_clin_6",
    "axis": "clinical",
    "question": "Quelle complication biliaire peut être observée chez le patient VIH ?",
    "options": [
      "Cholangite scléroseuse",
      "Hépatite fulminante",
      "Cirrhose biliaire primitive",
      "Abcès hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "La cryptosporidiose biliaire est décrite chez les immunodéprimés."
  },
  {
    "id": "cocci_clin_7",
    "axis": "clinical",
    "question": "Quel est le retentissement hydro-électrolytique principal ?",
    "options": [
      "Déshydratation sévère",
      "Hypercalcémie",
      "Acidose respiratoire",
      "Hyperkaliémie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "Les pertes digestives entraînent une déshydratation importante."
  },
  {
    "id": "cocci_clin_8",
    "axis": "clinical",
    "question": "Quelle caractéristique différencie la diarrhée des coccidioses d’une amibiase ?",
    "options": [
      "Absence de sang",
      "Présence de glaires",
      "Douleurs rectales",
      "Ténesme"
    ],
    "correctAnswer": 0,
    "explanation": "La diarrhée coccidienne est classiquement non sanglante."
  },
  {
    "id": "cocci_clin_9",
    "axis": "clinical",
    "question": "Quel parasite est responsable de diarrhées prolongées chez le patient VIH non traité ?",
    "options": [
      "Cryptosporidium spp.",
      "Giardia intestinalis",
      "Entamoeba histolytica",
      "Ascaris lumbricoides"
    ],
    "correctAnswer": 0,
    "explanation": "Cryptosporidium est une cause majeure de diarrhée chronique chez le VIH."
  },
  {
    "id": "cocci_clin_10",
    "axis": "clinical",
    "question": "Quel signe général accompagne souvent les formes sévères ?",
    "options": [
      "Amaigrissement important",
      "Fièvre élevée constante",
      "Adénopathies généralisées",
      "Ictère précoce"
    ],
    "correctAnswer": 0,
    "explanation": "La diarrhée chronique entraîne un amaigrissement marqué."
  },
  {
    "id": "cocci_clin_11",
    "axis": "clinical",
    "question": "Chez l’immunodéprimé, la diarrhée est le plus souvent :",
    "options": [
      "Chronique et récidivante",
      "Brève et autolimitée",
      "Hémorragique",
      "Constante avec douleurs intenses"
    ],
    "correctAnswer": 0,
    "explanation": "L’absence de contrôle immunitaire favorise la chronicité."
  },
  {
    "id": "cocci_clin_12",
    "axis": "clinical",
    "question": "Quel organe extra-intestinal peut être atteint dans les formes avancées ?",
    "options": [
      "Voies biliaires",
      "Poumon",
      "Rein",
      "Cerveau"
    ],
    "correctAnswer": 0,
    "explanation": "L’atteinte biliaire est surtout décrite avec Cryptosporidium."
  },
  {
    "id": "cocci_clin_13",
    "axis": "clinical",
    "question": "Quel est le principal diagnostic différentiel chez le patient VIH avec diarrhée aqueuse ?",
    "options": [
      "Microsporidiose",
      "Cancer colorectal",
      "Rectocolite hémorragique",
      "Diverticulite"
    ],
    "correctAnswer": 0,
    "explanation": "Les microsporidies donnent un tableau proche."
  },
  {
    "id": "cocci_clin_14",
    "axis": "clinical",
    "question": "Quel symptôme traduit une atteinte biliaire associée ?",
    "options": [
      "Douleur de l’hypochondre droit",
      "Hématémèse",
      "Constipation",
      "Toux chronique"
    ],
    "correctAnswer": 0,
    "explanation": "Les douleurs biliaires peuvent révéler une cholangite."
  },
  {
    "id": "cocci_clin_15",
    "axis": "clinical",
    "question": "Quel facteur améliore le pronostic chez le patient VIH ?",
    "options": [
      "Restauration immunitaire par traitement antirétroviral",
      "Antibiothérapie large",
      "Chirurgie digestive",
      "Jeûne prolongé"
    ],
    "correctAnswer": 0,
    "explanation": "La remontée des CD4 permet le contrôle de l’infection."
  }
];
// ==========================================
// 4. DIAGNOSTIC (15 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "cocci_diag_1",
    "axis": "diagnosis",
    "question": "Quelle coloration est classiquement utilisée pour visualiser les oocystes de Cryptosporidium ?",
    "options": [
      "Ziehl-Neelsen modifié (Kinyoun)",
      "Coloration de Gram",
      "Giemsa",
      "PAS"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes sont acido-alcoolo-résistants et visibles en Ziehl-Neelsen modifié."
  },
  {
    "id": "cocci_diag_2",
    "axis": "diagnosis",
    "question": "Quel aspect typique prennent les oocystes après Ziehl-Neelsen modifié ?",
    "options": [
      "Oocystes roses/rouges sur fond bleu-vert",
      "Oocystes bleus sur fond rose",
      "Oocystes incolores",
      "Parasites noirs"
    ],
    "correctAnswer": 0,
    "explanation": "Ils apparaissent rose vif sur un fond contrasté."
  },
  {
    "id": "cocci_diag_3",
    "axis": "diagnosis",
    "question": "Quelle technique permet d’identifier spécifiquement Cyclospora cayetanensis ?",
    "options": [
      "Autofluorescence sous UV",
      "Coloration de Gram",
      "Culture sur gélose",
      "Test de Montenegro"
    ],
    "correctAnswer": 0,
    "explanation": "Cyclospora présente une autofluorescence caractéristique."
  },
  {
    "id": "cocci_diag_4",
    "axis": "diagnosis",
    "question": "Sous quelle longueur d’onde observe-t-on l’autofluorescence de Cyclospora ?",
    "options": [
      "UV (microscope à fluorescence)",
      "Lumière polarisée",
      "Lumière infrarouge",
      "Lumière blanche standard"
    ],
    "correctAnswer": 0,
    "explanation": "L’examen en fluorescence UV est clé."
  },
  {
    "id": "cocci_diag_5",
    "axis": "diagnosis",
    "question": "Quel test permet un diagnostic rapide de Cryptosporidium dans les selles ?",
    "options": [
      "Recherche d’antigènes (ELISA / immunochromatographie)",
      "Hémoculture",
      "Sérologie IgG",
      "PCR sanguine"
    ],
    "correctAnswer": 0,
    "explanation": "Les tests antigéniques sont sensibles et rapides."
  },
  {
    "id": "cocci_diag_6",
    "axis": "diagnosis",
    "question": "Quel parasite est le plus fréquemment détecté par tests antigéniques commerciaux ?",
    "options": [
      "Cryptosporidium spp.",
      "Isospora belli",
      "Cyclospora cayetanensis",
      "Sarcocystis"
    ],
    "correctAnswer": 0,
    "explanation": "Les tests sont surtout développés pour Cryptosporidium."
  },
  {
    "id": "cocci_diag_7",
    "axis": "diagnosis",
    "question": "Pourquoi la Ziehl-Neelsen classique est-elle moins adaptée ?",
    "options": [
      "Elle est trop agressive et décolore les oocystes",
      "Elle ne colore que les bactéries",
      "Elle est réservée aux virus",
      "Elle est trop sensible"
    ],
    "correctAnswer": 0,
    "explanation": "La version modifiée est mieux tolérée par les oocystes."
  },
  {
    "id": "cocci_diag_8",
    "axis": "diagnosis",
    "question": "Quelle est la principale difficulté diagnostique des coccidioses ?",
    "options": [
      "Petite taille et excrétion intermittente des oocystes",
      "Culture longue",
      "Parasitémie faible",
      "Confusion avec des levures"
    ],
    "correctAnswer": 0,
    "explanation": "La taille réduite et l’excrétion variable compliquent le diagnostic."
  },
  {
    "id": "cocci_diag_9",
    "axis": "diagnosis",
    "question": "Quel examen est indispensable chez un patient VIH avec diarrhée chronique ?",
    "options": [
      "Examen parasitologique des selles avec colorations spécifiques",
      "Sérologie parasitaire",
      "Scanner abdominal",
      "Coproculture bactérienne seule"
    ],
    "correctAnswer": 0,
    "explanation": "Les colorations spécifiques sont essentielles."
  },
  {
    "id": "cocci_diag_10",
    "axis": "diagnosis",
    "question": "Combien d’examens de selles sont recommandés pour améliorer la sensibilité ?",
    "options": [
      "Au moins 3 examens",
      "Un seul suffit",
      "10 examens consécutifs",
      "Uniquement un prélèvement rectal"
    ],
    "correctAnswer": 0,
    "explanation": "L’excrétion intermittente impose des examens répétés."
  },
  {
    "id": "cocci_diag_11",
    "axis": "diagnosis",
    "question": "Quel parasite est le plus petit et donc le plus difficile à visualiser ?",
    "options": [
      "Cryptosporidium",
      "Isospora",
      "Cyclospora",
      "Eimeria"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes de Cryptosporidium mesurent ~5 µm."
  },
  {
    "id": "cocci_diag_12",
    "axis": "diagnosis",
    "question": "Quel élément permet de différencier un oocyste de Cyclospora d’un artefact ?",
    "options": [
      "Autofluorescence spécifique",
      "Présence de flagelle",
      "Motilité",
      "Coloration Gram positive"
    ],
    "correctAnswer": 0,
    "explanation": "L’autofluorescence est très discriminante."
  },
  {
    "id": "cocci_diag_13",
    "axis": "diagnosis",
    "question": "Quelle technique est la plus sensible en laboratoire spécialisé ?",
    "options": [
      "PCR sur selles",
      "Examen direct simple",
      "Sérologie",
      "Hémoculture"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR permet une identification précise des espèces."
  },
  {
    "id": "cocci_diag_14",
    "axis": "diagnosis",
    "question": "Pourquoi la sérologie est-elle peu utile ?",
    "options": [
      "Infection strictement intestinale sans réponse sérique fiable",
      "Anticorps toujours absents",
      "Réaction croisée majeure",
      "Infection uniquement aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "La réponse humorale est peu exploitable."
  },
  {
    "id": "cocci_diag_15",
    "axis": "diagnosis",
    "question": "Quel examen oriente fortement vers une cryptosporidiose biliaire ?",
    "options": [
      "Mise en évidence d’oocystes dans la bile",
      "Sérologie IgM positive",
      "Biopsie hépatique systématique",
      "Hémoculture positive"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes peuvent être retrouvés dans les voies biliaires."
  }
];
// ==========================================
// 5. TRAITEMENT (10 Questions)
// ==========================================
const treatmentQuestions = [
  {
    question: "Quel est le traitement de première intention des infections à Isospora belli chez l’adulte immunocompétent ?",
    options: [
      "Métronidazole",
      "Albendazole",
      "Cotrimoxazole (Bactrim)",
      "Nitazoxanide"
    ],
    answer: 2,
    explanation: "Le cotrimoxazole (TMP-SMX) est le traitement de choix des isosporoses, avec une excellente efficacité clinique et parasitologique."
  },
  {
    question: "Concernant Cyclospora cayetanensis, quelle affirmation thérapeutique est correcte ?",
    options: [
      "La nitazoxanide est le traitement curatif de référence",
      "Le traitement repose sur l’albendazole",
      "Le cotrimoxazole est le traitement de choix",
      "Aucun traitement spécifique n’est disponible"
    ],
    answer: 2,
    explanation: "Comme pour Isospora, le cotrimoxazole est le traitement de référence des infections à Cyclospora."
  },
  {
    question: "Quel est le principal objectif thérapeutique chez un patient VIH présentant une cryptosporidiose chronique ?",
    options: [
      "Eradication parasitaire par antiparasitaires",
      "Traitement prolongé par cotrimoxazole",
      "Restauration de l’immunité par les ARV",
      "Chimioprophylaxie secondaire à vie"
    ],
    answer: 2,
    explanation: "Chez les patients VIH, la restauration immunitaire par le traitement antirétroviral est la mesure la plus efficace contre la cryptosporidiose."
  },
  {
    question: "Quel médicament peut réduire la durée et l’intensité des symptômes de cryptosporidiose sans assurer une guérison complète ?",
    options: [
      "Cotrimoxazole",
      "Nitazoxanide",
      "Métronidazole",
      "Ivermectine"
    ],
    answer: 1,
    explanation: "La nitazoxanide peut améliorer les symptômes de la cryptosporidiose, surtout chez l’immunocompétent, sans éradiquer totalement le parasite."
  },
  {
    question: "Chez un patient immunodéprimé, pourquoi le traitement antiparasitaire seul est-il insuffisant contre Cryptosporidium ?",
    options: [
      "Résistance systématique aux antiparasitaires",
      "Localisation extra-intestinale exclusive",
      "Dépendance majeure au statut immunitaire de l’hôte",
      "Mauvaise absorption intestinale des médicaments"
    ],
    answer: 2,
    explanation: "Le contrôle de Cryptosporidium dépend largement de l’immunité cellulaire, expliquant l’échec fréquent des traitements isolés chez l’immunodéprimé."
  },
  {
    question: "Quel schéma thérapeutique est recommandé pour prévenir les rechutes d’isosporose chez les patients VIH ?",
    options: [
      "Nitazoxanide en continu",
      "Cotrimoxazole en prophylaxie secondaire",
      "Albendazole hebdomadaire",
      "Aucune prophylaxie n’est possible"
    ],
    answer: 1,
    explanation: "Une prophylaxie secondaire par cotrimoxazole est indiquée chez les patients VIH tant que l’immunité n’est pas restaurée."
  },
  {
    question: "Quel est le principal facteur conditionnant la durée du traitement des coccidioses intestinales chez le patient VIH ?",
    options: [
      "La charge parasitaire initiale",
      "Le taux de CD4",
      "L’âge du patient",
      "La présence de diarrhée aiguë"
    ],
    answer: 1,
    explanation: "Le taux de CD4 guide la durée du traitement et la nécessité d’une prophylaxie secondaire."
  },
  {
    question: "Pourquoi le cotrimoxazole est-il préféré à d’autres antiparasitaires pour Isospora et Cyclospora ?",
    options: [
      "Spectre antiviral associé",
      "Meilleure tolérance digestive",
      "Efficacité démontrée et faible taux de rechute",
      "Coût inférieur uniquement"
    ],
    answer: 2,
    explanation: "Le cotrimoxazole présente une efficacité élevée avec une clairance parasitaire rapide et peu de rechutes."
  },
  {
    question: "Quelle stratégie thérapeutique est prioritaire en cas de cryptosporidiose sévère chez un patient VIH non traité ?",
    options: [
      "Augmenter les doses de nitazoxanide",
      "Débuter rapidement un traitement antirétroviral",
      "Associer plusieurs antiparasitaires",
      "Instaurer une corticothérapie"
    ],
    answer: 1,
    explanation: "L’instauration rapide des ARV permet une récupération immunitaire essentielle au contrôle de l’infection."
  },
  {
    question: "Concernant la prise en charge globale des coccidioses intestinales, quelle mesure est indispensable en complément du traitement spécifique ?",
    options: [
      "Vaccination antiparasitaire",
      "Réhydratation et correction des troubles hydro-électrolytiques",
      "Antibiothérapie à large spectre",
      "Supplémentation systématique en fer"
    ],
    answer: 1,
    explanation: "La réhydratation est essentielle pour prévenir les complications liées à la diarrhée, quelle que soit l’étiologie parasitaire."
  }
];

// ==========================================
// EXPORT FINAL
// ==========================================
export const questions = [
  ...morphologyQuestions,
  ...lifecycleQuestions,
  ...clinicalQuestions,
  ...diagnosisQuestions,
  ...treatmentQuestions
];
