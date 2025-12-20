const clinical = [
  // --- GÉNÉRALITÉS & SYNDROMES ---
  {
    id: 'h_clin_1',
    question: "Quelle est la définition exacte du Syndrome de Löffler ?",
    options: ["Infiltrats pulmonaires labiles avec hyperéosinophilie sanguine", "Hépatomégalie fébrile avec ictère", "Diarrhée dysentérique avec rectorragies", "Méningo-encéphalite avec éosinophilie du LCR"],
    correct: 0,
    explanation: "Le syndrome de Löffler correspond à une pneumopathie atypique fugace (toux, fièvre modérée) associée à des images radiologiques labiles et une hyperéosinophilie, causée par le passage transpulmonaire des larves (Ascaris, Ankylostome, Anguillule)."
  },
  {
    id: 'h_clin_2',
    question: "Quelle courbe d'éosinophilie est caractéristique d'une helminthiose tissulaire (ex: Fasciolose en phase d'invasion) ?",
    options: ["Courbe de Lavier (en 'coup d'archet')", "Éosinophilie constante et modérée", "Absence d'éosinophilie", "Éosinopénie initiale puis augmentation lente"],
    correct: 0,
    explanation: "La courbe de Lavier se caractérise par une ascension rapide et très élevée de l'éosinophilie (phase d'invasion tissulaire), suivie d'une descente lente en plateau (phase d'état)."
  },
  {
    id: 'h_clin_3',
    question: "Parmi ces parasitoses, laquelle entraîne l'hyperéosinophilie la plus massive et persistante ?",
    options: ["Toxocarose (Larva Migrans Viscérale)", "Oxyurose", "Taeniase à T. saginata", "Kyste hydatique sain"],
    correct: 0,
    explanation: "La Toxocarose est une impasse parasitaire chez l'homme. Les larves errantes dans les tissus provoquent une réaction immuno-allergique majeure avec une hyperéosinophilie pouvant dépasser 10-20 G/L."
  },
  {
    id: 'h_clin_4',
    question: "Le syndrome de 'Larva Currens' (dermatite linéaire rampante rapide) est pathognomonique de :",
    options: ["L'Anguillulose (Strongyloides stercoralis)", "L'Ankylostomose", "La Bilharziose cutanée", "La Dracunculose"],
    correct: 0,
    explanation: "La Larva Currens est une éruption urticarienne linéaire, serpigineuse, très prurigineuse, avançant rapidement (5-10 cm/heure), typique de la migration sous-cutanée des larves d'Anguillule lors de l'auto-infestation."
  },
  {
    id: 'h_clin_5',
    question: "Quelle anémie est typiquement associée à une ankylostomose massive ?",
    options: ["Anémie microcytaire hypochrome ferriprive", "Anémie macrocytaire mégaloblastique", "Anémie hémolytique auto-immune", "Anémie aplasique"],
    correct: 0,
    explanation: "Les ankylostomes adultes pompent le sang au niveau de la muqueuse duodénale (spoliation sanguine). Cela entraîne une carence en fer (ferriprive) et donc une anémie microcytaire."
  },

  // --- DIAGNOSTIC DIRECT (NEMATODES) ---
  {
    id: 'h_clin_6',
    question: "Quel est le moment idéal pour réaliser un Scotch-test (Test de Graham) ?",
    options: ["Le matin au réveil, avant la toilette et la défécation", "Après la selle de midi", "Le soir au coucher", "À n'importe quel moment de la journée"],
    correct: 0,
    explanation: "Il faut recueillir les œufs d'oxyures pondus la nuit sur la marge anale avant qu'ils ne soient éliminés par l'hygiène ou la défécation."
  },
  {
    id: 'h_clin_7',
    question: "La technique de Baermann repose sur quelle propriété des larves ?",
    options: ["Hygrotropisme et thermotropisme positifs", "Phototropisme positif", "Résistance à l'acide", "Flottaison dans l'eau salée"],
    correct: 0,
    explanation: "La technique de Baermann attire les larves (surtout d'Anguillule) vers l'eau tiède (hydro-thermotropisme) au fond d'un entonnoir, permettant leur concentration."
  },
  {
    id: 'h_clin_8',
    question: "Dans quel cas l'examen parasitologique des selles (EPS) est-il classiquement NÉGATIF ?",
    options: ["Toxocarose", "Ascaridiose", "Trichocéphalose", "Ankylostomose"],
    correct: 0,
    explanation: "Dans la Toxocarose, le parasite est en impasse chez l'homme. Il ne devient jamais adulte et ne pond donc pas d'œufs dans les selles. Le diagnostic est uniquement sérologique."
  },
  {
    id: 'h_clin_9',
    question: "Quelle méthode est recommandée pour quantifier la charge parasitaire dans les bilharzioses et géohelminthiases (recommandation OMS) ?",
    options: ["Technique de Kato-Katz", "Technique de Ritchie", "Technique de Willis", "Examen direct simple"],
    correct: 0,
    explanation: "Le Kato-Katz est une méthode d'épaississement standardisée qui permet de calculer le nombre d'œufs par gramme de selles, indicateur crucial de l'intensité de l'infection."
  },
  {
    id: 'h_clin_10',
    question: "À propos du diagnostic de l'Ascaridiose, quelle affirmation est vraie ?",
    options: ["Les œufs sont très résistants et non embryonnés à la ponte", "L'EPS est positif dès la phase de Löffler", "Les œufs flottent mal avec les techniques de flottaison", "L'examen direct est peu sensible"],
    correct: 0,
    explanation: "Les œufs d'Ascaris sont pondus non embryonnés. L'EPS n'est positif qu'environ 2 mois après l'infestation (après la phase adulte). Pendant le syndrome de Löffler (phase larvaire), l'EPS est négatif."
  },

  // --- FILARIOSES ---
  {
    id: 'h_clin_11',
    question: "Quel signe clinique est évocateur de la Loase (Filariose à Loa loa) ?",
    options: ["Œdème de Calabar (fugace et migrateur)", "Éléphantiasis du scrotum", "Nodules onchocerquiens", "Cécité des rivières"],
    correct: 0,
    explanation: "L'œdème de Calabar est un angio-œdème allergique, fugace, migrateur et prurigineux, typique de la Loase, apparaissant souvent aux membres supérieurs ou au visage."
  },
  {
    id: 'h_clin_12',
    question: "Quelle est la particularité du prélèvement sanguin pour rechercher les microfilaires de Wuchereria bancrofti ?",
    options: ["Prélèvement nocturne (périodicité nocturne)", "Prélèvement diurne (périodicité diurne)", "Prélèvement à midi pile", "Indifférent (apériodique)"],
    correct: 0,
    explanation: "Les microfilaires de Wuchereria bancrofti présentent une périodicité nocturne stricte dans le sang périphérique. Le prélèvement doit être fait entre 22h et 2h du matin."
  },
  {
    id: 'h_clin_13',
    question: "Quel est le signe majeur de la phase d'état de la Filariose Lymphatique ?",
    options: ["Lymphœdème chronique (Éléphantiasis)", "Hématurie", "Diarrhée chronique", "Prurit anal"],
    correct: 0,
    explanation: "L'obstruction des vaisseaux lymphatiques par les vers adultes entraîne un lymphœdème chronique qui peut évoluer vers un éléphantiasis (membres inférieurs, scrotum, sein)."
  },
  {
    id: 'h_clin_14',
    question: "La cécité est une complication grave de quelle helminthiose ?",
    options: ["Onchocercose (Onchocerca volvulus)", "Loase", "Dracunculose", "Filariose lymphatique"],
    correct: 0,
    explanation: "L'Onchocercose est appelée 'Cécité des rivières'. Les microfilaires migrent dans l'œil et provoquent une kératite sclérosante et une choriorétinite menant à la cécité."
  },
  {
    id: 'h_clin_15',
    question: "Le test de Mazzotti (provocation au diéthylcarbamazine) est utilisé avec prudence pour le diagnostic de :",
    options: ["L'Onchocercose", "La Bilharziose", "L'Hydatidose", "La Trichinellose"],
    correct: 0,
    explanation: "Ce test provoque une réaction allergique cutanée et systémique en tuant brutalement les microfilaires. Il est utilisé quand la recherche de microfilaires dermiques est négative mais la suspicion forte."
  },

  // --- TRICHINELLOSE ---
  {
    id: 'h_clin_16',
    question: "Quels sont les signes de la phase d'état de la Trichinellose ?",
    options: ["Fièvre, myalgies, œdème de la face", "Diarrhée, vomissements", "Toux sèche, dyspnée", "Douleurs abdominales, ictère"],
    correct: 0,
    explanation: "Après une phase intestinale (diarrhée), la phase musculaire (état) associe la triade classique : fièvre élevée, myalgies intenses et œdèmes (visage/paupières)."
  },
  {
    id: 'h_clin_17',
    question: "Quelle anomalie biologique enzymatique est évocatrice de la Trichinellose ?",
    options: ["Élévation des enzymes musculaires (CPK, LDH)", "Élévation des transaminases (ALAT/ASAT)", "Élévation de la lipase", "Élévation de la bilirubine"],
    correct: 0,
    explanation: "La destruction des fibres musculaires par les larves de Trichine entraîne une libération massive d'enzymes musculaires, notamment les Créatine Phosphokinases (CPK)."
  },
  
  // --- TREMATODES (BILHARZIOSES) ---
  {
    id: 'h_clin_18',
    question: "Quel est le premier signe d'appel clinique de la Bilharziose urinaire ?",
    options: ["Hématurie macroscopique, souvent terminale", "Pollakiurie nocturne", "Colique néphrétique", "Insuffisance rénale aiguë"],
    correct: 0,
    explanation: "L'hématurie est le signe cardinal, résultant de la traversée de la paroi vésicale par les œufs de Schistosoma haematobium."
  },
  {
    id: 'h_clin_19',
    question: "Le syndrome de Katayama correspond à :",
    options: ["La phase de toxémie immuno-allergique lors de la primo-invasion des schistosomes", "La phase de fibrose hépatique terminale", "La phase de dermatite cercarienne", "Une complication neurologique"],
    correct: 0,
    explanation: "C'est une réaction d'hypersensibilité systémique aiguë (fièvre, urticaire, toux, myalgies) survenant quelques semaines après l'infection, contemporaine de la migration des schistosomules et du début de la ponte."
  },
  {
    id: 'h_clin_20',
    question: "Quelle espèce de Schistosome est responsable de la Bilharziose intestinale avec hépatosplénomégalie (hypertension portale) ?",
    options: ["Schistosoma mansoni", "Schistosoma haematobium", "Fasciola hepatica", "Taenia solium"],
    correct: 0,
    explanation: "S. mansoni (et S. japonicum) vit dans le système porte. Les œufs embolisent le foie, créant une fibrose périportale (Symmers) et une hypertension portale."
  },
  {
    id: 'h_clin_21',
    question: "Quelle technique de filtration est utilisée pour rechercher les œufs de Schistosoma haematobium ?",
    options: ["Filtration des urines sur membrane (polycarbonate/papier)", "Kato-Katz", "Technique de Ritchie", "Baermann"],
    correct: 0,
    explanation: "On filtre généralement 10 ml d'urines (recueillies après effort entre 10h et 14h) pour retenir et compter les œufs à éperon terminal."
  },
  {
    id: 'h_clin_22',
    question: "La présence de calcifications vésicales en 'coquille d'œuf' à la radiographie est évocatrice de :",
    options: ["Bilharziose urinaire chronique", "Tuberculose rénale", "Lithiase urique", "Hydatidose rénale"],
    correct: 0,
    explanation: "Dans les formes chroniques de bilharziose, la paroi vésicale peut se calcifier totalement, donnant cet aspect caractéristique."
  },

  // --- TREMATODES (DOUVES) ---
  {
    id: 'h_clin_23',
    question: "La Distomatose hépatique à Fasciola hepatica se contracte par :",
    options: ["Ingestion de cresson sauvage contaminé", "Consommation de poisson cru", "Baignade en eau douce", "Piqûre de moustique"],
    correct: 0,
    explanation: "L'homme se contamine en ingérant des métacercaires enkystées sur des végétaux aquatiques (cresson, pissenlit) ou dans l'eau de boisson."
  },
  {
    id: 'h_clin_24',
    question: "Quel est le tableau clinique de la phase d'état (biliaire) de la Fasciolose ?",
    options: ["Angiocholite (fièvre, douleurs, ictère)", "Hépatite fulminante", "Cirrhose atrophique", "Diarrhée aqueuse profuse"],
    correct: 0,
    explanation: "Une fois adultes dans les voies biliaires, les douves provoquent une obstruction et une inflammation, mimant une lithiase biliaire (colique hépatique, ictère)."
  },
  {
    id: 'h_clin_25',
    question: "La distomatose pulmonaire (Paragonimose) peut être confondue cliniquement avec :",
    options: ["La Tuberculose pulmonaire", "L'Asthme allergique", "Le Cancer bronchique", "La Pneumonie franche"],
    correct: 0,
    explanation: "La Paragonimose se manifeste par des hémoptysies chroniques (crachats rouillés), une toux et des images cavitaires, ce qui la fait souvent confondre avec la tuberculose en zone endémique."
  },

  // --- CESTODES (ADULTES) ---
  {
    id: 'h_clin_26',
    question: "Quel signe permet au patient de faire lui-même le diagnostic de Taeniase à Taenia saginata ?",
    options: ["La découverte d'anneaux blancs et plats dans les sous-vêtements ou la literie", "Le prurit anal", "La diarrhée sanglante", "Le vomissement de vers"],
    correct: 0,
    explanation: "Les anneaux de T. saginata sont mobiles et forcent le sphincter anal activement en dehors des selles, ce qui alerte le patient."
  },
  {
    id: 'h_clin_27',
    question: "Quelle est la principale différence clinique entre T. saginata et T. solium ?",
    options: ["Seul T. solium peut provoquer une Cysticercose humaine", "Seul T. saginata provoque une anémie", "T. solium est plus grand", "T. saginata provoque des troubles neurologiques"],
    correct: 0,
    explanation: "L'ingestion d'œufs de T. solium (péril fécal ou auto-infestation) entraîne la Cysticercose (larves dans les tissus). Cela n'existe pas avec T. saginata chez l'homme."
  },
  {
    id: 'h_clin_28',
    question: "L'anémie macrocytaire mégaloblastique par carence en vitamine B12 est une complication rare de :",
    options: ["Bothriocéphalose (Diphyllobothrium latum)", "Taeniase", "Hymenolepiase", "Hydatidose"],
    correct: 0,
    explanation: "Le Bothriocéphale consomme avidement la vitamine B12 dans l'intestin, pouvant entraîner une anémie de type Biermer."
  },
  {
    id: 'h_clin_29',
    question: "Comment fait-on le diagnostic de certitude de l'Hymenolepiase (H. nana) ?",
    options: ["Examen parasitologique des selles (EPS)", "Scotch-test", "Sérologie", "Biopsie jéjunale"],
    correct: 0,
    explanation: "Le diagnostic repose sur la mise en évidence des œufs caractéristiques (embryonnés avec filaments polaires) dans les selles."
  },
  
  // --- CESTODES (LARVAIRES) ---
  {
    id: 'h_clin_30',
    question: "Quel est le risque majeur lors de la ponction ou de la rupture chirurgicale d'un kyste hydatique ?",
    options: ["Choc anaphylactique et dissémination secondaire (hydatidose secondaire)", "Hémorragie massive", "Surinfection bactérienne", "Insuffisance hépatique aiguë"],
    correct: 0,
    explanation: "Le liquide hydatique est hautement antigénique (risque de choc) et contient des protoscolex fertiles qui peuvent se greffer ailleurs dans le péritoine (échinococcose secondaire)."
  },
  {
    id: 'h_clin_31',
    question: "L'aspect radiologique en 'boulet de canon' (lâcher de ballons) pulmonaire peut s'observer dans :",
    options: ["L'Hydatidose pulmonaire multiple (ou secondaire)", "L'Ascaridiose", "La Bilharziose", "La Distomatose"],
    correct: 0,
    explanation: "Bien que cela évoque souvent des métastases, des kystes hydatiques pulmonaires multiples peuvent donner cet aspect."
  },
  {
    id: 'h_clin_32',
    question: "La Neurocysticercose se manifeste le plus souvent par :",
    options: ["Des crises d'épilepsie tardives", "Une méningite purulente", "Un accident vasculaire cérébral", "Une paraplégie brutale"],
    correct: 0,
    explanation: "La Neurocysticercose est la première cause d'épilepsie acquise dans les pays en développement. Les kystes ou leur calcification irritent le cortex cérébral."
  },
  {
    id: 'h_clin_33',
    question: "L'échinococcose alvéolaire (E. multilocularis) se comporte cliniquement comme :",
    options: ["Une tumeur hépatique maligne à évolution lente", "Un kyste liquidien simple", "Une hépatite aiguë", "Un abcès pyogène"],
    correct: 0,
    explanation: "C'est une parasitose très grave qui infiltre le foie comme un cancer (cancer vermineux), avec métastases possibles, sans limite nette."
  },
  {
    id: 'h_clin_34',
    question: "Quel examen d'imagerie permet de classifier les kystes hydatiques (Classification de Gharbi) ?",
    options: ["Échographie hépatique", "Radiographie de l'abdomen sans préparation (ASP)", "Scintigraphie", "Cholangiographie"],
    correct: 0,
    explanation: "L'échographie est l'examen clé pour visualiser la structure du kyste (membrane décollée, vésicules filles, calcifications) et le classer de Type I à V."
  },
  {
    id: 'h_clin_35',
    question: "Le signe du 'nénuphar' (membrane flottante) à l'imagerie est pathognomonique de :",
    options: ["Un kyste hydatique avec décollement de la membrane proligère", "Un abcès amibien", "Un kyste biliaire simple", "Une tumeur nécrosée"],
    correct: 0,
    explanation: "Lorsque la pression intracystique baisse ou qu'il y a une fissure, la membrane proligère se décolle et flotte dans le liquide, donnant cet aspect caractéristique."
  },
  // --- DIAGNOSTIC DIFFÉRENTIEL & COMPLICATIONS ---
  {
    id: 'h_clin_36',
    question: "Devant une dysenterie (selles glairo-sanglantes), quelle helminthiose faut-il évoquer ?",
    options: ["Trichocéphalose massive", "Ascaridiose", "Taeniase", "Oxyurose"],
    correct: 0,
    explanation: "La Trichocéphalose massive, surtout chez l'enfant, peut provoquer un syndrome dysentérique sévère avec prolapsus rectal, simulant une amibiase."
  },
  {
    id: 'h_clin_37',
    question: "L'occlusion intestinale aiguë est une complication mécanique classique de :",
    options: ["L'ascaridiose (paquet de vers)", "L'oxyurose", "L'ankylostomose", "La trichocéphalose"],
    correct: 0,
    explanation: "Les Ascaris adultes, en grand nombre, peuvent former des pelotons (paquets) qui obstruent la lumière intestinale, causant une occlusion mécanique chirurgicale."
  },
  {
    id: 'h_clin_38',
    question: "Quelle parasitose peut provoquer une angiocholite (infection des voies biliaires) par migration erratique ?",
    options: ["Ascaris lumbricoides", "Trichuris trichiura", "Enterobius vermicularis", "Necator americanus"],
    correct: 0,
    explanation: "L'Ascaris adulte a une tendance fâcheuse à explorer les orifices naturels. Il peut remonter dans le cholédoque, causant une obstruction biliaire, une angiocholite ou une pancréatite."
  },
  {
    id: 'h_clin_39',
    question: "Le 'Prurit du nageur' (Dermatite cercarienne) est causé par :",
    options: ["Des furcocercaires de schistosomes d'oiseaux (impasse parasitaire)", "Des cercaires de Schistosoma haematobium", "Des larves d'ankylostomes", "Des larves de strongyloides"],
    correct: 0,
    explanation: "C'est une réaction allergique cutanée immédiate due à la pénétration de cercaires d'oiseaux qui meurent dans la peau humaine (impasse), fréquente après baignade en étang."
  },
  {
    id: 'h_clin_40',
    question: "L'hémoptysie est un signe clinique majeur de quelles parasitoses ?",
    options: ["Paragonimose et parfois Bilharziose ou Ascaridiose (Löffler)", "Taeniase et Oxyurose", "Trichocéphalose et Ankylostomose", "Dracunculose et Filariose"],
    correct: 0,
    explanation: "La Paragonimose (douve du poumon) est la cause classique. Le passage transpulmonaire d'Ascaris (Löffler) peut donner des crachats hémoptoïques, tout comme l'embolie d'œufs de bilharzies."
  },

  // --- TRAITEMENT & PRÉVENTION (PRINCIPES GÉNÉRAUX) ---
  {
    id: 'h_clin_41',
    question: "Quel est le mécanisme d'action des Benzimidazoles (Albendazole, Mébendazole) ?",
    options: ["Inhibition de la polymérisation de la tubuline du parasite", "Paralysie neuromusculaire par blocage GABA", "Augmentation de la perméabilité calcique", "Inhibition de la synthèse des folates"],
    correct: 0,
    explanation: "Les benzimidazoles se lient à la tubuline des helminthes, empêchant la formation des microtubules nécessaires à l'absorption du glucose, affamant ainsi le parasite."
  },
  {
    id: 'h_clin_42',
    question: "Le Praziquantel est le médicament de choix pour traiter :",
    options: ["Toutes les trématodoses (Bilharzioses, Douves) et cestodoses adultes", "Les nématodoses intestinales", "Les filarioses lymphatiques", "Les protozoaires"],
    correct: 0,
    explanation: "Le Praziquantel est actif sur les Trématodes (sauf Fasciola hepatica où le Triclabendazole est préféré) et les Cestodes adultes. Il provoque une paralysie spastique du ver."
  },
  {
    id: 'h_clin_43',
    question: "Pourquoi faut-il traiter toute la famille en cas d'Oxyurose ?",
    options: ["Car la contagion est directe, facile et fréquente (manu-portée, literie)", "Car c'est une maladie génétique", "Pour écouler les stocks de médicaments", "Car le parasite se transmet par moustique à toute la maison"],
    correct: 0,
    explanation: "L'oxyurose est extrêmement contagieuse. Les œufs résistent dans le milieu extérieur (draps, poussière). Le traitement familial simultané et les mesures d'hygiène sont indispensables."
  },
  {
    id: 'h_clin_44',
    question: "Quelle mesure prophylactique individuelle est la plus efficace contre l'Ankylostomose ?",
    options: ["Le port de chaussures", "Le lavage des mains", "La cuisson de la viande", "L'utilisation de moustiquaires"],
    correct: 0,
    explanation: "La contamination se fait par pénétration transcutanée des larves strongyloïdes présentes dans la boue, souvent au niveau des pieds. Le port de chaussures est la barrière principale."
  },
  {
    id: 'h_clin_45',
    question: "La lutte contre le péril fécal (latrines, hygiène) est inefficace pour quelle parasitose ?",
    options: ["Dracunculose (Ver de Guinée)", "Ascaridiose", "Trichocéphalose", "Ankylostomose"],
    correct: 0,
    explanation: "La Dracunculose se transmet par l'ingestion d'eau contenant des Cyclops (crustacés) parasités, et non directement par les selles humaines souillant le sol (bien que le cycle implique l'eau, l'hygiène fécale seule ne suffit pas, il faut filtrer l'eau)."
  },

  // --- FOCUS CLINIQUES SPÉCIFIQUES ---
  {
    id: 'h_clin_46',
    question: "Le signe de Romana (œdème bi-palpébral unilatéral) est caractéristique de :",
    options: ["La Maladie de Chagas (Trypanosomose américaine) - (Note: Protozoaire mais confusion fréquente)", "La Trichinellose", "La Filariose de Bancroft", "La Loase"],
    correct: 0,
    explanation: "Bien que ce soit un protozoaire, c'est un diagnostic différentiel important des œdèmes faciaux parasitaires (comme dans la Trichinellose ou la Loase). Dans la Trichinellose, l'œdème est bilatéral."
  },
  {
    id: 'h_clin_47',
    question: "Quelle parasitose peut entraîner un cancer de la vessie (carcinome épidermoïde) à long terme ?",
    options: ["Bilharziose urinaire (S. haematobium)", "Bilharziose intestinale", "Distomatose hépatique", "Hydatidose"],
    correct: 0,
    explanation: "L'irritation chronique de la muqueuse vésicale par les œufs de S. haematobium est cancérigène (classé groupe 1 par le CIRC)."
  },
  {
    id: 'h_clin_48',
    question: "Le traitement chirurgical PAIR (Ponction-Aspiration-Injection-Réaspiration) concerne :",
    options: ["Le Kyste Hydatique du foie", "L'abcès amibien", "La Neurocysticercose", "L'ascaridiose biliaire"],
    correct: 0,
    explanation: "C'est une alternative à la chirurgie classique pour certains types de kystes hydatiques (Types I et II), sous guidage échographique."
  },
  {
    id: 'h_clin_49',
    question: "Quelle helminthiose est associée à la consommation de poisson cru ou mal cuit ?",
    options: ["Bothriocéphalose", "Taeniase", "Hydatidose", "Ascaridiose"],
    correct: 0,
    explanation: "Le Bothriocéphale (Diphyllobothrium latum) se transmet par l'ingestion de poissons d'eau douce parasités par des larves plérocercoïdes."
  },
  {
    id: 'h_clin_50',
    question: "L'extraction du ver par enroulement progressif sur un bâtonnet est le traitement traditionnel de :",
    options: ["La Dracunculose", "La Filariose lymphatique", "L'Onchocercose", "L'Oxyurose"],
    correct: 0,
    explanation: "C'est le traitement millénaire du Ver de Guinée (Dracunculus medinensis) lorsqu'il émerge à la peau pour pondre."
  },

  // --- SITUATIONS CLINIQUES AVANCÉES ---
  {
    id: 'h_clin_51',
    question: "Une hyperéosinophilie > 3 G/L chez un patient revenant d'une zone tropicale sans symptômes digestifs doit faire rechercher en priorité :",
    options: ["Une filariose ou une bilharziose en phase d'invasion", "Un paludisme", "Une amibiase", "Une giardiase"],
    correct: 0,
    explanation: "Les protozoaires (Paludisme, Amibes, Giardia) ne donnent PAS d'hyperéosinophilie. Une telle valeur signe une helminthiose tissulaire active."
  },
  {
    id: 'h_clin_52',
    question: "Quel médicament est contre-indiqué chez la femme enceinte (tératogène) parmi les antiparasitaires ?",
    options: ["Albendazole (au 1er trimestre)", "Praziquantel", "Niclosamide", "Ivermectine (par précaution)"],
    correct: 0,
    explanation: "Les benzimidazoles (Albendazole, Mébendazole) sont tératogènes chez l'animal et contre-indiqués au 1er trimestre de la grossesse."
  },
  {
    id: 'h_clin_53',
    question: "La 'colique hépatique' parasitaire est typique de :",
    options: ["Fasciola hepatica (passage cholédocien)", "Schistosoma mansoni", "Echinococcus granulosus (kyste sain)", "Ascaris (migration)"],
    correct: 0,
    explanation: "La douve adulte vit dans les voies biliaires. Son passage ou l'obstruction qu'elle crée provoque des douleurs de type colique hépatique."
  },
  {
    id: 'h_clin_54',
    question: "Quelle parasitose donne des calcifications musculaires visibles à la radio des années après l'infestation ?",
    options: ["La Cysticercose et la Dracunculose (ver calcifié)", "La Trichinellose (kystes microscopiques)", "L'Onchocercose", "La Filariose lymphatique"],
    correct: 0,
    explanation: "Les cysticerques morts se calcifient et deviennent visibles (grains de riz) dans les muscles. Le ver de Guinée mort se calcifie aussi en un long cordon."
  },
  {
    id: 'h_clin_55',
    question: "Le syndrome de dysenterie bilharzienne s'observe dans :",
    options: ["Les infections à S. mansoni, S. japonicum ou S. intercalatum", "L'infection à S. haematobium", "La Fasciolose", "L'Ankylostomose"],
    correct: 0,
    explanation: "C'est la manifestation intestinale aiguë ou chronique liée à la formation de granulomes et d'ulcérations coliques par les œufs de ces espèces."
  },
  
  // --- EXAMENS COMPLÉMENTAIRES ---
  {
    id: 'h_clin_56',
    question: "La recherche d'ADN parasitaire circulant (PCR) est particulièrement utile pour :",
    options: ["Le diagnostic précoce ou les impasses parasitaires (ex: Toxocarose, Kystes atypiques)", "Le diagnostic de routine de l'oxyurose", "Le suivi de l'ascaridiose", "La détection des lentes"],
    correct: 0,
    explanation: "La biologie moléculaire permet de détecter des infections pauciparasitaires ou des situations où le parasite n'est pas accessible (impasses, kystes profonds)."
  },
  {
    id: 'h_clin_57',
    question: "Quelle anomalie à la Numération Formule Sanguine (NFS) accompagne souvent les helminthioses tissulaires ?",
    options: ["Hyperéosinophilie", "Neutropénie", "Lymphocytose", "Thrombopénie"],
    correct: 0,
    explanation: "L'hyperéosinophilie est le marqueur biologique clé des helminthioses, témoignant de la réponse immunitaire Th2 contre les vers."
  },
  {
    id: 'h_clin_58',
    question: "Quel examen permet de différencier T. saginata de T. solium sur un anneau gravide ?",
    options: ["La coloration à l'encre de Chine des ramifications utérines", "L'examen direct à l'état frais", "La forme des œufs", "La taille du scolex"],
    correct: 0,
    explanation: "On injecte de l'encre de Chine par le pore génital : T. saginata a des ramifications utérines fines et nombreuses (>15), T. solium en a moins (<10) et plus grossières."
  },
  {
    id: 'h_clin_59',
    question: "La biopsie rectale (Snip rectal) est une technique diagnostique pour :",
    options: ["La Bilharziose intestinale (recherche d'œufs dans la muqueuse)", "L'Ascaridiose", "L'Oxyurose", "La Giardiase"],
    correct: 0,
    explanation: "On prélève un fragment de muqueuse rectale qu'on écrase entre lame et lamelle pour voir les œufs de Schistosomes piégés dans les tissus."
  },
  {
    id: 'h_clin_60',
    question: "La biopsie cutanée exsangue (Snip cutané) est le 'Gold Standard' pour :",
    options: ["L'Onchocercose (recherche de microfilaires dermiques)", "La Leishmaniose", "La Dracunculose", "La Loase"],
    correct: 0,
    explanation: "On prélève un petit copeau de peau (sans faire saigner) qu'on immerge dans du sérum physiologie : les microfilaires d'Onchocerca sortent et nagent dans le liquide."
  },

  // --- CYCLES & VECTEURS (IMPACT CLINIQUE) ---
  {
    id: 'h_clin_61',
    question: "La transmission de la Wuchereria bancrofti se fait par piqûre de :",
    options: ["Moustiques (Culex, Anophèle, Aedes)", "Mouches Tsé-tsé", "Simulies", "Chrysops"],
    correct: 0,
    explanation: "Ce sont des moustiques (Culicidés) qui transmettent les larves infestantes L3 de la filaire lymphatique."
  },
  {
    id: 'h_clin_62',
    question: "La transmission de l'Onchocercose se fait par :",
    options: ["Simulie (Mouche noire)", "Moustique", "Taon (Chrysops)", "Punaise réduve"],
    correct: 0,
    explanation: "La Simulie (Simulium damnosum) est le vecteur. Elle vit près des rivières à courant rapide, d'où le nom de 'Cécité des rivières'."
  },
  {
    id: 'h_clin_63',
    question: "La Loase est transmise par :",
    options: ["Chrysops (Mouche rouge ou Taon)", "Simulie", "Moustique", "Glossine"],
    correct: 0,
    explanation: "Le Chrysops est un taon diurne forestier qui transmet la Loa loa."
  },
  {
    id: 'h_clin_64',
    question: "Quel est l'hôte intermédiaire indispensable au cycle des Schistosomes ?",
    options: ["Un mollusque d'eau douce spécifique (Bulin, Planorbe...)", "Un poisson", "Un crustacé (Cyclops)", "Une plante aquatique"],
    correct: 0,
    explanation: "Le cycle des bilharzies est hétéroxène et nécessite obligatoirement un passage par un mollusque gastéropode spécifique (ex: Bulinus pour S. haematobium)."
  },
  {
    id: 'h_clin_65',
    question: "L'ingestion de fourmis est accidentelle mais nécessaire au cycle de :",
    options: ["Dicrocoelium dendriticum (Petite douve)", "Fasciola hepatica", "Taenia saginata", "Ascaris"],
    correct: 0,
    explanation: "Le cycle de la petite douve est complexe : Escargot -> Fourmi -> Hôte définitif (Mouton/Homme). La fourmi paralysée reste en haut des brins d'herbe."
  },

  // --- RÉPARTITION GÉOGRAPHIQUE & ÉPIDÉMIOLOGIE ---
  {
    id: 'h_clin_66',
    question: "Quelle parasitose est cosmopolite et très fréquente dans les crèches/écoles en Europe ?",
    options: ["Oxyurose", "Ascaridiose", "Ankylostomose", "Bilharziose"],
    correct: 0,
    explanation: "L'oxyurose est l'helminthiose la plus répandue dans les pays tempérés et développés, favorisée par la vie en collectivité des enfants."
  },
  {
    id: 'h_clin_67',
    question: "La Bilharziose à Schistosoma mekongi se trouve principalement en :",
    options: ["Asie du Sud-Est (Mékong)", "Afrique de l'Ouest", "Amérique du Sud", "Égypte"],
    correct: 0,
    explanation: "Comme son nom l'indique, elle est endémique dans le bassin du Mékong (Laos, Cambodge)."
  },
  {
    id: 'h_clin_68',
    question: "La 'ceinture de la Loase' se situe exclusivement en :",
    options: ["Afrique Centrale forestière", "Asie du Sud-Est", "Amérique Latine", "Afrique du Nord"],
    correct: 0,
    explanation: "La Loase est strictement limitée aux zones de forêt dense d'Afrique Centrale et de l'Ouest."
  },
  {
    id: 'h_clin_69',
    question: "Quelle parasitose a été déclarée éradiquée ou en voie d'éradication dans de nombreux pays grâce à la filtration de l'eau ?",
    options: ["Dracunculose", "Bilharziose", "Paludisme", "Ascaridiose"],
    correct: 0,
    explanation: "Le programme d'éradication du ver de Guinée (Carter Center / OMS) a réduit les cas mondiaux de plusieurs millions à quelques dizaines."
  },
  {
    id: 'h_clin_70',
    question: "L'hydatidose est particulièrement fréquente dans les régions :",
    options: ["D'élevage ovin (moutons) avec présence de chiens de berger", "De culture intensive du riz", "De pêche en eau douce", "De forêt équatoriale"],
    correct: 0,
    explanation: "Le cycle domestique Chien-Mouton entretient l'endémie, notamment au Maghreb, en Amérique du Sud et en Australie."
  },
  // --- SIGNES RADIOLOGIQUES & IMAGERIE ---
  {
    id: 'h_clin_71',
    question: "À l'ASP (Abdomen Sans Préparation), quel signe peut révéler une ascaridiose massive ?",
    options: ["Des images claires tubulées (spaghettis) ou en tourbillon", "Des niveaux hydro-aériques centraux", "Un pneumopéritoine", "Des calcifications pancréatiques"],
    correct: 0,
    explanation: "Les paquets de vers peuvent être visibles à la radiographie simple, formant des images tubulées caractéristiques dans la lumière intestinale."
  },
  {
    id: 'h_clin_72',
    question: "Quel aspect échographique définit un kyste hydatique de type III (Classification de Gharbi) ?",
    options: ["Kyste à aspect hétérogène, multivésiculaire (en nid d'abeille)", "Kyste liquidien pur", "Kyste calcifié", "Kyste avec membrane décollée"],
    correct: 0,
    explanation: "Le Type III correspond à un kyste fertile contenant de multiples vésicules filles, donnant un aspect cloisonné ou en nid d'abeille."
  },
  {
    id: 'h_clin_73',
    question: "La CPRE (Cholangio-Pancréatographie Rétrograde Endoscopique) peut être diagnostique et thérapeutique pour :",
    options: ["L'extraction d'une Fasciola hepatica ou d'un Ascaris des voies biliaires", "Le traitement d'un kyste hydatique", "Le diagnostic d'une bilharziose intestinale", "La biopsie d'une cysticercose"],
    correct: 0,
    explanation: "La CPRE permet de visualiser l'obstruction biliaire par le ver et souvent de l'extraire à l'aide d'un ballonnet ou d'une anse."
  },
  {
    id: 'h_clin_74',
    question: "Au scanner cérébral, une lésion kystique avec un scolex visible (point hyperdense) est évocatrice de :",
    options: ["Neurocysticercose active", "Tumeur gliale", "Abcès à pyogènes", "Toxoplasmose"],
    correct: 0,
    explanation: "La visualisation du scolex à l'intérieur du kyste est pathognomonique de la cysticercose et permet d'affirmer le diagnostic."
  },
  {
    id: 'h_clin_75',
    question: "L'échographie des voies urinaires est l'examen de dépistage de masse pour :",
    options: ["La morbidité liée à Schistosoma haematobium (hydronéphrose, polypes)", "La filariose lymphatique", "L'hydatidose rénale", "L'oxyurose"],
    correct: 0,
    explanation: "Elle permet de détecter précocement les lésions de la vessie et la dilatation des uretères (hydronéphrose) chez les populations exposées."
  },

  // --- PHYSIOPATHOLOGIE ---
  {
    id: 'h_clin_76',
    question: "L'anémie de l'Ankylostomose est principalement due à :",
    options: ["La spoliation sanguine directe (hématophagie) et les saignements muqueux", "L'hémolyse intravasculaire", "La carence en vitamine B12", "L'insuffisance médullaire"],
    correct: 0,
    explanation: "Chaque ver adulte consomme jusqu'à 0.2 ml de sang par jour et laisse des points de saignement sur la muqueuse intestinale en se déplaçant."
  },
  {
    id: 'h_clin_77',
    question: "Le mécanisme de l'éléphantiasis dans la filariose lymphatique est :",
    options: ["Obstruction mécanique et inflammatoire des vaisseaux lymphatiques", "Compression veineuse", "Insuffisance cardiaque", "Hypoprotidémie"],
    correct: 0,
    explanation: "Les filaires adultes vivent dans les lymphatiques, causant une dilatation, une dysfonction valvulaire et une fibrose, bloquant le retour lymphatique."
  },
  {
    id: 'h_clin_78',
    question: "La formation de granulomes bilharziens est une réaction immunitaire dirigée contre :",
    options: ["Les œufs piégés dans les tissus", "Les vers adultes", "Les cercaires", "Les produits métaboliques du ver"],
    correct: 0,
    explanation: "C'est l'antigène de l'œuf qui stimule une réaction inflammatoire granulomateuse (Th2 puis fibrose), responsable de la pathologie chronique."
  },
  {
    id: 'h_clin_79',
    question: "L'auto-infestation (cycle court) est possible et dangereuse (hyper-infection) avec :",
    options: ["Strongyloides stercoralis (Anguillule)", "Ascaris lumbricoides", "Necator americanus", "Trichuris trichiura"],
    correct: 0,
    explanation: "Les larves rhabdtoïdes peuvent se transformer en larves strongyloïdes infestantes directement dans l'intestin, traverser la paroi et réinfester l'hôte, surtout chez les immunodéprimés."
  },
  {
    id: 'h_clin_80',
    question: "La 'Cécité des rivières' est due à une atteinte de :",
    options: ["La cornée (kératite) et de la rétine (choriorétinite) par les microfilaires", "Cristallin (cataracte)", "Nerf optique (compression)", "Conjonctive (conjonctivite simple)"],
    correct: 0,
    explanation: "Les microfilaires mortes dans l'œil provoquent une inflammation chronique sclérosante menant à l'opacification de la cornée et l'atrophie optique."
  },

  // --- TRAITEMENTS SPÉCIFIQUES ---
  {
    id: 'h_clin_81',
    question: "Quel est le traitement de référence de la Grande Douve du foie (Fasciola hepatica) ?",
    options: ["Triclabendazole", "Praziquantel", "Mébendazole", "Ivermectine"],
    correct: 0,
    explanation: "Le Triclabendazole est le seul fasciolicide efficace sur les formes immatures et adultes. Le Praziquantel est peu efficace sur F. hepatica."
  },
  {
    id: 'h_clin_82',
    question: "L'Ivermectine est le traitement de choix pour :",
    options: ["L'Anguillulose et l'Onchocercose", "La Bilharziose", "Le Taenia", "Le Kyste Hydatique"],
    correct: 0,
    explanation: "C'est un puissant anti-helminthique agissant sur les canaux chlore glutamate-dépendants, très efficace sur les nématodes et les ectoparasites."
  },
  {
    id: 'h_clin_83',
    question: "Pourquoi évite-t-on le Praziquantel en phase aiguë de Cysticercose cérébrale (encéphalite) ?",
    options: ["Risque d'aggravation de l'œdème cérébral par lyse brutale des kystes", "Risque d'insuffisance rénale", "Inefficacité totale", "Risque d'hémorragie"],
    correct: 0,
    explanation: "La mort brutale des kystes provoque une réaction inflammatoire intense. On privilégie d'abord les corticoïdes et les antiépileptiques avant d'envisager un antiparasitaire."
  },
  {
    id: 'h_clin_84',
    question: "Le traitement de la Dracunculose repose essentiellement sur :",
    options: ["L'extraction mécanique du ver et les soins locaux", "Le Métronidazole", "L'Albendazole forte dose", "La chirurgie abdominale"],
    correct: 0,
    explanation: "Il n'y a pas de médicament curatif rapide. L'extraction lente et douce reste la méthode standard pour éviter la rupture du ver."
  },
  {
    id: 'h_clin_85',
    question: "En cas de Syndrome de Löffler, quelle est l'attitude thérapeutique ?",
    options: ["Abstention thérapeutique ou traitement symptomatique (le temps que les larves arrivent à l'intestin)", "Traitement immédiat par corticoïdes forte dose", "Albendazole immédiat", "Antibiotiques"],
    correct: 0,
    explanation: "Les antihelminthiques intestinaux sont peu efficaces sur les larves pulmonaires. On attend généralement la phase intestinale pour traiter, sauf symptômes graves."
  },

  // --- CAS CLINIQUES COURTS ---
  {
    id: 'h_clin_86',
    question: "Un enfant présente un prolapsus rectal. À l'examen de la muqueuse prolabée, on voit de petits vers blancs 'en fouet'. Quel diagnostic ?",
    options: ["Trichocéphalose massive", "Oxyurose", "Ascaridiose", "Amibiase"],
    correct: 0,
    explanation: "Le Trichocéphale (Trichuris) a une partie antérieure effilée qu'il fiche dans la muqueuse. Une charge massive provoque œdème, ténesme et prolapsus."
  },
  {
    id: 'h_clin_87',
    question: "Patient avec hépatomégalie kystique. La sérologie hydatique est négative. Quel diagnostic différentiel parasitaire évoquer ?",
    options: ["Kyste amibien (Abcès)", "Bilharziose hépatique", "Fasciolose", "Ascaridiose biliaire"],
    correct: 0,
    explanation: "L'abcès amibien du foie se présente comme une lésion liquidienne. Si l'imagerie est atypique pour l'hydatidose, l'amibiase est une option (sérologie amibienne à faire)."
  },
  {
    id: 'h_clin_88',
    question: "Retour de voyage (Afrique), fièvre, céphalées, et éruption urticarienne (Kabure). 3 semaines plus tard : hyperéosinophilie. Diagnostic probable ?",
    options: ["Bilharziose en phase d'invasion (Katayama)", "Paludisme", "Typhoïde", "Hépatite virale"],
    correct: 0,
    explanation: "C'est la chronologie typique d'une primo-infestation à Schistosomes (Dermatite -> Latence -> Toxémie/Katayama)."
  },
  {
    id: 'h_clin_89',
    question: "Patient présentant des nodules sous-cutanés indolores sur les crêtes iliaques et une kératite ponctuée. Diagnostic ?",
    options: ["Onchocercose", "Loase", "Dracunculose", "Cysticercose cutanée"],
    correct: 0,
    explanation: "Les onchocercomes (nodules contenant les adultes) siègent sur les plans osseux. L'atteinte oculaire associée confirme l'onchocercose."
  },
  {
    id: 'h_clin_90',
    question: "Femme enceinte, anémie sévère, vit en zone tropicale rurale, ne porte pas de chaussures. Diagnostic le plus urgent à traiter après l'accouchement ?",
    options: ["Ankylostomose", "Ascaridiose", "Oxyurose", "Taeniase"],
    correct: 0,
    explanation: "L'ankylostomose aggrave considérablement l'anémie gravidique, augmentant les risques pour la mère et le fœtus."
  },

  // --- DERNIÈRES QUESTIONS DE SYNTHÈSE ---
  {
    id: 'h_clin_91',
    question: "Quelle est la particularité des œufs de Diphyllobothrium latum à l'examen direct ?",
    options: ["Ils sont operculés et non embryonnés", "Ils ont un éperon terminal", "Ils sont ronds et épais", "Ils sont plats avec un embryon hexacanthe"],
    correct: 0,
    explanation: "L'œuf de Bothriocéphale ressemble à celui de la douve (ovale, operculé) mais il est plus petit et contient une cellule ovulaire entourée de cellules vitellines."
  },
  {
    id: 'h_clin_92',
    question: "Le test ELISA détecte quoi exactement ?",
    options: ["Les anticorps spécifiques (IgG, IgM) dans le sérum", "Les antigènes circulants", "L'ADN du parasite", "Les œufs"],
    correct: 0,
    explanation: "En parasitologie, l'ELISA est principalement utilisé pour la détection d'anticorps (sérologie) dans les helminthioses tissulaires."
  },
  {
    id: 'h_clin_93',
    question: "Quelle parasitose nécessite une déclaration obligatoire dans certains pays du fait de son potentiel épidémique alimentaire ?",
    options: ["Trichinellose", "Oxyurose", "Ascaridiose", "Ankylostomose"],
    correct: 0,
    explanation: "La Trichinellose survient souvent par épidémies familiales ou locales après consommation de viande contrôlée (sanglier, cheval), nécessitant une enquête sanitaire."
  },
  {
    id: 'h_clin_94',
    question: "Les taches de Bitot et la xérophtalmie sont-elles des signes de parasitose ?",
    options: ["Non, ce sont des signes de carence en Vitamine A, parfois aggravée par des parasitoses (Ascaris/Giardia)", "Oui, c'est pathognomonique de l'Onchocercose", "Oui, de la Loase", "Non, c'est une allergie"],
    correct: 0,
    explanation: "Les helminthioses intestinales massives (Ascaris) peuvent détourner les nutriments et aggraver une malnutrition, révélant une avitaminose A, mais ce n'est pas une atteinte parasitaire directe de l'œil."
  },
  {
    id: 'h_clin_95',
    question: "Quelle forme parasitaire est infestante pour l'homme dans le cas de l'Hydatidose ?",
    options: ["L'œuf embryonné (embryophore) éliminé par le chien", "Le kyste hydatique", "Le protoscolex", "L'adulte"],
    correct: 0,
    explanation: "L'homme se contamine accidentellement (hôte intermédiaire accidentel) en ingérant les œufs de T. échinocoque présents sur le pelage du chien ou dans l'environnement."
  },
  {
    id: 'h_clin_96',
    question: "La prophylaxie de la bilharziose repose sur :",
    options: ["Lutte contre les mollusques et éviction des bains en eau douce", "Moustiquaires imprégnées", "Cuisson de la viande", "Lavage des mains"],
    correct: 0,
    explanation: "C'est une maladie liée à l'eau (pénétration transcutanée des cercaires). L'assainissement et l'éducation sanitaire sont clés."
  },
  {
    id: 'h_clin_97',
    question: "Le signe de la 'glace pilée' à l'échographie hépatique évoque :",
    options: ["Une échinococcose alvéolaire", "Un kyste hydatique multivésiculaire", "Un abcès amibien", "Une cirrhose"],
    correct: 0,
    explanation: "Ce signe (ou aspect de grêle) est classique de l'échinococcose alvéolaire, traduisant les micro-vésicules et calcifications."
  },
  {
    id: 'h_clin_98',
    question: "Quelle helminthiose peut provoquer un prolapsus utérin ou vaginal dans les cas extrêmes ?",
    options: ["La Bilharziose génitale (S. haematobium)", "L'Oxyurose", "L'Ascaridiose", "La Filariose"],
    correct: 0,
    explanation: "Les lésions granulomateuses et la fibrose du plancher pelvien et du col utérin dans la bilharziose génitale féminine peuvent avoir des conséquences anatomiques graves."
  },
  {
    id: 'h_clin_99',
    question: "La périodicité des microfilaires de Loa loa est :",
    options: ["Diurne (10h-15h)", "Nocturne (22h-02h)", "Apériodique", "Vespérale"],
    correct: 0,
    explanation: "Contrairement à W. bancrofti (nocturne), Loa loa circule dans le sang périphérique le jour, adapté à l'activité de son vecteur (Chrysops)."
  },
  {
    id: 'h_clin_100',
    question: "En conclusion, quel est l'élément clé du diagnostic d'une helminthiose digestive hors phase d'invasion ?",
    options: ["L'examen parasitologique des selles (EPS)", "La sérologie", "La PCR", "La radiographie"],
    correct: 0,
    explanation: "Pour la majorité des vers adultes intestinaux (Ascaris, Trichocéphale, Ankylostome, Taenia, Douves, Schistosomes), la mise en évidence des œufs/larves dans les selles reste le Gold Standard."
  }
];

export default clinical;
