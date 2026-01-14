// ==========================================
// 1. MORPHOLOGIE (20 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "amibe_morph_1",
    "axis": "morphology",
    "question": "Quel critère morphologique de certitude distingue le trophozoïte d'Entamoeba histolytica de celui d'Entamoeba dispar ?",
    "options": [
      "Hématophagie avec ingestion de globules rouges",
      "Taille supérieure à 30 µm",
      "Présence de pseudopodes courts",
      "Noyau avec chromatine périphérique fine"
    ],
    "correctAnswer": 0,
    "explanation": "L’ingestion de globules rouges est pathognomonique d’E. histolytica et absente chez E. dispar."
  },
  {
    "id": "amibe_morph_2",
    "axis": "morphology",
    "question": "Quelle est la taille habituelle du trophozoïte d’Entamoeba histolytica ?",
    "options": [
      "15 à 30 µm",
      "5 à 10 µm",
      "30 à 60 µm",
      "Moins de 5 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Le trophozoïte mesure en moyenne 15 à 30 µm, avec des variations selon l’activité."
  },
  {
    "id": "amibe_morph_3",
    "axis": "morphology",
    "question": "Quel est le nombre maximal de noyaux observé dans un kyste mûr d’Entamoeba histolytica ?",
    "options": [
      "4 noyaux",
      "1 noyau",
      "2 noyaux",
      "8 noyaux"
    ],
    "correctAnswer": 0,
    "explanation": "Le kyste mûr d’E. histolytica contient classiquement 4 noyaux."
  },
  {
    "id": "amibe_morph_4",
    "axis": "morphology",
    "question": "Comment se présente la chromatine périphérique du noyau d’Entamoeba histolytica ?",
    "options": [
      "Fine et régulièrement répartie",
      "Grossière et irrégulière",
      "Absente",
      "Condensée en amas"
    ],
    "correctAnswer": 0,
    "explanation": "La chromatine périphérique fine et régulière est typique du complexe E. histolytica/dispar."
  },
  {
    "id": "amibe_morph_5",
    "axis": "morphology",
    "question": "Quel est l’aspect du caryosome d’Entamoeba histolytica ?",
    "options": [
      "Petit et central",
      "Volumineux et excentré",
      "Multiple",
      "Absent"
    ],
    "correctAnswer": 0,
    "explanation": "Le caryosome est petit, central et discret."
  },
  {
    "id": "amibe_morph_6",
    "axis": "morphology",
    "question": "Quel élément cytoplasmique est typiquement observé dans les kystes immatures d’E. histolytica ?",
    "options": [
      "Corps chromatoïdes à extrémités arrondies",
      "Granulations iodophiles abondantes",
      "Flagelles",
      "Vacuole contractile"
    ],
    "correctAnswer": 0,
    "explanation": "Les corps chromatoïdes en bâtonnets à extrémités arrondies sont caractéristiques."
  },
  {
    "id": "amibe_morph_7",
    "axis": "morphology",
    "question": "Quel est l’aspect des pseudopodes du trophozoïte d’E. histolytica ?",
    "options": [
      "Larges, uniques et rapidement émis",
      "Multiples et courts",
      "Filiformes",
      "Absents"
    ],
    "correctAnswer": 0,
    "explanation": "E. histolytica présente des pseudopodes larges responsables d’une mobilité directionnelle."
  },
  {
    "id": "amibe_morph_8",
    "axis": "morphology",
    "question": "Quelle forme parasitaire est principalement responsable de l’invasion tissulaire ?",
    "options": [
      "Trophozoïte",
      "Kyste mûr",
      "Kyste immature",
      "Métacyste"
    ],
    "correctAnswer": 0,
    "explanation": "Le trophozoïte est la forme invasive et pathogène."
  },
  {
    "id": "amibe_morph_9",
    "axis": "morphology",
    "question": "Quelle caractéristique permet de différencier E. histolytica d’Entamoeba coli sur frottis ?",
    "options": [
      "Nombre de noyaux du kyste",
      "Présence de pseudopodes",
      "Forme sphérique du kyste",
      "Existence d’un caryosome"
    ],
    "correctAnswer": 0,
    "explanation": "E. histolytica a 4 noyaux, E. coli jusqu’à 8 noyaux."
  },
  {
    "id": "amibe_morph_10",
    "axis": "morphology",
    "question": "Quel est l’aspect des corps chromatoïdes d’Entamoeba coli (diagnostic différentiel) ?",
    "options": [
      "Extrémités effilées et irrégulières",
      "Extrémités arrondies",
      "Absents",
      "Forme sphérique"
    ],
    "correctAnswer": 0,
    "explanation": "Les corps chromatoïdes d’E. coli ont des extrémités pointues."
  },
  {
    "id": "amibe_morph_11",
    "axis": "morphology",
    "question": "Dans quel prélèvement observe-t-on le plus souvent des trophozoïtes hématophages ?",
    "options": [
      "Selles diarrhéiques fraîches",
      "Selles moulées",
      "Urines",
      "Crachat"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes fragiles sont observés surtout dans les selles liquides fraîches."
  },
  {
    "id": "amibe_morph_12",
    "axis": "morphology",
    "question": "Quel colorant met en évidence les détails nucléaires d’E. histolytica ?",
    "options": [
      "Trichrome de Wheatley",
      "Bleu de méthylène simple",
      "Gram",
      "Ziehl-Neelsen"
    ],
    "correctAnswer": 0,
    "explanation": "La coloration trichrome permet une excellente visualisation nucléaire."
  },
  {
    "id": "amibe_morph_13",
    "axis": "morphology",
    "question": "Quel élément n’est PAS observé dans le cytoplasme d’E. histolytica ?",
    "options": [
      "Bactéries intracellulaires organisées",
      "Globules rouges ingérés",
      "Vacuoles",
      "Granulations cytoplasmiques"
    ],
    "correctAnswer": 0,
    "explanation": "La présence organisée de bactéries est plutôt observée chez E. coli."
  },
  {
    "id": "amibe_morph_14",
    "axis": "morphology",
    "question": "Quelle forme parasitaire est responsable de la transmission interhumaine ?",
    "options": [
      "Kyste mûr",
      "Trophozoïte",
      "Forme végétative",
      "Forme invasive"
    ],
    "correctAnswer": 0,
    "explanation": "Le kyste mûr est la forme résistante et infestante."
  },
  {
    "id": "amibe_morph_15",
    "axis": "morphology",
    "question": "Quel est l’aspect du cytoplasme du trophozoïte d’E. histolytica ?",
    "options": [
      "Différencié en ectoplasme clair et endoplasme granuleux",
      "Uniformément homogène",
      "Entièrement vacuolaire",
      "Strié"
    ],
    "correctAnswer": 0,
    "explanation": "La différenciation ectoplasme/endoplasme est typique."
  },
  {
    "id": "amibe_morph_16",
    "axis": "morphology",
    "question": "Quel est le diamètre moyen d’un kyste d’E. histolytica ?",
    "options": [
      "10 à 15 µm",
      "2 à 5 µm",
      "20 à 30 µm",
      "40 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes mesurent généralement entre 10 et 15 µm."
  },
  {
    "id": "amibe_morph_17",
    "axis": "morphology",
    "question": "Quel aspect microscopique évoque une amibe non pathogène plutôt qu’E. histolytica ?",
    "options": [
      "Absence de globules rouges ingérés",
      "Présence de pseudopodes",
      "Mobilité amiboïde",
      "Présence d’un noyau"
    ],
    "correctAnswer": 0,
    "explanation": "L’absence d’hématophagie oriente vers une amibe non pathogène."
  },
  {
    "id": "amibe_morph_18",
    "axis": "morphology",
    "question": "Quelle structure est absente du kyste mûr d’E. histolytica ?",
    "options": [
      "Corps chromatoïdes",
      "Noyaux",
      "Paroi kystique",
      "Cytoplasme"
    ],
    "correctAnswer": 0,
    "explanation": "Les corps chromatoïdes disparaissent dans les kystes mûrs."
  },
  {
    "id": "amibe_morph_19",
    "axis": "morphology",
    "question": "Quel est le principal piège diagnostique en microscopie des amibes intestinales ?",
    "options": [
      "Confusion E. histolytica / E. dispar",
      "Confusion avec Giardia",
      "Confusion avec Trichomonas",
      "Confusion avec levures"
    ],
    "correctAnswer": 0,
    "explanation": "E. histolytica et E. dispar sont morphologiquement identiques hors hématophagie."
  },
  {
    "id": "amibe_morph_20",
    "axis": "morphology",
    "question": "Quel élément morphologique signe une activité invasive d’E. histolytica ?",
    "options": [
      "Trophozoïtes hématophages",
      "Kystes quadrinucléés",
      "Présence de corps chromatoïdes",
      "Multiplication nucléaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’hématophagie témoigne de l’invasion de la muqueuse colique."
  }
];
// ==========================================
// 2. CYCLE DE VIE (20 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "amibe_cycle_1",
    "axis": "lifecycle",
    "question": "Quelle est la forme infestante responsable de la transmission de l'amibiase ?",
    "options": [
      "Kyste mûr à 4 noyaux",
      "Trophozoïte minuta",
      "Trophozoïte histolytica",
      "Prékyste"
    ],
    "correctAnswer": 0,
    "explanation": "Le kyste mûr tétranucléé est résistant dans le milieu extérieur et infectant par voie orale."
  },
  {
    "id": "amibe_cycle_2",
    "axis": "lifecycle",
    "question": "Par quelle voie se fait la contamination humaine par Entamoeba histolytica ?",
    "options": [
      "Ingestion oro-fécale de kystes",
      "Pénétration transcutanée",
      "Piqûre d'insecte",
      "Transmission sexuelle exclusive"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission se fait par ingestion d'eau ou d'aliments souillés par des kystes."
  },
  {
    "id": "amibe_cycle_3",
    "axis": "lifecycle",
    "question": "Où a lieu l'excystation du kyste d'Entamoeba histolytica ?",
    "options": [
      "Dans l'intestin grêle",
      "Dans l'estomac",
      "Dans le côlon",
      "Dans le foie"
    ],
    "correctAnswer": 0,
    "explanation": "L'excystation se produit dans l'intestin grêle sous l'effet des enzymes digestives."
  },
  {
    "id": "amibe_cycle_4",
    "axis": "lifecycle",
    "question": "Quel est le produit final de l'excystation d'un kyste mûr ?",
    "options": [
      "8 trophozoïtes métacystiques",
      "4 trophozoïtes",
      "1 trophozoïte géant",
      "8 kystes immatures"
    ],
    "correctAnswer": 0,
    "explanation": "Chaque noyau se divise, donnant 8 amibules métacystiques."
  },
  {
    "id": "amibe_cycle_5",
    "axis": "lifecycle",
    "question": "Dans quel segment du tube digestif se développe principalement Entamoeba histolytica ?",
    "options": [
      "Côlon",
      "Duodénum",
      "Jéjunum",
      "Estomac"
    ],
    "correctAnswer": 0,
    "explanation": "Le côlon est le site de multiplication et de pathogénicité."
  },
  {
    "id": "amibe_cycle_6",
    "axis": "lifecycle",
    "question": "Quelle forme correspond à l'état commensal non invasif ?",
    "options": [
      "Trophozoïte minuta",
      "Trophozoïte histolytica",
      "Kyste mûr",
      "Forme métacystique"
    ],
    "correctAnswer": 0,
    "explanation": "La forme minuta vit dans la lumière colique sans invasion."
  },
  {
    "id": "amibe_cycle_7",
    "axis": "lifecycle",
    "question": "Quelle transformation permet à l'amibe de survivre dans le milieu extérieur ?",
    "options": [
      "Encystement",
      "Division binaire",
      "Hématophagie",
      "Excystation"
    ],
    "correctAnswer": 0,
    "explanation": "L'encystement confère une résistance aux conditions environnementales."
  },
  {
    "id": "amibe_cycle_8",
    "axis": "lifecycle",
    "question": "Où se déroule l'encystement d'Entamoeba histolytica ?",
    "options": [
      "Dans le côlon",
      "Dans l'intestin grêle",
      "Dans le foie",
      "Dans le sang"
    ],
    "correctAnswer": 0,
    "explanation": "L'encystement se fait dans le côlon lors du transit fécal."
  },
  {
    "id": "amibe_cycle_9",
    "axis": "lifecycle",
    "question": "Quelle forme est éliminée dans les selles moulées ?",
    "options": [
      "Kystes",
      "Trophozoïtes hématophages",
      "Amibules",
      "Formes métacystiques"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes sont éliminés dans les selles formées."
  },
  {
    "id": "amibe_cycle_10",
    "axis": "lifecycle",
    "question": "Quelle forme est retrouvée préférentiellement dans les selles diarrhéiques ?",
    "options": [
      "Trophozoïtes",
      "Kystes mûrs",
      "Kystes immatures",
      "Formes métacystiques"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes fragiles sont observés dans les selles liquides fraîches."
  },
  {
    "id": "amibe_cycle_11",
    "axis": "lifecycle",
    "question": "Quel mécanisme permet la dissémination extra-intestinale d'Entamoeba histolytica ?",
    "options": [
      "Passage hématogène des trophozoïtes",
      "Migration des kystes",
      "Transport lymphatique des kystes",
      "Encystement tissulaire"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes envahissent la muqueuse et passent dans la circulation portale."
  },
  {
    "id": "amibe_cycle_12",
    "axis": "lifecycle",
    "question": "Quel organe est le plus fréquemment atteint lors de la dissémination ?",
    "options": [
      "Foie",
      "Poumon",
      "Cerveau",
      "Rate"
    ],
    "correctAnswer": 0,
    "explanation": "Le foie est atteint via la veine porte (abcès hépatique amibien)."
  },
  {
    "id": "amibe_cycle_13",
    "axis": "lifecycle",
    "question": "Quelle étape du cycle est responsable des rechutes intestinales ?",
    "options": [
      "Persistance de formes luminales non traitées",
      "Réinfection par les trophozoïtes",
      "Transformation des kystes en trophozoïtes hépatiques",
      "Encystement hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes luminales nécessitent un amœbicide de contact."
  },
  {
    "id": "amibe_cycle_14",
    "axis": "lifecycle",
    "question": "Quel facteur favorise le passage de la forme minuta à la forme histolytica ?",
    "options": [
      "Déséquilibre du microbiote et immunodépression",
      "Température élevée",
      "Présence d'oxygène",
      "Augmentation du transit"
    ],
    "correctAnswer": 0,
    "explanation": "L'état immunitaire de l'hôte influence l'invasion."
  },
  {
    "id": "amibe_cycle_15",
    "axis": "lifecycle",
    "question": "Quelle forme parasitaire est responsable de l'abcès hépatique amibien ?",
    "options": [
      "Trophozoïte histolytica",
      "Kyste mûr",
      "Trophozoïte minuta",
      "Forme métacystique"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes envahissent le foie et provoquent la nécrose."
  },
  {
    "id": "amibe_cycle_16",
    "axis": "lifecycle",
    "question": "Quelle est la durée de survie approximative des kystes dans l'environnement humide ?",
    "options": [
      "Plusieurs semaines",
      "Quelques heures",
      "Moins de 24 heures",
      "Plusieurs années"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes sont très résistants dans l'eau et les sols humides."
  },
  {
    "id": "amibe_cycle_17",
    "axis": "lifecycle",
    "question": "Quel traitement est indispensable pour interrompre le cycle de transmission ?",
    "options": [
      "Amœbicide de contact",
      "Antibiothérapie large",
      "Antifongique",
      "Vaccination"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes luminales doivent être éradiquées pour éviter l'excrétion de kystes."
  },
  {
    "id": "amibe_cycle_18",
    "axis": "lifecycle",
    "question": "Quel est le principal réservoir d'Entamoeba histolytica ?",
    "options": [
      "L'homme",
      "Les bovins",
      "Les porcs",
      "Les insectes"
    ],
    "correctAnswer": 0,
    "explanation": "L'homme est le seul réservoir connu."
  },
  {
    "id": "amibe_cycle_19",
    "axis": "lifecycle",
    "question": "Quelle étape du cycle est ciblée par les mesures d'hygiène collective ?",
    "options": [
      "Transmission fécale-orale des kystes",
      "Invasion tissulaire",
      "Excystation intestinale",
      "Multiplication hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "L'assainissement empêche l'ingestion des kystes."
  },
  {
    "id": "amibe_cycle_20",
    "axis": "lifecycle",
    "question": "Pourquoi les trophozoïtes ne sont-ils pas responsables de la transmission ?",
    "options": [
      "Ils sont fragiles et détruits dans le milieu extérieur",
      "Ils ne se multiplient pas",
      "Ils ne sont pas pathogènes",
      "Ils ne colonisent pas l'intestin"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes meurent rapidement hors de l'hôte."
  }
];
// ==========================================
// 3. CLINIQUE (20 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "amibe_clin_1",
    "axis": "clinical",
    "question": "Quelle est la triade clinique classique de l'abcès amibien du foie (Triade de Fontan) ?",
    "options": [
      "Fièvre, hépatomégalie douloureuse et douleur de l'hypocondre droit",
      "Ictère, ascite et fièvre",
      "Diarrhée glairo-sanglante, ténesme et épreintes",
      "Vomissements, céphalées et raideur de nuque"
    ],
    "correctAnswer": 0,
    "explanation": "La triade de Fontan associe fièvre, douleur de l'hypocondre droit et hépatomégalie douloureuse."
  },
  {
    "id": "amibe_clin_2",
    "axis": "clinical",
    "question": "Quelle est la manifestation intestinale la plus fréquente de l'amibiase invasive ?",
    "options": [
      "Dysenterie amibienne",
      "Constipation chronique",
      "Iléus paralytique",
      "Syndrome de malabsorption"
    ],
    "correctAnswer": 0,
    "explanation": "La dysenterie amibienne est caractérisée par des selles glairo-sanglantes."
  },
  {
    "id": "amibe_clin_3",
    "axis": "clinical",
    "question": "Quel signe clinique traduit une atteinte colique sévère dans l'amibiase ?",
    "options": [
      "Ténesme",
      "Ballonnement isolé",
      "Régurgitations",
      "Constipation simple"
    ],
    "correctAnswer": 0,
    "explanation": "Le ténesme témoigne d'une inflammation recto-sigmoïdienne marquée."
  },
  {
    "id": "amibe_clin_4",
    "axis": "clinical",
    "question": "Quel type de selles est typiquement observé lors de la dysenterie amibienne ?",
    "options": [
      "Selles glairo-sanglantes pauvres en matières fécales",
      "Selles aqueuses abondantes",
      "Selles graisseuses",
      "Selles noirâtres goudronneuses"
    ],
    "correctAnswer": 0,
    "explanation": "Les selles contiennent mucus et sang avec peu de matières."
  },
  {
    "id": "amibe_clin_5",
    "axis": "clinical",
    "question": "Quel organe est le plus souvent atteint lors des formes extra-intestinales ?",
    "options": [
      "Foie",
      "Poumon",
      "Cerveau",
      "Rate"
    ],
    "correctAnswer": 0,
    "explanation": "L'abcès hépatique amibien est la localisation extra-intestinale la plus fréquente."
  },
  {
    "id": "amibe_clin_6",
    "axis": "clinical",
    "question": "Quelle complication digestive grave peut survenir dans l'amibiase colique ?",
    "options": [
      "Perforation colique",
      "Appendicite aiguë",
      "Occlusion par fécalome",
      "Volvulus"
    ],
    "correctAnswer": 0,
    "explanation": "La nécrose colique peut entraîner une perforation."
  },
  {
    "id": "amibe_clin_7",
    "axis": "clinical",
    "question": "Quelle population est particulièrement à risque de formes sévères d'amibiase ?",
    "options": [
      "Patients immunodéprimés",
      "Adultes jeunes en bonne santé",
      "Sportifs de haut niveau",
      "Sujets végétariens"
    ],
    "correctAnswer": 0,
    "explanation": "L'immunodépression favorise l'invasion tissulaire."
  },
  {
    "id": "amibe_clin_8",
    "axis": "clinical",
    "question": "Quel signe clinique oriente vers une rupture d'abcès hépatique amibien ?",
    "options": [
      "Douleur thoracique brutale avec dyspnée",
      "Diarrhée chronique",
      "Ictère progressif isolé",
      "Amaigrissement lent"
    ],
    "correctAnswer": 0,
    "explanation": "La rupture peut se faire dans la plèvre ou le poumon."
  },
  {
    "id": "amibe_clin_9",
    "axis": "clinical",
    "question": "Quelle manifestation est typique de l'amibiase pulmonaire secondaire ?",
    "options": [
      "Expectoration chocolatée",
      "Hémoptysie massive isolée",
      "Toux sèche chronique",
      "Syndrome grippal"
    ],
    "correctAnswer": 0,
    "explanation": "L'expectoration brunâtre évoque le pus amibien."
  },
  {
    "id": "amibe_clin_10",
    "axis": "clinical",
    "question": "Quelle complication cutanée rare est associée à l'amibiase ?",
    "options": [
      "Ulcérations cutanées nécrotiques",
      "Érythème noueux",
      "Urticaire aiguë",
      "Psoriasis"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions cutanées sont secondaires à une dissémination locale."
  },
  {
    "id": "amibe_clin_11",
    "axis": "clinical",
    "question": "Quelle forme clinique correspond à une infestation asymptomatique ?",
    "options": [
      "Portage sain",
      "Dysenterie amibienne",
      "Abcès hépatique",
      "Colite fulminante"
    ],
    "correctAnswer": 0,
    "explanation": "Le portage sain correspond à la présence de formes luminales sans symptômes."
  },
  {
    "id": "amibe_clin_12",
    "axis": "clinical",
    "question": "Quelle est la présentation clinique la plus fréquente de l'abcès hépatique amibien ?",
    "options": [
      "Fièvre prolongée avec douleur de l'hypocondre droit",
      "Ictère obstructif franc",
      "Diarrhée aiguë sévère",
      "Syndrome méningé"
    ],
    "correctAnswer": 0,
    "explanation": "La fièvre et la douleur hépatique dominent le tableau."
  },
  {
    "id": "amibe_clin_13",
    "axis": "clinical",
    "question": "Quel signe biologique accompagne fréquemment l'abcès hépatique amibien ?",
    "options": [
      "Hyperleucocytose avec syndrome inflammatoire",
      "Hyperéosinophilie marquée",
      "Anémie hémolytique isolée",
      "Hypoglycémie sévère"
    ],
    "correctAnswer": 0,
    "explanation": "Un syndrome inflammatoire biologique est habituel."
  },
  {
    "id": "amibe_clin_14",
    "axis": "clinical",
    "question": "Quelle complication neurologique peut survenir dans l'amibiase ?",
    "options": [
      "Abcès cérébral amibien",
      "Encéphalite virale",
      "Méningite tuberculeuse",
      "Neuropathie périphérique"
    ],
    "correctAnswer": 0,
    "explanation": "Rare mais grave, l'abcès cérébral est lié à la dissémination hématogène."
  },
  {
    "id": "amibe_clin_15",
    "axis": "clinical",
    "question": "Quelle évolution clinique est typique sans traitement de la dysenterie amibienne ?",
    "options": [
      "Chronicité avec rechutes",
      "Guérison spontanée rapide",
      "Transformation immédiate en abcès hépatique",
      "Évolution toujours mortelle"
    ],
    "correctAnswer": 0,
    "explanation": "L'évolution chronique est fréquente sans traitement adapté."
  },
  {
    "id": "amibe_clin_16",
    "axis": "clinical",
    "question": "Quel signe clinique permet de distinguer l'amibiase de la dysenterie bacillaire ?",
    "options": [
      "Absence fréquente de fièvre élevée au début",
      "Présence constante de fièvre élevée",
      "Vomissements incoercibles",
      "Déshydratation sévère rapide"
    ],
    "correctAnswer": 0,
    "explanation": "La fièvre est souvent modérée ou absente initialement."
  },
  {
    "id": "amibe_clin_17",
    "axis": "clinical",
    "question": "Quel est le principal facteur favorisant la gravité de l'amibiase colique ?",
    "options": [
      "Dénutrition",
      "Hypertension artérielle",
      "Tabagisme",
      "Hypercholestérolémie"
    ],
    "correctAnswer": 0,
    "explanation": "La dénutrition affaiblit les défenses immunitaires."
  },
  {
    "id": "amibe_clin_18",
    "axis": "clinical",
    "question": "Quelle présentation clinique évoque une colite amibienne fulminante ?",
    "options": [
      "Douleurs abdominales sévères avec diarrhée sanglante abondante",
      "Constipation isolée",
      "Douleur épigastrique post-prandiale",
      "Ballonnements modérés"
    ],
    "correctAnswer": 0,
    "explanation": "La colite fulminante est une urgence vitale."
  },
  {
    "id": "amibe_clin_19",
    "axis": "clinical",
    "question": "Quel groupe d'âge est le plus touché par l'abcès hépatique amibien ?",
    "options": [
      "Adultes jeunes",
      "Nourrissons",
      "Personnes très âgées",
      "Nouveau-nés"
    ],
    "correctAnswer": 0,
    "explanation": "Les adultes jeunes sont les plus concernés."
  },
  {
    "id": "amibe_clin_20",
    "axis": "clinical",
    "question": "Quel signe clinique peut accompagner une atteinte pleuro-pulmonaire amibienne ?",
    "options": [
      "Douleur thoracique et toux",
      "Bradycardie isolée",
      "Hématurie",
      "Arthralgies migratrices"
    ],
    "correctAnswer": 0,
    "explanation": "L'extension thoracique provoque douleur et signes respiratoires."
  }
];
// ==========================================
// 4. DIAGNOSTIC (20 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "amibe_diag_1",
    "axis": "diagnosis",
    "question": "Quel est l'examen de référence pour le diagnostic d'un abcès amibien du foie ?",
    "options": [
      "Sérologie amibienne (ELISA ou IFI)",
      "Coproculture",
      "Examen parasitologique des selles",
      "Ponction hépatique systématique"
    ],
    "correctAnswer": 0,
    "explanation": "La sérologie est positive dans plus de 95 % des amibiases hépatiques, contrairement à l'examen des selles souvent négatif."
  },
  {
    "id": "amibe_diag_2",
    "axis": "diagnosis",
    "question": "Quel examen permet de visualiser directement les trophozoïtes d’Entamoeba histolytica ?",
    "options": [
      "Examen parasitologique direct des selles fraîches",
      "Sérologie",
      "PCR sanguine",
      "Test respiratoire"
    ],
    "correctAnswer": 0,
    "explanation": "L'examen direct des selles fraîches permet d'observer les trophozoïtes mobiles."
  },
  {
    "id": "amibe_diag_3",
    "axis": "diagnosis",
    "question": "Quel élément microscopique est pathognomonique d’E. histolytica ?",
    "options": [
      "Trophozoïte contenant des hématies phagocytées",
      "Kyste quadrinucléé",
      "Mobilité rapide",
      "Taille > 25 µm"
    ],
    "correctAnswer": 0,
    "explanation": "L'hématophagie est le seul critère morphologique spécifique."
  },
  {
    "id": "amibe_diag_4",
    "axis": "diagnosis",
    "question": "Pourquoi l’examen des selles peut-il être négatif lors d’un abcès hépatique amibien ?",
    "options": [
      "L'infection est extra-intestinale",
      "Les trophozoïtes sont détruits par l'acide gastrique",
      "Le parasite est uniquement sanguin",
      "Les kystes sont absents chez l’adulte"
    ],
    "correctAnswer": 0,
    "explanation": "Dans les formes hépatiques, l'infestation intestinale peut être absente ou ancienne."
  },
  {
    "id": "amibe_diag_5",
    "axis": "diagnosis",
    "question": "Quel examen permet de différencier E. histolytica d’E. dispar avec certitude ?",
    "options": [
      "PCR ou test antigénique spécifique",
      "Examen direct des selles",
      "Coloration trichrome",
      "Numération formule sanguine"
    ],
    "correctAnswer": 0,
    "explanation": "Les techniques moléculaires ou antigéniques sont nécessaires."
  },
  {
    "id": "amibe_diag_6",
    "axis": "diagnosis",
    "question": "Quel est l'intérêt principal des tests antigéniques dans les selles ?",
    "options": [
      "Identifier spécifiquement E. histolytica",
      "Mesurer la charge parasitaire",
      "Remplacer l'imagerie",
      "Évaluer la réponse au traitement"
    ],
    "correctAnswer": 0,
    "explanation": "Ils permettent une distinction rapide entre espèces pathogènes et non pathogènes."
  },
  {
    "id": "amibe_diag_7",
    "axis": "diagnosis",
    "question": "Quel aspect est typiquement retrouvé à l’échographie d’un abcès amibien du foie ?",
    "options": [
      "Image hypoéchogène homogène",
      "Multiples abcès cloisonnés",
      "Calcifications diffuses",
      "Aspect hyperéchogène"
    ],
    "correctAnswer": 0,
    "explanation": "L'abcès amibien est classiquement unique et hypoéchogène."
  },
  {
    "id": "amibe_diag_8",
    "axis": "diagnosis",
    "question": "Quel examen d’imagerie est le plus sensible pour détecter un abcès hépatique amibien ?",
    "options": [
      "Scanner abdominal",
      "Radiographie thoracique",
      "ASP",
      "IRM cérébrale"
    ],
    "correctAnswer": 0,
    "explanation": "Le scanner permet une meilleure caractérisation que l'échographie."
  },
  {
    "id": "amibe_diag_9",
    "axis": "diagnosis",
    "question": "Quel résultat biologique est fréquemment associé à l’abcès hépatique amibien ?",
    "options": [
      "Hyperleucocytose avec syndrome inflammatoire",
      "Éosinophilie majeure",
      "Hypoglycémie",
      "Cytopénie globale"
    ],
    "correctAnswer": 0,
    "explanation": "L’éosinophilie est rare dans l’amibiase."
  },
  {
    "id": "amibe_diag_10",
    "axis": "diagnosis",
    "question": "Quel examen est inutile pour confirmer une amibiase invasive ?",
    "options": [
      "Coproculture bactérienne",
      "Sérologie",
      "Imagerie hépatique",
      "PCR"
    ],
    "correctAnswer": 0,
    "explanation": "La coproculture n'a aucun intérêt pour les parasites."
  },
  {
    "id": "amibe_diag_11",
    "axis": "diagnosis",
    "question": "Pourquoi la ponction d’un abcès hépatique amibien est-elle rarement réalisée ?",
    "options": [
      "Risque de complications et faible rendement parasitologique",
      "Toujours négative",
      "Inutile chez l’enfant",
      "Trop coûteuse"
    ],
    "correctAnswer": 0,
    "explanation": "Le pus est souvent stérile et le diagnostic est sérologique."
  },
  {
    "id": "amibe_diag_12",
    "axis": "diagnosis",
    "question": "Quel est l’aspect macroscopique typique du pus d’un abcès amibien ?",
    "options": [
      "Couleur chocolat ou pâte d’anchois",
      "Purulent verdâtre",
      "Séreux clair",
      "Hémorragique"
    ],
    "correctAnswer": 0,
    "explanation": "Cet aspect est évocateur mais non spécifique."
  },
  {
    "id": "amibe_diag_13",
    "axis": "diagnosis",
    "question": "Quel examen est le plus utile dans une dysenterie amibienne aiguë ?",
    "options": [
      "Examen parasitologique répété des selles",
      "Sérologie",
      "Scanner abdominal",
      "Hémoculture"
    ],
    "correctAnswer": 0,
    "explanation": "Des examens répétés augmentent la sensibilité."
  },
  {
    "id": "amibe_diag_14",
    "axis": "diagnosis",
    "question": "Pourquoi faut-il examiner des selles fraîches et chaudes ?",
    "options": [
      "Pour observer la mobilité des trophozoïtes",
      "Pour éviter la contamination bactérienne",
      "Pour conserver les kystes",
      "Pour améliorer la coloration"
    ],
    "correctAnswer": 0,
    "explanation": "La mobilité est rapidement perdue après émission."
  },
  {
    "id": "amibe_diag_15",
    "axis": "diagnosis",
    "question": "Quel marqueur sérologique témoigne d’une infection ancienne plutôt que récente ?",
    "options": [
      "Persistance d’anticorps IgG",
      "Présence d’IgM",
      "Antigène fécal positif",
      "PCR positive"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgG persistent plusieurs années."
  },
  {
    "id": "amibe_diag_16",
    "axis": "diagnosis",
    "question": "Quelle technique est la plus sensible pour détecter une faible charge parasitaire intestinale ?",
    "options": [
      "PCR sur selles",
      "Examen direct simple",
      "Coloration à l’iode",
      "Sérologie"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR est très sensible et spécifique."
  },
  {
    "id": "amibe_diag_17",
    "axis": "diagnosis",
    "question": "Quel est le principal intérêt de la coloration trichrome ?",
    "options": [
      "Améliorer la visualisation des noyaux et inclusions",
      "Identifier l’hématophagie",
      "Différencier E. histolytica d’E. dispar",
      "Mesurer la charge parasitaire"
    ],
    "correctAnswer": 0,
    "explanation": "Elle améliore l'analyse morphologique."
  },
  {
    "id": "amibe_diag_18",
    "axis": "diagnosis",
    "question": "Dans quel contexte la sérologie amibienne peut-elle être négative ?",
    "options": [
      "Amibiase intestinale récente",
      "Abcès hépatique évolué",
      "Forme grave",
      "Chez l’adulte immunocompétent"
    ],
    "correctAnswer": 0,
    "explanation": "La sérologie est souvent négative au début des formes intestinales."
  },
  {
    "id": "amibe_diag_19",
    "axis": "diagnosis",
    "question": "Quel examen permet le suivi de l’évolution d’un abcès hépatique amibien ?",
    "options": [
      "Échographie hépatique",
      "Sérologie répétée",
      "Examen des selles",
      "NFS quotidienne"
    ],
    "correctAnswer": 0,
    "explanation": "L'imagerie permet d'évaluer la régression."
  },
  {
    "id": "amibe_diag_20",
    "axis": "diagnosis",
    "question": "Quel élément oriente vers une amibiase plutôt qu’une colite bactérienne ?",
    "options": [
      "Absence de fièvre élevée avec dysenterie",
      "Présence de leucocytes dans les selles",
      "Déshydratation sévère",
      "Vomissements incoercibles"
    ],
    "correctAnswer": 0,
    "explanation": "La dysenterie amibienne peut être peu fébrile."
  }
];
// ==========================================
// 5. TRAITEMENT (20 Questions)
// ==========================================
const treatmentQuestions = [
  {
    "id": "amibe_treat_1",
    "axis": "treatment",
    "question": "Quel est le schéma thérapeutique complet d'une amibiase intestinale aiguë ?",
    "options": [
      "Amoebicide tissulaire suivi d'un amoebicide de contact",
      "Métronidazole seul",
      "Albendazole seul",
      "Lopéramide seul"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement doit associer un amoebicide tissulaire (formes invasives) puis un amoebicide luminal pour éviter les rechutes."
  },
  {
    "id": "amibe_treat_2",
    "axis": "treatment",
    "question": "Quel est l'amoebicide tissulaire de référence dans l'amibiase invasive ?",
    "options": [
      "Métronidazole",
      "Tiliquinol",
      "Diloxanide furoate",
      "Paromomycine"
    ],
    "correctAnswer": 0,
    "explanation": "Le métronidazole est actif sur les trophozoïtes tissulaires."
  },
  {
    "id": "amibe_treat_3",
    "axis": "treatment",
    "question": "Quelle est la durée habituelle du traitement par métronidazole dans l'amibiase intestinale ?",
    "options": [
      "7 à 10 jours",
      "24 heures",
      "3 jours",
      "30 jours"
    ],
    "correctAnswer": 0,
    "explanation": "Une durée suffisante est nécessaire pour éradiquer les formes invasives."
  },
  {
    "id": "amibe_treat_4",
    "axis": "treatment",
    "question": "Quel médicament est utilisé comme amoebicide de contact (luminal) ?",
    "options": [
      "Paromomycine",
      "Métronidazole",
      "Quinine",
      "Albendazole"
    ],
    "correctAnswer": 0,
    "explanation": "La paromomycine agit dans la lumière intestinale sur les formes non invasives."
  },
  {
    "id": "amibe_treat_5",
    "axis": "treatment",
    "question": "Pourquoi un amoebicide luminal est-il indispensable après le métronidazole ?",
    "options": [
      "Pour éliminer les kystes et prévenir les rechutes",
      "Pour traiter l'abcès hépatique",
      "Pour réduire les effets indésirables",
      "Pour augmenter l'immunité"
    ],
    "correctAnswer": 0,
    "explanation": "Le métronidazole n'élimine pas efficacement les formes luminales."
  },
  {
    "id": "amibe_treat_6",
    "axis": "treatment",
    "question": "Quel est le traitement recommandé chez un porteur asymptomatique d'Entamoeba histolytica ?",
    "options": [
      "Amoebicide de contact seul",
      "Métronidazole IV",
      "Aucun traitement",
      "Corticothérapie"
    ],
    "correctAnswer": 0,
    "explanation": "Le portage doit être traité pour interrompre la transmission."
  },
  {
    "id": "amibe_treat_7",
    "axis": "treatment",
    "question": "Quel est le traitement de première intention de l'abcès hépatique amibien non compliqué ?",
    "options": [
      "Métronidazole seul",
      "Drainage chirurgical systématique",
      "Paromomycine seule",
      "Antibiothérapie large spectre"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement médical est généralement suffisant."
  },
  {
    "id": "amibe_treat_8",
    "axis": "treatment",
    "question": "Dans quel cas le drainage d'un abcès hépatique amibien est-il indiqué ?",
    "options": [
      "Risque de rupture ou échec du traitement médical",
      "Dès le diagnostic",
      "Toujours chez l'adulte",
      "En cas de petite taille"
    ],
    "correctAnswer": 0,
    "explanation": "Le drainage est réservé aux formes compliquées."
  },
  {
    "id": "amibe_treat_9",
    "axis": "treatment",
    "question": "Quelle est la contre-indication majeure du métronidazole ?",
    "options": [
      "Consommation d'alcool",
      "Hypertension artérielle",
      "Diabète",
      "Asthme"
    ],
    "correctAnswer": 0,
    "explanation": "Le métronidazole provoque un effet antabuse avec l'alcool."
  },
  {
    "id": "amibe_treat_10",
    "axis": "treatment",
    "question": "Quel effet indésirable neurologique peut survenir avec le métronidazole ?",
    "options": [
      "Neuropathie périphérique",
      "Myopathie",
      "Surdité",
      "Convulsions fébriles"
    ],
    "correctAnswer": 0,
    "explanation": "Un traitement prolongé peut entraîner une neuropathie."
  },
  {
    "id": "amibe_treat_11",
    "axis": "treatment",
    "question": "Quel traitement est recommandé chez la femme enceinte atteinte d'amibiase invasive ?",
    "options": [
      "Métronidazole après le 1er trimestre",
      "Paromomycine IV",
      "Aucun traitement",
      "Albendazole"
    ],
    "correctAnswer": 0,
    "explanation": "Le métronidazole est utilisable après le premier trimestre."
  },
  {
    "id": "amibe_treat_12",
    "axis": "treatment",
    "question": "Quel médicament est préféré pendant le 1er trimestre de grossesse si un traitement est nécessaire ?",
    "options": [
      "Paromomycine",
      "Métronidazole",
      "Tinidazole",
      "Chloroquine"
    ],
    "correctAnswer": 0,
    "explanation": "La paromomycine n'est pas absorbée et est plus sûre."
  },
  {
    "id": "amibe_treat_13",
    "axis": "treatment",
    "question": "Pourquoi les antidiarrhéiques sont-ils contre-indiqués dans l'amibiase aiguë ?",
    "options": [
      "Ils favorisent la rétention des trophozoïtes",
      "Ils aggravent la fièvre",
      "Ils sont inefficaces",
      "Ils détruisent la flore intestinale"
    ],
    "correctAnswer": 0,
    "explanation": "Ils augmentent le risque de complications coliques."
  },
  {
    "id": "amibe_treat_14",
    "axis": "treatment",
    "question": "Quel traitement doit toujours être poursuivi après guérison clinique de l'abcès hépatique ?",
    "options": [
      "Amoebicide de contact",
      "Antibiothérapie IV prolongée",
      "Corticothérapie",
      "Chimiothérapie"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes luminales persistent malgré la guérison clinique."
  },
  {
    "id": "amibe_treat_15",
    "axis": "treatment",
    "question": "Quel est le rôle principal du traitement dans le portage asymptomatique ?",
    "options": [
      "Prévenir la transmission et les formes invasives",
      "Soulager les douleurs",
      "Réduire la fièvre",
      "Éviter la malabsorption"
    ],
    "correctAnswer": 0,
    "explanation": "Le porteur sain est un réservoir de kystes."
  },
  {
    "id": "amibe_treat_16",
    "axis": "treatment",
    "question": "Quel antibiotique n'a AUCUNE indication dans l'amibiase ?",
    "options": [
      "Albendazole",
      "Métronidazole",
      "Paromomycine",
      "Tiliquinol"
    ],
    "correctAnswer": 0,
    "explanation": "L'albendazole est un antihelminthique."
  },
  {
    "id": "amibe_treat_17",
    "axis": "treatment",
    "question": "Quel suivi est recommandé après traitement d'une amibiase intestinale ?",
    "options": [
      "Contrôle parasitologique des selles",
      "Aucun suivi",
      "Scanner abdominal systématique",
      "Sérologie répétée"
    ],
    "correctAnswer": 0,
    "explanation": "Le contrôle des selles confirme l'éradication."
  },
  {
    "id": "amibe_treat_18",
    "axis": "treatment",
    "question": "Quel est l'objectif principal du traitement de l'amibiase ?",
    "options": [
      "Éradiquer les formes invasives et luminales",
      "Soulager uniquement les symptômes",
      "Éliminer la fièvre",
      "Prévenir la déshydratation"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement doit être parasiticide complet."
  },
  {
    "id": "amibe_treat_19",
    "axis": "treatment",
    "question": "Quel facteur impose une hospitalisation dans l'amibiase ?",
    "options": [
      "Forme grave ou complication hépatique",
      "Portage asymptomatique",
      "Diarrhée légère",
      "Absence de fièvre"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes graves nécessitent une surveillance étroite."
  },
  {
    "id": "amibe_treat_20",
    "axis": "treatment",
    "question": "Quelle mesure non médicamenteuse est essentielle dans la prise en charge ?",
    "options": [
      "Hygiène alimentaire et assainissement",
      "Régime hyperprotéiné",
      "Supplémentation vitaminique",
      "Repos strict prolongé"
    ],
    "correctAnswer": 0,
    "explanation": "La prévention repose sur l'hygiène et l'assainissement."
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
