// ==========================================
// 1. MORPHOLOGIE (10 Questions)
// ==========================================
const morphologyQuestions = [
  {
    id: "tricho_morph_1",
    axis: "morphology",
    question: "Quelle est la particularité biologique majeure de Trichomonas vaginalis par rapport aux autres protozoaires ?",
    options: [
      "Absence totale de forme kystique",
      "Reproduction sexuée obligatoire",
      "Vie intracellulaire",
      "Présence d’un kyste résistant"
    ],
    correctAnswer: 0,
    explanation: "Trichomonas vaginalis n’existe qu’à l’état de trophozoïte, sans forme kystique, ce qui conditionne son mode de transmission directe."
  },
  {
    id: "tricho_morph_2",
    axis: "morphology",
    question: "Quelle structure morphologique contribue principalement à la mobilité caractéristique de Trichomonas vaginalis ?",
    options: [
      "Les pseudopodes",
      "Les cils vibratiles",
      "Les flagelles et la membrane ondulante",
      "L’axostyle seul"
    ],
    correctAnswer: 2,
    explanation: "La mobilité est assurée par quatre flagelles libres et une membrane ondulante courte, responsables du mouvement typique à l’état frais."
  },
  {
    id: "tricho_morph_3",
    axis: "morphology",
    question: "Combien de flagelles libres possède Trichomonas vaginalis ?",
    options: [
      "Deux",
      "Trois",
      "Quatre",
      "Cinq"
    ],
    correctAnswer: 2,
    explanation: "Trichomonas vaginalis possède quatre flagelles libres antérieurs, caractéristiques de son trophozoïte."
  },
  {
    id: "tricho_morph_4",
    axis: "morphology",
    question: "Quel est le rôle principal de l’axostyle chez Trichomonas vaginalis ?",
    options: [
      "La digestion intracellulaire",
      "Le stockage énergétique",
      "Le soutien structural et l’ancrage",
      "La reproduction"
    ],
    correctAnswer: 2,
    explanation: "L’axostyle est une structure rigide qui participe au soutien de la cellule et peut jouer un rôle dans l’adhérence aux muqueuses."
  },
  {
    id: "tricho_morph_5",
    axis: "morphology",
    question: "Quelle description correspond le mieux à la membrane ondulante de Trichomonas vaginalis ?",
    options: [
      "Longue et parcourant tout le corps",
      "Absente",
      "Courte et peu développée",
      "Transformée en cil"
    ],
    correctAnswer: 2,
    explanation: "La membrane ondulante est courte, n’atteignant pas l’extrémité postérieure, ce qui aide à l’identification morphologique."
  },
  {
    id: "tricho_morph_6",
    axis: "morphology",
    question: "À l’examen microscopique à l’état frais, quelle mobilité est typiquement observée ?",
    options: [
      "Déplacement lent et rectiligne",
      "Mobilité giratoire active",
      "Mobilité saccadée sur place (gigotante)",
      "Absence totale de mouvement"
    ],
    correctAnswer: 2,
    explanation: "Le mouvement est rapide, saccadé, souvent décrit comme « gigotant » ou sur place, très évocateur du diagnostic."
  },
  {
    id: "tricho_morph_7",
    axis: "morphology",
    question: "Quelle est la forme générale du trophozoïte de Trichomonas vaginalis ?",
    options: [
      "Sphérique",
      "Allongée en fuseau ou piriforme",
      "Amoeboïde",
      "Cubique"
    ],
    correctAnswer: 1,
    explanation: "Le trophozoïte est généralement piriforme ou fusiforme, avec une extrémité antérieure élargie."
  },
  {
    id: "tricho_morph_8",
    axis: "morphology",
    question: "Pourquoi Trichomonas vaginalis est-il considéré comme fragile dans le milieu extérieur ?",
    options: [
      "Présence d’une coque lipidique instable",
      "Absence de forme kystique protectrice",
      "Métabolisme anaérobie strict",
      "Petite taille cellulaire"
    ],
    correctAnswer: 1,
    explanation: "L’absence de forme kystique rend le parasite très sensible aux conditions environnementales."
  },
  {
    id: "tricho_morph_9",
    axis: "morphology",
    question: "Quelle structure peut être observée dépassant parfois à l’extrémité postérieure du parasite ?",
    options: [
      "Le noyau",
      "La membrane ondulante",
      "L’axostyle",
      "Un flagelle récurrent"
    ],
    correctAnswer: 2,
    explanation: "L’axostyle peut dépasser en arrière du corps cellulaire, élément utile pour l’identification."
  },
  {
    id: "tricho_morph_10",
    axis: "morphology",
    question: "Quel élément morphologique permet de différencier Trichomonas vaginalis des amibes intestinales ?",
    options: [
      "La présence de pseudopodes",
      "L’existence d’un kyste",
      "La présence de flagelles",
      "La taille du noyau"
    ],
    correctAnswer: 2,
    explanation: "Trichomonas vaginalis est un flagellé, contrairement aux amibes qui se déplacent par pseudopodes."
  }
];
// ==========================================
// 2. CYCLE DE VIE (10 Questions)
// ==========================================
const lifecycleQuestions = [
  {
    id: "tricho_cycle_1",
    axis: "lifecycle",
    question: "Quel est le mode principal de transmission de Trichomonas vaginalis ?",
    options: [
      "Ingestion d’eau contaminée",
      "Contact indirect via objets souillés",
      "Transmission vectorielle",
      "Contact direct lors des rapports sexuels"
    ],
    correctAnswer: 3,
    explanation: "Trichomonas vaginalis se transmet quasi exclusivement par contact direct sexuel, ce qui en fait une IST."
  },
  {
    id: "tricho_cycle_2",
    axis: "lifecycle",
    question: "Quelle forme parasitaire est impliquée dans la transmission de Trichomonas vaginalis ?",
    options: [
      "Kyste mûr",
      "Oocyste",
      "Trophozoïte",
      "Spore"
    ],
    correctAnswer: 2,
    explanation: "Le parasite n’existe qu’à l’état de trophozoïte, forme fragile mais directement transmissible lors du contact sexuel."
  },
  {
    id: "tricho_cycle_3",
    axis: "lifecycle",
    question: "Quel est le principal site de localisation de Trichomonas vaginalis chez la femme ?",
    options: [
      "Col utérin exclusivement",
      "Vagin et urètre",
      "Ovaires",
      "Vessie"
    ],
    correctAnswer: 1,
    explanation: "Le parasite colonise principalement le vagin et l’urètre chez la femme."
  },
  {
    id: "tricho_cycle_4",
    axis: "lifecycle",
    question: "Chez l’homme, quels sont les principaux sites de persistance de Trichomonas vaginalis ?",
    options: [
      "Testicules et épididyme",
      "Vessie uniquement",
      "Urètre et prostate",
      "Rectum"
    ],
    correctAnswer: 2,
    explanation: "Chez l’homme, Trichomonas vaginalis se localise surtout dans l’urètre et la prostate, souvent de manière asymptomatique."
  },
  {
    id: "tricho_cycle_5",
    axis: "lifecycle",
    question: "Quel facteur favorise particulièrement l’implantation et la multiplication de Trichomonas vaginalis chez la femme ?",
    options: [
      "pH vaginal acide maintenu par la flore de Döderlein",
      "Modification du pH vaginal vers l’alcalinité",
      "Présence d’une flore lactobacillaire abondante",
      "Hyperœstrogénie"
    ],
    correctAnswer: 1,
    explanation: "Une élévation du pH vaginal, souvent liée à une altération de la flore de Döderlein, favorise la prolifération du parasite."
  },
  {
    id: "tricho_cycle_6",
    axis: "lifecycle",
    question: "Quel rôle joue la flore de Döderlein dans le cycle de vie de Trichomonas vaginalis ?",
    options: [
      "Elle favorise la transformation en kyste",
      "Elle protège contre l’implantation du parasite",
      "Elle est indispensable à la multiplication du parasite",
      "Elle sert de réservoir parasitaire"
    ],
    correctAnswer: 1,
    explanation: "La flore lactobacillaire maintient un pH acide protecteur, limitant la survie et la multiplication de Trichomonas vaginalis."
  },
  {
    id: "tricho_cycle_7",
    axis: "lifecycle",
    question: "Pourquoi la transmission non sexuelle de Trichomonas vaginalis est-elle exceptionnelle ?",
    options: [
      "Immunité naturelle élevée",
      "Présence d’un vecteur obligatoire",
      "Fragilité du trophozoïte dans le milieu extérieur",
      "Besoin d’une phase de maturation dans l’eau"
    ],
    correctAnswer: 2,
    explanation: "Le trophozoïte est très fragile et ne survit que brièvement hors de l’hôte, rendant la transmission indirecte rare."
  },
  {
    id: "tricho_cycle_8",
    axis: "lifecycle",
    question: "Quel événement marque la poursuite du cycle de vie après la transmission chez un nouvel hôte ?",
    options: [
      "Encystement dans les muqueuses",
      "Multiplication par scissiparité longitudinale",
      "Transformation en forme invasive",
      "Migration hématogène"
    ],
    correctAnswer: 1,
    explanation: "Après colonisation des muqueuses génitales, le parasite se multiplie par division binaire (scissiparité)."
  },
  {
    id: "tricho_cycle_9",
    axis: "lifecycle",
    question: "Quelle situation clinique favorise la persistance du parasite chez l’homme et contribue à la transmission ?",
    options: [
      "Symptomatologie bruyante",
      "Localisation prostatique asymptomatique",
      "Immunodépression sévère obligatoire",
      "Encystement prolongé"
    ],
    correctAnswer: 1,
    explanation: "La localisation prostatique souvent asymptomatique permet une persistance silencieuse et la transmission à la partenaire."
  },
  {
    id: "tricho_cycle_10",
    axis: "lifecycle",
    question: "Quelle mesure est essentielle pour interrompre le cycle de transmission de Trichomonas vaginalis ?",
    options: [
      "Traitement de la patiente uniquement",
      "Désinfection systématique du linge",
      "Traitement simultané des partenaires sexuels",
      "Vaccination préventive"
    ],
    correctAnswer: 2,
    explanation: "Le traitement concomitant de tous les partenaires sexuels est indispensable pour éviter les réinfections."
  }
];
// ==========================================
// 3. CLINIQUE (15 Questions)
// ==========================================
const clinicalQuestions = [
  {
    id: "tricho_clin_1",
    axis: "clinical",
    question: "Quel est le tableau clinique le plus évocateur de la trichomonase chez la femme ?",
    options: [
      "Leucorrhées épaisses blanchâtres inodores",
      "Leucorrhées spumeuses verdâtres et nauséabondes",
      "Saignements génitaux abondants",
      "Sécheresse vaginale isolée"
    ],
    correctAnswer: 1,
    explanation: "Les leucorrhées mousseuses, verdâtres et malodorantes constituent le signe clinique classique de la trichomonase féminine."
  },
  {
    id: "tricho_clin_2",
    axis: "clinical",
    question: "Quelle description correspond au caractère « spumeux » des leucorrhées dans la trichomonase ?",
    options: [
      "Aspect crémeux homogène",
      "Présence de bulles donnant un aspect mousseux",
      "Aspect grumeleux",
      "Aspect filant"
    ],
    correctAnswer: 1,
    explanation: "Les leucorrhées sont aérées, riches en bulles, donnant un aspect mousseux typique."
  },
  {
    id: "tricho_clin_3",
    axis: "clinical",
    question: "Le signe du « col framboisé » est caractérisé par :",
    options: [
      "Une ulcération profonde du col",
      "Une coloration blanchâtre diffuse",
      "Des ponctuations rouges inflammatoires",
      "Un exsudat purulent épais"
    ],
    correctAnswer: 2,
    explanation: "Le col framboisé correspond à de multiples pétéchies ou ponctuations rouges sur la muqueuse cervicale."
  },
  {
    id: "tricho_clin_4",
    axis: "clinical",
    question: "Le signe du col framboisé est observé principalement :",
    options: [
      "Chez l’homme",
      "Chez la femme au spéculum",
      "Chez le nouveau-né",
      "Uniquement en cas de grossesse"
    ],
    correctAnswer: 1,
    explanation: "Ce signe est visible à l’examen gynécologique au spéculum chez la femme."
  },
  {
    id: "tricho_clin_5",
    axis: "clinical",
    question: "Quel symptôme fonctionnel accompagne fréquemment la trichomonase chez la femme ?",
    options: [
      "Prurit vulvaire et brûlures",
      "Douleurs pelviennes intenses",
      "Métrorragies massives",
      "Incontinence urinaire"
    ],
    correctAnswer: 0,
    explanation: "Le prurit, les brûlures et la dysurie sont fréquents en lien avec l’inflammation vaginale."
  },
  {
    id: "tricho_clin_6",
    axis: "clinical",
    question: "Quelle odeur est classiquement décrite pour les leucorrhées de trichomonase ?",
    options: [
      "Inodore",
      "Odeur douceâtre",
      "Nauséabonde",
      "Aucune description spécifique"
    ],
    correctAnswer: 2,
    explanation: "L’odeur fétide ou nauséabonde est liée à la dégradation des sécrétions vaginales."
  },
  {
    id: "tricho_clin_7",
    axis: "clinical",
    question: "Chez l’homme, la trichomonase est le plus souvent :",
    options: [
      "Gravement symptomatique",
      "Responsable d’orchite aiguë",
      "Asymptomatique",
      "Toujours compliquée"
    ],
    correctAnswer: 2,
    explanation: "La majorité des hommes infectés sont asymptomatiques, jouant un rôle de vecteur passif."
  },
  {
    id: "tricho_clin_8",
    axis: "clinical",
    question: "Quelle manifestation clinique peut être observée chez l’homme symptomatique ?",
    options: [
      "Urétrite subaiguë avec écoulement discret",
      "Hématurie macroscopique",
      "Douleurs testiculaires aiguës",
      "Prostatite fébrile sévère"
    ],
    correctAnswer: 0,
    explanation: "Lorsqu’elle est symptomatique, la trichomonase masculine se manifeste surtout par une urétrite subaiguë."
  },
  {
    id: "tricho_clin_9",
    axis: "clinical",
    question: "Pourquoi l’homme est-il considéré comme un réservoir important de Trichomonas vaginalis ?",
    options: [
      "Résistance naturelle aux traitements",
      "Portage asymptomatique fréquent",
      "Présence d’une forme kystique",
      "Transmission par voie sanguine"
    ],
    correctAnswer: 1,
    explanation: "Le portage asymptomatique favorise la persistance et la transmission à la partenaire."
  },
  {
    id: "tricho_clin_10",
    axis: "clinical",
    question: "Quel élément clinique permet de différencier la trichomonase d’une candidose vaginale ?",
    options: [
      "Prurit intense",
      "Leucorrhées mousseuses verdâtres",
      "Douleurs à la miction",
      "Inflammation vaginale"
    ],
    correctAnswer: 1,
    explanation: "Les leucorrhées mousseuses verdâtres sont caractéristiques de la trichomonase, contrairement à la candidose."
  },
  {
    id: "tricho_clin_11",
    axis: "clinical",
    question: "Quelle est la signification clinique des ponctuations rouges observées sur le col ?",
    options: [
      "Nécrose muqueuse",
      "Microhémorragies inflammatoires",
      "Lésions précancéreuses",
      "Dépôts fibrineux"
    ],
    correctAnswer: 1,
    explanation: "Ces ponctuations correspondent à des microhémorragies dues à l’inflammation cervicale."
  },
  {
    id: "tricho_clin_12",
    axis: "clinical",
    question: "Quel est l’impact clinique majeur de la trichomonase non traitée chez la femme ?",
    options: [
      "Stérilité définitive",
      "Risque accru d’autres IST",
      "Cancer du col",
      "Insuffisance ovarienne"
    ],
    correctAnswer: 1,
    explanation: "L’inflammation chronique favorise la transmission et l’acquisition d’autres IST, notamment le VIH."
  },
  {
    id: "tricho_clin_13",
    axis: "clinical",
    question: "Quel signe clinique est le moins évocateur d’une trichomonase féminine ?",
    options: [
      "Leucorrhées nauséabondes",
      "Col framboisé",
      "Leucorrhées blanchâtres épaisses",
      "Prurit vulvaire"
    ],
    correctAnswer: 2,
    explanation: "Les leucorrhées blanchâtres épaisses évoquent plutôt une candidose."
  },
  {
    id: "tricho_clin_14",
    axis: "clinical",
    question: "Dans quel contexte clinique la trichomonase doit-elle être particulièrement évoquée ?",
    options: [
      "Vaginite avec pH acide strict",
      "Vaginite récidivante chez une femme sexuellement active",
      "Douleurs pelviennes fébriles",
      "Aménorrhée secondaire"
    ],
    correctAnswer: 1,
    explanation: "Une vaginite chez une femme sexuellement active doit toujours faire évoquer une IST, dont la trichomonase."
  },
  {
    id: "tricho_clin_15",
    axis: "clinical",
    question: "Quelle description correspond au rôle de l’homme dans l’épidémiologie clinique de la trichomonase ?",
    options: [
      "Hôte accidentel",
      "Vecteur passif souvent asymptomatique",
      "Hôte intermédiaire obligatoire",
      "Réservoir environnemental"
    ],
    correctAnswer: 1,
    explanation: "L’homme est fréquemment porteur asymptomatique, facilitant la transmission sexuelle."
  }
];
// ==========================================
// 4. DIAGNOSTIC (10 Questions)
// ==========================================
const diagnosisQuestions = [
  {
    id: "tricho_diag_1",
    axis: "diagnosis",
    question: "Quel examen est le plus rapide et le plus évocateur pour diagnostiquer une trichomonase ?",
    options: [
      "Sérologie",
      "PCR",
      "Examen direct à l’état frais",
      "Coloration de Ziehl-Neelsen"
    ],
    correctAnswer: 2,
    explanation: "L’examen direct à l’état frais permet d’observer immédiatement la mobilité caractéristique du parasite."
  },
  {
    id: "tricho_diag_2",
    axis: "diagnosis",
    question: "Quel élément observé à l’examen direct permet d’affirmer le diagnostic de Trichomonas vaginalis ?",
    options: [
      "Présence de kystes",
      "Mobilité gigotante sur place",
      "Inclusions intracytoplasmiques",
      "Spores mobiles"
    ],
    correctAnswer: 1,
    explanation: "La mobilité rapide, saccadée (« gigotante ») est typique du trophozoïte de Trichomonas vaginalis."
  },
  {
    id: "tricho_diag_3",
    axis: "diagnosis",
    question: "Quel est le site de prélèvement recommandé chez la femme pour le diagnostic de trichomonase ?",
    options: [
      "Urines du matin",
      "Cul-de-sac vaginal",
      "Col utérin profond uniquement",
      "Sang veineux"
    ],
    correctAnswer: 1,
    explanation: "Le prélèvement vaginal profond, notamment au niveau du cul-de-sac vaginal, est le plus adapté."
  },
  {
    id: "tricho_diag_4",
    axis: "diagnosis",
    question: "Chez l’homme, quel type de prélèvement est le plus pertinent pour la mise en évidence du parasite ?",
    options: [
      "Sperme",
      "Prélèvement rectal",
      "Premier jet d’urine",
      "Sang total"
    ],
    correctAnswer: 2,
    explanation: "Le premier jet d’urine concentre les trophozoïtes présents dans l’urètre."
  },
  {
    id: "tricho_diag_5",
    axis: "diagnosis",
    question: "Pourquoi l’examen direct peut-il être faussement négatif ?",
    options: [
      "Présence exclusive de kystes",
      "Fragilité et perte rapide de mobilité du trophozoïte",
      "Interférence avec la flore de Döderlein",
      "Faible spécificité morphologique"
    ],
    correctAnswer: 1,
    explanation: "Le trophozoïte est fragile et perd rapidement sa mobilité, surtout si le prélèvement n’est pas examiné immédiatement."
  },
  {
    id: "tricho_diag_6",
    axis: "diagnosis",
    question: "Quelle méthode diagnostique est considérée comme le gold standard en cas de négativité de l’examen direct ?",
    options: [
      "Sérologie indirecte",
      "Culture sur milieu spécifique",
      "Coloration de Gram",
      "Test antigénique rapide"
    ],
    correctAnswer: 1,
    explanation: "La culture sur milieu spécifique permet d’augmenter la sensibilité diagnostique."
  },
  {
    id: "tricho_diag_7",
    axis: "diagnosis",
    question: "Quel milieu de culture est classiquement utilisé pour Trichomonas vaginalis ?",
    options: [
      "Milieu de Löwenstein-Jensen",
      "Milieu de Roiron ou InPouch",
      "Milieu de Sabouraud",
      "Milieu de Chapman"
    ],
    correctAnswer: 1,
    explanation: "Les milieux de Roiron ou InPouch sont spécifiquement conçus pour la culture de Trichomonas vaginalis."
  },
  {
    id: "tricho_diag_8",
    axis: "diagnosis",
    question: "Quel est l’intérêt principal de la culture par rapport à l’examen direct ?",
    options: [
      "Rapidité d’obtention du résultat",
      "Observation de la mobilité en temps réel",
      "Meilleure sensibilité diagnostique",
      "Possibilité de sérotypage"
    ],
    correctAnswer: 2,
    explanation: "La culture augmente la sensibilité, notamment dans les formes pauci-parasitaires ou asymptomatiques."
  },
  {
    id: "tricho_diag_9",
    axis: "diagnosis",
    question: "Quel délai d’incubation est généralement nécessaire pour obtenir un résultat positif en culture ?",
    options: [
      "Quelques minutes",
      "1 à 2 heures",
      "24 à 72 heures",
      "Plus de 2 semaines"
    ],
    correctAnswer: 2,
    explanation: "La culture nécessite habituellement 1 à 3 jours pour permettre la multiplication du parasite."
  },
  {
    id: "tricho_diag_10",
    axis: "diagnosis",
    question: "Dans quel contexte la culture de Trichomonas vaginalis est-elle particulièrement indiquée ?",
    options: [
      "Devant une sérologie positive",
      "Chez un patient symptomatique avec examen direct négatif",
      "En dépistage systématique chez l’enfant",
      "Après guérison clinique"
    ],
    correctAnswer: 1,
    explanation: "La culture est indiquée lorsque la suspicion clinique est forte malgré un examen direct négatif."
  }
];
// ==========================================
// 5. TRAITEMENT (10 Questions)
// ==========================================
const treatmentQuestions = [
  {
    id: "tricho_treat_1",
    axis: "treatment",
    question: "Quel est le traitement de première intention de la trichomonase génitale ?",
    options: [
      "Albendazole",
      "Métronidazole (Flagyl)",
      "Cotrimoxazole",
      "Doxycycline"
    ],
    correctAnswer: 1,
    explanation: "Le métronidazole est la molécule de référence dans le traitement de Trichomonas vaginalis."
  },
  {
    id: "tricho_treat_2",
    axis: "treatment",
    question: "Quelle autre molécule peut être utilisée comme alternative au métronidazole ?",
    options: [
      "Tinidazole",
      "Ivermectine",
      "Nitazoxanide",
      "Fluconazole"
    ],
    correctAnswer: 0,
    explanation: "Le tinidazole est une alternative efficace, appartenant à la même famille des nitro-imidazolés."
  },
  {
    id: "tricho_treat_3",
    axis: "treatment",
    question: "Quelle est la règle d’or du traitement de la trichomonase ?",
    options: [
      "Prolonger le traitement au moins 21 jours",
      "Traiter uniquement les patients symptomatiques",
      "Associer systématiquement un antifongique",
      "Traiter simultanément les partenaires sexuels"
    ],
    correctAnswer: 3,
    explanation: "Le traitement simultané des partenaires, même asymptomatiques, est indispensable pour éviter les réinfections."
  },
  {
    id: "tricho_treat_4",
    axis: "treatment",
    question: "Pourquoi le traitement du partenaire sexuel est-il indispensable même en l’absence de symptômes ?",
    options: [
      "Risque élevé de toxicité médicamenteuse",
      "Portage asymptomatique fréquent chez l’homme",
      "Existence d’une forme kystique latente",
      "Transmission aérienne possible"
    ],
    correctAnswer: 1,
    explanation: "L’homme est souvent porteur asymptomatique, constituant un réservoir de transmission."
  },
  {
    id: "tricho_treat_5",
    axis: "treatment",
    question: "Quelle recommandation doit impérativement accompagner un traitement par métronidazole ou tinidazole ?",
    options: [
      "Éviter les produits laitiers",
      "Arrêter toute activité sexuelle",
      "Interdiction de consommer de l’alcool",
      "Surveillance biologique quotidienne"
    ],
    correctAnswer: 2,
    explanation: "La consommation d’alcool expose à un effet Antabuse avec nausées, vomissements et malaise."
  },
  {
    id: "tricho_treat_6",
    axis: "treatment",
    question: "Quel mécanisme explique l’effet Antabuse observé avec le métronidazole ?",
    options: [
      "Inhibition de l’aldéhyde déshydrogénase",
      "Activation excessive du cytochrome P450",
      "Blocage de la synthèse protéique",
      "Toxicité hépatique directe"
    ],
    correctAnswer: 0,
    explanation: "L’inhibition de l’aldéhyde déshydrogénase entraîne une accumulation d’acétaldéhyde responsable des symptômes."
  },
  {
    id: "tricho_treat_7",
    axis: "treatment",
    question: "Quelle conduite est recommandée en cas de trichomonase récidivante ?",
    options: [
      "Changer de classe thérapeutique",
      "Augmenter ou prolonger le traitement par nitro-imidazolés",
      "Arrêter tout traitement",
      "Utiliser uniquement un traitement local"
    ],
    correctAnswer: 1,
    explanation: "Les récidives sont souvent liées à une réinfection ou à une posologie insuffisante."
  },
  {
    id: "tricho_treat_8",
    axis: "treatment",
    question: "Quelle est la principale cause d’échec thérapeutique dans la trichomonase ?",
    options: [
      "Résistance systématique au métronidazole",
      "Non-observance du traitement",
      "Mutation du parasite en forme kystique",
      "Réinfection par un partenaire non traité"
    ],
    correctAnswer: 3,
    explanation: "La non-prise en charge simultanée du partenaire est la cause majeure d’échec et de récidive."
  },
  {
    id: "tricho_treat_9",
    axis: "treatment",
    question: "Quelle mesure comportementale doit être recommandée pendant le traitement ?",
    options: [
      "Augmenter les rapports protégés",
      "Abstinence sexuelle transitoire",
      "Douche vaginale quotidienne",
      "Prise d’antibiotiques prophylactiques"
    ],
    correctAnswer: 1,
    explanation: "Une abstinence sexuelle temporaire est conseillée jusqu’à la fin du traitement des deux partenaires."
  },
  {
    id: "tricho_treat_10",
    axis: "treatment",
    question: "Quelle affirmation est correcte concernant la guérison de la trichomonase ?",
    options: [
      "Elle nécessite toujours une culture de contrôle",
      "Elle est spontanée dans la majorité des cas",
      "Elle est généralement obtenue avec un traitement bien conduit",
      "Elle confère une immunité définitive"
    ],
    correctAnswer: 2,
    explanation: "Un traitement adapté et bien observé permet le plus souvent une guérison complète."
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
