// data/categories/protozoa/maladies/paludisme.js

// 1. Morphology
const morphologyQuestions = [
  {
    "id": "malaria_morph_1",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium produit typiquement des gamétocytes en forme de croissant ou de banane sur le frottis sanguin périphérique ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. falciparum forme de manière unique des gamétocytes en forme de croissant (banane), caractéristique pathognomonique pour l'identification de l'espèce."
  },
  {
    "id": "malaria_morph_2",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium infecte le plus couramment des érythrocytes agrandis avec des trophozoïtes amiboïdes ?",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax infecte les réticulocytes, provoquant un agrandissement marqué des globules rouges et des trophozoïtes amiboïdes irréguliers."
  },
  {
    "id": "malaria_morph_3",
    "axis": "morphology",
    "question": "Quel motif de ponctuation apparaît sous forme de fentes grossières, irrégulières, associées à la membrane dans les érythrocytes infectés ?",
    "options": [
      "Fentes de Maurer",
      "Points de Schüffner",
      "Points de Ziemann",
      "Ponctuation basophile"
    ],
    "correctAnswer": 0,
    "explanation": "Les fentes de Maurer sont de grandes inclusions irrégulières observées dans les globules rouges infectés par P. falciparum."
  },
  {
    "id": "malaria_morph_4",
    "axis": "morphology",
    "question": "Un schizonte contenant 6 à 12 mérozoïtes disposés en rosette est le plus caractéristique de quelle espèce ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les schizontes de P. malariae montrent classiquement un arrangement en rosette (tête de marguerite) avec moins de mérozoïtes."
  },
  {
    "id": "malaria_morph_5",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium présente des trophozoïtes en forme de bande s'étendant à travers l'érythrocyte ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes en forme de bande sont une caractéristique microscopique classique de P. malariae."
  },
  {
    "id": "malaria_morph_6",
    "axis": "morphology",
    "question": "Les points de Schüffner sont mieux décrits comme :",
    "options": [
      "Ponctuation rougeâtre fine dans les globules rouges agrandis",
      "Grandes fentes membranaires irrégulières",
      "Agrégats d'ARN bleus dus à la toxicité",
      "Granules cytoplasmiques contenant du fer"
    ],
    "correctAnswer": 0,
    "explanation": "Les points de Schüffner sont de fins granules rouges observés dans les infections à P. vivax et P. ovale."
  },
  {
    "id": "malaria_morph_7",
    "axis": "morphology",
    "question": "Quelle espèce infecte typiquement les érythrocytes de tous âges, résultant en globules rouges de taille normale ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium ovale",
      "Plasmodium malariae"
    ],
    "correctAnswer": 0,
    "explanation": "P. falciparum infecte les érythrocytes de tous âges, donc la taille des globules rouges reste généralement normale."
  },
  {
    "id": "malaria_morph_8",
    "axis": "morphology",
    "question": "Plusieurs formes annulaires délicates dans un seul érythrocyte suggèrent fortement une infection par :",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. falciparum produit couramment plusieurs formes annulaires par globule rouge."
  },
  {
    "id": "malaria_morph_9",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium produit des érythrocytes agrandis, ovales avec des marges frangées ?",
    "options": [
      "Plasmodium ovale",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae"
    ],
    "correctAnswer": 0,
    "explanation": "P. ovale provoque un agrandissement ovale des globules rouges avec des bords déchiquetés caractéristiques."
  },
  {
    "id": "malaria_morph_10",
    "axis": "morphology",
    "question": "Quelle espèce est associée à de fins points de Ziemann clairsemés qui peuvent être difficiles à visualiser ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les points de Ziemann sont une ponctuation faible parfois observée dans les infections à P. malariae."
  },
  {
    "id": "malaria_morph_11",
    "axis": "morphology",
    "question": "Un schizonte avec 16 à 24 mérozoïtes dans un érythrocyte agrandi appartient très probablement à :",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "Les schizontes de P. vivax contiennent de nombreux mérozoïtes et se développent dans des globules rouges agrandis."
  },
  {
    "id": "malaria_morph_12",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique différencie le mieux Plasmodium knowlesi de Plasmodium malariae ?",
    "options": [
      "Parasitémie élevée avec réplication quotidienne",
      "Trophozoïtes en forme de bande",
      "Schizontes en rosette",
      "Érythrocytes de taille normale"
    ],
    "correctAnswer": 0,
    "explanation": "P. knowlesi a un cycle érythrocytaire de 24 heures conduisant à une parasitémie plus élevée."
  },
  {
    "id": "malaria_morph_13",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium montre le plus couramment des trophozoïtes amiboïdes avec des contours cytoplasmiques irréguliers ?",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes amiboïdes sont caractéristiques de P. vivax."
  },
  {
    "id": "malaria_morph_14",
    "axis": "morphology",
    "question": "Quelle espèce montre rarement des schizontes matures dans le sang périphérique en raison de la séquestration ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les schizontes de P. falciparum adhèrent à l'endothélium et sont généralement absents des frottis périphériques."
  },
  {
    "id": "malaria_morph_15",
    "axis": "morphology",
    "question": "Quelle découverte morphologique soutient fortement de vrais parasites du paludisme plutôt qu'un artefact de coloration ?",
    "options": [
      "Présence d'un point de chromatine et d'un anneau cytoplasmique",
      "Points bleus uniformes dans tous les globules rouges",
      "Granules extracellulaires",
      "Précipité de coloration irrégulier"
    ],
    "correctAnswer": 0,
    "explanation": "Les vrais parasites montrent un cytoplasme et une chromatine organisés, contrairement aux artefacts."
  },
  {
    "id": "malaria_morph_16",
    "axis": "morphology",
    "question": "Quelle espèce produit des schizontes compacts remplissant la plupart d'un érythrocyte de taille normale ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les schizontes de P. malariae sont compacts et occupent des globules rouges de taille normale."
  },
  {
    "id": "malaria_morph_17",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium infecte principalement les réticulocytes ?",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax a une forte préférence pour les réticulocytes."
  },
  {
    "id": "malaria_morph_18",
    "axis": "morphology",
    "question": "Quelle morphologie de gamétocyte est typique de Plasmodium vivax ?",
    "options": [
      "Grands gamétocytes ronds remplissant des globules rouges agrandis",
      "Formes extracellulaires en croissant",
      "Petits gamétocytes compacts dans des globules rouges normaux",
      "Gamétocytes allongés en forme de fuseau"
    ],
    "correctAnswer": 0,
    "explanation": "Les gamétocytes de P. vivax sont ronds et occupent des érythrocytes agrandis."
  },
  {
    "id": "malaria_morph_19",
    "axis": "morphology",
    "question": "Quelle espèce peut être confondue avec P. malariae en raison des formes en bande mais provoque une infection plus sévère ?",
    "options": [
      "Plasmodium knowlesi",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. knowlesi ressemble morphologiquement à P. malariae mais a une réplication rapide."
  },
  {
    "id": "malaria_morph_20",
    "axis": "morphology",
    "question": "Quel changement des globules rouges est partagé par Plasmodium vivax et Plasmodium ovale ?",
    "options": [
      "Points de Schüffner",
      "Taille normale des globules rouges",
      "Formes annulaires multiples",
      "Fentes de Maurer"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax et P. ovale présentent tous deux des points de Schüffner."
  },
  {
    "id": "malaria_morph_21",
    "axis": "morphology",
    "question": "Quelle espèce a les trophozoïtes annulaires les plus petits et les plus délicats ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les anneaux de P. falciparum sont fins, délicats et petits par rapport à la taille des globules rouges."
  },
  {
    "id": "malaria_morph_22",
    "axis": "morphology",
    "question": "Quel motif de ponctuation N'EST PAS associé aux parasites du paludisme ?",
    "options": [
      "Ponctuation basophile",
      "Points de Schüffner",
      "Fentes de Maurer",
      "Points de Ziemann"
    ],
    "correctAnswer": 0,
    "explanation": "La ponctuation basophile est une découverte hématologique non liée au paludisme."
  },
  {
    "id": "malaria_morph_23",
    "axis": "morphology",
    "question": "Quel stade morphologique est le plus utile pour identifier Plasmodium falciparum ?",
    "options": [
      "Gamétocyte",
      "Schizonte",
      "Trophozoïte",
      "Hypnozoïte"
    ],
    "correctAnswer": 0,
    "explanation": "Le gamétocyte en forme de croissant est pathognomonique de P. falciparum."
  },
  {
    "id": "malaria_morph_24",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium produit typiquement moins de 12 mérozoïtes par schizonte ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les schizontes de P. malariae contiennent généralement 6 à 12 mérozoïtes."
  },
  {
    "id": "malaria_morph_25",
    "axis": "morphology",
    "question": "Quelle découverte plaide contre une infection à Plasmodium falciparum ?",
    "options": [
      "Points de Schüffner dans les globules rouges agrandis",
      "Formes annulaires multiples par globule rouge",
      "Érythrocytes de taille normale",
      "Parasitémie élevée"
    ],
    "correctAnswer": 0,
    "explanation": "Les points de Schüffner ne sont pas observés dans les infections à P. falciparum."
  },
  {
    "id": "malaria_morph_26",
    "axis": "morphology",
    "question": "Quelle espèce démontre couramment des formes de trophozoïtes en panier ou en bande ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes en panier et en bande sont typiques des trophozoïtes de P. malariae."
  },
  {
    "id": "malaria_morph_27",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique est partagée par Plasmodium falciparum et Plasmodium knowlesi ?",
    "options": [
      "Érythrocytes de taille normale",
      "Points de Schüffner",
      "Globules rouges ovales",
      "Marges frangées"
    ],
    "correctAnswer": 0,
    "explanation": "Les deux espèces infectent les globules rouges de tous âges, maintenant une taille normale des globules rouges."
  },
  {
    "id": "malaria_morph_28",
    "axis": "morphology",
    "question": "Quel parasite provoque le plus souvent une parasitémie très élevée en raison d'un cycle érythrocytaire de 24 heures ?",
    "options": [
      "Plasmodium knowlesi",
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. knowlesi se réplique toutes les 24 heures, conduisant à une multiplication rapide des parasites."
  },
  {
    "id": "malaria_morph_29",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium produit des gamétocytes ronds dans des érythrocytes de taille normale ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les gamétocytes de P. malariae sont ronds et se développent dans des globules rouges de taille normale."
  },
  {
    "id": "malaria_morph_30",
    "axis": "morphology",
    "question": "Quelle découverte morphologique distingue le mieux les parasites du paludisme des plaquettes recouvrant les globules rouges ?",
    "options": [
      "Présence d'un point de chromatine",
      "Petite taille",
      "Localisation périphérique",
      "Coloration bleue"
    ],
    "correctAnswer": 0,
    "explanation": "Les parasites ont des points de chromatine identifiables ; les plaquettes n'en ont pas."
  },
  {
    "id": "malaria_morph_31",
    "axis": "morphology",
    "question": "Quelle espèce montre le plus grand degré d'agrandissement des globules rouges ?",
    "options": [
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium malariae",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax provoque un agrandissement marqué des érythrocytes infectés."
  },
  {
    "id": "malaria_morph_32",
    "axis": "morphology",
    "question": "Quel motif de ponctuation est le plus étroitement associé à la cytoadhérence et au paludisme sévère ?",
    "options": [
      "Fentes de Maurer",
      "Points de Schüffner",
      "Points de Ziemann",
      "Ponctuation basophile"
    ],
    "correctAnswer": 0,
    "explanation": "Les fentes de Maurer sont liées à la cytoadhérence médiée par PfEMP1 dans P. falciparum."
  },
  {
    "id": "malaria_morph_33",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium démontre le plus couramment des formes appliquées (accolées) ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les formes appliquées sont caractéristiques des stades annulaires de P. falciparum."
  },
  {
    "id": "malaria_morph_34",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique est la MOINS utile pour la différenciation des espèces ?",
    "options": [
      "Présence d'anémie",
      "Forme du gamétocyte",
      "Taille des globules rouges",
      "Nombre de mérozoïtes"
    ],
    "correctAnswer": 0,
    "explanation": "L'anémie est non spécifique et n'aide pas à la différenciation morphologique."
  },
  {
    "id": "malaria_morph_35",
    "axis": "morphology",
    "question": "Quelle espèce produit des schizontes dépassant rarement 12 mérozoïtes ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les faibles nombres de mérozoïtes sont typiques des schizontes de P. malariae."
  },
  {
    "id": "malaria_morph_36",
    "axis": "morphology",
    "question": "Quel indice morphologique soutient P. ovale plutôt que P. vivax ?",
    "options": [
      "Marges frangées des globules rouges",
      "Points de Schüffner",
      "Érythrocytes agrandis",
      "Trophozoïtes amiboïdes"
    ],
    "correctAnswer": 0,
    "explanation": "Les marges frangées sont caractéristiques de P. ovale."
  },
  {
    "id": "malaria_morph_37",
    "axis": "morphology",
    "question": "Quelle espèce de Plasmodium produit le plus couramment des trophozoïtes compacts sans formes amiboïdes ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium vivax",
      "Plasmodium falciparum",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "Les trophozoïtes de P. malariae sont compacts et moins amiboïdes."
  },
  {
    "id": "malaria_morph_38",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique indique une maturation avancée du trophozoïte dans P. falciparum ?",
    "options": [
      "Fentes de Maurer grossières",
      "Points de Schüffner",
      "Formes en bande",
      "Agrandissement des globules rouges"
    ],
    "correctAnswer": 0,
    "explanation": "Les fentes de Maurer deviennent plus évidentes dans les stades trophozoïtes tardifs."
  },
  {
    "id": "malaria_morph_39",
    "axis": "morphology",
    "question": "Quelle espèce est la plus probable lorsque les schizontes sont fréquemment observés dans le sang périphérique avec des pics de fièvre quotidiens ?",
    "options": [
      "Plasmodium knowlesi",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae"
    ],
    "correctAnswer": 0,
    "explanation": "P. knowlesi a un cycle quotidien et des schizontes visibles."
  },
  {
    "id": "malaria_morph_40",
    "axis": "morphology",
    "question": "Quelle caractéristique morphologique distingue le mieux les parasites du paludisme des débris de coloration ?",
    "options": [
      "Cytoplasme organisé avec chromatine",
      "Taille uniforme",
      "Localisation extracellulaire",
      "Forme irrégulière"
    ],
    "correctAnswer": 0,
    "explanation": "Les vrais parasites ont un cytoplasme et une chromatine structurés, contrairement aux débris."
  }
];

// 1. Morphology
// 2. Lifecycle
const lifecycleQuestions = [
  {
    "id": "malaria_lifecycle_1",
    "axis": "lifecycle",
    "question": "Quel stade du cycle de vie de Plasmodium est responsable de l'infection initiale des hépatocytes chez l'homme ?",
    "options": [
      "Sporozoïte",
      "Mérozoïte",
      "Gamétocyte",
      "Ookinète"
    ],
    "correctAnswer": 0,
    "explanation": "Les sporozoïtes sont injectés par le moustique Anopheles et envahissent rapidement les hépatocytes pour initier le cycle exo-érythrocytaire."
    },
    {
      "id": "malaria_lifecycle_2",
      "axis": "lifecycle",
    "question": "Quelles espèces de Plasmodium forment des hypnozoïtes dormants dans le foie capables de provoquer une rechute ?",
    "options": [
      "Plasmodium vivax et Plasmodium ovale",
      "Plasmodium falciparum et Plasmodium malariae",
      "Plasmodium knowlesi et Plasmodium falciparum",
      "Plasmodium malariae uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Seuls P. vivax et P. ovale forment des hypnozoïtes qui peuvent se réactiver des mois à des années plus tard."
    },
    {
      "id": "malaria_lifecycle_3",
      "axis": "lifecycle",
    "question": "Quelle phase du cycle de vie de Plasmodium se produit exclusivement dans le vecteur moustique ?",
    "options": [
      "Sporogonie",
      "Schizogonie",
      "Cycle érythrocytaire",
      "Formation d'hypnozoïte"
    ],
    "correctAnswer": 0,
    "explanation": "La sporogonie, impliquant la reproduction sexuée et la formation de sporozoïtes, se produit uniquement dans le moustique Anopheles."
    },
    {
      "id": "malaria_lifecycle_4",
      "axis": "lifecycle",
    "question": "Quelle espèce de moustique femelle sert d'hôte définitif pour Plasmodium ?",
    "options": [
      "Anopheles",
      "Aedes",
      "Culex",
      "Mansonia"
    ],
    "correctAnswer": 0,
    "explanation": "Les moustiques Anopheles femelles sont l'hôte définitif où se produit la reproduction sexuée."
    },
    {
      "id": "malaria_lifecycle_5",
      "axis": "lifecycle",
    "question": "Quelle durée du cycle érythrocytaire est caractéristique de Plasmodium malariae ?",
    "options": [
      "72 heures",
      "48 heures",
      "24 heures",
      "96 heures"
    ],
    "correctAnswer": 0,
    "explanation": "P. malariae provoque le paludisme quarte avec un cycle érythrocytaire de 72 heures."
    },
    {
      "id": "malaria_lifecycle_6",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium complète son cycle érythrocytaire en environ 24 heures ?",
      "options": [
        "Plasmodium knowlesi",
        "Plasmodium falciparum",
        "Plasmodium vivax",
        "Plasmodium malariae"
      ],
      "correctAnswer": 0,
      "explanation": "P. knowlesi a un cycle érythrocytaire rapide de 24 heures, conduisant à des pics de fièvre quotidiens."
    },
    {
      "id": "malaria_lifecycle_7",
      "axis": "lifecycle",
    "question": "Quel stade est responsable des symptômes cliniques du paludisme ?",
    "options": [
      "Schizogonie érythrocytaire",
      "Schizogonie exo-érythrocytaire",
      "Sporogonie",
      "Fusion des gamètes"
    ],
    "correctAnswer": 0,
    "explanation": "Les manifestations cliniques résultent de la rupture synchrone des globules rouges infectés pendant la schizogonie érythrocytaire."
    },
    {
      "id": "malaria_lifecycle_8",
      "axis": "lifecycle",
    "question": "Quel trait génétique humain fournit une protection contre l'infection à Plasmodium vivax ?",
    "options": [
      "Négativité de l'antigène Duffy",
      "Trait drépanocytaire",
      "Thalassémie majeure",
      "Déficit en G6PD"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax nécessite l'antigène Duffy pour entrer dans les globules rouges ; les individus Duffy-négatifs sont résistants."
    },
    {
      "id": "malaria_lifecycle_9",
      "axis": "lifecycle",
    "question": "Quelle condition génétique offre une protection partielle contre le paludisme sévère à Plasmodium falciparum ?",
    "options": [
      "Trait drépanocytaire (HbAS)",
      "Négativité Duffy",
      "Hémophilie",
      "Anémie ferriprive"
    ],
    "correctAnswer": 0,
    "explanation": "Le trait drépanocytaire hétérozygote interfère avec la survie de P. falciparum dans les globules rouges."
    },
    {
      "id": "malaria_lifecycle_10",
      "axis": "lifecycle",
    "question": "Quel stade de Plasmodium est ingéré par le moustique lors d'un repas sanguin ?",
    "options": [
      "Gamétocytes",
      "Sporozoïtes",
      "Mérozoïtes",
      "Schizontes"
    ],
    "correctAnswer": 0,
    "explanation": "Les moustiques ingèrent les gamétocytes mâles et femelles du sang humain."
    },
  
    {
      "id": "malaria_lifecycle_11",
      "axis": "lifecycle",
    "question": "La fusion des gamètes mâles et femelles dans l'intestin moyen du moustique aboutit à la formation de :",
    "options": [
      "Zygote",
      "Ookinète",
      "Oocyste",
      "Sporozoïte"
    ],
    "correctAnswer": 0,
    "explanation": "La fusion des gamètes produit un zygote, qui se développe ensuite en ookinète."
    },
    {
      "id": "malaria_lifecycle_12",
      "axis": "lifecycle",
      "question": "Quel stade pénètre la paroi intestinale du moustique et se développe en oocyste ?",
      "options": [
        "Ookinete",
        "Zygote",
        "Sporozoite",
        "Gametocyte"
      ],
      "correctAnswer": 0,
      "explanation": "L'ookinète mobile pénètre la paroi intestinale et forme un oocyste."
    },
    {
      "id": "malaria_lifecycle_13",
      "axis": "lifecycle",
    "question": "Quel processus fait référence à la multiplication asexuée de Plasmodium chez l'homme ?",
    "options": [
      "Schizogonie",
      "Sporogonie",
      "Gamétogonie",
      "Fécondation"
    ],
    "correctAnswer": 0,
    "explanation": "La schizogonie est le processus de reproduction asexuée se produisant dans le foie humain et les globules rouges."
    },
    {
      "id": "malaria_lifecycle_14",
      "axis": "lifecycle",
      "question": "Quel processus fait référence à la reproduction sexuée avec formation de sporozoïtes chez les moustiques ?",
      "options": [
        "Sporogony",
        "Schizogony",
        "Erythrocytic cycle",
        "Hypnozoite activation"
      ],
      "correctAnswer": 0,
      "explanation": "La sporogonie se produit dans le moustique et aboutit à la production de sporozoïtes."
    },
    {
      "id": "malaria_lifecycle_15",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium manque d'un stade hypnozoïte et ne rechute donc pas depuis le foie ?",
      "options": [
        "Plasmodium falciparum",
        "Plasmodium vivax",
        "Plasmodium ovale",
        "Plasmodium vivax and ovale"
      ],
      "correctAnswer": 0,
      "explanation": "P. falciparum ne forme pas d'hypnozoïtes ; la recrudescence est due à des stades sanguins persistants."
    },
  
    {
      "id": "malaria_lifecycle_16",
      "axis": "lifecycle",
    "question": "Quelle durée du cycle érythrocytaire est typique de Plasmodium vivax et Plasmodium falciparum ?",
    "options": [
      "48 heures",
      "72 heures",
      "24 heures",
      "36 heures"
    ],
    "correctAnswer": 0,
    "explanation": "P. vivax et P. falciparum ont tous deux un cycle érythrocytaire tierce (48 heures)."
    },
    {
      "id": "malaria_lifecycle_17",
      "axis": "lifecycle",
      "question": "Quel stade est responsable de l'ensemencement des glandes salivaires du moustique ?",
      "options": [
        "Sporozoite",
        "Oocyst",
        "Ookinete",
        "Zygote"
      ],
      "correctAnswer": 0,
      "explanation": "Les sporozoïtes libérés des oocystes migrent vers les glandes salivaires du moustique."
    },
    {
      "id": "malaria_lifecycle_18",
      "axis": "lifecycle",
      "question": "Quel organe humain est d'abord impliqué après que les sporozoïtes entrent dans la circulation sanguine ?",
      "options": [
        "Liver",
        "Spleen",
        "Bone marrow",
        "Lung"
      ],
      "correctAnswer": 0,
      "explanation": "Les sporozoïtes se localisent rapidement dans le foie pour initier la schizogonie exo-érythrocytaire."
    },
    {
      "id": "malaria_lifecycle_19",
      "axis": "lifecycle",
      "question": "Quel stade du cycle de vie envahit directement les érythrocytes ?",
      "options": [
        "Merozoite",
        "Sporozoite",
        "Ookinete",
        "Gametocyte"
      ],
      "correctAnswer": 0,
      "explanation": "Les mérozoïtes libérés des schizontes envahissent les globules rouges."
    },
    {
      "id": "malaria_lifecycle_20",
      "axis": "lifecycle",
    "question": "Quel facteur épidémiologique détermine le plus fortement l'intensité de la transmission du paludisme ?",
    "options": [
      "Densité et longévité des moustiques Anopheles",
      "Densité de la population humaine",
      "Altitude seule",
      "Salinité de l'eau"
    ],
    "correctAnswer": 0,
    "explanation": "La transmission dépend principalement de la densité des vecteurs, de la durée de vie et du comportement de piqûre."
    },
  
    {
      "id": "malaria_lifecycle_21",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium est la plus associée à la transmission zoonotique en Asie du Sud-Est ?",
      "options": [
        "Plasmodium knowlesi",
        "Plasmodium vivax",
        "Plasmodium malariae",
        "Plasmodium falciparum"
      ],
      "correctAnswer": 0,
      "explanation": "P. knowlesi est un paludisme zoonotique transmis des macaques à l'homme."
    },
    {
      "id": "malaria_lifecycle_22",
      "axis": "lifecycle",
    "question": "Quel stade de Plasmodium est haploïde ?",
    "options": [
      "Mérozoïte",
      "Zygote",
      "Oocyste",
      "Ookinète"
    ],
    "correctAnswer": 0,
    "explanation": "Les mérozoïtes sont des formes haploïdes résultant de la schizogonie."
    },
    {
      "id": "malaria_lifecycle_23",
      "axis": "lifecycle",
    "question": "Quel stade est diploïde dans le cycle de vie de Plasmodium ?",
    "options": [
      "Zygote",
      "Sporozoïte",
      "Mérozoïte",
      "Gamétocyte"
    ],
    "correctAnswer": 0,
    "explanation": "Le zygote est le seul stade diploïde formé après la fécondation."
    },
    {
      "id": "malaria_lifecycle_24",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium peut provoquer une recrudescence des années après l'infection initiale en raison de stades sanguins persistants ?",
      "options": [
        "Plasmodium malariae",
        "Plasmodium vivax",
        "Plasmodium ovale",
        "Plasmodium falciparum"
      ],
      "correctAnswer": 0,
      "explanation": "P. malariae peut persister à faible niveau dans le sang pendant des décennies."
    },
    {
      "id": "malaria_lifecycle_25",
      "axis": "lifecycle",
    "question": "Quel facteur de l'hôte réduit la sévérité du paludisme en améliorant la clairance splénique des globules rouges infectés ?",
    "options": [
      "Trait drépanocytaire",
      "Négativité Duffy",
      "Surcharge en fer",
      "Splénectomie"
    ],
    "correctAnswer": 0,
    "explanation": "HbAS favorise l'élimination des globules rouges parasités et limite la croissance des parasites."
    },
  
    {
      "id": "malaria_lifecycle_26",
      "axis": "lifecycle",
      "question": "Quel stade de Plasmodium se différencie en formes mâles et femelles dans le sang humain ?",
      "options": [
        "Gametocyte",
        "Merozoite",
        "Schizont",
        "Sporozoite"
      ],
      "correctAnswer": 0,
      "explanation": "Les gamétocytes sont les formes sexuées ingérées par les moustiques."
    },
    {
      "id": "malaria_lifecycle_27",
      "axis": "lifecycle",
    "question": "Quel comportement alimentaire d'Anopheles est essentiel pour la transmission du paludisme ?",
    "options": [
      "Repas sanguin nocturne par les femelles",
      "Alimentation diurne par les mâles",
      "Alimentation aquatique des larves",
      "Alimentation sur nectar de plantes"
    ],
    "correctAnswer": 0,
    "explanation": "Seules les moustiques Anopheles femelles se nourrissent de sang la nuit et transmettent le paludisme."
    },
    {
      "id": "malaria_lifecycle_28",
      "axis": "lifecycle",
    "question": "Quelle condition environnementale favorise le plus la reproduction d'Anopheles ?",
    "options": [
      "Collections d'eau douce stagnante",
      "Rivières à courant rapide",
      "Eaux côtières salines",
      "Sol aride sec"
    ],
    "correctAnswer": 0,
    "explanation": "Les moustiques Anopheles se reproduisent dans les habitats d'eau douce stagnante."
    },
    {
      "id": "malaria_lifecycle_29",
      "axis": "lifecycle",
      "question": "Quel stade est responsable de la rechute mais pas de la réinfection ?",
      "options": [
        "Hypnozoite",
        "Merozoite",
        "Sporozoite",
        "Gametocyte"
      ],
      "correctAnswer": 0,
      "explanation": "Les hypnozoïtes restent dormants dans le foie et provoquent une rechute sans nouvelle exposition aux moustiques."
    },
    {
      "id": "malaria_lifecycle_30",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium est la moins affectée par le statut de l'antigène Duffy ?",
      "options": [
        "Plasmodium falciparum",
        "Plasmodium vivax",
        "Plasmodium knowlesi",
        "Plasmodium ovale"
      ],
      "correctAnswer": 0,
      "explanation": "P. falciparum ne dépend pas de l'antigène Duffy pour l'invasion des globules rouges."
    },
  
    {
      "id": "malaria_lifecycle_31",
      "axis": "lifecycle",
    "question": "Quel stade subit la méiose pendant le cycle de vie de Plasmodium ?",
    "options": [
      "Zygote",
      "Gamétocyte",
      "Mérozoïte",
      "Sporozoïte"
    ],
    "correctAnswer": 0,
    "explanation": "La méiose se produit après la fécondation dans le zygote à l'intérieur du moustique."
    },
    {
      "id": "malaria_lifecycle_32",
      "axis": "lifecycle",
    "question": "Quel facteur explique le plus l'absence de Plasmodium vivax dans une grande partie de l'Afrique de l'Ouest ?",
    "options": [
      "Prévalence élevée d'individus Duffy-négatifs",
      "Manque de moustiques Anopheles",
      "Utilisation universelle d'antipaludiques",
      "Températures basses"
    ],
    "correctAnswer": 0,
    "explanation": "La négativité Duffy empêche l'invasion des globules rouges par P. vivax, limitant la transmission."
    },
    {
      "id": "malaria_lifecycle_33",
      "axis": "lifecycle",
      "question": "Quel stade marque la transition de l'hôte humain à l'hôte moustique ?",
      "options": [
        "Gametocyte",
        "Merozoite",
        "Schizont",
        "Sporozoite"
      ],
      "correctAnswer": 0,
      "explanation": "Les gamétocytes sont ingérés par le moustique lors du repas sanguin."
    },
    {
      "id": "malaria_lifecycle_34",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium provoque le plus couramment un paludisme rechutant des mois après le traitement ?",
      "options": [
        "Plasmodium vivax",
        "Plasmodium falciparum",
        "Plasmodium malariae",
        "Plasmodium knowlesi"
      ],
      "correctAnswer": 0,
      "explanation": "Les rechutes sont dues aux hypnozoïtes dans les infections à P. vivax."
    },
    {
      "id": "malaria_lifecycle_35",
      "axis": "lifecycle",
    "question": "Quel stade est ciblé par la thérapie à la primaquine pour prévenir la rechute ?",
    "options": [
      "Hypnozoïte",
      "Mérozoïte",
      "Gamétocyte",
      "Schizonte"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine éradique les hypnozoïtes hépatiques dormants."
    },
  
    {
      "id": "malaria_lifecycle_36",
      "axis": "lifecycle",
      "question": "Quelle espèce montre à la fois la rechute et la recrudescence comme phénomènes épidémiologiques ?",
      "options": [
        "Plasmodium vivax",
        "Plasmodium falciparum",
        "Plasmodium knowlesi",
        "Plasmodium malariae"
      ],
      "correctAnswer": 0,
      "explanation": "P. vivax provoque une rechute via les hypnozoïtes et une recrudescence à partir des stades sanguins."
    },
    {
      "id": "malaria_lifecycle_37",
      "axis": "lifecycle",
    "question": "Quel facteur influence le plus la transmission saisonnière du paludisme ?",
    "options": [
      "Modèles de précipitations",
      "Immunité humaine seule",
      "Taux de mutation des parasites",
      "Génétique de l'altitude"
    ],
    "correctAnswer": 0,
    "explanation": "Les précipitations affectent la reproduction des moustiques et l'intensité de la transmission."
    },
    {
      "id": "malaria_lifecycle_38",
      "axis": "lifecycle",
      "question": "Quel stade du cycle de vie est responsable de l'infection d'un nouvel hôte humain ?",
      "options": [
        "Sporozoite",
        "Merozoite",
        "Gametocyte",
        "Ookinete"
      ],
      "correctAnswer": 0,
      "explanation": "Les sporozoïtes sont injectés dans l'homme lors d'une piqûre de moustique."
    },
    {
      "id": "malaria_lifecycle_39",
      "axis": "lifecycle",
      "question": "Quelle espèce de Plasmodium peut maintenir une parasitémie de faible niveau pendant des décennies sans rechute ?",
      "options": [
        "Plasmodium malariae",
        "Plasmodium vivax",
        "Plasmodium falciparum",
        "Plasmodium ovale"
      ],
      "correctAnswer": 0,
      "explanation": "P. malariae peut persister silencieusement dans le sang pendant de nombreuses années."
    },
    {
      "id": "malaria_lifecycle_40",
      "axis": "lifecycle",
    "question": "Quel stade relie les cycles exo-érythrocytaire et érythrocytaire ?",
    "options": [
      "Mérozoïte",
      "Sporozoïte",
      "Gamétocyte",
      "Ookinète"
    ],
    "correctAnswer": 0,
    "explanation": "Les mérozoïtes libérés des schizontes hépatiques initient l'infection érythrocytaire."
    }
];

// 2. Lifecycle
// 3. Clinical
const clinicalQuestions = [
  {
    "id": "malaria_clin_1",
    "axis": "clinical",
    "question": "Quel est le mécanisme pathologique principal responsable du paludisme cérébral dans l'infection à Plasmodium falciparum ?",
    "options": [
      "Séquestration des érythrocytes parasités dans la microvascularisation cérébrale",
      "Invasion directe des neurones par les parasites",
      "Démyélinisation à médiation immunitaire",
      "Rupture des schizontes cérébraux provoquant une hémorragie"
    ],
    "correctAnswer": 0,
    "explanation": "Les globules rouges infectés par P. falciparum adhèrent à l'endothélium, provoquant une obstruction microvasculaire et une dysfonction cérébrale."
  },
  {
    "id": "malaria_clin_2",
    "axis": "clinical",
    "question": "Quel critère clinique est inclus dans la définition de l'OMS du paludisme sévère ?",
    "options": [
      "Altération de la conscience ou coma",
      "Ictère léger sans anémie",
      "Fièvre de faible grade uniquement",
      "Thrombopénie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "L'altération de l'état mental ou le coma définit le paludisme cérébral, un critère majeur de paludisme sévère selon l'OMS."
  },
  {
    "id": "malaria_clin_3",
    "axis": "clinical",
    "question": "Quel est le processus pathogène le plus important conduisant à l'anémie sévère dans le paludisme ?",
    "options": [
      "Destruction des érythrocytes parasités et non parasités",
      "Infiltration de la moelle osseuse par les parasites",
      "Hémolyse auto-immune uniquement",
      "Séquestration du fer dans les macrophages uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Les globules rouges infectés et non infectés sont détruits, conduisant à une anémie profonde."
  },
  {
    "id": "malaria_clin_4",
    "axis": "clinical",
    "question": "Quelle anomalie métabolique est particulièrement associée au paludisme sévère chez les enfants ?",
    "options": [
      "Hypoglycémie",
      "Hypernatrémie",
      "Alcalose métabolique",
      "Hypercalcémie"
    ],
    "correctAnswer": 0,
    "explanation": "L'hypoglycémie est courante dans le paludisme pédiatrique sévère en raison de la consommation de glucose par les parasites et de la gluconéogenèse altérée."
  },
  {
    "id": "malaria_clin_5",
    "axis": "clinical",
    "question": "Quel mécanisme explique l'acidose lactique dans le paludisme falciparum sévère ?",
    "options": [
      "Hypoxie tissulaire due à l'obstruction microvasculaire",
      "Insuffisance respiratoire primaire",
      "Acidose tubulaire rénale",
      "Perte excessive de bicarbonate"
    ],
    "correctAnswer": 0,
    "explanation": "La cytoadhérence provoque une altération de la perfusion, conduisant au métabolisme anaérobie et à l'acidose lactique."
  },
  {
    "id": "malaria_clin_6",
    "axis": "clinical",
    "question": "Quelle complication est classiquement associée à l'infection chronique à Plasmodium malariae ?",
    "options": [
      "Syndrome néphrotique",
      "Paludisme cérébral",
      "Fièvre bilieuse hémoglobinurique",
      "Syndrome de détresse respiratoire aiguë"
    ],
    "correctAnswer": 0,
    "explanation": "Le dépôt de complexes immuns dans les reins conduit au syndrome néphrotique dans P. malariae."
  },
  {
    "id": "malaria_clin_7",
    "axis": "clinical",
    "question": "La fièvre bilieuse hémoglobinurique est principalement caractérisée par quelle caractéristique clinique ?",
    "options": [
      "Hémoglobinurie due à une hémolyse intravasculaire massive",
      "Thrombopénie sévère",
      "Insuffisance hépatique aiguë",
      "Œdème cérébral"
    ],
    "correctAnswer": 0,
    "explanation": "L'hémolyse rapide provoque des urines foncées dues à l'hémoglobine libre."
  },
  {
    "id": "malaria_clin_8",
    "axis": "clinical",
    "question": "Quelle espèce de paludisme est la plus couramment associée à une maladie sévère pendant la grossesse ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. falciparum provoque une séquestration placentaire conduisant à des issues de grossesse défavorables."
  },
  {
    "id": "malaria_clin_9",
    "axis": "clinical",
    "question": "Quelle est la caractéristique pathologique principale du paludisme placentaire ?",
    "options": [
      "Séquestration des érythrocytes infectés dans les espaces intervilleux",
      "Infection fœtale directe",
      "Infarctus placentaire dû à la thrombose",
      "Placentite auto-immune maternelle"
    ],
    "correctAnswer": 0,
    "explanation": "L'adhésion médiée par VAR2CSA provoque l'accumulation de globules rouges infectés dans le placenta."
  },
  {
    "id": "malaria_clin_10",
    "axis": "clinical",
    "question": "Quel résultat fœtal est fortement associé au paludisme pendant la grossesse ?",
    "options": [
      "Faible poids de naissance",
      "Malformations congénitales",
      "Défauts du tube neural",
      "Polyhydramnios"
    ],
    "correctAnswer": 0,
    "explanation": "L'insuffisance placentaire conduit à un retard de croissance intra-utérin."
  },
  {
    "id": "malaria_clin_11",
    "axis": "clinical",
    "question": "Quelle caractéristique distingue le paludisme sévère du paludisme non compliqué ?",
    "options": [
      "Preuve de dysfonctionnement d'organes vitaux",
      "Présence de fièvre et frissons",
      "Anémie seule",
      "Splénomégalie"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme sévère implique une défaillance d'organes tels que le cerveau, les reins ou les poumons."
  },
  {
    "id": "malaria_clin_12",
    "axis": "clinical",
    "question": "Quel phénomène pathogène contribue à l'obstruction microvasculaire dans le paludisme falciparum ?",
    "options": [
      "Cytoadhérence des érythrocytes infectés aux cellules endothéliales",
      "Vascularite capillaire",
      "Apoptose endothéliale",
      "Consommation de plaquettes uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "L'adhésion médiée par PfEMP1 ancre les globules rouges infectés à l'endothélium vasculaire."
  },
  {
    "id": "malaria_clin_13",
    "axis": "clinical",
    "question": "Le rosetting dans le paludisme fait référence à quelle interaction ?",
    "options": [
      "Liaison des érythrocytes infectés aux érythrocytes non infectés",
      "Fixation des parasites aux leucocytes",
      "Agrégation des plaquettes",
      "Agrégation des schizontes"
    ],
    "correctAnswer": 0,
    "explanation": "Le rosetting aggrave le flux microcirculatoire et la sévérité."
  },
  {
    "id": "malaria_clin_14",
    "axis": "clinical",
    "question": "Quelle complication du paludisme se présente avec un choc et un effondrement circulatoire périphérique ?",
    "options": [
      "Paludisme algide",
      "Paludisme cérébral",
      "Fièvre bilieuse hémoglobinurique",
      "SDRA associé au paludisme"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme algide ressemble à un choc septique avec hypotension."
  },
  {
    "id": "malaria_clin_15",
    "axis": "clinical",
    "question": "Quel groupe d'âge est à plus haut risque de paludisme sévère dans les régions endémiques ?",
    "options": [
      "Enfants de moins de cinq ans",
      "Adolescents",
      "Adultes en bonne santé",
      "Personnes âgées uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "L'immunité partielle se développe avec l'âge ; les jeunes enfants sont les plus vulnérables."
  },
  {
    "id": "malaria_clin_16",
    "axis": "clinical",
    "question": "Pourquoi l'hypoglycémie est-elle particulièrement dangereuse dans le paludisme sévère ?",
    "options": [
      "Elle peut précipiter des convulsions et un coma",
      "Elle provoque une hémolyse",
      "Elle augmente directement la parasitémie",
      "Elle conduit à une hyperkaliémie"
    ],
    "correctAnswer": 0,
    "explanation": "La faible glycémie aggrave les résultats neurologiques et la mortalité."
  },
  {
    "id": "malaria_clin_17",
    "axis": "clinical",
    "question": "Quelle manifestation clinique est typique du paludisme cérébral ?",
    "options": [
      "Coma non réveillable avec convulsions",
      "Céphalée isolée uniquement",
      "Neuropathie périphérique",
      "Signes méningés sans coma"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme cérébral se présente avec un coma et souvent des convulsions répétées."
  },
  {
    "id": "malaria_clin_18",
    "axis": "clinical",
    "question": "Quelle défaillance d'organe définit la lésion rénale aiguë associée au paludisme ?",
    "options": [
      "Oligurie avec élévation de la créatinine",
      "Protéinurie dans la plage néphrotique uniquement",
      "Hématurie sans azotémie",
      "Déséquilibre électrolytique seul"
    ],
    "correctAnswer": 0,
    "explanation": "La nécrose tubulaire aiguë due à l'hémolyse et à l'hypoperfusion provoque une IRA."
  },
  {
    "id": "malaria_clin_19",
    "axis": "clinical",
    "question": "Quelle espèce de paludisme est la plus fortement associée à une parasitémie très élevée ?",
    "options": [
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale"
    ],
    "correctAnswer": 0,
    "explanation": "P. falciparum infecte les globules rouges de tous âges, permettant des charges parasitaires élevées."
  },
  {
    "id": "malaria_clin_20",
    "axis": "clinical",
    "question": "Quelle période d'incubation est typique du paludisme à Plasmodium falciparum ?",
    "options": [
      "7–14 jours",
      "3–5 jours",
      "30–60 jours",
      "Plusieurs années"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme falciparum se présente généralement dans les deux semaines suivant l'infection."
  },
  {
    "id": "malaria_clin_21",
    "axis": "clinical",
    "question": "Pourquoi Plasmodium vivax peut-il rechuter des mois après l'infection initiale ?",
    "options": [
      "Persistance d'hypnozoïtes dormants dans le foie",
      "Parasitémie chronique de faible grade dans le sang",
      "Réinfection répétée par les moustiques",
      "Variation antigénique dans les érythrocytes"
    ],
    "correctAnswer": 0,
    "explanation": "Les hypnozoïtes se réactivent et provoquent une rechute."
  },
  {
    "id": "malaria_clin_22",
    "axis": "clinical",
    "question": "Quelle triade de symptômes décrit classiquement la paroxysme palustre ?",
    "options": [
      "Frissons, fièvre et sueurs",
      "Fièvre, éruption cutanée et arthralgie",
      "Céphalée, vomissements et diarrhée",
      "Anémie, ictère et œdème"
    ],
    "correctAnswer": 0,
    "explanation": "La rupture cyclique des globules rouges produit la paroxysme classique."
  },
  {
    "id": "malaria_clin_23",
    "axis": "clinical",
    "question": "Quel facteur contribue le plus à la mortalité dans le paludisme falciparum sévère ?",
    "options": [
      "Dysfonctionnement multi-organes",
      "Parasitémie de faible grade",
      "Splénomégalie",
      "Modèle de fièvre rechutante"
    ],
    "correctAnswer": 0,
    "explanation": "L'échec combiné cérébral, rénal, métabolique et respiratoire augmente la mortalité."
  },
  {
    "id": "malaria_clin_24",
    "axis": "clinical",
    "question": "Quelle complication respiratoire peut survenir dans le paludisme sévère ?",
    "options": [
      "Syndrome de détresse respiratoire aiguë",
      "Asthme bronchique",
      "Fibrose pulmonaire",
      "Épanchement pleural uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "La fuite capillaire et l'inflammation peuvent conduire au SDRA."
  },
  {
    "id": "malaria_clin_25",
    "axis": "clinical",
    "question": "Quelle manifestation du paludisme est causée par le dépôt de complexes immuns ?",
    "options": [
      "Syndrome néphrotique",
      "Paludisme cérébral",
      "Paludisme algide",
      "Fièvre bilieuse hémoglobinurique"
    ],
    "correctAnswer": 0,
    "explanation": "Les complexes antigène-anticorps chroniques endommagent les glomérules."
  },
  {
    "id": "malaria_clin_26",
    "axis": "clinical",
    "question": "Quelle découverte de laboratoire accompagne couramment le paludisme sévère ?",
    "options": [
      "Acidose métabolique",
      "Leucocytose marquée",
      "Hypercalcémie",
      "Bicarbonate élevé"
    ],
    "correctAnswer": 0,
    "explanation": "L'acidose lactique reflète l'hypoxie tissulaire."
  },
  {
    "id": "malaria_clin_27",
    "axis": "clinical",
    "question": "Pourquoi le paludisme est-il plus sévère chez les voyageurs non immunisés ?",
    "options": [
      "Manque d'immunité acquise partielle",
      "Exposition plus élevée aux moustiques",
      "Susceptibilité génétique uniquement",
      "Co-infection avec des bactéries"
    ],
    "correctAnswer": 0,
    "explanation": "L'exposition endémique conduit à une immunité partielle absente chez les voyageurs."
  },
  {
    "id": "malaria_clin_28",
    "axis": "clinical",
    "question": "Quel signe clinique suggère une anémie sévère dans le paludisme ?",
    "options": [
      "Pâleur avec hémoglobine <5 g/dL",
      "Ictère léger uniquement",
      "Splénomégalie sans symptômes",
      "Thrombopénie isolée"
    ],
    "correctAnswer": 0,
    "explanation": "L'OMS définit l'anémie palustre sévère par une réduction profonde de l'hémoglobine."
  },
  {
    "id": "malaria_clin_29",
    "axis": "clinical",
    "question": "Quelle manifestation indique un mauvais pronostic dans le paludisme cérébral ?",
    "options": [
      "Convulsions généralisées répétées",
      "Convulsion fébrile unique",
      "Céphalée légère",
      "Confusion transitoire"
    ],
    "correctAnswer": 0,
    "explanation": "Les convulsions récurrentes reflètent une atteinte cérébrale sévère."
  },
  {
    "id": "malaria_clin_30",
    "axis": "clinical",
    "question": "Quelle condition clinique est uniquement liée à une hémolyse massive dans le paludisme ?",
    "options": [
      "Fièvre bilieuse hémoglobinurique",
      "Paludisme algide",
      "Paludisme cérébral",
      "Paludisme placentaire"
    ],
    "correctAnswer": 0,
    "explanation": "L'hémoglobinurie résulte de la destruction rapide des globules rouges."
  },
  {
    "id": "malaria_clin_31",
    "axis": "clinical",
    "question": "Quelle est la cause principale de la thrombopénie dans le paludisme ?",
    "options": [
      "Destruction périphérique et séquestration splénique",
      "Suppression de la moelle osseuse uniquement",
      "Parasitisation des plaquettes",
      "Anticorps anti-plaquettes auto-immuns seuls"
    ],
    "correctAnswer": 0,
    "explanation": "Les plaquettes sont consommées et séquestrées pendant l'infection."
  },
  {
    "id": "malaria_clin_32",
    "axis": "clinical",
    "question": "Quelle espèce de paludisme provoque le plus souvent une infection chronique de faible grade ?",
    "options": [
      "Plasmodium malariae",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Plasmodium knowlesi"
    ],
    "correctAnswer": 0,
    "explanation": "P. malariae peut persister à faible niveau pendant des années."
  },
  {
    "id": "malaria_clin_33",
    "axis": "clinical",
    "question": "Quelle caractéristique différencie le paludisme sévère de la septicémie ?",
    "options": [
      "Démonstration de la parasitémie sur le frottis sanguin",
      "Présence de fièvre",
      "Hypotension",
      "Acidose métabolique"
    ],
    "correctAnswer": 0,
    "explanation": "La preuve microscopique des parasites confirme le paludisme."
  },
  {
    "id": "malaria_clin_34",
    "axis": "clinical",
    "question": "Pourquoi la splénomégalie est-elle courante dans le paludisme ?",
    "options": [
      "Clairance accrue des érythrocytes parasités",
      "Invasion splénique directe par les parasites",
      "Formation de granulomes",
      "Hypertension portale"
    ],
    "correctAnswer": 0,
    "explanation": "La rate élimine les globules rouges infectés et endommagés."
  },
  {
    "id": "malaria_clin_35",
    "axis": "clinical",
    "question": "Quelle complication liée au paludisme imite le choc septique ?",
    "options": [
      "Paludisme algide",
      "Fièvre bilieuse hémoglobinurique",
      "Paludisme cérébral",
      "Paludisme placentaire"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme algide se présente avec une hypotension et des caractéristiques de type choc."
  },
  {
    "id": "malaria_clin_36",
    "axis": "clinical",
    "question": "Quel groupe de patients est à plus haut risque pour le paludisme placentaire ?",
    "options": [
      "Primigestes",
      "Femmes multipares",
      "Femmes postménopausées",
      "Adolescents de sexe masculin"
    ],
    "correctAnswer": 0,
    "explanation": "Les premières grossesses manquent d'immunité aux parasites se liant au placenta."
  },
  {
    "id": "malaria_clin_37",
    "axis": "clinical",
    "question": "Quelle découverte clinique reflète la sévérité de l'hémolyse dans le paludisme ?",
    "options": [
      "Ictère avec bilirubine indirecte élevée",
      "ALT élevée isolée",
      "Hypoalbuminémie",
      "Leucopénie"
    ],
    "correctAnswer": 0,
    "explanation": "L'hyperbilirubinémie non conjuguée indique une hémolyse."
  },
  {
    "id": "malaria_clin_38",
    "axis": "clinical",
    "question": "Quel facteur augmente la susceptibilité au paludisme sévère pendant la grossesse ?",
    "options": [
      "Expression placentaire des récepteurs d'adhésion des parasites",
      "Masse de globules rouges augmentée",
      "Niveaux d'œstrogène plus élevés",
      "Exposition réduite aux moustiques"
    ],
    "correctAnswer": 0,
    "explanation": "Les récepteurs placentaires facilitent la séquestration des globules rouges infectés."
  },
  {
    "id": "malaria_clin_39",
    "axis": "clinical",
    "question": "Quelle complication du paludisme implique une fuite capillaire diffuse ?",
    "options": [
      "Syndrome de détresse respiratoire aiguë",
      "Syndrome néphrotique",
      "Paludisme cérébral",
      "Fièvre bilieuse hémoglobinurique"
    ],
    "correctAnswer": 0,
    "explanation": "La dysfonction endothéliale conduit à un œdème pulmonaire."
  },
  {
    "id": "malaria_clin_40",
    "axis": "clinical",
    "question": "Quelle caractéristique explique le mieux la défaillance multi-organes dans le paludisme falciparum ?",
    "options": [
      "Séquestration microvasculaire généralisée",
      "Fièvre élevée seule",
      "Invasion directe des organes",
      "Dépôt de complexes immuns uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "La séquestration perturbe la perfusion dans plusieurs organes."
  }
]

// 4. Diagnosis
const diagnosisQuestions = [
  {
    "id": "malaria_diag_1",
    "axis": "diagnosis",
    "question": "Quelle méthode de laboratoire offre la sensibilité la plus élevée pour détecter une parasitémie palustre de faible niveau ?",
    "options": [
      "Frottis sanguin épais (goutte épaisse)",
      "Frottis sanguin mince (frottis sanguin)",
      "Test de diagnostic rapide",
      "Numération sanguine périphérique"
    ],
    "correctAnswer": 0,
    "explanation": "Les frottis épais concentrent les éléments sanguins, permettant la détection de densités parasitaires très faibles (jusqu'à 5 parasites/µL)."
  },
  {
    "id": "malaria_diag_2",
    "axis": "diagnosis",
    "question": "Quel est l'avantage principal d'un frottis sanguin mince dans le diagnostic du paludisme ?",
    "options": [
      "Identification précise de l'espèce et évaluation morphologique",
      "Sensibilité plus élevée que le frottis épais",
      "Détection de la parasitémie submicroscopique",
      "Compatibilité avec l'automatisation"
    ],
    "correctAnswer": 0,
    "explanation": "Les frottis minces préservent la morphologie des globules rouges, permettant une différenciation précise des espèces."
  },
  {
    "id": "malaria_diag_3",
    "axis": "diagnosis",
    "question": "Quel est le seuil de détection approximatif d'un frottis sanguin épais bien préparé ?",
    "options": [
      "5–10 parasites par microlitre",
      "50–100 parasites par microlitre",
      "500 parasites par microlitre",
      "5000 parasites par microlitre"
    ],
    "correctAnswer": 0,
    "explanation": "La microscopie experte peut détecter une parasitémie aussi faible que 5 parasites/µL en utilisant des frottis épais."
  },
  {
    "id": "malaria_diag_4",
    "axis": "diagnosis",
    "question": "Which antigen is most commonly targeted by rapid diagnostic tests for Plasmodium falciparum?",
    "options": [
      "Histidine-rich protein 2 (HRP2)",
      "Plasmodium lactate dehydrogenase (pLDH)",
      "Aldolase",
      "Circumsporozoite protein"
    ],
    "correctAnswer": 0,
    "explanation": "HRP2 is specific to P. falciparum and widely used in RDTs."
  },
  {
    "id": "malaria_diag_5",
    "axis": "diagnosis",
    "question": "Which RDT antigen can differentiate viable parasites from cleared infections?",
    "options": [
      "Plasmodium lactate dehydrogenase (pLDH)",
      "Histidine-rich protein 2 (HRP2)",
      "Aldolase",
      "Hemozoin"
    ],
    "correctAnswer": 0,
    "explanation": "pLDH reflects active parasite metabolism and disappears after parasite clearance."
  },
  {
    "id": "malaria_diag_6",
    "axis": "diagnosis",
    "question": "Why can HRP2-based RDTs remain positive after successful treatment?",
    "options": [
      "Persistence of circulating HRP2 antigen",
      "Cross-reaction with host enzymes",
      "Prozone effect",
      "Low parasite density"
    ],
    "correctAnswer": 0,
    "explanation": "HRP2 may persist in blood for weeks after parasite clearance."
  },
  {
    "id": "malaria_diag_7",
    "axis": "diagnosis",
    "question": "What genetic phenomenon causes false-negative HRP2-based RDTs?",
    "options": [
      "HRP2 gene deletion in Plasmodium falciparum",
      "Antigenic variation",
      "Parasite dormancy",
      "Mixed-species infection"
    ],
    "correctAnswer": 0,
    "explanation": "Some P. falciparum strains lack the HRP2 gene, rendering HRP2 RDTs ineffective."
  },
  {
    "id": "malaria_diag_8",
    "axis": "diagnosis",
    "question": "Which condition can cause false-positive malaria RDT results?",
    "options": [
      "Rheumatoid factor presence",
      "Severe anemia",
      "Thrombocytopenia",
      "Recent antimalarial therapy"
    ],
    "correctAnswer": 0,
    "explanation": "Rheumatoid factor may nonspecifically bind test antibodies."
  },
  {
    "id": "malaria_diag_9",
    "axis": "diagnosis",
    "question": "What is the prozone effect in malaria RDTs?",
    "options": [
      "False-negative result due to very high antigen levels",
      "False-positive result from antibody excess",
      "Cross-reaction with other parasites",
      "Low sensitivity in non-falciparum species"
    ],
    "correctAnswer": 0,
    "explanation": "Excess antigen interferes with antibody-antigen lattice formation."
  },
  {
    "id": "malaria_diag_10",
    "axis": "diagnosis",
    "question": "Which diagnostic method is considered the gold standard for malaria diagnosis?",
    "options": [
      "Microscopic examination of blood smears",
      "Rapid diagnostic tests",
      "PCR",
      "QBC method"
    ],
    "correctAnswer": 0,
    "explanation": "Microscopy allows detection, species identification, and parasitemia quantification."
  },
  {
    "id": "malaria_diag_11",
    "axis": "diagnosis",
    "question": "Which technique uses acridine orange fluorescence to detect malaria parasites?",
    "options": [
      "Quantitative Buffy Coat (QBC)",
      "Thin blood smear",
      "PCR",
      "ELISA"
    ],
    "correctAnswer": 0,
    "explanation": "QBC highlights parasitic nucleic acids under fluorescence microscopy."
  },
  {
    "id": "malaria_diag_12",
    "axis": "diagnosis",
    "question": "What is a major limitation of the QBC method?",
    "options": [
      "Limited species differentiation",
      "Low sensitivity",
      "High false-positive rate",
      "Long turnaround time"
    ],
    "correctAnswer": 0,
    "explanation": "QBC detects parasites well but does not reliably identify species."
  },
  {
    "id": "malaria_diag_13",
    "axis": "diagnosis",
    "question": "Which molecular method is most sensitive for detecting submicroscopic malaria?",
    "options": [
      "PCR",
      "LAMP",
      "RDT",
      "Thick blood smear"
    ],
    "correctAnswer": 0,
    "explanation": "PCR can detect parasitemia below microscopic thresholds."
  },
  {
    "id": "malaria_diag_14",
    "axis": "diagnosis",
    "question": "In which scenario is PCR particularly indicated for malaria diagnosis?",
    "options": [
      "Low parasitemia with negative microscopy",
      "Severe falciparum malaria",
      "Routine screening in endemic areas",
      "Monitoring treatment response daily"
    ],
    "correctAnswer": 0,
    "explanation": "PCR is useful when microscopy and RDTs are negative but suspicion remains."
  },
  {
    "id": "malaria_diag_15",
    "axis": "diagnosis",
    "question": "What is the main advantage of LAMP over conventional PCR?",
    "options": [
      "Isothermal amplification without thermal cycler",
      "Higher specificity",
      "Lower sensitivity",
      "Ability to quantify parasitemia"
    ],
    "correctAnswer": 0,
    "explanation": "LAMP can be performed in low-resource settings without complex equipment."
  },
  {
    "id": "malaria_diag_16",
    "axis": "diagnosis",
    "question": "Which hematological abnormality is most consistently seen in malaria?",
    "options": [
      "Thrombocytopenia",
      "Leukocytosis",
      "Polycythemia",
      "Eosinophilia"
    ],
    "correctAnswer": 0,
    "explanation": "Platelet consumption and splenic sequestration cause thrombocytopenia."
  },
  {
    "id": "malaria_diag_17",
    "axis": "diagnosis",
    "question": "Which anemia mechanism predominates in malaria?",
    "options": [
      "Hemolysis of infected and uninfected erythrocytes",
      "Iron deficiency",
      "Bone marrow aplasia",
      "Vitamin B12 deficiency"
    ],
    "correctAnswer": 0,
    "explanation": "Both parasitized and non-parasitized RBCs are destroyed."
  },
  {
    "id": "malaria_diag_18",
    "axis": "diagnosis",
    "question": "Which smear is preferred for calculating parasitemia percentage?",
    "options": [
      "Thin blood smear",
      "Thick blood smear",
      "QBC",
      "RDT"
    ],
    "correctAnswer": 0,
    "explanation": "Thin smears allow counting infected RBCs relative to total RBCs."
  },
  {
    "id": "malaria_diag_19",
    "axis": "diagnosis",
    "question": "How is parasitemia typically expressed in thin blood smear analysis?",
    "options": [
      "Percentage of infected red blood cells",
      "Parasites per microliter directly",
      "Number of schizonts per field",
      "Antigen concentration"
    ],
    "correctAnswer": 0,
    "explanation": "Thin smears quantify the proportion of infected erythrocytes."
  },
  {
    "id": "malaria_diag_20",
    "axis": "diagnosis",
    "question": "Which method estimates parasitemia by counting parasites against leukocytes?",
    "options": [
      "Thick blood smear",
      "Thin blood smear",
      "RDT",
      "QBC"
    ],
    "correctAnswer": 0,
    "explanation": "Parasites are counted per 200–500 WBCs in thick smears."
  },
  {
    "id": "malaria_diag_21",
    "axis": "diagnosis",
    "question": "What assumed leukocyte count is commonly used for parasitemia calculation?",
    "options": [
      "8000 leukocytes per microliter",
      "4000 leukocytes per microliter",
      "10000 leukocytes per microliter",
      "12000 leukocytes per microliter"
    ],
    "correctAnswer": 0,
    "explanation": "WHO recommends using 8000 WBC/µL if actual count is unavailable."
  },
  {
    "id": "malaria_diag_22",
    "axis": "diagnosis",
    "question": "Which diagnostic test can detect mixed Plasmodium infections most reliably?",
    "options": [
      "PCR",
      "RDT",
      "QBC",
      "Thick smear alone"
    ],
    "correctAnswer": 0,
    "explanation": "PCR can identify multiple species simultaneously with high sensitivity."
  },
  {
    "id": "malaria_diag_23",
    "axis": "diagnosis",
    "question": "What is a key disadvantage of RDTs compared to microscopy?",
    "options": [
      "Inability to quantify parasitemia",
      "Lower sensitivity for falciparum malaria",
      "Longer turnaround time",
      "Need for skilled personnel"
    ],
    "correctAnswer": 0,
    "explanation": "RDTs provide qualitative results only."
  },
  {
    "id": "malaria_diag_24",
    "axis": "diagnosis",
    "question": "Which factor most affects the sensitivity of microscopy?",
    "options": [
      "Skill and experience of the microscopist",
      "Type of anticoagulant",
      "Patient age",
      "Time of day"
    ],
    "correctAnswer": 0,
    "explanation": "Expertise greatly influences parasite detection accuracy."
  },
  {
    "id": "malaria_diag_25",
    "axis": "diagnosis",
    "question": "Which sample is optimal for malaria microscopy?",
    "options": [
      "Peripheral capillary blood",
      "Serum sample",
      "Plasma sample",
      "Bone marrow aspirate"
    ],
    "correctAnswer": 0,
    "explanation": "Capillary blood contains higher parasite concentration."
  },
  {
    "id": "malaria_diag_26",
    "axis": "diagnosis",
    "question": "Why should blood smears be examined promptly after collection?",
    "options": [
      "Parasite morphology deteriorates over time",
      "Antigens degrade rapidly",
      "DNA becomes fragmented",
      "Platelets aggregate"
    ],
    "correctAnswer": 0,
    "explanation": "Delayed examination alters parasite morphology."
  },
  {
    "id": "malaria_diag_27",
    "axis": "diagnosis",
    "question": "Which staining method is standard for malaria microscopy?",
    "options": [
      "Giemsa stain",
      "Gram stain",
      "Ziehl-Neelsen stain",
      "PAS stain"
    ],
    "correctAnswer": 0,
    "explanation": "Giemsa highlights parasite nuclear and cytoplasmic features."
  },
  {
    "id": "malaria_diag_28",
    "axis": "diagnosis",
    "question": "What is the minimum examination time recommended before declaring a smear negative?",
    "options": [
      "At least 100 high-power fields",
      "10 high-power fields",
      "30 seconds",
      "One oil immersion field"
    ],
    "correctAnswer": 0,
    "explanation": "Adequate field examination reduces false negatives."
  },
  {
    "id": "malaria_diag_29",
    "axis": "diagnosis",
    "question": "Which laboratory finding supports malaria diagnosis but is not specific?",
    "options": [
      "Thrombocytopenia",
      "Eosinophilia",
      "Leukemoid reaction",
      "Hypercalcemia"
    ],
    "correctAnswer": 0,
    "explanation": "Thrombocytopenia is common but not diagnostic."
  },
  {
    "id": "malaria_diag_30",
    "axis": "diagnosis",
    "question": "Which diagnostic approach is recommended in non-endemic settings?",
    "options": [
      "Microscopy combined with RDT",
      "RDT alone",
      "PCR alone",
      "Serology"
    ],
    "correctAnswer": 0,
    "explanation": "Combining tests improves sensitivity and specificity."
  },
  {
    "id": "malaria_diag_31",
    "axis": "diagnosis",
    "question": "Why is serology not useful for acute malaria diagnosis?",
    "options": [
      "Antibodies persist long after infection",
      "Low sensitivity",
      "Cross-reactivity is minimal",
      "High cost"
    ],
    "correctAnswer": 0,
    "explanation": "Serology cannot distinguish past from current infection."
  },
  {
    "id": "malaria_diag_32",
    "axis": "diagnosis",
    "question": "Which diagnostic method is most useful for surveillance and elimination programs?",
    "options": [
      "PCR-based assays",
      "RDTs",
      "QBC",
      "Thin smear only"
    ],
    "correctAnswer": 0,
    "explanation": "PCR detects asymptomatic low-level infections."
  },
  {
    "id": "malaria_diag_33",
    "axis": "diagnosis",
    "question": "Which condition may lead to underestimation of parasitemia on microscopy?",
    "options": [
      "Sequestration of Plasmodium falciparum in microvasculature",
      "High fever",
      "Leukocytosis",
      "Splenomegaly"
    ],
    "correctAnswer": 0,
    "explanation": "Sequestered parasites are absent from peripheral blood."
  },
  {
    "id": "malaria_diag_34",
    "axis": "diagnosis",
    "question": "Which stage of Plasmodium falciparum is usually absent in peripheral blood?",
    "options": [
      "Mature schizonts",
      "Ring forms",
      "Early trophozoites",
      "Gametocytes"
    ],
    "correctAnswer": 0,
    "explanation": "Mature forms sequester in deep vascular beds."
  },
  {
    "id": "malaria_diag_35",
    "axis": "diagnosis",
    "question": "What is the main laboratory role of repeated blood smears?",
    "options": [
      "Increase diagnostic sensitivity over time",
      "Identify drug resistance",
      "Replace PCR testing",
      "Monitor antibody titers"
    ],
    "correctAnswer": 0,
    "explanation": "Parasitemia fluctuates, requiring repeated sampling."
  },
  {
    "id": "malaria_diag_36",
    "axis": "diagnosis",
    "question": "Which RDT antigen is pan-Plasmodium?",
    "options": [
      "Aldolase",
      "HRP2",
      "Pf-specific pLDH",
      "Circumsporozoite protein"
    ],
    "correctAnswer": 0,
    "explanation": "Aldolase is conserved across Plasmodium species."
  },
  {
    "id": "malaria_diag_37",
    "axis": "diagnosis",
    "question": "What is the primary use of quantitative parasitemia assessment?",
    "options": [
      "Assess disease severity and prognosis",
      "Confirm species identification",
      "Detect relapse",
      "Guide vector control"
    ],
    "correctAnswer": 0,
    "explanation": "High parasitemia correlates with severe disease."
  },
  {
    "id": "malaria_diag_38",
    "axis": "diagnosis",
    "question": "Which diagnostic feature suggests severe falciparum malaria?",
    "options": [
      "Parasitemia >5% of erythrocytes",
      "Presence of gametocytes",
      "Mixed infection",
      "Low parasite density"
    ],
    "correctAnswer": 0,
    "explanation": "High parasitemia is a severity marker."
  },
  {
    "id": "malaria_diag_39",
    "axis": "diagnosis",
    "question": "Which diagnostic test is least affected by operator expertise?",
    "options": [
      "Rapid diagnostic test",
      "Thin blood smear",
      "Thick blood smear",
      "QBC"
    ],
    "correctAnswer": 0,
    "explanation": "RDTs are standardized and easy to interpret."
  },
  {
    "id": "malaria_diag_40",
    "axis": "diagnosis",
    "question": "Which laboratory strategy is optimal for confirming malaria elimination?",
    "options": [
      "High-sensitivity molecular testing",
      "Routine microscopy only",
      "RDT screening",
      "Serological surveys"
    ],
    "correctAnswer": 0,
      "explanation": "Molecular tools detect residual transmission at very low levels."
    }
];

// 4. Diagnosis
// 5. Treatment
const treatmentQuestions = [
  {
    "id": "palu_treat_1",
    "axis": "treatment",
    "question": "Quel est le traitement de première intention recommandé par l’OMS pour le paludisme simple à Plasmodium falciparum ?",
    "options": [
      "Combinaisons Thérapeutiques à base d’Artémisinine (CTA)",
      "Chloroquine",
      "Quinine orale seule",
      "Sulfadoxine-Pyriméthamine"
    ],
    "correctAnswer": 0,
    "explanation": "Les CTA associent un dérivé de l’artémisinine à un partenaire à longue demi-vie pour prévenir les résistances."
  },
  {
    "id": "palu_treat_2",
    "axis": "treatment",
    "question": "Quelle CTA est largement utilisée en première ligne dans de nombreux pays africains ?",
    "options": [
      "Artéméther–Luméfantrine",
      "Artésunate–Méfloquine",
      "Artésunate–Sulfadoxine-Pyriméthamine",
      "Chloroquine–Primaquine"
    ],
    "correctAnswer": 0,
    "explanation": "L’association artéméther-luméfantrine est très répandue pour le paludisme non compliqué."
  },
  {
    "id": "palu_treat_3",
    "axis": "treatment",
    "question": "Quel est le traitement de référence du paludisme grave toutes espèces confondues ?",
    "options": [
      "Artésunate intraveineux",
      "Quinine intraveineuse en première intention",
      "Artéméther oral",
      "Chloroquine intraveineuse"
    ],
    "correctAnswer": 0,
    "explanation": "L’artésunate IV réduit significativement la mortalité par rapport à la quinine."
  },
  {
    "id": "palu_treat_4",
    "axis": "treatment",
    "question": "Quand la quinine IV est-elle encore utilisée dans le paludisme grave ?",
    "options": [
      "En absence ou indisponibilité de l’artésunate",
      "Chez tous les enfants",
      "Chez la femme enceinte au 2e trimestre",
      "Dans le paludisme simple"
    ],
    "correctAnswer": 0,
    "explanation": "La quinine reste une alternative si l’artésunate IV n’est pas disponible."
  },
  {
    "id": "palu_treat_5",
    "axis": "treatment",
    "question": "Quelle est la durée habituelle d’un traitement par CTA dans le paludisme simple ?",
    "options": [
      "3 jours",
      "1 jour",
      "5 jours",
      "7 jours"
    ],
    "correctAnswer": 0,
    "explanation": "La majorité des CTA sont administrées sur 3 jours."
  },
  {
    "id": "palu_treat_6",
    "axis": "treatment",
    "question": "Quel médicament est indispensable pour la cure radicale de P. vivax et P. ovale ?",
    "options": [
      "Primaquine",
      "Artéméther",
      "Quinine",
      "Luméfantrine"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine élimine les hypnozoïtes hépatiques responsables des rechutes."
  },
  {
    "id": "palu_treat_7",
    "axis": "treatment",
    "question": "Quel test doit impérativement être réalisé avant l’administration de primaquine ?",
    "options": [
      "Dépistage du déficit en G6PD",
      "Test de grossesse",
      "Bilan hépatique",
      "Groupage sanguin"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine peut provoquer une hémolyse sévère chez les sujets déficitaires en G6PD."
  },
  {
    "id": "palu_treat_8",
    "axis": "treatment",
    "question": "Pourquoi la primaquine est-elle contre-indiquée chez la femme enceinte ?",
    "options": [
      "Risque d’hémolyse fœtale en cas de déficit G6PD",
      "Risque tératogène majeur",
      "Inefficacité sur les hypnozoïtes",
      "Risque d’hypoglycémie"
    ],
    "correctAnswer": 0,
    "explanation": "Le statut G6PD du fœtus est inconnu, exposant à une hémolyse grave."
  },
  {
    "id": "palu_treat_9",
    "axis": "treatment",
    "question": "Quel est le traitement recommandé du paludisme simple chez la femme enceinte au 2e et 3e trimestre ?",
    "options": [
      "CTA à base d’artémisinine",
      "Primaquine",
      "Doxycycline",
      "Méfloquine seule"
    ],
    "correctAnswer": 0,
    "explanation": "Les CTA sont sûres et efficaces après le premier trimestre."
  },
  {
    "id": "palu_treat_10",
    "axis": "treatment",
    "question": "Quel est le traitement recommandé du paludisme simple au 1er trimestre de la grossesse ?",
    "options": [
      "Quinine + Clindamycine",
      "CTA",
      "Primaquine",
      "Doxycycline"
    ],
    "correctAnswer": 0,
    "explanation": "Les CTA sont évitées au 1er trimestre par précaution."
  },
  {
    "id": "palu_treat_11",
    "axis": "treatment",
    "question": "Quelle chimioprophylaxie est contre-indiquée chez la femme enceinte ?",
    "options": [
      "Doxycycline",
      "Méfloquine",
      "Atovaquone-Proguanil",
      "Chloroquine"
    ],
    "correctAnswer": 0,
    "explanation": "La doxycycline est tératogène et contre-indiquée pendant la grossesse."
  },
  {
    "id": "palu_treat_12",
    "axis": "treatment",
    "question": "Quel antipaludique prophylactique est contre-indiqué chez l’enfant de moins de 8 ans ?",
    "options": [
      "Doxycycline",
      "Méfloquine",
      "Atovaquone-Proguanil",
      "Chloroquine"
    ],
    "correctAnswer": 0,
    "explanation": "La doxycycline expose à des anomalies dentaires et osseuses."
  },
  {
    "id": "palu_treat_13",
    "axis": "treatment",
    "question": "Quelle est la principale contre-indication de la méfloquine en prophylaxie ?",
    "options": [
      "Antécédents psychiatriques ou neurologiques",
      "Grossesse",
      "Insuffisance rénale",
      "Déficit en G6PD"
    ],
    "correctAnswer": 0,
    "explanation": "La méfloquine peut induire des effets neuropsychiatriques sévères."
  },
  {
    "id": "palu_treat_14",
    "axis": "treatment",
    "question": "Quel est l’avantage principal de l’atovaquone-proguanil en prophylaxie du voyageur ?",
    "options": [
      "Bonne tolérance et prise courte après le retour",
      "Faible coût",
      "Utilisation mensuelle",
      "Efficacité sur les hypnozoïtes"
    ],
    "correctAnswer": 0,
    "explanation": "La prophylaxie est poursuivie seulement 7 jours après le retour."
  },
  {
    "id": "palu_treat_15",
    "axis": "treatment",
    "question": "Quand la chimioprophylaxie antipaludique doit-elle être débutée avant le voyage ?",
    "options": [
      "Selon la molécule, de quelques jours à 2 semaines avant le départ",
      "Le jour du départ uniquement",
      "Après l’arrivée en zone endémique",
      "Uniquement au retour"
    ],
    "correctAnswer": 0,
    "explanation": "Certaines molécules comme la méfloquine nécessitent une introduction précoce."
  },
  {
    "id": "palu_treat_16",
    "axis": "treatment",
    "question": "Quel traitement doit être instauré après la phase IV dans le paludisme grave ?",
    "options": [
      "Relais par CTA orale complète",
      "Arrêt de tout traitement",
      "Primaquine immédiate",
      "Chloroquine seule"
    ],
    "correctAnswer": 0,
    "explanation": "Un relais oral est indispensable pour éradiquer les parasites résiduels."
  },
  {
    "id": "palu_treat_17",
    "axis": "treatment",
    "question": "Pourquoi les monothérapies à base d’artémisinine sont-elles proscrites ?",
    "options": [
      "Risque élevé de résistance parasitaire",
      "Faible efficacité clinique",
      "Toxicité cardiaque",
      "Absence d’action schizonticide"
    ],
    "correctAnswer": 0,
    "explanation": "Les monothérapies favorisent l’émergence de résistances."
  },
  {
    "id": "palu_treat_18",
    "axis": "treatment",
    "question": "Quel est l’objectif principal du traitement antipaludique ?",
    "options": [
      "Éliminer rapidement les parasites et prévenir les complications",
      "Réduire uniquement la fièvre",
      "Prévenir les piqûres de moustiques",
      "Stimuler la réponse immunitaire"
    ],
    "correctAnswer": 0,
    "explanation": "L’élimination parasitaire rapide réduit la mortalité et la transmission."
  },
  {
    "id": "palu_treat_19",
    "axis": "treatment",
    "question": "Quel traitement est indiqué pour bloquer la transmission du paludisme ?",
    "options": [
      "Primaquine à dose gamétocytocide",
      "Quinine",
      "Doxycycline",
      "Atovaquone seule"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine élimine les gamétocytes de P. falciparum."
  },
  {
    "id": "palu_treat_20",
    "axis": "treatment",
    "question": "Quelle mesure est essentielle en complément du traitement médicamenteux ?",
    "options": [
      "Lutte antivectorielle et moustiquaires imprégnées",
      "Vaccination systématique",
      "Antibiothérapie large",
      "Corticothérapie"
    ],
    "correctAnswer": 0,
    "explanation": "La prévention des piqûres réduit la transmission."
  },

  {
    "id": "palu_treat_21",
    "axis": "treatment",
    "question": "Quel antipaludique est historiquement associé au risque d’hypoglycémie en traitement du paludisme grave ?",
    "options": [
      "Quinine",
      "Artésunate",
      "Primaquine",
      "Luméfantrine"
    ],
    "correctAnswer": 0,
    "explanation": "La quinine stimule la sécrétion d’insuline."
  },
  {
    "id": "palu_treat_22",
    "axis": "treatment",
    "question": "Quel est le traitement recommandé du paludisme simple à P. vivax en zone de résistance à la chloroquine ?",
    "options": [
      "CTA + Primaquine (si G6PD normal)",
      "Chloroquine seule",
      "Quinine IV",
      "Doxycycline seule"
    ],
    "correctAnswer": 0,
    "explanation": "Les CTA traitent la phase sanguine en cas de résistance."
  },
  {
    "id": "palu_treat_23",
    "axis": "treatment",
    "question": "Quel médicament prophylactique doit être poursuivi 4 semaines après le retour ?",
    "options": [
      "Doxycycline",
      "Atovaquone-Proguanil",
      "Chloroquine",
      "Primaquine"
    ],
    "correctAnswer": 0,
    "explanation": "La doxycycline agit uniquement sur les formes sanguines."
  },
  {
    "id": "palu_treat_24",
    "axis": "treatment",
    "question": "Quel est le principal effet indésirable digestif de l’artéméther-luméfantrine ?",
    "options": [
      "Nausées et vomissements",
      "Ulcère gastrique",
      "Hémorragie digestive",
      "Constipation sévère"
    ],
    "correctAnswer": 0,
    "explanation": "Les troubles digestifs sont fréquents mais généralement modérés."
  },
  {
    "id": "palu_treat_25",
    "axis": "treatment",
    "question": "Quelle stratégie est recommandée chez un patient vomissant après prise orale d’ACT ?",
    "options": [
      "Répéter la dose si vomissement précoce",
      "Arrêter le traitement",
      "Passer immédiatement à la primaquine",
      "Attendre sans intervention"
    ],
    "correctAnswer": 0,
    "explanation": "La dose doit être reprise si elle n’a pas été absorbée."
  },
  {
    "id": "palu_treat_26",
    "axis": "treatment",
    "question": "Quel antipaludique est contre-indiqué chez les patients épileptiques ?",
    "options": [
      "Méfloquine",
      "Atovaquone-Proguanil",
      "Chloroquine",
      "Artéméther"
    ],
    "correctAnswer": 0,
    "explanation": "La méfloquine peut abaisser le seuil épileptogène."
  },
  {
    "id": "palu_treat_27",
    "axis": "treatment",
    "question": "Quel traitement est recommandé pour le paludisme à P. falciparum chez l’enfant ?",
    "options": [
      "CTA adaptée au poids",
      "Chloroquine",
      "Primaquine seule",
      "Doxycycline"
    ],
    "correctAnswer": 0,
    "explanation": "Les CTA sont efficaces et sûres chez l’enfant."
  },
  {
    "id": "palu_treat_28",
    "axis": "treatment",
    "question": "Quel est le rôle principal de la chimioprophylaxie chez le voyageur ?",
    "options": [
      "Prévenir les formes graves et mortelles",
      "Empêcher toute infection",
      "Remplacer les mesures antivectorielles",
      "Guérir une infection latente"
    ],
    "correctAnswer": 0,
    "explanation": "La prophylaxie réduit le risque de paludisme sévère."
  },
  {
    "id": "palu_treat_29",
    "axis": "treatment",
    "question": "Quel antipaludique est actif sur les formes hépatiques précoces (schizonts hépatiques) ?",
    "options": [
      "Atovaquone-Proguanil",
      "Chloroquine",
      "Quinine",
      "Luméfantrine"
    ],
    "correctAnswer": 0,
    "explanation": "L’atovaquone-proguanil agit sur les stades hépatiques précoces."
  },
  {
    "id": "palu_treat_30",
    "axis": "treatment",
    "question": "Pourquoi la chloroquine n’est-elle plus recommandée pour P. falciparum dans de nombreuses régions ?",
    "options": [
      "Résistance parasitaire élevée",
      "Toxicité hépatique",
      "Inefficacité sur les trophozoïtes",
      "Coût élevé"
    ],
    "correctAnswer": 0,
    "explanation": "La résistance de P. falciparum à la chloroquine est largement répandue."
  },
  {
    "id": "palu_treat_31",
    "axis": "treatment",
    "question": "Quelle est la durée classique de la cure radicale par primaquine ?",
    "options": [
      "14 jours",
      "3 jours",
      "5 jours",
      "28 jours"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine est administrée classiquement pendant 14 jours."
  },
  {
    "id": "palu_treat_32",
    "axis": "treatment",
    "question": "Quel traitement est recommandé chez un patient G6PD déficient atteint de P. vivax ?",
    "options": [
      "Traitement de la phase sanguine sans primaquine",
      "Primaquine à dose standard",
      "Double dose de primaquine",
      "Doxycycline seule"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine est contre-indiquée en cas de déficit sévère en G6PD."
  },
  {
    "id": "palu_treat_33",
    "axis": "treatment",
    "question": "Quel est l’objectif principal des CTA associant deux molécules ?",
    "options": [
      "Réduire la sélection de souches résistantes",
      "Augmenter la toxicité parasitaire",
      "Prolonger la durée du traitement",
      "Couvrir les infections bactériennes"
    ],
    "correctAnswer": 0,
    "explanation": "L’association limite l’émergence de résistances."
  },
  {
    "id": "palu_treat_34",
    "axis": "treatment",
    "question": "Quelle molécule est utilisée en prévention intermittente du paludisme chez la femme enceinte en zone endémique ?",
    "options": [
      "Sulfadoxine-Pyriméthamine",
      "Chloroquine",
      "Méfloquine",
      "Primaquine"
    ],
    "correctAnswer": 0,
    "explanation": "La prévention intermittente repose sur la sulfadoxine-pyriméthamine."
  },
  {
    "id": "palu_treat_35",
    "axis": "treatment",
    "question": "Quelle est la première mesure thérapeutique devant un paludisme grave ?",
    "options": [
      "Hospitalisation urgente et traitement IV",
      "Traitement oral ambulatoire",
      "Chimioprophylaxie",
      "Surveillance simple"
    ],
    "correctAnswer": 0,
    "explanation": "Le paludisme grave est une urgence vitale."
  },
  {
    "id": "palu_treat_36",
    "axis": "treatment",
    "question": "Quel antipaludique peut provoquer des troubles du rythme cardiaque (QT long) ?",
    "options": [
      "Luméfantrine",
      "Primaquine",
      "Atovaquone",
      "Doxycycline"
    ],
    "correctAnswer": 0,
    "explanation": "La luméfantrine peut allonger l’intervalle QT."
  },
  {
    "id": "palu_treat_37",
    "axis": "treatment",
    "question": "Quel est le rôle du traitement antipaludique dans la santé publique ?",
    "options": [
      "Réduire la morbidité, la mortalité et la transmission",
      "Éradiquer les moustiques",
      "Remplacer la prévention",
      "Induire une immunité définitive"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement participe au contrôle global du paludisme."
  },
  {
    "id": "palu_treat_38",
    "axis": "treatment",
    "question": "Quel antipaludique est contre-indiqué chez le nourrisson allaité par une mère G6PD déficiente ?",
    "options": [
      "Primaquine",
      "Artéméther",
      "Luméfantrine",
      "Atovaquone"
    ],
    "correctAnswer": 0,
    "explanation": "La primaquine peut induire une hémolyse chez le nourrisson."
  },
  {
    "id": "palu_treat_39",
    "axis": "treatment",
    "question": "Quel est le principal message de l’OMS concernant le traitement du paludisme ?",
    "options": [
      "Diagnostic parasitologique avant traitement",
      "Traitement empirique systématique",
      "Utilisation exclusive de la chloroquine",
      "Traitement prophylactique universel"
    ],
    "correctAnswer": 0,
    "explanation": "Le traitement doit être guidé par un diagnostic confirmé."
  },
  {
    "id": "palu_treat_40",
    "axis": "treatment",
    "question": "Quelle combinaison est recommandée en alternative en cas d’échec d’une CTA ?",
    "options": [
      "Une autre CTA avec partenaire différent",
      "Chloroquine seule",
      "Primaquine seule",
      "Arrêt du traitement"
    ],
    "correctAnswer": 0,
      "explanation": "Changer de combinaison limite les résistances et assure l'efficacité."
    }
];

// Export all questions
export const questions = [
  ...morphologyQuestions,
  ...lifecycleQuestions,
  ...clinicalQuestions,
  ...diagnosisQuestions,
  ...treatmentQuestions
];
