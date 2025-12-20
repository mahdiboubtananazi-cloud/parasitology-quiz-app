const lifecycle = [
  // --- DÉFINITIONS GÉNÉRALES ---
  {
    id: 'life_h_1',
    question: "Qu'est-ce qu'un cycle 'monoxène' ?",
    options: ["Un cycle ne faisant intervenir qu'un seul hôte (l'hôte définitif)", "Un cycle nécessitant plusieurs hôtes intermédiaires", "Un cycle se déroulant uniquement chez l'animal", "Un cycle sans phase sexuée"],
    correct: 0,
    explanation: "Un cycle monoxène (ou direct) se déroule chez un seul hôte. Le parasite passe d'un individu à l'autre sans passer par un hôte intermédiaire (ex: Oxyure, Ascaris)."
  },
  {
    id: 'life_h_2',
    question: "Dans un cycle hétéroxène, qu'est-ce qui définit l'hôte définitif (HD) ?",
    options: ["C'est l'hôte chez lequel le parasite atteint sa maturité sexuelle et se reproduit", "C'est l'hôte qui héberge les larves", "C'est l'insecte vecteur", "C'est l'hôte qui meurt à la fin du cycle"],
    correct: 0,
    explanation: "L'hôte définitif héberge toujours la forme adulte du parasite (reproduction sexuée). L'hôte intermédiaire héberge les formes larvaires (reproduction asexuée ou maturation)."
  },
  {
    id: 'life_h_3',
    question: "Quelle est la définition d'une impasse parasitaire ?",
    options: ["Le parasite infecte un hôte inhabituel et ne peut pas achever son cycle", "Le parasite tue son hôte immédiatement", "Le parasite reste latent sans symptômes", "Le cycle s'arrête faute de partenaire sexuel"],
    correct: 0,
    explanation: "L'impasse parasitaire survient quand le parasite pénètre chez un hôte non spécifique. Il ne peut pas évoluer en adulte et finit par mourir (ex: Larva migrans, Hydatidose humaine)."
  },
  {
    id: 'life_h_4',
    question: "Qu'appelle-t-on un cycle 'auto-hétéroxène' (ex: Trichine, Anguillule) ?",
    options: ["Un même individu est successivement hôte définitif puis hôte intermédiaire", "Le parasite se multiplie seul", "Le cycle nécessite deux hôtes de la même espèce", "Le cycle se fait en laboratoire"],
    correct: 0,
    explanation: "Dans le cas de la Trichinellose, l'homme héberge les adultes (intestin) puis les larves (muscles). Il cumule les deux rôles dans un même organisme."
  },

  // --- NÉMATODES (CYCLE DIRECT - PÉRIL FÉCAL) ---
  {
    id: 'life_h_5',
    question: "Le cycle de l'Enterobius vermicularis (Oxyure) est qualifié de :",
    options: ["Cycle direct court (auto-infestation possible)", "Cycle direct long (maturation dans le sol)", "Cycle indirect", "Cycle cutané"],
    correct: 0,
    explanation: "C'est un cycle direct court. Les œufs pondus sont quasi immédiatement infestants (en quelques heures), permettant l'auto-infestation et la rétro-infestation."
  },
  {
    id: 'life_h_6',
    question: "Pourquoi l'œuf d'Ascaris lumbricoides n'est-il pas infestant immédiatement après la ponte ?",
    options: ["Il nécessite une maturation embryonnaire de plusieurs semaines dans le sol humide", "Il doit être ingéré par un escargot", "Il doit éclore dans l'eau", "Il doit être fécondé à l'extérieur"],
    correct: 0,
    explanation: "L'Ascaris a un cycle direct long. L'œuf éliminé dans les selles est unicellulaire. Il doit séjourner 2 à 4 semaines dans le milieu extérieur pour devenir embryonné et infestant."
  },
  {
    id: 'life_h_7',
    question: "Quelle est la particularité du cycle du Trichuris trichiura (Trichocéphale) ?",
    options: ["Cycle direct long sans migration tissulaire chez l'homme", "Cycle avec migration pulmonaire (Löffler)", "Cycle indirect par un insecte", "Pénétration transcutanée"],
    correct: 0,
    explanation: "Contrairement à l'Ascaris, le Trichocéphale ne migre pas dans l'organisme. L'œuf embryonné est ingéré, la larve éclot et se fixe directement dans le côlon/caecum."
  },

  // --- NÉMATODES (CYCLE CUTANÉ / MIGRATION) ---
  {
    id: 'life_h_8',
    question: "Quel est le mode de contamination de l'Ankylostomose (Ancylostoma duodenale / Necator americanus) ?",
    options: ["Pénétration transcutanée active des larves strongyloïdes enkystées dans le sol", "Ingestion d'œufs", "Piqûre de moustique", "Ingestion de viande"],
    correct: 0,
    explanation: "Les larves infestantes (L3) vivent dans la boue humide et traversent activement la peau (souvent des pieds) pour rejoindre la circulation sanguine."
  },
  {
    id: 'life_h_9',
    question: "Quel trajet effectuent les larves d'Ankylostomes après pénétration cutanée ?",
    options: ["Cœur droit -> Poumons -> Trachée -> Déglutition -> Intestin grêle", "Foie -> Cœur -> Cerveau", "Ganglions lymphatiques -> Peau", "Elles restent sous la peau"],
    correct: 0,
    explanation: "C'est une migration transpulmonaire obligatoire (comme l'Ascaris et l'Anguillule) pour atteindre le carrefour aéro-digestif et être dégluties."
  },
  {
    id: 'life_h_10',
    question: "Le cycle de Strongyloides stercoralis (Anguillule) a la particularité de pouvoir être :",
    options: ["Sexué (cycle stercoral externe) ou parthénogénétique (cycle parasitaire)", "Uniquement asexué", "Uniquement sexué", "Identique à celui de l'Ascaris"],
    correct: 0,
    explanation: "L'Anguillule alterne entre une vie libre stercorale (mâles et femelles) et une vie parasitaire (femelles parthénogénétiques seules dans l'intestin)."
  },
  {
    id: 'life_h_11',
    question: "Qu'est-ce que le cycle d'auto-infestation endogène dans l'Anguillulose ?",
    options: ["Transformation des larves rhabdtoïdes en strongyloïdes infestantes directement dans l'intestin", "Ingestion de ses propres selles", "Transmission mère-enfant", "Réactivation de kystes"],
    correct: 0,
    explanation: "Cela explique la pérennité de l'infection sur des décennies (plus de 30 ans) sans réinfestation externe, et la gravité chez les immunodéprimés (Anguillulose maligne)."
  },

  // --- LARVA MIGRANS ---
  {
    id: 'life_h_12',
    question: "Dans le syndrome de Larva Migrans Viscérale (Toxocara canis), l'homme est :",
    options: ["Un hôte paraténique (d'attente) ou accidentel en impasse", "L'hôte définitif", "L'hôte intermédiaire obligatoire", "Le vecteur"],
    correct: 0,
    explanation: "L'homme ingère des œufs de Toxocara du chien. Les larves éclosent et errent dans les tissus (foie, œil, cerveau) sans jamais devenir adultes."
  },
  {
    id: 'life_h_13',
    question: "Quelle est l'origine des larves responsables de la Larva Migrans Cutanée (Larvish) ?",
    options: ["Ankylostomes d'animaux (chien, chat)", "Ascaris humain", "Oxyures", "Filaires"],
    correct: 0,
    explanation: "Ce sont des larves d'ankylostomes (Ancylostoma caninum ou braziliense) qui pénètrent la peau humaine mais restent bloquées dans l'épiderme (impasse)."
  },

  // --- FILAIRES (CYCLE INDIRECT - VECTEURS) ---
  {
    id: 'life_h_14',
    question: "Quel est le stade infestant des filaires transmis par le vecteur ?",
    options: ["Larve L3", "Microfilaire", "Larve L1", "Œuf"],
    correct: 0,
    explanation: "Le vecteur ingère des microfilaires sanguicoles qui évoluent en L1, L2 puis L3 (infestante) dans ses muscles thoraciques avant de migrer vers la trompe pour être inoculées."
  },
  {
    id: 'life_h_15',
    question: "La Filariose de Bancroft (Wuchereria bancrofti) a pour vecteur :",
    options: ["Un moustique (Culex, Anophèle, Aedes)", "Une mouche", "Une tique", "Une puce"],
    correct: 0,
    explanation: "C'est une filariose transmise par des moustiques culicidés à activité nocturne."
  },
  {
    id: 'life_h_16',
    question: "Le vecteur de la Loase (Loa loa) est :",
    options: ["Le Chrysops (Taon rouge)", "La Simulie", "Le Moustique", "Le Glossine"],
    correct: 0,
    explanation: "Le Chrysops est un gros taon diurne qui vit dans la canopée des forêts d'Afrique centrale."
  },
  {
    id: 'life_h_17',
    question: "Où vivent les adultes de l'Onchocerca volvulus (Onchocercose) ?",
    options: ["Dans des nodules sous-cutanés (Onchocercomes)", "Dans les lymphatiques", "Dans le sang", "Dans l'intestin"],
    correct: 0,
    explanation: "Les adultes s'enkystent dans des nodules fibreux sous la peau. Seules les microfilaires circulent dans le derme."
  },
  {
    id: 'life_h_18',
    question: "Quel est le mode de reproduction du Ver de Guinée (Dracunculus medinensis) ?",
    options: ["Vivipare (la femelle émet des larves au contact de l'eau)", "Ovipare (pont des œufs)", "Parthénogénétique", "Division binaire"],
    correct: 0,
    explanation: "La femelle gravide perfore la peau et, au contact de l'eau fraîche, libère des milliers de larves (embryons) qui seront ingérées par des Cyclops."
  },
  {
    id: 'life_h_19',
    question: "Quel est l'hôte intermédiaire du Ver de Guinée ?",
    options: ["Le Cyclops (petit crustacé d'eau douce)", "L'escargot", "Le poisson", "Le moustique"],
    correct: 0,
    explanation: "L'homme se contamine en buvant de l'eau non filtrée contenant des Cyclops parasités par les larves."
  },

  // --- TRICHINELLOSE ---
  {
    id: 'life_h_20',
    question: "Comment l'homme se contamine-t-il par la Trichinella spiralis ?",
    options: ["Ingestion de viande crue/mal cuite contenant des larves enkystées", "Péril fécal", "Piqûre d'insecte", "Baignade"],
    correct: 0,
    explanation: "C'est une tropho-infestation (viande de porc, sanglier, cheval). La capsule du kyste est dissoute par les sucs gastriques, libérant les larves."
  },
  {
    id: 'life_h_21',
    question: "Quelle est la particularité des larves de Trichine nouveau-nées ?",
    options: ["Elles passent dans la lymphe et le sang pour s'enkyster dans les muscles striés", "Elles sont éliminées dans les selles", "Elles migrent vers le poumon pour être expectorées", "Elles restent dans l'intestin"],
    correct: 0,
    explanation: "Les femelles pondent des larves directement dans la muqueuse intestinale. Celles-ci migrent vers les muscles bien oxygénés (diaphragme, langue, deltoïde)."
  },

  // --- TRÉMATODES (GÉNÉRALITÉS) ---
  {
    id: 'life_h_22',
    question: "Quel est TOUJOURS le premier hôte intermédiaire (HI) d'un trématode ?",
    options: ["Un mollusque (gastéropode)", "Un poisson", "Un crustacé", "Un insecte"],
    correct: 0,
    explanation: "Tous les trématodes (douves et schistosomes) ont un cycle hétéroxène dont le 1er HI est obligatoirement un mollusque (spécifique à chaque espèce)."
  },
  {
    id: 'life_h_23',
    question: "Quelle forme larvaire sort du mollusque chez les Trématodes ?",
    options: ["La cercaire", "Le miracidium", "La redie", "Le sporocyste"],
    correct: 0,
    explanation: "Le cycle intra-mollusque aboutit à la production de cercaires (larves nageuses à queue) qui sont libérées dans l'eau."
  },
  {
    id: 'life_h_24',
    question: "Quelle est la forme infestante pour l'homme dans le cycle des Schistosomes ?",
    options: ["La furcocercaire (cercaire à queue fourchue)", "La métacercaire", "L'œuf", "Le miracidium"],
    correct: 0,
    explanation: "Contrairement aux douves, les schistosomes n'ont pas de 2ème hôte intermédiaire. La furcocercaire pénètre activement la peau de l'homme (hôte définitif) dans l'eau."
  },
  {
    id: 'life_h_25',
    question: "Quelle est la forme infestante pour l'homme dans le cycle des Douves (ex: Fasciola) ?",
    options: ["La métacercaire (enkystée sur un végétal ou dans un animal)", "La cercaire", "L'œuf", "La redie"],
    correct: 0,
    explanation: "La cercaire perd sa queue et s'enkyste pour devenir une métacercaire résistante, attendant d'être ingérée."
  },

  // --- SCHISTOSOMES (DÉTAILS) ---
  {
    id: 'life_h_26',
    question: "Où a lieu l'accouplement des Schistosomes adultes ?",
    options: ["Dans le système veineux porte ou les plexus vésicaux", "Dans l'intestin", "Dans le foie uniquement", "Dans les poumons"],
    correct: 0,
    explanation: "Le mâle transporte la femelle dans son canal gynécophore. Ils migrent à contre-courant vers leur lieu de ponte (plexus mésentériques ou vésicaux)."
  },
  {
    id: 'life_h_27',
    question: "Quel est l'hôte intermédiaire spécifique de Schistosoma haematobium ?",
    options: ["Bulinus (Le Bulin)", "Biomphalaria (La Planorbe)", "Oncomelania", "Lymnaea"],
    correct: 0,
    explanation: "Le Bulin est le mollusque hôte intermédiaire spécifique de la bilharziose urinaire."
  },
  {
    id: 'life_h_28',
    question: "Quel est l'hôte intermédiaire spécifique de Schistosoma mansoni ?",
    options: ["Biomphalaria (La Planorbe)", "Bulinus", "Oncomelania", "Limnée"],
    correct: 0,
    explanation: "La Planorbe est le mollusque hôte intermédiaire spécifique de la bilharziose intestinale à S. mansoni."
  },
  {
    id: 'life_h_29',
    question: "Comment les œufs de Schistosomes sortent-ils de l'organisme humain ?",
    options: ["Par effraction des tissus (traversée de la paroi vasculaire et de l'organe creux) grâce à leur éperon et des enzymes", "Par les voies biliaires", "Ils ne sortent jamais", "Par simple diffusion"],
    correct: 0,
    explanation: "C'est un processus actif et traumatique. L'œuf doit traverser la paroi veineuse puis la muqueuse (vésicale ou intestinale) pour tomber dans la lumière et être éliminé."
  },
  {
    id: 'life_h_30',
    question: "Que devient l'œuf de Schistosome une fois dans l'eau douce ?",
    options: ["Il éclot et libère un miracidium cilié nageur", "Il coule et attend d'être mangé", "Il se transforme en cercaire", "Il meurt immédiatement"],
    correct: 0,
    explanation: "Au contact de l'eau, le choc osmotique provoque l'éclosion de l'œuf qui libère le miracidium. Celui-ci doit trouver son mollusque en quelques heures."
  },

  // --- DOUVES (DÉTAILS) ---
  {
    id: 'life_h_31',
    question: "Quel est l'hôte intermédiaire de la Grande Douve (Fasciola hepatica) ?",
    options: ["La Limnée (Lymnaea truncatula)", "Le Bulin", "La Planorbe", "Le Bithynia"],
    correct: 0,
    explanation: "C'est un petit mollusque amphibie qui vit dans les zones humides (bord des ruisseaux, prés inondés)."
  },
  {
    id: 'life_h_32',
    question: "Où s'enkystent les métacercaires de Fasciola hepatica ?",
    options: ["Sur les végétaux aquatiques (Cresson, pissenlit)", "Dans la chair de poisson", "Dans un crabe", "Dans une fourmi"],
    correct: 0,
    explanation: "C'est une distomatose à transmission végétale. L'homme se contamine en mangeant des plantes sauvages ou domestiques (cressonnières) mal lavées."
  },
  {
    id: 'life_h_33',
    question: "Quel est le 2ème hôte intermédiaire de la Douve de Chine (Clonorchis sinensis) ?",
    options: ["Un poisson d'eau douce (Cyprinidé)", "Un crabe", "Une plante", "Une fourmi"],
    correct: 0,
    explanation: "Les cercaires pénètrent sous les écailles des poissons et s'enkystent. L'homme se contamine en mangeant du poisson cru."
  },
  {
    id: 'life_h_34',
    question: "Quel est le mode de contamination de la Paragonimose (Douve du poumon) ?",
    options: ["Ingestion de crustacés d'eau douce (crabes, écrevisses) crus ou mal cuits", "Ingestion de cresson", "Pénétration transcutanée", "Piqûre de moustique"],
    correct: 0,
    explanation: "Les métacercaires se trouvent dans les muscles des crustacés d'eau douce."
  },
  {
    id: 'life_h_35',
    question: "Quel est le cycle unique de Dicrocoelium dendriticum (Petite douve) ?",
    options: ["Cycle terrestre : Escargot -> Fourmi -> Mouton", "Cycle aquatique classique", "Cycle direct", "Cycle à un seul HI"],
    correct: 0,
    explanation: "C'est un cycle trixène terrestre exceptionnel. La fourmi ingère les boules de mucus de l'escargot contenant les cercaires."
  },
    // --- CESTODES (GÉNÉRALITÉS) ---
    {
      id: 'life_h_36',
      question: "Quelle est la caractéristique fondamentale du cycle de tous les Cestodes pathogènes pour l'homme ?",
      options: ["Ils sont hétéroxènes (nécessitent au moins un hôte intermédiaire)", "Ils sont monoxènes", "Ils n'ont pas de phase larvaire", "Ils se multiplient dans l'intestin"],
      correct: 0,
      explanation: "Tous les cestodes (Taenia, Echinocoque, Bothriocéphale) ont un cycle indirect nécessitant un hôte intermédiaire pour le développement de la larve (cysticerque, hydatide, etc.)."
    },
    {
      id: 'life_h_37',
      question: "Où vit le stade adulte des Cestodes chez l'homme ?",
      options: ["Dans la lumière de l'intestin grêle", "Dans le foie", "Dans les poumons", "Dans le gros intestin"],
      correct: 0,
      explanation: "Les adultes (vers plats segmentés) sont fixés à la muqueuse de l'intestin grêle par leur scolex et absorbent les nutriments par leur tégument."
    },
    {
      id: 'life_h_38',
      question: "Qu'est-ce qu'un proglottis gravide ?",
      options: ["Un segment terminal rempli d'œufs", "La tête du ver", "Une larve", "Un œuf"],
      correct: 0,
      explanation: "C'est un anneau mature situé en fin de chaîne (strobile), dont l'utérus est rempli de milliers d'œufs prêts à être disséminés."
    },
  
    // --- TAENIA SAGINATA & SOLIUM ---
    {
      id: 'life_h_39',
      question: "Quel est l'hôte intermédiaire de Taenia saginata ?",
      options: ["Le Bœuf (Bovin)", "Le Porc", "Le Poisson", "Le Chien"],
      correct: 0,
      explanation: "Les œufs disséminés sur les pâturages sont ingérés par les bovins. Les larves (Cysticercus bovis) s'enkystent dans leurs muscles."
    },
    {
      id: 'life_h_40',
      question: "Quel est l'hôte intermédiaire de Taenia solium ?",
      options: ["Le Porc (Porcin)", "Le Bœuf", "Le Mouton", "Le Chien"],
      correct: 0,
      explanation: "Le porc (coprophage) ingère les œufs humains. Les larves (Cysticercus cellulosae) s'enkystent dans ses muscles (ladrerie)."
    },
    {
      id: 'life_h_41',
      question: "Comment l'homme s'infeste-t-il par Taenia saginata ?",
      options: ["Ingestion de viande de bœuf crue ou saignante contenant des cysticerques vivants", "Ingestion d'œufs", "Contact avec un chien", "Piqûre d'insecte"],
      correct: 0,
      explanation: "C'est une tropho-infestation. La larve cysticerque est libérée dans l'intestin, dévagine son scolex et devient un ver adulte en 3 mois."
    },
    {
      id: 'life_h_42',
      question: "Quelle est la différence majeure de cycle entre T. saginata et T. solium pour l'homme ?",
      options: ["L'homme peut être hôte intermédiaire accidentel de T. solium (Cysticercose), mais jamais de T. saginata", "T. saginata est plus dangereux", "T. solium a un cycle direct", "T. saginata a deux hôtes intermédiaires"],
      correct: 0,
      explanation: "Si l'homme ingère des œufs de T. solium, il remplace le porc et développe une cysticercose (larves dans le cerveau, les yeux). Avec T. saginata, l'ingestion d'œufs est sans conséquence."
    },
    {
      id: 'life_h_43',
      question: "Comment se produit l'auto-infestation dans la Cysticercose ?",
      options: ["Par des mouvements anti-péristaltiques remontant des anneaux gravides dans l'estomac", "Par pénétration cutanée", "Par inhalation", "Par voie sexuelle"],
      correct: 0,
      explanation: "Lors de vomissements, des anneaux de T. solium peuvent remonter dans l'estomac. Les œufs sont libérés par l'acide gastrique et éclosent comme s'ils venaient d'être ingérés, causant une cysticercose massive."
    },
  
    // --- HYMENOLEPIS & BOTHRIOCÉPHALE ---
    {
      id: 'life_h_44',
      question: "Quel est le cycle habituel d'Hymenolepis nana ?",
      options: ["Cycle direct possible (seul cestode humain à cycle direct)", "Cycle indirect obligatoire par un poisson", "Cycle indirect par un mammifère", "Cycle cutané"],
      correct: 0,
      explanation: "H. nana est unique : l'homme peut être à la fois HD et HI. L'œuf ingéré libère une larve cysticercoïde dans la villosité intestinale qui redevient adulte dans la lumière (cycle court)."
    },
    {
      id: 'life_h_45',
      question: "Quel est le 1er hôte intermédiaire du Bothriocéphale (Diphyllobothrium latum) ?",
      options: ["Un petit crustacé planctonique (Cyclops / Copépode)", "Un poisson", "Un escargot", "Une algue"],
      correct: 0,
      explanation: "L'œuf libère un coracidium cilié dans l'eau qui doit être ingéré par un Copépode."
    },
    {
      id: 'life_h_46',
      question: "Quel est le 2ème hôte intermédiaire du Bothriocéphale, infestant pour l'homme ?",
      options: ["Un poisson d'eau douce carnassier (Brochet, Perche)", "Un crustacé", "Un oiseau", "Un mammifère marin"],
      correct: 0,
      explanation: "Le poisson ingère le copépode. La larve plérocercoïde s'installe dans ses muscles. L'homme se contamine en mangeant le poisson cru/fumé."
    },
    {
      id: 'life_h_47',
      question: "Le Bothriocéphale a-t-il besoin de conditions aquatiques pour son cycle ?",
      options: ["Oui, l'éclosion de l'œuf et le 1er stade larvaire sont strictement aquatiques", "Non, c'est un cycle terrestre", "Non, tout se passe dans l'hôte", "Oui, mais dans l'eau de mer uniquement"],
      correct: 0,
      explanation: "C'est un cycle complexe lié à l'eau douce (lacs, fleuves). L'œuf non embryonné à la ponte doit maturer dans l'eau."
    },
  
    // --- ECHINOCOCCUS (HYDATIDOSE) ---
    {
      id: 'life_h_48',
      question: "Quel est l'hôte définitif (HD) principal d'Echinococcus granulosus ?",
      options: ["Le Chien", "Le Mouton", "L'Homme", "Le Renard"],
      correct: 0,
      explanation: "Le chien héberge le ver adulte (très petit, quelques mm) dans son intestin. Il s'infeste en mangeant des viscères de mouton kystiques."
    },
    {
      id: 'life_h_49',
      question: "Quel est l'hôte intermédiaire (HI) habituel d'Echinococcus granulosus ?",
      options: ["Le Mouton (Herbivores)", "Le Chien", "Le Loup", "Le Chat"],
      correct: 0,
      explanation: "Le mouton ingère les œufs sur l'herbe souillée par les fèces du chien. Il développe la forme larvaire (kyste hydatique) dans ses viscères."
    },
    {
      id: 'life_h_50',
      question: "Quelle est la place de l'homme dans le cycle de l'Hydatidose ?",
      options: ["Hôte intermédiaire accidentel en impasse parasitaire", "Hôte définitif", "Vecteur", "Hôte paraténique"],
      correct: 0,
      explanation: "L'homme prend la place du mouton en ingérant accidentellement des œufs (caresses au chien, aliments souillés). Mais le cycle s'arrête car l'homme n'est pas mangé par le chien."
    },
    {
      id: 'life_h_51',
      question: "Quel est le mode de contamination de l'homme par l'Hydatidose ?",
      options: ["Ingestion d'embryophores (œufs) par mains sales ou aliments souillés", "Consommation de foie de mouton mal cuit", "Piqûre de tique", "Pénétration cutanée"],
      correct: 0,
      explanation: "Attention au piège : manger du foie kystique ne donne PAS l'hydatidose (la larve meurt dans l'estomac). Il faut avaler l'ŒUF venant du chien pour développer un kyste."
    },
    {
      id: 'life_h_52',
      question: "Quel est l'hôte définitif de l'Échinococcose alvéolaire (E. multilocularis) ?",
      options: ["Le Renard (et le Chien)", "Le Mouton", "La Vache", "L'Homme"],
      correct: 0,
      explanation: "C'est un cycle sylvatique. Le renard est l'hôte définitif principal. Les rongeurs (campagnols) sont les hôtes intermédiaires."
    },
  
    // --- RÉCAPITULATIF DES FORMES INFESTANTES ---
    {
      id: 'life_h_53',
      question: "Quelle est la forme infestante de l'Ascaris ?",
      options: ["Œuf embryonné", "Œuf non embryonné", "Larve L3 libre", "Cysticerque"],
      correct: 0,
      explanation: "L'œuf doit avoir maturé dans le sol pour contenir un embryon infestant."
    },
    {
      id: 'life_h_54',
      question: "Quelle est la forme infestante des Ankylostomes ?",
      options: ["Larve strongyloïde enkystée (L3)", "Œuf", "Larve rhabdtoïde", "Adulte"],
      correct: 0,
      explanation: "La larve L3 est la forme de résistance et de pénétration transcutanée."
    },
    {
      id: 'life_h_55',
      question: "Quelle est la forme infestante des Filaires lymphatiques ?",
      options: ["Larve L3 métacyclique dans la trompe du moustique", "Microfilaire sanguine", "Œuf", "Larve L1"],
      correct: 0,
      explanation: "Le moustique dépose la L3 sur la peau lors de la piqûre, et la larve pénètre par le trou de piqûre."
    },
    {
      id: 'life_h_56',
      question: "Quelle est la forme infestante de la Trichine ?",
      options: ["Larve L1 enkystée dans le muscle", "Œuf", "Adulte", "Cercaire"],
      correct: 0,
      explanation: "On ingère le kyste musculaire contenant la larve."
    },
    {
      id: 'life_h_57',
      question: "Quelle est la forme infestante des Schistosomes ?",
      options: ["Furcocercaire", "Métacercaire", "Miracidium", "Œuf"],
      correct: 0,
      explanation: "C'est la cercaire à queue fourchue, nageuse active."
    },
    {
      id: 'life_h_58',
      question: "Quelle est la forme infestante de la Fasciola hepatica ?",
      options: ["Métacercaire fixée sur un végétal", "Cercaire nageuse", "Œuf", "Adulte"],
      correct: 0,
      explanation: "La métacercaire est la forme de résistance immobile."
    },
    {
      id: 'life_h_59',
      question: "Quelle est la forme infestante de Taenia saginata ?",
      options: ["Larve cysticerque (Cysticercus bovis)", "Œuf embryonné", "Proglottis", "Coracidium"],
      correct: 0,
      explanation: "C'est la larve vésiculeuse contenue dans la viande de bœuf."
    },
    {
      id: 'life_h_60',
      question: "Quelle est la forme infestante de l'Hymenolepis nana (mode direct) ?",
      options: ["Œuf embryonné", "Larve cysticercoïde", "Cysticerque", "Proglottis"],
      correct: 0,
      explanation: "L'œuf éliminé est directement infestant s'il est ingéré (mains sales)."
    },
  
    // --- DÉTAILS DE BIOLOGIE (MIGRATION & MATURATION) ---
    {
      id: 'life_h_61',
      question: "Combien de temps dure la migration de l'Ascaris (phase tissulaire) avant le retour à l'intestin ?",
      options: ["Environ 8 à 15 jours", "2 mois", "24 heures", "1 an"],
      correct: 0,
      explanation: "La traversée hépato-pulmonaire est assez rapide. Les larves remontent la trachée vers le 8ème-10ème jour."
    },
    {
      id: 'life_h_62',
      question: "Quelle est la longévité d'un Taenia saginata adulte dans l'intestin ?",
      options: ["Plusieurs années (jusqu'à 20 ans)", "quelques semaines", "6 mois", "48 heures"],
      correct: 0,
      explanation: "S'il n'est pas traité, le ver solitaire peut vivre aussi longtemps que son hôte."
    },
    {
      id: 'life_h_63',
      question: "Quelle est la longévité des microfilaires de Loa loa dans le sang ?",
      options: ["Plusieurs années (jusqu'à 15-17 ans)", "Quelques jours", "1 mois", "24 heures"],
      correct: 0,
      explanation: "Les filaires sont des parasites à très longue vie, ce qui explique la chronicité des symptômes."
    },
    {
      id: 'life_h_64',
      question: "Pourquoi l'oxyurose est-elle qualifiée de 'familiale' ?",
      options: ["À cause de la dissémination massive des œufs volatils dans l'environnement domestique", "Parce qu'elle est héréditaire", "Parce que les oxyures vivent en famille", "Parce qu'elle touche uniquement les parents"],
      correct: 0,
      explanation: "Les œufs légers contaminent la literie, les poussières, les jouets, infestant rapidement tout le foyer."
    },
    {
      id: 'life_h_65',
      question: "Le cycle de l'Anisakis (Anisakiase) implique :",
      options: ["Des mammifères marins (HD) et des poissons/céphalopodes (HI)", "Des oiseaux", "Des animaux terrestres", "Uniquement des poissons"],
      correct: 0,
      explanation: "L'homme est un hôte accidentel en mangeant du poisson cru. Le cycle naturel se fait entre crustacés, poissons et cétacés/phoques."
    },
    {
      id: 'life_h_66',
      question: "Quelle condition est nécessaire à l'éclosion des œufs de Douves et de Bothriocéphale ?",
      options: ["La présence d'eau douce", "La sécheresse", "L'eau de mer", "Le gel"],
      correct: 0,
      explanation: "Ce sont des cycles liés à l'hydrobiologie d'eau douce. Sans eau, les œufs se dessèchent et meurent."
    },
    {
      id: 'life_h_67',
      question: "Le phénomène de 'polyembryonie' chez les Trématodes (Douves/Schistosomes) a lieu :",
      options: ["Chez le mollusque hôte intermédiaire", "Chez l'homme", "Dans l'eau", "Chez l'adulte"],
      correct: 0,
      explanation: "Un seul miracidium qui pénètre un mollusque va se multiplier de façon asexuée (sporocyste -> rédies -> cercaires) pour donner des milliers de cercaires. C'est une amplification parasitaire majeure."
    },
    {
      id: 'life_h_68',
      question: "Quelle est la particularité de la reproduction des Schistosomes par rapport aux autres Trématodes ?",
      options: ["Les sexes sont séparés (gonochorisme)", "Ils sont hermaphrodites", "Ils sont parthénogénétiques", "Ils ne se reproduisent pas"],
      correct: 0,
      explanation: "Les douves sont hermaphrodites (le même ver a les deux sexes). Les schistosomes sont les seuls trématodes à sexes séparés (dimorphisme sexuel)."
    },
    {
      id: 'life_h_69',
      question: "La spécificité parasitaire (sténoxénie) est très forte pour :",
      options: ["Le choix de l'hôte intermédiaire mollusque (Schistosomes)", "L'hôte définitif de la toxocarose", "Le vecteur de la Loase", "L'hôte de l'anguillule"],
      correct: 0,
      explanation: "Chaque espèce de Schistosome ne peut infecter qu'une espèce précise de mollusque. L'absence de ce mollusque dans une région empêche le cycle."
    },
    {
      id: 'life_h_70',
      question: "La mue larvaire est une caractéristique du développement de :",
      options: ["Tous les Nématodes (vers ronds)", "Les Trématodes", "Les Cestodes", "Les Protozoaires"],
      correct: 0,
      explanation: "Comme les arthropodes, les nématodes ont une cuticule et doivent muer (généralement 4 mues : L1 -> L2 -> L3 -> L4 -> Adulte) pour grandir."
    },
    // --- SYNTHÈSE & CAS PARTICULIERS ---
    {
      id: 'life_h_71',
      question: "Pourquoi la Trichinellose est-elle considérée comme une impasse parasitaire pour l'homme ?",
      options: ["Car l'homme n'est pas mangé par un autre carnivore (cycle épidémiologique fermé)", "Car le parasite meurt tout de suite", "Car l'homme est immunisé", "Car le cycle nécessite de l'eau"],
      correct: 0,
      explanation: "Biologiquement, le cycle est complet chez l'homme (adulte -> larve). Mais épidémiologiquement, comme le cadavre humain n'est pas consommé, les larves enkystées ne sont jamais transmises. C'est un cul-de-sac."
    },
    {
      id: 'life_h_72',
      question: "Le cycle de l'Ascaris nécessite un passage obligatoire par :",
      options: ["Le sol (géohelminthe)", "L'eau", "Un insecte", "Un autre animal"],
      correct: 0,
      explanation: "L'Ascaris est un géohelminthe typique. La maturation de l'œuf dépend de la chaleur et de l'humidité du sol."
    },
    {
      id: 'life_h_73',
      question: "Quelle parasitose peut se contracter en marchant pieds nus sur une plage tropicale souillée ?",
      options: ["Larva Migrans Cutanée (Ankylostomes de chien)", "Bilharziose", "Filariose", "Oxyurose"],
      correct: 0,
      explanation: "Les larves d'ankylostomes canins, présents dans les déjections de chiens errants sur le sable, pénètrent la peau des pieds des baigneurs."
    },
    {
      id: 'life_h_74',
      question: "L'ingestion accidentelle d'une puce écrasée par un enfant peut transmettre :",
      options: ["Dipylidium caninum (Ténia du chien)", "Ascaris", "Oxyure", "Trichocéphale"],
      correct: 0,
      explanation: "La puce est l'hôte intermédiaire de ce ténia du chien. Si l'enfant avale la puce (en jouant avec le chien), il développe le ver adulte."
    },
    {
      id: 'life_h_75',
      question: "La transmission transplacentaire (mère-enfant) est possible pour :",
      options: ["La Toxoplasmose (Protozoaire) - mais rarement pour les helminthes sauf parfois Toxocara ou Ankylostomes (rare)", "L'Oxyurose", "Le Taenia", "La Douve"],
      correct: 0,
      explanation: "Contrairement aux protozoaires (Toxo, Plasmodium), les helminthes traversent rarement le placenta, bien que des cas rares d'ankylostomose ou toxocarose congénitale existent."
    },
  
    // --- QUESTIONS TRANSVERSALES ---
    {
      id: 'life_h_76',
      question: "Parmi ces parasites, lequel n'a PAS de phase migratoire tissulaire chez l'homme ?",
      options: ["Trichuris trichiura (Trichocéphale)", "Ascaris lumbricoides", "Strongyloides stercoralis", "Ancylostoma duodenale"],
      correct: 0,
      explanation: "Le Trichocéphale éclot dans l'intestin et s'y fixe directement sans passer par le foie ou les poumons."
    },
    {
      id: 'life_h_77',
      question: "Quel parasite est transmis par la consommation de cresson sauvage ?",
      options: ["Fasciola hepatica", "Ascaris", "Taenia", "Giardia"],
      correct: 0,
      explanation: "C'est le mode de contamination classique de la distomatose hépatique."
    },
    {
      id: 'life_h_78',
      question: "Quel parasite est transmis par la consommation de viande de porc ?",
      options: ["Taenia solium et Trichinella spiralis", "Taenia saginata", "Fasciola hepatica", "Echinococcus"],
      correct: 0,
      explanation: "Le porc est l'hôte intermédiaire de T. solium et le réservoir de Trichinella."
    },
    {
      id: 'life_h_79',
      question: "Quel parasite est transmis par la consommation de viande de bœuf ?",
      options: ["Taenia saginata", "Taenia solium", "Trichinella", "Ascaris"],
      correct: 0,
      explanation: "Le bœuf transmet uniquement le T. saginata (ver solitaire inerme)."
    },
    {
      id: 'life_h_80',
      question: "Quel parasite est transmis par la consommation de poisson d'eau douce ?",
      options: ["Bothriocéphale et Clonorchis sinensis", "Anisakis (poisson de mer)", "Taenia", "Ascaris"],
      correct: 0,
      explanation: "Les poissons d'eau douce hébergent les larves plérocercoïdes de Bothriocéphale et les métacercaires de douves de Chine/Opisthorchis."
    },
  
    // --- ÉCOLOGIE PARASITAIRE ---
    {
      id: 'life_h_81',
      question: "L'élimination des moustiques permet de couper le cycle de :",
      options: ["La Filariose de Bancroft", "L'Onchocercose (Simulie)", "La Loase (Chrysops)", "La Bilharziose"],
      correct: 0,
      explanation: "La lutte antivectorielle (moustiquaires, insecticides) vise le moustique vecteur de la filariose lymphatique."
    },
    {
      id: 'life_h_82',
      question: "L'amélioration de l'hygiène fécale (latrines) ne suffit pas à interrompre la transmission de :",
      options: ["La Filariose (transmission vectorielle)", "L'Ascaridiose", "L'Ankylostomose", "La Bilharziose intestinale"],
      correct: 0,
      explanation: "Pour les maladies à vecteurs volants (moustiques), l'assainissement seul est insuffisant, il faut aussi contrôler le vecteur."
    },
    {
      id: 'life_h_83',
      question: "Le cycle de la Bilharziose est interrompu par :",
      options: ["L'absence de mollusques hôtes intermédiaires (lutte molluscicide)", "La vaccination des chiens", "La cuisson de la viande", "Le port de masque"],
      correct: 0,
      explanation: "Sans mollusque, le miracidium meurt et le cycle s'arrête. C'est une stratégie de lutte (chimique ou biologique)."
    },
    {
      id: 'life_h_84',
      question: "La 'boue' est un élément clé du cycle de :",
      options: ["L'Ankylostome et de l'Anguillule", "L'Oxyure", "Le Taenia", "La Filaire"],
      correct: 0,
      explanation: "Les larves de ces nématodes se développent et survivent dans les sols boueux, humides et chauds, attendant un hôte."
    },
    {
      id: 'life_h_85',
      question: "Le péril fécal est dit 'interne' dans le cas de :",
      options: ["L'auto-infestation à Strongyloides", "L'Ascaris", "L'Ankylostome", "La Bilharziose"],
      correct: 0,
      explanation: "Le cycle se boucle entièrement à l'intérieur de l'hôte sans passage par l'extérieur."
    },
  
    // --- STADES ÉVOLUTIFS ---
    {
      id: 'life_h_86',
      question: "Qu'est-ce qu'un embryophore ?",
      options: ["La coque épaisse entourant l'embryon hexacanthe des Taenia", "Une larve nageuse", "Un kyste", "Un adulte"],
      correct: 0,
      explanation: "C'est la structure résistante qui protège l'embryon de T. saginata ou T. solium dans le milieu extérieur."
    },
    {
      id: 'life_h_87',
      question: "La larve 'hexacanthe' possède :",
      options: ["6 crochets", "6 ventouses", "6 queues", "6 noyaux"],
      correct: 0,
      explanation: "C'est la caractéristique de l'embryon des cestodes (oncosphère), armé de 3 paires de crochets pour perforer l'intestin."
    },
    {
      id: 'life_h_88',
      question: "La larve 'rhabdtoïde' est :",
      options: ["Le premier stade larvaire (L1) non infestant des Anguillules et Ankylostomes", "Le stade infestant", "Le stade adulte", "Une larve de mouche"],
      correct: 0,
      explanation: "Elle a un œsophage à double renflement. Elle doit muer en larve strongyloïde (L3) pour devenir infestante."
    },
    {
      id: 'life_h_89',
      question: "La larve 'strongyloïde' est caractérisée par :",
      options: ["Un œsophage cylindrique long, c'est le stade infestant (L3)", "Une queue fourchue", "Des crochets", "Une coquille"],
      correct: 0,
      explanation: "C'est la forme mobile, résistante, capable de traverser la peau."
    },
    {
      id: 'life_h_90',
      question: "Le scolex est :",
      options: ["La tête du Cestode, organe de fixation", "La queue", "L'œuf", "L'intestin"],
      correct: 0,
      explanation: "Il porte les ventouses et parfois une couronne de crochets (rostre) pour l'ancrage."
    },
  
    // --- QUESTIONS FINALES ---
    {
      id: 'life_h_91',
      question: "Quel parasite pond des œufs munis d'un éperon latéral ?",
      options: ["Schistosoma mansoni", "Schistosoma haematobium (éperon terminal)", "Fasciola", "Ascaris"],
      correct: 0,
      explanation: "L'éperon latéral est la signature morphologique de l'œuf de S. mansoni."
    },
    {
      id: 'life_h_92',
      question: "Quel parasite pond des œufs munis d'un éperon terminal ?",
      options: ["Schistosoma haematobium", "Schistosoma mansoni", "Schistosoma japonicum (éperon réduit)", "Taenia"],
      correct: 0,
      explanation: "L'éperon terminal permet de reconnaître S. haematobium dans les urines."
    },
    {
      id: 'life_h_93',
      question: "Les œufs de Trichocéphale ont une forme caractéristique de :",
      options: ["Citron (bi-operculés)", "Sphère", "Disque", "Triangle"],
      correct: 0,
      explanation: "Ils sont typiquement en forme de citron ou de ballon de rugby avec deux bouchons muqueux aux pôles."
    },
    {
      id: 'life_h_94',
      question: "La 'Ladrerie' désigne l'infestation musculaire massive par des cysticerques chez :",
      options: ["Le Porc (et parfois le Bœuf)", "Le Poisson", "L'Escargot", "Le Chien"],
      correct: 0,
      explanation: "C'est le terme vétérinaire pour la cysticercose animale, rendant la viande impropre à la consommation."
    },
    {
      id: 'life_h_95',
      question: "Le cycle de l'Echinocoque est dit 'synanthropique' quand il se déroule entre :",
      options: ["Le chien domestique et le mouton d'élevage", "Le renard et le campagnol", "L'homme et le porc", "Le poisson et l'oiseau"],
      correct: 0,
      explanation: "C'est le cycle domestique, lié à l'activité humaine (élevage), par opposition au cycle sauvage (sylvatique)."
    },
    {
      id: 'life_h_96',
      question: "La contamination par l'eau de boisson est le mode principal pour :",
      options: ["La Dracunculose (Cyclops)", "La Bilharziose (Baignade)", "L'Ankylostomose (Peau)", "La Filariose (Piqûre)"],
      correct: 0,
      explanation: "Boire de l'eau contenant des Cyclops est le seul moyen d'attraper le Ver de Guinée."
    },
    {
      id: 'life_h_97',
      question: "Le cycle de la Loase est favorisé par :",
      options: ["L'écosystème forestier humide", "Le désert", "La haute montagne", "Les villes"],
      correct: 0,
      explanation: "Le vecteur Chrysops vit dans les forêts galeries équatoriales."
    },
    {
      id: 'life_h_98',
      question: "Quelle est la durée de la phase pré-patente (incubation) de la Filariose lymphatique ?",
      options: ["Très longue (plusieurs mois à années)", "Quelques jours", "1 semaine", "24 heures"],
      correct: 0,
      explanation: "Les symptômes chroniques (éléphantiasis) apparaissent souvent des années après l'infestation initiale."
    },
    {
      id: 'life_h_99',
      question: "La libération des cercaires par le mollusque est influencée par :",
      options: ["La lumière solaire (phototropisme) et la température", "La lune", "Le vent", "La pluie"],
      correct: 0,
      explanation: "C'est pourquoi la contamination (baignade) est plus risquée aux heures chaudes et ensoleillées de la journée."
    },
    {
      id: 'life_h_100',
      question: "En conclusion, quel est le meilleur moyen de briser le cycle des géohelminthes (Ascaris, Trichocéphale) ?",
      options: ["L'hygiène fécale (latrines) et le lavage des mains", "La cuisson de la viande", "Les moustiquaires", "L'éviction des bains"],
      correct: 0,
      explanation: "Empêcher les œufs d'arriver au sol (latrines) et se laver les mains avant de manger coupe la transmission."
    }
  ];
  
  export default lifecycle;
  