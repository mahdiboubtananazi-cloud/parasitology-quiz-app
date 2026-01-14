// ==========================================
// 1. MORPHOLOGIE (15 Questions)
// ==========================================
const morphologyQuestions = [
  {
    "id": "toxo_morph_1",
    "axis": "morphology",
    "question": "Quelle forme parasitaire est responsable de la phase aiguë de l'infection et circule dans le sang ?",
    "options": ["Tachyzoïte", "Bradyzoïte", "Sporozoïte", "Mérozoïte"],
    "correctAnswer": 0,
    "explanation": "Le tachyzoïte est la forme mobile, en croissant, responsable de la dissémination aiguë."
  },
  {
    "id": "toxo_morph_2",
    "axis": "morphology",
    "question": "Quelle forme de Toxoplasma gondii est retrouvée dans les kystes tissulaires chroniques ?",
    "options": ["Bradyzoïte", "Tachyzoïte", "Ookyste", "Sporozoïte libre"],
    "correctAnswer": 0,
    "explanation": "Les bradyzoïtes sont des formes lentes, regroupées dans des kystes persistants."
  },
  {
    "id": "toxo_morph_3",
    "axis": "morphology",
    "question": "Quelle est la morphologie typique du tachyzoïte de Toxoplasma gondii ?",
    "options": ["Forme arquée en croissant", "Forme sphérique", "Forme allongée flagellée", "Forme amiboïde"],
    "correctAnswer": 0,
    "explanation": "Le tachyzoïte a une forme en demi-lune caractéristique."
  },
  {
    "id": "toxo_morph_4",
    "axis": "morphology",
    "question": "Quelle structure permet à Toxoplasma gondii de pénétrer activement dans les cellules ?",
    "options": ["Complexe apical", "Flagelle", "Pseudopodes", "Disque adhésif"],
    "correctAnswer": 0,
    "explanation": "Le complexe apical est typique des Apicomplexa."
  },
  {
    "id": "toxo_morph_5",
    "axis": "morphology",
    "question": "Dans quelle cellule humaine observe-t-on préférentiellement les kystes de Toxoplasma ?",
    "options": ["Cellules nerveuses et musculaires", "Hépatocytes", "Entérocytes", "Érythrocytes"],
    "correctAnswer": 0,
    "explanation": "Les kystes persistent surtout dans le cerveau et les muscles."
  },
  {
    "id": "toxo_morph_6",
    "axis": "morphology",
    "question": "Quelle est la taille approximative d’un tachyzoïte ?",
    "options": ["5 à 7 µm", "20 à 30 µm", "1 à 2 µm", "50 µm"],
    "correctAnswer": 0,
    "explanation": "Le tachyzoïte est une petite forme intracellulaire."
  },
  {
    "id": "toxo_morph_7",
    "axis": "morphology",
    "question": "Quelle est la caractéristique nucléaire du tachyzoïte ?",
    "options": ["Noyau unique central", "Deux noyaux périphériques", "Noyau fragmenté", "Absence de noyau"],
    "correctAnswer": 0,
    "explanation": "Le tachyzoïte possède un noyau unique bien individualisé."
  },
  {
    "id": "toxo_morph_8",
    "axis": "morphology",
    "question": "Quelle forme parasitaire est excrétée dans les selles du chat ?",
    "options": ["Ookyste non sporulé", "Tachyzoïte", "Bradyzoïte", "Sporozoïte libre"],
    "correctAnswer": 0,
    "explanation": "Le chat élimine des ookystes immatures dans l’environnement."
  },
  {
    "id": "toxo_morph_9",
    "axis": "morphology",
    "question": "Combien de sporocystes contient un ookyste mature de Toxoplasma gondii ?",
    "options": ["Deux sporocystes", "Quatre sporocystes", "Un seul sporocyste", "Huit sporocystes"],
    "correctAnswer": 0,
    "explanation": "Chaque ookyste contient 2 sporocystes."
  },
  {
    "id": "toxo_morph_10",
    "axis": "morphology",
    "question": "Combien de sporozoïtes retrouve-t-on dans un ookyste mature ?",
    "options": ["Quatre sporozoïtes", "Deux sporozoïtes", "Huit sporozoïtes", "Un sporozoïte"],
    "correctAnswer": 0,
    "explanation": "Chaque sporocyste contient deux sporozoïtes."
  },
  {
    "id": "toxo_morph_11",
    "axis": "morphology",
    "question": "Quelle est la forme infectante pour l’homme lors de la consommation de viande insuffisamment cuite ?",
    "options": ["Bradyzoïtes dans les kystes", "Ookystes non sporulés", "Tachyzoïtes libres", "Sporozoïtes sanguins"],
    "correctAnswer": 0,
    "explanation": "Les kystes tissulaires sont transmis par la viande."
  },
  {
    "id": "toxo_morph_12",
    "axis": "morphology",
    "question": "Quelle caractéristique distingue Toxoplasma des protozoaires flagellés ?",
    "options": ["Absence de flagelle chez l’adulte", "Présence d’un disque adhésif", "Mobilité amiboïde", "Membrane ondulante"],
    "correctAnswer": 0,
    "explanation": "Toxoplasma est un Apicomplexa non flagellé."
  },
  {
    "id": "toxo_morph_13",
    "axis": "morphology",
    "question": "Quelle structure intracellulaire est observée autour du parasite après invasion ?",
    "options": ["Vacuole parasitophore", "Lysosome fusionné", "Capsule fibreuse", "Endosome tardif"],
    "correctAnswer": 0,
    "explanation": "La vacuole parasitophore protège le parasite de la digestion cellulaire."
  },
  {
    "id": "toxo_morph_14",
    "axis": "morphology",
    "question": "Quelle coloration permet de visualiser les tachyzoïtes en histologie ?",
    "options": ["Giemsa", "Ziehl-Neelsen", "Gram", "Argentique"],
    "correctAnswer": 0,
    "explanation": "La coloration de Giemsa est classiquement utilisée."
  },
  {
    "id": "toxo_morph_15",
    "axis": "morphology",
    "question": "À quel groupe parasitaire appartient Toxoplasma gondii ?",
    "options": ["Apicomplexa", "Amoebozoa", "Flagellés", "Ciliés"],
    "correctAnswer": 0,
    "explanation": "Toxoplasma est un protozoaire du phylum Apicomplexa."
  }
];
// ==========================================
// 2. CYCLE DE VIE (20 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    "id": "toxo_cycle_1",
    "axis": "lifecycle",
    "question": "Quel est l’hôte définitif de Toxoplasma gondii ?",
    "options": ["Le chat et les autres félidés", "L’homme", "Les ruminants", "Les oiseaux"],
    "correctAnswer": 0,
    "explanation": "La reproduction sexuée du parasite a lieu uniquement chez les félidés."
  },
  {
    "id": "toxo_cycle_2",
    "axis": "lifecycle",
    "question": "Quelle forme parasitaire est éliminée dans les selles du chat après primo-infection ?",
    "options": ["Ookystes non sporulés", "Ookystes sporulés", "Bradyzoïtes", "Tachyzoïtes"],
    "correctAnswer": 0,
    "explanation": "Les ookystes sont excrétés immatures et sporulent dans l’environnement."
  },
  {
    "id": "toxo_cycle_3",
    "axis": "lifecycle",
    "question": "Quelle est la principale voie de contamination humaine par la viande ?",
    "options": ["Ingestion de kystes tissulaires (bradyzoïtes)", "Inhalation d’ookystes", "Piqûre d’insecte", "Contact cutané direct"],
    "correctAnswer": 0,
    "explanation": "Les kystes persistent dans la viande crue ou insuffisamment cuite."
  },
  {
    "id": "toxo_cycle_4",
    "axis": "lifecycle",
    "question": "Quelle est la source principale de contamination par les végétaux ?",
    "options": ["Ookystes sporulés présents dans le sol", "Bradyzoïtes musculaires", "Tachyzoïtes sanguins", "Sporozoïtes libres"],
    "correctAnswer": 0,
    "explanation": "Les crudités peuvent être contaminées par des ookystes sporulés."
  },
  {
    "id": "toxo_cycle_5",
    "axis": "lifecycle",
    "question": "Après ingestion, quelle forme parasitaire est libérée dans l’intestin humain ?",
    "options": ["Sporozoïtes ou bradyzoïtes", "Ookystes entiers", "Tachyzoïtes uniquement", "Gamétocytes"],
    "correctAnswer": 0,
    "explanation": "Les ookystes libèrent des sporozoïtes, les kystes des bradyzoïtes."
  },
  {
    "id": "toxo_cycle_6",
    "axis": "lifecycle",
    "question": "Quelle transformation survient rapidement après l’infection chez l’hôte intermédiaire ?",
    "options": ["Différenciation en tachyzoïtes", "Formation immédiate de kystes", "Sporogonie", "Gamogonie"],
    "correctAnswer": 0,
    "explanation": "Les tachyzoïtes assurent la dissémination systémique."
  },
  {
    "id": "toxo_cycle_7",
    "axis": "lifecycle",
    "question": "Quel mécanisme permet la dissémination rapide de Toxoplasma dans l’organisme ?",
    "options": ["Multiplication intracellulaire des tachyzoïtes", "Migration des kystes", "Sporulation interne", "Division binaire extracellulaire"],
    "correctAnswer": 0,
    "explanation": "Les tachyzoïtes envahissent de nombreuses cellules."
  },
  {
    "id": "toxo_cycle_8",
    "axis": "lifecycle",
    "question": "À quel moment se forment les kystes tissulaires chez l’homme ?",
    "options": ["Lors du contrôle immunitaire de l’infection", "Dès l’ingestion", "Uniquement chez le fœtus", "Pendant la sporogonie"],
    "correctAnswer": 0,
    "explanation": "La pression immunitaire induit la transformation en bradyzoïtes."
  },
  {
    "id": "toxo_cycle_9",
    "axis": "lifecycle",
    "question": "Quels organes sont préférentiellement le siège des kystes de Toxoplasma ?",
    "options": ["Cerveau et muscles", "Foie et rate", "Poumons et reins", "Intestin grêle"],
    "correctAnswer": 0,
    "explanation": "Les tissus à longue durée de vie hébergent les kystes."
  },
  {
    "id": "toxo_cycle_10",
    "axis": "lifecycle",
    "question": "Quelle est la condition nécessaire pour que l’ookyste devienne infectant dans l’environnement ?",
    "options": ["Sporulation en 1 à 5 jours", "Contact avec un hôte", "Congélation prolongée", "Exposition à l’acide gastrique"],
    "correctAnswer": 0,
    "explanation": "La sporulation dépend de l’oxygène et du temps."
  },
  {
    "id": "toxo_cycle_11",
    "axis": "lifecycle",
    "question": "Quelle est la particularité du cycle de Toxoplasma chez le chat ?",
    "options": ["Présence d’une reproduction sexuée intestinale", "Absence de kystes tissulaires", "Cycle uniquement sanguin", "Transmission transplacentaire systématique"],
    "correctAnswer": 0,
    "explanation": "La gamogonie est spécifique des félidés."
  },
  {
    "id": "toxo_cycle_12",
    "axis": "lifecycle",
    "question": "Quelle est la principale voie de transmission de la toxoplasmose congénitale ?",
    "options": ["Passage transplacentaire des tachyzoïtes", "Ingestion de kystes par le fœtus", "Contamination lors de l’accouchement", "Allaitement"],
    "correctAnswer": 0,
    "explanation": "La transmission se fait in utero lors de la primo-infection maternelle."
  },
  {
    "id": "toxo_cycle_13",
    "axis": "lifecycle",
    "question": "À quel moment de la grossesse le risque de transmission fœtale est-il le plus élevé ?",
    "options": ["Troisième trimestre", "Premier trimestre", "Période préconceptionnelle", "Post-partum"],
    "correctAnswer": 0,
    "explanation": "La transmission augmente avec l’âge gestationnel."
  },
  {
    "id": "toxo_cycle_14",
    "axis": "lifecycle",
    "question": "Quand surviennent les formes cliniques les plus graves de toxoplasmose congénitale ?",
    "options": ["Primo-infection au premier trimestre", "Primo-infection au troisième trimestre", "Réinfection maternelle", "Infection paternelle"],
    "correctAnswer": 0,
    "explanation": "Une infection précoce entraîne des lésions sévères."
  },
  {
    "id": "toxo_cycle_15",
    "axis": "lifecycle",
    "question": "Pourquoi l’homme est-il considéré comme un hôte intermédiaire ?",
    "options": ["Absence de reproduction sexuée chez l’homme", "Absence de kystes tissulaires", "Cycle limité au tube digestif", "Transmission directe interhumaine"],
    "correctAnswer": 0,
    "explanation": "La reproduction sexuée est exclusive des félidés."
  },
  {
    "id": "toxo_cycle_16",
    "axis": "lifecycle",
    "question": "Quelle forme parasitaire est responsable de la persistance à vie de l’infection ?",
    "options": ["Bradyzoïtes enkystés", "Tachyzoïtes", "Sporozoïtes", "Gamètes"],
    "correctAnswer": 0,
    "explanation": "Les kystes tissulaires persistent malgré l’immunité."
  },
  {
    "id": "toxo_cycle_17",
    "axis": "lifecycle",
    "question": "Quel événement peut réactiver une toxoplasmose latente ?",
    "options": ["Immunodépression", "Exposition solaire", "Régime alimentaire", "Antibiothérapie courte"],
    "correctAnswer": 0,
    "explanation": "La baisse de l’immunité permet la réactivation des bradyzoïtes."
  },
  {
    "id": "toxo_cycle_18",
    "axis": "lifecycle",
    "question": "Quel est le rôle épidémiologique principal du chat domestique ?",
    "options": ["Contaminer l’environnement par les ookystes", "Transmettre directement à l’homme par morsure", "Maintenir les tachyzoïtes sanguins", "Servir uniquement de réservoir passif"],
    "correctAnswer": 0,
    "explanation": "Le chat dissémine les ookystes dans le milieu extérieur."
  },
  {
    "id": "toxo_cycle_19",
    "axis": "lifecycle",
    "question": "Combien de temps un chat excrète-t-il généralement des ookystes après infection ?",
    "options": ["1 à 3 semaines", "Toute sa vie", "Quelques heures", "Plusieurs années"],
    "correctAnswer": 0,
    "explanation": "L’excrétion est transitoire après primo-infection."
  },
  {
    "id": "toxo_cycle_20",
    "axis": "lifecycle",
    "question": "Quelle mesure rompt efficacement le cycle de transmission alimentaire ?",
    "options": ["Cuisson complète de la viande", "Congélation courte", "Salage seul", "Marinade acide"],
    "correctAnswer": 0,
    "explanation": "La cuisson détruit les kystes tissulaires."
  }
];
// ==========================================
// 3. CLINIQUE (25 Questions)
// ==========================================
const clinicalQuestions = [
  {
    "id": "toxo_clin_1",
    "axis": "clinical",
    "question": "Quel est le risque et la gravité de la toxoplasmose congénitale lors d’une primo-infection maternelle au 1er trimestre ?",
    "options": [
      "Risque faible mais gravité maximale",
      "Risque élevé et gravité maximale",
      "Risque faible et gravité faible",
      "Risque élevé et gravité faible"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission est rare au 1er trimestre, mais les atteintes fœtales sont sévères."
  },
  {
    "id": "toxo_clin_2",
    "axis": "clinical",
    "question": "Comment évoluent le risque et la gravité de la toxoplasmose congénitale au 3e trimestre ?",
    "options": [
      "Risque élevé mais gravité moindre",
      "Risque faible mais gravité maximale",
      "Risque nul et gravité nulle",
      "Risque modéré et gravité maximale"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission augmente avec l’âge gestationnel, mais les formes sont moins graves."
  },
  {
    "id": "toxo_clin_3",
    "axis": "clinical",
    "question": "Quelle est la triade classique de la toxoplasmose congénitale (Triade de Sabin) ?",
    "options": [
      "Hydrocéphalie, calcifications intracrâniennes, choriorétinite",
      "Microcéphalie, convulsions, surdité",
      "Anémie, ictère, hépatosplénomégalie",
      "Méningite, encéphalite, cécité"
    ],
    "correctAnswer": 0,
    "explanation": "La triade de Sabin est évocatrice de toxoplasmose congénitale."
  },
  {
    "id": "toxo_clin_4",
    "axis": "clinical",
    "question": "Quelle manifestation oculaire est typique de la toxoplasmose congénitale ?",
    "options": [
      "Choriorétinite",
      "Cataracte congénitale",
      "Glaucome néonatal",
      "Rétinopathie diabétique"
    ],
    "correctAnswer": 0,
    "explanation": "La choriorétinite peut évoluer vers des troubles visuels sévères."
  },
  {
    "id": "toxo_clin_5",
    "axis": "clinical",
    "question": "Quel signe neurologique est fréquemment associé à la toxoplasmose congénitale sévère ?",
    "options": [
      "Hydrocéphalie",
      "Myéloméningocèle",
      "Spina bifida",
      "Ataxie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "L’hydrocéphalie résulte de l’atteinte cérébrale."
  },
  {
    "id": "toxo_clin_6",
    "axis": "clinical",
    "question": "Quel est le tableau clinique le plus fréquent de la toxoplasmose acquise chez l’immunocompétent ?",
    "options": [
      "Forme asymptomatique ou pseudo-grippale",
      "Méningo-encéphalite grave",
      "Atteinte digestive sévère",
      "Choc septique"
    ],
    "correctAnswer": 0,
    "explanation": "La majorité des infections sont bénignes ou asymptomatiques."
  },
  {
    "id": "toxo_clin_7",
    "axis": "clinical",
    "question": "Quelle adénopathie est typiquement observée dans la toxoplasmose acquise ?",
    "options": [
      "Adénopathies cervicales postérieures",
      "Adénopathies inguinales douloureuses",
      "Adénopathies médiastinales",
      "Adénopathies généralisées nécrotiques"
    ],
    "correctAnswer": 0,
    "explanation": "Les adénopathies sont fermes, indolores et persistantes."
  },
  {
    "id": "toxo_clin_8",
    "axis": "clinical",
    "question": "Quel patient est le plus à risque de toxoplasmose cérébrale ?",
    "options": [
      "Patient VIH avec CD4 < 100/mm³",
      "Sujet immunocompétent",
      "Femme enceinte séronégative",
      "Enfant immunisé"
    ],
    "correctAnswer": 0,
    "explanation": "La réactivation survient surtout en cas d’immunodépression profonde."
  },
  {
    "id": "toxo_clin_9",
    "axis": "clinical",
    "question": "Quel symptôme est typique de la toxoplasmose cérébrale chez le patient VIH ?",
    "options": [
      "Déficit neurologique focal",
      "Diarrhée chronique",
      "Toux sèche isolée",
      "Arthralgies diffuses"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions cérébrales focales entraînent des déficits localisés."
  },
  {
    "id": "toxo_clin_10",
    "axis": "clinical",
    "question": "Quelle anomalie radiologique est la plus évocatrice de toxoplasmose cérébrale ?",
    "options": [
      "Lésions en cocarde multiples avec œdème",
      "Calcifications diffuses pulmonaires",
      "Opacités alvéolaires bilatérales",
      "Atrophie corticale isolée"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions en anneau sont caractéristiques au scanner ou à l’IRM."
  },
  {
    "id": "toxo_clin_11",
    "axis": "clinical",
    "question": "Quel diagnostic différentiel majeur doit être évoqué devant des lésions en cocarde chez le VIH ?",
    "options": [
      "Lymphome cérébral primitif",
      "Tuberculose pulmonaire",
      "Cryptococcose méningée",
      "AVC ischémique"
    ],
    "correctAnswer": 0,
    "explanation": "Le lymphome cérébral est un diagnostic différentiel clé."
  },
  {
    "id": "toxo_clin_12",
    "axis": "clinical",
    "question": "Quel signe général accompagne fréquemment la toxoplasmose cérébrale ?",
    "options": [
      "Fièvre",
      "Bradycardie",
      "Hypotension isolée",
      "Ictère franc"
    ],
    "correctAnswer": 0,
    "explanation": "La fièvre est souvent associée à l’atteinte cérébrale."
  },
  {
    "id": "toxo_clin_13",
    "axis": "clinical",
    "question": "Quelle complication oculaire peut survenir chez l’adulte immunocompétent ?",
    "options": [
      "Récidive de choriorétinite",
      "Décollement de rétine traumatique",
      "Glaucome aigu",
      "Cécité corticale"
    ],
    "correctAnswer": 0,
    "explanation": "La choriorétinite peut récidiver à distance."
  },
  {
    "id": "toxo_clin_14",
    "axis": "clinical",
    "question": "Pourquoi la toxoplasmose congénitale peut-elle être diagnostiquée tardivement ?",
    "options": [
      "Les lésions oculaires peuvent apparaître des années plus tard",
      "Les symptômes sont toujours présents à la naissance",
      "La sérologie est toujours négative",
      "L’infection guérit spontanément"
    ],
    "correctAnswer": 0,
    "explanation": "Les atteintes oculaires peuvent être retardées."
  },
  {
    "id": "toxo_clin_15",
    "axis": "clinical",
    "question": "Quel est le tableau clinique possible chez le nouveau-né atteint de toxoplasmose congénitale ?",
    "options": [
      "Asymptomatique à la naissance",
      "Toujours symptomatique sévère",
      "Uniquement digestif",
      "Exclusivement cutané"
    ],
    "correctAnswer": 0,
    "explanation": "De nombreux nouveau-nés sont asymptomatiques initialement."
  },
  {
    "id": "toxo_clin_16",
    "axis": "clinical",
    "question": "Quelle manifestation est fréquente dans les formes congénitales sévères ?",
    "options": [
      "Convulsions",
      "Asthme",
      "Cardiopathie congénitale isolée",
      "Insuffisance rénale"
    ],
    "correctAnswer": 0,
    "explanation": "Les convulsions traduisent l’atteinte cérébrale."
  },
  {
    "id": "toxo_clin_17",
    "axis": "clinical",
    "question": "Quel est le principal mécanisme de la toxoplasmose cérébrale chez le VIH ?",
    "options": [
      "Réactivation de kystes latents",
      "Primo-infection récente",
      "Transmission nosocomiale",
      "Mutation parasitaire"
    ],
    "correctAnswer": 0,
    "explanation": "La réactivation survient lors de l’immunodépression."
  },
  {
    "id": "toxo_clin_18",
    "axis": "clinical",
    "question": "Quel trouble cognitif peut être observé dans la toxoplasmose cérébrale ?",
    "options": [
      "Altération de l’état mental",
      "Trouble isolé de la mémoire à court terme",
      "Dyslexie",
      "Autisme"
    ],
    "correctAnswer": 0,
    "explanation": "L’encéphalite toxoplasmique altère la vigilance et la cognition."
  },
  {
    "id": "toxo_clin_19",
    "axis": "clinical",
    "question": "Quel signe d’hypertension intracrânienne peut être présent ?",
    "options": [
      "Céphalées avec vomissements",
      "Diarrhée aiguë",
      "Douleur thoracique",
      "Polyurie"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions cérébrales entraînent une HTIC."
  },
  {
    "id": "toxo_clin_20",
    "axis": "clinical",
    "question": "Chez la femme enceinte, quel est le principal enjeu clinique de la toxoplasmose ?",
    "options": [
      "Le risque de transmission fœtale",
      "La gravité maternelle",
      "La chronicité de l’infection",
      "La transmission sexuelle"
    ],
    "correctAnswer": 0,
    "explanation": "La mère est souvent paucisymptomatique."
  },
  {
    "id": "toxo_clin_21",
    "axis": "clinical",
    "question": "Quel signe clinique peut orienter vers une toxoplasmose acquise récente ?",
    "options": [
      "Syndrome pseudo-mononucléosique",
      "Ictère cholestatique",
      "Éruption vésiculeuse",
      "Hémorragies cutanées"
    ],
    "correctAnswer": 0,
    "explanation": "La toxoplasmose peut mimer une mononucléose."
  },
  {
    "id": "toxo_clin_22",
    "axis": "clinical",
    "question": "Quelle atteinte est rare dans la toxoplasmose chez l’immunocompétent ?",
    "options": [
      "Atteinte cérébrale sévère",
      "Adénopathies",
      "Asthénie",
      "Fièvre modérée"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes graves sont exceptionnelles hors immunodépression."
  },
  {
    "id": "toxo_clin_23",
    "axis": "clinical",
    "question": "Quelle séquelle est la plus redoutée à long terme chez l’enfant infecté in utero ?",
    "options": [
      "Déficit visuel",
      "Anémie chronique",
      "Retard pubertaire",
      "Insuffisance hépatique"
    ],
    "correctAnswer": 0,
    "explanation": "Les lésions oculaires peuvent altérer durablement la vision."
  },
  {
    "id": "toxo_clin_24",
    "axis": "clinical",
    "question": "Quel signe peut révéler une toxoplasmose cérébrale évoluée ?",
    "options": [
      "Troubles de la conscience",
      "Toux productive",
      "Rash cutané diffus",
      "Polyarthrite"
    ],
    "correctAnswer": 0,
    "explanation": "L’encéphalite peut évoluer vers le coma."
  },
  {
    "id": "toxo_clin_25",
    "axis": "clinical",
    "question": "Quelle association clinique est la plus évocatrice d’une toxoplasmose congénitale ?",
    "options": [
      "Choriorétinite + calcifications intracrâniennes",
      "Ictère + ascite",
      "Malformations cardiaques + cyanose",
      "Diarrhée chronique + dénutrition"
    ],
    "correctAnswer": 0,
    "explanation": "Cette association est hautement suggestive."
  }
];
// ==========================================
// 4. DIAGNOSTIC (25 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    "id": "toxo_diag_1",
    "axis": "diagnosis",
    "question": "Que signifie une sérologie toxoplasmique IgG négatives et IgM négatives ?",
    "options": [
      "Absence d’immunité, sujet réceptif",
      "Immunité ancienne",
      "Infection récente",
      "Réactivation chronique"
    ],
    "correctAnswer": 0,
    "explanation": "IgG- / IgM- indique l'absence de contact antérieur avec Toxoplasma gondii."
  },
  {
    "id": "toxo_diag_2",
    "axis": "diagnosis",
    "question": "Quelle interprétation correspond à IgG positives et IgM négatives ?",
    "options": [
      "Immunité ancienne",
      "Infection aiguë récente",
      "Faux positif",
      "Absence d’immunité"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgG persistantes sans IgM traduisent une infection ancienne et une immunité acquise."
  },
  {
    "id": "toxo_diag_3",
    "axis": "diagnosis",
    "question": "Que suggère une sérologie IgG positives et IgM positives ?",
    "options": [
      "Infection récente ou IgM persistantes",
      "Immunité ancienne certaine",
      "Absence de contact avec le parasite",
      "Erreur de prélèvement"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgM peuvent persister plusieurs mois, nécessitant des tests complémentaires."
  },
  {
    "id": "toxo_diag_4",
    "axis": "diagnosis",
    "question": "Pourquoi la présence d’IgM seules est-elle insuffisante pour dater une infection ?",
    "options": [
      "Les IgM peuvent persister longtemps",
      "Les IgM disparaissent en quelques jours",
      "Les IgM sont toujours faussement positives",
      "Les IgM n’apparaissent jamais chez l’adulte"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgM peuvent rester détectables plus d’un an après l’infection."
  },
  {
    "id": "toxo_diag_5",
    "axis": "diagnosis",
    "question": "Quel test est essentiel pour dater une infection toxoplasmique chez la femme enceinte ?",
    "options": [
      "Test d’avidité des IgG",
      "Dosage des IgM seules",
      "Numération formule sanguine",
      "Culture parasitaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’avidité des IgG permet de distinguer infection récente et ancienne."
  },
  {
    "id": "toxo_diag_6",
    "axis": "diagnosis",
    "question": "Que traduit une avidité élevée des IgG toxoplasmiques ?",
    "options": [
      "Infection ancienne",
      "Infection récente",
      "Réactivation aiguë",
      "Erreur analytique"
    ],
    "correctAnswer": 0,
    "explanation": "Une forte avidité exclut une infection récente (≥ 4 mois)."
  },
  {
    "id": "toxo_diag_7",
    "axis": "diagnosis",
    "question": "Quelle conclusion tirer d’une avidité basse des IgG ?",
    "options": [
      "Infection récente possible",
      "Immunité définitive",
      "Absence de toxoplasmose",
      "Réinfection certaine"
    ],
    "correctAnswer": 0,
    "explanation": "Une avidité basse suggère une infection récente mais n’est pas absolue."
  },
  {
    "id": "toxo_diag_8",
    "axis": "diagnosis",
    "question": "Chez une femme enceinte IgG-/IgM-, quelle conduite diagnostique est recommandée ?",
    "options": [
      "Surveillance sérologique régulière",
      "Aucun contrôle ultérieur",
      "Traitement systématique",
      "Amniocentèse immédiate"
    ],
    "correctAnswer": 0,
    "explanation": "La femme est non immunisée et doit être surveillée."
  },
  {
    "id": "toxo_diag_9",
    "axis": "diagnosis",
    "question": "Quel examen est de référence pour le diagnostic anténatal de la toxoplasmose fœtale ?",
    "options": [
      "PCR sur liquide amniotique",
      "Sérologie maternelle",
      "Échographie seule",
      "Hémoculture fœtale"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR est sensible et spécifique pour détecter l’ADN parasitaire."
  },
  {
    "id": "toxo_diag_10",
    "axis": "diagnosis",
    "question": "À partir de quel délai après la contamination maternelle la PCR sur liquide amniotique est-elle fiable ?",
    "options": [
      "Après 4 semaines",
      "Après 48 heures",
      "Après 7 jours",
      "Immédiatement"
    ],
    "correctAnswer": 0,
    "explanation": "Un délai est nécessaire pour que le parasite atteigne le liquide amniotique."
  },
  {
    "id": "toxo_diag_11",
    "axis": "diagnosis",
    "question": "Quel examen n’est pas utile pour diagnostiquer une toxoplasmose acquise chez l’adulte ?",
    "options": [
      "Coproculture",
      "Sérologie",
      "PCR sanguine",
      "Imagerie cérébrale chez immunodéprimé"
    ],
    "correctAnswer": 0,
    "explanation": "Toxoplasma n’est pas recherché dans les selles chez l’homme."
  },
  {
    "id": "toxo_diag_12",
    "axis": "diagnosis",
    "question": "Chez un patient VIH avec suspicion de toxoplasmose cérébrale, quel examen est prioritaire ?",
    "options": [
      "IRM cérébrale",
      "Ponction lombaire systématique",
      "Sérologie IgM",
      "Radiographie pulmonaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’IRM montre des lésions évocatrices en cocarde."
  },
  {
    "id": "toxo_diag_13",
    "axis": "diagnosis",
    "question": "Quelle valeur diagnostique a la sérologie toxoplasmique chez le patient VIH ?",
    "options": [
      "IgG positives orientent vers une réactivation",
      "IgM positives confirment toujours le diagnostic",
      "La sérologie est toujours négative",
      "Elle n’a aucune utilité"
    ],
    "correctAnswer": 0,
    "explanation": "La majorité des toxoplasmoses cérébrales sont des réactivations."
  },
  {
    "id": "toxo_diag_14",
    "axis": "diagnosis",
    "question": "Quel élément renforce le diagnostic de toxoplasmose cérébrale plutôt que lymphome cérébral ?",
    "options": [
      "Régression des lésions sous traitement probabiliste",
      "IgM très élevées",
      "Biopsie systématique",
      "Absence de fièvre"
    ],
    "correctAnswer": 0,
    "explanation": "L’amélioration clinique et radiologique est un argument clé."
  },
  {
    "id": "toxo_diag_15",
    "axis": "diagnosis",
    "question": "Quel examen permet de confirmer une toxoplasmose oculaire ?",
    "options": [
      "Examen du fond d’œil",
      "Sérologie seule",
      "Échographie abdominale",
      "PCR salivaire"
    ],
    "correctAnswer": 0,
    "explanation": "La choriorétinite a un aspect clinique caractéristique."
  },
  {
    "id": "toxo_diag_16",
    "axis": "diagnosis",
    "question": "Quel est l’intérêt de la PCR dans la toxoplasmose ?",
    "options": [
      "Détection directe de l’ADN parasitaire",
      "Évaluation de l’immunité",
      "Suivi de la réponse sérologique",
      "Dépistage de masse"
    ],
    "correctAnswer": 0,
    "explanation": "La PCR est un outil de diagnostic direct."
  },
  {
    "id": "toxo_diag_17",
    "axis": "diagnosis",
    "question": "Pourquoi l’échographie fœtale est-elle insuffisante seule ?",
    "options": [
      "Les anomalies peuvent être tardives ou absentes",
      "Elle est toujours normale",
      "Elle est trop invasive",
      "Elle remplace la PCR"
    ],
    "correctAnswer": 0,
    "explanation": "Des anomalies peuvent apparaître secondairement."
  },
  {
    "id": "toxo_diag_18",
    "axis": "diagnosis",
    "question": "Quel signe échographique peut évoquer une toxoplasmose congénitale ?",
    "options": [
      "Hydrocéphalie",
      "Polydactylie",
      "Omphalocèle",
      "Cardiomégalie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "L’hydrocéphalie est un signe d’atteinte cérébrale fœtale."
  },
  {
    "id": "toxo_diag_19",
    "axis": "diagnosis",
    "question": "Chez le nouveau-né, quel examen confirme une toxoplasmose congénitale ?",
    "options": [
      "IgM spécifiques positives",
      "IgG maternelles persistantes",
      "Avidité IgG élevée",
      "Sérologie négative"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgM ne traversent pas le placenta."
  },
  {
    "id": "toxo_diag_20",
    "axis": "diagnosis",
    "question": "Pourquoi la persistance des IgG chez le nourrisson après 12 mois est-elle suspecte ?",
    "options": [
      "Elle traduit une production propre",
      "Elle est toujours normale",
      "Elle correspond aux IgG maternelles",
      "Elle est transitoire"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgG maternelles disparaissent avant 1 an."
  },
  {
    "id": "toxo_diag_21",
    "axis": "diagnosis",
    "question": "Quel profil sérologique maternel impose une évaluation urgente en grossesse ?",
    "options": [
      "IgG+/IgM+",
      "IgG+/IgM-",
      "IgG-/IgM-",
      "IgG- isolées"
    ],
    "correctAnswer": 0,
    "explanation": "Il faut dater l’infection par avidité."
  },
  {
    "id": "toxo_diag_22",
    "axis": "diagnosis",
    "question": "Quel est le principal piège diagnostique de la toxoplasmose ?",
    "options": [
      "Persistance prolongée des IgM",
      "Disparition rapide des IgG",
      "Négativité constante de la PCR",
      "Contagiosité interhumaine"
    ],
    "correctAnswer": 0,
    "explanation": "Les IgM peuvent induire une fausse suspicion de primo-infection."
  },
  {
    "id": "toxo_diag_23",
    "axis": "diagnosis",
    "question": "Dans quel cas la PCR sanguine est-elle particulièrement utile ?",
    "options": [
      "Patient immunodéprimé",
      "Sujet immunocompétent asymptomatique",
      "Dépistage de routine",
      "Suivi d’immunité ancienne"
    ],
    "correctAnswer": 0,
    "explanation": "La charge parasitaire est plus élevée chez l’immunodéprimé."
  },
  {
    "id": "toxo_diag_24",
    "axis": "diagnosis",
    "question": "Quelle stratégie diagnostique est recommandée en cas de suspicion de toxoplasmose cérébrale ?",
    "options": [
      "Traitement probabiliste + imagerie",
      "Biopsie cérébrale immédiate",
      "Sérologie seule",
      "Attente sans traitement"
    ],
    "correctAnswer": 0,
    "explanation": "L’évolution sous traitement est un élément diagnostique."
  },
  {
    "id": "toxo_diag_25",
    "axis": "diagnosis",
    "question": "Quel test a aujourd’hui surtout une valeur historique en toxoplasmose ?",
    "options": [
      "Isolement du parasite en culture",
      "PCR",
      "Test d’avidité",
      "Sérologie ELISA"
    ],
    "correctAnswer": 0,
    "explanation": "La culture est longue et peu utilisée en pratique."
  }
];
// ==========================================
// 5. TRAITEMENT (15 Questions)
// ==========================================
const treatmentQuestions = [
  {
    "id": "toxo_treat_1",
    "axis": "treatment",
    "question": "Quel est le traitement de prophylaxie primaire recommandé chez la femme enceinte en cas de primo-infection sans atteinte fœtale prouvée ?",
    "options": [
      "Spiramycine (Rovamycine)",
      "Pyriméthamine seule",
      "Sulfadiazine seule",
      "Métronidazole"
    ],
    "correctAnswer": 0,
    "explanation": "La spiramycine réduit le risque de transmission materno-fœtale."
  },
  {
    "id": "toxo_treat_2",
    "axis": "treatment",
    "question": "Pourquoi la spiramycine est-elle privilégiée en début de grossesse ?",
    "options": [
      "Elle est non tératogène",
      "Elle traverse mieux le placenta",
      "Elle éradique les kystes",
      "Elle stimule l’immunité fœtale"
    ],
    "correctAnswer": 0,
    "explanation": "La spiramycine est sûre au 1er trimestre."
  },
  {
    "id": "toxo_treat_3",
    "axis": "treatment",
    "question": "Quel schéma thérapeutique est indiqué en cas de toxoplasmose fœtale confirmée ?",
    "options": [
      "Pyriméthamine + Sulfadiazine + Acide folinique",
      "Spiramycine seule",
      "Amphotéricine B",
      "Albendazole"
    ],
    "correctAnswer": 0,
    "explanation": "Ce traitement est le plus efficace sur les formes actives."
  },
  {
    "id": "toxo_treat_4",
    "axis": "treatment",
    "question": "Pourquoi associe-t-on l’acide folinique à la pyriméthamine ?",
    "options": [
      "Pour prévenir la toxicité médullaire",
      "Pour augmenter l’efficacité antiparasitaire",
      "Pour améliorer l’absorption digestive",
      "Pour prévenir les réactions allergiques"
    ],
    "correctAnswer": 0,
    "explanation": "La pyriméthamine est antifolique et peut induire une aplasie."
  },
  {
    "id": "toxo_treat_5",
    "axis": "treatment",
    "question": "Quel traitement est recommandé pour une toxoplasmose cérébrale chez un patient VIH+ ?",
    "options": [
      "Pyriméthamine + Sulfadiazine + Acide folinique",
      "Spiramycine seule",
      "Chloroquine",
      "Cotrimoxazole seul"
    ],
    "correctAnswer": 0,
    "explanation": "C’est le traitement de référence des formes sévères."
  },
  {
    "id": "toxo_treat_6",
    "axis": "treatment",
    "question": "Quelle est la durée habituelle du traitement de la toxoplasmose cérébrale ?",
    "options": [
      "Au moins 6 semaines",
      "7 jours",
      "14 jours",
      "3 mois systématiques"
    ],
    "correctAnswer": 0,
    "explanation": "Un traitement prolongé est nécessaire pour éviter les rechutes."
  },
  {
    "id": "toxo_treat_7",
    "axis": "treatment",
    "question": "Quel médicament est contre-indiqué au 1er trimestre de grossesse ?",
    "options": [
      "Pyriméthamine",
      "Spiramycine",
      "Acide folinique",
      "Paracétamol"
    ],
    "correctAnswer": 0,
    "explanation": "La pyriméthamine est potentiellement tératogène."
  },
  {
    "id": "toxo_treat_8",
    "axis": "treatment",
    "question": "Quelle mesure hygiéno-diététique est essentielle pour prévenir la toxoplasmose ?",
    "options": [
      "Consommer de la viande bien cuite",
      "Boire du lait cru",
      "Consommer des crudités non lavées",
      "Nettoyer la litière du chat sans protection"
    ],
    "correctAnswer": 0,
    "explanation": "Les kystes sont détruits par une cuisson suffisante."
  },
  {
    "id": "toxo_treat_9",
    "axis": "treatment",
    "question": "Quelle recommandation concerne la manipulation de la litière du chat chez la femme enceinte ?",
    "options": [
      "Éviter ou porter des gants",
      "La nettoyer quotidiennement sans précaution",
      "Utiliser des antibiotiques préventifs",
      "Vacciner le chat"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes sont éliminés dans les selles du chat."
  },
  {
    "id": "toxo_treat_10",
    "axis": "treatment",
    "question": "Pourquoi le lavage soigneux des crudités est-il recommandé ?",
    "options": [
      "Élimination des oocystes présents dans le sol",
      "Destruction des kystes musculaires",
      "Réduction de la charge bactérienne",
      "Amélioration de la digestibilité"
    ],
    "correctAnswer": 0,
    "explanation": "Les oocystes peuvent contaminer les végétaux."
  },
  {
    "id": "toxo_treat_11",
    "axis": "treatment",
    "question": "Quel traitement peut être utilisé en alternative en cas d’allergie aux sulfamides ?",
    "options": [
      "Pyriméthamine + Clindamycine",
      "Spiramycine seule",
      "Métronidazole",
      "Albendazole"
    ],
    "correctAnswer": 0,
    "explanation": "La clindamycine remplace la sulfadiazine."
  },
  {
    "id": "toxo_treat_12",
    "axis": "treatment",
    "question": "Chez le patient VIH, quel est l’objectif du traitement d’entretien ?",
    "options": [
      "Prévenir les rechutes",
      "Guérir définitivement l’infection",
      "Éradiquer les kystes",
      "Remplacer les ARV"
    ],
    "correctAnswer": 0,
    "explanation": "Une prophylaxie secondaire est souvent nécessaire."
  },
  {
    "id": "toxo_treat_13",
    "axis": "treatment",
    "question": "Quelle est la mesure préventive alimentaire la PLUS importante chez la femme enceinte non immunisée ?",
    "options": [
      "Éviter toute viande crue ou peu cuite",
      "Éviter les produits laitiers",
      "Supprimer les fruits",
      "Prendre des antiparasitaires préventifs"
    ],
    "correctAnswer": 0,
    "explanation": "La viande est une source majeure de kystes."
  },
  {
    "id": "toxo_treat_14",
    "axis": "treatment",
    "question": "Pourquoi n’existe-t-il pas de vaccination contre la toxoplasmose humaine ?",
    "options": [
      "Complexité du cycle parasitaire",
      "Manque d’intérêt clinique",
      "Existence d’un traitement curatif simple",
      "Immunité naturelle universelle"
    ],
    "correctAnswer": 0,
    "explanation": "La variabilité immunitaire complique le développement vaccinal."
  },
  {
    "id": "toxo_treat_15",
    "axis": "treatment",
    "question": "Quel est l’objectif principal de la spiramycine pendant la grossesse ?",
    "options": [
      "Réduire la transmission materno-fœtale",
      "Traiter la toxoplasmose cérébrale",
      "Éradiquer les kystes",
      "Stimuler l’immunité maternelle"
    ],
    "correctAnswer": 0,
    "explanation": "Elle agit surtout comme prévention de la transmission."
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
