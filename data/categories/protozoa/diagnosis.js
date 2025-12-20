export const diagnosis = [
  // --- PART 1: MICROSCOPY BASICS (EXAMEN DIRECT) ---
  {
    id: 'p_diag_1',
    question: "Quel est l'examen de référence pour le diagnostic du Paludisme ?",
    options: ["Frottis sanguin mince et Goutte épaisse (MGG)", "Sérologie", "Coproculture", "Biopsie hépatique"],
    correct: 0,
    explanation: "C'est le 'Gold Standard'. La goutte épaisse concentre les parasites pour la sensibilité, le frottis permet l'identification de l'espèce."
  },
  {
    id: 'p_diag_2',
    question: "Pour diagnostiquer une amibiase intestinale aiguë, il faut examiner les selles :",
    options: ["À l'état frais, immédiatement après émission (chaudes)", "Après 24h au frigo", "Après fixation au formol", "Séchées"],
    correct: 0,
    explanation: "Les trophozoïtes mobiles d'Entamoeba histolytica meurent très vite. L'examen à chaud est impératif pour voir la mobilité."
  },
  {
    id: 'p_diag_3',
    question: "La coloration de référence pour les protozoaires sanguins (Plasmodium, Leishmania) est :",
    options: ["May-Grünwald Giemsa (MGG)", "Gram", "Ziehl-Neelsen", "Bleu de méthylène"],
    correct: 0,
    explanation: "Le MGG colore le cytoplasme en bleu clair, le noyau en rouge-violet et la chromatine de manière distincte."
  },
  {
    id: 'p_diag_4',
    question: "Quelle coloration est indispensable pour visualiser les oocystes de Cryptosporidium ?",
    options: ["Ziehl-Neelsen modifié (Kinyoun)", "MGG", "Gram", "Lugol"],
    correct: 0,
    explanation: "Cryptosporidium est 'Acido-Alcoolo-Résistant' (AAR). Il apparaît en rouge fuchsia sur fond vert/bleu."
  },
  {
    id: 'p_diag_5',
    question: "Le 'Scotch-Test' (Test de Graham) est utilisé pour rechercher :",
    options: ["Les œufs d'Oxyure (Enterobius)", "Les kystes de Giardia", "Les amibes", "Les larves d'Anguillule"],
    correct: 0,
    explanation: "Bien que ce soit un Nématode, c'est un diagnostic différentiel classique. Pour les protozoaires, on utilise l'EPS (Examen Parasitologique des Selles)."
  },

  // --- PART 2: STOOL EXAMINATION (EPS) ---
  {
    id: 'p_diag_6',
    question: "La technique de concentration de Ritchie (Formol-Ether) permet de :",
    options: ["Enrichir le sédiment en kystes et œufs en éliminant les débris", "Cultiver les parasites", "Voir la mobilité", "Colorer les noyaux"],
    correct: 0,
    explanation: "C'est la technique standard d'enrichissement biphasique pour séparer les parasites des résidus alimentaires."
  },
  {
    id: 'p_diag_7',
    question: "Le MIF (Merthiolate-Iode-Formol) est utilisé pour :",
    options: ["Fixer et colorer temporairement les kystes dans les selles", "La culture", "La sérologie", "L'examen à l'état frais"],
    correct: 0,
    explanation: "L'iode colore les noyaux et le glycogène, facilitant l'identification des amibes."
  },
  {
    id: 'p_diag_8',
    question: "Combien d'examens de selles (EPS) sont recommandés pour exclure formellement une parasitose ?",
    options: ["3 examens espacés de quelques jours", "1 seul examen", "10 examens", "Un examen tous les mois"],
    correct: 0,
    explanation: "L'excrétion des kystes est intermittente (phase négative). Un seul examen négatif ne suffit pas."
  },
  {
    id: 'p_diag_9',
    question: "La présence de cristaux de Charcot-Leyden dans les selles signe :",
    options: ["Une réaction allergique/inflammatoire (dégradation des éosinophiles)", "Une hémorragie", "Une infection bactérienne", "La présence de graisses"],
    correct: 0,
    explanation: "C'est un marqueur indirect d'une parasitose tissulaire (ex: Isospora, Amibiase, Helminthes) stimulant les éosinophiles."
  },
  {
    id: 'p_diag_10',
    question: "Le test de Baermann est spécifique pour l'extraction de :",
    options: ["Larves d'Anguillule (Strongyloides)", "Kystes d'Amibes", "Œufs d'Ascaris", "Oocystes de Cryptosporidium"],
    correct: 0,
    explanation: "Il utilise l'hygrotropisme et le thermotropisme des larves (elles migrent vers l'eau tiède)."
  },

  // --- PART 3: IMMUNOLOGY & SEROLOGY ---
  {
    id: 'p_diag_11',
    question: "La sérologie (Anticorps IgG) est le test de choix pour :",
    options: ["L'amibiase hépatique (Abcès)", "L'amibiase intestinale aiguë", "La giardiase", "Le portage sain d'amibes"],
    correct: 0,
    explanation: "Dans l'abcès, les amibes sont dans le foie, pas dans les selles. La réponse anticorps est forte et constante."
  },
  {
    id: 'p_diag_12',
    question: "Le diagnostic de la Toxoplasmose chez la femme enceinte repose sur :",
    options: ["Le suivi mensuel de la sérologie (IgG et IgM)", "L'examen des selles", "L'hémoculture", "Le frottis sanguin"],
    correct: 0,
    explanation: "Le but est de détecter une séroconversion (apparition d'anticorps) signant une infection récente."
  },
  {
    id: 'p_diag_13',
    question: "Le test d'avidité des IgG anti-Toxoplasma sert à :",
    options: ["Dater l'infection (Récente vs Ancienne)", "Mesurer la gravité", "Confirmer la guérison", "Détecter le parasite"],
    correct: 0,
    explanation: "Une avidité forte exclut une infection récente (de moins de 4 mois), rassurant pour la grossesse."
  },
  {
    id: 'p_diag_14',
    question: "Les Tests de Diagnostic Rapide (TDR) du Paludisme détectent :",
    options: ["Des antigènes parasitaires (HRP-2, pLDH)", "Des anticorps", "De l'ADN", "L'hémoglobine"],
    correct: 0,
    explanation: "Ce sont des tests immunochromatographiques sur bandelette, très utiles quand le microscope n'est pas disponible."
  },
  {
    id: 'p_diag_15',
    question: "Le diagnostic direct de la Leishmaniose Viscérale se fait par ponction de :",
    options: ["Moelle osseuse (Myélogramme)", "Liquide céphalo-rachidien", "Urine", "Poumon"],
    correct: 0,
    explanation: "On recherche les formes amastigotes (Corps de Leishman) à l'intérieur des macrophages de la moelle."
  },

  // --- PART 4: MOLECULAR BIOLOGY (PCR) ---
  {
    id: 'p_diag_16',
    question: "La PCR est supérieure à la microscopie pour :",
    options: ["Différencier Entamoeba histolytica (pathogène) de E. dispar (non pathogène)", "Compter les parasites", "Voir la mobilité", "C'est moins cher"],
    correct: 0,
    explanation: "Ces deux amibes sont morphologiquement identiques. Seule la PCR (ou test Ag spécifique) peut les distinguer formellement."
  },
  {
    id: 'p_diag_17',
    question: "Pour le diagnostic prénatal de la Toxoplasmose congénitale, on effectue :",
    options: ["Une PCR sur le liquide amniotique (Amniocentèse)", "Une prise de sang fœtale", "Une échographie seule", "Une biopsie du placenta"],
    correct: 0,
    explanation: "La PCR détecte l'ADN du parasite dans le liquide amniotique, prouvant qu'il a traversé le placenta."
  },
  {
    id: 'p_diag_18',
    question: "La PCR Multiplex pour les diarrhées permet de :",
    options: ["Détecter simultanément Virus, Bactéries et Parasites (Giardia, Crypto, Entamoeba)", "Traiter le patient", "Voir la résistance", "Remplacer le médecin"],
    correct: 0,
    explanation: "C'est une révolution diagnostique (Panel gastro-intestinal) qui donne un résultat complet en 1 heure."
  },
  {
    id: 'p_diag_19',
    question: "Le diagnostic de la Toxoplasmose cérébrale chez le VIH+ peut se faire par :",
    options: ["PCR sur le LCR (Liquide Céphalo-Rachidien)", "Coproculture", "Biopsie cérébrale systématique", "Hémoculture"],
    correct: 0,
    explanation: "C'est moins invasif qu'une biopsie et très spécifique."
  },
  {
    id: 'p_diag_20',
    question: "Le génotypage est utile pour :",
    options: ["Tracer l'origine d'une épidémie (ex: Cryptosporidiose liée à l'eau)", "Le diagnostic de routine", "Soigner le patient", "Vacciner"],
    correct: 0,
    explanation: "Il permet de savoir si la souche est humaine ou animale (zoonose)."
  },

  // --- PART 5: SAMPLE COLLECTION & PRESERVATION ---
  {
    id: 'p_diag_21',
    question: "Quel anticoagulant faut-il utiliser pour un frottis sanguin (Paludisme) ?",
    options: ["EDTA (Bouchon violet)", "Héparine", "Citrate", "Pas d'anticoagulant"],
    correct: 0,
    explanation: "L'EDTA préserve bien la morphologie cellulaire. L'héparine peut déformer les parasites."
  },
  {
    id: 'p_diag_22',
    question: "Pour la recherche de Trichomonas vaginalis, le prélèvement vaginal doit être transporté :",
    options: ["Immédiatement au labo (milieu de transport type Amies) ou examiné sur place", "Sèché sur lame", "Congelé", "Dans du formol"],
    correct: 0,
    explanation: "Le parasite est très fragile. Il meurt et perd sa mobilité en quelques minutes/heures s'il sèche ou refroidit."
  },
  {
    id: 'p_diag_23',
    question: "La recherche de trophozoïtes d'amibes hématophages (E. histolytica) nécessite des selles :",
    options: ["Glairo-sanglantes fraîchement émises", "Dures et moulées", "Anciennes", "Noires"],
    correct: 0,
    explanation: "C'est dans les parties muqueuses et sanglantes (crachats rectaux) que se trouvent les formes actives."
  },
  {
    id: 'p_diag_24',
    question: "Pour rechercher des oocystes de Cyclospora, il est préférable d'utiliser une technique de :",
    options: ["Autofluorescence sous microscope UV", "Culture", "Agglutination", "Sédimentation simple"],
    correct: 0,
    explanation: "Les oocystes de Cyclospora (et Isospora) autofluorescent en bleu sous UV, ce qui est un diagnostic très rapide."
  },
  {
    id: 'p_diag_25',
    question: "Le prélèvement de choix pour la Leishmaniose Cutanée est :",
    options: ["Le raclage des bords de l'ulcère (suc dermique)", "Le pus au centre", "Le sang", "La biopsie musculaire"],
    correct: 0,
    explanation: "Les parasites se trouvent dans les macrophages actifs en périphérie de la lésion (anneau inflammatoire), pas dans la nécrose centrale."
  },

  // --- PART 6: ARTIFACTS & TRAPS ---
  {
    id: 'p_diag_26',
    question: "Qu'est-ce qui peut être confondu avec un kyste d'amibe au microscope ?",
    options: ["Leucocytes (polynucléaires) ou levures", "Hématies", "Bulles d'air", "Fibres musculaires"],
    correct: 0,
    explanation: "Les noyaux des globules blancs ressemblent parfois aux noyaux des kystes. L'iode (MIF) aide à différencier."
  },
  {
    id: 'p_diag_27',
    question: "Les spores de champignons (ex: Pollen) dans les selles ressemblent à :",
    options: ["Des œufs d'helminthes", "Des trophozoïtes", "Des kystes", "Des larves"],
    correct: 0,
    explanation: "C'est un piège classique pour les débutants. La régularité et la taille aident à trancher."
  },
  {
    id: 'p_diag_28',
    question: "Sur un frottis sanguin, les plaquettes posées sur une hématie peuvent simuler :",
    options: ["Un trophozoïte de Plasmodium", "Un leucocyte", "Une bactérie", "Un virus"],
    correct: 0,
    explanation: "On appelle ça l'effet 'Superposition'. L'absence de cytoplasme bleu et de pigment rouge distingue la plaquette du parasite."
  },
  {
    id: 'p_diag_29',
    question: "Blastocystis hominis présente un polymorphisme important. Sa forme la plus fréquente est :",
    options: ["La forme vacuolaire", "La forme granulaire", "La forme amiboïde", "La forme kystique"],
    correct: 0,
    explanation: "C'est une grande cellule ronde avec une vacuole centrale réfringente, très fréquente dans les selles."
  },
  {
    id: 'p_diag_30',
    question: "Les 'pseudoparasites' digestifs incluent :",
    options: ["Les débris végétaux, poils végétaux, grains d'amidon", "Les bactéries", "Les virus", "Les prions"],
    correct: 0,
    explanation: "Les poils végétaux peuvent ressembler à des larves, les grains d'amidon à des kystes."
  },

  // --- PART 7: QUANTIFICATION & FOLLOW-UP ---
  {
    id: 'p_diag_31',
    question: "La parasitémie (pour le Paludisme) s'exprime en :",
    options: ["Pourcentage d'hématies parasitées (ou parasites/µL)", "Nombre de croix (+)", "Grammes/Litre", "Positif/Négatif"],
    correct: 0,
    explanation: "C'est crucial pour le pronostic. >4-5% définit un accès grave nécessitant un traitement IV."
  },
  {
    id: 'p_diag_32',
    question: "Après traitement d'une amibiase, le contrôle des selles se fait :",
    options: ["Quelques jours après la fin du traitement", "Le lendemain", "Jamais", "Après 1 an"],
    correct: 0,
    explanation: "Pour vérifier l'éradication des kystes et éviter le portage asymptomatique."
  },
  {
    id: 'p_diag_33',
    question: "La négativation de la goutte épaisse dans le paludisme est obtenue en :",
    options: ["2 à 3 jours sous traitement efficace", "1 heure", "1 mois", "6 mois"],
    correct: 0,
    explanation: "La clairance parasitaire est rapide avec les dérivés de l'artémisinine."
  },
  {
    id: 'p_diag_34',
    question: "Une sérologie toxoplasmique positive IgG+ / IgM- chez une femme enceinte signifie :",
    options: ["Immunité ancienne (protection)", "Infection récente", "Infection en cours", "Absence d'immunité"],
    correct: 0,
    explanation: "C'est le profil idéal : la femme est immunisée (IgG présents) et n'a pas d'infection active (IgM absents)."
  },
  {
    id: 'p_diag_35',
    question: "Une sérologie toxoplasmique IgG- / IgM- signifie :",
    options: ["Absence d'immunité (Sujet réceptif)", "Immunité ancienne", "Infection récente", "Erreur de labo"],
    correct: 0,
    explanation: "La femme n'a jamais rencontré le parasite. Il faut instaurer des mesures hygiéno-diététiques strictes."
  },

  // --- PART 8: CULTURE ---
  {
    id: 'p_diag_36',
    question: "La culture sur milieu NNN (Novy-MacNeal-Nicolle) est utilisée pour :",
    options: ["Leishmania et Trypanosoma", "Plasmodium", "Giardia", "Entamoeba"],
    correct: 0,
    explanation: "C'est un milieu diphasique au sang de lapin qui permet la multiplication des promastigotes."
  },
  {
    id: 'p_diag_37',
    question: "La culture des amibes (Milieu de Dobell-Laidlaw) est-elle un examen de routine ?",
    options: ["Non, réservée à la recherche ou cas difficiles", "Oui, toujours", "Oui, pour les kystes", "Oui, aux urgences"],
    correct: 0,
    explanation: "C'est long et complexe. Le diagnostic repose sur la microscopie et la PCR."
  },
  {
    id: 'p_diag_38',
    question: "L'inoculation à la souris est parfois utilisée pour isoler :",
    options: ["Toxoplasma gondii", "Giardia", "Trichomonas", "Balantidium"],
    correct: 0,
    explanation: "Toxoplasma est très pathogène pour la souris (ascite riche en tachyzoïtes), c'était une méthode historique d'isolement."
  },
  {
    id: 'p_diag_39',
    question: "La xénodiagnostic (utilisation du vecteur vivant) a été utilisée pour :",
    options: ["La maladie de Chagas (Triatomes non infectés)", "Le Paludisme", "L'Amibiase", "La Giardiase"],
    correct: 0,
    explanation: "On laisse des punaises saines piquer le patient, puis on examine l'intestin de la punaise pour voir si elle s'est infectée."
  },
  {
    id: 'p_diag_40',
    question: "La culture de Naegleria fowleri se fait sur :",
    options: ["Gélose non nutritive ensemencée avec des bactéries (E. coli)", "Gélose au sang", "Bouillon nutritif", "Cellules Vero"],
    correct: 0,
    explanation: "L'amibe se nourrit des bactéries déposées sur la gélose, créant des plages de lyse visibles."
  },

  // --- PART 9: SPECIAL STAINS II ---
  {
    id: 'p_diag_41',
    question: "L'encre de Chine est utilisée en mycologie, mais en parasito elle aide parfois à voir :",
    options: ["Les gaines ou capsules (ex: Microsporidies, rares)", "Les flagelles", "Les noyaux", "Les vacuoles"],
    correct: 0,
    explanation: "C'est un test de contraste négatif (le fond est noir, l'organisme est clair)."
  },
  {
    id: 'p_diag_42',
    question: "Le 'Trichrome de Weber' est la coloration spécifique pour :",
    options: ["Les spores de Microsporidies", "Le Paludisme", "Les Amibes", "La Leishmaniose"],
    correct: 0,
    explanation: "Les spores apparaissent rose-rouge avec une vacuole claire, sur un fond vert/bleu."
  },
  {
    id: 'p_diag_43',
    question: "La coloration de Hoechst (Fluorescence) colore :",
    options: ["L'ADN (noyaux et kinétoplastes)", "La membrane", "Le flagelle", "Le cytoplasme"],
    correct: 0,
    explanation: "C'est un marqueur nucléaire très sensible utilisé en recherche."
  },
  {
    id: 'p_diag_44',
    question: "Le test à la catalase permet de différencier :",
    options: ["Rien en protozoologie (c'est pour les bactéries)", "Amibes pathogènes", "Trypanosomes", "Leishmania"],
    correct: 0,
    explanation: "Piège ! Les tests biochimiques classiques sont pour les bactéries. L'identification des protozoaires est morphologique."
  },
  {
    id: 'p_diag_45',
    question: "Pour voir la mobilité des Trypanosomes sanguicoles, on fait :",
    options: ["Un examen à l'état frais (entre lame et lamelle) ou goutte épaisse non séchée", "Un frottis fixé", "Une biopsie", "Une culture"],
    correct: 0,
    explanation: "Le mouvement frétillant des trypanosomes est très visible à faible grossissement dans le sang frais."
  },

  // --- PART 10: AUTOMATION & AI ---
  {
    id: 'p_diag_46',
    question: "L'QBC (Quantitative Buffy Coat) est une technique pour :",
    options: ["Le diagnostic rapide du Paludisme par fluorescence", "La culture", "La sérologie", "La PCR"],
    correct: 0,
    explanation: "On concentre les parasites dans un tube capillaire avec un colorant fluorescent (Acridine Orange)."
  },
  {
    id: 'p_diag_47',
    question: "Les automates d'hématologie peuvent-ils détecter le paludisme ?",
    options: ["Parfois, via des anomalies des scattergrammes (populations anormales)", "Oui, toujours", "Non, jamais", "Oui, ils identifient l'espèce"],
    correct: 0,
    explanation: "Certains automates signalent une 'alarme malaria' due à la présence d'hémozoïne modifiant la diffraction laser."
  },
  {
    id: 'p_diag_48',
    question: "La spectrométrie de masse (MALDI-TOF) commence à être utilisée pour :",
    options: ["L'identification des vecteurs (moustiques/tiques)", "Le diagnostic des selles", "La sérologie", "La culture"],
    correct: 0,
    explanation: "Elle permet d'identifier l'espèce de moustique ou de tique en quelques minutes à partir d'une patte."
  },
  {
    id: 'p_diag_49',
    question: "Le diagnostic 'One Health' implique :",
    options: ["La surveillance conjointe Homme-Animal-Environnement", "De traiter seulement l'homme", "De tuer les animaux", "D'ignorer l'écologie"],
    correct: 0,
    explanation: "Essentiel pour les zoonoses comme la Toxoplasmose, la Leishmaniose ou la Cryptosporidiose."
  },
  {
    id: 'p_diag_50',
    question: "Quelle est la limite de détection de la goutte épaisse (microscopiste expert) ?",
    options: ["5 à 10 parasites / µL", "1000 parasites / µL", "1 parasite / mL", "1 parasite / L"],
    correct: 0,
    explanation: "C'est une technique très sensible, capable de détecter des parasitémies très faibles (bien mieux que le frottis : 100/µL)."
  },
    // --- PART 11: SPECIFIC DIAGNOSIS (AMEBIASIS & GIARDIASIS) ---
    {
      id: 'p_diag_51',
      question: "La présence de kystes d'Entamoeba histolytica/dispar dans les selles signifie :",
      options: ["Un portage sain (Minute) ou une infection non invasive", "Une dysenterie amibienne aiguë", "Un abcès du foie", "Une mort imminente"],
      correct: 0,
      explanation: "Les kystes sont la forme de dissémination des porteurs sains. La forme pathogène aiguë est le trophozoïte hématophage."
    },
    {
      id: 'p_diag_52',
      question: "Pour différencier un kyste d'Entamoeba histolytica d'un kyste d'Entamoeba coli, on regarde :",
      options: ["Le nombre de noyaux (4 vs 8) et la forme des corps chromatoïdes", "La taille seule", "La couleur", "La mobilité"],
      correct: 0,
      explanation: "E. histolytica = 4 noyaux max, corps chromatoïdes ronds. E. coli = 8 noyaux, corps chromatoïdes pointus."
    },
    {
      id: 'p_diag_53',
      question: "Le diagnostic de certitude de la Giardiase se fait par la mise en évidence de :",
      options: ["Kystes dans les selles ou Trophozoïtes dans le liquide duodénal", "Sérologie", "Frottis sanguin", "Hémoculture"],
      correct: 0,
      explanation: "Si les selles sont négatives, le tubage duodénal ou le 'Enterotest' (fil avalé) peut récupérer les trophozoïtes."
    },
    {
      id: 'p_diag_54',
      question: "La recherche d'antigènes copro-solubles (ELISA) est très utile pour :",
      options: ["Giardia, Cryptosporidium et Entamoeba histolytica", "Plasmodium", "Leishmania", "Trypanosoma"],
      correct: 0,
      explanation: "C'est une alternative rapide et sensible à la microscopie, surtout pour le dépistage de masse."
    },
    {
      id: 'p_diag_55',
      question: "Une selle pâteuse jaune-ocre mousseuse est évocatrice de :",
      options: ["Giardiase", "Amibiase", "Choléra", "Paludisme"],
      correct: 0,
      explanation: "L'aspect graisseux et la couleur sont dus à la malabsorption des graisses."
    },
  
    // --- PART 12: SPECIFIC DIAGNOSIS (MALARIA) ---
    {
      id: 'p_diag_56',
      question: "Sur un frottis sanguin, la présence de 'Trophozoïtes en bague à chaton' (Ring forms) sans autre stade évoque :",
      options: ["Plasmodium falciparum (début d'accès)", "Plasmodium vivax", "Plasmodium malariae", "Babesia"],
      correct: 0,
      explanation: "P. falciparum ne montre généralement que des formes jeunes (anneaux) dans le sang périphérique, les formes âgées étant séquestrées."
    },
    {
      id: 'p_diag_57',
      question: "La présence de gamétocytes en forme de banane signe le diagnostic de :",
      options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale", "Plasmodium malariae"],
      correct: 0,
      explanation: "C'est le signe pathognomonique de P. falciparum, aucune autre espèce n'a cette forme."
    },
    {
      id: 'p_diag_58',
      question: "La présence de Schizontes mûrs (Rosaces) de P. falciparum dans le sang périphérique est un signe de :",
      options: ["Gravité extrême (charge parasitaire massive dépassant la séquestration)", "Bon pronostic", "Guérison", "Erreur de diagnostic"],
      correct: 0,
      explanation: "Cela signifie que la microcirculation est saturée, le pronostic vital est engagé."
    },
    {
      id: 'p_diag_59',
      question: "L'aspect 'hématie frangée' ou 'déchiquetée' est typique de :",
      options: ["Plasmodium ovale", "Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae"],
      correct: 0,
      explanation: "C'est un critère morphologique clé pour P. ovale."
    },
    {
      id: 'p_diag_60',
      question: "Le seuil de détection des TDR (Tests Rapides) Paludisme est d'environ :",
      options: ["100 parasites / µL (moins sensible que la goutte épaisse)", "1 parasite / µL", "1000 parasites / µL", "Identique à la PCR"],
      correct: 0,
      explanation: "Les TDR peuvent être faussement négatifs si la parasitémie est très faible (<100/µL)."
    },
  
    // --- PART 13: SPECIFIC DIAGNOSIS (LEISHMANIA & TRYPANOSOMA) ---
    {
      id: 'p_diag_61',
      question: "Le diagnostic de la Trypanosomiase Africaine (Stade 1) se fait par recherche du parasite dans :",
      options: ["Le suc ganglionnaire (Ponction ganglionnaire) ou le sang", "Le LCR", "Les selles", "Les urines"],
      correct: 0,
      explanation: "Le suc ganglionnaire cervical est très riche en trypanosomes au stade lymphatico-sanguin."
    },
    {
      id: 'p_diag_62',
      question: "Le diagnostic de la Trypanosomiase Africaine (Stade 2) nécessite impérativement :",
      options: ["Une ponction lombaire (PL) pour analyser le LCR", "Une biopsie cérébrale", "Un scanner", "Une sérologie"],
      correct: 0,
      explanation: "Il faut prouver l'invasion du système nerveux central (présence de cellules, protéines ou parasites dans le LCR) pour adapter le traitement."
    },
    {
      id: 'p_diag_63',
      question: "La technique de concentration 'Micro-hématocrite' (Woo) est utilisée pour :",
      options: ["Détecter les Trypanosomes vivants dans le sang", "Le Paludisme", "Les Amibes", "Les Leishmanies"],
      correct: 0,
      explanation: "On centrifuge le sang dans un capillaire et on observe l'interface globule/plasma (Buffy coat) pour voir bouger les parasites."
    },
    {
      id: 'p_diag_64',
      question: "Le diagnostic de la maladie de Chagas chronique repose principalement sur :",
      options: ["La sérologie (2 techniques différentes positives)", "La recherche du parasite dans le sang", "La coproculture", "La PCR seule"],
      correct: 0,
      explanation: "En phase chronique, la parasitémie est trop faible pour être vue. La sérologie est la clé."
    },
    {
      id: 'p_diag_65',
      question: "L'intradermo-réaction de Montenegro (IDR) était utilisée pour :",
      options: ["La Leishmaniose Cutanée (témoin d'immunité cellulaire)", "Le Paludisme", "La Toxoplasmose", "L'Amibiase"],
      correct: 0,
      explanation: "C'est un test historique (comme le test tuberculinique) montrant l'hypersensibilité retardée."
    },
  
    // --- PART 14: SPECIFIC DIAGNOSIS (OPPORTUNISTIC) ---
    {
      id: 'p_diag_66',
      question: "Pour rechercher Pneumocystis jirovecii, le prélèvement de choix est :",
      options: ["Le Lavage Broncho-Alvéolaire (LBA)", "Les crachats simples", "Le sang", "Les selles"],
      correct: 0,
      explanation: "Le parasite est collé aux alvéoles pulmonaires. Le LBA permet de le décrocher."
    },
    {
      id: 'p_diag_67',
      question: "La recherche de Microsporidies dans les selles nécessite :",
      options: ["Des colorations spéciales (Trichrome modifié, Calcofluor) ou PCR", "Un examen direct simple", "Une culture", "Une sérologie"],
      correct: 0,
      explanation: "Les spores sont trop petites et transparentes pour être vues sans coloration spécifique."
    },
    {
      id: 'p_diag_68',
      question: "Le diagnostic de la Toxoplasmose oculaire est souvent :",
      options: ["Clinique (Fond d'œil) + Sérologie + parfois PCR sur humeur aqueuse", "Biopsie de l'œil", "Scanner", "Culture"],
      correct: 0,
      explanation: "L'aspect du foyer rétinien est souvent caractéristique ('phare dans le brouillard')."
    },
    {
      id: 'p_diag_69',
      question: "Lequel peut être diagnostiqué par une biopsie intestinale (jéjunale) ?",
      options: ["Giardia, Cryptosporidium, Microsporidies", "Plasmodium", "Trichomonas", "Trypanosoma"],
      correct: 0,
      explanation: "Si les selles sont négatives, la biopsie montre les parasites collés ou dans l'épithélium."
    },
    {
      id: 'p_diag_70',
      question: "Le diagnostic de la Trichomonase chez l'homme (souvent asymptomatique) se fait sur :",
      options: ["Le premier jet d'urine ou le prélèvement urétral", "Le sperme", "Le sang", "Les selles"],
      correct: 0,
      explanation: "L'homme est le vecteur sain. Le parasite se trouve dans l'urètre."
    },
  
    // --- PART 15: INTERPRETATION & ERRORS ---
    {
      id: 'p_diag_71',
      question: "Une sérologie amibienne négative devant un abcès du foie :",
      options: ["Rend le diagnostic d'abcès amibien très improbable", "Confirme l'abcès", "Ne veut rien dire", "Suggère un kyste"],
      correct: 0,
      explanation: "La sérologie est positive dans >95% des abcès amibiens. Si négative -> chercher une cause bactérienne (abcès à pyogènes)."
    },
    {
      id: 'p_diag_72',
      question: "La présence d'hématies dans les selles (Hématies +++) oriente vers :",
      options: ["Une colite invasive (Amibienne ou Bactérienne)", "Une malabsorption", "Une giardiase", "Une occlusion"],
      correct: 0,
      explanation: "C'est le signe d'une lésion de la paroi intestinale."
    },
    {
      id: 'p_diag_73',
      question: "Un taux de prothrombine (TP) bas dans le paludisme signe :",
      options: ["Une insuffisance hépatique ou une CIVD (Coagulation Intra-Vasculaire Disséminée)", "Une guérison", "Une anémie", "Une bonne réponse"],
      correct: 0,
      explanation: "C'est un critère de gravité biologique (trouble de la coagulation)."
    },
    {
      id: 'p_diag_74',
      question: "La présence de cristaux octaédriques (Oxalate de calcium) dans les selles :",
      options: ["Est d'origine alimentaire (Légumes), sans valeur pathologique", "Signe une amibiase", "Signe une lithiase", "Est un parasite"],
      correct: 0,
      explanation: "Artefact fréquent dû à la consommation d'épinards, tomates, oseille, etc."
    },
    {
      id: 'p_diag_75',
      question: "La 'reviviscence' des kystes de Giardia après traitement est souvent due à :",
      options: ["Une réinfestation ou un traitement mal pris", "Une résistance vraie (rare)", "Une mutation", "Un changement de climat"],
      correct: 0,
      explanation: "Le plus souvent, c'est une ré-infection par l'entourage non traité."
    },
  
    // --- PART 16: ADVANCED TECHNIQUES ---
    {
      id: 'p_diag_76',
      question: "La technique LAMP (Loop-mediated Isothermal Amplification) est :",
      options: ["Une technique d'amplification d'ADN rapide et simple (terrain)", "Une culture", "Une microscopie", "Une sérologie"],
      correct: 0,
      explanation: "Alternative à la PCR, ne nécessitant pas de thermocycleur complexe, adaptée aux pays endémiques."
    },
    {
      id: 'p_diag_77',
      question: "Le séquençage NGS (Next Generation Sequencing) permet de :",
      options: ["Détecter des mutations de résistance aux antipaludéens", "Voir le parasite", "Compter les parasites", "Soigner"],
      correct: 0,
      explanation: "Utilisé en surveillance épidémiologique pour traquer les souches résistantes à l'artémisinine."
    },
    {
      id: 'p_diag_78',
      question: "La cytométrie en flux peut être utilisée pour :",
      options: ["Quantifier la parasitémie (recherche)", "Identifier l'espèce à l'œil nu", "Faire une culture", "Prélever le sang"],
      correct: 0,
      explanation: "Technique automatisée rapide utilisant des marqueurs fluorescents."
    },
    {
      id: 'p_diag_79',
      question: "L'examen du LCR à l'état frais (cellule de Nageotte) permet de compter :",
      options: ["Les leucocytes et les trypanosomes", "Les hématies seules", "Les bactéries", "Les virus"],
      correct: 0,
      explanation: "Essentiel pour le staging de la maladie du sommeil (>5 cellules/µL = stade 2)."
    },
    {
      id: 'p_diag_80',
      question: "La biopsie rectale peut aider au diagnostic de :",
      options: ["Amibiase (ulcères en bouton de chemise) ou Bilharziose (œufs)", "Giardiase", "Paludisme", "Trichomonas"],
      correct: 0,
      explanation: "L'anatomopathologie montre l'invasion tissulaire et l'inflammation."
    },
  
    // --- PART 17: MIXED CASE STUDIES ---
    {
      id: 'p_diag_81',
      question: "Cas clinique : Diarrhée chronique, perte de poids, VIH+. EPS : oocystes roses sur fond vert (Kinyoun).",
      options: ["Cryptosporidium sp.", "Isospora belli (oocystes ovales)", "Cyclospora (plus gros)", "Microsporidies (plus petits)"],
      correct: 0,
      explanation: "C'est le tableau typique. La taille (4-6 µm) confirmerait Cryptosporidium."
    },
    {
      id: 'p_diag_82',
      question: "Cas clinique : Fièvre tierce, retour d'Afrique, frottis négatif. Que faire ?",
      options: ["Répéter le frottis/GE 12 à 24h plus tard (le pic parasitaire a pu être manqué)", "Dire au patient qu'il n'a rien", "Donner des antibiotiques", "Faire une radio"],
      correct: 0,
      explanation: "La parasitémie peut fluctuer. On ne déclare pas un palu négatif sur un seul prélèvement."
    },
    {
      id: 'p_diag_83',
      question: "Cas clinique : Kératite chez un porteur de lentilles. Le prélèvement doit inclure :",
      options: ["La lentille, l'étui, le liquide de conservation et un grattage cornéen", "Juste une larme", "Le sang", "Les selles"],
      correct: 0,
      explanation: "L'amibe (Acanthamoeba) se trouve souvent en grande quantité dans l'étui à lentilles."
    },
    {
      id: 'p_diag_84',
      question: "Cas clinique : Enfant avec prurit anal. Scotch-test négatif. Que faire ?",
      options: ["Répéter le Scotch-test 3 matins de suite", "Faire une coproculture", "Faire une prise de sang", "Traiter pour la gale"],
      correct: 0,
      explanation: "La ponte est aléatoire. Un seul test peut être négatif par hasard."
    },
    {
      id: 'p_diag_85',
      question: "Cas clinique : Splénomégalie massive, anémie, fièvre irrégulière. Frottis négatif. Sérologie Leishmania positive.",
      options: ["Leishmaniose Viscérale (Kala-Azar)", "Paludisme viscéral", "Lymphome", "Tuberculose"],
      correct: 0,
      explanation: "La sérologie est très sensible pour le Kala-Azar chez l'immunocompétent."
    },
  
    // --- PART 18: QUALITY CONTROL ---
    {
      id: 'p_diag_86',
      question: "Le contrôle qualité interne (CQI) en parasitologie implique :",
      options: ["L'utilisation de lames de référence positives connues", "De nettoyer le microscope", "D'acheter du matériel neuf", "De fermer le labo"],
      correct: 0,
      explanation: "Il faut vérifier régulièrement que les techniciens savent reconnaître les parasites."
    },
    {
      id: 'p_diag_87',
      question: "Une erreur fréquente d'identification est de confondre :",
      options: ["P. vivax et P. ovale", "P. falciparum et P. malariae", "Giardia et Amibe", "Toxoplasma et Leishmania"],
      correct: 0,
      explanation: "P. vivax et P. ovale se ressemblent beaucoup (hématies agrandies, pointillé). La forme 'frangée' d'ovale est la clé."
    },
    {
      id: 'p_diag_88',
      question: "La densité parasitaire est calculée par rapport :",
      options: ["Au nombre de leucocytes (ex: pour 200 leucocytes comptés)", "Au volume d'eau", "Au poids du patient", "Au temps de lecture"],
      correct: 0,
      explanation: "Formule : (Nb parasites / Nb leucocytes) x (Leucocytes réels du patient / µL)."
    },
    {
      id: 'p_diag_89',
      question: "La 'queue' du frottis sanguin est la zone idéale pour :",
      options: ["Observer la morphologie des parasites (hématies étalées une à une)", "Compter les parasites", "Voir les bactéries", "Rien"],
      correct: 0,
      explanation: "Au centre du frottis, les hématies se chevauchent, rendant la lecture difficile."
    },
    {
      id: 'p_diag_90',
      question: "L'objectif à immersion (x100) nécessite l'utilisation de :",
      options: ["Huile à immersion", "Eau", "Alcool", "Rien"],
      correct: 0,
      explanation: "L'huile a le même indice de réfraction que le verre, empêchant la perte de lumière."
    },
  
    // --- PART 19: FUTURE PERSPECTIVES ---
    {
      id: 'p_diag_91',
      question: "L'intelligence artificielle (IA) en parasitologie permet de :",
      options: ["Scanner les lames et détecter automatiquement les parasites", "Remplacer les médicaments", "Créer des parasites", "Faire des piqûres"],
      correct: 0,
      explanation: "Des systèmes existent déjà pour le dépistage automatisé du Paludisme sur frottis numérisés."
    },
    {
      id: 'p_diag_92',
      question: "Les biocapteurs (Biosensors) pourraient permettre :",
      options: ["La détection non invasive (haleine, urine) des parasites", "La chirurgie", "La vaccination", "La culture"],
      correct: 0,
      explanation: "Ex: Détection de composés volatils spécifiques du paludisme dans l'haleine."
    },
    {
      id: 'p_diag_93',
      question: "La métagénomique permet d'étudier :",
      options: ["L'ensemble du microbiome intestinal et ses interactions avec les parasites", "Un seul parasite", "Le génome humain", "Les virus"],
      correct: 0,
      explanation: "Elle révèle comment Giardia ou Blastocystis modifient la flore bactérienne."
    },
    {
      id: 'p_diag_94',
      question: "La téléparasitologie consiste à :",
      options: ["Envoyer des images de microscopie à un expert à distance pour avis", "Soigner par téléphone", "Transporter des parasites", "Enseigner"],
      correct: 0,
      explanation: "Très utile pour les zones isolées manquant de parasitologues experts."
    },
    {
      id: 'p_diag_95',
      question: "L'ADN environnemental (eDNA) sert à :",
      options: ["Détecter la présence de parasites dans l'eau ou le sol sans capturer l'hôte", "Modifier l'ADN", "Cloner", "Soigner"],
      correct: 0,
      explanation: "Utile pour surveiller la présence de vecteurs ou d'hôtes intermédiaires (ex: mollusques pour la bilharziose)."
    },
  
    // --- PART 20: FINAL CHECK ---
    {
      id: 'p_diag_96',
      question: "Quelle technique n'utilise PAS de microscope ?",
      options: ["TDR (Test Diagnostic Rapide)", "Frottis", "Goutte épaisse", "État frais"],
      correct: 0,
      explanation: "C'est une lecture à l'œil nu d'une bande réactive."
    },
    {
      id: 'p_diag_97',
      question: "Le diagnostic de la Babésiose se fait comme pour :",
      options: ["Le Paludisme (Frottis/GE)", "L'Amibiase", "La Leishmaniose", "La Trypanosomose"],
      correct: 0,
      explanation: "Les piroplasmes sont intra-érythrocytaires, visibles au MGG."
    },
    {
      id: 'p_diag_98',
      question: "Leucopénie et thrombopénie sont des signes d'orientation pour :",
      options: ["Leishmanose Viscérale et Paludisme", "Amibiase", "Giardiase", "Oxyurose"],
      correct: 0,
      explanation: "L'hypersplénisme (grosse rate) piège les cellules sanguines."
    },
    {
      id: 'p_diag_99',
      question: "La recherche de sang occulte dans les selles est-elle spécifique des parasites ?",
      options: ["Non, elle détecte aussi les polypes, cancers, hémorroïdes...", "Oui, spécifique de l'amibe", "Oui, spécifique de l'ankylostome", "Non, ça ne marche pas"],
      correct: 0,
      explanation: "C'est un test de dépistage du cancer colorectal, pas un test parasitologique, mais il peut être positif en cas de parasitose invasive."
    },
    {
      id: 'p_diag_100',
      question: "L'examen parasitologique est-il une urgence ?",
      options: ["Oui, pour la recherche de Plasmodium (Paludisme)", "Non, jamais", "Oui, pour les oxyures", "Oui, pour les kystes"],
      correct: 0,
      explanation: "Tout fiévreux au retour des tropiques est une urgence vitale. Le diagnostic doit être posé en < 2 heures."
    }
  ];
  
