// data/categories/techniques/prelevements.js

export const questions = [
  // =========================
  // PARTIE 1 : BASES & CONSERVATEURS
  // =========================
  {
    id: "tech_prec_1",
    axis: "prelevement",
    question: "Le MIF (Méthanol, Iodure, Formol) est utilisé pour :",
    options: ["Conserver les œufs et kystes tout en permettant coloration", "Conserver uniquement les larves vivantes", "Fixer les frottis sanguins uniquement", "Neutraliser les parasites et tuer toutes bactéries"],
    correctAnswer: 0,
    explanation: "Le MIF préserve la morphologie des œufs et kystes pour examen microscopique et tolère certaines colorations."
  },
  {
    id: "tech_prec_2",
    axis: "prelevement",
    question: "Le Formol 10 % est particulièrement utile pour :",
    options: ["Fixer et conserver les échantillons sur le long terme", "Maintenir la viabilité des protozoaires", "Favoriser la motilité des larves", "Réduire les spores bactériennes uniquement"],
    correctAnswer: 0,
    explanation: "Le formol fixe efficacement les structures parasitaires mais ne conserve pas la motilité."
  },
  {
    id: "tech_prec_3",
    axis: "prelevement",
    question: "Le PVA (Polyvinyl Alcohol) est utilisé pour :",
    options: ["Préparer des frottis permanents pour protozoaires", "Conserver uniquement les œufs d’helminthes", "Transporter le sang infecté par filaires", "Désinfecter le matériel de laboratoire"],
    correctAnswer: 0,
    explanation: "Le PVA permet la fixation et coloration de protozoaires dans des frottis permanents."
  },
  {
    id: "tech_prec_4",
    axis: "prelevement",
    question: "Le SAF (Sodium Acétate - Acide acétique - Formol) est adapté pour :",
    options: ["Conserver à long terme les protozoaires et kystes", "Conserver uniquement les larves d’Ascaris", "Préparer des cultures bactériennes", "Neutraliser les toxines virales"],
    correctAnswer: 0,
    explanation: "Le SAF stabilise les kystes et protozoaires pour examen différé."
  },
  {
    id: "tech_prec_5",
    axis: "prelevement",
    question: "Quelle est la limite principale du MIF ?",
    options: ["Ne conserve pas la motilité des trophozoïtes", "Ne fixe pas les œufs d’helminthes", "Détruit tous les protozoaires", "Provoque une coloration artificielle des larves"],
    correctAnswer: 0,
    explanation: "Le MIF conserve la morphologie mais tue les parasites, rendant les trophozoïtes immobiles."
  },
  {
    id: "tech_prec_6",
    axis: "prelevement",
    question: "Quelle est la limite du Formol 10 % ?",
    options: ["Impossible de colorer certains protozoaires correctement", "Ne fixe pas les œufs d’helminthes", "Tue les bactéries uniquement", "Favorise la multiplication des parasites"],
    correctAnswer: 0,
    explanation: "Le formol fixe bien mais peut interférer avec la qualité de certaines colorations permanentes (Trichrome)."
  },
  {
    id: "tech_repeat_1",
    axis: "prelevement",
    question: "Pour diagnostiquer Giardia et Entamoeba, la règle des 3 selles consiste à :",
    options: ["Examiner trois prélèvements consécutifs à intervalle de 24-48h", "Examiner une seule selle", "Faire un prélèvement sanguin", "Utiliser uniquement la coproculture"],
    correctAnswer: 0,
    explanation: "Les protozoaires sont excrétés de façon intermittente (phase muette), donc la répétition augmente la sensibilité."
  },
  {
    id: "tech_repeat_2",
    axis: "prelevement",
    question: "Le délai optimal entre les trois prélèvements de selles est :",
    options: ["2 à 3 jours", "1 heure", "Une semaine", "Un mois"],
    correctAnswer: 0,
    explanation: "Cet intervalle permet de couvrir les variations d'excrétion kystique."
  },
  {
    id: "tech_blood_1",
    axis: "biologie",
    question: "Wuchereria bancrofti présente une microfilaraémie maximale :",
    options: ["La nuit (entre 22h et 2h)", "Le jour (entre 10h et 14h)", "Au lever du soleil", "En permanence (Aperiodique)"],
    correctAnswer: 0,
    explanation: "La périodicité nocturne correspond à l'activité des moustiques vecteurs (Culex/Anophèles)."
  },
  {
    id: "tech_blood_2",
    axis: "biologie",
    question: "Loa loa présente une microfilaraémie maximale :",
    options: ["Le jour (entre 10h et 14h)", "La nuit", "Au coucher du soleil", "En permanence"],
    correctAnswer: 0,
    explanation: "La périodicité diurne correspond à l'activité du vecteur Chrysops (taon)."
  },
  {
    id: "tech_safety_1",
    axis: "prelevement",
    question: "Lors de la manipulation de selles fraîches, le risque biologique principal est :",
    options: ["Ingestion accidentelle de kystes/œufs infectants", "Inhalation d'aérosols", "Piqûre accidentelle", "Irradiation"],
    correctAnswer: 0,
    explanation: "Le péril fécal (mains sales portée à la bouche) est le risque majeur au laboratoire de parasito."
  },
  {
    id: "tech_safety_2",
    axis: "prelevement",
    question: "Pourquoi l'usage de gants est-il obligatoire en parasitologie ?",
    options: ["Pour éviter la contamination cutanée et manuportée", "Pour garder les mains propres", "Pour éviter de tacher les documents", "Pour protéger les parasites"],
    correctAnswer: 0,
    explanation: "Les gants sont la barrière primaire contre les agents biologiques infectieux."
  },

  // =========================
  // PARTIE 2 : TRANSPORT & ERREURS (Votre ajout)
  // =========================
  {
    id: "prelevement_1",
    axis: "prelevement",
    question: "Une selle doit être rejetée si :",
    options: ["Elle est mélangée à de l’urine ou du sang frais non prévu", "Elle est légèrement humide", "Prélevée dans un récipient propre", "Stockée à température ambiante pendant 30 minutes"],
    correctAnswer: 0,
    explanation: "Les contaminations par l’urine peuvent altérer la morphologie des kystes et œufs, entraînant un diagnostic faussement négatif."
  },
  {
    id: "prelevement_2",
    axis: "prelevement",
    question: "Une selle doit être rejetée si :",
    options: ["Le délai entre prélèvement et fixation dépasse 2 heures sans conservateur", "Le délai est de 1 heure", "Elle est prélevée dans un récipient stérile", "Le patient a pris un repas léger"],
    correctAnswer: 0,
    explanation: "Sans conservateur, les trophozoïtes se dégradent rapidement, compromettant l’analyse microscopique."
  },
  {
    id: "prelevement_3",
    axis: "prelevement",
    question: "Le transport des selles doit se faire idéalement :",
    options: ["À température ambiante si délai court ou à +4°C pour délai prolongé", "Toujours à -20°C", "À chaleur élevée pour conserver la motilité", "Dans un congélateur portable"],
    correctAnswer: 0,
    explanation: "Les températures extrêmes détruisent les trophozoïtes ou altèrent la morphologie des œufs/kystes."
  },
  {
    id: "prelevement_4",
    axis: "prelevement",
    question: "Le scotch-test pour oxyurose peut échouer si :",
    options: ["Le patient s’est lavé ou a utilisé du talc avant le prélèvement", "Le test est fait le matin", "Le ruban adhésif est collé sur le doigt du patient", "Le test est fait avant le petit-déjeuner"],
    correctAnswer: 0,
    explanation: "Le lavage ou talc retire les œufs à la surface de l’anus, réduisant la sensibilité du test."
  },
  {
    id: "prelevement_5",
    axis: "prelevement",
    question: "Pour le Snip-test cutané (biopsie de microfilaires), la condition essentielle est :",
    options: ["Prélever sans saignement important pour ne pas diluer le tissu", "Prendre une coupe profonde avec saignement", "Faire le test après antibiothérapie", "Prélever dans la veine périphérique"],
    correctAnswer: 0,
    explanation: "Le sang peut diluer la microfilaraémie locale et rendre le test faussement négatif."
  },
  {
    id: "prelevement_6",
    axis: "prelevement",
    question: "Après un déversement accidentel de sang infecté sur le plan de travail, il faut :",
    options: ["Désinfecter avec de la Javel et respecter le temps de contact indiqué", "Essuyer avec du papier sec seulement", "Rincer immédiatement à l’eau sans désinfectant", "Mettre le prélèvement à l’ombre"],
    correctAnswer: 0,
    explanation: "La Javel à la bonne concentration et le temps de contact adéquat détruisent les agents pathogènes et limitent le risque biologique."
  },
  {
    id: "biologie_1",
    axis: "biologie",
    question: "Lors de la manipulation de sang pour filarioses, la précaution spécifique est :",
    options: ["Traiter le sang comme potentiellement infecté par VIH/Hépatite", "Aucune précaution si l’animal hôte est sain", "Mettre le tube directement au congélateur", "Porter uniquement des gants"],
    correctAnswer: 0,
    explanation: "Tout échantillon sanguin humain peut contenir des virus transmissibles, il faut appliquer les précautions universelles."
  },
  {
    id: "biologie_2",
    axis: "biologie",
    question: "L’usage de gants et blouse est obligatoire car :",
    options: ["Tout contact direct avec le sang ou les selles représente un risque biologique", "C’est une formalité administrative uniquement", "Pour éviter de se salir", "Pour ne pas altérer les échantillons"],
    correctAnswer: 0,
    explanation: "Les protections limitent le risque de contamination et d’infection du personnel."
  },
  {
    id: "biologie_3",
    axis: "biologie",
    question: "Les tubes contenant des échantillons doivent être manipulés :",
    options: ["Avec précaution, bouchons fermés, et si possible dans une cage de sécurité biologique", "Ouverts pour faciliter le pipetage", "Dans un congélateur domestique", "Sans aucun protocole"],
    correctAnswer: 0,
    explanation: "La manipulation dans un environnement sécurisé limite le risque d’aérosolisation ou de projection."
  },
  {
    id: "biologie_4",
    axis: "biologie",
    question: "Le transport des échantillons sanguins infectieux doit se faire :",
    options: ["Dans des contenants hermétiques et étiquetés selon les règles de biosécurité", "Dans des sacs en plastique ordinaires", "À température ambiante sans protection", "Avec congélation immédiate"] ,
    correctAnswer: 0,
    explanation: "Les contenants hermétiques et étiquetés préviennent la contamination et respectent la réglementation des substances infectieuses."
  },
  {
    id: "biologie_5",
    axis: "biologie",
    question: "La réfrigération à +4°C est conseillée pour :",
    options: ["Les échantillons de selles pour protozoaires sensibles", "Les kystes résistants", "Les frottis permanents", "Les prélèvements scotch-test"],
    correctAnswer: 0,
    explanation: "Certains protozoaires se conservent mieux à basse température pour maintenir la morphologie avant examen."
  },
  {
    id: "biologie_6",
    axis: "biologie",
    question: "Un échantillon sanguin prélevé hors période de pic microfilaire peut donner :",
    options: ["Faux négatif", "Faux positif", "Résultat toujours correct", "Aucune incidence sur le test"],
    correctAnswer: 0,
    explanation: "Les microfilaires ont une périodicité spécifique (jour/nuit) ; un prélèvement hors pic peut ne pas détecter l’infestation."
  },
  {
    id: "biologie_7",
    axis: "biologie",
    question: "L’utilisation de pipettes automatiques pour manipuler le sang permet :",
    options: ["De limiter les risques d’aérosolisation et contact direct", "D’accélérer le test sans bénéfice sécuritaire", "D’éviter toute désinfection", "De remplacer le port de gants"],
    correctAnswer: 0,
    explanation: "Les pipettes automatiques réduisent l’exposition directe aux échantillons infectieux."
  },
  {
    id: "prelevement_7",
    axis: "prelevement",
    question: "Une erreur fréquente au scotch-test est :",
    options: ["Faire le prélèvement après toilette anale ou usage de talc", "Utiliser un ruban adhésif transparent", "Faire le test le matin", "Noter la date du prélèvement"],
    correctAnswer: 0,
    explanation: "Le lavage ou talc retire les œufs à la surface de l’anus, diminuant la sensibilité."
  },
  {
    id: "prelevement_8",
    axis: "prelevement",
    question: "Une erreur fréquente lors du transport de selles est :",
    options: ["Ne pas utiliser de conservateur si le délai > 2h", "Transporter dans un récipient fermé", "Maintenir à température ambiante pour <2h", "Indiquer le nom du patient"],
    correctAnswer: 0,
    explanation: "Sans conservateur, les trophozoïtes se dégradent rapidement, compromettant l’examen."
  },
  {
    id: "prelevement_9",
    axis: "prelevement",
    question: "Pour garantir la qualité, le laboratoire doit :",
    options: ["Documenter le délai, conditions et identification de chaque échantillon", "Examiner sans consigner le prélèvement", "Stocker tous les échantillons ensemble sans étiquetage", "Jeter tout prélèvement après 24h systématiquement"],
    correctAnswer: 0,
    explanation: "La traçabilité assure la fiabilité des résultats et la sécurité."
  },
  {
    id: "prelevement_10",
    axis: "prelevement",
    question: "Le rejet d’échantillons contaminés ou mal collectés permet :",
    options: ["D’éviter des résultats faussement négatifs ou positifs", "De gagner du temps uniquement", "D’éliminer l’échantillon inutilement", "D’augmenter la charge de travail"],
    correctAnswer: 0,
    explanation: "Rejeter les échantillons non conformes protège la qualité du diagnostic."
  },
  {
    id: "biologie_8",
    axis: "biologie",
    question: "Lors de tout incident biologique, la procédure standard est :",
    options: ["Notifier, désinfecter et consigner l’incident", "Ignorer si mineur", "Noter seulement si le patient est infecté", "Alerter uniquement la direction"],
    correctAnswer: 0,
    explanation: "La gestion des incidents assure la sécurité du personnel et la traçabilité."
  },
  {
    id: "biologie_9",
    axis: "biologie",
    question: "Le port de lunettes et masque est obligatoire pour :",
    options: ["Tout traitement d’échantillon pouvant générer des éclaboussures", "Uniquement lors d’analyses chimiques", "Pour le confort du personnel", "Non requis si gants portés"],
    correctAnswer: 0,
    explanation: "Les éclaboussures peuvent transporter des agents infectieux, d’où le port obligatoire d’EPI."
  },
  {
    id: "biologie_10",
    axis: "biologie",
    question: "Le respect strict des protocoles assure :",
    options: ["La qualité des analyses et la sécurité biologique", "Uniquement la rapidité", "Le confort du personnel", "La conformité administrative uniquement"],
    correctAnswer: 0,
    explanation: "La qualité et la sécurité dépendent de la conformité aux protocoles de prélèvement et de manipulation."
  }
];