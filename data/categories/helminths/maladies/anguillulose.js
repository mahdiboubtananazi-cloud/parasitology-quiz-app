export const questions = [
  // =========================
  // MORPHOLOGY & LIFECYCLE (20 questions)
  // =========================
  {
    id: "str_morph_1",
    axis: "morphology",
    question: "Quelle est la particularité morphologique de Strongyloides stercoralis adulte dans l’intestin ?",
    options: ["Femelle parthénogénétique sans mâle", "Présence de mâles et femelles", "Hermaphrodite avec segments visibles", "Mâle plus grand que la femelle"],
    correctAnswer: 0,
    explanation: "Chez Strongyloides stercoralis, seules les femelles parthénogénétiques vivent dans l’hôte, capables de pondre des œufs sans mâle."
  },
  {
    id: "str_morph_2",
    axis: "morphology",
    question: "Les larves filariformes sont :",
    options: ["Infestantes et capables de pénétrer la peau", "Non infectantes et rhabditoïdes", "Présentes uniquement dans les selles", "Utilisées pour la reproduction sexuée dans l’intestin"],
    correctAnswer: 0,
    explanation: "Les larves filariformes sont la forme infectante capable de pénétrer la peau pour initier l’infection chez l’hôte."
  },
  {
    id: "str_morph_3",
    axis: "morphology",
    question: "Les larves rhabditoïdes :",
    options: ["Se développent dans le sol et peuvent devenir filariformes", "Sont infestantes directement dans l’intestin", "Ne vivent que dans le sang", "Sont toujours sexuées"],
    correctAnswer: 0,
    explanation: "Les larves rhabditoïdes sont la forme non infectante, qui se développe librement dans le sol avant de se transformer en larves filariformes."
  },
  {
    id: "str_morph_4",
    axis: "morphology",
    question: "La taille de la femelle adulte intestinale est :",
    options: ["2–3 mm de long", "5–6 cm", "1 mm", "10–12 mm"],
    correctAnswer: 0,
    explanation: "Les femelles adultes parthénogénétiques sont de petite taille, environ 2–3 mm, adaptées à la vie dans la muqueuse intestinale."
  },
  {
    id: "str_morph_5",
    axis: "morphology",
    question: "La cuticule de Strongyloides stercoralis adulte est :",
    options: ["Fine et transparente", "Épaisse et segmentée", "Chitineuse et rigide", "Rougeâtre et striée"],
    correctAnswer: 0,
    explanation: "La cuticule fine et transparente permet le passage et la fixation dans l’épithélium intestinal."
  },
  {
    id: "str_morph_6",
    axis: "morphology",
    question: "Les œufs de Strongyloides :",
    options: ["Se développent en larves dans l’intestin avant d’être excrétés", "Éclosent en larves dans le sol immédiatement", "Sont embryonnés dès la ponte", "Sont operculés comme les trematodes"],
    correctAnswer: 0,
    explanation: "Les œufs pondus par les femelles parthénogénétiques éclosent rapidement dans l’intestin, libérant des larves rhabditoïdes."
  },
  {
    id: "str_morph_7",
    axis: "morphology",
    question: "La femelle adulte intestinale se nourrit de :",
    options: ["Contenu intestinal sans succion de sang", "Sang intestinal", "Mucus uniquement", "Bactéries intestinales"],
    correctAnswer: 0,
    explanation: "La femelle parthénogénétique se nourrit de chyme intestinal et cellules épithéliales, contrairement aux ankylostomes."
  },
  {
    id: "str_morph_8",
    axis: "morphology",
    question: "Les larves filariformes se distinguent des rhabditoïdes par :",
    options: ["Queue fine et effilée, capable de pénétrer la peau", "Corps court et épais, non infectant", "Présence d’opercule", "Segmentations visibles"],
    correctAnswer: 0,
    explanation: "Les filariformes ont une morphologie adaptée à l’infection, avec queue fine et corps élancé, contrairement aux rhabditoïdes."
  },
  {
    id: "str_cycle_1",
    axis: "lifecycle",
    question: "Le cycle auto-infestant endogène est dangereux car :",
    options: ["Les larves peuvent réinfecter le même hôte sans sortie", "Il nécessite un hôte intermédiaire", "Ne survient qu’après ingestion d’œufs", "N’entraîne aucune symptomatologie"],
    correctAnswer: 0,
    explanation: "Les larves filariformes peuvent pénétrer la muqueuse intestinale ou la peau rectale, provoquant une autoinfestation perpétuelle, parfois létale."
  },
  {
    id: "str_cycle_2",
    axis: "lifecycle",
    question: "La larve rhabditoïde excrétée dans les selles peut :",
    options: ["Se développer dans le sol ou devenir filariforme", "Mourir immédiatement", "Se transformer en adulte dans le colon", "Produire œufs embryonnés directement"],
    correctAnswer: 0,
    explanation: "La larve rhabditoïde a deux voies : développement libre dans le sol ou transformation en larve filariforme infectante."
  },
  {
    id: "str_cycle_3",
    axis: "lifecycle",
    question: "La pénétration cutanée par filariforme se produit souvent :",
    options: ["Sur les pieds nus en contact avec le sol contaminé", "Par ingestion d’eau contaminée", "Par inhalation", "Via les muqueuses digestives uniquement"],
    correctAnswer: 0,
    explanation: "Les larves filariformes traversent activement la peau au contact du sol contaminé pour atteindre la circulation sanguine."
  },
  {
    id: "str_cycle_4",
    axis: "lifecycle",
    question: "Après pénétration cutanée, les larves migrent :",
    options: ["Vers les poumons puis la trachée et l’intestin grêle", "Directement dans le colon", "Vers la rate et le foie uniquement", "Rester localisées sous la peau"],
    correctAnswer: 0,
    explanation: "Le trajet classique est cutané → circulation → poumons → trachée → déglutition → intestin grêle."
  },
  {
    id: "str_cycle_5",
    axis: "lifecycle",
    question: "Dans le cycle intestinal, la reproduction est :",
    options: ["Parthénogénétique uniquement", "Sexuée avec mâles et femelles", "Hermaphrodite", "Asexuée dans le sol"],
    correctAnswer: 0,
    explanation: "Chez Strongyloides stercoralis, seules les femelles parthénogénétiques vivent dans l’intestin et pondent des œufs."
  },
  {
    id: "str_cycle_6",
    axis: "lifecycle",
    question: "Le danger majeur de Strongyloides chez les immunodéprimés est :",
    options: ["Hyperinfection par auto-infestation endogène", "Migration cutanée limitée", "Infection pulmonaire unique", "Anémie ferriprive uniquement"],
    correctAnswer: 0,
    explanation: "Chez les patients immunodéprimés, le cycle auto-infestant peut provoquer une hyperinfection systémique souvent fatale."
  },
  {
    id: "str_cycle_7",
    axis: "lifecycle",
    question: "La larve filariforme infestante peut :",
    options: ["Pénétrer la muqueuse rectale ou intestinale lors de l’autoinfestation", "Se transformer en œuf dans l’intestin", "Ne pas survivre dans l’hôte", "Produire des mâles adultes"],
    correctAnswer: 0,
    explanation: "L’autoinfestation endogène implique que les larves filariformes réinfectent le même hôte par pénétration de la muqueuse intestinale ou périnéale."
  },
  {
    id: "str_cycle_8",
    axis: "lifecycle",
    question: "Le cycle libre dans le sol permet :",
    options: ["Développement de larves rhabditoïdes en filariformes", "Reproduction sexuée dans l’hôte", "Propagation par les insectes", "Production directe d’adultes dans le sang"],
    correctAnswer: 0,
    explanation: "Le cycle libre dans le sol produit des larves infectantes pour l’homme, complétant le cycle parasitaire."
  },
  {
    id: "str_cycle_9",
    axis: "lifecycle",
    question: "Les œufs pondus dans l’intestin éclosent :",
    options: ["Rapidement en larves rhabditoïdes dans l’intestin", "Dans le sol uniquement", "Après plusieurs semaines", "Ne donnent jamais de larves dans l’hôte"],
    correctAnswer: 0,
    explanation: "Les œufs pondus par les femelles parthénogénétiques éclosent dans l’intestin, libérant des larves rhabditoïdes prêtes pour excrétion ou auto-infestation."
  },
  {
    id: "str_cycle_10",
    axis: "lifecycle",
    question: "La distinction entre larve rhabditoïde et filariforme repose sur :",
    options: ["Morphologie et capacité infectante", "Taille seulement", "Couleur uniquement", "Présence d’opercule"],
    correctAnswer: 0,
    explanation: "Les larves filariformes sont allongées et infectantes, tandis que les rhabditoïdes sont plus courtes et non infectantes."
  },
  // =========================
  // CLINICAL (20 questions)
  // =========================
  {
    id: "str_clin_1",
    axis: "clinical",
    question: "Le signe pathognomonique de l’anguillulose est :",
    options: ["Larva currens : sillage urticarien rapide sur le tronc ou les cuisses", "Éruption vésiculeuse stagnante", "Pustules purulentes chroniques", "Ulcérations linéaires douloureuses"],
    correctAnswer: 0,
    explanation: "La larva currens correspond à un déplacement rapide (cm/h) de lésions urticariennes linéaires causées par les larves filariformes sous-cutanées, pathognomonique de l’infection."
  },
  {
    id: "str_clin_2",
    axis: "clinical",
    question: "La larva currens se distingue de l’érythème migrant par :",
    options: ["Vitesse de progression rapide (10 cm/h) et localisation préférentielle au tronc et aux fesses", "Vitesse lente (cm/j) et localisation aux pieds", "Présence de pus", "Douleur intense constante"],
    correctAnswer: 0,
    explanation: "Contrairement à l’érythème migrant des larves de toxocarose, la larva currens progresse rapidement et touche typiquement tronc, fesses et cuisses."
  },
  {
    id: "str_clin_3",
    axis: "clinical",
    question: "Quels symptômes digestifs peuvent survenir lors d’une infection chronique ?",
    options: ["Douleurs abdominales, diarrhée intermittente, nausées", "Constipation exclusive", "Vomissements sanglants massifs", "Ictère sévère"],
    correctAnswer: 0,
    explanation: "L’infection chronique modérée entraîne souvent douleurs abdominales diffuses, diarrhée légère et nausées, causées par l’irritation intestinale."
  },
  {
    id: "str_clin_4",
    axis: "clinical",
    question: "Les manifestations pulmonaires se produisent principalement :",
    options: ["Pendant la migration larvaire à travers les poumons", "Lors de l’auto-infestation cutanée", "Uniquement en cas d’anguilulose maligne", "Jamais"],
    correctAnswer: 0,
    explanation: "Les larves filariformes traversent les poumons, provoquant toux, dyspnée et infiltrats transitoires, souvent associés à une hyperéosinophilie."
  },
  {
    id: "str_clin_5",
    axis: "clinical",
    question: "L’anguillulose maligne est caractérisée par :",
    options: ["Hyperinfection avec choc septique et sepsis à Gram négatif", "Diarrhée légère uniquement", "Eczéma chronique", "Ulcération buccale isolée"],
    correctAnswer: 0,
    explanation: "Chez les immunodéprimés, l’auto-infestation massive permet aux larves de transporter des bactéries Gram négatif depuis l’intestin, entraînant sepsis et choc."
  },
  {
    id: "str_clin_6",
    axis: "clinical",
    question: "Les patients à risque d’anguilulose maligne incluent :",
    options: ["Patients sous corticoïdes ou infectés par HTLV-1", "Patients hypertendus sans immunosuppression", "Enfants uniquement", "Personnes vaccinées contre la grippe"],
    correctAnswer: 0,
    explanation: "L’immunosuppression, en particulier par corticoïdes ou infection HTLV-1, favorise l’auto-infestation massive et la forme maligne."
  },
  {
    id: "str_clin_7",
    axis: "clinical",
    question: "L’anguilulose chronique peut entraîner :",
    options: ["Perte de poids, anorexie, fatigue", "Hémorragie digestive majeure", "Ictère fulminant", "Encéphalite virale"],
    correctAnswer: 0,
    explanation: "La malabsorption légère et l’inflammation intestinale causent une perte de poids progressive et fatigue dans l’infection chronique."
  },
  {
    id: "str_clin_8",
    axis: "clinical",
    question: "L’hyperinfection se traduit par :",
    options: ["Multiplication massive de larves filariformes dans intestin et poumons", "Éruption cutanée unique", "Diarrhée légère uniquement", "Hyperleucocytose isolée"],
    correctAnswer: 0,
    explanation: "L’auto-infestation incontrôlée provoque la dissémination rapide de larves à travers intestin, poumons et autres organes."
  },
  {
    id: "str_clin_9",
    axis: "clinical",
    question: "Le choc septique dans l’anguillulose maligne est dû à :",
    options: ["Bactéries intestinales transportées par les larves", "Virus concomitants", "Sécrétion toxique des vers", "Anaphylaxie uniquement"],
    correctAnswer: 0,
    explanation: "Les larves filariformes peuvent véhiculer des bactéries Gram négatif de l’intestin vers la circulation, provoquant sepsis et choc."
  },
  {
    id: "str_clin_10",
    axis: "clinical",
    question: "La diarrhée chronique peut être :",
    options: ["Intermittente et associée à douleurs abdominales", "Sanglante massive", "Toujours absente", "Froide et stérile"],
    correctAnswer: 0,
    explanation: "Les larves adultes irritent la muqueuse intestinale, entraînant diarrhée intermittente, parfois discrète, mais persistante."
  },
  {
    id: "str_clin_11",
    axis: "clinical",
    question: "Les démangeaisons cutanées rapides sont :",
    options: ["Signe de larva currens", "Manifestation d’urticaire alimentaire", "Eczéma chronique", "Pustulose bactérienne"],
    correctAnswer: 0,
    explanation: "Le sillage urticarien en évolution rapide est caractéristique des larves filariformes sous-cutanées, pathognomonique."
  },
  {
    id: "str_clin_12",
    axis: "clinical",
    question: "Les immunodéprimés sous corticoïdes peuvent développer :",
    options: ["Hyperinfection et anguilulose maligne", "Urticaire isolée", "Diarrhée légère", "Fièvre modérée sans complications"],
    correctAnswer: 0,
    explanation: "Les corticoïdes favorisent la multiplication massive de larves et la dissémination systémique, responsable de formes graves."
  },
  {
    id: "str_clin_13",
    axis: "clinical",
    question: "L’infection par HTLV-1 prédispose à :",
    options: ["Hyperinfection et formes graves d’anguillulose", "Diarrhée légère uniquement", "Dermatite de contact", "Anémie ferriprive uniquement"],
    correctAnswer: 0,
    explanation: "L’HTLV-1 réduit la réponse immunitaire cellulaire, favorisant la multiplication des larves et la survenue d’anguilulose maligne."
  },
  {
    id: "str_clin_14",
    axis: "clinical",
    question: "La larva currens se déplace :",
    options: ["Très rapidement (10 cm/h), typiquement tronc, fesses et cuisses", "Très lentement (cm/j), aux pieds", "Uniquement sur les mains", "Jamais sur le tronc"],
    correctAnswer: 0,
    explanation: "Sa vitesse et sa localisation distinguent la larva currens des autres lésions cutanées migrantes."
  },
  {
    id: "str_clin_15",
    axis: "clinical",
    question: "La forme grave de l’anguillulose peut inclure :",
    options: ["Sepsis, choc, atteinte multi-organique", "Simple diarrhée légère", "Éruption isolée au visage", "Hématurie seule"],
    correctAnswer: 0,
    explanation: "La dissémination massive de larves entraîne sepsis, choc septique et défaillance multi-organique, souvent fatale si non traitée."
  },
  {
    id: "str_clin_16",
    axis: "clinical",
    question: "La larva currens est souvent associée à :",
    options: ["Prurit intense et érythème linéaire", "Douleur abdominale isolée", "Nausées uniquement", "Fièvre isolée"],
    correctAnswer: 0,
    explanation: "Le déplacement rapide de la larve sous la peau provoque un prurit important et un érythème linéaire caractéristique."
  },
  {
    id: "str_clin_17",
    axis: "clinical",
    question: "Dans l’anguilulose maligne, les bactéries responsables sont généralement :",
    options: ["Gram négatif d’origine intestinale transportées par les larves", "Gram positif cutanées", "Virus respiratoires", "Champignons opportunistes"],
    correctAnswer: 0,
    explanation: "Les larves transportent des bactéries Gram négatif de l’intestin vers la circulation, induisant sepsis et choc."
  },
  {
    id: "str_clin_18",
    axis: "clinical",
    question: "Les patients immunocompétents présentent généralement :",
    options: ["Infections asymptomatiques ou modérées", "Choc septique", "Anguilulose maligne", "Dissémination systémique rapide"],
    correctAnswer: 0,
    explanation: "Chez les individus immunocompétents, l’infection chronique est souvent peu symptomatique, contrairement aux immunodéprimés."
  },
  {
    id: "str_clin_19",
    axis: "clinical",
    question: "L’auto-infestation endogène explique :",
    options: ["Persistance de l’infection pendant des années", "Éruption cutanée ponctuelle uniquement", "Infection unique et limitée", "Diarrhée temporaire"],
    correctAnswer: 0,
    explanation: "Les larves filariformes peuvent réinfecter le même hôte sans sortie, maintenant l’infection pendant des années."
  },
  {
    id: "str_clin_20",
    axis: "clinical",
    question: "La vigilance clinique est essentielle chez :",
    options: ["Patients sous immunosuppresseurs ou HTLV-1", "Enfants en bonne santé", "Personnes vaccinées contre la grippe", "Individus hypertendus uniquement"],
    correctAnswer: 0,
    explanation: "Les immunodéprimés sont à haut risque d’hyperinfection et de complications graves nécessitant une prise en charge urgente."
  },
  // =========================
  // DIAGNOSTIC (10 questions)
  // =========================
  {
    id: "str_diag_1",
    axis: "diagnosis",
    question: "Quelle méthode est la plus sensible pour détecter Strongyloides stercoralis dans les selles ?",
    options: ["Technique de Baermann basée sur thermo/hygrotropisme des larves", "Examen direct simple des selles", "Sérologie IgM seule", "Culture bactérienne des selles"],
    correctAnswer: 0,
    explanation: "La technique de Baermann exploite le thermo/hygrotropisme des larves filariformes, permettant leur migration hors des selles et une sensibilité supérieure à l’examen direct."
  },
  {
    id: "str_diag_2",
    axis: "diagnosis",
    question: "La coproculture sur milieu humide permet :",
    options: ["Détecter et identifier les larves rhabditoïdes et filariformes", "Rechercher uniquement les œufs", "Évaluer la numération sanguine", "Séparer les bactéries intestinales"],
    correctAnswer: 0,
    explanation: "La coproculture favorise l’émergence des larves, permettant leur identification morphologique et la confirmation du diagnostic."
  },
  {
    id: "str_diag_3",
    axis: "diagnosis",
    question: "La sensibilité du test de Baermann augmente si :",
    options: ["Selles fraîches et multiples échantillons sur 3 jours", "Échantillon unique sec", "Sang périphérique uniquement", "Urine du matin"],
    correctAnswer: 0,
    explanation: "Les larves doivent être vivantes pour migrer; des échantillons frais et répétés augmentent considérablement la sensibilité."
  },
  {
    id: "str_diag_4",
    axis: "diagnosis",
    question: "Une sérologie IgG est utile pour :",
    options: ["Dépistage et suivi post-traitement dans certains cas", "Remplacer complètement la coproculture", "Confirmer la présence de larves vivantes", "Identifier la résistance à l’ivermectine"],
    correctAnswer: 0,
    explanation: "La sérologie peut détecter une exposition antérieure et surveiller la décroissance des anticorps après traitement, mais ne remplace pas l’examen parasitologique."
  },
  {
    id: "str_diag_5",
    axis: "diagnosis",
    question: "La coproculture permet de distinguer :",
    options: ["Larves rhabditoïdes non infectantes et filariformes infectantes", "Œufs embryonnés et œufs operculés", "Vers adultes mâles et femelles", "Bactéries Gram négatif et Gram positif"],
    correctAnswer: 0,
    explanation: "La morphologie et la longueur des larves permettent de différencier la forme infestante filariforme de la forme rhabditoïde non infectante."
  },
  {
    id: "str_diag_6",
    axis: "diagnosis",
    question: "Le test de Baermann exploite le comportement des larves :",
    options: ["Thermotropisme et hygrotropisme", "Phototropisme uniquement", "Chimiotropisme bactérien", "Gravitropisme inversé"],
    correctAnswer: 0,
    explanation: "Les larves filariformes migrent vers la chaleur et l’humidité, principe utilisé dans la technique de Baermann."
  },
  {
    id: "str_diag_7",
    axis: "diagnosis",
    question: "Un résultat négatif au test direct mais positif en coproculture signifie :",
    options: ["Présence de faible nombre de larves nécessitant incubation", "Absence totale d’infection", "Erreur de prélèvement sanguin", "Résultat non interprétable"],
    correctAnswer: 0,
    explanation: "Une faible charge parasitaire peut rendre l’examen direct négatif, alors que la coproculture permet la multiplication et détection des larves."
  },
  {
    id: "str_diag_8",
    axis: "diagnosis",
    question: "Le test de Baermann est moins efficace si :",
    options: ["Selles anciennes ou desséchées", "Patient jeune", "Présence de diarrhée", "Selles liquides uniquement"],
    correctAnswer: 0,
    explanation: "Les larves mortes dans des selles anciennes ou desséchées ne migrent pas, réduisant la sensibilité du test."
  },
  {
    id: "str_diag_9",
    axis: "diagnosis",
    question: "La coproculture doit être maintenue à :",
    options: ["Température ambiante humide pour permettre le développement des larves", "Congélation immédiate", "Sécher à l’air libre", "Incubation à 4°C uniquement"],
    correctAnswer: 0,
    explanation: "La coproculture nécessite chaleur et humidité pour que les larves rhabditoïdes se transforment en larves filariformes et soient détectables."
  },
  {
    id: "str_diag_10",
    axis: "diagnosis",
    question: "Pour le suivi d’une infection après traitement, on recommande :",
    options: ["Contrôle parasitologique répété par coproculture ou Baermann", "Sérologie IgM seule", "Radiographie pulmonaire", "Test urinaire uniquement"],
    correctAnswer: 0,
    explanation: "Le suivi parasitologique permet de confirmer l’éradication de l’infection, car la sérologie peut rester positive longtemps après guérison."
  },

  // =========================
  // TREATMENT (10 questions)
  // =========================
  {
    id: "str_treat_1",
    axis: "treatment",
    question: "Traitement de première intention de l’anguillulose :",
    options: ["Ivermectine (Stromectol) en dose unique 200 µg/kg", "Albendazole 400 mg unique", "Mébendazole 100 mg/j", "Corticoïdes systématiques"],
    correctAnswer: 0,
    explanation: "L’ivermectine est le traitement le plus efficace, souvent administrée en dose unique et répétée si nécessaire pour éliminer toutes les larves."
  },
  {
    id: "str_treat_2",
    axis: "treatment",
    question: "Dans l’auto-infestation massive ou hyperinfection, on :",
    options: ["Répète l’ivermectine sur plusieurs jours", "Arrête tout traitement", "Utilise uniquement des antibiotiques", "Administré des corticoïdes pour réduire l’inflammation"],
    correctAnswer: 0,
    explanation: "Les patients à haut risque nécessitent des doses répétées d’ivermectine pour contrôler la multiplication larvaire endogène."
  },
  {
    id: "str_treat_3",
    axis: "treatment",
    question: "Avant d’administrer des corticoïdes à un patient à risque :",
    options: ["Toujours dépister et traiter Strongyloides", "Commencer directement les corticoïdes", "Prendre un vaccin antigrippal", "Administrer antibactérien prophylactique uniquement"],
    correctAnswer: 0,
    explanation: "Les corticoïdes favorisent l’hyperinfection et peuvent être fatals; il faut impérativement traiter la parasitose avant immunosuppression."
  },
  {
    id: "str_treat_4",
    axis: "treatment",
    question: "L’ivermectine agit en :",
    options: ["Par paralysie neuromusculaire des larves et vers adultes", "Détruisant les œufs directement", "Neutralisant les anticorps IgG", "Bloquant la sécrétion digestive du ver"],
    correctAnswer: 0,
    explanation: "L’ivermectine se lie aux canaux chlore des cellules nerveuses du ver, provoquant paralysie et mort du parasite."
  },
  {
    id: "str_treat_5",
    axis: "treatment",
    question: "Chez l’immunodéprimé, la surveillance post-traitement doit inclure :",
    options: ["Contrôles parasitologiques répétés jusqu’à disparition des larves", "Sérologie seule", "Radiographie pulmonaire unique", "Test urinaire seul"],
    correctAnswer: 0,
    explanation: "Le suivi doit confirmer l’éradication des larves, car le risque de réinfection endogène ou hyperinfection est élevé."
  },
  {
    id: "str_treat_6",
    axis: "treatment",
    question: "Alternative à l’ivermectine en cas d’indisponibilité :",
    options: ["Albendazole 400 mg 2x/j pendant 7 jours", "Mébendazole unique", "Corticoïdes prophylactiques", "Antibiotiques à large spectre"],
    correctAnswer: 0,
    explanation: "Albendazole peut être utilisé mais est moins efficace que l’ivermectine, nécessitant administration prolongée pour toutes les larves."
  },
  {
    id: "str_treat_7",
    axis: "treatment",
    question: "Il est crucial d’éviter les corticoïdes :",
    options: ["Avant traitement parasitologique", "Après traitement uniquement", "Chez l’enfant seulement", "Uniquement si diarrhée présente"],
    correctAnswer: 0,
    explanation: "L’administration de corticoïdes avant déparasitage peut provoquer hyperinfection et décès, surtout chez les immunodéprimés."
  },
  {
    id: "str_treat_8",
    axis: "treatment",
    question: "Pour prévenir la réinfection, il est recommandé :",
    options: ["Hygiène, chaussures, éviter contact avec sol contaminé", "Vaccination", "Isolement strict", "Diète pauvre en fibres"],
    correctAnswer: 0,
    explanation: "L’auto-infestation endogène et l’infection environnementale peuvent être limitées par mesures d’hygiène et protection cutanée."
  },
  {
    id: "str_treat_9",
    axis: "treatment",
    question: "La dose standard d’ivermectine est :",
    options: ["200 µg/kg en dose unique, répétée si nécessaire", "50 µg/kg unique", "400 mg unique", "1 g unique"],
    correctAnswer: 0,
    explanation: "La dose recommandée pour éliminer Strongyloides chez l’adulte est 200 µg/kg, souvent répétée après 2 semaines en cas de persistance."
  },
  {
    id: "str_treat_10",
    axis: "treatment",
    question: "Le suivi après traitement repose sur :",
    options: ["Contrôles coprologiques pour confirmer l’éradication", "Sérologie IgG seule", "Radiographie thoracique uniquement", "Évaluation clinique sans examen parasitologique"],
    correctAnswer: 0,
    explanation: "Le contrôle parasitologique reste la référence pour confirmer l’efficacité du traitement et la disparition des larves infectantes."
  }
];
