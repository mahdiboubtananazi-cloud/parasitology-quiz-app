// ==========================================
// 1. MORPHOLOGIE (20 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "leish_morph_1",
    "axis": "morphology",
    "question": "Quelle forme du parasite retrouve-t-on à l'intérieur des macrophages humains ?",
    "options": ["Amastigote", "Promastigote", "Epimastigote", "Trypomastigote"],
    "correctAnswer": 0,
    "explanation": "Chez l’homme, Leishmania est présent sous forme amastigote intracellulaire, non flagellée."
  },
  {
    "id": "leish_morph_2",
    "axis": "morphology",
    "question": "Quel élément morphologique est caractéristique et indispensable au diagnostic microscopique de Leishmania ?",
    "options": ["Kinétoplaste", "Axostyle", "Undulating membrane", "Spicule"],
    "correctAnswer": 0,
    "explanation": "Le kinétoplaste est un amas d’ADN mitochondrial typique des kinétoplastidés."
  },
  {
    "id": "leish_morph_3",
    "axis": "morphology",
    "question": "Quelle est la taille moyenne d’un amastigote de Leishmania ?",
    "options": ["2–4 µm", "8–10 µm", "15–20 µm", "25–30 µm"],
    "correctAnswer": 0,
    "explanation": "Les amastigotes sont de petite taille, facilitant leur localisation intracellulaire."
  },
  {
    "id": "leish_morph_4",
    "axis": "morphology",
    "question": "Quelle forme est retrouvée dans le tube digestif du phlébotome ?",
    "options": ["Promastigote", "Amastigote", "Kyste", "Schizonte"],
    "correctAnswer": 0,
    "explanation": "La forme promastigote flagellée se multiplie chez le vecteur."
  },
  {
    "id": "leish_morph_5",
    "axis": "morphology",
    "question": "Quel est l’aspect typique de l’amastigote en microscopie optique (Giemsa) ?",
    "options": ["Corps ovalaire avec noyau et kinétoplaste en bâtonnet", "Cellule sphérique sans noyau", "Forme allongée avec flagelle libre", "Corps multinucléé"],
    "correctAnswer": 0,
    "explanation": "L’association noyau + kinétoplaste est caractéristique."
  },
  {
    "id": "leish_morph_6",
    "axis": "morphology",
    "question": "Comment se présente le flagelle chez le promastigote ?",
    "options": ["Libre et antérieur", "Absent", "Court et postérieur", "Inclus dans une membrane ondulante"],
    "correctAnswer": 0,
    "explanation": "Le promastigote possède un flagelle libre facilitant sa mobilité."
  },
  {
    "id": "leish_morph_7",
    "axis": "morphology",
    "question": "Quelle structure permet de différencier Leishmania des levures intracellulaires (Histoplasma) ?",
    "options": ["Kinétoplaste", "Capsule", "Paroi chitineuse", "Bourgeonnement"],
    "correctAnswer": 0,
    "explanation": "Le kinétoplaste est absent chez les champignons."
  },
  {
    "id": "leish_morph_8",
    "axis": "morphology",
    "question": "Dans quel compartiment cellulaire humain retrouve-t-on les amastigotes ?",
    "options": ["Phagolysosome", "Noyau", "Cytosol libre", "Mitochondrie"],
    "correctAnswer": 0,
    "explanation": "Les amastigotes survivent dans le phagolysosome des macrophages."
  },
  {
    "id": "leish_morph_9",
    "axis": "morphology",
    "question": "Quelle coloration est classiquement utilisée pour visualiser Leishmania ?",
    "options": ["Giemsa", "Ziehl-Neelsen", "PAS", "Gram"],
    "correctAnswer": 0,
    "explanation": "La coloration de Giemsa met en évidence noyau et kinétoplaste."
  },
  {
    "id": "leish_morph_10",
    "axis": "morphology",
    "question": "Quel est l’aspect du noyau de l’amastigote ?",
    "options": ["Unique, arrondi, central ou excentré", "Multilobé", "Absent", "Fragmenté"],
    "correctAnswer": 0,
    "explanation": "L’amastigote possède un noyau unique bien visible."
  },
  {
    "id": "leish_morph_11",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique explique la résistance de Leishmania dans les macrophages ?",
    "options": ["Adaptation au pH acide du phagolysosome", "Capsule épaisse", "Formation de spores", "Paroi cellulosique"],
    "correctAnswer": 0,
    "explanation": "Leishmania est adapté à la survie en milieu acide."
  },
  {
    "id": "leish_morph_12",
    "axis": "morphology",
    "question": "Comment se dispose le kinétoplaste par rapport au noyau chez l’amastigote ?",
    "options": ["Juxtanucléaire", "Intranucleaire", "Très éloigné", "Absent"],
    "correctAnswer": 0,
    "explanation": "La proximité noyau–kinétoplaste est un critère clé."
  },
  {
    "id": "leish_morph_13",
    "axis": "morphology",
    "question": "Quel est l’aspect morphologique des promastigotes en culture ?",
    "options": ["Allongés, fusiformes, flagellés", "Ronds et immobiles", "Multinucléés", "Encapsulés"],
    "correctAnswer": 0,
    "explanation": "La culture favorise la forme promastigote."
  },
  {
    "id": "leish_morph_14",
    "axis": "morphology",
    "question": "Quelle forme est infectante pour l’homme ?",
    "options": ["Promastigote métacyclique", "Amastigote", "Kyste", "Œuf"],
    "correctAnswer": 0,
    "explanation": "Le phlébotome inocule la forme promastigote métacyclique."
  },
  {
    "id": "leish_morph_15",
    "axis": "morphology",
    "question": "Quel est l’aspect typique d’un macrophage parasité en histologie ?",
    "options": ["Macrophage rempli de petits corps ovalaires", "Cellule géante multinucléée", "Nécrose extensive sans parasites", "Fibrose dense"],
    "correctAnswer": 0,
    "explanation": "Les macrophages contiennent souvent de nombreux amastigotes."
  },
  {
    "id": "leish_morph_16",
    "axis": "morphology",
    "question": "Quelle différence morphologique distingue Leishmania de Trypanosoma ?",
    "options": ["Absence de membrane ondulante chez Leishmania", "Présence d’un kyste", "Parasitisme extracellulaire", "Spores"],
    "correctAnswer": 0,
    "explanation": "Trypanosoma possède une membrane ondulante, contrairement à Leishmania."
  },
  {
    "id": "leish_morph_17",
    "axis": "morphology",
    "question": "Quel est le nombre de flagelles visibles chez l’amastigote ?",
    "options": ["Aucun flagelle externe", "Un flagelle long", "Deux flagelles", "Flagelle postérieur"],
    "correctAnswer": 0,
    "explanation": "Le flagelle est réduit à un vestige non visible."
  },
  {
    "id": "leish_morph_18",
    "axis": "morphology",
    "question": "Quel est le principal piège diagnostique morphologique en microscopie ?",
    "options": ["Confusion avec Histoplasma capsulatum", "Confusion avec Plasmodium", "Confusion avec Giardia", "Confusion avec Entamoeba"],
    "correctAnswer": 0,
    "explanation": "Les deux sont de petits éléments intracellulaires."
  },
  {
    "id": "leish_morph_19",
    "axis": "morphology",
    "question": "Quel élément n’appartient PAS à la morphologie de Leishmania ?",
    "options": ["Membrane ondulante développée", "Noyau", "Kinétoplaste", "Flagelle (selon la forme)"],
    "correctAnswer": 0,
    "explanation": "La membrane ondulante est absente chez Leishmania."
  },
  {
    "id": "leish_morph_20",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique explique la multiplication intracellulaire ?",
    "options": ["Division binaire des amastigotes", "Schizogonie", "Bourgeonnement", "Sporulation"],
    "correctAnswer": 0,
    "explanation": "Les amastigotes se multiplient par division binaire dans les macrophages."
  }
];
// ==========================================
// 2. CYCLE DE VIE (20 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "leish_cycle_1",
    "axis": "lifecycle",
    "question": "Quel est le vecteur biologique responsable de la transmission de la leishmaniose ?",
    "options": ["Le phlébotome femelle", "Le moustique Anophèle", "La mouche tsé-tsé", "La tique Ixodes"],
    "correctAnswer": 0,
    "explanation": "La leishmaniose est transmise par la piqûre du phlébotome femelle hématophage."
  },
  {
    "id": "leish_cycle_2",
    "axis": "lifecycle",
    "question": "Quelle est la forme infestante pour l’homme lors de la piqûre du phlébotome ?",
    "options": ["Promastigote métacyclique", "Amastigote", "Promastigote procyclique", "Kyste"],
    "correctAnswer": 0,
    "explanation": "Le phlébotome inocule des promastigotes métacycliques dans le derme."
  },
  {
    "id": "leish_cycle_3",
    "axis": "lifecycle",
    "question": "Que deviennent les promastigotes après leur inoculation chez l’homme ?",
    "options": ["Ils sont phagocytés par les macrophages et se transforment en amastigotes", "Ils restent extracellulaires", "Ils se transforment en kystes", "Ils migrent vers le sang sous forme flagellée"],
    "correctAnswer": 0,
    "explanation": "La transformation en amastigotes permet la survie intracellulaire."
  },
  {
    "id": "leish_cycle_4",
    "axis": "lifecycle",
    "question": "Dans quel type de cellule humaine Leishmania se multiplie-t-elle ?",
    "options": ["Macrophage", "Hématie", "Neurone", "Cellule épithéliale"],
    "correctAnswer": 0,
    "explanation": "Leishmania est un parasite intracellulaire obligatoire des macrophages."
  },
  {
    "id": "leish_cycle_5",
    "axis": "lifecycle",
    "question": "Quel est le mode de multiplication de Leishmania chez l’homme ?",
    "options": ["Division binaire des amastigotes", "Schizogonie", "Bourgeonnement", "Reproduction sexuée"],
    "correctAnswer": 0,
    "explanation": "Les amastigotes se multiplient par division binaire intracellulaire."
  },
  {
    "id": "leish_cycle_6",
    "axis": "lifecycle",
    "question": "Quelle forme est ingérée par le phlébotome lors d’un repas sanguin ?",
    "options": ["Amastigote", "Promastigote métacyclique", "Promastigote procyclique", "Kyste"],
    "correctAnswer": 0,
    "explanation": "Le phlébotome ingère des macrophages parasités contenant des amastigotes."
  },
  {
    "id": "leish_cycle_7",
    "axis": "lifecycle",
    "question": "Où se déroule la transformation amastigote → promastigote ?",
    "options": ["Dans l’intestin du phlébotome", "Dans le foie humain", "Dans la rate", "Dans la peau humaine"],
    "correctAnswer": 0,
    "explanation": "La transformation a lieu dans le tube digestif du vecteur."
  },
  {
    "id": "leish_cycle_8",
    "axis": "lifecycle",
    "question": "Quel organe du phlébotome permet la multiplication des promastigotes ?",
    "options": ["Intestin moyen", "Glandes salivaires", "Hémocoele", "Ovaires"],
    "correctAnswer": 0,
    "explanation": "Les promastigotes se multiplient activement dans l’intestin moyen."
  },
  {
    "id": "leish_cycle_9",
    "axis": "lifecycle",
    "question": "Comment les promastigotes deviennent-ils infectants pour l’homme ?",
    "options": ["Par différenciation en promastigotes métacycliques", "Par transformation en amastigotes", "Par enkystement", "Par fusion cellulaire"],
    "correctAnswer": 0,
    "explanation": "La métacyclogenèse confère le pouvoir infectant."
  },
  {
    "id": "leish_cycle_10",
    "axis": "lifecycle",
    "question": "Quel est le réservoir principal de Leishmania dans les zones méditerranéennes ?",
    "options": ["Le chien", "Le rat", "L’homme uniquement", "Le bétail"],
    "correctAnswer": 0,
    "explanation": "Le chien est le principal réservoir zoonotique."
  },
  {
    "id": "leish_cycle_11",
    "axis": "lifecycle",
    "question": "Quel type de cycle décrit le mieux la leishmaniose ?",
    "options": ["Cycle hétéroxène (homme–vecteur)", "Cycle monoxène", "Cycle aquatique", "Cycle direct sans vecteur"],
    "correctAnswer": 0,
    "explanation": "Le cycle nécessite un hôte vertébré et un vecteur."
  },
  {
    "id": "leish_cycle_12",
    "axis": "lifecycle",
    "question": "Pourquoi le phlébotome est-il un vecteur biologique et non mécanique ?",
    "options": ["Le parasite s’y multiplie et s’y transforme", "Il transporte passivement le parasite", "Il ne fait que contaminer la peau", "Il n’est pas indispensable au cycle"],
    "correctAnswer": 0,
    "explanation": "Le développement parasitaire dans le vecteur est indispensable."
  },
  {
    "id": "leish_cycle_13",
    "axis": "lifecycle",
    "question": "Quel stade est responsable de la dissémination viscérale dans l’organisme ?",
    "options": ["Amastigote", "Promastigote", "Kyste", "Œuf"],
    "correctAnswer": 0,
    "explanation": "Les amastigotes se disséminent via les macrophages."
  },
  {
    "id": "leish_cycle_14",
    "axis": "lifecycle",
    "question": "Quelle condition favorise la transmission de la leishmaniose ?",
    "options": ["Activité nocturne du phlébotome", "Eau stagnante", "Mauvaise cuisson des aliments", "Contact interhumain direct"],
    "correctAnswer": 0,
    "explanation": "Le phlébotome pique surtout la nuit."
  },
  {
    "id": "leish_cycle_15",
    "axis": "lifecycle",
    "question": "Quel est le devenir des macrophages fortement parasités ?",
    "options": ["Lyse cellulaire et libération d’amastigotes", "Transformation en fibroblastes", "Migration vers le sang", "Élimination immédiate"],
    "correctAnswer": 0,
    "explanation": "La lyse permet l’infection de nouveaux macrophages."
  },
  {
    "id": "leish_cycle_16",
    "axis": "lifecycle",
    "question": "Quelle est la particularité du cycle de Leishmania par rapport à Plasmodium ?",
    "options": ["Absence de cycle intra-érythrocytaire", "Présence d’hypnozoïtes", "Cycle uniquement humain", "Transmission par moustique"],
    "correctAnswer": 0,
    "explanation": "Leishmania ne parasite jamais les hématies."
  },
  {
    "id": "leish_cycle_17",
    "axis": "lifecycle",
    "question": "Quelle étape est essentielle à la survie du parasite chez l’homme ?",
    "options": ["Échappement aux mécanismes microbicides du macrophage", "Passage dans le noyau cellulaire", "Formation de spores", "Circulation libre dans le plasma"],
    "correctAnswer": 0,
    "explanation": "Le parasite inhibe les mécanismes destructeurs du phagolysosome."
  },
  {
    "id": "leish_cycle_18",
    "axis": "lifecycle",
    "question": "Quel facteur immunitaire contrôle principalement l’infection par Leishmania ?",
    "options": ["Réponse Th1 (IFN-γ)", "Réponse Th2", "Anticorps IgE", "Complément seul"],
    "correctAnswer": 0,
    "explanation": "La réponse cellulaire Th1 active les macrophages."
  },
  {
    "id": "leish_cycle_19",
    "axis": "lifecycle",
    "question": "Quel stade est retrouvé dans les lésions cutanées actives ?",
    "options": ["Amastigote intracellulaire", "Promastigote libre", "Kyste", "Œuf"],
    "correctAnswer": 0,
    "explanation": "Les lésions contiennent des macrophages parasités."
  },
  {
    "id": "leish_cycle_20",
    "axis": "lifecycle",
    "question": "Pourquoi l’homme est-il considéré comme un hôte accidentel dans certaines zones ?",
    "options": ["Le cycle principal est zoonotique", "Il n’est jamais infecté", "Il ne développe pas de symptômes", "Il élimine rapidement le parasite"],
    "correctAnswer": 0,
    "explanation": "Le cycle naturel implique surtout des réservoirs animaux."
  }
];
// ==========================================
// 3. CLINIQUE (30 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "leish_clin_1",
    "axis": "clinical",
    "question": "Quelle est la triade clinique classique du Kala-Azar (leishmaniose viscérale) ?",
    "options": [
      "Fièvre prolongée, pâleur cutanéo-muqueuse, splénomégalie volumineuse",
      "Fièvre aiguë, ictère, ascite",
      "Amaigrissement, diarrhée, vomissements",
      "Ulcération cutanée, adénopathies, prurit"
    ],
    "correctAnswer": 0,
    "explanation": "La triade associe fièvre irrégulière prolongée, anémie responsable de la pâleur et splénomégalie massive."
  },
  {
    "id": "leish_clin_2",
    "axis": "clinical",
    "question": "Pourquoi parle-t-on de « fièvre folle » dans le Kala-Azar ?",
    "options": [
      "Fièvre prolongée, irrégulière, peu sensible aux antipyrétiques",
      "Fièvre très élevée en pics quotidiens",
      "Fièvre uniquement nocturne",
      "Fièvre absente chez l’enfant"
    ],
    "correctAnswer": 0,
    "explanation": "La fièvre est chronique, anarchique et traînante."
  },
  {
    "id": "leish_clin_3",
    "axis": "clinical",
    "question": "Quel organe est le plus volumineusement atteint dans la leishmaniose viscérale ?",
    "options": [
      "La rate",
      "Le foie",
      "Les ganglions",
      "Les reins"
    ],
    "correctAnswer": 0,
    "explanation": "La splénomégalie est souvent massive et très évocatrice."
  },
  {
    "id": "leish_clin_4",
    "axis": "clinical",
    "question": "Quel signe biologique est quasi constant dans le Kala-Azar ?",
    "options": [
      "Pancytopénie",
      "Hyperéosinophilie",
      "Hyperleucocytose",
      "Polyglobulie"
    ],
    "correctAnswer": 0,
    "explanation": "L’envahissement médullaire entraîne anémie, leucopénie et thrombopénie."
  },
  {
    "id": "leish_clin_5",
    "axis": "clinical",
    "question": "Quelle anomalie immunologique est caractéristique de la leishmaniose viscérale ?",
    "options": [
      "Hypergammaglobulinémie polyclonale majeure",
      "Hypogammaglobulinémie",
      "Déficit en IgA",
      "Production d’IgE spécifiques"
    ],
    "correctAnswer": 0,
    "explanation": "Elle traduit une stimulation immunitaire chronique inefficace."
  },
  {
    "id": "leish_clin_6",
    "axis": "clinical",
    "question": "Quel est le mécanisme principal de l’anémie dans le Kala-Azar ?",
    "options": [
      "Envahissement médullaire et hypersplénisme",
      "Hémolyse immune aiguë",
      "Carence martiale isolée",
      "Saignement digestif chronique"
    ],
    "correctAnswer": 0,
    "explanation": "La rate hypertrophiée séquestre et détruit les cellules sanguines."
  },
  {
    "id": "leish_clin_7",
    "axis": "clinical",
    "question": "Quel est l’aspect typique de la lésion de leishmaniose cutanée localisée ?",
    "options": [
      "Ulcère cratériforme indolore à fond propre",
      "Papule prurigineuse transitoire",
      "Vésicule douloureuse",
      "Nodule purulent fébrile"
    ],
    "correctAnswer": 0,
    "explanation": "La lésion est classiquement indolore, chronique et à bords surélevés."
  },
  {
    "id": "leish_clin_8",
    "axis": "clinical",
    "question": "Quelle évolution est typique de la leishmaniose cutanée ?",
    "options": [
      "Guérison spontanée lente avec cicatrice",
      "Évolution toujours mortelle",
      "Guérison rapide sans séquelle",
      "Transformation systématique en forme viscérale"
    ],
    "correctAnswer": 0,
    "explanation": "La guérison spontanée est possible mais laisse une cicatrice."
  },
  {
    "id": "leish_clin_9",
    "axis": "clinical",
    "question": "Quelle localisation est la plus fréquente pour les lésions cutanées ?",
    "options": [
      "Zones découvertes (visage, membres)",
      "Tronc",
      "Région génitale",
      "Plis axillaires"
    ],
    "correctAnswer": 0,
    "explanation": "Les piqûres de phlébotomes surviennent sur les zones exposées."
  },
  {
    "id": "leish_clin_10",
    "axis": "clinical",
    "question": "Quel signe clinique traduit l’hypersplénisme du Kala-Azar ?",
    "options": [
      "Infections bactériennes répétées",
      "Hypertension artérielle",
      "Diarrhée chronique",
      "Douleurs thoraciques"
    ],
    "correctAnswer": 0,
    "explanation": "La leucopénie favorise les infections opportunistes."
  },
  {
    "id": "leish_clin_11",
    "axis": "clinical",
    "question": "Quelle population est la plus à risque de leishmaniose viscérale grave ?",
    "options": [
      "Enfants et patients immunodéprimés",
      "Adultes jeunes immunocompétents",
      "Femmes enceintes uniquement",
      "Sujets âgés uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "L’immunité cellulaire est essentielle au contrôle de l’infection."
  },
  {
    "id": "leish_clin_12",
    "axis": "clinical",
    "question": "Quel signe cutané est parfois observé dans le Kala-Azar indien ?",
    "options": [
      "Hyperpigmentation cutanée diffuse",
      "Érythème facial aigu",
      "Urticaire chronique",
      "Vitiligo"
    ],
    "correctAnswer": 0,
    "explanation": "D’où le nom de « maladie noire » (Kala-Azar)."
  },
  {
    "id": "leish_clin_13",
    "axis": "clinical",
    "question": "Quelle complication peut survenir après guérison apparente du Kala-Azar ?",
    "options": [
      "Leishmaniose dermique post-Kala-Azar",
      "Rechute palustre",
      "Insuffisance rénale chronique",
      "Cirrhose hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "Des lésions cutanées peuvent apparaître des mois ou années plus tard."
  },
  {
    "id": "leish_clin_14",
    "axis": "clinical",
    "question": "Quel signe clinique permet de différencier leishmaniose cutanée et ulcère bactérien ?",
    "options": [
      "Indolence de la lésion",
      "Présence de pus",
      "Douleur intense",
      "Guérison rapide"
    ],
    "correctAnswer": 0,
    "explanation": "L’ulcère leishmanien est classiquement indolore."
  },
  {
    "id": "leish_clin_15",
    "axis": "clinical",
    "question": "Quel est le principal mécanisme de la splénomégalie ?",
    "options": [
      "Prolifération macrophagique parasitée",
      "Congestion veineuse",
      "Infiltration tumorale",
      "Thrombose splénique"
    ],
    "correctAnswer": 0,
    "explanation": "La rate devient un site majeur de multiplication parasitaire."
  },
  {
    "id": "leish_clin_16",
    "axis": "clinical",
    "question": "Quelle est la conséquence directe de la thrombopénie dans le Kala-Azar ?",
    "options": [
      "Risque hémorragique",
      "Hypertension portale",
      "Œdèmes généralisés",
      "Polyurie"
    ],
    "correctAnswer": 0,
    "explanation": "La thrombopénie expose aux saignements."
  },
  {
    "id": "leish_clin_17",
    "axis": "clinical",
    "question": "Quelle forme clinique est potentiellement mortelle en l’absence de traitement ?",
    "options": [
      "Leishmaniose viscérale",
      "Leishmaniose cutanée localisée",
      "Leishmaniose cutanée sèche",
      "Leishmaniose auto-cicatrisante"
    ],
    "correctAnswer": 0,
    "explanation": "La leishmaniose viscérale est une urgence thérapeutique."
  },
  {
    "id": "leish_clin_18",
    "axis": "clinical",
    "question": "Quel signe biologique explique la pâleur intense des patients ?",
    "options": [
      "Anémie profonde",
      "Déshydratation",
      "Hypoglycémie",
      "Hypothyroïdie"
    ],
    "correctAnswer": 0,
    "explanation": "L’anémie est souvent sévère et progressive."
  },
  {
    "id": "leish_clin_19",
    "axis": "clinical",
    "question": "Quelle atteinte est inhabituelle dans la leishmaniose cutanée simple ?",
    "options": [
      "Atteinte générale avec fièvre prolongée",
      "Lésion cutanée unique",
      "Adénopathie satellite",
      "Cicatrice résiduelle"
    ],
    "correctAnswer": 0,
    "explanation": "La forme cutanée reste le plus souvent localisée."
  },
  {
    "id": "leish_clin_20",
    "axis": "clinical",
    "question": "Quel élément clinique doit faire suspecter une leishmaniose viscérale devant une fièvre prolongée ?",
    "options": [
      "Splénomégalie associée",
      "Toux chronique",
      "Éruption cutanée prurigineuse",
      "Douleur thoracique"
    ],
    "correctAnswer": 0,
    "explanation": "La splénomégalie est un signe d’orientation majeur."
  },
  {
    "id": "leish_clin_21",
    "axis": "clinical",
    "question": "Quel signe traduit l’atteinte hépatique associée ?",
    "options": [
      "Hépatomégalie modérée",
      "Ictère franc",
      "Ascite massive",
      "Insuffisance hépatique aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "L’hépatomégalie est fréquente mais moins marquée que la splénomégalie."
  },
  {
    "id": "leish_clin_22",
    "axis": "clinical",
    "question": "Quelle est la conséquence clinique de la leucopénie ?",
    "options": [
      "Infections opportunistes",
      "Hyperthermie isolée",
      "Thromboses",
      "Œdèmes périphériques"
    ],
    "correctAnswer": 0,
    "explanation": "La baisse des globules blancs fragilise l’immunité."
  },
  {
    "id": "leish_clin_23",
    "axis": "clinical",
    "question": "Quel signe oriente vers une leishmaniose cutanéo-muqueuse ?",
    "options": [
      "Atteinte des muqueuses nasales ou buccales",
      "Fièvre isolée",
      "Splénomégalie",
      "Anémie sévère"
    ],
    "correctAnswer": 0,
    "explanation": "La destruction muqueuse est caractéristique de certaines espèces."
  },
  {
    "id": "leish_clin_24",
    "axis": "clinical",
    "question": "Quelle évolution clinique est attendue sans traitement du Kala-Azar ?",
    "options": [
      "Aggravation progressive pouvant être fatale",
      "Guérison spontanée rapide",
      "Stabilisation définitive",
      "Transformation cutanée isolée"
    ],
    "correctAnswer": 0,
    "explanation": "La mortalité est élevée en l’absence de prise en charge."
  },
  {
    "id": "leish_clin_25",
    "axis": "clinical",
    "question": "Quel signe clinique est fréquent chez l’enfant atteint de leishmaniose viscérale ?",
    "options": [
      "Retard staturo-pondéral",
      "Hypertension sévère",
      "Puberté précoce",
      "Œdème aigu pulmonaire"
    ],
    "correctAnswer": 0,
    "explanation": "La maladie chronique altère la croissance."
  },
  {
    "id": "leish_clin_26",
    "axis": "clinical",
    "question": "Quelle association clinique est la plus évocatrice du Kala-Azar ?",
    "options": [
      "Fièvre prolongée + splénomégalie + pancytopénie",
      "Fièvre aiguë + rash + arthralgies",
      "Diarrhée aiguë + vomissements",
      "Douleur abdominale isolée"
    ],
    "correctAnswer": 0,
    "explanation": "Cette association est quasi pathognomonique en zone d’endémie."
  },
  {
    "id": "leish_clin_27",
    "axis": "clinical",
    "question": "Quel est le principal risque vital du Kala-Azar ?",
    "options": [
      "Infections intercurrentes sévères",
      "Déshydratation aiguë",
      "Crise hypertensive",
      "Embolie pulmonaire"
    ],
    "correctAnswer": 0,
    "explanation": "Les infections bactériennes sont la première cause de décès."
  },
  {
    "id": "leish_clin_28",
    "axis": "clinical",
    "question": "Quel signe clinique différencie le plus la leishmaniose viscérale du paludisme chronique ?",
    "options": [
      "Hypergammaglobulinémie marquée",
      "Fièvre prolongée",
      "Splénomégalie",
      "Anémie"
    ],
    "correctAnswer": 0,
    "explanation": "L’hypergammaglobulinémie est très évocatrice du Kala-Azar."
  },
  {
    "id": "leish_clin_29",
    "axis": "clinical",
    "question": "Quelle forme clinique est la plus fréquente dans le bassin méditerranéen ?",
    "options": [
      "Leishmaniose viscérale infantile",
      "Leishmaniose cutanée diffuse",
      "Leishmaniose cutanéo-muqueuse",
      "Leishmaniose post-Kala-Azar"
    ],
    "correctAnswer": 0,
    "explanation": "Elle touche principalement l’enfant dans cette région."
  },
  {
    "id": "leish_clin_30",
    "axis": "clinical",
    "question": "Quel élément clinique doit alerter devant une leishmaniose cutanée évolutive ?",
    "options": [
      "Persistance de la lésion au-delà de plusieurs mois",
      "Douleur intense",
      "Suppuration aiguë",
      "Guérison rapide"
    ],
    "correctAnswer": 0,
    "explanation": "L’évolution chronique est caractéristique."
  }
];
// ==========================================
// 4. DIAGNOSTIC (25 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "leish_diag_1",
    "axis": "diagnosis",
    "question": "Quel est l'examen de référence pour le diagnostic positif de la leishmaniose viscérale ?",
    "options": [
      "Mise en évidence directe du parasite sur frottis de moelle osseuse",
      "Sérologie seule",
      "Intradermo-réaction de Montenegro",
      "Numération formule sanguine"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagnostic de certitude repose sur la visualisation des amastigotes dans la moelle osseuse."
  },
  {
    "id": "leish_diag_2",
    "axis": "diagnosis",
    "question": "Quelle est la forme parasitaire recherchée lors du diagnostic direct chez l’homme ?",
    "options": [
      "Amastigote",
      "Promastigote",
      "Trypomastigote",
      "Kyste"
    ],
    "correctAnswer": 0,
    "explanation": "Chez l’homme, Leishmania est retrouvée sous forme amastigote intracellulaire."
  },
  {
    "id": "leish_diag_3",
    "axis": "diagnosis",
    "question": "Quel prélèvement est le plus sensible pour le diagnostic parasitologique du Kala-Azar ?",
    "options": [
      "Moelle osseuse",
      "Sang périphérique",
      "Salive",
      "Urines"
    ],
    "correctAnswer": 0,
    "explanation": "La moelle osseuse est le site de prédilection pour la recherche du parasite."
  },
  {
    "id": "leish_diag_4",
    "axis": "diagnosis",
    "question": "Quel autre prélèvement peut être utilisé pour le diagnostic direct de la leishmaniose viscérale ?",
    "options": [
      "Suc ganglionnaire",
      "Liquide céphalo-rachidien",
      "Liquide pleural",
      "Expectoration"
    ],
    "correctAnswer": 0,
    "explanation": "Les ganglions peuvent contenir des macrophages parasités."
  },
  {
    "id": "leish_diag_5",
    "axis": "diagnosis",
    "question": "Pourquoi la ponction splénique est-elle rarement réalisée ?",
    "options": [
      "Risque hémorragique élevé",
      "Faible sensibilité",
      "Parasites absents de la rate",
      "Examen trop peu spécifique"
    ],
    "correctAnswer": 0,
    "explanation": "La splénomégalie associée à la thrombopénie expose à un risque majeur d’hémorragie."
  },
  {
    "id": "leish_diag_6",
    "axis": "diagnosis",
    "question": "Quel aspect microscopique est typique des amastigotes de Leishmania ?",
    "options": [
      "Corps ovalaires avec noyau et kinétoplaste",
      "Cellules flagellées libres",
      "Bactéries intracellulaires",
      "Levures encapsulées"
    ],
    "correctAnswer": 0,
    "explanation": "Le kinétoplaste est un élément clé du diagnostic microscopique."
  },
  {
    "id": "leish_diag_7",
    "axis": "diagnosis",
    "question": "Quelle est l’utilité principale de la sérologie dans la leishmaniose ?",
    "options": [
      "Diagnostic de la leishmaniose viscérale",
      "Diagnostic de la leishmaniose cutanée",
      "Suivi de guérison immédiat",
      "Dépistage du vecteur"
    ],
    "correctAnswer": 0,
    "explanation": "La sérologie est très sensible dans les formes viscérales."
  },
  {
    "id": "leish_diag_8",
    "axis": "diagnosis",
    "question": "Pourquoi la sérologie est-elle peu utile dans la leishmaniose cutanée ?",
    "options": [
      "Réponse humorale faible ou absente",
      "Anticorps toujours négatifs",
      "Parasite extracellulaire",
      "Réaction croisée systématique"
    ],
    "correctAnswer": 0,
    "explanation": "La réponse immunitaire est essentiellement cellulaire dans les formes cutanées."
  },
  {
    "id": "leish_diag_9",
    "axis": "diagnosis",
    "question": "Quel test sérologique est couramment utilisé pour la leishmaniose viscérale ?",
    "options": [
      "ELISA ou IFI",
      "Test de Coombs",
      "VDRL",
      "Widal"
    ],
    "correctAnswer": 0,
    "explanation": "Les techniques ELISA et IFI sont sensibles et largement utilisées."
  },
  {
    "id": "leish_diag_10",
    "axis": "diagnosis",
    "question": "Quel est l’intérêt majeur de la PCR dans la leishmaniose ?",
    "options": [
      "Haute sensibilité et identification de l’espèce",
      "Examen peu coûteux de dépistage",
      "Remplacer totalement le diagnostic direct",
      "Évaluer la sévérité clinique"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR permet une détection très sensible et une caractérisation précise."
  },
  {
    "id": "leish_diag_11",
    "axis": "diagnosis",
    "question": "Sur quel type de prélèvement la PCR peut-elle être réalisée ?",
    "options": [
      "Moelle osseuse, sang ou biopsie cutanée",
      "Uniquement sur sang",
      "Uniquement sur selles",
      "Uniquement sur salive"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR est polyvalente selon la forme clinique."
  },
  {
    "id": "leish_diag_12",
    "axis": "diagnosis",
    "question": "Quel est le principal avantage de la PCR par rapport à la microscopie ?",
    "options": [
      "Meilleure sensibilité en cas de faible parasitémie",
      "Coût plus faible",
      "Résultat immédiat au lit du patient",
      "Absence de matériel spécialisé"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR détecte de très faibles quantités d’ADN parasitaire."
  },
  {
    "id": "leish_diag_13",
    "axis": "diagnosis",
    "question": "Qu’est-ce que l’intradermo-réaction de Montenegro ?",
    "options": [
      "Un test d’immunité cellulaire retardée",
      "Un test sérologique",
      "Un examen parasitologique direct",
      "Un test moléculaire"
    ],
    "correctAnswer": 0,
    "explanation": "Elle évalue la réponse cellulaire spécifique au parasite."
  },
  {
    "id": "leish_diag_14",
    "axis": "diagnosis",
    "question": "Dans quelle forme la réaction de Montenegro est-elle généralement positive ?",
    "options": [
      "Leishmaniose cutanée",
      "Leishmaniose viscérale active",
      "Kala-Azar sévère",
      "Immunodépression profonde"
    ],
    "correctAnswer": 0,
    "explanation": "La réponse cellulaire est conservée dans les formes cutanées."
  },
  {
    "id": "leish_diag_15",
    "axis": "diagnosis",
    "question": "Pourquoi l’intradermo-réaction de Montenegro est-elle négative dans le Kala-Azar actif ?",
    "options": [
      "Dépression de l’immunité cellulaire",
      "Absence d’infection",
      "Erreur technique",
      "Réaction trop précoce"
    ],
    "correctAnswer": 0,
    "explanation": "Le parasite inhibe la réponse cellulaire au cours des formes viscérales actives."
  },
  {
    "id": "leish_diag_16",
    "axis": "diagnosis",
    "question": "Quel est aujourd’hui le statut de la réaction de Montenegro ?",
    "options": [
      "Historique et pédagogique",
      "Test de référence",
      "Test obligatoire",
      "Test de dépistage de masse"
    ],
    "correctAnswer": 0,
    "explanation": "Elle n’est plus utilisée en routine mais garde un intérêt théorique."
  },
  {
    "id": "leish_diag_17",
    "axis": "diagnosis",
    "question": "Quel examen est le plus adapté au diagnostic de la leishmaniose cutanée ?",
    "options": [
      "Examen direct ou PCR sur biopsie cutanée",
      "Sérologie",
      "Hémoculture",
      "NFS seule"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagnostic repose sur la mise en évidence locale du parasite."
  },
  {
    "id": "leish_diag_18",
    "axis": "diagnosis",
    "question": "Quel élément oriente vers un diagnostic de leishmaniose viscérale avant confirmation ?",
    "options": [
      "Pancytopénie avec hypergammaglobulinémie",
      "Hyperéosinophilie",
      "Polyglobulie",
      "Hypogammaglobulinémie"
    ],
    "correctAnswer": 0,
    "explanation": "Ce profil biologique est très évocateur."
  },
  {
    "id": "leish_diag_19",
    "axis": "diagnosis",
    "question": "Quel examen permet le diagnostic de certitude ?",
    "options": [
      "Visualisation directe du parasite",
      "Sérologie positive isolée",
      "Intradermo-réaction positive",
      "Tableau clinique typique"
    ],
    "correctAnswer": 0,
    "explanation": "La preuve parasitologique est indispensable."
  },
  {
    "id": "leish_diag_20",
    "axis": "diagnosis",
    "question": "Quelle est la limite principale de la sérologie après traitement ?",
    "options": [
      "Persistance prolongée des anticorps",
      "Faux négatifs fréquents",
      "Absence totale d’anticorps",
      "Spécificité nulle"
    ],
    "correctAnswer": 0,
    "explanation": "Les anticorps peuvent rester positifs longtemps après la guérison."
  },
  {
    "id": "leish_diag_21",
    "axis": "diagnosis",
    "question": "Chez un patient VIH+, quel examen est le plus fiable ?",
    "options": [
      "PCR ou diagnostic direct",
      "Sérologie seule",
      "Montenegro",
      "Test rapide uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "La sérologie peut être faussement négative chez l’immunodéprimé."
  },
  {
    "id": "leish_diag_22",
    "axis": "diagnosis",
    "question": "Quel est l’intérêt des tests rapides immunochromatographiques ?",
    "options": [
      "Orientation diagnostique rapide en zone d’endémie",
      "Diagnostic de certitude",
      "Identification de l’espèce",
      "Suivi thérapeutique précis"
    ],
    "correctAnswer": 0,
    "explanation": "Ils facilitent le dépistage mais ne remplacent pas la confirmation."
  },
  {
    "id": "leish_diag_23",
    "axis": "diagnosis",
    "question": "Quel diagnostic différentiel majeur doit être éliminé devant une fièvre prolongée avec splénomégalie ?",
    "options": [
      "Paludisme chronique",
      "Appendicite",
      "Asthme",
      "Colique néphrétique"
    ],
    "correctAnswer": 0,
    "explanation": "Le tableau clinique peut être proche."
  },
  {
    "id": "leish_diag_24",
    "axis": "diagnosis",
    "question": "Quel élément confirme une leishmaniose cutanée ancienne guérie ?",
    "options": [
      "Montenegro positif",
      "Sérologie très élevée",
      "PCR positive sanguine",
      "Parasite dans le sang"
    ],
    "correctAnswer": 0,
    "explanation": "La réaction de Montenegro reste positive longtemps après guérison."
  },
  {
    "id": "leish_diag_25",
    "axis": "diagnosis",
    "question": "Quelle combinaison diagnostique est la plus pertinente pour le Kala-Azar ?",
    "options": [
      "Clinique évocatrice + sérologie + confirmation parasitologique",
      "Clinique seule",
      "Sérologie seule",
      "Montenegro seul"
    ],
    "correctAnswer": 0,
    "explanation": "L’approche combinée permet un diagnostic fiable."
  }
];
// ==========================================
// 5. TRAITEMENT (20 Questions)
// ==========================================
const treatmentQuestions = [
  {
    "id": "leish_treat_1",
    "axis": "treatment",
    "question": "Quel est actuellement le traitement de première intention de la leishmaniose viscérale en Europe et en Amérique du Nord ?",
    "options": [
      "Amphotéricine B liposomale",
      "Antimoniés pentavalents",
      "Miltefosine",
      "Paromomycine orale"
    ],
    "correctAnswer": 0,
    "explanation": "L’amphotéricine B liposomale est plus efficace et moins toxique que les antimoniés."
  },
  {
    "id": "leish_treat_2",
    "axis": "treatment",
    "question": "Quel est le principal avantage de l’amphotéricine B liposomale par rapport à la forme conventionnelle ?",
    "options": [
      "Diminution de la néphrotoxicité",
      "Coût plus faible",
      "Administration orale",
      "Traitement plus long"
    ],
    "correctAnswer": 0,
    "explanation": "La formulation liposomale réduit la toxicité rénale."
  },
  {
    "id": "leish_treat_3",
    "axis": "treatment",
    "question": "Quels médicaments sont regroupés sous le terme d’antimoniés pentavalents ?",
    "options": [
      "Pentostam® et Glucantime®",
      "Amphotéricine B et Miltefosine",
      "Paromomycine et Métronidazole",
      "Ivermectine et Albendazole"
    ],
    "correctAnswer": 0,
    "explanation": "Ce sont les traitements historiques de la leishmaniose."
  },
  {
    "id": "leish_treat_4",
    "axis": "treatment",
    "question": "Quelle est la principale limite des dérivés de l’antimoine ?",
    "options": [
      "Toxicité cardiaque, hépatique et pancréatique",
      "Inefficacité totale",
      "Administration orale uniquement",
      "Absence de résistance"
    ],
    "correctAnswer": 0,
    "explanation": "La toxicité explique leur abandon progressif dans de nombreux pays."
  },
  {
    "id": "leish_treat_5",
    "axis": "treatment",
    "question": "Dans quelles régions les antimoniés restent-ils largement utilisés ?",
    "options": [
      "Pays à ressources limitées",
      "Europe de l’Ouest",
      "Amérique du Nord",
      "Japon"
    ],
    "correctAnswer": 0,
    "explanation": "Ils restent utilisés là où l’amphotéricine liposomale est peu accessible."
  },
  {
    "id": "leish_treat_6",
    "axis": "treatment",
    "question": "Quel est le principal mode d’administration de la Miltefosine ?",
    "options": [
      "Voie orale",
      "Voie intraveineuse",
      "Voie intramusculaire",
      "Voie sous-cutanée"
    ],
    "correctAnswer": 0,
    "explanation": "La Miltefosine est le premier traitement oral efficace."
  },
  {
    "id": "leish_treat_7",
    "axis": "treatment",
    "question": "Quelle est une contre-indication majeure de la Miltefosine ?",
    "options": [
      "Grossesse",
      "Insuffisance respiratoire",
      "Hypertension artérielle",
      "Diabète"
    ],
    "correctAnswer": 0,
    "explanation": "La Miltefosine est tératogène."
  },
  {
    "id": "leish_treat_8",
    "axis": "treatment",
    "question": "Quelle leishmaniose est le plus souvent traitée localement ?",
    "options": [
      "Leishmaniose cutanée simple",
      "Leishmaniose viscérale",
      "Leishmaniose diffuse",
      "Leishmaniose chez le VIH+"
    ],
    "correctAnswer": 0,
    "explanation": "Certaines formes cutanées peuvent guérir spontanément ou avec traitement local."
  },
  {
    "id": "leish_treat_9",
    "axis": "treatment",
    "question": "Quel traitement est privilégié chez un patient VIH+ atteint de leishmaniose viscérale ?",
    "options": [
      "Amphotéricine B liposomale",
      "Antimoniés seuls",
      "Miltefosine seule",
      "Aucun traitement spécifique"
    ],
    "correctAnswer": 0,
    "explanation": "Elle est plus efficace et mieux tolérée chez l’immunodéprimé."
  },
  {
    "id": "leish_treat_10",
    "axis": "treatment",
    "question": "Pourquoi un traitement d’entretien peut-il être nécessaire chez le patient VIH+ ?",
    "options": [
      "Risque élevé de rechute",
      "Toxicité excessive",
      "Absence de réponse immunitaire",
      "Résistance systématique"
    ],
    "correctAnswer": 0,
    "explanation": "Les rechutes sont fréquentes en cas d’immunodépression."
  },
  {
    "id": "leish_treat_11",
    "axis": "treatment",
    "question": "Quel est l’objectif principal du traitement de la leishmaniose viscérale ?",
    "options": [
      "Éliminer le parasite et prévenir les rechutes",
      "Soulager uniquement la fièvre",
      "Corriger la pancytopénie seule",
      "Empêcher la transmission vectorielle immédiate"
    ],
    "correctAnswer": 0,
    "explanation": "L’éradication parasitaire est indispensable."
  },
  {
    "id": "leish_treat_12",
    "axis": "treatment",
    "question": "Quel médicament peut être utilisé en alternative dans certaines formes cutanées ?",
    "options": [
      "Paromomycine",
      "Chloroquine",
      "Métronidazole",
      "Isoniazide"
    ],
    "correctAnswer": 0,
    "explanation": "La paromomycine peut être utilisée localement ou par voie systémique."
  },
  {
    "id": "leish_treat_13",
    "axis": "treatment",
    "question": "Quel est le principal effet indésirable de l’amphotéricine B (forme classique) ?",
    "options": [
      "Néphrotoxicité",
      "Neurotoxicité",
      "Cardiotoxicité",
      "Ototoxicité"
    ],
    "correctAnswer": 0,
    "explanation": "C’est la raison du développement des formes liposomales."
  },
  {
    "id": "leish_treat_14",
    "axis": "treatment",
    "question": "Quel facteur influence le choix du traitement de la leishmaniose cutanée ?",
    "options": [
      "Espèce de Leishmania et zone géographique",
      "Âge seul",
      "Sexe du patient",
      "Groupe sanguin"
    ],
    "correctAnswer": 0,
    "explanation": "Les espèces ont des sensibilités thérapeutiques variables."
  },
  {
    "id": "leish_treat_15",
    "axis": "treatment",
    "question": "Quelle durée de traitement est typique pour l’amphotéricine B liposomale dans le Kala-Azar ?",
    "options": [
      "Cures courtes fractionnées",
      "Traitement continu de 6 mois",
      "Dose unique systématique",
      "Traitement à vie"
    ],
    "correctAnswer": 0,
    "explanation": "Les schémas sont courts et bien codifiés."
  },
  {
    "id": "leish_treat_16",
    "axis": "treatment",
    "question": "Pourquoi la résistance aux antimoniés est-elle préoccupante ?",
    "options": [
      "Elle limite l’efficacité dans certaines régions endémiques",
      "Elle est universelle",
      "Elle concerne uniquement les formes cutanées",
      "Elle empêche tout traitement"
    ],
    "correctAnswer": 0,
    "explanation": "La résistance est particulièrement décrite en Inde."
  },
  {
    "id": "leish_treat_17",
    "axis": "treatment",
    "question": "Quel traitement est contre-indiqué pendant la grossesse ?",
    "options": [
      "Miltefosine",
      "Amphotéricine B liposomale",
      "Paromomycine",
      "Traitement local"
    ],
    "correctAnswer": 0,
    "explanation": "La Miltefosine est tératogène."
  },
  {
    "id": "leish_treat_18",
    "axis": "treatment",
    "question": "Quel est l’objectif du traitement des formes cutanées ?",
    "options": [
      "Prévenir les complications et les cicatrices",
      "Éliminer la fièvre",
      "Corriger l’anémie",
      "Éviter la transmission sexuelle"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement vise surtout à limiter les séquelles."
  },
  {
    "id": "leish_treat_19",
    "axis": "treatment",
    "question": "Quel médicament est historiquement utilisé depuis plusieurs décennies ?",
    "options": [
      "Antimoniés pentavalents",
      "Miltefosine",
      "Amphotéricine B liposomale",
      "Pentamidine liposomale"
    ],
    "correctAnswer": 0,
    "explanation": "Ils constituent les traitements historiques."
  },
  {
    "id": "leish_treat_20",
    "axis": "treatment",
    "question": "Quel élément doit toujours être pris en compte avant d’initier le traitement ?",
    "options": [
      "La forme clinique et le terrain du patient",
      "La saison",
      "Le groupe sanguin",
      "La durée des symptômes uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Le terrain (âge, grossesse, immunodépression) est déterminant."
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
