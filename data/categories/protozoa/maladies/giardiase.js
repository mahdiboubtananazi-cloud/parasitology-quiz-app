// ==========================================
// 1. MORPHOLOGIE (15 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "giardia_morph_1",
    "axis": "morphology",
    "question": "Quelle structure caractéristique permet à Giardia de se fixer à l'épithélium intestinal ?",
    "options": [
      "Le disque adhésif (ventral)",
      "Le rostre apical",
      "Les pseudopodes",
      "La membrane ondulante"
    ],
    "correctAnswer": 0,
    "explanation": "Le disque adhésif ventral permet l’adhérence mécanique de Giardia aux entérocytes."
  },
  {
    "id": "giardia_morph_2",
    "axis": "morphology",
    "question": "Quelle est la forme générale du trophozoïte de Giardia en microscopie ?",
    "options": [
      "En poire, symétrique bilatérale",
      "Arrondie irrégulière",
      "Allongée fusiforme",
      "Amoeboïde"
    ],
    "correctAnswer": 0,
    "explanation": "Le trophozoïte a une forme piriforme très caractéristique avec symétrie bilatérale."
  },
  {
    "id": "giardia_morph_3",
    "axis": "morphology",
    "question": "Combien de noyaux possède le trophozoïte de Giardia ?",
    "options": [
      "Deux noyaux",
      "Un seul noyau",
      "Quatre noyaux",
      "Huit noyaux"
    ],
    "correctAnswer": 0,
    "explanation": "Les deux noyaux donnent un aspect de « visage » typique."
  },
  {
    "id": "giardia_morph_4",
    "axis": "morphology",
    "question": "Quel élément cytosquelettique est visible sous forme de lignes médianes chez Giardia ?",
    "options": [
      "Axonèmes et corps médians",
      "Kinétoplaste",
      "Microsporidies",
      "Vacuoles digestives"
    ],
    "correctAnswer": 0,
    "explanation": "Les axonèmes correspondent aux structures internes des flagelles."
  },
  {
    "id": "giardia_morph_5",
    "axis": "morphology",
    "question": "Combien de flagelles possède le trophozoïte de Giardia ?",
    "options": [
      "Huit flagelles",
      "Quatre flagelles",
      "Six flagelles",
      "Deux flagelles"
    ],
    "correctAnswer": 0,
    "explanation": "Les 8 flagelles assurent la mobilité caractéristique en chute de feuille."
  },
  {
    "id": "giardia_morph_6",
    "axis": "morphology",
    "question": "Quelle est la taille approximative du trophozoïte de Giardia ?",
    "options": [
      "10–20 µm",
      "2–5 µm",
      "30–50 µm",
      "60–100 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Cette taille permet son observation en microscopie optique standard."
  },
  {
    "id": "giardia_morph_7",
    "axis": "morphology",
    "question": "Quelle est la forme du kyste de Giardia ?",
    "options": [
      "Ovale à ellipsoïde",
      "Sphérique parfaite",
      "Allongée fusiforme",
      "Irrégulière"
    ],
    "correctAnswer": 0,
    "explanation": "Le kyste est bien délimité, ovale, avec paroi épaisse."
  },
  {
    "id": "giardia_morph_8",
    "axis": "morphology",
    "question": "Combien de noyaux contient le kyste mûr de Giardia ?",
    "options": [
      "Quatre noyaux",
      "Deux noyaux",
      "Un noyau",
      "Huit noyaux"
    ],
    "correctAnswer": 0,
    "explanation": "Le kyste mature tétranucléé est la forme infestante."
  },
  {
    "id": "giardia_morph_9",
    "axis": "morphology",
    "question": "Quel élément morphologique est souvent visible dans le kyste de Giardia ?",
    "options": [
      "Axonèmes repliés",
      "Pseudopodes",
      "Hématies phagocytées",
      "Capsule polysaccharidique"
    ],
    "correctAnswer": 0,
    "explanation": "Les axonèmes et corps médians sont visibles à l’intérieur du kyste."
  },
  {
    "id": "giardia_morph_10",
    "axis": "morphology",
    "question": "Quelle coloration est classiquement utilisée pour visualiser Giardia dans les selles ?",
    "options": [
      "Coloration au trichrome",
      "Ziehl-Neelsen",
      "Gram",
      "Giemsa sanguin"
    ],
    "correctAnswer": 0,
    "explanation": "Le trichrome met bien en évidence les structures internes."
  },
  {
    "id": "giardia_morph_11",
    "axis": "morphology",
    "question": "Quel aspect est typique du trophozoïte vivant en microscopie directe ?",
    "options": [
      "Mouvement en chute de feuille",
      "Mouvement amiboïde lent",
      "Immobilté totale",
      "Rotation rapide sur lui-même"
    ],
    "correctAnswer": 0,
    "explanation": "Ce mouvement est très évocateur de Giardia."
  },
  {
    "id": "giardia_morph_12",
    "axis": "morphology",
    "question": "Quel est le principal critère morphologique permettant de différencier Giardia d’une amibe ?",
    "options": [
      "Symétrie bilatérale et flagelles",
      "Présence de pseudopodes",
      "Hématophagie",
      "Taille supérieure à 30 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia est un flagellé, contrairement aux amibes."
  },
  {
    "id": "giardia_morph_13",
    "axis": "morphology",
    "question": "Où se situe principalement le trophozoïte de Giardia dans l’intestin ?",
    "options": [
      "Duodénum et jéjunum proximal",
      "Côlon sigmoïde",
      "Iléon terminal",
      "Rectum"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia se fixe préférentiellement sur l’intestin grêle proximal."
  },
  {
    "id": "giardia_morph_14",
    "axis": "morphology",
    "question": "Quelle structure est absente chez Giardia par rapport à de nombreux protozoaires ?",
    "options": [
      "Mitochondries classiques",
      "Noyau",
      "Cytosquelette",
      "Flagelles"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia possède des mitosomes, formes très réduites de mitochondries."
  },
  {
    "id": "giardia_morph_15",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique explique la non-invasivité de Giardia ?",
    "options": [
      "Absence de pénétration tissulaire",
      "Présence de pseudopodes",
      "Hématophagie active",
      "Multiplication intracellulaire"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia reste strictement luminale, fixée à la muqueuse sans l’envahir."
  }
];
// ==========================================
// 2. CYCLE DE VIE (15 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "giardia_cycle_1",
    "axis": "lifecycle",
    "question": "Quelle est la forme infestante responsable de la transmission de la giardiase ?",
    "options": [
      "Le kyste mûr",
      "Le trophozoïte",
      "Le prékyste",
      "La forme flagellée libre"
    ],
    "correctAnswer": 0,
    "explanation": "Seul le kyste est capable de survivre dans le milieu extérieur et d’initier l’infection."
  },
  {
    "id": "giardia_cycle_2",
    "axis": "lifecycle",
    "question": "Quelle est la dose infectante minimale approximative de Giardia chez l’homme ?",
    "options": [
      "10 à 100 kystes",
      "Plus de 1 000 kystes",
      "Un seul trophozoïte",
      "Plus de 10 000 kystes"
    ],
    "correctAnswer": 0,
    "explanation": "La dose infectante est très faible, ce qui explique la grande contagiosité."
  },
  {
    "id": "giardia_cycle_3",
    "axis": "lifecycle",
    "question": "Où a lieu l’excystation du kyste de Giardia après ingestion ?",
    "options": [
      "Dans le duodénum",
      "Dans l’estomac",
      "Dans le côlon",
      "Dans le jéjunum distal"
    ],
    "correctAnswer": 0,
    "explanation": "L’environnement biliaire et alcalin du duodénum favorise l’excystation."
  },
  {
    "id": "giardia_cycle_4",
    "axis": "lifecycle",
    "question": "Quel est l’habitat principal du trophozoïte de Giardia chez l’homme ?",
    "options": [
      "Duodénum et jéjunum proximal",
      "Estomac",
      "Côlon",
      "Voies biliaires"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia se fixe préférentiellement sur la muqueuse de l’intestin grêle proximal."
  },
  {
    "id": "giardia_cycle_5",
    "axis": "lifecycle",
    "question": "Quel mécanisme permet la multiplication de Giardia dans l’intestin ?",
    "options": [
      "Division binaire longitudinale",
      "Schizogonie",
      "Bourgeonnement",
      "Sporogonie"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia se multiplie par simple fission binaire."
  },
  {
    "id": "giardia_cycle_6",
    "axis": "lifecycle",
    "question": "À quel moment du transit intestinal se produit l’enkystement ?",
    "options": [
      "Lors du passage vers le côlon",
      "Dès l’arrivée dans le duodénum",
      "Dans l’estomac",
      "Uniquement hors de l’hôte"
    ],
    "correctAnswer": 0,
    "explanation": "La déshydratation progressive favorise l’enkystement."
  },
  {
    "id": "giardia_cycle_7",
    "axis": "lifecycle",
    "question": "Quelles formes sont éliminées dans les selles ?",
    "options": [
      "Principalement les kystes",
      "Uniquement les trophozoïtes",
      "Uniquement les formes immatures",
      "Aucune forme viable"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes sont responsables de la contamination environnementale."
  },
  {
    "id": "giardia_cycle_8",
    "axis": "lifecycle",
    "question": "Quel mode de transmission est le plus fréquent de la giardiase ?",
    "options": [
      "Transmission hydrique",
      "Transmission vectorielle",
      "Transmission sexuelle exclusive",
      "Transmission transplacentaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’eau contaminée est un mode majeur de transmission."
  },
  {
    "id": "giardia_cycle_9",
    "axis": "lifecycle",
    "question": "Quel autre mode de transmission est particulièrement important en collectivité ?",
    "options": [
      "Transmission interhumaine manuportée",
      "Transmission aérienne",
      "Transmission par arthropodes",
      "Transmission par aliments cuits"
    ],
    "correctAnswer": 0,
    "explanation": "Les mains sales jouent un rôle clé, surtout chez les enfants."
  },
  {
    "id": "giardia_cycle_10",
    "axis": "lifecycle",
    "question": "Pourquoi les épidémies de giardiase sont-elles fréquentes ?",
    "options": [
      "Faible dose infectante et kystes résistants",
      "Parasite très fragile",
      "Transmission uniquement sexuelle",
      "Immunité durable après infection"
    ],
    "correctAnswer": 0,
    "explanation": "Quelques kystes suffisent pour déclencher une infection."
  },
  {
    "id": "giardia_cycle_11",
    "axis": "lifecycle",
    "question": "Quelle caractéristique des kystes favorise la transmission hydrique ?",
    "options": [
      "Résistance au chlore",
      "Multiplication dans l’eau",
      "Mobilité active",
      "Fragilité thermique"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes résistent aux concentrations habituelles de chlore."
  },
  {
    "id": "giardia_cycle_12",
    "axis": "lifecycle",
    "question": "Quel réservoir est principalement impliqué dans la giardiase humaine ?",
    "options": [
      "L’homme",
      "Les oiseaux",
      "Les poissons",
      "Les insectes"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission est surtout anthroponotique."
  },
  {
    "id": "giardia_cycle_13",
    "axis": "lifecycle",
    "question": "Quel facteur favorise la chronicité de l’infection à Giardia ?",
    "options": [
      "Réinfection fréquente et persistance des kystes",
      "Multiplication sanguine",
      "Invasion tissulaire",
      "Transformation en forme dormante intracellulaire"
    ],
    "correctAnswer": 0,
    "explanation": "Les réinfections sont fréquentes en zone d’endémie."
  },
  {
    "id": "giardia_cycle_14",
    "axis": "lifecycle",
    "question": "Quel élément explique l’absence de phase sanguine chez Giardia ?",
    "options": [
      "Cycle strictement luminal intestinal",
      "Besoin d’un vecteur",
      "Multiplication intracellulaire",
      "Phase hépatique obligatoire"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia reste confinée à la lumière intestinale."
  },
  {
    "id": "giardia_cycle_15",
    "axis": "lifecycle",
    "question": "Quel contexte favorise particulièrement la transmission de Giardia ?",
    "options": [
      "Collectivités d’enfants et mauvaise hygiène",
      "Zones froides exclusivement",
      "Milieux hospitaliers stériles",
      "Contacts avec les moustiques"
    ],
    "correctAnswer": 0,
    "explanation": "Crèches et collectivités sont des lieux à haut risque."
  }
];
// ==========================================
// 3. CLINIQUE (20 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "giardia_clin_1",
    "axis": "clinical",
    "question": "Quel est le mécanisme physiopathologique principal responsable des symptômes de la giardiase ?",
    "options": [
      "Malabsorption intestinale",
      "Invasion tissulaire profonde",
      "Bactériémie parasitaire",
      "Réaction allergique systémique"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia altère la surface d’absorption de l’intestin grêle sans l’envahir."
  },
  {
    "id": "giardia_clin_2",
    "axis": "clinical",
    "question": "Quel segment intestinal est principalement atteint dans la giardiase symptomatique ?",
    "options": [
      "Duodénum et jéjunum proximal",
      "Iléon terminal",
      "Côlon",
      "Rectum"
    ],
    "correctAnswer": 0,
    "explanation": "La fixation des trophozoïtes dans l’intestin grêle proximal perturbe l’absorption."
  },
  {
    "id": "giardia_clin_3",
    "axis": "clinical",
    "question": "Quel type de diarrhée est le plus évocateur d’une giardiase chronique ?",
    "options": [
      "Diarrhée graisseuse, pâle et flottante",
      "Diarrhée glairo-sanglante",
      "Diarrhée aqueuse profuse fébrile",
      "Diarrhée nocturne sanglante"
    ],
    "correctAnswer": 0,
    "explanation": "La stéatorrhée est liée à la malabsorption des graisses."
  },
  {
    "id": "giardia_clin_4",
    "axis": "clinical",
    "question": "Quelle carence nutritionnelle est fréquemment observée au cours de la giardiase prolongée ?",
    "options": [
      "Vitamines liposolubles (A, D, E, K)",
      "Vitamine B12 uniquement",
      "Vitamine C",
      "Fer exclusivement"
    ],
    "correctAnswer": 0,
    "explanation": "La malabsorption des graisses entraîne une carence en vitamines liposolubles."
  },
  {
    "id": "giardia_clin_5",
    "axis": "clinical",
    "question": "Quel symptôme digestif est fréquemment associé à la giardiase ?",
    "options": [
      "Ballonnements et météorisme",
      "Hématémèse",
      "Ténesme rectal",
      "Douleur anale"
    ],
    "correctAnswer": 0,
    "explanation": "Les fermentations digestives sont favorisées par la malabsorption."
  },
  {
    "id": "giardia_clin_6",
    "axis": "clinical",
    "question": "Pourquoi les selles peuvent-elles flotter chez un patient atteint de giardiase ?",
    "options": [
      "Excès de graisses non absorbées",
      "Présence de sang",
      "Production de mucus",
      "Présence de parasites visibles"
    ],
    "correctAnswer": 0,
    "explanation": "La stéatorrhée diminue la densité des selles."
  },
  {
    "id": "giardia_clin_7",
    "axis": "clinical",
    "question": "Quel signe clinique est particulièrement évocateur chez l’enfant ?",
    "options": [
      "Retard de croissance staturo-pondéral",
      "Ictère",
      "Œdèmes généralisés",
      "Convulsions fébriles"
    ],
    "correctAnswer": 0,
    "explanation": "La malnutrition chronique liée à la giardiase impacte la croissance."
  },
  {
    "id": "giardia_clin_8",
    "axis": "clinical",
    "question": "Quelle évolution clinique est possible en l’absence de traitement ?",
    "options": [
      "Chronicité avec alternance de rémissions et rechutes",
      "Guérison spontanée rapide constante",
      "Évolution vers un choc septique",
      "Invasion hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "La giardiase peut évoluer vers une forme chronique."
  },
  {
    "id": "giardia_clin_9",
    "axis": "clinical",
    "question": "Quel est le plus souvent l’état général du patient atteint de giardiase chronique ?",
    "options": [
      "Asthénie et amaigrissement",
      "Fièvre élevée constante",
      "Altération brutale avec sepsis",
      "Asymptomatique strict"
    ],
    "correctAnswer": 0,
    "explanation": "L’amaigrissement est lié à la malabsorption."
  },
  {
    "id": "giardia_clin_10",
    "axis": "clinical",
    "question": "Quel symptôme est généralement absent au cours de la giardiase ?",
    "options": [
      "Sang dans les selles",
      "Diarrhée chronique",
      "Ballonnements",
      "Stéatorrhée"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia n’est pas invasive, il n’y a pas de rectorragies."
  },
  {
    "id": "giardia_clin_11",
    "axis": "clinical",
    "question": "Quel tableau clinique peut mimer une giardiase chronique ?",
    "options": [
      "Syndrome de l’intestin irritable",
      "Appendicite aiguë",
      "Occlusion intestinale",
      "Ulcère gastrique hémorragique"
    ],
    "correctAnswer": 0,
    "explanation": "Les symptômes fonctionnels peuvent être proches."
  },
  {
    "id": "giardia_clin_12",
    "axis": "clinical",
    "question": "Quel facteur favorise les formes symptomatiques sévères ?",
    "options": [
      "Déficit immunitaire ou dénutrition",
      "Groupe sanguin",
      "Sexe masculin",
      "Climat froid"
    ],
    "correctAnswer": 0,
    "explanation": "Les défenses immunitaires jouent un rôle clé dans le contrôle de l’infection."
  },
  {
    "id": "giardia_clin_13",
    "axis": "clinical",
    "question": "Quelle manifestation extra-digestive peut être associée à la giardiase ?",
    "options": [
      "Asthénie prolongée",
      "Arthrite septique",
      "Hépatite aiguë",
      "Méningite"
    ],
    "correctAnswer": 0,
    "explanation": "L’asthénie est fréquente dans les formes chroniques."
  },
  {
    "id": "giardia_clin_14",
    "axis": "clinical",
    "question": "Chez l’adulte, quelle plainte fonctionnelle est la plus fréquente ?",
    "options": [
      "Gêne abdominale postprandiale",
      "Douleur anale",
      "Constipation sévère",
      "Dysphagie"
    ],
    "correctAnswer": 0,
    "explanation": "Les symptômes surviennent souvent après les repas."
  },
  {
    "id": "giardia_clin_15",
    "axis": "clinical",
    "question": "Quel élément clinique oriente vers une giardiase plutôt qu’une amibiase ?",
    "options": [
      "Absence de fièvre et de sang dans les selles",
      "Diarrhée fébrile aiguë",
      "Douleur rectale intense",
      "Selles glairo-sanglantes"
    ],
    "correctAnswer": 0,
    "explanation": "La giardiase est non invasive."
  },
  {
    "id": "giardia_clin_16",
    "axis": "clinical",
    "question": "Quel impact nutritionnel est particulièrement redouté chez l’enfant ?",
    "options": [
      "Retard pondéral et statural",
      "Anémie hémolytique",
      "Rachitisme carentiel isolé",
      "Obésité"
    ],
    "correctAnswer": 0,
    "explanation": "La croissance est très sensible aux troubles d’absorption."
  },
  {
    "id": "giardia_clin_17",
    "axis": "clinical",
    "question": "Quelle évolution clinique est fréquente après traitement efficace ?",
    "options": [
      "Disparition progressive des symptômes digestifs",
      "Persistance définitive de la stéatorrhée",
      "Aggravation clinique",
      "Transformation invasive"
    ],
    "correctAnswer": 0,
    "explanation": "La muqueuse intestinale se régénère après éradication."
  },
  {
    "id": "giardia_clin_18",
    "axis": "clinical",
    "question": "Quel symptôme peut persister transitoirement après guérison parasitologique ?",
    "options": [
      "Intolérance transitoire au lactose",
      "Fièvre élevée",
      "Rectorragies",
      "Vomissements incoercibles"
    ],
    "correctAnswer": 0,
    "explanation": "La lactase est souvent altérée secondairement."
  },
  {
    "id": "giardia_clin_19",
    "axis": "clinical",
    "question": "Quel type de douleur abdominale est le plus souvent rapporté ?",
    "options": [
      "Douleur diffuse, modérée, chronique",
      "Douleur brutale en fosse iliaque droite",
      "Douleur épigastrique nocturne",
      "Douleur anale"
    ],
    "correctAnswer": 0,
    "explanation": "La douleur est liée aux troubles fonctionnels."
  },
  {
    "id": "giardia_clin_20",
    "axis": "clinical",
    "question": "Quel tableau clinique est possible chez un porteur sain ?",
    "options": [
      "Absence totale de symptômes",
      "Tableau systématiquement sévère",
      "Diarrhée sanglante",
      "Atteinte hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "De nombreux porteurs restent asymptomatiques."
  }
];
// ==========================================
// 4. DIAGNOSTIC (15 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "giardia_diag_1",
    "axis": "diagnosis",
    "question": "Quel est l'examen parasitologique de première intention pour le diagnostic de la giardiase ?",
    "options": [
      "Examen parasitologique des selles",
      "Sérologie parasitaire",
      "Hémoculture",
      "Coproculture bactérienne"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagnostic repose avant tout sur la mise en évidence de kystes ou trophozoïtes dans les selles."
  },
  {
    "id": "giardia_diag_2",
    "axis": "diagnosis",
    "question": "Pourquoi un seul examen parasitologique des selles peut-il être négatif malgré une giardiase avérée ?",
    "options": [
      "Excrétion intermittente des kystes",
      "Destruction systématique des parasites",
      "Absence de phase kystique",
      "Erreur systématique de coloration"
    ],
    "correctAnswer": 0,
    "explanation": "L’excrétion des kystes est intermittente, justifiant des examens répétés."
  },
  {
    "id": "giardia_diag_3",
    "axis": "diagnosis",
    "question": "Quelle est la stratégie recommandée pour améliorer la sensibilité du diagnostic parasitologique des selles ?",
    "options": [
      "Réaliser trois examens de selles à des jours différents",
      "Un seul examen après purge",
      "Réaliser une coproculture prolongée",
      "Examiner uniquement des selles diarrhéiques"
    ],
    "correctAnswer": 0,
    "explanation": "Trois examens augmentent la sensibilité diagnostique à plus de 90%."
  },
  {
    "id": "giardia_diag_4",
    "axis": "diagnosis",
    "question": "Quelle forme parasitaire est le plus souvent observée dans les selles moulées ?",
    "options": [
      "Kyste",
      "Trophozoïte mobile",
      "Œuf",
      "Larve"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes sont retrouvés dans les selles formées."
  },
  {
    "id": "giardia_diag_5",
    "axis": "diagnosis",
    "question": "Dans quelles selles observe-t-on préférentiellement les trophozoïtes de Giardia ?",
    "options": [
      "Selles liquides fraîches",
      "Selles dures",
      "Selles constipées",
      "Selles anciennes"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes fragiles ne survivent que dans les selles liquides fraîchement émises."
  },
  {
    "id": "giardia_diag_6",
    "axis": "diagnosis",
    "question": "Quel examen peut être proposé en cas de forte suspicion clinique malgré des selles négatives répétées ?",
    "options": [
      "Tubage duodénal avec analyse du liquide",
      "Sérologie Giardia",
      "Ponction hépatique",
      "IRM abdominale"
    ],
    "correctAnswer": 0,
    "explanation": "Le liquide duodénal peut contenir des trophozoïtes."
  },
  {
    "id": "giardia_diag_7",
    "axis": "diagnosis",
    "question": "Quel est l'intérêt principal du tubage duodénal dans la giardiase ?",
    "options": [
      "Mettre en évidence les trophozoïtes fixés à la muqueuse",
      "Évaluer la fonction hépatique",
      "Rechercher une invasion sanguine",
      "Mesurer la charge bactérienne"
    ],
    "correctAnswer": 0,
    "explanation": "Giardia colonise préférentiellement le duodénum."
  },
  {
    "id": "giardia_diag_8",
    "axis": "diagnosis",
    "question": "Quel examen histologique peut être réalisé exceptionnellement en cas de diagnostic difficile ?",
    "options": [
      "Biopsie jéjunale",
      "Biopsie colique",
      "Biopsie hépatique",
      "Biopsie ganglionnaire"
    ],
    "correctAnswer": 0,
    "explanation": "La biopsie jéjunale permet l’observation directe des parasites et des lésions."
  },
  {
    "id": "giardia_diag_9",
    "axis": "diagnosis",
    "question": "Quelle anomalie histologique peut être observée lors d’une giardiase chronique ?",
    "options": [
      "Atrophie villositaire partielle",
      "Nécrose transmucosale",
      "Granulomes épithélioïdes",
      "Fibrose intestinale"
    ],
    "correctAnswer": 0,
    "explanation": "L’atrophie villositaire explique la malabsorption."
  },
  {
    "id": "giardia_diag_10",
    "axis": "diagnosis",
    "question": "Pourquoi la sérologie n'est-elle pas un outil fiable pour le diagnostic de la giardiase ?",
    "options": [
      "Réponse immunitaire inconstante et peu spécifique",
      "Sensibilité trop élevée",
      "Disparition rapide des anticorps",
      "Réservée aux formes invasives"
    ],
    "correctAnswer": 0,
    "explanation": "Les anticorps ne reflètent pas toujours une infection active."
  },
  {
    "id": "giardia_diag_11",
    "axis": "diagnosis",
    "question": "Quel test immunologique peut améliorer le diagnostic des selles ?",
    "options": [
      "Recherche d’antigènes de Giardia dans les selles",
      "Test de Coombs",
      "Western blot sanguin",
      "Dosage des IgE totales"
    ],
    "correctAnswer": 0,
    "explanation": "Les tests antigéniques augmentent la sensibilité diagnostique."
  },
  {
    "id": "giardia_diag_12",
    "axis": "diagnosis",
    "question": "Quel élément oriente vers un diagnostic de giardiase plutôt qu'une autre parasitose intestinale ?",
    "options": [
      "Association diarrhée chronique et stéatorrhée",
      "Présence de fièvre élevée",
      "Syndrome inflammatoire marqué",
      "Selles sanglantes"
    ],
    "correctAnswer": 0,
    "explanation": "La giardiase est une parasitose non invasive responsable de malabsorption."
  },
  {
    "id": "giardia_diag_13",
    "axis": "diagnosis",
    "question": "Chez l’enfant présentant un retard staturo-pondéral, quel examen doit être évoqué en priorité ?",
    "options": [
      "Examen parasitologique des selles répété",
      "IRM cérébrale",
      "Exploration thyroïdienne",
      "Biopsie hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "La giardiase est une cause fréquente de retard de croissance."
  },
  {
    "id": "giardia_diag_14",
    "axis": "diagnosis",
    "question": "Quel est l'aspect typique de Giardia observé au microscope dans le liquide duodénal ?",
    "options": [
      "Trophozoïte piriforme bilatéralement symétrique",
      "Kyste sphérique à paroi épaisse",
      "Larve mobile filiforme",
      "Forme amiboïde"
    ],
    "correctAnswer": 0,
    "explanation": "Le trophozoïte a une morphologie très caractéristique."
  },
  {
    "id": "giardia_diag_15",
    "axis": "diagnosis",
    "question": "Quelle conduite diagnostique est recommandée devant une suspicion persistante malgré examens négatifs ?",
    "options": [
      "Multiplier les méthodes diagnostiques",
      "Exclure définitivement la giardiase",
      "Instaurer un traitement probabiliste prolongé sans preuve",
      "Attendre une complication"
    ],
    "correctAnswer": 0,
    "explanation": "La combinaison des examens augmente la probabilité diagnostique."
  }
];
// ==========================================
// 5. TRAITEMENT (10 Questions)
// ==========================================
const treatmentQuestions = [
  {
    "id": "giardia_treat_1",
    "axis": "treatment",
    "question": "Quel est le traitement de première intention de la giardiase chez l’adulte immunocompétent ?",
    "options": [
      "Métronidazole per os",
      "Albendazole",
      "Praziquantel",
      "Ivermectine"
    ],
    "correctAnswer": 0,
    "explanation": "Le métronidazole est le traitement de référence de la giardiase depuis plusieurs décennies."
  },
  {
    "id": "giardia_treat_2",
    "axis": "treatment",
    "question": "Quelle est la durée classique du traitement par métronidazole dans la giardiase ?",
    "options": [
      "5 à 7 jours",
      "24 heures",
      "14 jours",
      "1 mois"
    ],
    "correctAnswer": 0,
    "explanation": "Le schéma standard est de 5 à 7 jours pour assurer l’éradication parasitaire."
  },
  {
    "id": "giardia_treat_3",
    "axis": "treatment",
    "question": "Quel médicament permet un traitement dit « minute » de la giardiase ?",
    "options": [
      "Tinidazole",
      "Métronidazole",
      "Secnidazole",
      "Nitazoxanide"
    ],
    "correctAnswer": 0,
    "explanation": "Le tinidazole peut être administré en dose unique avec une excellente efficacité."
  },
  {
    "id": "giardia_treat_4",
    "axis": "treatment",
    "question": "Quel est l’avantage principal du tinidazole par rapport au métronidazole ?",
    "options": [
      "Meilleure observance grâce à une prise unique",
      "Moins de toxicité hépatique",
      "Utilisable chez le nourrisson",
      "Absence totale d’effets indésirables"
    ],
    "correctAnswer": 0,
    "explanation": "La prise unique améliore nettement l’observance thérapeutique."
  },
  {
    "id": "giardia_treat_5",
    "axis": "treatment",
    "question": "Quelle recommandation doit être donnée concernant la consommation d’alcool sous nitro-imidazolés ?",
    "options": [
      "Interdiction stricte en raison d’un effet antabuse",
      "Autorisation sans restriction",
      "Alcool autorisé à faible dose",
      "Uniquement après le repas"
    ],
    "correctAnswer": 0,
    "explanation": "Les nitro-imidazolés provoquent une réaction de type disulfirame avec l’alcool."
  },
  {
    "id": "giardia_treat_6",
    "axis": "treatment",
    "question": "Quelle conduite thérapeutique est recommandée chez les sujets contacts asymptomatiques ?",
    "options": [
      "Traitement simultané pour éviter la réinfestation",
      "Absence de traitement",
      "Traitement uniquement si sérologie positive",
      "Traitement uniquement chez l’enfant"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement des contacts limite les réinfections intrafamiliales."
  },
  {
    "id": "giardia_treat_7",
    "axis": "treatment",
    "question": "Quel examen est recommandé pour contrôler l’efficacité du traitement de la giardiase ?",
    "options": [
      "Examen parasitologique des selles de contrôle",
      "Sérologie à 1 mois",
      "Numération formule sanguine",
      "Test respiratoire à l’hydrogène"
    ],
    "correctAnswer": 0,
    "explanation": "Un contrôle parasitologique confirme l’éradication du parasite."
  },
  {
    "id": "giardia_treat_8",
    "axis": "treatment",
    "question": "À quel délai le contrôle parasitologique est-il recommandé après traitement ?",
    "options": [
      "7 à 10 jours après la fin du traitement",
      "Le lendemain du traitement",
      "À 3 mois",
      "Uniquement en cas de rechute clinique"
    ],
    "correctAnswer": 0,
    "explanation": "Ce délai permet l’élimination des parasites résiduels."
  },
  {
    "id": "giardia_treat_9",
    "axis": "treatment",
    "question": "Quelle est la principale cause d’échec thérapeutique dans la giardiase ?",
    "options": [
      "Mauvaise observance ou réinfestation",
      "Résistance systématique du parasite",
      "Erreur diagnostique initiale",
      "Dose excessive de médicament"
    ],
    "correctAnswer": 0,
    "explanation": "La mauvaise observance et les recontaminations sont les causes majeures."
  },
  {
    "id": "giardia_treat_10",
    "axis": "treatment",
    "question": "Quelle mesure non médicamenteuse est essentielle pour prévenir les rechutes de giardiase ?",
    "options": [
      "Hygiène rigoureuse des mains et de l’eau",
      "Supplémentation vitaminique",
      "Régime sans gluten",
      "Vaccination"
    ],
    "correctAnswer": 0,
    "explanation": "La prévention repose principalement sur les mesures d’hygiène."
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
