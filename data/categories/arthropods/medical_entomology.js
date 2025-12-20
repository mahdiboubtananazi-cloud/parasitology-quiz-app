const medical_entomology = [
  // --- DÉFINITIONS FONDAMENTALES ---
  {
    id: 'med_ent_1',
    question: "Quelle est la définition exacte d'un 'Vecteur Biologique' ?",
    options: ["Un arthropode hématophage qui assure la transmission active d'un pathogène, indispensable à son cycle évolutif (multiplication ou maturation)", "Un arthropode qui transporte passivement des germes sur ses pattes (ex: mouche)", "Un animal qui mord", "Un parasite"],
    correct: 0,
    explanation: "Le mot clé est 'indispensable'. Sans le vecteur biologique, le parasite ne peut pas compléter son cycle de vie (ex: Plasmodium chez l'Anophèle)."
  },
  {
    id: 'med_ent_2',
    question: "Qu'est-ce qu'un 'Vecteur Mécanique' ?",
    options: ["Un simple transporteur passif (taxi) de pathogènes, sans multiplication ni transformation interne (ex: Mouche domestique, Blatte)", "Un vecteur indispensable au cycle", "Un vecteur qui pique", "Un vecteur génétique"],
    correct: 0,
    explanation: "Il transporte la souillure d'un point A (fèces) à un point B (aliments). Le pathogène ne change pas à l'intérieur."
  },
  {
    id: 'med_ent_3',
    question: "L'hématophagie est obligatoire pour :",
    options: ["Les femelles de moustiques (pour la ponte), les deux sexes de glossines, les poux, les puces, les tiques", "Tous les insectes", "Les mâles moustiques", "Les mouches domestiques"],
    correct: 0,
    explanation: "Seuls les hématophages (buveurs de sang) peuvent être des vecteurs biologiques par inoculation ou contamination sanguine."
  },
  {
    id: 'med_ent_4',
    question: "Qu'est-ce que la 'Période d'Incubation Extrinsèque' (PIE) ?",
    options: ["Le temps nécessaire au pathogène pour devenir infectant CHEZ le vecteur (entre le repas infectant et la piqûre infectante)", "Le temps d'incubation chez l'homme", "La durée de vie du moustique", "La durée du vol"],
    correct: 0,
    explanation: "C'est un facteur critique. Si la PIE est plus longue que la vie du moustique, il n'y aura jamais de transmission (le moustique meurt avant de devenir dangereux)."
  },
  {
    id: 'med_ent_5',
    question: "Un 'Réservoir de virus' (ou de parasite) est :",
    options: ["L'hôte vertébré (animal ou homme) qui héberge le pathogène et assure sa survie à long terme", "Le moustique", "L'eau", "Le sol"],
    correct: 0,
    explanation: "Le vecteur puise le pathogène dans le réservoir. Ex: Le rat est le réservoir de la peste."
  },

  // --- MODES DE TRANSMISSION (BIOLOGIQUES) ---
  {
    id: 'med_ent_6',
    question: "La transmission par inoculation salivaire (active) concerne :",
    options: ["Le Paludisme (Anophèle), les Arboviroses, la Leishmaniose, la Maladie du sommeil", "La Maladie de Chagas", "Le Typhus", "La Peste"],
    correct: 0,
    explanation: "Le vecteur injecte sa salive (contenant le pathogène) avant d'aspirer le sang pour l'empêcher de coaguler."
  },
  {
    id: 'med_ent_7',
    question: "La transmission par contamination fécale (stercorale) concerne :",
    options: ["La Maladie de Chagas (Triatome) et le Typhus (Pou)", "Le Paludisme", "La Dengue", "La Filariose"],
    correct: 0,
    explanation: "L'insecte défeque sur la peau pendant ou après le repas. L'homme fait pénétrer le pathogène en se grattant."
  },
  {
    id: 'med_ent_8',
    question: "La transmission par régurgitation concerne :",
    options: ["La Peste (Puce)", "Le Paludisme", "La Gale", "L'Onchocercose"],
    correct: 0,
    explanation: "Le blocage du proventricule force la puce à vomir le sang et les bactéries dans la plaie."
  },
  {
    id: 'med_ent_9',
    question: "La transmission par écrasement du vecteur concerne :",
    options: ["La Fièvre récurrente à poux (Borrelia recurrentis)", "La Dengue", "Le Paludisme", "La Maladie du sommeil"],
    correct: 0,
    explanation: "Les borrélies sont dans l'hémolymphe du pou. Il faut tuer le pou sur soi pour s'infecter."
  },
  {
    id: 'med_ent_10',
    question: "La transmission active par sortie des larves sur la peau (sans piqûre) concerne :",
    options: ["Les Filarioses (Wuchereria, Loa, Onchocerca)", "Le Paludisme", "La Peste", "Le Typhus"],
    correct: 0,
    explanation: "Subtilité : Les larves L3 sortent de la trompe du moustique/mouche et pénètrent activement par le trou de piqûre. Elles ne sont pas injectées."
  },

  // --- TYPES DE CYCLES CHEZ LE VECTEUR ---
  {
    id: 'med_ent_11',
    question: "Cycle 'Cyclo-propagatif' :",
    options: ["Le parasite change de stade ET se multiplie (Ex: Plasmodium, Leishmania)", "Le parasite ne change pas", "Le parasite meurt", "Le parasite diminue"],
    correct: 0,
    explanation: "C'est le mode le plus efficace pour l'épidémie (amplification)."
  },
  {
    id: 'med_ent_12',
    question: "Cycle 'Cyclo-développemental' :",
    options: ["Le parasite change de stade (maturation) MAIS ne se multiplie pas (Ex: Filaires)", "Le parasite se multiplie", "Le parasite dort", "Le parasite est digéré"],
    correct: 0,
    explanation: "1 microfilaire ingérée = au max 1 larve infestante. Le vecteur ne peut pas 'surcharger' en parasites."
  },
  {
    id: 'med_ent_13',
    question: "Cycle 'Propagatif' :",
    options: ["Le pathogène se multiplie sans changer de forme (Ex: Virus Arboviroses, Bactéries Peste)", "Le pathogène change de forme", "Le pathogène disparaît", "Le pathogène devient adulte"],
    correct: 0,
    explanation: "Les virus envahissent tout le corps du moustique et s'y répliquent."
  },

  // --- FACTEURS D'EFFICACITÉ VECTORIELLE ---
  {
    id: 'med_ent_14',
    question: "L'anthropophilie est :",
    options: ["La préférence du vecteur pour le sang humain", "La préférence pour les animaux", "La préférence pour les fleurs", "La peur de l'homme"],
    correct: 0,
    explanation: "Un vecteur zoophile (qui pique les vaches) transmettra mal une maladie strictement humaine (anthroponose)."
  },
  {
    id: 'med_ent_15',
    question: "L'endophilie est :",
    options: ["La tendance du vecteur à entrer et se reposer dans les maisons", "La vie dehors", "La vie dans l'eau", "La vie dans le sol"],
    correct: 0,
    explanation: "C'est la cible des aspersions intra-domiciliaires d'insecticide (PID) et des moustiquaires."
  },
  {
    id: 'med_ent_16',
    question: "L'exophilie est :",
    options: ["La tendance à piquer et se reposer à l'extérieur", "La vie dedans", "La vie sous terre", "La vie dans le lit"],
    correct: 0,
    explanation: "Ces vecteurs échappent aux moustiquaires. Il faut des répulsifs et des vêtements longs."
  },
  {
    id: 'med_ent_17',
    question: "La 'Longévité' du vecteur est cruciale car :",
    options: ["Il doit vivre assez longtemps pour que le parasite mature (finir la PIE) et piquer à nouveau", "Pour pondre plus", "Pour voyager loin", "Pour grossir"],
    correct: 0,
    explanation: "Si l'Anophèle vit 5 jours et que le Plasmodium met 10 jours à mûrir, le paludisme s'arrête."
  },
  {
    id: 'med_ent_18',
    question: "La 'Densité agressiva' (Taux de piqûres) est :",
    options: ["Le nombre de piqûres par homme et par nuit (ou jour)", "Le nombre de moustiques morts", "Le nombre d'œufs", "Le nombre de larves"],
    correct: 0,
    explanation: "Mesuré par la capture sur appât humain (Human Landing Catch)."
  },

  // --- INTERACTIONS HÔTE-VECTEUR ---
  {
    id: 'med_ent_19',
    question: "Le rôle de la salive des arthropodes hématophages est :",
    options: ["Anticoagulant, vasodilatateur, anesthésiant et anti-inflammatoire (pour faciliter le repas)", "Toxique", "Digérer le sang", "Tuer l'hôte"],
    correct: 0,
    explanation: "C'est un cocktail pharmacologique sophistiqué pour voler du sang incognito et rapidement."
  },
  {
    id: 'med_ent_20',
    question: "Pourquoi la salive favorise-t-elle l'infection (Saliva-Enhanced Transmission) ?",
    options: ["Elle modifie l'immunité locale de l'hôte et attire des cellules cibles (macrophages) que le parasite infecte", "Elle tue le parasite", "Elle bouche les vaisseaux", "Elle est acide"],
    correct: 0,
    explanation: "Le parasite (ex: Leishmania) profite de la salive comme d'un 'cheval de Troie' pour s'installer."
  },
  {
    id: 'med_ent_21',
    question: "La réaction allergique aux piqûres est due à :",
    options: ["La réaction immunitaire (IgE, Histamine) contre les protéines de la salive", "La taille de l'aiguille", "La quantité de sang perdu", "La peur"],
    correct: 0,
    explanation: "C'est pourquoi on s'immunise (désensibilisation naturelle) après de nombreuses piqûres d'une même espèce."
  },

  // --- ZOONOSES & ANTHROPONOSES ---
  {
    id: 'med_ent_22',
    question: "Une Anthroponose stricte (ex: Paludisme à P. falciparum) signifie :",
    options: ["Le cycle se fait uniquement entre l'Homme et le Vecteur (pas de réservoir animal)", "L'animal est le réservoir", "L'homme est une impasse", "Le vecteur est un oiseau"],
    correct: 0,
    explanation: "L'éradication est théoriquement possible si on traite tous les humains (plus de réservoir)."
  },
  {
    id: 'med_ent_23',
    question: "Une Zoonose (ex: Fièvre Jaune selvatique, Peste) signifie :",
    options: ["Le cycle se maintient chez les animaux, l'homme est infecté accidentellement", "L'homme est le seul hôte", "Le vecteur est humain", "Pas de vecteur"],
    correct: 0,
    explanation: "L'éradication est impossible car on ne peut pas traiter tous les singes ou tous les rats."
  },
  {
    id: 'med_ent_24',
    question: "Un 'Hôte Amplificateur' (ex: Porc pour Encéphalite Japonaise) sert à :",
    options: ["Multiplier massivement le virus dans son sang, permettant aux moustiques de s'infecter facilement", "Tuer le virus", "Manger les moustiques", "Transmettre à l'homme directement"],
    correct: 0,
    explanation: "Il augmente la charge virale dans l'environnement."
  },
  {
    id: 'med_ent_25',
    question: "L'Hôte 'Cul-de-sac' (Impasse épidémiologique) est :",
    options: ["Un hôte infecté malade, mais dont la virémie est trop faible pour infecter un nouveau moustique (ex: Homme pour West Nile)", "Le réservoir principal", "Le vecteur", "Le virus"],
    correct: 0,
    explanation: "La chaîne de transmission s'arrête avec lui."
  },

  // --- ÉCOLOGIE VECTORIELLE ---
  {
    id: 'med_ent_26',
    question: "Le 'Vecteur Principal' est :",
    options: ["L'espèce dominante responsable de la majorité des transmissions dans une zone", "L'espèce la plus grosse", "L'espèce la plus rare", "L'espèce qui ne pique pas"],
    correct: 0,
    explanation: "Cible prioritaire de la lutte."
  },
  {
    id: 'med_ent_27',
    question: "Un 'Vecteur Secondaire' :",
    options: ["Assure une transmission faible ou saisonnière, ou prend le relais quand le principal est absent", "Ne transmet rien", "Est un oiseau", "Est un poisson"],
    correct: 0,
    explanation: "Il maintient l'endémie à bas bruit."
  },
  {
    id: 'med_ent_28',
    question: "L'adaptation urbaine des vecteurs (Aedes aegypti, Anopheles stephensi) entraîne :",
    options: ["Des épidémies explosives en ville (Dengue, Paludisme urbain)", "La disparition des maladies", "Une baisse de la transmission", "Une migration vers la campagne"],
    correct: 0,
    explanation: "C'est le défi majeur du 21ème siècle."
  },
  {
    id: 'med_ent_29',
    question: "L'impact du réchauffement climatique sur les vecteurs :",
    options: ["Extension des zones géographiques (altitude, latitude) et accélération du cycle viral (PIE plus courte)", "Disparition des moustiques", "Ralentissement des virus", "Aucun effet"],
    correct: 0,
    explanation: "Le moustique monte plus haut en montagne et colonise le Nord. La chaleur 'cuit' le virus plus vite dans le moustique, le rendant infectant plus tôt."
  },
  {
    id: 'med_ent_30',
    question: "Le 'Vecteur Pont' (Bridge Vector) :",
    options: ["Transmet un pathogène d'un cycle sauvage (animal) vers l'homme (ex: Aedes albopictus pour Chikungunya)", "Relie deux ponts", "Ne pique que les ponts", "Est aquatique"],
    correct: 0,
    explanation: "Il fait le lien entre la forêt et le village."
  },

  // --- DÉTAILS ANATOMIQUES ---
  {
    id: 'med_ent_31',
    question: "Le 'Repas sanguin interrompu' est un facteur de risque pour :",
    options: ["La transmission mécanique immédiate sur un autre hôte", "La digestion", "La ponte", "Le sommeil"],
    correct: 0,
    explanation: "Si le moustique est chassé avant de finir, il va piquer quelqu'un d'autre tout de suite avec sa trompe souillée."
  },
  {
    id: 'med_ent_32',
    question: "La membrane péritrophique dans l'estomac du moustique sert à :",
    options: ["Envelopper le bol sanguin pour protéger l'épithélium digestif, mais le parasite doit la traverser", "Digérer le sang", "Respirer", "Voler"],
    correct: 0,
    explanation: "C'est une barrière physique que le Plasmodium (ookinète) doit franchir."
  },
  {
    id: 'med_ent_33',
    question: "Les ocelles (yeux simples) chez les insectes servent à :",
    options: ["Détecter les variations de lumière (jour/nuit), pas à former une image", "Voir en couleur", "Entendre", "Sentir"],
    correct: 0,
    explanation: "Les yeux composés servent à la vision, les ocelles à l'horloge biologique."
  },
  {
    id: 'med_ent_34',
    question: "Les tarses (pieds) des mouches sont munis de :",
    options: ["Chémorécepteurs (goût) pour tester la nourriture en marchant dessus", "Dents", "Yeux", "Oreilles"],
    correct: 0,
    explanation: "La mouche 'goûte' avec ses pieds."
  },
  {
    id: 'med_ent_35',
    question: "La 'Diapause' est contrôlée principalement par :",
    options: ["La photopériode (durée du jour) et la température", "La faim", "La soif", "Le bruit"],
    correct: 0,
    explanation: "Le raccourcissement des jours en automne signale au moustique de se préparer à l'hiver."
  },
  // --- CONCEPTS ÉPIDÉMIOLOGIQUES ---
  {
    id: 'med_ent_36',
    question: "La 'Marge de sécurité' d'un vecteur désigne :",
    options: ["Le temps pendant lequel le vecteur survit après être devenu infectant", "La distance de vol", "La taille du repas", "Le nombre d'œufs"],
    correct: 0,
    explanation: "C'est la fenêtre de tir pour transmettre la maladie. Si le moustique vit 20 jours et que le parasite met 12 jours à mûrir, la marge est de 8 jours."
  },
  {
    id: 'med_ent_37',
    question: "Le Taux d'Inoculation Entomologique (EIR) mesure :",
    options: ["Le nombre de piqûres infectantes reçues par une personne par an (Risque réel)", "Le nombre de moustiques total", "Le nombre de malades", "La quantité de pluie"],
    correct: 0,
    explanation: "C'est le produit de la densité agressive par l'indice sporozoïtique. En zone hyperendémique, il peut dépasser 100 piqûres infectantes/an."
  },
  {
    id: 'med_ent_38',
    question: "La 'Barrière d'espèce' empêche :",
    options: ["Un pathogène animal d'infecter l'homme (et vice versa), sauf en cas de zoonose émergente", "Le moustique de voler", "Le parasite de manger", "La reproduction"],
    correct: 0,
    explanation: "C'est pourquoi le paludisme des oiseaux ne touche pas l'homme."
  },
  {
    id: 'med_ent_39',
    question: "L'effet 'Dilution' en écologie vectorielle suggère que :",
    options: ["Une grande biodiversité animale réduit le risque pour l'homme (les moustiques piquent des animaux incompétents 'cul-de-sac')", "Plus il y a d'animaux, plus il y a de maladies", "La pluie dilue le virus", "Les virus sont moins forts"],
    correct: 0,
    explanation: "La perte de biodiversité favorise souvent l'émergence de zoonoses (le vecteur se rabat sur l'homme)."
  },

  // --- DÉTAILS PHYSIOLOGIQUES VECTEUR ---
  {
    id: 'med_ent_40',
    question: "La digestion du sang chez le moustique déclenche :",
    options: ["La production d'hormones ovariennes pour la maturation des œufs", "Le sommeil", "Le vol", "La mue"],
    correct: 0,
    explanation: "Le sang n'est pas pour l'énergie (sucre), mais pour la reproduction (protéines)."
  },
  {
    id: 'med_ent_41',
    question: "Les moustiques mâles se nourrissent de :",
    options: ["Nectar et jus de plantes (Glucides pour l'énergie du vol)", "Sang", "Eau", "Insectes"],
    correct: 0,
    explanation: "Ils sont d'importants pollinisateurs, comme les abeilles."
  },
  {
    id: 'med_ent_42',
    question: "L'organe de Johnston chez le moustique mâle sert à :",
    options: ["Entendre la fréquence du battement d'ailes de la femelle (Auditif)", "Voir", "Sentir", "Goûter"],
    correct: 0,
    explanation: "Situé à la base des antennes, il lui permet de localiser sa partenaire en vol."
  },
  {
    id: 'med_ent_43',
    question: "La spermatheque de la femelle moustique permet :",
    options: ["De stocker le sperme d'un seul accouplement pour féconder tous les œufs de sa vie", "De digérer le sperme", "De respirer", "De voler"],
    correct: 0,
    explanation: "Une seule copulation suffit pour toute la vie de la femelle. Elle n'a plus besoin des mâles ensuite."
  },
  
  // --- INTERACTIONS PATHOGÈNE-VECTEUR ---
  {
    id: 'med_ent_44',
    question: "Le parasite peut-il modifier le comportement du vecteur ?",
    options: ["Oui, il peut le rendre plus agressif ou l'empêcher d'avaler (blocage) pour favoriser sa transmission", "Non, le vecteur est passif", "Le parasite tue le vecteur tout de suite", "Le vecteur devient gentil"],
    correct: 0,
    explanation: "Exemple : La peste bloque la puce pour qu'elle morde plus. Le Plasmodium rend le moustique plus tenace."
  },
  {
    id: 'med_ent_45',
    question: "Le 'coût biologique' de la résistance aux insecticides signifie :",
    options: ["Les moustiques résistants sont souvent plus petits, vivent moins longtemps ou se reproduisent moins bien", "Ils sont plus forts", "Ils mangent plus", "Ils volent mieux"],
    correct: 0,
    explanation: "En l'absence d'insecticide, les moustiques sensibles reprennent le dessus car ils sont plus 'fit' (compétitifs)."
  },
  
  // --- CLASSIFICATION & NOMENCLATURE ---
  {
    id: 'med_ent_46',
    question: "Le suffixe '-idae' (ex: Culicidae) désigne :",
    options: ["Une Famille", "Un Genre", "Une Espèce", "Un Ordre"],
    correct: 0,
    explanation: "Standard taxonomique : Ordre (Diptera) -> Famille (Culicidae) -> Genre (Anopheles)."
  },
  {
    id: 'med_ent_47',
    question: "Le suffixe '-inae' (ex: Anophelinae) désigne :",
    options: ["Une Sous-famille", "Une Famille", "Une Espèce", "Un Genre"],
    correct: 0,
    explanation: "Culicidae se divise en Anophelinae et Culicinae."
  },
  {
    id: 'med_ent_48',
    question: "Une espèce 'cryptique' (complexe d'espèces) est :",
    options: ["Un groupe d'espèces morphologiquement identiques mais génétiquement distinctes (ex: Anopheles gambiae complex)", "Une espèce invisible", "Une espèce disparue", "Une espèce nouvelle"],
    correct: 0,
    explanation: "On ne peut les différencier qu'par PCR. Pourtant, leur comportement (vecteur ou non) peut être très différent."
  },

  // --- HISTOIRE DE LA MÉDECINE ---
  {
    id: 'med_ent_49',
    question: "Patrick Manson est le père de la médecine tropicale car :",
    options: ["Il a prouvé le premier qu'un insecte (moustique) pouvait transmettre un parasite (filaire) en 1877", "Il a découvert la quinine", "Il a découvert la bactérie de la peste", "Il a inventé le microscope"],
    correct: 0,
    explanation: "Le 'Grand fait de Manson' a ouvert la voie à Ross (Paludisme) et aux autres."
  },
  {
    id: 'med_ent_50',
    question: "Carlos Chagas est célèbre pour :",
    options: ["Avoir découvert à la fois le parasite, le vecteur et la maladie (Triade unique en médecine)", "Avoir découvert le paludisme", "Avoir découvert la dengue", "Avoir découvert le vaccin"],
    correct: 0,
    explanation: "Il a décrit le Trypanosoma cruzi dans la punaise AVANT de le trouver chez l'homme."
  },

  // --- OUTILS DE SURVEILLANCE ---
  {
    id: 'med_ent_51',
    question: "Le piège CDC lumineux (light trap) capture surtout :",
    options: ["Les moustiques femelles en quête d'hôte la nuit", "Les mâles", "Les larves", "Les œufs"],
    correct: 0,
    explanation: "Outil standard pour surveiller la densité vectorielle."
  },
  {
    id: 'med_ent_52',
    question: "L'Ovitrap (piège-pondoir) surveille :",
    options: ["La présence d'Aedes aegypti (en comptant les œufs pondus sur un support)", "Les Anophèles", "Les mouches", "Les tiques"],
    correct: 0,
    explanation: "Très sensible pour détecter la présence d'Aedes même quand la densité d'adultes est faible."
  },
  {
    id: 'med_ent_53',
    question: "La technique PCR sur moustique écrasé permet de :",
    options: ["Identifier l'espèce précise et savoir si elle porte le parasite (sporozoïte)", "Savoir son âge", "Savoir son poids", "Savoir son sexe"],
    correct: 0,
    explanation: "Outil moléculaire moderne indispensable."
  },

  // --- SYNTHÈSE GLOBALE ---
  {
    id: 'med_ent_54',
    question: "Quel est le vecteur le plus 'généraliste' (transmettant le plus de types de pathogènes différents) ?",
    options: ["La Tique (Virus, Bactéries, Protozoaires, Nématodes)", "Le Moustique", "Le Pou", "La Puce"],
    correct: 0,
    explanation: "Les tiques sont des 'sacs à pathogènes' polyvalents."
  },
  {
    id: 'med_ent_55',
    question: "La transmission trans-stadiale chez la tique signifie :",
    options: ["Le pathogène acquis par la larve reste présent chez la nymphe et l'adulte (il survit à la mue)", "Il meurt à la mue", "Il tue la tique", "Il s'envole"],
    correct: 0,
    explanation: "Indispensable pour qu'un vecteur à métamorphose soit efficace."
  },
  {
    id: 'med_ent_56',
    question: "L'anthropisation (déforestation, barrages) favorise souvent :",
    options: ["La prolifération des vecteurs (Anophèles, Escargots) et les épidémies", "La disparition des maladies", "La santé", "Les prédateurs"],
    correct: 0,
    explanation: "On crée des gîtes larvaires artificiels et on rapproche l'homme des cycles sauvages."
  },
  {
    id: 'med_ent_57',
    question: "La zooprophylaxie consiste à :",
    options: ["Utiliser du bétail comme écran pour détourner les moustiques de l'homme", "Tuer les animaux", "Vacciner les animaux", "Manger les animaux"],
    correct: 0,
    explanation: "Si le moustique est zoophile, placer l'étable entre la forêt et la maison protège la famille."
  },
  {
    id: 'med_ent_58',
    question: "L'effet 'Knock-down' (KD) des pyréthrinoïdes est :",
    options: ["Un effet de choc immédiat : le moustique tombe assommé dès le contact, avant de pouvoir piquer", "Un effet répulsif", "Un effet mortel lent", "Un effet stérilisant"],
    correct: 0,
    explanation: "C'est ce qu'on recherche sur une moustiquaire : empêcher la piqûre à travers les mailles."
  },
  {
    id: 'med_ent_59',
    question: "L'effet 'Killing' des insecticides est :",
    options: ["La mortalité différée (le moustique meurt plus tard, réduisant la population globale)", "Le choc immédiat", "La répulsion", "La fuite"],
    correct: 0,
    explanation: "Même s'il a piqué, s'il meurt, il ne transmettra pas (réduction de l'espérance de vie)."
  },
  {
    id: 'med_ent_60',
    question: "La différence entre vecteur 'Biologique' et 'Hôte Intermédiaire' est :",
    options: ["Le vecteur transporte activement (souvent en volant) ; l'hôte intermédiaire est souvent passif (mangé)", "Aucune différence", "Le vecteur est plus gros", "L'hôte intermédiaire est un insecte"],
    correct: 0,
    explanation: "Nuance sémantique. Le moustique est un vecteur et un HD (pour Plasmodium). Le Cyclops est un HI passif."
  },
  
  // --- QUESTIONS DE CULTURE GÉNÉRALE ---
  {
    id: 'med_ent_61',
    question: "Les arthropodes représentent environ quel pourcentage du règne animal ?",
    options: ["80%", "10%", "50%", "99%"],
    correct: 0,
    explanation: "C'est le phylum dominant sur Terre en nombre d'espèces."
  },
  {
    id: 'med_ent_62',
    question: "La chitine est :",
    options: ["Le composant principal de l'exosquelette des arthropodes (polysaccharide)", "Une protéine", "Un muscle", "Un venin"],
    correct: 0,
    explanation: "Elle leur donne leur rigidité et leur protection."
  },
  {
    id: 'med_ent_63',
    question: "Les phéromones servent à :",
    options: ["La communication chimique intraspécifique (sexe, alerte, agrégation)", "Tuer les proies", "Voler", "Digérer"],
    correct: 0,
    explanation: "On les utilise dans les pièges pour attirer les insectes."
  },
  {
    id: 'med_ent_64',
    question: "L'autogénèse chez certains moustiques signifie :",
    options: ["La capacité de pondre une première fois sans repas sanguin (sur les réserves larvaires)", "La capacité de se manger soi-même", "La reproduction sans mâle", "La vie sans eau"],
    correct: 0,
    explanation: "Adaptation utile si les hôtes sont rares."
  },
  {
    id: 'med_ent_65',
    question: "La sténogamie est :",
    options: ["La capacité de s'accoupler dans un espace restreint (utile pour l'élevage en labo)", "L'accouplement en plein air (essaimage)", "L'accouplement sans mâle", "L'accouplement multiple"],
    correct: 0,
    explanation: "Les espèces eurygames (qui ont besoin de grands espaces pour la nuée nuptiale) sont difficiles à élever."
  },
  {
    id: 'med_ent_66',
    question: "Les vecteurs K-stratèges (ex: Glossines) :",
    options: ["Font peu de descendants (1 larve à la fois) mais investissent beaucoup d'énergie pour leur survie", "Font des milliers d'œufs (r-stratèges)", "Ne se reproduisent pas", "Meurent vite"],
    correct: 0,
    explanation: "Contrairement aux moustiques (r-stratèges, ponte massive), les tsé-tsé sont fragiles démographiquement."
  },
  {
    id: 'med_ent_67',
    question: "Le terme 'Arbovirus' signifie :",
    options: ["ARthropod-BOrne VIRUS (Virus transmis par arthropodes)", "Virus des arbres", "Virus aérien", "Virus arabe"],
    correct: 0,
    explanation: "C'est un groupe écologique, pas taxonomique (inclut Flavivirus, Alphavirus, etc.)."
  },
  {
    id: 'med_ent_68',
    question: "Une épizootie est :",
    options: ["Une épidémie chez les animaux", "Une épidémie chez l'homme", "Une piqûre", "Une maladie rare"],
    correct: 0,
    explanation: "Souvent le signe avant-coureur d'une épidémie humaine (ex: mortalité des rats avant la peste, singes avant la fièvre jaune)."
  },
  {
    id: 'med_ent_69',
    question: "La 'Miasme theory' a été remplacée par :",
    options: ["La théorie des germes et des vecteurs", "La théorie virale", "La théorie génétique", "La magie"],
    correct: 0,
    explanation: "Le grand changement de paradigme du 19ème siècle."
  },
  {
    id: 'med_ent_70',
    question: "En conclusion, la lutte antivectorielle est :",
    options: ["Le pilier central de la prévention des maladies tropicales en l'absence de vaccins", "Inutile", "Facultative", "Dangereuse"],
    correct: 0,
    explanation: "Pour Dengue, Chagas, Zika... c'est la SEULE arme disponible."
  }
];

export default medical_entomology;
