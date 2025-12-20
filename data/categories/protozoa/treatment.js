export const treatment = [
  // --- PART 1: ANTI-AMOEBIEN & NITROIMIDAZOLES ---
  {
    id: 'p_treat_1',
    question: "Quel est le traitement de référence (1ère intention) de l'amibiase intestinale aiguë (Dysenterie) ?",
    options: ["Métronidazole (Flagyl)", "Pénicilline", "Paracétamol", "Albendazole"],
    correct: 0,
    explanation: "C'est un amibicide tissulaire puissant de la famille des nitro-imidazolés."
  },
  {
    id: 'p_treat_2',
    question: "Après le traitement de l'amibiase aiguë par Métronidazole, il est impératif de prescrire :",
    options: ["Un amibicide de contact (ex: Tiliquinol-Tilbroquinol) pour tuer les kystes restants", "Un antibiotique", "Des vitamines", "Rien"],
    correct: 0,
    explanation: "Le Métronidazole est très efficace sur les trophozoïtes tissulaires mais peu sur les kystes dans la lumière intestinale (risque de rechute)."
  },
  {
    id: 'p_treat_3',
    question: "Quel est l'effet 'Antabuse' associé au Métronidazole ?",
    options: ["Intolérance violente à l'alcool (bouffées de chaleur, vomissements, tachycardie)", "Somnolence", "Diarrhée", "Hypertension"],
    correct: 0,
    explanation: "Il bloque la dégradation de l'alcool (inhibition de l'aldéhyde déshydrogénase). L'alcool est formellement interdit pendant le traitement."
  },
  {
    id: 'p_treat_4',
    question: "Le traitement de choix de la Giardiase est :",
    options: ["Métronidazole ou Tinidazole (dose unique souvent possible)", "Amoxicilline", "Quinine", "Ivermectine"],
    correct: 0,
    explanation: "Les nitro-imidazolés sont actifs sur les flagellés anaérobies comme Giardia et Trichomonas."
  },
  {
    id: 'p_treat_5',
    question: "Quel médicament est une alternative pour la Giardiase chez l'enfant (si refus des comprimés amers) ?",
    options: ["Nitazoxanide", "Aspirine", "Corticoïdes", "Morphine"],
    correct: 0,
    explanation: "Le Nitazoxanide est un antiparasitaire à large spectre disponible en suspension buvable."
  },

  // --- PART 2: ANTIMALARIALS (PALUDISME) - MECHANISMS ---
  {
    id: 'p_treat_6',
    question: "Les dérivés de l'Artémisinine (Artésunate, Artéméther) agissent principalement sur :",
    options: ["Les formes sanguines asexuées jeunes (Anneaux) et les gamétocytes jeunes", "Les formes hépatiques uniquement", "Les moustiques", "Le foie"],
    correct: 0,
    explanation: "Ils ont l'action la plus rapide de tous les antipaludéens, réduisant la charge parasitaire de façon exponentielle."
  },
  {
    id: 'p_treat_7',
    question: "La Chloroquine (Nivaquine) agit en :",
    options: ["Empêchant la polymérisation de l'hème toxique en hémozoïne non toxique", "Inhibant la synthèse d'ADN", "Bloquant les ribosomes", "Détruisant la membrane"],
    correct: 0,
    explanation: "Le parasite meurt intoxiqué par sa propre digestion de l'hémoglobine (accumulation d'hème libre)."
  },
  {
    id: 'p_treat_8',
    question: "La Primaquine est unique car elle est active sur :",
    options: ["Les hypnozoïtes hépatiques (P. vivax/ovale) et les gamétocytes matures (P. falciparum)", "Les trophozoïtes sanguins", "Les bactéries", "Les virus"],
    correct: 0,
    explanation: "C'est le seul médicament permettant la 'cure radicale' (éviter les rechutes) de P. vivax."
  },
  {
    id: 'p_treat_9',
    question: "Avant de prescrire la Primaquine, il faut impérativement vérifier :",
    options: ["L'absence de déficit en G6PD (Favisme)", "Le groupe sanguin", "La taille du patient", "La tension artérielle"],
    correct: 0,
    explanation: "Chez les déficitaires en G6PD, la Primaquine provoque une hémolyse aiguë gravissime."
  },
  {
    id: 'p_treat_10',
    question: "Les antifoliques (Sulfadoxine-Pyriméthamine) agissent en bloquant :",
    options: ["La synthèse de l'acide folique (ADN)", "La digestion de l'hémoglobine", "La respiration", "L'entrée dans le globule rouge"],
    correct: 0,
    explanation: "Ils inhibent deux enzymes clés de la voie des folates, empêchant la division nucléaire."
  },

  // --- PART 3: ANTIMALARIALS - CLINICAL PROTOCOLS ---
  {
    id: 'p_treat_11',
    question: "Le traitement de première intention du Paludisme simple à P. falciparum est :",
    options: ["Une CTA (Combinaison Thérapeutique à base d'Artémisinine)", "Chloroquine seule", "Paracétamol seul", "Quinine IV"],
    correct: 0,
    explanation: "L'OMS recommande les combinaisons (ex: Artéméther-Luméfantrine ou Artésunate-Amodiaquine) pour éviter la résistance."
  },
  {
    id: 'p_treat_12',
    question: "Le traitement d'urgence du Paludisme Grave (Accès pernicieux) est :",
    options: ["Artésunate IV (Intraveineux)", "Quinine Per Os", "Chloroquine", "Doxycycline"],
    correct: 0,
    explanation: "L'Artésunate IV a prouvé sa supériorité sur la Quinine IV en termes de survie. C'est le Gold Standard actuel."
  },
  {
    id: 'p_treat_13',
    question: "La Chloroquine reste le traitement de choix pour :",
    options: ["P. vivax, P. ovale et P. malariae (sauf zones de résistance)", "P. falciparum en Afrique", "L'amibiase", "La toxoplasmose"],
    correct: 0,
    explanation: "La résistance de P. falciparum à la Chloroquine est généralisée, mais les autres espèces y restent sensibles."
  },
  {
    id: 'p_treat_14',
    question: "Quel médicament est utilisé en chimioprophylaxie pour les voyageurs en zone de résistance (Zone 3) ?",
    options: ["Atovaquone-Proguanil (Malarone) ou Doxycycline", "Chloroquine", "Aspirine", "Vitamine C"],
    correct: 0,
    explanation: "La Chloroquine ne suffit plus. La Malarone ou la Doxycycline sont efficaces."
  },
  {
    id: 'p_treat_15',
    question: "La Doxycycline est contre-indiquée chez :",
    options: ["La femme enceinte (2e/3e trimestre) et l'enfant < 8 ans", "L'homme adulte", "Le sujet âgé", "Le diabétique"],
    correct: 0,
    explanation: "Risque de coloration jaune définitive des dents et hypoplasie de l'émail chez l'enfant."
  },

  // --- PART 4: TOXOPLASMOSIS TREATMENT ---
  {
    id: 'p_treat_16',
    question: "Le traitement de la Toxoplasmose cérébrale chez le patient VIH est :",
    options: ["Pyriméthamine + Sulfadiazine (+ Acide Folinique)", "Métronidazole", "Amoxicilline", "Aciclovir"],
    correct: 0,
    explanation: "C'est la combinaison synergique de référence. L'acide folinique est ajouté pour prévenir la toxicité hématologique."
  },
  {
    id: 'p_treat_17',
    question: "En cas de séroconversion toxoplasmique chez la femme enceinte (1er trimestre), on prescrit :",
    options: ["Spiramycine (Rovamycine)", "Pyriméthamine", "Tétracycline", "Rien"],
    correct: 0,
    explanation: "La Spiramycine ne traverse pas le placenta mais se concentre dedans, empêchant le passage du parasite vers le fœtus."
  },
  {
    id: 'p_treat_18',
    question: "Si l'infection fœtale est confirmée (PCR amniotique positive), on remplace la Spiramycine par :",
    options: ["Pyriméthamine + Sulfadiazine", "Pénicilline", "Chloroquine", "Rien"],
    correct: 0,
    explanation: "Il faut passer à des molécules qui traversent le placenta pour traiter le fœtus in utero."
  },
  {
    id: 'p_treat_19',
    question: "Quel est l'effet secondaire hématologique principal de la Pyriméthamine ?",
    options: ["Anémie mégaloblastique et neutropénie (carence en folates)", "Hémorragie", "Thrombose", "Leucémie"],
    correct: 0,
    explanation: "C'est un antifolique puissant. Il faut supplémenter en acide folinique."
  },
  {
    id: 'p_treat_20',
    question: "La Spiramycine appartient à la famille des :",
    options: ["Macrolides", "Cyclines", "Pénicillines", "Sulfamides"],
    correct: 0,
    explanation: "Antibiotique macrolide utilisé ici pour ses propriétés antiparasitaires."
  },

  // --- PART 5: LEISHMANIA & TRYPANOSOMA ---
  {
    id: 'p_treat_21',
    question: "Le traitement de référence actuel de la Leishmaniose Viscérale est :",
    options: ["L'Amphotéricine B liposomale (Ambisome)", "Antimoniés pentavalents (Glucantime)", "Métronidazole", "Paracétamol"],
    correct: 0,
    explanation: "L'Amphotéricine B est très efficace et moins toxique sous forme liposomale que les anciens sels d'antimoine."
  },
  {
    id: 'p_treat_22',
    question: "Les dérivés de l'antimoine (Glucantime, Pentostam) ont une toxicité majeure :",
    options: ["Cardiaque (Troubles du rythme, allongement QT) et Pancréatique", "Cutanée", "Pulmonaire", "Oculaire"],
    correct: 0,
    explanation: "Ils nécessitent une surveillance ECG stricte. Risque de mort subite par torsades de pointes."
  },
  {
    id: 'p_treat_23',
    question: "Le traitement de la Maladie du Sommeil (Stade 2 - Neurologique) utilise :",
    options: ["Le NECT (Nifurtimox-Eflornithine) ou le Mélarsoprol", "La Pentamidine", "L'Amoxicilline", "La Quinine"],
    correct: 0,
    explanation: "Le Mélarsoprol (dérivé de l'arsenic) est très toxique (encéphalopathie). La combinaison NECT est plus sûre."
  },
  {
    id: 'p_treat_24',
    question: "Le Benznidazole est utilisé pour traiter :",
    options: ["La Maladie de Chagas (T. cruzi)", "La Maladie du sommeil", "Le Paludisme", "L'Amibiase"],
    correct: 0,
    explanation: "Il est efficace en phase aiguë, mais son efficacité diminue en phase chronique."
  },
  {
    id: 'p_treat_25',
    question: "La Miltefosine est le premier médicament :",
    options: ["Oral efficace contre la Leishmaniose", "Injectable", "Local", "Gazeux"],
    correct: 0,
    explanation: "Révolution thérapeutique car elle se prend per os, contrairement à l'Amphotéricine B (IV)."
  },

  // --- PART 6: OTHERS & OPPORTUNISTIC ---
  {
    id: 'p_treat_26',
    question: "Le Cotrimoxazole (Bactrim) est le traitement de choix pour :",
    options: ["Pneumocystose (Pneumocystis jirovecii) et Isosporose", "Paludisme", "Amibiase", "Gale"],
    correct: 0,
    explanation: "Il est utilisé à forte dose en curatif et à faible dose en prophylaxie chez le VIH."
  },
  {
    id: 'p_treat_27',
    question: "Pour la Cryptosporidiose chez l'immunocompétent, le traitement est :",
    options: ["Symptomatique (Réhydratation), parfois Nitazoxanide", "Chimiothérapie lourde", "Antibiotiques IV", "Chirurgie"],
    correct: 0,
    explanation: "La maladie guérit souvent seule. Chez le VIH+, le seul vrai traitement est la restauration de l'immunité (ARV)."
  },
  {
    id: 'p_treat_28',
    question: "L'Albendazole (anti-helminthe) est aussi efficace sur quel protozoaire ?",
    options: ["Giardia intestinalis et Microsporidies", "Plasmodium", "Leishmania", "Trypanosoma"],
    correct: 0,
    explanation: "Il a une action sur le cytosquelette de Giardia et est le traitement de référence de certaines microsporidioses."
  },
  {
    id: 'p_treat_29',
    question: "La Trichomonase uro-génitale doit être traitée :",
    options: ["Chez le patient ET son(ses) partenaire(s) sexuel(s)", "Chez la femme uniquement", "Chez l'homme uniquement", "Si symptômes"],
    correct: 0,
    explanation: "C'est une IST. Traiter un seul partenaire conduit à une réinfection immédiate (effet ping-pong)."
  },
  {
    id: 'p_treat_30',
    question: "Le traitement de la Babésiose associe :",
    options: ["Atovaquone + Azithromycine", "Métronidazole", "Pénicilline", "Rien"],
    correct: 0,
    explanation: "Protocole proche de celui du Paludisme, car Babesia est un hématozoaire proche."
  },

  // --- PART 7: DRUG RESISTANCE & PHARMACOLOGY ---
  {
    id: 'p_treat_31',
    question: "La résistance à la Chloroquine est due à une mutation du gène :",
    options: ["PfCRT (Plasmodium falciparum Chloroquine Resistance Transporter)", "PfDHFR", "PfMDR1", "K13"],
    correct: 0,
    explanation: "Ce gène code pour une pompe qui expulse le médicament hors de la vacuole digestive du parasite."
  },
  {
    id: 'p_treat_32',
    question: "La résistance aux Artémisinines (retard de clairance) est liée au gène :",
    options: ["K13 (Kelch 13)", "PfCRT", "PfDHPS", "MDR1"],
    correct: 0,
    explanation: "Apparue en Asie du Sud-Est, c'est une menace mondiale majeure surveillée par l'OMS."
  },
  {
    id: 'p_treat_33',
    question: "Le 'Cinchonisme' est un surdosage en :",
    options: ["Quinine", "Chloroquine", "Artemisinine", "Aspirine"],
    correct: 0,
    explanation: "Bourdonnements d'oreille (acouphènes), vertiges, troubles de la vision, céphalées."
  },
  {
    id: 'p_treat_34',
    question: "L'effet secondaire cardiaque redouté de l'Halofantrine (antipaludéen peu utilisé) est :",
    options: ["Allongement de l'intervalle QT (Risque de torsade de pointes)", "Infarctus", "Bradycardie", "Hypertension"],
    correct: 0,
    explanation: "Il ne doit jamais être pris avec un repas gras ou par des cardiaques."
  },
  {
    id: 'p_treat_35',
    question: "Les antibiotiques de la classe des Cyclines (Doxycycline, Clindamycine) ont une action antipaludique :",
    options: ["Lente (Action sur l'apicoplaste)", "Rapide", "Immédiate", "Nulle"],
    correct: 0,
    explanation: "Ils tuent le parasite lentement (\"Delayed death\"), donc jamais utilisés seuls en traitement d'urgence."
  },

  // --- PART 8: PREGNANCY & CHILDREN ---
  {
    id: 'p_treat_36',
    question: "Quel antipaludéen est considéré comme sûr au 1er trimestre de grossesse ?",
    options: ["La Quinine (ou Chloroquine si sensible)", "La Primaquine", "La Doxycycline", "L'Halofantrine"],
    correct: 0,
    explanation: "La Quinine reste la référence au T1. Les ACT sont tolérés aux T2 et T3."
  },
  {
    id: 'p_treat_37',
    question: "Le Métronidazole est-il tératogène ?",
    options: ["Non, mais on évite si possible le 1er trimestre par précaution", "Oui, toujours", "Oui, mortel", "On ne sait pas"],
    correct: 0,
    explanation: "Il est largement utilisé et considéré comme sûr, bien que la notice recommande la prudence en début de grossesse."
  },
  {
    id: 'p_treat_38',
    question: "Chez l'enfant, la dose de Métronidazole est calculée en :",
    options: ["mg/kg/jour", "Nombre de comprimés", "Cuillères", "Au hasard"],
    correct: 0,
    explanation: "En pédiatrie, l'adaptation au poids est stricte (ex: 30-50 mg/kg/j pour l'amibiase)."
  },
  {
    id: 'p_treat_39',
    question: "L'administration rectale (Suppositoire) d'Artémisinine est utile pour :",
    options: ["Les enfants qui vomissent ou inconscients avant transfert à l'hôpital", "Les adultes", "La prévention", "Le confort"],
    correct: 0,
    explanation: "C'est un traitement pré-référence recommandé par l'OMS pour sauver des vies en zone rurale."
  },
  {
    id: 'p_treat_40',
    question: "La prophylaxie du paludisme chez la femme enceinte en zone endémique se fait par :",
    options: ["TPI (Traitement Préventif Intermittent) à la Sulfadoxine-Pyriméthamine (SP)", "Quinine tous les jours", "Rien", "Vaccin"],
    correct: 0,
    explanation: "On donne une dose curative de SP à chaque visite prénatale à partir du 2ème trimestre."
  },

  // --- PART 9: PROPHYLAXIS (PREVENTION) ---
  {
    id: 'p_treat_41',
    question: "La chimioprophylaxie du paludisme pour les voyageurs doit être prise :",
    options: ["Pendant le séjour et continuée 1 à 4 semaines après le retour (selon le médicament)", "Juste avant de partir", "Seulement si on a de la fièvre", "Pendant le séjour uniquement"],
    correct: 0,
    explanation: "Il faut couvrir la phase hépatique qui peut se réveiller après le retour. (Malarone : 1 semaine après, Doxy/Méflo : 4 semaines après)."
  },
  {
    id: 'p_treat_42',
    question: "La prévention de la Toxoplasmose chez la femme enceinte séronégative repose sur :",
    options: ["Mesures hygiéno-diététiques (viande bien cuite, lavage légumes, éviter chats)", "Un vaccin", "Des antibiotiques", "Des vitamines"],
    correct: 0,
    explanation: "Il n'existe pas de vaccin. L'éducation de la patiente est la seule prévention."
  },
  {
    id: 'p_treat_43',
    question: "Pour prévenir la diarrhée du voyageur (dont Giardia), il faut :",
    options: ["Boire de l'eau capsulée, peler les fruits, manger cuit ('Boil it, cook it, peel it or forget it')", "Prendre des antibiotiques avant de partir", "Manger des salades", "Boire l'eau du robinet"],
    correct: 0,
    explanation: "Règle d'or de l'hygiène alimentaire tropicale."
  },
  {
    id: 'p_treat_44',
    question: "La lutte antivectorielle (Moustiquaires imprégnées d'insecticide) est :",
    options: ["Le moyen le plus efficace pour réduire la transmission du paludisme", "Inutile", "Dangereuse", "Réservée aux hôpitaux"],
    correct: 0,
    explanation: "La MIILD (Moustiquaire Imprégnée d'Insecticide à Longue Durée) protège le dormeur et tue le moustique."
  },
  {
    id: 'p_treat_45',
    question: "Le vaccin RTS,S (Mosquirix) contre le paludisme cible :",
    options: ["Les sporozoïtes (phase pré-érythrocytaire)", "Les gamètes", "Les mérozoïtes", "Le moustique"],
    correct: 0,
    explanation: "Il vise à empêcher l'entrée du parasite dans le foie. Son efficacité est partielle mais utile en santé publique."
  },

  // --- PART 10: DRUG INTERACTIONS & CONTRAINDICATIONS ---
  {
    id: 'p_treat_46',
    question: "L'association Halofantrine + Médicaments allongeant le QT (ex: Amiodarone) est :",
    options: ["Formellement contre-indiquée (Risque mortel)", "Conseillée", "Sans danger", "Peu importante"],
    correct: 0,
    explanation: "Risque majeur de torsades de pointes (arrêt cardiaque)."
  },
  {
    id: 'p_treat_47',
    question: "Les inhibiteurs de protéase (VIH) interagissent avec les antipaludéens car :",
    options: ["Ils inhibent ou induisent le cytochrome P450 (métabolisme)", "Ils tuent le parasite", "Ils sont acides", "Ils sont sucrés"],
    correct: 0,
    explanation: "Attention aux interactions médicamenteuses complexes chez le patient co-infecté VIH/Palu."
  },
  {
    id: 'p_treat_48',
    question: "Le jus de pamplemousse est déconseillé avec certains antipaludéens (ex: Artéméther) car :",
    options: ["Il inhibe le CYP3A4 et augmente la concentration du médicament (surdosage)", "Il annule l'effet", "Il donne la diarrhée", "Il est acide"],
    correct: 0,
    explanation: "Le pamplemousse augmente la biodisponibilité de nombreux médicaments, risquant la toxicité."
  },
  {
    id: 'p_treat_49',
    question: "La Méfloquine (Lariam) est contre-indiquée chez les patients ayant des antécédents de :",
    options: ["Troubles psychiatriques (Dépression, convulsions)", "Diabète", "Asthme", "Allergie au pollen"],
    correct: 0,
    explanation: "Elle peut provoquer des effets neuropsychiatriques sévères (cauchemars, psychose, anxiété)."
  },
  {
    id: 'p_treat_50',
    question: "L'utilisation prolongée de l'hydroxychloroquine nécessite une surveillance :",
    options: ["Ophtalmologique (Rétinopathie)", "Rénale", "Pulmonaire", "Auditive"],
    correct: 0,
    explanation: "Elle s'accumule dans la rétine et peut causer une cécité irréversible."
  },
    // --- PART 11: ADVANCED CLINICAL CASES (MALARIA) ---
    {
      id: 'p_treat_51',
      question: "Cas clinique : Femme enceinte, 3ème trimestre, accès palustre simple à P. falciparum. Traitement ?",
      options: ["ACT (Artéméther-Luméfantrine) ou Artésunate-Amodiaquine", "Quinine IV obligatoire", "Doxycycline", "Primaquine"],
      correct: 0,
      explanation: "Au 2ème et 3ème trimestre, les ACT sont autorisés et préférés car plus efficaces et mieux tolérés que la Quinine."
    },
    {
      id: 'p_treat_52',
      question: "Cas clinique : Paludisme grave avec insuffisance rénale. Quelle précaution avec la Quinine ?",
      options: ["Réduire la dose de 30-50% après la dose de charge (risque d'accumulation)", "Augmenter la dose", "Arrêter le traitement", "Donner un diurétique"],
      correct: 0,
      explanation: "La Quinine est éliminée par le rein. En cas d'insuffisance rénale, elle s'accumule et devient toxique (surdosage)."
    },
    {
      id: 'p_treat_53',
      question: "Cas clinique : Patient sous méfloquine en prophylaxie qui déclare quand même un paludisme. Quel traitement curatif éviter ?",
      options: ["La Méfloquine (et l'Halofantrine) à dose curative", "L'Artéméther", "La Malarone", "La Quinine"],
      correct: 0,
      explanation: "Risque majoré d'effets secondaires neuropsychiatriques ou cardiaques par effet cumulatif. Il faut changer de classe (ex: Atovaquone-Proguanil)."
    },
    {
      id: 'p_treat_54',
      question: "Cas clinique : Rechutes multiples de P. vivax malgré un traitement bien conduit à la Chloroquine. Pourquoi ?",
      options: ["Absence de traitement anti-hypnozoïte (Primaquine)", "Résistance à la Chloroquine", "Réinfestation", "Patient menteur"],
      correct: 0,
      explanation: "La Chloroquine ne tue que les formes sanguines. Les hypnozoïtes dans le foie se réveillent périodiquement si on ne donne pas de Primaquine (ou Tafénoquine)."
    },
    {
      id: 'p_treat_55',
      question: "Quelle est la particularité de la Tafénoquine par rapport à la Primaquine ?",
      options: ["Elle se donne en dose unique (longue demi-vie) pour la cure radicale de P. vivax", "Elle est moins efficace", "Elle n'est pas hémolysante", "Elle est IV"],
      correct: 0,
      explanation: "Avantage majeur pour l'observance : une seule prise suffit contre 14 jours pour la Primaquine."
    },
  
    // --- PART 12: TREATMENT OF NEGLECTED TROPICAL DISEASES ---
    {
      id: 'p_treat_56',
      question: "Le Fexinidazole est une révolution pour la Maladie du Sommeil car :",
      options: ["C'est le premier traitement entièrement oral efficace sur les deux stades (1 et 2)", "Il est injectable", "Il est une crème", "Il est un vaccin"],
      correct: 0,
      explanation: "Il simplifie énormément la prise en charge en brousse, évitant les ponctions lombaires systématiques et les perfusions."
    },
    {
      id: 'p_treat_57',
      question: "La Suramine (Moranyl) est utilisée pour :",
      options: ["Le stade 1 (lymphatico-sanguin) de la Trypanosomose à T. brucei rhodesiense", "Le stade 2", "Le paludisme", "L'amibiase"],
      correct: 0,
      explanation: "C'est un vieux médicament très toxique (rein, choc) réservé à la forme Est-Africaine (Rhodesiense) en phase précoce."
    },
    {
      id: 'p_treat_58',
      question: "Le traitement de la Maladie de Chagas congénitale chez le nouveau-né est :",
      options: ["Benznidazole ou Nifurtimox (très efficace chez le bébé)", "Abstention", "Chirurgie", "Antibiotiques"],
      correct: 0,
      explanation: "Le taux de guérison approche les 100% si traité dans la première année de vie."
    },
    {
      id: 'p_treat_59',
      question: "La Pentamidine est utilisée pour :",
      options: ["Le stade 1 de la Trypanosomose (Gambiense) et la pneumocystose", "Le stade 2", "La leishmaniose", "Le paludisme"],
      correct: 0,
      explanation: "Elle ne passe pas la barrière hémato-encéphalique, donc inefficace au stade neurologique de la maladie du sommeil."
    },
    {
      id: 'p_treat_60',
      question: "Pour les Leishmanioses cutanées de l'Ancien Monde (ex: L. major), l'attitude peut être :",
      options: ["Abstention (guérison spontanée) ou traitement local (injections intra-lésionnelles)", "Traitement IV lourd systématique", "Amputation", "Corticoïdes"],
      correct: 0,
      explanation: "Si la lésion est petite et non esthétique, on ne traite pas forcément par voie systémique (toxique)."
    },
  
    // --- PART 13: OPPORTUNISTIC & RARE INFECTIONS ---
    {
      id: 'p_treat_61',
      question: "Le traitement de la Balantidiose (Balantidium coli) est :",
      options: ["Tétracyclines ou Métronidazole", "Pénicilline", "Quinine", "Albendazole"],
      correct: 0,
      explanation: "Les cyclines sont le traitement de choix, le métronidazole est une alternative."
    },
    {
      id: 'p_treat_62',
      question: "Le traitement de la Cyclosporose (Cyclospora cayetanensis) repose sur :",
      options: ["Cotrimoxazole (Bactrim)", "Métronidazole", "Albendazole", "Praziquantel"],
      correct: 0,
      explanation: "Contrairement à Cryptosporidium, Cyclospora répond très bien au Bactrim."
    },
    {
      id: 'p_treat_63',
      question: "La Kératite amibienne à Acanthamoeba nécessite un traitement local par :",
      options: ["Collyres antiseptiques (PHMB, Chlorhexidine) et Diamidines (Propamidine) pendant des mois", "Corticoïdes seuls", "Antibiotiques oraux", "Eau de javel"],
      correct: 0,
      explanation: "Le traitement est très long, difficile et douloureux (gouttes toutes les heures jour et nuit au début)."
    },
    {
      id: 'p_treat_64',
      question: "Pourquoi les corticoïdes sont-ils CONTRE-INDIQUÉS dans la kératite amibienne au début ?",
      options: ["Ils favorisent la multiplication des amibes et l'enkystement", "Ils sont douloureux", "Ils colorent l'œil", "Ils coûtent cher"],
      correct: 0,
      explanation: "Ils peuvent aggraver dramatiquement l'infection. On ne les utilise qu'avec prudence pour réduire l'inflammation tardive."
    },
    {
      id: 'p_treat_65',
      question: "Le traitement de la Blastocystose (si symptomatique) est discuté, mais on propose souvent :",
      options: ["Métronidazole", "Amoxicilline", "Aspirine", "Rien"],
      correct: 0,
      explanation: "Bien que son pouvoir pathogène soit débattu, le Flagyl est souvent prescrit en cas de symptômes persistants."
    },
  
    // --- PART 14: MECHANISMS OF ACTION (DEEP DIVE) ---
    {
      id: 'p_treat_66',
      question: "L'Atovaquone (dans la Malarone) agit en :",
      options: ["Inhibant le transport d'électrons mitochondrial (Cytochrome bc1) et l'effondrement du potentiel membranaire", "Inhibant la synthèse d'ADN", "Détruisant la paroi", "Bloquant les microtubules"],
      correct: 0,
      explanation: "Elle coupe la respiration cellulaire du parasite (mitochondrie)."
    },
    {
      id: 'p_treat_67',
      question: "Le Proguanil (dans la Malarone) agit en :",
      options: ["Inhibant la dihydrofolate réductase (DHFR) et potentialisant l'effet de l'atovaquone", "Inhibant la respiration", "Détruisant le foie", "Tuant les moustiques"],
      correct: 0,
      explanation: "C'est un antifolique qui agit en synergie avec l'atovaquone."
    },
    {
      id: 'p_treat_68',
      question: "Les diamidines (Pentamidine) se fixent à :",
      options: ["L'ADN du kinétoplaste (ADN mitochondrial)", "La membrane cellulaire", "Aux ribosomes", "Au noyau"],
      correct: 0,
      explanation: "Elles s'intercalent dans l'ADN, bloquant la réplication, particulièrement chez les Trypanosomatidae."
    },
    {
      id: 'p_treat_69',
      question: "L'effet des corticoïdes adjuvants dans la toxoplasmose cérébrale sert à :",
      options: ["Réduire l'œdème cérébral autour des abcès (effet anti-inflammatoire)", "Tuer le parasite", "Réveiller le patient", "Protéger l'estomac"],
      correct: 0,
      explanation: "Ils ne tuent pas le parasite (au contraire) mais sauvent la vie en réduisant l'hypertension intracrânienne."
    },
    {
      id: 'p_treat_70',
      question: "L'Artémisinine est activée par :",
      options: ["Le fer (Hème) issu de la digestion de l'hémoglobine", "L'eau", "Le sucre", "L'oxygène"],
      correct: 0,
      explanation: "Le pont endoperoxyde de la molécule est clivé par le fer, libérant des radicaux libres mortels pour le parasite."
    },
  
    // --- PART 15: PHARMACOKINETICS & DYNAMICS ---
    {
      id: 'p_treat_71',
      question: "Pourquoi l'Artémisinine n'est-elle jamais utilisée en monothérapie (seule) ?",
      options: ["Sa demi-vie est très courte (quelques heures), ce qui oblige à des traitements longs et favorise les rechutes/résistances", "Elle est toxique", "Elle est chère", "Elle est inefficace"],
      correct: 0,
      explanation: "On l'associe à un médicament à demi-vie longue (Luméfantrine, Amodiaquine...) pour 'nettoyer' les parasites restants."
    },
    {
      id: 'p_treat_72',
      question: "La demi-vie de la Méfloquine est de :",
      options: ["2 à 3 semaines (très longue)", "2 heures", "1 jour", "1 an"],
      correct: 0,
      explanation: "Cette longue demi-vie permet une prise hebdomadaire en prophylaxie, mais pose problème en cas d'effets secondaires."
    },
    {
      id: 'p_treat_73',
      question: "Le passage de la barrière hémato-encéphalique est excellent pour :",
      options: ["Le Fluconazole et les 5-imidazolés (Métronidazole)", "La Pentamidine", "L'Amphotéricine B (faible)", "La Gentamicine"],
      correct: 0,
      explanation: "C'est pourquoi le Métronidazole est efficace sur les abcès cérébraux amibiens (très rares)."
    },
    {
      id: 'p_treat_74',
      question: "L'absorption de l'Atovaquone est doublée si elle est prise avec :",
      options: ["Un repas gras", "De l'eau", "À jeun", "Du jus d'orange"],
      correct: 0,
      explanation: "C'est une molécule très lipophile. Il faut toujours dire au patient de manger 'gras' avec sa Malarone."
    },
    {
      id: 'p_treat_75',
      question: "La toxicité rénale de l'Amphotéricine B est due à :",
      options: ["Une vasoconstriction rénale et une toxicité tubulaire directe", "Une allergie", "Des cristaux", "Une infection"],
      correct: 0,
      explanation: "Il faut hyperhydrater le patient (perfusion de sérum salé) avant et après chaque injection pour protéger les reins."
    },
  
    // --- PART 16: VACCINES & NEW THERAPIES ---
    {
      id: 'p_treat_76',
      question: "Existe-t-il un vaccin efficace contre la Leishmaniose canine ?",
      options: ["Oui (ex: CaniLeish), utilisé pour protéger les chiens réservoirs", "Non", "Oui pour l'homme", "Oui pour les chats"],
      correct: 0,
      explanation: "La vaccination des chiens aide à réduire la transmission à l'homme (approche One Health)."
    },
    {
      id: 'p_treat_77',
      question: "Le vaccin R21/Matrix-M est :",
      options: ["Un nouveau vaccin antipaludique plus efficace que le RTS,S (OMS 2023)", "Un vaccin contre l'amibe", "Un vaccin contre la dengue", "Un médicament"],
      correct: 0,
      explanation: "Il a montré une efficacité de 75% dans les essais, un espoir majeur."
    },
    {
      id: 'p_treat_78',
      question: "La 'Wolbachia' est utilisée pour :",
      options: ["Infecter les moustiques et bloquer la transmission de virus/parasites", "Vacciner les humains", "Traiter l'eau", "Tuer les larves"],
      correct: 0,
      explanation: "C'est une bactérie symbiotique. Les moustiques infectés par Wolbachia transmettent moins bien la Dengue et potentiellement le Paludisme."
    },
    {
      id: 'p_treat_79',
      question: "Les moustiques génétiquement modifiés (Drive genétique) visent à :",
      options: ["Rendre les populations de moustiques stériles ou réfractaires au parasite", "Les faire grossir", "Les rendre fluorescents", "Les tuer avec un spray"],
      correct: 0,
      explanation: "Stratégie futuriste pour éradiquer les vecteurs."
    },
    {
      id: 'p_treat_80',
      question: "L'utilisation de l'Ivermectine (antiparasitaire) chez l'homme a un effet sur le paludisme car :",
      options: ["Elle tue les moustiques qui piquent l'homme traité (effet endectocide)", "Elle tue le Plasmodium", "Elle repousse les moustiques", "Elle vaccine"],
      correct: 0,
      explanation: "Le sang du patient devient toxique pour le moustique, réduisant la population vectrice."
    },
  
    // --- PART 17: PRACTICAL PRESCRIPTIONS ---
    {
      id: 'p_treat_81',
      question: "Prescription : Paludisme simple chez un adulte de 60kg. Coartem (20/120). Posologie ?",
      options: ["4 comprimés par prise, 2 fois par jour, pendant 3 jours (Total 24 cp)", "1 comprimé par jour", "4 comprimés une seule fois", "10 comprimés"],
      correct: 0,
      explanation: "C'est le schéma standard '6 doses sur 3 jours'."
    },
    {
      id: 'p_treat_82',
      question: "Prescription : Giardiase adulte. Métronidazole (Flagyl) 500mg. Posologie ?",
      options: ["2 à 4 comprimés (1-2g) en prise unique ou sur 3 jours", "1 comprimé par semaine", "10 comprimés par jour", "Une injection"],
      correct: 0,
      explanation: "Le traitement court (minute) ou sur 3 jours est classique."
    },
    {
      id: 'p_treat_83',
      question: "Prescription : Trichomonase (partenaire). Tinidazole (Fasigyne).",
      options: ["2g (4 cp de 500mg) en prise UNIQUE au cours d'un repas", "1 comprimé pendant 10 jours", "Une crème", "Un sirop"],
      correct: 0,
      explanation: "Le traitement minute favorise l'observance, cruciale pour les IST."
    },
    {
      id: 'p_treat_84',
      question: "En cas de vomissements dans les 30 minutes suivant la prise d'un antipaludéen :",
      options: ["Il faut redonner la dose complète", "Ne rien faire", "Donner la moitié", "Attendre le lendemain"],
      correct: 0,
      explanation: "Le médicament n'a pas été absorbé. Si vomissement entre 30min-1h, redonner demi-dose."
    },
    {
      id: 'p_treat_85',
      question: "L'hypoglycémie est une complication fréquente du paludisme grave, aggravée par :",
      options: ["La Quinine (qui stimule l'insuline)", "L'Artésunate", "La fièvre", "L'eau"],
      correct: 0,
      explanation: "La Quinine est un puissant insulino-sécréteur. Il faut toujours perfuser du glucosé avec la Quinine."
    },
  
    // --- PART 18: RESISTANCE & FAILURE ---
    {
      id: 'p_treat_86',
      question: "L'échec thérapeutique précoce (J1-J3) dans le paludisme signifie :",
      options: ["Persistance de la fièvre et des parasites, ou signes de gravité", "Disparition de la fièvre", "Fatigue", "Faim"],
      correct: 0,
      explanation: "Cela impose le passage au traitement de 2ème intention (souvent Quinine + Clindamycine ou autre ACT)."
    },
    {
      id: 'p_treat_87',
      question: "La résistance du Trichomonas au Métronidazole est :",
      options: ["Rare mais possible (augmenter les doses ou changer pour Tinidazole)", "Fréquente", "Impossible", "Systématique"],
      correct: 0,
      explanation: "Des souches résistantes existent, nécessitant des doses élevées."
    },
    {
      id: 'p_treat_88',
      question: "La résistance croisée existe souvent entre :",
      options: ["Les médicaments de la même famille chimique (ex: Méfloquine et Quinine/Halofantrine)", "Pénicilline et Aspirine", "Eau et Huile", "Tout"],
      correct: 0,
      explanation: "Les amino-alcools partagent des mécanismes de résistance communs."
    },
    {
      id: 'p_treat_89',
      question: "Le test in vivo d'efficacité thérapeutique (OMS) dure :",
      options: ["28 ou 42 jours (suivi clinique et parasitologique)", "24 heures", "1 an", "1 semaine"],
      correct: 0,
      explanation: "Il faut suivre le patient longtemps pour détecter les rechutes tardives (recrudescence)."
    },
    {
      id: 'p_treat_90',
      question: "L'effet inoculum désigne :",
      options: ["La baisse d'efficacité des médicaments quand la charge parasitaire est très élevée", "L'effet du vaccin", "L'allergie", "La piqûre"],
      correct: 0,
      explanation: "Plus il y a de parasites, plus il est difficile de tous les tuer rapidement."
    },
  
    // --- PART 19: ETHICS & PUBLIC HEALTH ---
    {
      id: 'p_treat_91',
      question: "Le traitement gratuit du paludisme est recommandé pour :",
      options: ["Les enfants de moins de 5 ans et les femmes enceintes", "Les touristes", "Les riches", "Personne"],
      correct: 0,
      explanation: "Ce sont les populations les plus vulnérables à la mortalité."
    },
    {
      id: 'p_treat_92',
      question: "La distribution de masse de médicaments (MDA) est utilisée pour :",
      options: ["L'Onchocercose, la Filariose lymphatique, le Trachome (Maladies Négligées)", "Le Paludisme (discuté)", "Le Cancer", "Le Diabète"],
      correct: 0,
      explanation: "On traite tout le village une fois par an pour casser la transmission."
    },
    {
      id: 'p_treat_93',
      question: "L'automédication avec des antipaludéens achetés au marché (rue) présente un risque de :",
      options: ["Faux médicaments (contrefaçons sous-dosées sans principe actif)", "Surdosage", "Guérison trop rapide", "Rien"],
      correct: 0,
      explanation: "Fléau majeur en Afrique/Asie. Les faux médicaments tuent et créent des résistances."
    },
    {
      id: 'p_treat_94',
      question: "Le traitement présomptif (sans test) de la fièvre est :",
      options: ["Déconseillé par l'OMS (il faut tester avant de traiter : T3 'Test, Treat, Track')", "Recommandé", "Obligatoire", "La seule solution"],
      correct: 0,
      explanation: "Traiter toute fièvre comme un palu gaspille les ACT et ignore les autres causes (bactéries, virus)."
    },
    {
      id: 'p_treat_95',
      question: "La pharmacovigilance est essentielle pour détecter :",
      options: ["Les effets indésirables rares ou retardés", "Les parasites", "Les médecins", "Les moustiques"],
      correct: 0,
      explanation: "Ex: Surveiller les problèmes cardiaques ou hépatiques nouveaux."
    },
  
    // --- PART 20: FINAL EXAM REVIEW ---
    {
      id: 'p_treat_96',
      question: "Quel médicament colore les urines en rouge-brun (sans gravité) ?",
      options: ["Métronidazole (et ses métabolites)", "Quinine", "Doxycycline", "Paracétamol"],
      correct: 0,
      explanation: "Il faut prévenir le patient pour ne pas qu'il croie pisser le sang !"
    },
    {
      id: 'p_treat_97',
      question: "L'association Quinine + Doxycycline dure généralement :",
      options: ["7 jours (3 jours Quinine IV relais per os + 7 jours Doxy)", "1 jour", "1 mois", "3 jours"],
      correct: 0,
      explanation: "La Doxycycline agit lentement, il faut la maintenir 7 jours pour assurer la guérison."
    },
    {
      id: 'p_treat_98',
      question: "Le traitement de la Toxoplasmose oculaire active vise à :",
      options: ["Arrêter la multiplication parasitaire et réduire l'inflammation pour sauver la vision", "Tuer les kystes anciens (impossible)", "Réparer la rétine", "Changer la couleur des yeux"],
      correct: 0,
      explanation: "C'est une urgence ophtalmologique."
    },
    {
      id: 'p_treat_99',
      question: "En cas d'allergie aux sulfamides (Sulfadiazine), on remplace par quoi dans la toxoplasmose ?",
      options: ["Clindamycine", "Pénicilline", "Rien", "Aspirine"],
      correct: 0,
      explanation: "L'association Pyriméthamine + Clindamycine est l'alternative classique."
    },
    {
      id: 'p_treat_100',
      question: "L'observance thérapeutique (compliance) est le facteur clé pour :",
      options: ["Éviter l'apparition de résistances et les rechutes", "Faire plaisir au médecin", "Dépenser de l'argent", "Rien"],
      correct: 0,
      explanation: "Un traitement mal pris (arrêté quand la fièvre tombe) sélectionne les parasites résistants."
    }
  ];
  
