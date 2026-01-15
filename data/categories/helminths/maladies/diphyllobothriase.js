export const questions = [
    // =========================
    // DIPHYLLOBOTHRIASIS - Morphologie, Cycle, Clinique & Traitement (30 QCM)
    // =========================
    {
      id: "diphy_morph_1",
      axis: "morphology",
      question: "Le scolex du Bothriocéphale est caractérisé par :",
      options: ["Présence de bothries (fentes) et absence de ventouses", "Scolex avec 4 ventouses et rostre armé", "Scolex filiforme sans ventouses ni fentes", "Scolex globuleux avec ventouses multiples"],
      correctAnswer: 0,
      explanation: "Le scolex du Bothriocéphale possède des bothries, des fentes longitudinales qui lui permettent de s’ancrer à la muqueuse intestinale, contrairement aux ténias classiques avec ventouses."
    },
    {
      id: "diphy_morph_2",
      axis: "morphology",
      question: "Les anneaux adultes de Diphyllobothrium latum sont :",
      options: ["Plus larges que longs, avec proglottides matures segmentées", "Petits et cylindriques", "Filiformes et non segmentés", "Arrondis et isolés"],
      correctAnswer: 0,
      explanation: "Les proglottides matures sont plus larges que longs et contiennent des œufs operculés caractéristiques."
    },
    {
      id: "diphy_lifecycle_1",
      axis: "lifecycle",
      question: "La contamination humaine se fait par :",
      options: ["Ingestion de poissons d’eau douce crus ou mal cuits contenant des plérocercoïdes", "Inhalation de spores", "Contact cutané direct avec l’eau", "Piqûre d’insecte vecteur"],
      correctAnswer: 0,
      explanation: "Les humains s’infectent en consommant des poissons d’eau douce crus ou insuffisamment cuits contenant le stade larvaire plérocercoïde."
    },
    {
      id: "diphy_lifecycle_2",
      axis: "lifecycle",
      question: "Le cycle du Bothriocéphale implique :",
      options: ["Copepods comme premier hôte intermédiaire et poisson comme second hôte intermédiaire", "Transmission directe humain-humain", "Cycle uniquement cutané", "Hôte unique sans intermédiaire"],
      correctAnswer: 0,
      explanation: "Le cycle est hétéroxène : les œufs éclosent en larves dans l’eau, infectent les copépodes, puis les poissons d’eau douce, avant d’atteindre l’homme."
    },
    {
      id: "diphy_lifecycle_3",
      axis: "lifecycle",
      question: "La ponte des œufs se fait :",
      options: ["Dans l’intestin grêle, œufs éliminés dans les selles", "Dans le sang", "Dans l’urine", "Dans la bile uniquement"],
      correctAnswer: 0,
      explanation: "Les adultes libèrent des œufs operculés dans la lumière intestinale qui sont excrétés avec les selles."
    },
    {
      id: "diphy_clin_1",
      axis: "clinical",
      question: "La manifestation clinique la plus spécifique de la diphyllobothriase est :",
      options: ["Anémie macrocytaire par déficit en vitamine B12", "Diarrhée sanglante", "Éruption cutanée prurigineuse", "Toux persistante"],
      correctAnswer: 0,
      explanation: "L’adulte intestinal absorbe la vitamine B12, pouvant provoquer une anémie macrocytaire de type Biermer."
    },
    {
      id: "diphy_clin_2",
      axis: "clinical",
      question: "Autres symptômes possibles incluent :",
      options: ["Troubles digestifs légers, diarrhée, douleurs abdominales", "Fièvre élevée et ictère", "Dyspnée et toux", "Hématurie"],
      correctAnswer: 0,
      explanation: "La plupart des infections sont asymptomatiques ou se manifestent par des symptômes digestifs mineurs."
    },
    {
      id: "diphy_clin_3",
      axis: "clinical",
      question: "Le risque neurologique de la diphyllobothriase est :",
      options: ["Indirect via anémie B12 sévère (neuropathie)", "Direct par invasion cérébrale", "Direct par migration sous-cutanée", "Non existant"],
      correctAnswer: 0,
      explanation: "Une carence sévère en vitamine B12 peut provoquer neuropathie et signes neurologiques secondaires."
    },
    {
      id: "diphy_diag_1",
      axis: "diagnosis",
      question: "Le diagnostic repose sur :",
      options: ["Observation microscopique des œufs operculés dans les selles", "Sérologie ELISA", "Imagerie abdominale", "PCR uniquement"],
      correctAnswer: 0,
      explanation: "Le diagnostic de certitude repose sur la détection des œufs operculés, elliptiques, dans les selles."
    },
    {
      id: "diphy_diag_2",
      axis: "diagnosis",
      question: "Les œufs caractéristiques sont :",
      options: ["Operculés, elliptiques, avec un opercule terminal et un petit knob opposé", "Ronds sans opercule", "En forme de D", "Avec filaments polaires"],
      correctAnswer: 0,
      explanation: "Ces caractéristiques morphologiques permettent de distinguer Diphyllobothrium d’autres ténias intestinaux."
    },
    {
      id: "diphy_diag_3",
      axis: "diagnosis",
      question: "Une anémie macrocytaire avec B12 faible suggère :",
      options: ["Diphyllobothriase chronique", "Ascaridiose", "Trichocéphalose", "Hyménolépiases"],
      correctAnswer: 0,
      explanation: "La diphyllobothriase adulte consomme de la vitamine B12, pouvant induire une anémie macrocytaire de type Biermer."
    },
    {
      id: "diphy_treat_1",
      axis: "treatment",
      question: "Le traitement de choix est :",
      options: ["Praziquantel", "Albendazole", "Mebendazole", "Ivermectine"],
      correctAnswer: 0,
      explanation: "Le praziquantel est efficace contre Diphyllobothrium, éliminant l’adulte intestinal."
    },
    {
      id: "diphy_treat_2",
      axis: "treatment",
      question: "La dose recommandée de praziquantel pour Diphyllobothrium est :",
      options: ["5 à 10 mg/kg en dose unique", "25 mg/kg", "40 mg/kg", "100 mg/kg"],
      correctAnswer: 0,
      explanation: "La dose standard est 5 à 10 mg/kg en prise unique, efficace pour éradiquer le parasite adulte."
    },
    {
      id: "diphy_treat_3",
      axis: "treatment",
      question: "Après traitement, le suivi consiste à :",
      options: ["Contrôle des œufs dans les selles après 2-3 semaines", "Échographie abdominale", "Sérologie répétée", "Radiographie pulmonaire"],
      correctAnswer: 0,
      explanation: "Le suivi parasitologique confirme l’éradication de l’adulte intestinal."
    },
    {
      id: "diphy_clin_4",
      axis: "clinical",
      question: "Les complications possibles sont :",
      options: ["Neuropathie périphérique secondaire à carence B12", "Cholangite aiguë", "Insuffisance rénale", "Dermatite allergique"],
      correctAnswer: 0,
      explanation: "La principale complication systémique est liée à la carence en vitamine B12 entraînant neuropathie."
    },
    {
      id: "diphy_lifecycle_4",
      axis: "lifecycle",
      question: "Le plérocercoïde se développe dans :",
      options: ["Les muscles du poisson d’eau douce", "Le sang de l’homme", "L’intestin de l’escargot", "La peau humaine"],
      correctAnswer: 0,
      explanation: "Le stade larvaire infectant, plérocercoïde, est présent dans les muscles des poissons d’eau douce consommés crus."
    },
    {
      id: "diphy_morph_4",
      axis: "morphology",
      question: "Les proglottides matures de Diphyllobothrium latum contiennent :",
      options: ["Oeufs operculés en grande quantité", "Filaments polaires", "Oeufs en forme de D", "Œufs sphériques non operculés"],
      correctAnswer: 0,
      explanation: "Les proglottides matures sont remplies d’œufs operculés elliptiques caractéristiques."
    },
    {
      id: "diphy_clin_5",
      axis: "clinical",
      question: "Les signes digestifs possibles sont :",
      options: ["Diarrhée légère, douleurs abdominales, anorexie", "Hémorragie digestive massive", "Coliques néphrétiques", "Fièvre élevée"],
      correctAnswer: 0,
      explanation: "La plupart des patients sont asymptomatiques ou présentent des symptômes digestifs mineurs."
    },
    {
      id: "diphy_diag_4",
      axis: "diagnosis",
      question: "La confirmation peut être obtenue par :",
      options: ["Examen microscopique répété des selles", "Sérologie ELISA uniquement", "Imagerie abdominale", "Test cutané"],
      correctAnswer: 0,
      explanation: "Comme les œufs sont excrétés en grand nombre, l’examen microscopique répétitif est fiable pour le diagnostic."
    },
    {
      id: "diphy_treat_4",
      axis: "treatment",
      question: "En cas d’anémie sévère, le traitement inclut :",
      options: ["Supplémentation en vitamine B12", "Fer uniquement", "Corticoïdes", "Transfusion obligatoire"],
      correctAnswer: 0,
      explanation: "Le traitement combine antiparasitaire et correction du déficit en vitamine B12 pour résoudre l’anémie macrocytaire."
    },
    {
      id: "diphy_lifecycle_5",
      axis: "lifecycle",
      question: "La prévention repose sur :",
      options: ["Cuisson complète des poissons d’eau douce", "Filtration de l’eau uniquement", "Hygiène des mains", "Vaccination contre le parasite"],
      correctAnswer: 0,
      explanation: "La consommation de poissons crus ou insuffisamment cuits est la principale voie de contamination."
    },
    {
      id: "diphy_clin_6",
      axis: "clinical",
      question: "La sévérité clinique dépend principalement de :",
      options: ["Durée de l’infection et déficit en vitamine B12", "Nombre de proglottides visibles", "Taille du scolex uniquement", "Présence de ventouses"],
      correctAnswer: 0,
      explanation: "Plus l’infection est prolongée, plus le déficit en B12 peut provoquer une anémie macrocytaire significative."
    },
    {
      id: "diphy_morph_5",
      axis: "morphology",
      question: "Les bothries permettent :",
      options: ["Fixation à la muqueuse intestinale sans ventouses", "Aspiration des nutriments dans le sang", "Libération de toxines", "Migration tissulaire"],
      correctAnswer: 0,
      explanation: "Les fentes du scolex permettent au ténia de s’ancrer solidement à l’intestin grêle."
    },
    {
      id: "diphy_treat_5",
      axis: "treatment",
      question: "L’efficacité du traitement est confirmée par :",
      options: ["Absence d’œufs dans les selles après 2-3 semaines", "Sérologie positive", "Échographie abdominale", "Imagerie cérébrale"],
      correctAnswer: 0,
      explanation: "La disparition des œufs dans les selles confirme la guérison de l’infection."
    }
  ];
  