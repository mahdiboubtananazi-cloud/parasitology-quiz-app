// ==========================================
// 1. MORPHOLOGIE (20 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "tryp_morph_1",
    "axis": "morphology",
    "question": "Quelle est la caractéristique morphologique majeure du stade trypomastigote sanguin ?",
    "options": [
      "Présence d'une membrane ondulante sur toute la longueur",
      "Absence de flagelle",
      "Forme ronde intracellulaire",
      "Noyau antérieur"
    ],
    "correctAnswer": 0,
    "explanation": "Le trypomastigote est allongé, extracellulaire, avec un flagelle libre et une membrane ondulante bien développée."
  },
  {
    "id": "tryp_morph_2",
    "axis": "morphology",
    "question": "Quel élément cytoplasmique permet d’identifier le genre Trypanosoma au microscope ?",
    "options": [
      "Le kinétoplaste",
      "Le centrosome",
      "La vacuole digestive",
      "Le chloroplaste"
    ],
    "correctAnswer": 0,
    "explanation": "Le kinétoplaste est une masse d’ADN mitochondrial caractéristique des Kinetoplastida."
  },
  {
    "id": "tryp_morph_3",
    "axis": "morphology",
    "question": "Quelle est la position typique du kinétoplaste chez le trypomastigote de Trypanosoma ?",
    "options": [
      "Postérieure par rapport au noyau",
      "Antérieure par rapport au noyau",
      "Centrale",
      "Absente"
    ],
    "correctAnswer": 0,
    "explanation": "Chez le trypomastigote, le kinétoplaste est situé en position postérieure."
  },
  {
    "id": "tryp_morph_4",
    "axis": "morphology",
    "question": "Quelle forme morphologique de Trypanosoma est retrouvée chez l’homme ?",
    "options": [
      "Trypomastigote",
      "Promastigote",
      "Amastigote extracellulaire",
      "Epimastigote"
    ],
    "correctAnswer": 0,
    "explanation": "Chez l’homme, Trypanosoma circule sous forme trypomastigote extracellulaire."
  },
  {
    "id": "tryp_morph_5",
    "axis": "morphology",
    "question": "Quelle différence morphologique aide à distinguer Trypanosoma brucei de Trypanosoma cruzi ?",
    "options": [
      "Forme en C ou U plus fréquente chez T. cruzi",
      "Absence de membrane ondulante chez T. cruzi",
      "Kinétoplaste absent chez T. cruzi",
      "Taille plus petite chez T. brucei"
    ],
    "correctAnswer": 0,
    "explanation": "T. cruzi présente souvent des formes en C ou U avec un gros kinétoplaste terminal."
  },
  {
    "id": "tryp_morph_6",
    "axis": "morphology",
    "question": "Quelle est la taille approximative du trypomastigote de Trypanosoma spp. ?",
    "options": [
      "15 à 30 µm",
      "2 à 5 µm",
      "50 à 100 µm",
      "Moins de 1 µm"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypomastigotes sont de grande taille, facilement visibles sur frottis sanguin."
  },
  {
    "id": "tryp_morph_7",
    "axis": "morphology",
    "question": "Quel est l’aspect du noyau du trypomastigote ?",
    "options": [
      "Central ou subcentral",
      "Toujours antérieur",
      "Toujours postérieur",
      "Multinucléé"
    ],
    "correctAnswer": 0,
    "explanation": "Le noyau est unique et situé en position centrale ou légèrement subcentrale."
  },
  {
    "id": "tryp_morph_8",
    "axis": "morphology",
    "question": "Quelle structure est responsable de la mobilité du trypanosome ?",
    "options": [
      "Le flagelle associé à la membrane ondulante",
      "Les pseudopodes",
      "Les cils multiples",
      "La vacuole contractile"
    ],
    "correctAnswer": 0,
    "explanation": "Le flagelle unique assure la motilité ondulante caractéristique."
  },
  {
    "id": "tryp_morph_9",
    "axis": "morphology",
    "question": "Quelle forme morphologique intracellulaire est observée dans les tissus lors de la maladie de Chagas ?",
    "options": [
      "Amastigote",
      "Trypomastigote",
      "Promastigote",
      "Epimastigote"
    ],
    "correctAnswer": 0,
    "explanation": "T. cruzi se multiplie sous forme amastigote dans les cellules tissulaires."
  },
  {
    "id": "tryp_morph_10",
    "axis": "morphology",
    "question": "Comment se présente l’amastigote de Trypanosoma cruzi ?",
    "options": [
      "Forme ronde, sans flagelle externe",
      "Forme allongée avec membrane ondulante",
      "Forme piriforme flagellée",
      "Forme filamenteuse"
    ],
    "correctAnswer": 0,
    "explanation": "L’amastigote est une forme intracellulaire arrondie, non flagellée."
  },
  {
    "id": "tryp_morph_11",
    "axis": "morphology",
    "question": "Quelle coloration est classiquement utilisée pour visualiser Trypanosoma sur frottis sanguin ?",
    "options": [
      "Giemsa",
      "Ziehl-Neelsen",
      "Gram",
      "PAS"
    ],
    "correctAnswer": 0,
    "explanation": "La coloration de Giemsa met en évidence le noyau et le kinétoplaste."
  },
  {
    "id": "tryp_morph_12",
    "axis": "morphology",
    "question": "Quel aspect morphologique est typique du kinétoplaste de T. cruzi ?",
    "options": [
      "Gros et terminal",
      "Petit et antérieur",
      "Diffus dans le cytoplasme",
      "Invisible en microscopie optique"
    ],
    "correctAnswer": 0,
    "explanation": "Le kinétoplaste de T. cruzi est volumineux et situé à l’extrémité postérieure."
  },
  {
    "id": "tryp_morph_13",
    "axis": "morphology",
    "question": "Quelle forme morphologique est observée chez le vecteur insecte ?",
    "options": [
      "Epimastigote",
      "Amastigote",
      "Trypomastigote sanguin",
      "Kyste"
    ],
    "correctAnswer": 0,
    "explanation": "Chez l’insecte vecteur, le parasite est principalement sous forme épimastigote."
  },
  {
    "id": "tryp_morph_14",
    "axis": "morphology",
    "question": "Quelle est la position du flagelle chez l’épimastigote ?",
    "options": [
      "Émerge près du noyau",
      "Émerge à l’extrémité postérieure",
      "Absent",
      "Multiple"
    ],
    "correctAnswer": 0,
    "explanation": "Chez l’épimastigote, le flagelle émerge en position juxta-nucléaire."
  },
  {
    "id": "tryp_morph_15",
    "axis": "morphology",
    "question": "Quel critère morphologique permet de distinguer Trypanosoma des Leishmania ?",
    "options": [
      "Présence d’une membrane ondulante",
      "Présence d’un kinétoplaste",
      "Parasite flagellé",
      "ADN mitochondrial"
    ],
    "correctAnswer": 0,
    "explanation": "La membrane ondulante est caractéristique des trypanosomes sanguins."
  },
  {
    "id": "tryp_morph_16",
    "axis": "morphology",
    "question": "Quelle est la forme dominante observée dans le sang périphérique en phase aiguë ?",
    "options": [
      "Trypomastigote mobile",
      "Amastigote intracellulaire",
      "Epimastigote",
      "Promastigote"
    ],
    "correctAnswer": 0,
    "explanation": "Le trypomastigote circule librement dans le sang."
  },
  {
    "id": "tryp_morph_17",
    "axis": "morphology",
    "question": "Quel est l’aspect général du cytoplasme du trypanosome au microscope ?",
    "options": [
      "Basophile avec granulations fines",
      "Clair et vacuolaire",
      "Fortement éosinophile",
      "Incolore"
    ],
    "correctAnswer": 0,
    "explanation": "Le cytoplasme est légèrement basophile avec des granulations discrètes."
  },
  {
    "id": "tryp_morph_18",
    "axis": "morphology",
    "question": "Quelle particularité morphologique est liée à l’échappement immunitaire de T. brucei ?",
    "options": [
      "Variation antigénique de la glycoprotéine de surface",
      "Formation de kystes",
      "Vie intracellulaire stricte",
      "Capsule polysaccharidique"
    ],
    "correctAnswer": 0,
    "explanation": "La variation antigénique concerne la VSG exprimée à la surface du parasite."
  },
  {
    "id": "tryp_morph_19",
    "axis": "morphology",
    "question": "Quelle forme est responsable de la multiplication asexuée chez T. cruzi dans l’hôte ?",
    "options": [
      "Amastigote",
      "Trypomastigote",
      "Epimastigote",
      "Promastigote"
    ],
    "correctAnswer": 0,
    "explanation": "La multiplication intracellulaire se fait sous forme amastigote."
  },
  {
    "id": "tryp_morph_20",
    "axis": "morphology",
    "question": "Quel élément morphologique est ABSENT chez tous les Trypanosoma ?",
    "options": [
      "Paroi kystique",
      "Kinétoplaste",
      "Flagelle",
      "Noyau"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypanosomes ne forment jamais de kystes."
  }
];
// ==========================================
// 2. CYCLE DE VIE (20 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "tryp_cycle_1",
    "axis": "lifecycle",
    "question": "Quel est le vecteur biologique de la trypanosomiase humaine africaine (THA) ?",
    "options": [
      "La mouche tsé-tsé (Glossina)",
      "Le moustique Anophèle",
      "La punaise réduve",
      "La tique Ixodes"
    ],
    "correctAnswer": 0,
    "explanation": "La THA est transmise exclusivement par la mouche tsé-tsé du genre Glossina."
  },
  {
    "id": "tryp_cycle_2",
    "axis": "lifecycle",
    "question": "Quel est le vecteur responsable de la transmission de la maladie de Chagas ?",
    "options": [
      "La punaise réduve (Triatoma)",
      "La glossine",
      "Le phlébotome",
      "Le moustique Culex"
    ],
    "correctAnswer": 0,
    "explanation": "Trypanosoma cruzi est transmis par les punaises hématophages dites réduves."
  },
  {
    "id": "tryp_cycle_3",
    "axis": "lifecycle",
    "question": "Quel est le mode principal de contamination humaine dans la maladie de Chagas ?",
    "options": [
      "Pénétration des parasites via les déjections de la punaise",
      "Inoculation directe par la piqûre",
      "Transmission transplacentaire exclusive",
      "Inhalation d’aérosols"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypomastigotes pénètrent par la peau ou les muqueuses après grattage des déjections."
  },
  {
    "id": "tryp_cycle_4",
    "axis": "lifecycle",
    "question": "Comment s’effectue la transmission de Trypanosoma brucei à l’homme ?",
    "options": [
      "Inoculation salivaire lors de la piqûre de glossine",
      "Par ingestion de l’insecte",
      "Par déjections contaminantes",
      "Par voie fécale-orale"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes infectantes sont inoculées directement lors de la piqûre."
  },
  {
    "id": "tryp_cycle_5",
    "axis": "lifecycle",
    "question": "Quelle est la forme infectante pour l’homme dans la trypanosomiase africaine ?",
    "options": [
      "Trypomastigote métacyclique",
      "Epimastigote",
      "Amastigote",
      "Promastigote"
    ],
    "correctAnswer": 0,
    "explanation": "La glossine inocule des trypomastigotes métacycliques."
  },
  {
    "id": "tryp_cycle_6",
    "axis": "lifecycle",
    "question": "Où se déroule la multiplication du parasite chez l’homme dans la THA ?",
    "options": [
      "Dans le sang et la lymphe",
      "Dans les hépatocytes",
      "Dans les entérocytes",
      "Dans les globules rouges"
    ],
    "correctAnswer": 0,
    "explanation": "T. brucei se multiplie sous forme extracellulaire par scissiparité."
  },
  {
    "id": "tryp_cycle_7",
    "axis": "lifecycle",
    "question": "Quelle est la forme parasitaire ingérée par la glossine lors du repas sanguin ?",
    "options": [
      "Trypomastigote sanguin",
      "Amastigote",
      "Epimastigote",
      "Forme kystique"
    ],
    "correctAnswer": 0,
    "explanation": "La glossine ingère des trypomastigotes circulants."
  },
  {
    "id": "tryp_cycle_8",
    "axis": "lifecycle",
    "question": "Dans quel organe de la glossine se développe Trypanosoma brucei ?",
    "options": [
      "Intestin moyen puis glandes salivaires",
      "Estomac uniquement",
      "Hémocoele",
      "Ovaires"
    ],
    "correctAnswer": 0,
    "explanation": "Le parasite migre vers les glandes salivaires où il devient infectant."
  },
  {
    "id": "tryp_cycle_9",
    "axis": "lifecycle",
    "question": "Quel est le principal réservoir animal de T. brucei gambiense ?",
    "options": [
      "Porc et chien",
      "Antilope",
      "Bovin exclusivement",
      "Rongeur sauvage"
    ],
    "correctAnswer": 0,
    "explanation": "La forme gambiense est une anthropozoonose avec réservoir domestique."
  },
  {
    "id": "tryp_cycle_10",
    "axis": "lifecycle",
    "question": "Quel est le réservoir animal majeur de T. brucei rhodesiense ?",
    "options": [
      "Antilope sauvage",
      "Porc domestique",
      "Chien",
      "Homme uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "La forme rhodesiense est une zoonose sauvage."
  },
  {
    "id": "tryp_cycle_11",
    "axis": "lifecycle",
    "question": "Quelle est la forme parasitaire retrouvée dans les tissus lors de la maladie de Chagas ?",
    "options": [
      "Amastigote",
      "Trypomastigote métacyclique",
      "Epimastigote",
      "Promastigote"
    ],
    "correctAnswer": 0,
    "explanation": "Les amastigotes se multiplient dans les cellules musculaires et nerveuses."
  },
  {
    "id": "tryp_cycle_12",
    "axis": "lifecycle",
    "question": "Où se multiplie Trypanosoma cruzi chez l’insecte vecteur ?",
    "options": [
      "Intestin de la punaise réduve",
      "Glandes salivaires",
      "Hémolymphe",
      "Ovaires"
    ],
    "correctAnswer": 0,
    "explanation": "La multiplication se fait sous forme épimastigote dans l’intestin."
  },
  {
    "id": "tryp_cycle_13",
    "axis": "lifecycle",
    "question": "Quelle est la forme infectante pour l’homme dans la maladie de Chagas ?",
    "options": [
      "Trypomastigote métacyclique",
      "Amastigote",
      "Epimastigote",
      "Forme sanguine adulte"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypomastigotes métacycliques sont présents dans les déjections."
  },
  {
    "id": "tryp_cycle_14",
    "axis": "lifecycle",
    "question": "Quel facteur favorise la transmission de la maladie de Chagas ?",
    "options": [
      "Habitat rural précaire avec murs fissurés",
      "Zones forestières humides",
      "Présence d’eaux stagnantes",
      "Altitude élevée"
    ],
    "correctAnswer": 0,
    "explanation": "Les réduves colonisent les habitations rurales."
  },
  {
    "id": "tryp_cycle_15",
    "axis": "lifecycle",
    "question": "Quelle transmission non vectorielle est possible pour T. cruzi ?",
    "options": [
      "Transfusion sanguine",
      "Aérosols",
      "Piqûre accidentelle",
      "Transmission sexuelle"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission transfusionnelle est bien documentée."
  },
  {
    "id": "tryp_cycle_16",
    "axis": "lifecycle",
    "question": "Quel est le caractère du cycle de Trypanosoma brucei ?",
    "options": [
      "Dixène obligatoire",
      "Monoxène",
      "Cycle aquatique",
      "Cycle avec kyste"
    ],
    "correctAnswer": 0,
    "explanation": "Le cycle nécessite obligatoirement un vertébré et un insecte."
  },
  {
    "id": "tryp_cycle_17",
    "axis": "lifecycle",
    "question": "Quelle est la durée approximative du développement de T. brucei chez la glossine ?",
    "options": [
      "2 à 3 semaines",
      "24 heures",
      "2 mois",
      "Quelques heures"
    ],
    "correctAnswer": 0,
    "explanation": "La maturation parasitaire est longue chez la glossine."
  },
  {
    "id": "tryp_cycle_18",
    "axis": "lifecycle",
    "question": "Quelle particularité distingue la contamination africaine de l’américaine ?",
    "options": [
      "Inoculation directe vs contamination indirecte",
      "Transmission exclusivement orale",
      "Présence d’un kyste",
      "Cycle monoxène"
    ],
    "correctAnswer": 0,
    "explanation": "La piqûre est contaminante en Afrique, les déjections en Amérique."
  },
  {
    "id": "tryp_cycle_19",
    "axis": "lifecycle",
    "question": "Quel est le principal hôte définitif de Trypanosoma brucei gambiense ?",
    "options": [
      "L’homme",
      "Le bétail",
      "Les rongeurs",
      "Les oiseaux"
    ],
    "correctAnswer": 0,
    "explanation": "La forme gambiense est essentiellement humaine."
  },
  {
    "id": "tryp_cycle_20",
    "axis": "lifecycle",
    "question": "Quel élément est indispensable à la persistance du cycle de la THA ?",
    "options": [
      "Présence de glossines",
      "Eaux stagnantes",
      "Température froide",
      "Sol argileux"
    ],
    "correctAnswer": 0,
    "explanation": "Sans glossine, la transmission est impossible."
  }
];
// ==========================================
// 3. CLINIQUE (30 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "tryp_clin_1",
    "axis": "clinical",
    "question": "Quel signe clinique est particulièrement évocateur de la trypanosomiase humaine africaine (THA) au stade hémolymphatique ?",
    "options": [
      "Adénopathies cervicales postérieures (signe de Winterbottom)",
      "Œdème palpébral unilatéral",
      "Hémoptysie",
      "Ictère franc"
    ],
    "correctAnswer": 0,
    "explanation": "Le signe de Winterbottom correspond à des adénopathies cervicales typiques de la THA."
  },
  {
    "id": "tryp_clin_2",
    "axis": "clinical",
    "question": "Le signe de Kerandel observé dans la THA correspond à :",
    "options": [
      "Une hyperesthésie cutanée douloureuse",
      "Une paralysie faciale périphérique",
      "Un prurit généralisé",
      "Une hypoesthésie distale"
    ],
    "correctAnswer": 0,
    "explanation": "Le signe de Kerandel est une hyperesthésie très caractéristique du stade neurologique."
  },
  {
    "id": "tryp_clin_3",
    "axis": "clinical",
    "question": "Quelle anomalie du sommeil est typique de la THA avancée ?",
    "options": [
      "Inversion du rythme nycthéméral",
      "Insomnie totale",
      "Apnée du sommeil",
      "Narcolepsie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "La maladie du sommeil se caractérise par une somnolence diurne et une insomnie nocturne."
  },
  {
    "id": "tryp_clin_4",
    "axis": "clinical",
    "question": "Quel organe est principalement atteint lors du stade méningo-encéphalitique de la THA ?",
    "options": [
      "Système nerveux central",
      "Foie",
      "Rein",
      "Poumon"
    ],
    "correctAnswer": 0,
    "explanation": "Le parasite envahit le SNC au stade tardif."
  },
  {
    "id": "tryp_clin_5",
    "axis": "clinical",
    "question": "Quelle évolution est typique de la THA à T. brucei gambiense ?",
    "options": [
      "Évolution chronique lente",
      "Évolution foudroyante",
      "Guérison spontanée rapide",
      "Forme exclusivement aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "La forme gambiense évolue lentement sur plusieurs années."
  },
  {
    "id": "tryp_clin_6",
    "axis": "clinical",
    "question": "Quelle forme de THA est la plus aiguë et sévère ?",
    "options": [
      "T. brucei rhodesiense",
      "T. brucei gambiense",
      "T. cruzi",
      "T. rangeli"
    ],
    "correctAnswer": 0,
    "explanation": "La forme rhodesiense évolue rapidement vers des formes graves."
  },
  {
    "id": "tryp_clin_7",
    "axis": "clinical",
    "question": "Quel signe cutané peut être observé au point d’inoculation de la glossine ?",
    "options": [
      "Chancre trypanosomien",
      "Ulcère cratériforme",
      "Érysipèle",
      "Escarre nécrotique"
    ],
    "correctAnswer": 0,
    "explanation": "Le chancre d’inoculation est une lésion inflammatoire locale."
  },
  {
    "id": "tryp_clin_8",
    "axis": "clinical",
    "question": "Quel est le signe clinique initial typique de la maladie de Chagas aiguë ?",
    "options": [
      "Signe de Romaña",
      "Signe de Winterbottom",
      "Paralysie faciale",
      "Ascite"
    ],
    "correctAnswer": 0,
    "explanation": "Le signe de Romaña correspond à un œdème palpébral unilatéral."
  },
  {
    "id": "tryp_clin_9",
    "axis": "clinical",
    "question": "Le signe de Romaña résulte principalement de :",
    "options": [
      "La pénétration conjonctivale des parasites",
      "La piqûre directe de l’insecte",
      "Une réaction allergique systémique",
      "Une surinfection bactérienne"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypanosomes pénètrent via la conjonctive après grattage."
  },
  {
    "id": "tryp_clin_10",
    "axis": "clinical",
    "question": "Quelle complication cardiaque est typique de la phase chronique de la maladie de Chagas ?",
    "options": [
      "Cardiomyopathie dilatée",
      "Endocardite infectieuse",
      "Hypertension artérielle",
      "Myocardite virale aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "La cardiomyopathie chagasique est une cause majeure de mortalité."
  },
  {
    "id": "tryp_clin_11",
    "axis": "clinical",
    "question": "Quel trouble du rythme est fréquemment associé à la cardiopathie chagasique ?",
    "options": [
      "Troubles de conduction et arythmies ventriculaires",
      "Fibrillation auriculaire isolée",
      "Bloc sino-auriculaire bénin",
      "Tachycardie sinusale simple"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions myocardiques entraînent des troubles sévères de conduction."
  },
  {
    "id": "tryp_clin_12",
    "axis": "clinical",
    "question": "Quels organes digestifs sont classiquement atteints dans la maladie de Chagas chronique ?",
    "options": [
      "Œsophage et côlon (méga-œsophage, mégacôlon)",
      "Estomac et duodénum",
      "Intestin grêle uniquement",
      "Foie et voies biliaires"
    ],
    "correctAnswer": 0,
    "explanation": "Les atteintes neurovégétatives entraînent des méga-organes."
  },
  {
    "id": "tryp_clin_13",
    "axis": "clinical",
    "question": "Quel symptôme digestif évoque un méga-œsophage chagasique ?",
    "options": [
      "Dysphagie progressive",
      "Diarrhée aiguë",
      "Hématémèse",
      "Vomissements bilieux"
    ],
    "correctAnswer": 0,
    "explanation": "La dysphagie est liée à la perte de motricité œsophagienne."
  },
  {
    "id": "tryp_clin_14",
    "axis": "clinical",
    "question": "Quelle manifestation est fréquente lors de la phase aiguë de Chagas chez l’enfant ?",
    "options": [
      "Fièvre prolongée avec hépatosplénomégalie",
      "Coma immédiat",
      "Paralysie flasque",
      "Ataxie cérébelleuse"
    ],
    "correctAnswer": 0,
    "explanation": "La phase aiguë peut mimer une infection systémique."
  },
  {
    "id": "tryp_clin_15",
    "axis": "clinical",
    "question": "Quel est le principal mécanisme des lésions chroniques de la maladie de Chagas ?",
    "options": [
      "Destruction inflammatoire et auto-immune des tissus",
      "Obstruction vasculaire aiguë",
      "Toxicité directe du parasite circulant",
      "Formation de granulomes calcifiés"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions sont liées à une réponse inflammatoire chronique."
  },
  {
    "id": "tryp_clin_16",
    "axis": "clinical",
    "question": "Quelle complication neurologique peut être observée dans la THA avancée ?",
    "options": [
      "Troubles du comportement et coma",
      "AVC hémorragique",
      "Neuropathie périphérique isolée",
      "Myélite transverse"
    ],
    "correctAnswer": 0,
    "explanation": "L’atteinte encéphalique entraîne des troubles neuropsychiatriques."
  },
  {
    "id": "tryp_clin_17",
    "axis": "clinical",
    "question": "Quelle est la cause habituelle de décès dans la THA non traitée ?",
    "options": [
      "Atteinte neurologique terminale",
      "Insuffisance hépatique",
      "Choc septique",
      "Hémorragie digestive"
    ],
    "correctAnswer": 0,
    "explanation": "L’évolution naturelle conduit au coma puis au décès."
  },
  {
    "id": "tryp_clin_18",
    "axis": "clinical",
    "question": "Quel signe biologique accompagne souvent la THA ?",
    "options": [
      "Hypergammaglobulinémie polyclonale",
      "Hypogammaglobulinémie",
      "Thrombocytose",
      "Polyglobulie"
    ],
    "correctAnswer": 0,
    "explanation": "La stimulation immunitaire chronique augmente les gammaglobulines."
  },
  {
    "id": "tryp_clin_19",
    "axis": "clinical",
    "question": "Quelle population est la plus exposée à la maladie de Chagas ?",
    "options": [
      "Habitants ruraux d’Amérique latine",
      "Voyageurs urbains",
      "Enfants européens",
      "Travailleurs forestiers africains"
    ],
    "correctAnswer": 0,
    "explanation": "La maladie est endémique dans les zones rurales d’Amérique latine."
  },
  {
    "id": "tryp_clin_20",
    "axis": "clinical",
    "question": "Quelle manifestation est typique de la phase indéterminée de Chagas ?",
    "options": [
      "Absence de symptômes cliniques",
      "Insuffisance cardiaque sévère",
      "Méningo-encéphalite",
      "Méga-côlon symptomatique"
    ],
    "correctAnswer": 0,
    "explanation": "La phase indéterminée est asymptomatique mais parasitée."
  },
  {
    "id": "tryp_clin_21",
    "axis": "clinical",
    "question": "Quel signe oriente vers une atteinte lymphatique précoce de la THA ?",
    "options": [
      "Adénopathies généralisées",
      "Œdèmes des membres inférieurs",
      "Splénomégalie isolée",
      "Ascite"
    ],
    "correctAnswer": 0,
    "explanation": "Les ganglions sont précocement envahis."
  },
  {
    "id": "tryp_clin_22",
    "axis": "clinical",
    "question": "Quel symptôme traduit l’atteinte du système nerveux autonome dans Chagas ?",
    "options": [
      "Constipation sévère chronique",
      "Polyurie",
      "Toux chronique",
      "Hypersudation"
    ],
    "correctAnswer": 0,
    "explanation": "La destruction des plexus nerveux entraîne un mégacôlon."
  },
  {
    "id": "tryp_clin_23",
    "axis": "clinical",
    "question": "Quelle complication thromboembolique est associée à la cardiomyopathie chagasique ?",
    "options": [
      "Accident vasculaire cérébral",
      "Embolie pulmonaire septique",
      "Thrombose porte",
      "Infarctus mésentérique"
    ],
    "correctAnswer": 0,
    "explanation": "Les troubles du rythme favorisent les embolies."
  },
  {
    "id": "tryp_clin_24",
    "axis": "clinical",
    "question": "Quelle évolution est attendue sans traitement de la THA ?",
    "options": [
      "Issue fatale quasi constante",
      "Guérison spontanée fréquente",
      "Chronicité asymptomatique",
      "Transformation en Chagas"
    ],
    "correctAnswer": 0,
    "explanation": "La THA est mortelle sans traitement."
  },
  {
    "id": "tryp_clin_25",
    "axis": "clinical",
    "question": "Quel signe cutané peut accompagner la phase aiguë de Chagas ?",
    "options": [
      "Chagome d’inoculation",
      "Éruption maculo-papuleuse diffuse",
      "Purpura nécrotique",
      "Urticaire chronique"
    ],
    "correctAnswer": 0,
    "explanation": "Le chagome est une lésion inflammatoire locale."
  },
  {
    "id": "tryp_clin_26",
    "axis": "clinical",
    "question": "Quelle manifestation est la plus évocatrice d’une THA évoluée ?",
    "options": [
      "Troubles neuropsychiatriques progressifs",
      "Diarrhée sanglante",
      "Ictère obstructif",
      "Hématurie"
    ],
    "correctAnswer": 0,
    "explanation": "Les troubles du comportement sont fréquents."
  },
  {
    "id": "tryp_clin_27",
    "axis": "clinical",
    "question": "Quel signe clinique traduit l’atteinte cardiaque avancée dans Chagas ?",
    "options": [
      "Insuffisance cardiaque congestive",
      "Angor d’effort isolé",
      "Hypertension sévère",
      "Souffle mitral congénital"
    ],
    "correctAnswer": 0,
    "explanation": "La cardiomyopathie dilatée entraîne une insuffisance cardiaque."
  },
  {
    "id": "tryp_clin_28",
    "axis": "clinical",
    "question": "Quel âge est le plus souvent touché par la THA gambiense ?",
    "options": [
      "Adultes vivant en zone endémique",
      "Nourrissons exclusivement",
      "Personnes âgées uniquement",
      "Adolescents urbains"
    ],
    "correctAnswer": 0,
    "explanation": "La maladie touche principalement les populations exposées."
  },
  {
    "id": "tryp_clin_29",
    "axis": "clinical",
    "question": "Quelle atteinte oculaire peut être observée dans la THA ?",
    "options": [
      "Uvéite et troubles visuels",
      "Cataracte congénitale",
      "Glaucome aigu",
      "Rétinite pigmentaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’inflammation peut toucher les structures oculaires."
  },
  {
    "id": "tryp_clin_30",
    "axis": "clinical",
    "question": "Quelle est la principale différence clinique entre THA et Chagas ?",
    "options": [
      "Atteinte neurologique prédominante vs cardiodigestive",
      "Transmission vectorielle vs directe",
      "Absence de phase chronique",
      "Évolution uniquement aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "La THA atteint surtout le SNC, Chagas le cœur et le tube digestif."
  }
];
// ==========================================
// 4. DIAGNOSTIC (20 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "tryp_diag_1",
    "axis": "diagnosis",
    "question": "Quel test est utilisé pour le dépistage de masse de la trypanosomiase humaine africaine (THA) à T. brucei gambiense ?",
    "options": [
      "CATT (Card Agglutination Test for Trypanosomiasis)",
      "PCR sanguine systématique",
      "Hémoculture",
      "Xénodiagnostic"
    ],
    "correctAnswer": 0,
    "explanation": "Le CATT est un test sérologique simple utilisé pour le dépistage de masse en zones endémiques."
  },
  {
    "id": "tryp_diag_2",
    "axis": "diagnosis",
    "question": "Le CATT est principalement utile pour :",
    "options": [
      "Le dépistage, mais pas la confirmation diagnostique",
      "Le diagnostic de certitude",
      "Le suivi post-thérapeutique",
      "Le diagnostic de Chagas"
    ],
    "correctAnswer": 0,
    "explanation": "Le CATT détecte des anticorps et nécessite une confirmation parasitologique."
  },
  {
    "id": "tryp_diag_3",
    "axis": "diagnosis",
    "question": "Quel examen permet de confirmer le diagnostic de THA ?",
    "options": [
      "Mise en évidence directe des trypanosomes",
      "Sérologie isolée",
      "Test cutané",
      "Imagerie cérébrale"
    ],
    "correctAnswer": 0,
    "explanation": "Le diagnostic de certitude repose sur la visualisation du parasite."
  },
  {
    "id": "tryp_diag_4",
    "axis": "diagnosis",
    "question": "Dans quel prélèvement les trypanosomes peuvent-ils être recherchés au stade hémolymphatique de la THA ?",
    "options": [
      "Sang et suc ganglionnaire",
      "LCR uniquement",
      "Urines",
      "Selles"
    ],
    "correctAnswer": 0,
    "explanation": "Les trypanosomes circulent dans le sang et les ganglions au stade 1."
  },
  {
    "id": "tryp_diag_5",
    "axis": "diagnosis",
    "question": "Pourquoi l’examen du liquide céphalo-rachidien (LCR) est-il indispensable dans la THA ?",
    "options": [
      "Pour déterminer le stade neurologique (stade 2)",
      "Pour confirmer la sérologie",
      "Pour éliminer une co-infection bactérienne",
      "Pour mesurer la charge parasitaire sanguine"
    ],
    "correctAnswer": 0,
    "explanation": "La prise en charge thérapeutique dépend du stade neurologique."
  },
  {
    "id": "tryp_diag_6",
    "axis": "diagnosis",
    "question": "Quel critère cytologique du LCR définit le passage au stade 2 de la THA ?",
    "options": [
      "Plus de 5 cellules par mm³",
      "Présence d’hématies",
      "Hypoglycorachie",
      "Hyperprotéinorachie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "Une pléiocytose > 5 cellules/mm³ signe l’atteinte du SNC."
  },
  {
    "id": "tryp_diag_7",
    "axis": "diagnosis",
    "question": "Quel élément parasitologique dans le LCR confirme formellement le stade 2 de la THA ?",
    "options": [
      "Présence de trypanosomes",
      "Présence de lymphocytes activés",
      "IgG élevées",
      "Diminution du glucose"
    ],
    "correctAnswer": 0,
    "explanation": "La visualisation directe du parasite dans le LCR est formelle."
  },
  {
    "id": "tryp_diag_8",
    "axis": "diagnosis",
    "question": "Quelle immunoglobuline est typiquement augmentée dans le LCR au cours de la THA stade 2 ?",
    "options": [
      "IgM",
      "IgA",
      "IgE",
      "IgD"
    ],
    "correctAnswer": 0,
    "explanation": "Une production intrathécale d’IgM est caractéristique."
  },
  {
    "id": "tryp_diag_9",
    "axis": "diagnosis",
    "question": "Quel examen permet d’augmenter la sensibilité de détection parasitaire sanguine dans la THA ?",
    "options": [
      "Techniques de concentration (microhématocrite)",
      "Sérologie simple",
      "Bilan hépatique",
      "Frottis non coloré"
    ],
    "correctAnswer": 0,
    "explanation": "Les techniques de concentration facilitent la visualisation des parasites."
  },
  {
    "id": "tryp_diag_10",
    "axis": "diagnosis",
    "question": "Quel est le principal intérêt diagnostique du CATT dans la THA gambiense ?",
    "options": [
      "Identifier les sujets suspects à confirmer",
      "Diagnostiquer le stade neurologique",
      "Suivre l’efficacité du traitement",
      "Diagnostiquer la THA rhodesiense"
    ],
    "correctAnswer": 0,
    "explanation": "Le CATT est un outil de dépistage collectif."
  },
  {
    "id": "tryp_diag_11",
    "axis": "diagnosis",
    "question": "Pourquoi le CATT est-il peu utile pour T. brucei rhodesiense ?",
    "options": [
      "Charge parasitaire élevée rendant le diagnostic direct facile",
      "Absence de réponse immunitaire",
      "Infection exclusivement animale",
      "Faux positifs constants"
    ],
    "correctAnswer": 0,
    "explanation": "La parasitémie élevée permet un diagnostic direct sans sérologie."
  },
  {
    "id": "tryp_diag_12",
    "axis": "diagnosis",
    "question": "Quel examen parasitologique est historiquement utilisé dans le diagnostic de la maladie de Chagas ?",
    "options": [
      "Xénodiagnostic",
      "CATT",
      "Test de Montenegro",
      "Ponction ganglionnaire"
    ],
    "correctAnswer": 0,
    "explanation": "Le xénodiagnostic utilise des réduves élevées en laboratoire."
  },
  {
    "id": "tryp_diag_13",
    "axis": "diagnosis",
    "question": "Le principe du xénodiagnostic repose sur :",
    "options": [
      "L’amplification du parasite chez l’insecte vecteur",
      "La détection d’anticorps sériques",
      "La culture cellulaire humaine",
      "La PCR directe du sang"
    ],
    "correctAnswer": 0,
    "explanation": "Les insectes se contaminent en piquant le patient."
  },
  {
    "id": "tryp_diag_14",
    "axis": "diagnosis",
    "question": "Quel examen est utile pour le diagnostic de la phase aiguë de la maladie de Chagas ?",
    "options": [
      "Hémoculture",
      "Sérologie isolée",
      "Biopsie digestive",
      "Test cutané"
    ],
    "correctAnswer": 0,
    "explanation": "La parasitémie est élevée en phase aiguë."
  },
  {
    "id": "tryp_diag_15",
    "axis": "diagnosis",
    "question": "Pourquoi la sérologie est-elle indispensable dans la phase chronique de Chagas ?",
    "options": [
      "Parasitémie faible voire absente",
      "Absence de réponse immunitaire",
      "Présence constante du parasite dans le sang",
      "Diagnostic clinique suffisant"
    ],
    "correctAnswer": 0,
    "explanation": "Le parasite est rare dans le sang en phase chronique."
  },
  {
    "id": "tryp_diag_16",
    "axis": "diagnosis",
    "question": "Quel est l’examen de référence pour le diagnostic de Chagas chronique ?",
    "options": [
      "Sérologie (tests concordants)",
      "Xénodiagnostic",
      "Hémoculture",
      "Examen du LCR"
    ],
    "correctAnswer": 0,
    "explanation": "Deux tests sérologiques positifs sont requis."
  },
  {
    "id": "tryp_diag_17",
    "axis": "diagnosis",
    "question": "Quel est l’intérêt principal de la PCR dans les trypanosomiases ?",
    "options": [
      "Augmenter la sensibilité diagnostique",
      "Remplacer tous les autres tests",
      "Évaluer la sévérité clinique",
      "Diagnostiquer uniquement les formes neurologiques"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR est très sensible mais pas toujours disponible."
  },
  {
    "id": "tryp_diag_18",
    "axis": "diagnosis",
    "question": "Quel examen est indispensable avant d’instaurer un traitement de la THA ?",
    "options": [
      "Ponction lombaire",
      "Échographie abdominale",
      "Radiographie thoracique",
      "ECG"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement dépend du stade neurologique."
  },
  {
    "id": "tryp_diag_19",
    "axis": "diagnosis",
    "question": "Quel élément du LCR témoigne d’une activité inflammatoire dans la THA ?",
    "options": [
      "Pléiocytose lymphocytaire",
      "Présence de polynucléaires neutrophiles",
      "Hypoglycorachie profonde",
      "Présence de bactéries"
    ],
    "correctAnswer": 0,
    "explanation": "L’inflammation est principalement lymphocytaire."
  },
  {
    "id": "tryp_diag_20",
    "axis": "diagnosis",
    "question": "Quelle différence majeure existe entre le diagnostic de la THA et celui de Chagas ?",
    "options": [
      "Importance du stade neurologique vs stade cardiodigestif",
      "Transmission identique",
      "Absence de diagnostic parasitologique",
      "Évolution exclusivement aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "La stadification neurologique est centrale dans la THA."
  }
];
// ==========================================
// 5. TRAITEMENT (20 Questions)
// ==========================================
const treatmentQuestions = [
  {
    "id": "tryp_treat_1",
    "axis": "treatment",
    "question": "Quel est le traitement de première intention de la THA à T. brucei gambiense au stade 1 (hémolymphatique) ?",
    "options": [
      "Pentamidine",
      "Suramine",
      "Mélarsoprol",
      "Eflornithine"
    ],
    "correctAnswer": 0,
    "explanation": "La pentamidine est efficace au stade 1 de la THA gambiense."
  },
  {
    "id": "tryp_treat_2",
    "axis": "treatment",
    "question": "Quel est le traitement recommandé de la THA à T. brucei rhodesiense au stade 1 ?",
    "options": [
      "Suramine",
      "Pentamidine",
      "NECT",
      "Mélarsoprol"
    ],
    "correctAnswer": 0,
    "explanation": "La suramine est utilisée au stade précoce de la THA rhodesiense."
  },
  {
    "id": "tryp_treat_3",
    "axis": "treatment",
    "question": "Quel médicament est historiquement utilisé dans le traitement du stade neurologique de la THA ?",
    "options": [
      "Mélarsoprol",
      "Pentamidine",
      "Suramine",
      "Benznidazole"
    ],
    "correctAnswer": 0,
    "explanation": "Le mélarsoprol est un dérivé arsenical actif sur le SNC."
  },
  {
    "id": "tryp_treat_4",
    "axis": "treatment",
    "question": "Quelle est la principale complication redoutée du traitement par Mélarsoprol ?",
    "options": [
      "Encéphalopathie réactionnelle grave",
      "Insuffisance rénale aiguë",
      "Agranulocytose",
      "Hépatite fulminante"
    ],
    "correctAnswer": 0,
    "explanation": "L’encéphalopathie peut être mortelle dans 5 à 10% des cas."
  },
  {
    "id": "tryp_treat_5",
    "axis": "treatment",
    "question": "Quel traitement est actuellement privilégié en Europe pour la THA gambiense au stade 2 ?",
    "options": [
      "NECT (Eflornithine + Nifurtimox)",
      "Mélarsoprol seul",
      "Pentamidine IV",
      "Suramine IV"
    ],
    "correctAnswer": 0,
    "explanation": "Le protocole NECT est moins toxique que le mélarsoprol."
  },
  {
    "id": "tryp_treat_6",
    "axis": "treatment",
    "question": "Quel est le mécanisme d’action principal de l’Eflornithine ?",
    "options": [
      "Inhibition de l’ornithine décarboxylase",
      "Altération de la membrane parasitaire",
      "Inhibition de la synthèse de l’ADN",
      "Blocage de la glycolyse"
    ],
    "correctAnswer": 0,
    "explanation": "L’Eflornithine bloque la synthèse des polyamines."
  },
  {
    "id": "tryp_treat_7",
    "axis": "treatment",
    "question": "Pourquoi le traitement de la THA nécessite-t-il une stadification préalable par ponction lombaire ?",
    "options": [
      "Le choix thérapeutique dépend de l’atteinte neurologique",
      "Pour confirmer la sérologie",
      "Pour mesurer la charge parasitaire",
      "Pour dépister une co-infection bactérienne"
    ],
    "correctAnswer": 0,
    "explanation": "Les médicaments diffèrent entre stade 1 et stade 2."
  },
  {
    "id": "tryp_treat_8",
    "axis": "treatment",
    "question": "Quel médicament traverse efficacement la barrière hémato-encéphalique ?",
    "options": [
      "Mélarsoprol",
      "Pentamidine",
      "Suramine",
      "Benznidazole"
    ],
    "correctAnswer": 0,
    "explanation": "Le mélarsoprol agit sur les trypanosomes du SNC."
  },
  {
    "id": "tryp_treat_9",
    "axis": "treatment",
    "question": "Quel est l’objectif principal du protocole NECT ?",
    "options": [
      "Réduire la toxicité tout en conservant l’efficacité",
      "Raccourcir le traitement du stade 1",
      "Remplacer toute stadification",
      "Traiter la THA rhodesiense"
    ],
    "correctAnswer": 0,
    "explanation": "NECT est mieux toléré que le mélarsoprol."
  },
  {
    "id": "tryp_treat_10",
    "axis": "treatment",
    "question": "Quel est le traitement de référence de la maladie de Chagas en phase aiguë ?",
    "options": [
      "Benznidazole",
      "Pentamidine",
      "Suramine",
      "Eflornithine"
    ],
    "correctAnswer": 0,
    "explanation": "Le benznidazole est le traitement de choix."
  },
  {
    "id": "tryp_treat_11",
    "axis": "treatment",
    "question": "Quel autre médicament est utilisé comme alternative au benznidazole dans la maladie de Chagas ?",
    "options": [
      "Nifurtimox",
      "Mélarsoprol",
      "Pentamidine",
      "Amphotéricine B"
    ],
    "correctAnswer": 0,
    "explanation": "Le nifurtimox est une alternative validée."
  },
  {
    "id": "tryp_treat_12",
    "axis": "treatment",
    "question": "Quel est le principal bénéfice du traitement antiparasitaire dans la phase chronique indéterminée de Chagas ?",
    "options": [
      "Réduction de la progression des complications",
      "Guérison parasitologique immédiate",
      "Soulagement des symptômes digestifs",
      "Prévention des rechutes aiguës"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement peut ralentir l’évolution."
  },
  {
    "id": "tryp_treat_13",
    "axis": "treatment",
    "question": "Pourquoi le traitement de Chagas est-il moins efficace aux stades cardiaques avancés ?",
    "options": [
      "Dommages irréversibles des tissus",
      "Résistance systématique du parasite",
      "Absence de parasitémie",
      "Mauvaise observance"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions sont déjà constituées."
  },
  {
    "id": "tryp_treat_14",
    "axis": "treatment",
    "question": "Quel est l’effet indésirable fréquent du benznidazole ?",
    "options": [
      "Neuropathie périphérique",
      "Encéphalopathie aiguë",
      "Insuffisance rénale",
      "Myélosuppression sévère"
    ],
    "correctAnswer": 0,
    "explanation": "La neurotoxicité est dose-dépendante."
  },
  {
    "id": "tryp_treat_15",
    "axis": "treatment",
    "question": "Quel est le rôle du suivi post-thérapeutique dans la THA ?",
    "options": [
      "Détecter une rechute parasitaire",
      "Confirmer la négativation sérologique",
      "Prévenir la transmission vectorielle",
      "Adapter la prophylaxie"
    ],
    "correctAnswer": 0,
    "explanation": "Les rechutes peuvent survenir tardivement."
  },
  {
    "id": "tryp_treat_16",
    "axis": "treatment",
    "question": "Combien de temps peut durer la surveillance après traitement de la THA ?",
    "options": [
      "Jusqu’à 24 mois",
      "1 mois",
      "6 semaines",
      "À vie"
    ],
    "correctAnswer": 0,
    "explanation": "Un suivi prolongé est indispensable."
  },
  {
    "id": "tryp_treat_17",
    "axis": "treatment",
    "question": "Quel élément est surveillé lors du suivi post-thérapeutique de la THA ?",
    "options": [
      "Examen parasitologique et LCR",
      "Bilan hépatique isolé",
      "Sérologie seule",
      "ECG systématique"
    ],
    "correctAnswer": 0,
    "explanation": "Le LCR permet de dépister une rechute neurologique."
  },
  {
    "id": "tryp_treat_18",
    "axis": "treatment",
    "question": "Quel est l’objectif principal du traitement antiparasitaire dans la THA ?",
    "options": [
      "Éradication complète du parasite",
      "Diminution des symptômes uniquement",
      "Prévention de la transmission vectorielle",
      "Stérilisation immunologique"
    ],
    "correctAnswer": 0,
    "explanation": "L’éradication est nécessaire pour éviter les rechutes."
  },
  {
    "id": "tryp_treat_19",
    "axis": "treatment",
    "question": "Quel traitement est contre-indiqué au stade neurologique de la THA ?",
    "options": [
      "Pentamidine",
      "Mélarsoprol",
      "NECT",
      "Eflornithine"
    ],
    "correctAnswer": 0,
    "explanation": "La pentamidine ne traverse pas la BHE."
  },
  {
    "id": "tryp_treat_20",
    "axis": "treatment",
    "question": "Quel principe général s’applique au traitement des trypanosomiases ?",
    "options": [
      "Traitement spécifique selon espèce et stade",
      "Même traitement pour toutes les formes",
      "Traitement uniquement symptomatique",
      "Traitement empirique sans diagnostic"
    ],
    "correctAnswer": 0,
    "explanation": "Le choix thérapeutique dépend du parasite et du stade."
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
