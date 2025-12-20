const diptera = [
  // --- GÉNÉRALITÉS & MORPHOLOGIE CULICIDAE ---
  {
    id: 'dipt_1',
    question: "Quelle est la caractéristique morphologique des ailes des moustiques (Culicidae) ?",
    options: ["Elles sont recouvertes d'écailles sur les nervures", "Elles sont transparentes sans écailles", "Elles sont tachetées de rouge", "Elles sont absentes"],
    correct: 0,
    explanation: "La présence d'écailles sur les nervures alaires est un critère d'identification majeur de la famille des Culicidae."
  },
  {
    id: 'dipt_2',
    question: "Chez les moustiques, à quoi sert la trompe (proboscis) du mâle ?",
    options: ["À aspirer le nectar des fleurs (phytophage)", "À piquer pour prendre du sang", "À pondre des œufs", "À respirer"],
    correct: 0,
    explanation: "Seule la femelle est hématophage (pour la maturation des œufs). Le mâle se nourrit exclusivement de jus sucrés végétaux."
  },
  {
    id: 'dipt_3',
    question: "Quel genre de moustique possède des palpes maxillaires aussi longs que la trompe chez la femelle ?",
    options: ["Anopheles", "Culex", "Aedes", "Mansonia"],
    correct: 0,
    explanation: "C'est le critère morphologique clé pour distinguer les Anophélines (palpes longs) des Culicinés (palpes courts) au stade adulte."
  },
  {
    id: 'dipt_4',
    question: "Quelle est la position de repos caractéristique de l'Anophèle adulte ?",
    options: ["Corps incliné en ligne droite, tête en bas (angle de 45° avec le support)", "Corps parallèle au support (bossu)", "Pattes arrière levées", "Ailes écartées"],
    correct: 0,
    explanation: "L'axe corps-trompe est rectiligne et oblique par rapport au support. C'est un moyen simple de les identifier sur un mur."
  },
  {
    id: 'dipt_5',
    question: "Quelle est la position de repos caractéristique des Culicinés (Culex/Aedes) ?",
    options: ["Corps parallèle au support, aspect 'bossu'", "Corps incliné tête en bas", "Tête relevée vers le haut", "Sur le dos"],
    correct: 0,
    explanation: "L'abdomen est parallèle au mur, et le thorax forme une bosse. L'axe corps-trompe n'est pas rectiligne."
  },
  {
    id: 'dipt_6',
    question: "Comment distingue-t-on les antennes du moustique mâle de celles de la femelle ?",
    options: ["Les antennes du mâle sont plumeuses (touffues)", "Les antennes du mâle sont grêles (fines)", "Le mâle n'a pas d'antennes", "Les antennes du mâle sont rouges"],
    correct: 0,
    explanation: "Les antennes plumeuses servent à capter les phéromones de la femelle pour l'accouplement."
  },
  {
    id: 'dipt_7',
    question: "Les œufs d'Anophèle ont une particularité morphologique unique :",
    options: ["Ils possèdent des flotteurs latéraux", "Ils sont collés en radeau (navicelle)", "Ils sont résistants à la dessiccation (œufs durables)", "Ils sont sphériques"],
    correct: 0,
    explanation: "Les œufs d'Anophèle sont pondus isolément à la surface de l'eau et possèdent des flotteurs remplis d'air pour ne pas couler."
  },
  {
    id: 'dipt_8',
    question: "Les œufs de Culex sont pondus :",
    options: ["Groupés en 'radeau' ou 'navicelle' flottant à la surface", "Isolés sur l'eau", "Sur la terre humide", "Sur les plantes"],
    correct: 0,
    explanation: "La femelle Culex colle ses œufs les uns aux autres pour former une structure flottante en forme de barque."
  },
  {
    id: 'dipt_9',
    question: "Les œufs d'Aedes ont la capacité remarquable de :",
    options: ["Résister à la dessiccation pendant des mois (diapause)", "Flotter grâce à des ballons", "Éclore immédiatement", "Être pondus en vol"],
    correct: 0,
    explanation: "Ils sont pondus sur les parois humides (pas directement dans l'eau). Si le gîte s'assèche, l'œuf survit jusqu'à la prochaine pluie."
  },
  {
    id: 'dipt_10',
    question: "La larve d'Anophèle se tient dans l'eau :",
    options: ["Horizontalement sous la surface (pas de siphon respiratoire)", "Obliquement tête en bas (siphon respiratoire)", "Au fond de l'eau", "Verticalement"],
    correct: 0,
    explanation: "Elle respire via des stigmates situés à plat sur l'abdomen, ce qui l'oblige à rester parallèle à la surface."
  },

  // --- BIOLOGIE & ÉCOLOGIE (MOUSTIQUES) ---
  {
    id: 'dipt_11',
    question: "Quelle est l'activité trophique (piqûre) préférentielle des Anophèles ?",
    options: ["Nocturne (crépusculaire et nuit)", "Diurne stricte", "À midi pile", "Le matin seulement"],
    correct: 0,
    explanation: "C'est pourquoi la moustiquaire de lit est l'outil de prévention majeur contre le paludisme."
  },
  {
    id: 'dipt_12',
    question: "Aedes aegypti (vecteur Dengue/Zika) pique préférentiellement :",
    options: ["Le jour (Diurne), avec des pics le matin et en fin d'après-midi", "La nuit profonde", "Uniquement la nuit", "N'importe quand"],
    correct: 0,
    explanation: "Les moustiquaires de lit sont donc inefficaces contre la Dengue. Il faut se protéger le jour (répulsifs, vêtements)."
  },
  {
    id: 'dipt_13',
    question: "Quel type de gîte larvaire préfère Aedes aegypti ?",
    options: ["Petites collections d'eau artificielles et propres (pneus, pots de fleurs, bidons)", "Grands marécages", "Rivières courantes", "Eaux très sales et polluées"],
    correct: 0,
    explanation: "C'est un moustique 'domestique' et urbain, qui profite des déchets humains retenant l'eau de pluie."
  },
  {
    id: 'dipt_14',
    question: "Culex quinquefasciatus (Culex pipiens fatigans) prolifère surtout dans :",
    options: ["Les eaux sales, polluées et riches en matière organique (égouts, fosses septiques)", "Les eaux claires de source", "Les torrents", "Les creux d'arbres"],
    correct: 0,
    explanation: "C'est le moustique de la nuisance urbaine et des quartiers mal assainis."
  },
  {
    id: 'dipt_15',
    question: "Quelle est la distance de vol moyenne d'un Aedes aegypti ?",
    options: ["Courte (quelques centaines de mètres autour de son gîte)", "Très longue (plusieurs kilomètres)", "Nulle (il ne vole pas)", "Continentale"],
    correct: 0,
    explanation: "Il reste très proche de l'habitation humaine où il est né. L'élimination des gîtes péridomestiques est donc très efficace."
  },

  // --- ANOPHÈLES & PALUDISME ---
  {
    id: 'dipt_16',
    question: "Seules les Anophèles femelles transmettent le paludisme car :",
    options: ["Le parasite a besoin d'un environnement spécifique présent uniquement chez la femelle hématophage", "Le mâle meurt après l'accouplement", "Le mâle ne vole pas", "La femelle est plus grosse"],
    correct: 0,
    explanation: "Le cycle sporogonique du Plasmodium se déroule dans l'estomac et les glandes salivaires de la femelle qui vit assez longtemps pour cela."
  },
  {
    id: 'dipt_17',
    question: "Combien de temps dure le cycle sporogonique (extrinsèque) du Plasmodium chez l'Anophèle ?",
    options: ["10 à 20 jours (selon la température)", "24 heures", "1 heure", "3 mois"],
    correct: 0,
    explanation: "C'est le temps nécessaire pour que les gamétocytes ingérés deviennent des sporozoïtes infectants. Si le moustique meurt avant, pas de transmission."
  },
  {
    id: 'dipt_18',
    question: "Quelle espèce d'Anophèle est le vecteur majeur en Afrique subsaharienne (le plus efficace au monde) ?",
    options: ["Anopheles gambiae", "Anopheles maculipennis", "Anopheles stephensi", "Anopheles albimanus"],
    correct: 0,
    explanation: "Anopheles gambiae est très anthropophile (aime l'homme), endophile (pique dedans) et a une grande longévité."
  },
  {
    id: 'dipt_19',
    question: "Qu'est-ce que l'indice sporozoïtique chez les Anophèles ?",
    options: ["Le pourcentage d'anophèles femelles ayant des sporozoïtes dans leurs glandes salivaires", "Le nombre d'œufs pondus", "Le nombre de piqûres par nuit", "Le taux de survie"],
    correct: 0,
    explanation: "C'est l'indicateur clé de l'intensité de la transmission du paludisme dans une zone."
  },
  {
    id: 'dipt_20',
    question: "Anopheles stephensi pose un problème émergent car :",
    options: ["C'est un vecteur urbain qui s'adapte aux citernes d'eau (Inde, Corne de l'Afrique)", "Il résiste au froid", "Il ne pique que les animaux", "Il ne transmet pas le paludisme"],
    correct: 0,
    explanation: "Traditionnellement, le paludisme est rural. A. stephensi change la donne en permettant la transmission en pleine ville."
  },

  // --- AEDES (STEGOMYIA) & ARBOVIROSES ---
  {
    id: 'dipt_21',
    question: "Comment reconnait-on facilement un Aedes aegypti ou albopictus à l'œil nu ?",
    options: ["Moustique noir avec des taches/rayures blanches (Moustique Tigre)", "Moustique tout jaune", "Moustique géant", "Moustique transparent"],
    correct: 0,
    explanation: "Leur aspect zébré noir et blanc est caractéristique."
  },
  {
    id: 'dipt_22',
    question: "Aedes albopictus a une particularité écologique inquiétante :",
    options: ["Il s'adapte aux climats tempérés et colonise l'Europe et l'Amérique du Nord", "Il ne vit que dans la jungle", "Il ne pique que les oiseaux", "Il meurt s'il fait moins de 30°C"],
    correct: 0,
    explanation: "Grâce à la diapause de ses œufs, il passe l'hiver et colonise des zones non tropicales (ex: Sud de la France)."
  },
  {
    id: 'dipt_23',
    question: "Outre la Dengue et le Zika, quel virus historique Aedes aegypti transmet-il ?",
    options: ["Le virus de la Fièvre Jaune (Amaril)", "Le virus Ebola", "Le virus de la Grippe", "Le VIH"],
    correct: 0,
    explanation: "C'est le vecteur urbain de la Fièvre Jaune. (Il existe un vaccin efficace contre la FJ, contrairement à la Dengue)."
  },
  {
    id: 'dipt_24',
    question: "La transmission trans-ovarienne (verticale) des virus chez Aedes signifie :",
    options: ["La femelle infectée transmet le virus à ses œufs, donc la nouvelle génération naît infectée", "Le mâle transmet le virus à la femelle", "La larve s'infecte dans l'eau", "L'œuf est stérile"],
    correct: 0,
    explanation: "Cela permet au virus de persister dans la nature même sans hôte vertébré pendant un certain temps."
  },
  {
    id: 'dipt_25',
    question: "Le Chikungunya transmis par Aedes se caractérise cliniquement par :",
    options: ["Des douleurs articulaires (arthralgies) intenses et invalidantes ('l'homme courbé')", "Une hémorragie massive", "Une toux", "Une jaunisse"],
    correct: 0,
    explanation: "En langue Makondé, Chikungunya signifie 'celui qui marche courbé', à cause des douleurs."
  },

  // --- CULEX & FILARIOSES/ENCÉPHALITES ---
  {
    id: 'dipt_26',
    question: "Culex quinquefasciatus est le vecteur principal de quelle parasitose ?",
    options: ["La Filariose lymphatique (Wuchereria bancrofti) en zone urbaine", "Le Paludisme", "La Loase", "L'Onchocercose"],
    correct: 0,
    explanation: "Il ingère les microfilaires qui se transforment en larves infestantes dans ses muscles thoraciques."
  },
  {
    id: 'dipt_27',
    question: "Quel virus neurotrope est transmis par les moustiques Culex ?",
    options: ["Le virus West Nile (Nil Occidental)", "Le virus de la Rage", "Le virus Polio", "Le virus de l'Hépatite B"],
    correct: 0,
    explanation: "Le West Nile circule entre oiseaux et moustiques Culex, infectant accidentellement l'homme et le cheval."
  },
  {
    id: 'dipt_28',
    question: "L'encéphalite japonaise est transmise par des moustiques du genre :",
    options: ["Culex (ex: Culex tritaeniorhynchus)", "Anopheles", "Aedes", "Mansonia"],
    correct: 0,
    explanation: "C'est une zoonose majeure en Asie, liée à la riziculture (gîtes larvaires) et à l'élevage de porcs (réservoir)."
  },
  {
    id: 'dipt_29',
    question: "La particularité du vol du Culex est :",
    options: ["Il produit un bourdonnement aigu très audible et gênant la nuit", "Il est totalement silencieux", "Il ne vole que le jour", "Il vole très vite"],
    correct: 0,
    explanation: "C'est la nuisance sonore classique du moustique domestique nocturne."
  },
  {
    id: 'dipt_30',
    question: "La larve de Culex possède un siphon respiratoire :",
    options: ["Long et fin", "Court et triangulaire", "Absent", "En forme d'étoile"],
    correct: 0,
    explanation: "Morphologie larvaire typique : siphon long = Culex, siphon court = Aedes, pas de siphon = Anophèle."
  },

  // --- MANSONIA & AUTRES ---
  {
    id: 'dipt_31',
    question: "Quelle est la particularité biologique des larves de Mansonia ?",
    options: ["Elles ne montent pas en surface respirer mais piquent les racines des plantes aquatiques pour prendre l'air", "Elles vivent dans la boue", "Elles sont carnivores", "Elles vivent en eau salée"],
    correct: 0,
    explanation: "Elles se fixent aux plantes aquatiques (ex: Pistia). La lutte passe par la destruction de ces plantes."
  },
  {
    id: 'dipt_32',
    question: "Mansonia est un vecteur important de :",
    options: ["Filariose lymphatique (Brugia malayi) en Asie", "Paludisme", "Dengue", "Maladie du sommeil"],
    correct: 0,
    explanation: "Vecteur de la filariose à Brugia, souvent dans les zones de marécages à végétation dense."
  },

  // --- CYCLE DE VIE (GÉNÉRALITÉS) ---
  {
    id: 'dipt_33',
    question: "Les moustiques sont des insectes holométaboles, ce qui signifie :",
    options: ["Ils ont une métamorphose complète (Œuf -> Larve -> Nymphe -> Adulte)", "Ils naissent déjà adultes", "Ils n'ont pas d'ailes", "Ils changent de sexe"],
    correct: 0,
    explanation: "Les stades immatures (larve, nymphe) sont aquatiques et très différents de l'adulte aérien."
  },
  {
    id: 'dipt_34',
    question: "La nymphe de moustique est-elle mobile ?",
    options: ["Oui, elle est très mobile et nage par saccades (culbutes) en cas de danger", "Non, elle est immobile comme une chrysalide de papillon", "Elle marche au fond", "Elle vole"],
    correct: 0,
    explanation: "Contrairement à beaucoup d'insectes, la nymphe de moustique est active (mais ne se nourrit pas)."
  },
  {
    id: 'dipt_35',
    question: "De quoi se nourrissent les larves de moustiques ?",
    options: ["De matière organique, bactéries et plancton par filtration de l'eau", "De sang", "De feuilles", "De poissons"],
    correct: 0,
    explanation: "Elles sont filtreuses (brosses buccales). Certaines espèces (Toxorhynchites) sont prédatrices d'autres larves."
  },
  {
    id: 'dipt_36',
    question: "Combien de temps dure la phase aquatique (œuf à adulte) en milieu tropical chaud ?",
    options: ["Environ 7 à 10 jours", "1 mois", "24 heures", "3 mois"],
    correct: 0,
    explanation: "Le cycle est rapide. Une collection d'eau temporaire (pluie) d'une semaine suffit pour produire des adultes."
  },
  {
    id: 'dipt_37',
    question: "Qu'est-ce qu'une femelle 'nullipare' ?",
    options: ["Une femelle qui n'a jamais pondu d'œufs", "Une femelle qui n'a pas de pattes", "Une femelle stérile", "Une femelle qui a pondu plusieurs fois"],
    correct: 0,
    explanation: "L'âge physiologique des moustiques est important. Une femelle nullipare est trop jeune pour transmettre le paludisme (le cycle parasite n'est pas fini)."
  },
  {
    id: 'dipt_38',
    question: "Le repas sanguin est nécessaire pour :",
    options: ["La vitellogenèse (maturation des œufs)", "La survie de l'adulte", "Le vol", "La respiration"],
    correct: 0,
    explanation: "Le sucre (nectar) fournit l'énergie (vol), mais le sang fournit les protéines pour les œufs."
  },
  {
    id: 'dipt_39',
    question: "Les moustiques mâles vivent-ils aussi longtemps que les femelles ?",
    options: ["Non, ils vivent beaucoup moins longtemps (quelques jours à une semaine)", "Oui, pareil", "Ils vivent plus longtemps", "Ils sont immortels"],
    correct: 0,
    explanation: "Leur seul rôle est la reproduction. Les femelles vivent plusieurs semaines, ce qui permet la transmission des maladies."
  },
  {
    id: 'dipt_40',
    question: "L'hibernation des moustiques en zone tempérée se fait sous forme :",
    options: ["D'adultes femelles (Culex) ou d'œufs (Aedes) selon les espèces", "De larves dans la glace", "Ils migrent en Afrique", "Ils meurent tous"],
    correct: 0,
    explanation: "Les femelles fécondées de Culex se cachent dans les caves (diapause hivernale) pour ressortir au printemps."
  },

  // --- LUTTE & CONTRÔLE (BASES) ---
  {
    id: 'dipt_41',
    question: "Le Bti (Bacillus thuringiensis israelensis) est utilisé comme :",
    options: ["Larvicide biologique sélectif", "Adulticide chimique", "Répulsif", "Médicament"],
    correct: 0,
    explanation: "Il produit une toxine qui détruit l'intestin des larves de moustiques sans danger pour les autres animaux."
  },
  {
    id: 'dipt_42',
    question: "Pourquoi les moustiquaires imprégnées sont-elles moins efficaces contre Aedes ?",
    options: ["Car Aedes pique le jour, quand les gens ne sont pas sous la moustiquaire", "Car Aedes passe à travers les mailles", "Car Aedes résiste à tout", "Car Aedes ne pique pas l'homme"],
    correct: 0,
    explanation: "C'est un problème comportemental. La protection contre la Dengue nécessite d'autres stratégies (vêtements, répulsifs)."
  },
  {
    id: 'dipt_43',
    question: "L'assainissement (drainage des eaux) est une méthode de lutte :",
    options: ["Physique / Environnementale", "Chimique", "Biologique", "Génétique"],
    correct: 0,
    explanation: "Supprimer l'eau = supprimer les larves. C'est la méthode la plus durable."
  },
  {
    id: 'dipt_44',
    question: "La technique de l'insecte stérile (TIS) consiste à :",
    options: ["Lâcher des mâles stérilisés (irradiés) pour qu'ils s'accouplent avec les femelles sauvages sans descendance", "Lâcher des prédateurs", "Utiliser des pièges", "Vacciner les moustiques"],
    correct: 0,
    explanation: "Technique prometteuse pour réduire les populations d'Aedes ou de Glossines."
  },
  {
    id: 'dipt_45',
    question: "La résistance 'kdr' (Knock-down resistance) concerne :",
    options: ["La résistance des moustiques aux insecticides pyréthrinoïdes (mutation du canal sodium)", "La résistance au froid", "La résistance à l'écrasement", "La résistance des parasites aux médicaments"],
    correct: 0,
    explanation: "C'est un mécanisme génétique qui rend les moustiques insensibles aux insecticides des moustiquaires."
  },

  // --- IDENTIFICATION PRATIQUE ---
  {
    id: 'dipt_46',
    question: "Vous capturez un moustique : ailes tachetées, palpes longs, position oblique. C'est :",
    options: ["Une Anophèle", "Un Culex", "Un Aedes", "Un Phlébotome"],
    correct: 0,
    explanation: "La triade classique de l'identification rapide de l'Anophèle."
  },
  {
    id: 'dipt_47',
    question: "Vous voyez des larves avec un siphon respiratoire court et noir, nageant en 'S'. C'est probablement :",
    options: ["Aedes", "Anopheles", "Culex (siphon long)", "Mansonia"],
    correct: 0,
    explanation: "Le siphon court et trapu est typique d'Aedes."
  },
  {
    id: 'dipt_48',
    question: "Les écailles abdominales des moustiques servent à :",
    options: ["L'identification des espèces (motifs de couleurs)", "La respiration", "La protection contre l'eau", "Rien"],
    correct: 0,
    explanation: "L'arrangement des écailles (bandes claires/sombres) sur les tergites abdominaux permet de distinguer les espèces sous la loupe."
  },
  {
    id: 'dipt_49',
    question: "Le terme 'anthropophile' pour un moustique signifie :",
    options: ["Il préfère piquer l'homme", "Il préfère piquer les animaux (zoophile)", "Il aime les fleurs", "Il aime la chaleur"],
    correct: 0,
    explanation: "Un vecteur efficace doit être anthropophile. S'il pique surtout les vaches, il transmettra peu de maladies humaines."
  },
  {
    id: 'dipt_50',
    question: "Le terme 'endophile' signifie :",
    options: ["Le moustique entre et se repose à l'intérieur des maisons après son repas", "Il pique dehors (exophile)", "Il pond dedans", "Il vit dans le corps"],
    correct: 0,
    explanation: "C'est crucial pour l'efficacité des aspersions intra-domiciliaires d'insecticide (PID). Si le moustique sort tout de suite (exophile), ça ne marche pas."
  },
  // --- PHLÉBOTOMES (PSYCHODIDAE) ---
  {
    id: 'dipt_51',
    question: "Les Phlébotomes (Phlebotomus / Lutzomyia) ne sont pas des moustiques mais :",
    options: ["De petits moucherons velus, bossus, silencieux, aux ailes en 'V' lancéolées", "De grosses mouches bleues", "Des taons", "Des puces"],
    correct: 0,
    explanation: "Ils appartiennent à la famille des Psychodidae. Ils sont minuscules (2-3 mm), très velus, et volent par petits bonds silencieux."
  },
  {
    id: 'dipt_52',
    question: "Quelle maladie grave est transmise par les Phlébotomes ?",
    options: ["Les Leishmanioses (Cutanée et Viscérale/Kala-azar)", "Le Paludisme", "La Maladie du sommeil", "La Dengue"],
    correct: 0,
    explanation: "C'est le vecteur exclusif des Leishmanies. La femelle transmet le parasite lors de son repas sanguin."
  },
  {
    id: 'dipt_53',
    question: "Outre les Leishmanioses, les Phlébotomes transmettent :",
    options: ["La Fièvre des trois jours (Pappataci) et la Bartonellose (Verruga du Pérou)", "La Fièvre Jaune", "La Peste", "Le Typhus"],
    correct: 0,
    explanation: "La fièvre à Phlébotomes est une arbovirose bénigne mais invalidante fréquente en Méditerranée."
  },
  {
    id: 'dipt_54',
    question: "Où se développent les larves de Phlébotomes ?",
    options: ["Dans le sol humide riche en matière organique (terriers, grottes, fissures de murs, étables)", "Dans l'eau (comme les moustiques)", "Sur les plantes", "Dans la viande"],
    correct: 0,
    explanation: "C'est une différence majeure avec les moustiques. Les larves sont terrestres (telluriques). On ne peut donc pas traiter l'eau pour les éliminer."
  },
  {
    id: 'dipt_55',
    question: "À quel moment de la journée les Phlébotomes sont-ils actifs ?",
    options: ["Au crépuscule et la nuit (activité vespérale)", "En plein soleil", "Le matin", "À midi"],
    correct: 0,
    explanation: "Ils craignent le soleil et le vent (vol faible). Ils sortent quand le vent tombe, au coucher du soleil."
  },
  {
    id: 'dipt_56',
    question: "Le vol du Phlébotome est caractéristique car il est :",
    options: ["Silencieux ('Moucheron de sable') et de faible portée", "Très bruyant (bourdonnement)", "Rapide et rectiligne", "En haute altitude"],
    correct: 0,
    explanation: "On ne l'entend pas arriver. La piqûre est douloureuse sur le coup, mais l'insecte est furtif."
  },
  {
    id: 'dipt_57',
    question: "Comment différencie-t-on les genres Phlebotomus et Lutzomyia ?",
    options: ["Phlebotomus est le vecteur de l'Ancien Monde (Afrique/Asie/Europe), Lutzomyia du Nouveau Monde (Amériques)", "Phlebotomus est rouge", "Lutzomyia ne pique pas", "C'est la même chose"],
    correct: 0,
    explanation: "C'est une distinction géographico-taxonomique essentielle en épidémiologie des leishmanioses."
  },

  // --- GLOSSINES (MOUCHE TSÉ-TSÉ) ---
  {
    id: 'dipt_58',
    question: "La Glossine (Glossina) est une grosse mouche piqueuse reconnaissable à :",
    options: ["Ses ailes croisées à plat l'une sur l'autre (en ciseaux) au repos et sa trompe rigide horizontale (baïonnette)", "Ses ailes écartées", "Sa couleur verte", "Sa petite taille"],
    correct: 0,
    explanation: "L'aspect des ailes fermées 'comme une paire de ciseaux' et la trompe porrigée (vers l'avant) sont pathognomoniques."
  },
  {
    id: 'dipt_59',
    question: "La Glossine est le vecteur de :",
    options: ["La Trypanosomose Humaine Africaine (Maladie du Sommeil)", "La Maladie de Chagas", "Le Paludisme", "La Filariose"],
    correct: 0,
    explanation: "Elle transmet Trypanosoma brucei gambiense et rhodesiense en Afrique subsaharienne."
  },
  {
    id: 'dipt_60',
    question: "Quelle est la particularité de la reproduction des Glossines (Pupiparité) ?",
    options: ["La femelle pond une larve unique mature (L3) directement dans le sol, pas d'œufs", "Elle pond des milliers d'œufs dans l'eau", "Elle pond dans la viande", "Elle est stérile"],
    correct: 0,
    explanation: "C'est exceptionnel chez les insectes. La larve se développe entièrement dans l'utérus de la femelle (nourrie par des glandes lactifères) et se pupifie (cocon) dès la naissance."
  },
  {
    id: 'dipt_61',
    question: "Les Glossines piquent :",
    options: ["Le jour (Diurnes)", "La nuit", "Au crépuscule seulement", "N'importe quand"],
    correct: 0,
    explanation: "Ce sont des chasseurs visuels diurnes. Elles sont attirées par le mouvement et les couleurs sombres (bleu/noir)."
  },
  {
    id: 'dipt_62',
    question: "Chez les Glossines, qui pique ?",
    options: ["Mâles et Femelles (Hématophagie obligatoire pour les deux)", "Seulement les femelles", "Seulement les mâles", "Les larves"],
    correct: 0,
    explanation: "Contrairement aux moustiques, les deux sexes ont besoin de sang pour vivre. Les deux sont donc vecteurs potentiels."
  },
  {
    id: 'dipt_63',
    question: "Les Glossines du groupe 'palpalis' (riveraines) vivent :",
    options: ["Dans les forêts galeries le long des cours d'eau (Vecteurs de T.b. gambiense)", "Dans la savane sèche", "En ville", "En montagne"],
    correct: 0,
    explanation: "Elles transmettent la forme chronique (Gambiense) en Afrique de l'Ouest et Centrale."
  },
  {
    id: 'dipt_64',
    question: "Les Glossines du groupe 'morsitans' (xérophiles) vivent :",
    options: ["Dans la savane boisée sèche à gibier (Vecteurs de T.b. rhodesiense)", "En forêt dense", "Dans les marécages", "Sur les côtes"],
    correct: 0,
    explanation: "Elles transmettent la forme aiguë (Rhodesiense) en Afrique de l'Est, souvent liée aux animaux sauvages."
  },
  {
    id: 'dipt_65',
    question: "Le piège à tsé-tsé (ex: piège Vavoua) fonctionne sur le principe :",
    options: ["Attraction visuelle (tissu bleu/noir) sans appât chimique, l'insecte est piégé par la chaleur dans le cône", "Attraction lumineuse (lampe UV)", "Appât sucré", "Phéromones"],
    correct: 0,
    explanation: "Le bleu attire la mouche de loin, le noir de près. En cherchant à piquer le noir, elle monte vers la lumière et est capturée."
  },

  // --- SIMULIES (SIMULIIDAE) ---
  {
    id: 'dipt_66',
    question: "La Simulie (Simulium damnosum) est une petite mouche noire et trapue responsable de la transmission de :",
    options: ["L'Onchocercose (Onchocerca volvulus)", "La Loase", "La Filariose lymphatique", "Le Paludisme"],
    correct: 0,
    explanation: "On l'appelle 'Mouche noire'. Elle transmet la filaire responsable de la cécité des rivières."
  },
  {
    id: 'dipt_67',
    question: "Pourquoi l'Onchocercose est-elle appelée 'Cécité des rivières' ?",
    options: ["Car les larves de Simulies exigent une eau courante très oxygénée (rapides, cascades) pour se développer", "Car on l'attrape en buvant l'eau", "Car les vers vivent dans l'eau", "Car les malades tombent dans la rivière"],
    correct: 0,
    explanation: "Les larves et nymphes sont fixées aux rochers ou crabes dans le courant fort. Les adultes émergent et piquent près des rivières."
  },
  {
    id: 'dipt_68',
    question: "La piqûre de Simulie est :",
    options: ["Douloureuse (morsure 'en piscine' qui arrache un morceau de peau) et diurne", "Indolore et nocturne", "Interne", "Insensible"],
    correct: 0,
    explanation: "Ce sont des 'telmophages'. Elles cisaillent la peau pour créer une flaque de sang qu'elles aspirent. C'est très douloureux."
  },
  {
    id: 'dipt_69',
    question: "Quelle est la particularité biologique de la nymphe de Simulie ?",
    options: ["Elle vit sous l'eau dans un cocon fixé, et respire par des branchies filamenteuses", "Elle flotte", "Elle est terrestre", "Elle vole"],
    correct: 0,
    explanation: "Les branchies respiratoires permettent d'extraire l'oxygène dissous dans l'eau turbulente."
  },
  {
    id: 'dipt_70',
    question: "La lutte contre les Simulies repose principalement sur :",
    options: ["L'épandage d'insecticides biologiques (Bti) ou chimiques dans les cours d'eau (hélicoptère)", "Les moustiquaires", "L'assainissement urbain", "Les pièges"],
    correct: 0,
    explanation: "Le programme OCP (Onchocerciasis Control Programme) a réussi à contrôler la maladie en Afrique de l'Ouest en traitant les rivières."
  },

  // --- CHRYSOPS (TABANIDAE) ---
  {
    id: 'dipt_71',
    question: "Le Chrysops (Taon) est le vecteur de :",
    options: ["La Loase (Loa loa)", "L'Onchocercose", "La Trypanosomose", "Le Ver de Guinée"],
    correct: 0,
    explanation: "C'est une mouche robuste aux yeux colorés et ailes bariolées, vivant dans la canopée des forêts équatoriales."
  },
  {
    id: 'dipt_72',
    question: "Qui pique chez les Chrysops ?",
    options: ["Seule la femelle (Hématophagie pour la ponte)", "Mâles et femelles", "Les larves", "Personne"],
    correct: 0,
    explanation: "Comme pour les moustiques, seul le sang est nécessaire aux œufs. Le mâle est floricole."
  },
  {
    id: 'dipt_73',
    question: "L'activité de piqûre du Chrysops est :",
    options: ["Diurne (surtout aux heures chaudes)", "Nocturne", "Crépusculaire", "Matinale"],
    correct: 0,
    explanation: "Ils sont attirés par la fumée des feux de bois et le mouvement."
  },
  {
    id: 'dipt_74',
    question: "La larve de Chrysops vit :",
    options: ["Dans la boue des marécages forestiers", "Dans l'eau courante", "Dans le sol sec", "Dans les arbres"],
    correct: 0,
    explanation: "C'est une larve semi-aquatique vivant dans la vase."
  },
  
  // --- MYASES (DIPTÈRES NON VECTEURS) ---
  {
    id: 'dipt_75',
    question: "La définition exacte d'une myase est :",
    options: ["Le parasitisme de tissus vivants ou morts par des larves de mouches (asticots)", "Une infection par une mouche adulte", "Une allergie aux mouches", "Une transmission de bactérie"],
    correct: 0,
    explanation: "Le terme vient de 'Myia' (mouche). C'est l'asticot qui mange les tissus ou les liquides organiques."
  },
  {
    id: 'dipt_76',
    question: "Cordylobia anthropophaga (Ver de Cayor) provoque :",
    options: ["Une myase furonculeuse (tumeur sous-cutanée avec orifice)", "Une myase des plaies", "Une myase oculaire", "Une myase intestinale"],
    correct: 0,
    explanation: "Fréquent en Afrique. La larve pénètre la peau saine et s'y développe, ressemblant à un furoncle qui ne guérit pas."
  },
  {
    id: 'dipt_77',
    question: "Comment se contamine-t-on par le Ver de Cayor ?",
    options: ["Par contact avec du linge (vêtements, draps) séché au sol sur lequel la mouche a pondu", "Par piqûre de la mouche", "En mangeant la mouche", "Par l'eau"],
    correct: 0,
    explanation: "La mouche pond sur le linge humide (odeur d'urine/sueur). Le repassage du linge tue les larves (prévention)."
  },
  {
    id: 'dipt_78',
    question: "Dermatobia hominis (Ver macaque) en Amérique du Sud a un mode de contamination unique :",
    options: ["La femelle capture un moustique, colle ses œufs dessus, et le moustique dépose les œufs sur l'homme en piquant", "Elle pond sur le linge", "Elle pond directement dans la plaie", "Elle pond dans l'eau"],
    correct: 0,
    explanation: "C'est de la 'phorésie'. La mouche est trop grosse pour approcher discrètement, elle utilise un transporteur (vecteur mécanique)."
  },
  {
    id: 'dipt_79',
    question: "Hypoderma bovis (Varron) est une myase :",
    options: ["Migratrice profonde (larva migrans) touchant le bétail et accidentellement l'homme", "Superficielle", "Des plaies", "Oculaire"],
    correct: 0,
    explanation: "Les larves migrent longuement dans le corps avant d'émerger par la peau du dos."
  },
  {
    id: 'dipt_80',
    question: "Cochliomyia hominivorax (Mouche bouchère) est redoutable car :",
    options: ["Ses larves sont biontophages (mangent les tissus vivants) et creusent des lésions délabrantes énormes", "Elle transmet la peste", "Elle est invisible", "Elle est toxique"],
    correct: 0,
    explanation: "C'est une myase des plaies ou des orifices naturels (nez, oreilles) très destructrice, pouvant être mortelle."
  },
  {
    id: 'dipt_81',
    question: "L'asticothérapie (Maggot Therapy) utilise des larves stériles de Lucilia sericata pour :",
    options: ["Nettoyer (déterger) les plaies nécrosées en ne mangeant que les tissus morts", "Manger les tissus vivants", "Faire joli", "Injecter des antibiotiques"],
    correct: 0,
    explanation: "Ces larves sont nécrophages strictes. Elles nettoient la plaie chirurgicalement et sécrètent des substances cicatrisantes."
  },
  {
    id: 'dipt_82',
    question: "Oestrus ovis est responsable de :",
    options: ["Myase cavitaire (ophtalmomyase ou nasale) chez le mouton et l'homme (accidentel)", "Myase furonculeuse", "Myase des plaies", "Gale"],
    correct: 0,
    explanation: "La mouche éjecte directement des larves (vivipare) dans les narines ou les yeux (en volant) des moutons ou des bergers."
  },
  
  // --- MOUCHES DOMESTIQUES (MUSCIDAE) ---
  {
    id: 'dipt_83',
    question: "Musca domestica (Mouche domestique) est un vecteur :",
    options: ["Mécanique (transport passif de germes sur les pattes et la trompe)", "Biologique (cycle interne)", "De virus uniquement", "De vers uniquement"],
    correct: 0,
    explanation: "Elle transporte tout ce qu'elle touche (fécès -> aliments) : bactéries (Choléra, Typhoïde), virus (Polio), kystes d'amibes, œufs d'helminthes."
  },
  {
    id: 'dipt_84',
    question: "La lutte contre les mouches domestiques repose avant tout sur :",
    options: ["L'hygiène (gestion des ordures, protection des aliments)", "Les insecticides", "Les pièges", "La vaccination"],
    correct: 0,
    explanation: "Sans accès aux déchets organiques pour pondre et se nourrir, la population s'effondre."
  },
  {
    id: 'dipt_85',
    question: "Stomoxys calcitrans (Mouche charbonneuse) ressemble à la mouche domestique mais :",
    options: ["Elle pique (hématophage) douloureusement", "Elle est verte", "Elle est géante", "Elle ne vole pas"],
    correct: 0,
    explanation: "C'est une mouche piqueuse cosmopolite (souvent dans les écuries), vecteur mécanique possible du charbon (anthrax)."
  },

  // --- QUESTIONS DE SYNTHÈSE (VECTEURS) ---
  {
    id: 'dipt_86',
    question: "Quel est le seul diptère vecteur dont les deux sexes (mâle et femelle) sont hématophages ?",
    options: ["La Glossine (Tsé-tsé)", "Le Moustique", "Le Phlébotome", "Le Chrysops"],
    correct: 0,
    explanation: "C'est une exception notable. Chez les autres, seule la femelle pique."
  },
  {
    id: 'dipt_87',
    question: "Les larves de simulies et de moustiques sont aquatiques. Celles des phlébotomes et puces sont :",
    options: ["Terrestres (détritiphages)", "Aquatiques aussi", "Aériennes", "Parasites"],
    correct: 0,
    explanation: "Important pour la lutte : on ne traite pas l'eau pour les phlébotomes."
  },
  {
    id: 'dipt_88',
    question: "La transmission 'Cyclo-propagative' (ex: Paludisme chez l'Anophèle) signifie :",
    options: ["Le parasite change de forme (cycle) ET se multiplie en nombre", "Le parasite change de forme sans se multiplier (Filaires)", "Le parasite se multiplie sans changer de forme (Virus)", "Transport simple"],
    correct: 0,
    explanation: "C'est le mode le plus complexe. 1 gamétocyte donne des milliers de sporozoïtes."
  },
  {
    id: 'dipt_89',
    question: "La transmission 'Cyclo-développementale' (ex: Filaires chez le moustique) signifie :",
    options: ["Le parasite change de forme (maturation L1->L3) mais ne se multiplie pas", "Il se multiplie énormément", "Il ne change pas", "Il meurt"],
    correct: 0,
    explanation: "Une microfilaire ingérée donne au maximum une larve infestante. Pas d'amplification."
  },
  {
    id: 'dipt_90',
    question: "La transmission 'Propagative' (ex: Arboviroses) signifie :",
    options: ["Le virus se multiplie simplement dans le vecteur sans cycle complexe", "Le virus change de forme", "Le virus diminue", "Le virus dort"],
    correct: 0,
    explanation: "Le virus envahit les tissus du moustique et s'y réplique massivement."
  },
  
  // --- ZOONOSES & RÉSERVOIRS ---
  {
    id: 'dipt_91',
    question: "Dans la Leishmaniose viscérale méditerranéenne, le réservoir principal est :",
    options: ["Le Chien", "Le Rat", "L'Homme", "L'Oiseau"],
    correct: 0,
    explanation: "Le chien est le réservoir domestique majeur (Canis familiaris). Le phlébotome s'infecte sur le chien et transmet à l'homme."
  },
  {
    id: 'dipt_92',
    question: "Pour la Maladie du sommeil à T.b. rhodesiense, le réservoir est :",
    options: ["La faune sauvage (Antilopes, Phacochères) et le bétail", "L'homme strictement", "Le rat", "Le singe"],
    correct: 0,
    explanation: "C'est une zoonose sauvage. L'homme est un hôte accidentel piqué par une glossine de savane."
  },
  {
    id: 'dipt_93',
    question: "Pour la Maladie du sommeil à T.b. gambiense, le réservoir est :",
    options: ["Principalement humain (Anthroponose)", "Animal sauvage", "Les oiseaux", "Les reptiles"],
    correct: 0,
    explanation: "La lutte repose donc sur le dépistage et le traitement des malades humains pour tarir la source."
  },
  {
    id: 'dipt_94',
    question: "Quel diptère est responsable de la transmission de la Loase ?",
    options: ["Chrysops", "Simulie", "Glossine", "Moustique"],
    correct: 0,
    explanation: "Rappel essentiel : Chrysops = Loase (Ver africain de l'œil)."
  },
  {
    id: 'dipt_95',
    question: "Quelle méthode permet de capturer les larves de simulies pour l'étude ?",
    options: ["Ramasser les supports immergés (pierres, herbes) dans le courant", "Puiser de l'eau calme", "Creuser la terre", "Attraper au vol"],
    correct: 0,
    explanation: "Elles sont fixées fermement. On ne les trouve pas en pleine eau libre."
  },
  {
    id: 'dipt_96',
    question: "Les Tabanidés (Taons) autres que Chrysops peuvent transmettre mécaniquement :",
    options: ["La tularémie, l'anthrax, et des trypanosomes animaux (Surra)", "Le Paludisme", "La Dengue", "Le SIDA"],
    correct: 0,
    explanation: "Leur trompe souillée de sang frais peut inoculer des bactéries ou protozoaires si le repas est interrompu et repris sur un autre hôte."
  },
  {
    id: 'dipt_97',
    question: "La 'Mouche des sables' (Sandfly) est le nom anglais pour :",
    options: ["Le Phlébotome", "La Puce", "Le Taon", "La Simulie"],
    correct: 0,
    explanation: "Terme commun international à connaître."
  },
  {
    id: 'dipt_98',
    question: "La 'Mouche noire' (Blackfly) est le nom anglais pour :",
    options: ["La Simulie", "La Glossine", "Le Moustique", "La Punaise"],
    correct: 0,
    explanation: "Terme commun international."
  },
  {
    id: 'dipt_99',
    question: "Quelle famille de diptères a des larves 'acéphales' (sans tête visible) ?",
    options: ["Les Mouches (Muscidae, Calliphoridae...)", "Les Moustiques (Culicidae)", "Les Simulies", "Les Phlébotomes"],
    correct: 0,
    explanation: "L'asticot a des crochets buccaux mais pas de capsule céphalique, contrairement aux larves de moustiques qui ont une vraie tête."
  },
  {
    id: 'dipt_100',
    question: "Quel est le principal moyen de prévention contre les myases africaines (Ver de Cayor) ?",
    options: ["Repassage du linge au fer chaud (tue les larves)", "Vaccination", "Moustiquaire", "Spray"],
    correct: 0,
    explanation: "Mesure d'hygiène simple et 100% efficace."
  },
  // --- DÉTAILS AVANCÉS (MORPHOLOGIE LARVAIRE) ---
  {
    id: 'dipt_101',
    question: "Quelle est la particularité des soies palmées chez la larve d'Anophèle ?",
    options: ["Elles permettent la sustentation horizontale à la surface de l'eau (tension superficielle)", "Elles servent à nager", "Elles servent à manger", "Elles sont toxiques"],
    correct: 0,
    explanation: "Ces petites soies en forme d'éventail sur l'abdomen sont un critère d'identification microscopique majeur des Anophèles."
  },
  {
    id: 'dipt_102',
    question: "Le peigne du siphon (pecten) chez la larve de Culex sert à :",
    options: ["L'identification de l'espèce (nombre et forme des dents)", "Filtrer l'eau", "Respirer", "Attaquer"],
    correct: 0,
    explanation: "Le nombre, la forme et la disposition des épines du siphon permettent de distinguer Culex pipiens de Culex quinquefasciatus par exemple."
  },
  {
    id: 'dipt_103',
    question: "La larve de Mansonia respire en plantant son siphon modifié dans les racines. Ce siphon est :",
    options: ["Pointu, noir et sclérifié (en forme de scie)", "Long et souple", "Absent", "Rond"],
    correct: 0,
    explanation: "Il doit être assez dur pour perforer les tissus végétaux immergés (aérenchyme) pour y puiser l'oxygène."
  },
  {
    id: 'dipt_104',
    question: "La nymphe de moustique possède deux 'trompettes' respiratoires situées :",
    options: ["Sur le céphalothorax", "Sur l'abdomen", "Sur la queue", "Sur les pattes"],
    correct: 0,
    explanation: "Ces deux petits tubes lui permettent de respirer en surface tout en restant immergée."
  },

  // --- COMPORTEMENT VECTORIEL AVANCÉ ---
  {
    id: 'dipt_105',
    question: "La capacité vectorielle (C) dépend mathématiquement surtout de :",
    options: ["La survie quotidienne du vecteur (p) - car le parasite met du temps à maturer", "La densité des vecteurs (m)", "Le nombre de repas", "La taille du vecteur"],
    correct: 0,
    explanation: "Une petite augmentation de la longévité augmente exponentiellement la transmission, car le moustique a plus de chances de devenir infectant (finir le cycle sporogonique)."
  },
  {
    id: 'dipt_106',
    question: "Un moustique 'exophage' préférentiel :",
    options: ["Pique à l'extérieur des habitations", "Pique à l'intérieur", "Pique les animaux", "Ne pique pas"],
    correct: 0,
    explanation: "Contre les vecteurs exophages, les moustiquaires et les pulvérisations intra-domiciliaires sont peu efficaces."
  },
  {
    id: 'dipt_107',
    question: "Le cycle gonotrophique correspond à :",
    options: ["L'intervalle entre un repas sanguin et la ponte des œufs (suivi d'un nouveau repas)", "La durée de vie de la larve", "Le temps de vol", "L'accouplement"],
    correct: 0,
    explanation: "Plus ce cycle est court (ex: 2-3 jours en climat chaud), plus la fréquence des piqûres et le risque de transmission augmentent."
  },
  {
    id: 'dipt_108',
    question: "L'hibernation chez Aedes albopictus se fait au stade :",
    options: ["Œuf (résistant au froid et à la dessiccation)", "Adulte", "Larve", "Nymphe"],
    correct: 0,
    explanation: "C'est ce qui lui a permis de coloniser les zones tempérées à hivers froids."
  },

  // --- ÉPIDÉMIOLOGIE SPÉCIFIQUE ---
  {
    id: 'dipt_109',
    question: "Anopheles gambiae s.s. (sensu stricto) préfère les gîtes larvaires :",
    options: ["Ensoleillés, temporaires, sans végétation (flaques de pluie, traces de pas)", "Ombragés et permanents", "Pollués", "Salés"],
    correct: 0,
    explanation: "C'est un opportuniste des saisons des pluies. Il déteste l'ombre dense."
  },
  {
    id: 'dipt_110',
    question: "Anopheles funestus, autre vecteur majeur africain, préfère :",
    options: ["Les gîtes permanents, ombragés et végétalisés (marécages, rizières)", "Les flaques de pluie", "Les pneus", "Les eaux courantes"],
    correct: 0,
    explanation: "Il prend le relais de A. gambiae en saison sèche car il vit dans les points d'eau permanents."
  },
  {
    id: 'dipt_111',
    question: "Aedes aegypti a été éradiqué de nombreuses zones d'Amérique Latine dans les années 60, mais est revenu. Pourquoi ?",
    options: ["Relâchement des programmes de contrôle, urbanisation anarchique et résistance aux insecticides", "Mutation du virus", "Changement climatique seul", "Disparition des oiseaux"],
    correct: 0,
    explanation: "L'arrêt des campagnes verticales militaires a permis la réinfestation continentale."
  },
  {
    id: 'dipt_112',
    question: "La 'compétence vectorielle' désigne :",
    options: ["La capacité physiologique intrinsèque d'un moustique à s'infecter et transmettre un pathogène", "Le nombre de piqûres", "La densité de moustiques", "La résistance"],
    correct: 0,
    explanation: "Tous les Anophèles ne peuvent pas transmettre le paludisme. Seules certaines espèces sont 'compétentes' (le parasite survit en elles)."
  },

  // --- DIPTÈRES ET MYASES (CAS RARES) ---
  {
    id: 'dipt_113',
    question: "Wohlfahrtia magnifica est un agent de myase :",
    options: ["Obligatoire (les larves doivent manger du tissu vivant)", "Facultatif", "Accidentel", "Imaginaire"],
    correct: 0,
    explanation: "C'est un pathogène strict, redoutable pour le bétail et l'homme (myase des plaies/oreilles) en Europe de l'Est/Afrique du Nord."
  },
  {
    id: 'dipt_114',
    question: "Les larves de mouches 'queues de rat' (Eristales) vivent :",
    options: ["Dans les eaux très polluées (lisier, égouts) et respirent par un long tube télescopique", "Dans la viande", "Sur la peau", "Dans les fruits"],
    correct: 0,
    explanation: "Elles peuvent causer des myases intestinales accidentelles si ingérées, mais sont surtout des indicateurs de pollution."
  },
  {
    id: 'dipt_115',
    question: "La myase rampante (Creeping eruption) peut être due à :",
    options: ["Des larves de mouches Gasterophilus (mouche du cheval)", "Des moustiques", "Des puces", "Des poux"],
    correct: 0,
    explanation: "Les larves migrent sous la peau, mimant une Larva Migrans ankylostomienne."
  },

  // --- LUTTE ANTIVECTORIELLE (AVANCÉ) ---
  {
    id: 'dipt_116',
    question: "La confusion sexuelle chez les vecteurs vise à :",
    options: ["Perturber la rencontre mâle/femelle par des phéromones de synthèse", "Les rendre stériles", "Les tuer", "Les aveugler"],
    correct: 0,
    explanation: "Méthode écologique pour réduire la reproduction sans insecticides."
  },
  {
    id: 'dipt_117',
    question: "L'utilisation de Wolbachia (bactérie) chez Aedes aegypti permet de :",
    options: ["Bloquer la réplication du virus Dengue dans le moustique et réduire la transmission", "Tuer le moustique immédiatement", "Faire grossir le moustique", "Attirer les prédateurs"],
    correct: 0,
    explanation: "Stratégie révolutionnaire : les moustiques infectés par Wolbachia deviennent 'incompétents' pour transmettre les virus."
  },
  {
    id: 'dipt_118',
    question: "Les peintures insecticides (Murs) fonctionnent par :",
    options: ["Contact (le moustique se pose sur le mur traité et absorbe le toxique par les pattes)", "Inhalation", "Ingestion", "Répulsion"],
    correct: 0,
    explanation: "Efficace contre les vecteurs endophiles qui se reposent sur les murs après le repas."
  },
  {
    id: 'dipt_119',
    question: "Pourquoi l'Ivermectine donnée à l'homme peut-elle tuer les moustiques ?",
    options: ["Le sang de l'homme traité contient de l'ivermectine toxique pour le moustique qui le pique (Endectocide)", "Par l'haleine", "Par la sueur", "Ce n'est pas possible"],
    correct: 0,
    explanation: "C'est une voie de recherche pour la lutte intégrée : traiter la population tue aussi les vecteurs qui la piquent."
  },
  {
    id: 'dipt_120',
    question: "Le test de susceptibilité OMS (bioessai) sert à :",
    options: ["Mesurer la résistance des moustiques locaux aux insecticides (survie après exposition)", "Mesurer la taille des moustiques", "Compter les moustiques", "Identifier l'espèce"],
    correct: 0,
    explanation: "Essentiel avant de lancer une campagne de moustiquaires. Si 100% survivent au test, l'insecticide est inutile."
  },

  // --- HISTOIRE & CULTURE ---
  {
    id: 'dipt_121',
    question: "La découverte du rôle de l'Anophèle dans le paludisme est attribuée à :",
    options: ["Ronald Ross (Prix Nobel 1902)", "Louis Pasteur", "Robert Koch", "Charles Darwin"],
    correct: 0,
    explanation: "Il a prouvé le cycle chez le moustique (d'abord sur le paludisme aviaire)."
  },
  {
    id: 'dipt_122',
    question: "Le nom 'Malaria' vient de :",
    options: ["L'italien 'Mal' 'Aria' (Mauvais air), croyance aux miasmes des marais", "Du latin 'Malus'", "Du grec 'Mala'", "D'un dieu romain"],
    correct: 0,
    explanation: "Avant la découverte du moustique, on pensait que les vapeurs des marécages rendaient malade."
  },
  {
    id: 'dipt_123',
    question: "L'opération 'Cataractes' lors de la construction du Canal de Panama visait à éradiquer :",
    options: ["Aedes aegypti (Fièvre Jaune) et Anophèles (Paludisme)", "Les mouches", "Les serpents", "Les rats"],
    correct: 0,
    explanation: "Sans le contrôle des moustiques par Gorgas, le canal n'aurait jamais pu être fini (hécatombe ouvrière)."
  },

  // --- CLINIQUE LIÉE AUX PIQÛRES ---
  {
    id: 'dipt_124',
    question: "Le syndrome de Skeeter est :",
    options: ["Une réaction allergique locale sévère (œdème, chaleur) aux piqûres de moustiques, surtout chez l'enfant", "Une maladie virale", "Une peur des moustiques", "Une infection"],
    correct: 0,
    explanation: "C'est une hypersensibilité à la salive, souvent confondue avec une cellulite infectieuse."
  },
  {
    id: 'dipt_125',
    question: "Le Prurigo strophulus est :",
    options: ["Une hypersensibilité retardée aux piqûres d'insectes (moustiques/puces) créant des papules persistantes", "Une gale", "Un pou", "Une myase"],
    correct: 0,
    explanation: "Fréquent chez l'enfant atopique. Lésions de grattage chroniques."
  },

  // --- ZOOM SUR D'AUTRES DIPTÈRES ---
  {
    id: 'dipt_126',
    question: "Les Cératopogonidés (Culicoides) sont de minuscules moucherons piqueurs vecteurs de :",
    options: ["Filarioses (Mansonella) et virus Oropouche", "Paludisme", "Dengue", "Maladie du sommeil"],
    correct: 0,
    explanation: "Aussi appelés 'Moucherons piqueurs' ou 'Midges'. Leur piqûre est brûlante."
  },
  {
    id: 'dipt_127',
    question: "Le terme 'Hématophagie telmophage' (ex: Taon, Simulie) s'oppose à 'solénophage' (Moustique). La différence est :",
    options: ["Telmophage = déchire les tissus pour faire une flaque de sang ; Solénophage = canule directement le vaisseau", "L'inverse", "Telmophage = ne pique pas", "Solénophage = mange la peau"],
    correct: 0,
    explanation: "La telmophagie est plus douloureuse et favorise la transmission mécanique."
  },

  // --- QUESTIONS FINALES RÉCAPITULATIVES ---
  {
    id: 'dipt_128',
    question: "Quel stade du moustique est la cible des régulateurs de croissance (IGR) ?",
    options: ["Les larves (empêche la mue en adulte)", "Les adultes", "Les œufs", "Les nymphes"],
    correct: 0,
    explanation: "L'insecte ne peut pas terminer sa métamorphose et meurt."
  },
  {
    id: 'dipt_129',
    question: "La famille des Psychodidae contient les Phlébotomes, mais aussi des genres inoffensifs comme :",
    options: ["Psychoda (Mouche des éviers)", "Musca", "Culex", "Aedes"],
    correct: 0,
    explanation: "Ces petits moucherons 'cœur' qu'on voit dans les salles de bains humides."
  },
  {
    id: 'dipt_130',
    question: "La trompe des moustiques est composée de :",
    options: ["6 stylets perforants dans une gaine (labium)", "1 seul tube", "2 tubes", "Une paille rigide"],
    correct: 0,
    explanation: "Une mécanique complexe : 2 mandibules, 2 maxilles, 1 hypopharynx (salive), 1 labre (sang)."
  },
  {
    id: 'dipt_131',
    question: "Quelle est la vitesse de vol moyenne d'un moustique ?",
    options: ["1,5 à 2,5 km/h", "50 km/h", "10 km/h", "100 m/h"],
    correct: 0,
    explanation: "Ils sont lents. Un ventilateur suffit souvent à les empêcher de se poser."
  },
  {
    id: 'dipt_132',
    question: "Les moustiques sont attirés par l'homme grâce à :",
    options: ["Le CO2, la chaleur, et les odeurs corporelles (acide lactique, sueur)", "La lumière UV seule", "Le bruit", "La couleur blanche"],
    correct: 0,
    explanation: "Le CO2 les alerte de loin, la chaleur et l'odeur les guident de près."
  },
  {
    id: 'dipt_133',
    question: "Combien d'œufs une femelle moustique pond-elle par lot ?",
    options: ["50 à 200 œufs", "1 seul", "1000", "5"],
    correct: 0,
    explanation: "Un taux de reproduction énorme, compensant la forte mortalité larvaire."
  },
  {
    id: 'dipt_134',
    question: "La diapause est un état de :",
    options: ["Vie ralentie (dormance) pour survivre aux conditions défavorables (froid/sécheresse)", "Sommeil nocturne", "Mort apparente", "Reproduction intense"],
    correct: 0,
    explanation: "Stratégie de survie cruciale pour les espèces des zones tempérées."
  },
  {
    id: 'dipt_135',
    question: "Les larves de Toxorhynchites (Moustique éléphant) sont utiles car :",
    options: ["Elles sont prédatrices et mangent les larves d'autres moustiques (Aedes)", "Elles polluent l'eau", "Elles piquent", "Elles transmettent des virus"],
    correct: 0,
    explanation: "L'adulte est géant, phytophage strict (ne pique pas) et inoffensif. Un allié biologique."
  },
  {
    id: 'dipt_136',
    question: "Le principal prédateur naturel des moustiques adultes est :",
    options: ["Les chauves-souris, oiseaux (hirondelles) et araignées", "Les chats", "Les chiens", "Les poissons"],
    correct: 0,
    explanation: "Préserver la biodiversité aide à contrôler les populations."
  },
  {
    id: 'dipt_137',
    question: "L'utilisation de répulsifs sur les vêtements (Perméthrine) est recommandée car :",
    options: ["Le moustique peut piquer à travers les vêtements fins", "Pour ne pas tacher la peau", "Pour tuer le moustique", "Pour sentir bon"],
    correct: 0,
    explanation: "40% des piqûres se font à travers le tissu."
  },
  {
    id: 'dipt_138',
    question: "Quelle couleur de vêtements attire le moins les moustiques ?",
    options: ["Les couleurs claires (blanc, beige)", "Le noir", "Le bleu foncé", "Le rouge"],
    correct: 0,
    explanation: "Les couleurs sombres emmagasinent la chaleur et contrastent avec l'horizon, attirant les insectes."
  },
  {
    id: 'dipt_139',
    question: "La 'Mouche à merde' (Scatophaga) est :",
    options: ["Une mouche prédatrice d'autres mouches (utile)", "Un vecteur de maladie", "Un parasite", "Dangereuse"],
    correct: 0,
    explanation: "Malgré son nom, elle joue un rôle écologique."
  },
  {
    id: 'dipt_140',
    question: "Fannia canicularis (Petite mouche domestique) se reconnait à :",
    options: ["Son vol erratique en zigzag au centre de la pièce", "Sa couleur bleue", "Sa piqûre", "Sa taille géante"],
    correct: 0,
    explanation: "Nuisance domestique fréquente, moins vecteur que Musca domestica."
  },
  {
    id: 'dipt_141',
    question: "Les Hippoboscidae (Mouches plates) sont :",
    options: ["Des ectoparasites hématophages permanents des oiseaux et mammifères (chevaux)", "Des moustiques", "Des mouches domestiques", "Des fruits"],
    correct: 0,
    explanation: "Elles ne volent presque pas, restent collées à l'hôte."
  },
  {
    id: 'dipt_142',
    question: "La mouche Tsé-tsé est larvipare. La mouche Sarcophaga (Mouche à damier) est :",
    options: ["Larvipare aussi (pond des asticots vivants sur la viande/cadavres)", "Ovipare", "Vivipare", "Stérile"],
    correct: 0,
    explanation: "Elle dépose des larves déjà écloses, d'où l'infestation immédiate des plaies ou viandes."
  },
  {
    id: 'dipt_143',
    question: "Le terme 'synanthrope' pour une mouche signifie :",
    options: ["Elle vit étroitement liée à l'habitat humain", "Elle vit en forêt", "Elle vit seule", "Elle mange l'homme"],
    correct: 0,
    explanation: "Musca domestica est l'exemple type de synanthropie."
  },
  {
    id: 'dipt_144',
    question: "Les larves de Simulies sont indicatrices de :",
    options: ["Une bonne qualité de l'eau (oxygénée, peu polluée)", "Une pollution intense", "Une eau stagnante", "Une eau salée"],
    correct: 0,
    explanation: "Elles sont sensibles à la pollution chimique."
  },
  {
    id: 'dipt_145',
    question: "La transmission mécanique par les diptères est favorisée par :",
    options: ["Des pièces buccales lécheuses/suceuses non piqueuses (Musca)", "Une trompe piqueuse fine", "La digestion", "Le vol"],
    correct: 0,
    explanation: "La mouche régurgite sur l'aliment pour le liquéfier avant de l'aspirer, déposant les germes."
  },
  {
    id: 'dipt_146',
    question: "Le principal risque sanitaire après une inondation (catastrophe naturelle) lié aux diptères est :",
    options: ["La prolifération massive de moustiques (nuisance + arboviroses) dans les eaux stagnantes de décrue", "Les mouches tsé-tsé", "Les simulies", "Les varrons"],
    correct: 0,
    explanation: "Le pic de moustiques survient quelques semaines après, quand l'eau se calme."
  },
  {
    id: 'dipt_147',
    question: "Les diptères brachycères (Mouches) ont des antennes :",
    options: ["Courtes (3 articles)", "Longues et filiformes (Nématocères = Moustiques)", "Absentes", "En plume"],
    correct: 0,
    explanation: "Critère taxonomique de base : Nématocères (antennes longues = moustiques) vs Brachycères (antennes courtes = mouches)."
  },
  {
    id: 'dipt_148',
    question: "Les Culicoides transmettent la 'Langue bleue' (Blue Tongue). C'est une maladie :",
    options: ["Vétérinaire (Moutons), non humaine", "Humaine mortelle", "Des oiseaux", "Des poissons"],
    correct: 0,
    explanation: "Importance économique majeure, même si l'homme n'est pas touché."
  },
  {
    id: 'dipt_149',
    question: "Quel diptère a une larve terrestre prédatrice (ver luisant) avant de devenir adulte ?",
    options: ["Aucun diptère vecteur majeur (c'est le Lampyre, un coléoptère)", "L'anophèle", "Le phlébotome", "La mouche"],
    correct: 0,
    explanation: "Piège taxonomique. Les larves de vecteurs ne sont pas bioluminescentes."
  },
  {
    id: 'dipt_150',
    question: "En conclusion, l'animal le plus dangereux pour l'homme au monde (nombre de morts/an) est :",
    options: ["Le Moustique", "Le Requin", "Le Serpent", "L'Homme"],
    correct: 0,
    explanation: "Avec près d'un million de morts par an (Paludisme + Arboviroses), le moustique est le tueur n°1."
  }
];

export default diptera;
