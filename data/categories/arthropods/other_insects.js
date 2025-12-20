const other_insects = [
  // --- POUX (ANOPLOURES) - GÉNÉRALITÉS ---
  {
    id: 'other_1',
    question: "Les Poux (Anoploures) sont des insectes :",
    options: ["Ectoparasites permanents, hématophages stricts à tous les stades, sans ailes (aptères)", "Volants et suceurs de nectar", "Temporaires (viennent juste manger)", "Vivants dans l'eau"],
    correct: 0,
    explanation: "Ils passent toute leur vie sur l'hôte. Ils ne peuvent pas survivre longtemps (max 2 jours) sans repas sanguin."
  },
  {
    id: 'other_2',
    question: "Quelle est la métamorphose des poux ?",
    options: ["Hémimétaboles (métamorphose incomplète) : les larves/nymphes ressemblent aux adultes en miniature", "Holométaboles (métamorphose complète comme le papillon)", "Pas de métamorphose", "Ils naissent adultes"],
    correct: 0,
    explanation: "Il n'y a pas de stade immobile (pupe/chrysalide). Les jeunes (nymphes) mangent du sang dès la naissance."
  },
  {
    id: 'other_3',
    question: "Les lentes (œufs de poux) sont fixées aux cheveux par :",
    options: ["Un ciment (glu) insoluble dans l'eau sécrété par la femelle", "Des crochets", "Elles sont simplement posées", "Elles flottent"],
    correct: 0,
    explanation: "Ce ciment est très résistant, ce qui rend l'élimination mécanique (peigne fin) difficile sans produit décolleur."
  },

  // --- PEDICULUS HUMANUS CAPITIS (POU DE TÊTE) ---
  {
    id: 'other_4',
    question: "Le Pou de tête (Pediculus humanus capitis) est-il un vecteur de maladies infectieuses ?",
    options: ["Non, c'est uniquement une nuisance (prurit, surinfection, problème social)", "Oui, il transmet le typhus", "Oui, la peste", "Oui, la fièvre jaune"],
    correct: 0,
    explanation: "Contrairement à son cousin de corps, le pou de tête n'est pas considéré comme un vecteur biologique de pathogènes dans la nature."
  },
  {
    id: 'other_5',
    question: "La transmission des poux de tête se fait majoritairement par :",
    options: ["Contact direct 'tête à tête' (cheveux contre cheveux)", "Le saut (ils sautent d'une tête à l'autre)", "Le vol", "La nage"],
    correct: 0,
    explanation: "Les poux ne sautent pas et ne volent pas. Ils marchent vite. Le contact direct est la voie royale."
  },
  {
    id: 'other_6',
    question: "Pourquoi les poux de tête survivent-ils mal dans l'environnement (bonnets, oreillers) ?",
    options: ["Ils meurent de faim et de déshydratation en 24-48h loin du cuir chevelu", "Ils ont peur du noir", "Ils sont mangés par les acariens", "Ils gèlent"],
    correct: 0,
    explanation: "La contamination par les objets (fomites) est possible mais beaucoup plus rare que le contact direct."
  },
  {
    id: 'other_7',
    question: "Où trouve-t-on préférentiellement les lentes vivantes ?",
    options: ["À la base du cheveu, à moins de 1 cm du cuir chevelu (au chaud)", "Au bout des cheveux longs", "Tombées sur les épaules", "Dans les oreilles"],
    correct: 0,
    explanation: "L'œuf a besoin de la chaleur du crâne pour éclore. Une lente située loin du crâne est vide ou morte."
  },

  // --- PEDICULUS HUMANUS CORPORIS (POU DE CORPS) ---
  {
    id: 'other_8',
    question: "Le Pou de corps vit :",
    options: ["Dans les vêtements (coutures, plis) et ne va sur la peau que pour manger", "Dans les poils du torse en permanence", "Dans les cheveux", "Dans le lit"],
    correct: 0,
    explanation: "C'est un parasite vestimentaire. Le traitement repose donc sur la désinfection du linge (lavage à 60°C), pas forcément du corps."
  },
  {
    id: 'other_9',
    question: "Le Pou de corps est le vecteur historique de :",
    options: ["Le Typhus exanthématique (Rickettsia prowazekii)", "La Peste", "Le Paludisme", "La Gale"],
    correct: 0,
    explanation: "Il a causé des millions de morts lors des guerres et famines (froid + manque d'hygiène = pas de change de vêtements)."
  },
  {
    id: 'other_10',
    question: "La Fièvre des tranchées (Bartonella quintana) est transmise par :",
    options: ["Les déjections du Pou de corps (grattage)", "La piqûre du Pou de tête", "La Puce", "Le Moustique"],
    correct: 0,
    explanation: "Maladie ré-émergente chez les populations précaires (SDF) parasitées par les poux de corps."
  },
  {
    id: 'other_11',
    question: "La Fièvre récurrente cosmopolite à poux est due à :",
    options: ["Borrelia recurrentis (Spirochète)", "Un virus", "Un ver", "Un champignon"],
    correct: 0,
    explanation: "La transmission est particulière : il faut écraser le pou sur la peau pour libérer les bactéries (pas par piqûre ni déjection)."
  },

  // --- PTHIRUS PUBIS (MORPION) ---
  {
    id: 'other_12',
    question: "Le Morpion (Pthirus pubis) se distingue morphologiquement par :",
    options: ["Un corps trapu, large, aspect de 'crabe', avec de grosses pinces", "Un corps allongé", "Des ailes", "Une queue"],
    correct: 0,
    explanation: "Ses pinces sont adaptées au diamètre des gros poils (pubis, aisselles, barbe, cils) et non aux cheveux fins."
  },
  {
    id: 'other_13',
    question: "La phtirose est considérée comme :",
    options: ["Une Infection Sexuellement Transmissible (IST)", "Une maladie infantile", "Une maladie tropicale", "Une allergie"],
    correct: 0,
    explanation: "La contamination se fait par contact intime. Sa présence chez un enfant doit faire suspecter un abus ou un contact très étroit avec un parent infesté."
  },
  {
    id: 'other_14',
    question: "Les 'taches bleues' (Macula cerulea) sont :",
    options: ["Des taches gris-bleuté sur la peau (abdomen/cuisses) dues à la salive du morpion", "Des bleus de coups", "De l'encre", "Une infection"],
    correct: 0,
    explanation: "Signe clinique pathognomonique de la phtirose ancienne ou intense."
  },

  // --- PUCES (SIPHONAPTÈRES) - GÉNÉRALITÉS ---
  {
    id: 'other_15',
    question: "Les Puces (Siphonaptères) sont des insectes :",
    options: ["Aptères (sans ailes), aplatis latéro-latéralement, sauteurs", "Volants", "Aptères aplatis dorso-ventralement", "Rampants lents"],
    correct: 0,
    explanation: "L'aplatissement latéral leur permet de courir entre les poils. Les pattes arrière sont adaptées au saut."
  },
  {
    id: 'other_16',
    question: "De quoi se nourrissent les larves de puces ?",
    options: ["De débris organiques et des fèces (sang séché) des puces adultes tombés au sol", "De sang frais sur l'hôte", "De plantes", "D'eau"],
    correct: 0,
    explanation: "Les larves ne sont pas parasites. Elles vivent dans la poussière (parquet, tapis). Seul l'adulte pique."
  },
  {
    id: 'other_17',
    question: "Pulex irritans est :",
    options: ["La puce de l'homme (mais pique aussi les animaux)", "La puce du rat", "La puce du chat", "Une tique"],
    correct: 0,
    explanation: "Bien que rare aujourd'hui dans les pays développés, c'est l'espèce spécifique de l'homme."
  },
  {
    id: 'other_18',
    question: "Ctenocephalides felis est :",
    options: ["La puce du chat (très commune, pique aussi l'homme et le chien)", "La puce de l'homme", "La puce du rat", "Un pou"],
    correct: 0,
    explanation: "C'est l'espèce la plus fréquente dans les maisons, causant des piqûres aux chevilles."
  },

  // --- PUCES VECTRICES (PESTE & TYPHUS) ---
  {
    id: 'other_19',
    question: "Xenopsylla cheopis est le vecteur principal de :",
    options: ["La Peste bubonique (Yersinia pestis) et du Typhus murin", "La Gale", "La Dengue", "Le SIDA"],
    correct: 0,
    explanation: "C'est la puce du rat noir. Elle transmet la peste du rat à l'homme quand les rats meurent (épizootie)."
  },
  {
    id: 'other_20',
    question: "Comment la puce transmet-elle la peste ?",
    options: ["Par régurgitation : le bacille bloque son proventricule, l'affame, et elle régurgite en essayant de manger", "Par les fèces", "Par les glandes salivaires", "Par écrasement"],
    correct: 0,
    explanation: "Le 'blocage' de la puce est le mécanisme clé de l'épidémie. La puce affamée pique frénétiquement plusieurs hôtes."
  },
  {
    id: 'other_21',
    question: "Le Typhus murin (Rickettsia typhi) est transmis par :",
    options: ["Les fèces de la puce du rat (Xenopsylla) contaminée par grattage", "La piqûre", "L'inhalation", "L'eau"],
    correct: 0,
    explanation: "Comme pour beaucoup de Rickettsies, l'infection entre par les lésions de grattage souillées par les crottes du vecteur."
  },
  {
    id: 'other_22',
    question: "Dipylidium caninum (Ténia du chien) est transmis à l'enfant par :",
    options: ["L'ingestion accidentelle d'une puce infectée (hôte intermédiaire)", "La piqûre de puce", "Le léchage du chien", "Les poils"],
    correct: 0,
    explanation: "La larve de puce mange les œufs de ténia. La puce adulte contient la larve cysticercoïde. Si l'enfant avale la puce, il a le ver."
  },

  // --- TUNGA PENETRANS (PUCE-CHIQUE) ---
  {
    id: 'other_23',
    question: "La Tungose (Puce-chique) est une ectoparasitose où :",
    options: ["La femelle s'enfonce dans l'épiderme et y reste pour pondre", "La puce pique et part", "La larve migre sous la peau", "L'œuf est pondu sur les poils"],
    correct: 0,
    explanation: "C'est une 'pénétration'. La femelle gravide devient une boule blanche (néosome) sous la peau, ne laissant sortir que son orifice postérieur."
  },
  {
    id: 'other_24',
    question: "La localisation typique de la Tungose est :",
    options: ["Les pieds (orteils, sous les ongles, plante) car la puce vit dans le sol", "La tête", "Les mains", "Le dos"],
    correct: 0,
    explanation: "Fréquent chez ceux qui marchent pieds nus ou en sandales en zone tropicale (sable, poussière)."
  },
  {
    id: 'other_25',
    question: "Les complications de la Tungose (surtout si multiple) incluent :",
    options: ["Surinfection bactérienne (Tétanos, Gangrène), abcès, perte d'orteils", "Peste", "Paludisme", "Cécité"],
    correct: 0,
    explanation: "La lésion ouverte dans le sol souillé est une porte d'entrée majeure pour Clostridium tetani."
  },
  {
    id: 'other_26',
    question: "Le traitement curatif de la Tungose consiste à :",
    options: ["Extraire la puce entière stérilement (exérèse chirurgicale) et désinfecter/vacciner Tétanos", "Mettre de la crème", "Prendre des antibiotiques seuls", "Attendre"],
    correct: 0,
    explanation: "Il faut enlever le parasite sans le rompre pour éviter l'inflammation."
  },

  // --- BUGS (HÉMIPTÈRES - PUNAISES) - REDUVES ---
  {
    id: 'other_27',
    question: "Les Triatomes (Réduves) sont les vecteurs de :",
    options: ["La Maladie de Chagas (Trypanosoma cruzi)", "La Maladie du sommeil", "Le Paludisme", "La Dengue"],
    correct: 0,
    explanation: "Ce sont de grosses punaises ailées d'Amérique Latine ('Vinchuca', 'Barbeiro')."
  },
  {
    id: 'other_28',
    question: "La transmission de la maladie de Chagas se fait par :",
    options: ["Contamination fécale : la punaise défeque sur la peau pendant qu'elle pique, l'homme gratte et fait entrer le parasite", "Injection salivaire", "Inhalation", "Eau"],
    correct: 0,
    explanation: "C'est une transmission 'stercorale' (par les selles). Le parasite n'est pas dans la salive."
  },
  {
    id: 'other_29',
    question: "Le 'signe de Romaña' est :",
    options: ["Un œdème palpébral unilatéral indolore (chago de inoculation) après contact avec les déjections de la punaise", "Un bouton sur la main", "Une fièvre", "Une diarrhée"],
    correct: 0,
    explanation: "Signe classique de la phase aiguë si la porte d'entrée est la conjonctive (frottement des yeux)."
  },
  {
    id: 'other_30',
    question: "Où vivent les Triatomes domestiques ?",
    options: ["Dans les fissures des murs en torchis, les toits en paille, derrière les cadres", "Dans l'eau", "Sur les animaux", "Dans les arbres"],
    correct: 0,
    explanation: "La lutte repose sur l'amélioration de l'habitat (remplacer les murs en terre, toits en tôle) et les insecticides."
  },

  // --- BUGS (HÉMIPTÈRES) - PUNAISES DE LIT ---
  {
    id: 'other_31',
    question: "Cimex lectularius (Punaise de lit) est-elle un vecteur de maladie ?",
    options: ["Non, c'est une nuisance hématophage sévère mais aucun rôle vecteur n'est prouvé", "Oui, elle transmet Chagas", "Oui, la Peste", "Oui, le VIH"],
    correct: 0,
    explanation: "Malgré sa biologie proche des vecteurs, elle ne transmet rien. Les troubles sont cutanés et psychologiques."
  },
  {
    id: 'other_32',
    question: "L'activité de la punaise de lit est :",
    options: ["Strictement nocturne, lucifuge (fuit la lumière)", "Diurne", "Permanente", "Vespérale"],
    correct: 0,
    explanation: "Elle sort de sa cachette quand l'hôte dort (détection CO2/chaleur) et retourne se cacher avant le jour."
  },
  {
    id: 'other_33',
    question: "Les piqûres de punaises de lit sont caractéristiques car :",
    options: ["Elles sont souvent alignées ('en chapelet') ou groupées sur les zones découvertes", "Elles sont isolées", "Elles forment un cercle", "Elles saignent"],
    correct: 0,
    explanation: "La punaise fait souvent plusieurs essais ou pique plusieurs fois le long d'une veine ou du drap."
  },
  {
    id: 'other_34',
    question: "Comment détecter une infestation de punaises de lit ?",
    options: ["Rechercher les déjections (points noirs) sur le matelas/sommier et les taches de sang sur les draps", "Écouter le bruit", "Sentir l'odeur de fraise", "Voir des toiles"],
    correct: 0,
    explanation: "Les déjections (sang digéré) sont le signe le plus fiable."
  },
  {
    id: 'other_35',
    question: "La résistance des punaises de lit aux insecticides est :",
    options: ["Très répandue et problématique (résistance aux pyréthrinoïdes)", "Inexistante", "Faible", "Uniquement en laboratoire"],
    correct: 0,
    explanation: "C'est la cause de leur recrudescence mondiale. La lutte chimique seule échoue souvent."
  },

  // --- TRAITEMENTS (POUX/PUCES/BOGUES) ---
  {
    id: 'other_36',
    question: "Le Diméticone (huile de silicone) agit sur les poux par :",
    options: ["Action physique (asphyxie en bouchant les stigmates respiratoires)", "Action neurotoxique", "Action répulsive", "Action antibiotique"],
    correct: 0,
    explanation: "Comme c'est mécanique, il n'y a pas de résistance possible. C'est le traitement de choix actuel."
  },
  {
    id: 'other_37',
    question: "L'Ivermectine orale est-elle efficace sur les punaises de lit ?",
    options: ["Oui, elle tue les punaises qui piquent le patient traité, mais ne suffit pas à éradiquer l'infestation environnementale", "Non, aucun effet", "Oui, elle nettoie la maison", "C'est un répulsif"],
    correct: 0,
    explanation: "Les œufs et les punaises qui ne mangent pas ce jour-là survivent. Il faut traiter le logement (chaleur/chimie)."
  },
  {
    id: 'other_38',
    question: "La terre de diatomée est utilisée contre les insectes rampants (puces, punaises) pour :",
    options: ["Son action abrasive et desséchante sur la cuticule de l'insecte", "Son poison", "Son odeur", "Son goût"],
    correct: 0,
    explanation: "Méthode mécanique écologique efficace dans les fentes et fissures."
  },
  {
    id: 'other_39',
    question: "Le peignage humide avec démêlant est une méthode pour :",
    options: ["Décrocher les poux et les lentes mécaniquement (diagnostic et traitement)", "Tuer les poux chimiquement", "Les endormir", "Les nourrir"],
    correct: 0,
    explanation: "Méthode 'douce' de référence pour les nourrissons ou en cas de refus des produits."
  },
  {
    id: 'other_40',
    question: "Pour tuer les puces dans une maison, il faut traiter :",
    options: ["L'animal (hôte) ET l'environnement (parquet, tapis) où vivent les larves", "Juste l'animal", "Juste le lit", "Les murs"],
    correct: 0,
    explanation: "95% de la population de puces (œufs, larves, nymphes) est dans l'environnement, pas sur le chien/chat."
  },
  // --- HISTOIRE & ÉPIDÉMIOLOGIE (PESTE/TYPHUS) ---
  {
    id: 'other_41',
    question: "La Peste Noire (1347) qui a tué un tiers de l'Europe était transmise par :",
    options: ["Les puces du rat (Xenopsylla) voyageant sur les navires marchands", "Les moustiques", "Les poux", "L'air"],
    correct: 0,
    explanation: "C'est l'exemple type de la zoonose propagée par le commerce et le manque d'hygiène."
  },
  {
    id: 'other_42',
    question: "La 'Peste pulmonaire' diffère de la 'Peste bubonique' car :",
    options: ["Elle se transmet directement d'homme à homme par voie aérienne (toux), sans puce", "Elle est moins grave", "Elle est transmise par l'eau", "C'est une autre bactérie"],
    correct: 0,
    explanation: "C'est la forme la plus contagieuse et mortelle. Elle survient quand le bacille atteint les poumons."
  },
  {
    id: 'other_43',
    question: "Napoléon a perdu sa Grande Armée en Russie en partie à cause de :",
    options: ["Le Typhus transmis par les poux de corps (froid + promiscuité)", "La Peste", "Le Paludisme", "La Dengue"],
    correct: 0,
    explanation: "Le 'Général Hiver' et le 'Général Typhus' ont décimé les troupes bien plus que les combats."
  },
  {
    id: 'other_44',
    question: "Pourquoi la Peste est-elle une maladie de ré-émergence possible ?",
    options: ["Car des foyers sauvages persistent chez les rongeurs (Madagascar, USA, Asie)", "Car le bacille est éternel", "Car les puces volent", "Car il n'y a pas d'antibiotiques"],
    correct: 0,
    explanation: "La peste sylvatique (sauvage) circule toujours. Le contact homme-rongeur sauvage est le risque."
  },

  // --- DÉTAILS BIOLOGIQUES (POUX) ---
  {
    id: 'other_45',
    question: "Combien de pattes ont les poux ?",
    options: ["6 pattes (Hexapodes) munies de griffes préhensiles adaptées au diamètre du cheveu", "8 pattes", "4 pattes", "10 pattes"],
    correct: 0,
    explanation: "Ce sont des insectes. Leurs griffes fonctionnent comme des mousquetons verrouillés sur le poil."
  },
  {
    id: 'other_46',
    question: "Quelle est la durée de vie d'un pou adulte sur la tête ?",
    options: ["Environ 30 jours", "1 an", "24 heures", "10 ans"],
    correct: 0,
    explanation: "Une femelle pond jusqu'à 10 œufs (lentes) par jour pendant sa vie, d'où l'infestation rapide."
  },
  {
    id: 'other_47',
    question: "La 'phtiriase' des cils (Morpions sur les cils) chez l'enfant se traite par :",
    options: ["Retrait mécanique à la pince ou vaseline (étouffement), éviter les insecticides toxiques près de l'œil", "Insecticide en spray dans l'œil", "Antibiotiques", "Chirurgie"],
    correct: 0,
    explanation: "Localisation rare mais possible. Le traitement doit être non irritant pour la cornée."
  },
  {
    id: 'other_48',
    question: "Les poux respirent par :",
    options: ["Des stigmates latéraux qu'ils peuvent fermer (apnée) sous l'eau", "La bouche", "La peau", "Des branchies"],
    correct: 0,
    explanation: "C'est pourquoi ils survivent à la piscine ou au shampoing simple. Ils se mettent en apnée."
  },

  // --- DÉTAILS BIOLOGIQUES (PUCES) ---
  {
    id: 'other_49',
    question: "Le saut de la puce est possible grâce à :",
    options: ["Une protéine élastique (résiline) dans ses pattes arrière qui agit comme un ressort", "Ses muscles seuls", "Ses ailes", "Le vent"],
    correct: 0,
    explanation: "C'est l'un des mouvements les plus rapides du règne animal (accélération énorme)."
  },
  {
    id: 'other_50',
    question: "La nymphe de puce peut rester en dormance dans son cocon pendant :",
    options: ["Plusieurs mois (6-12 mois) en attendant les vibrations d'un hôte", "24 heures", "1 semaine", "100 ans"],
    correct: 0,
    explanation: "C'est pourquoi on se fait piquer en entrant dans une maison de vacances vide depuis longtemps."
  },
  {
    id: 'other_51',
    question: "Ctenocephalides canis (Puce du chien) se distingue de celle du chat par :",
    options: ["La forme de la tête (front) et les peignes (cténidies)", "La couleur", "La taille", "Le nombre de pattes"],
    correct: 0,
    explanation: "Détail de spécialiste : C. felis a un front long et plat, C. canis un front court et bombé."
  },
  {
    id: 'other_52',
    question: "Les peignes (cténidies) des puces servent à :",
    options: ["S'ancrer dans les poils pour ne pas être arraché lors du grattage", "Respirer", "Manger", "Voir"],
    correct: 0,
    explanation: "Ce sont des rangées d'épines rigides vers l'arrière."
  },

  // --- HÉMIPTÈRES (PUNAISES) AVANCÉ ---
  {
    id: 'other_53',
    question: "La différence entre une punaise de lit (Cimex) et une punaise vectrice (Triatome) est :",
    options: ["Le Triatome a des ailes fonctionnelles et est beaucoup plus grand (2-3 cm) ; le Cimex est aptère et petit (5 mm)", "Le Cimex vole", "Le Triatome est petit", "Pas de différence"],
    correct: 0,
    explanation: "Le Triatome adulte vole vers la lumière, ce qui facilite son entrée dans les maisons."
  },
  {
    id: 'other_54',
    question: "Rhodnius prolixus est un vecteur majeur de Chagas qui vit :",
    options: ["Dans les palmiers (sylvatique) et les toits de paille", "Dans l'eau", "Dans le sol", "Sur les chiens"],
    correct: 0,
    explanation: "Il descend des toits en feuilles de palmier pour piquer les habitants la nuit."
  },
  {
    id: 'other_55',
    question: "L'odeur caractéristique d'une infestation de punaises de lit est décrite comme :",
    options: ["Une odeur douceâtre, écœurante, de 'framboise pourrie' ou de 'coriandre'", "Une odeur de soufre", "Une odeur de poisson", "Aucune odeur"],
    correct: 0,
    explanation: "Elle est due aux glandes odoriférantes de l'insecte (phéromones d'agrégation)."
  },
  {
    id: 'other_56',
    question: "Les chiens renifleurs sont utilisés pour :",
    options: ["Détecter les foyers de punaises de lit cachés avec une grande précision", "Détecter les poux", "Détecter la gale", "Chasser les rats"],
    correct: 0,
    explanation: "Méthode de diagnostic moderne très efficace pour cibler le traitement."
  },

  // --- TRAITEMENTS ET RÉSISTANCES ---
  {
    id: 'other_57',
    question: "La résistance 'kdr' (Knock-down resistance) chez les poux concerne :",
    options: ["L'insensibilité aux pyréthrinoïdes (shampoings classiques)", "La résistance à l'eau", "La résistance au peigne", "La résistance au silicone"],
    correct: 0,
    explanation: "C'est pourquoi les vieux produits (ex: Prioderm) ne marchent plus. On privilégie les étouffeurs (diméticone)."
  },
  {
    id: 'other_58',
    question: "Le Spinosad est un nouveau traitement des poux qui agit par :",
    options: ["Excitation neuronale mortelle de l'insecte (origine bactérienne)", "Asphyxie", "Répulsion", "Coloration"],
    correct: 0,
    explanation: "Alternative neurotoxique efficace si les étouffeurs échouent."
  },
  {
    id: 'other_59',
    question: "Pourquoi ne faut-il pas utiliser d'aérosols insecticides (foggers) contre les punaises de lit ?",
    options: ["Ils ne pénètrent pas dans les cachettes et dispersent les punaises dans les autres pièces", "Ils tachent les murs", "Ils sont trop chers", "Ils les nourrissent"],
    correct: 0,
    explanation: "C'est contre-productif. Les punaises fuient le produit et colonisent les voisins."
  },
  {
    id: 'other_60',
    question: "Le traitement thermique (vapeur sèche > 180°C) contre les punaises :",
    options: ["Tue instantanément tous les stades, y compris les œufs (le point faible chimique)", "Ne tue que les adultes", "Est inefficace", "Est dangereux"],
    correct: 0,
    explanation: "La méthode physique la plus radicale et écologique."
  },

  // --- ZOOLOGIE & DIVERS ---
  {
    id: 'other_61',
    question: "Les Mallophages (poux des oiseaux/chiens) diffèrent des Anoploures (poux humains) car :",
    options: ["Ce sont des poux broyeurs (mangent les squames/plumes), pas piqueurs", "Ils sont géants", "Ils volent", "Ils nagent"],
    correct: 0,
    explanation: "Trichodectes canis (pou du chien) est un mallophage. Il ne pique pas (ne suce pas le sang) mais gratte."
  },
  {
    id: 'other_62',
    question: "Le 'Siphon' dans Siphonaptères (Puces) signifie :",
    options: ["Tube / Tuyau (référence à la bouche suceuse)", "Ailes", "Pattes", "Saut"],
    correct: 0,
    explanation: "Aptère = sans ailes. Siphon = bouche tubulaire pour aspirer le sang."
  },
  {
    id: 'other_63',
    question: "Les punaises Hétéroptères ont des ailes :",
    options: ["Hémiélytres (moitié dure, moitié membraneuse)", "Tout membraneux", "Tout dur", "Absentes"],
    correct: 0,
    explanation: "C'est la définition des Hétéroptères (ex: Triatomes). Cimex est une exception aptère secondaire."
  },
  {
    id: 'other_64',
    question: "Le Reduvius personatus (Réduve masqué) est un prédateur naturel de :",
    options: ["Punaises de lit (Cimex)", "L'homme", "Les plantes", "Les chiens"],
    correct: 0,
    explanation: "Il vit dans les maisons et chasse les autres insectes. Sa piqûre est douloureuse mais accidentelle."
  },

  // --- DIAGNOSTIC DIFFÉRENTIEL ---
  {
    id: 'other_65',
    question: "Devant un prurit du cuir chevelu sans poux ni lentes visibles, il faut penser à :",
    options: ["Psoriasis, Dermite séborrhéique, ou Eczéma de contact", "Gale", "Paludisme", "Teigne"],
    correct: 0,
    explanation: "Les pellicules (squames) se détachent facilement, contrairement aux lentes collées."
  },
  {
    id: 'other_66',
    question: "Les piqûres de puces sont souvent localisées :",
    options: ["Aux chevilles et jambes (hauteur de saut)", "Sur la tête", "Dans le dos", "Au visage"],
    correct: 0,
    explanation: "Typique quand on marche sur un sol infesté."
  },
  {
    id: 'other_67',
    question: "Une pédiculose corporelle chronique peut entraîner :",
    options: ["Une anémie ferriprive (si infestation massive)", "Une obésité", "Une chute de cheveux", "Une cécité"],
    correct: 0,
    explanation: "Des milliers de poux buvant du sang chaque jour peuvent affaiblir un hôte dénutri."
  },
  
  // --- CAS CLINIQUES QUIZ ---
  {
    id: 'other_68',
    question: "SDF amené aux urgences, fiévreux, douleurs tibiales (tranchées), poux dans les vêtements. Diagnostic ?",
    options: ["Fièvre des tranchées (Bartonella quintana)", "Grippe", "Paludisme", "Covid"],
    correct: 0,
    explanation: "Tableau classique. Risque d'endocardite si non traité."
  },
  {
    id: 'other_69',
    question: "Retour de voyage tropical, nodule blanc douloureux sous l'ongle de l'orteil avec point noir. Diagnostic ?",
    options: ["Tungose (Puce-chique)", "Panaris", "Verrue", "Mycose"],
    correct: 0,
    explanation: "L'aspect et la localisation signent la tungose."
  },
  {
    id: 'other_70',
    question: "Enfant avec blépharite (inflammation paupière) et croûtes noires à la base des cils. Diagnostic ?",
    options: ["Phtirose ciliaire (Morpions)", "Conjonctivite", "Orgelet", "Allergie"],
    correct: 0,
    explanation: "Les 'croûtes' sont en fait les fèces des morpions fixés aux cils."
  },

  // --- PSYCHOLOGIE & SOCIÉTÉ ---
  {
    id: 'other_71',
    question: "L'exclusion scolaire pour pédiculose de tête est-elle justifiée médicalement ?",
    options: ["Non, le traitement permet le retour immédiat. Les poux ne sont pas une maladie grave", "Oui, c'est une urgence sanitaire", "Oui, pour 1 mois", "Oui, pour toujours"],
    correct: 0,
    explanation: "C'est une nuisance, pas un danger. L'exclusion stigmatise l'enfant inutilement."
  },
  {
    id: 'other_72',
    question: "Le syndrome d'Ekbom (Délire d'infestation) touche souvent des patients persuadés d'avoir :",
    options: ["Des insectes rampant sous leur peau ou dans leur maison (punaises/poux imaginaires)", "Le cancer", "Le virus Ebola", "Des vers"],
    correct: 0,
    explanation: "Ils apportent le 'signe de la boîte d'allumettes' remplie de débris de peau (preuves)."
  },

  // --- QUESTIONS FINALES ---
  {
    id: 'other_73',
    question: "Quel insecte a inspiré l'étude de la résiline (protéine super-élastique) ?",
    options: ["La Puce", "Le Pou", "La Mouche", "La Fourmi"],
    correct: 0,
    explanation: "Pour comprendre son saut incroyable sans muscles géants."
  },
  {
    id: 'other_74',
    question: "Les Triatomes (Chagas) sont aussi appelés 'Kissing bugs' car :",
    options: ["Ils piquent souvent autour de la bouche ou des yeux (zones découvertes la nuit)", "Ils sont gentils", "Ils s'embrassent", "Ils sont rouges"],
    correct: 0,
    explanation: "D'où le risque d'infection oculaire (Romaña) ou orale (ingestion accidentelle)."
  },
  {
    id: 'other_75',
    question: "La 'peste du chat' (transmise par puces) aux USA touche surtout :",
    options: ["Les propriétaires de chats qui chassent les rongeurs sauvages (chiens de prairie)", "Les villes", "Les plages", "Les montagnes"],
    correct: 0,
    explanation: "Le chat ramène la puce infectée du rongeur sauvage à la maison."
  },
  {
    id: 'other_76',
    question: "Les œufs de punaises de lit éclosent en :",
    options: ["10 à 15 jours (selon T°)", "24 heures", "6 mois", "1 heure"],
    correct: 0,
    explanation: "Il faut donc refaire un passage insecticide à J+15 pour tuer les nouveaux-nés."
  },
  {
    id: 'other_77',
    question: "Les poux de tête préfèrent-ils les cheveux sales ?",
    options: ["Non, ils préfèrent les cheveux propres (plus faciles à accrocher) et n'ont aucune préférence d'hygiène", "Oui, ils aiment le gras", "Oui, ils aiment la poussière", "Oui, ils aiment les pellicules"],
    correct: 0,
    explanation: "Mythe tenace. Le pou de tête n'est pas un signe de saleté."
  },
  {
    id: 'other_78',
    question: "Le Phtirus pubis peut-il vivre sur la tête ?",
    options: ["Exceptionnellement, chez l'enfant (cils/sourcils/lisière), mais pas dans la chevelure dense", "Oui, c'est fréquent", "Non, jamais", "Il meurt instantanément"],
    correct: 0,
    explanation: "Ses pinces sont trop écartées pour les cheveux fins."
  },
  {
    id: 'other_79',
    question: "La 'Guerre des Puces' désigne :",
    options: ["La difficulté extrême d'éradiquer une infestation domestique sans traiter l'environnement", "Une vraie guerre", "Un jeu", "Une maladie"],
    correct: 0,
    explanation: "Lutter contre les adultes sur l'animal ne suffit jamais."
  },
  {
    id: 'other_80',
    question: "En conclusion, quel est l'insecte non-volant le plus meurtrier de l'histoire ?",
    options: ["La Puce (Peste) et le Pou (Typhus)", "La Punaise", "Le Cafard", "La Fourmi"],
    correct: 0,
    explanation: "Ils ont tué plus d'humains que toutes les guerres réunies via les épidémies."
  }
];

export default other_insects;
