const control_prevention = [
  // --- LUTTE CHIMIQUE (INSECTICIDES) ---
  {
    id: 'ctrl_1',
    question: "Quelle est la famille d'insecticides la plus utilisée pour l'imprégnation des moustiquaires (MILD) ?",
    options: ["Les Pyréthrinoïdes (ex: Perméthrine, Deltaméthrine)", "Les Organochlorés (DDT)", "Les Organophosphorés", "Les Carbamates"],
    correct: 0,
    explanation: "Ils sont préférés pour leur effet 'choc' (Knock-down) rapide, leur faible toxicité pour l'homme et leur rémanence sur le tissu."
  },
  {
    id: 'ctrl_2',
    question: "Le DDT (Dichloro-Diphényl-Trichloroéthane) est un insecticide organochloré qui a été :",
    options: ["Interdit dans la plupart des pays pour son impact environnemental, mais reste autorisé par l'OMS pour la Pulvérisation Intra-Domiciliaire (PID) dans certains cas de paludisme", "Totalement interdit partout sans exception", "Recommandé pour l'agriculture", "Jamais utilisé"],
    correct: 0,
    explanation: "Son usage est restreint à la santé publique stricte (murs intérieurs) car il est très rémanent et efficace, malgré sa mauvaise réputation écologique."
  },
  {
    id: 'ctrl_3',
    question: "La Pulvérisation Intra-Domiciliaire (PID/IRS) consiste à :",
    options: ["Appliquer un insecticide rémanent sur les murs intérieurs et plafonds des maisons où les moustiques se reposent (Endophiles)", "Vaporiser dans l'air", "Traiter l'eau", "Traiter les animaux"],
    correct: 0,
    explanation: "Le but est de tuer le moustique après son repas sanguin, quand il est lourd et se pose sur le mur pour digérer."
  },
  {
    id: 'ctrl_4',
    question: "Les larvicides sont utilisés pour :",
    options: ["Tuer les stades aquatiques (larves) dans les gîtes de reproduction", "Tuer les adultes en vol", "Repousser les moustiques", "Stériliser les mâles"],
    correct: 0,
    explanation: "C'est la méthode de choix quand les gîtes sont peu nombreux, fixes et accessibles (ex: puits, citernes)."
  },
  {
    id: 'ctrl_5',
    question: "Le Téméphos (Abate) est un larvicide organophosphoré célèbre car :",
    options: ["Il a été massivement utilisé dans les rivières contre les Simulies (Onchocercose) et dans l'eau de boisson (à faible dose) contre le Ver de Guinée/Dengue", "Il est gazeux", "Il est naturel", "Il est bleu"],
    correct: 0,
    explanation: "Il est peu toxique pour les mammifères, permettant son usage dans l'eau potable à très faible concentration."
  },
  
  // --- LUTTE BIOLOGIQUE ---
  {
    id: 'ctrl_6',
    question: "Le Bacillus thuringiensis israelensis (Bti) est :",
    options: ["Une bactérie produisant une toxine spécifique qui tue les larves de moustiques/simulies par destruction de leur intestin", "Un virus", "Un champignon", "Un prédateur"],
    correct: 0,
    explanation: "C'est le larvicide biologique de référence. Il est très spécifique (ne tue pas les poissons ni les abeilles) et écologique."
  },
  {
    id: 'ctrl_7',
    question: "Les poissons larvivores (ex: Gambusia affinis, Guppy) sont utilisés pour :",
    options: ["Manger les larves de moustiques dans les réservoirs d'eau, puits ou mares", "Décorer", "Manger les algues", "Tuer les adultes"],
    correct: 0,
    explanation: "Méthode biologique efficace et durable pour les gîtes permanents."
  },
  {
    id: 'ctrl_8',
    question: "L'introduction de mâles stériles (TIS - Technique de l'Insecte Stérile) vise à :",
    options: ["Lâcher des millions de mâles irradiés qui s'accouplent avec les femelles sauvages sans descendance, effondrant la population", "Tuer les femelles directement", "Faire peur aux moustiques", "Polliniser"],
    correct: 0,
    explanation: "Utilisé avec succès contre la mouche bouchère (Cochliomyia) et en test contre les moustiques."
  },

  // --- PROTECTION PERSONNELLE (PROPHYLAXIE INDIVIDUELLE) ---
  {
    id: 'ctrl_9',
    question: "Le DEET (Diéthyltoluamide) est :",
    options: ["La substance active de référence des répulsifs cutanés (sprays anti-moustiques)", "Un insecticide qui tue", "Un parfum", "Une crème solaire"],
    correct: 0,
    explanation: "Il brouille les récepteurs olfactifs du moustique. Efficace mais dissout les plastiques."
  },
  {
    id: 'ctrl_10',
    question: "L'icaridine (Picaridine) est une alternative au DEET qui a l'avantage de :",
    options: ["Ne pas abîmer les plastiques/synthétiques, être inodore et bien tolérée", "Être naturelle", "Tuer le moustique", "Être gratuite"],
    correct: 0,
    explanation: "Recommandée par l'OMS au même titre que le DEET."
  },
  {
    id: 'ctrl_11',
    question: "L'IR3535 est un répulsif souvent utilisé :",
    options: ["Dans les produits pour enfants et femmes enceintes (bonne tolérance)", "Pour les animaux", "Pour les vêtements", "Pour les murs"],
    correct: 0,
    explanation: "Attention, son efficacité est parfois jugée un peu inférieure au DEET en zone tropicale intense."
  },
  {
    id: 'ctrl_12',
    question: "L'imprégnation des vêtements (Perméthrine) est recommandée car :",
    options: ["40% des piqûres se font à travers les tissus, et cela protège les zones du corps couvertes", "Le tissu repousse naturellement", "C'est à la mode", "Ça sent bon"],
    correct: 0,
    explanation: "Indispensable en zone à risque (militaires, voyageurs), surtout contre les vecteurs diurnes (Aedes, Tsé-tsé)."
  },
  {
    id: 'ctrl_13',
    question: "La moustiquaire imprégnée d'insecticide à longue durée (MILD/LLIN) garde son efficacité :",
    options: ["3 ans ou 20 lavages (l'insecticide est intégré dans la fibre)", "1 mois", "1 semaine", "A vie"],
    correct: 0,
    explanation: "C'est l'outil roi de la lutte contre le paludisme en Afrique."
  },

  // --- LUTTE ENVIRONNEMENTALE (ASSAINISSEMENT) ---
  {
    id: 'ctrl_14',
    question: "La gestion de l'environnement pour lutter contre le paludisme inclut :",
    options: ["Le drainage des marécages, le comblement des flaques, et la modification du régime des eaux", "Couper les arbres", "Tuer les oiseaux", "Brûler l'herbe"],
    correct: 0,
    explanation: "Historiquement très efficace (ex: Italie, Panama) mais coûteux et complexe (génie civil)."
  },
  {
    id: 'ctrl_15',
    question: "Pour lutter contre Aedes aegypti (Dengue), l'action communautaire clé est :",
    options: ["La destruction/couverture des petits gîtes péridomestiques (pneus, soucoupes, bidons) qui retiennent l'eau de pluie", "Le drainage des rivières", "La moustiquaire de lit", "Le vaccin"],
    correct: 0,
    explanation: "Comme il vit chez nous, c'est à nous de nettoyer. 'Pas d'eau stagnante = Pas d'Aedes'."
  },
  {
    id: 'ctrl_16',
    question: "La lutte contre les mouches domestiques repose sur :",
    options: ["La gestion correcte des ordures ménagères et des latrines (empêcher l'accès pour la ponte)", "Les insecticides seuls", "Les pièges seuls", "Rien"],
    correct: 0,
    explanation: "L'hygiène publique est la base. Les insecticides ne suffisent pas face à leur reproduction explosive."
  },

  // --- RÉSISTANCE AUX INSECTICIDES ---
  {
    id: 'ctrl_17',
    question: "La résistance métabolique des vecteurs aux insecticides est due à :",
    options: ["Une surproduction d'enzymes (ex: Estérases, Oxydases) qui dégradent le toxique avant qu'il n'agisse", "Une peau plus épaisse", "Un changement de comportement", "Une mutation de la cible"],
    correct: 0,
    explanation: "Le moustique 'digère' le poison."
  },
  {
    id: 'ctrl_18',
    question: "La résistance 'kdr' (Knock-Down Resistance) est une résistance de type :",
    options: ["Mutation de la cible (canal sodium du nerf) rendant le DDT et les pyréthrinoïdes inefficaces", "Métabolique", "Comportementale", "Physique"],
    correct: 0,
    explanation: "Une simple mutation génétique rend le nerf insensible au poison."
  },
  {
    id: 'ctrl_19',
    question: "Pour gérer la résistance, on recommande la méthode de la 'Mosaïque' ou 'Rotation', qui consiste à :",
    options: ["Alterner les familles d'insecticides (mécanismes d'action différents) dans le temps ou l'espace", "Utiliser toujours le même produit", "Mélanger tout", "Arrêter de traiter"],
    correct: 0,
    explanation: "Cela évite de sélectionner une souche résistante unique."
  },
  
  // --- LUTTE CONTRE AUTRES ARTHROPODES ---
  {
    id: 'ctrl_20',
    question: "La lutte contre les tiques dans un jardin passe par :",
    options: ["Le débroussaillage, la tonte rase (réduire l'humidité), et le traitement des animaux domestiques", "Inonder le jardin", "Mettre du sable", "Rien"],
    correct: 0,
    explanation: "Les tiques ont besoin d'humidité et de hautes herbes pour l'affût."
  },
  {
    id: 'ctrl_21',
    question: "Contre la Gale, le traitement de l'environnement (linge) se fait par :",
    options: ["Lavage à 60°C ou isolement en sac plastique fermé pendant 3 jours (le sarcopte meurt de faim)", "Lavage à froid", "Exposition au soleil 1h", "Repassage seul"],
    correct: 0,
    explanation: "Indispensable pour éviter la réinfestation."
  },
  {
    id: 'ctrl_22',
    question: "La prophylaxie contre les Puces-chiques (Tungose) repose sur :",
    options: ["Le port de chaussures fermées dans les zones sableuses endémiques", "La moustiquaire", "Le répulsif", "Le vaccin"],
    correct: 0,
    explanation: "La puce ne peut pas pénétrer une chaussure."
  },
  {
    id: 'ctrl_23',
    question: "Le traitement des pédiculoses (poux) par 'étouffement' (Diméticone) a l'avantage de :",
    options: ["Ne pas induire de résistance (action physique mécanique) et être non toxique", "Sentir bon", "Être moins cher", "Aller plus vite"],
    correct: 0,
    explanation: "Contrairement aux neurotoxiques (pyréthrines) auxquels les poux sont très résistants."
  },

  // --- NOUVELLES TECHNOLOGIES (GENETIC CONTROL) ---
  {
    id: 'ctrl_24',
    question: "Le 'Gene Drive' (Forçage génétique) est une technologie expérimentale visant à :",
    options: ["Propager un gène délétère (stérilité ou résistance au parasite) dans toute une population sauvage très rapidement", "Créer des super-moustiques", "Tuer les larves", "Soigner les moustiques"],
    correct: 0,
    explanation: "Potentiellement capable d'éradiquer une espèce vectrice (ex: A. gambiae), mais pose des questions éthiques majeures."
  },
  {
    id: 'ctrl_25',
    question: "L'utilisation de champignons entomopathogènes (Metarhizium) cible :",
    options: ["Les moustiques adultes par contact (spores sur les murs ou pièges), les tuant lentement", "Les larves", "Les œufs", "Les virus"],
    correct: 0,
    explanation: "Biopesticide prometteur, surtout contre les moustiques résistants aux produits chimiques."
  },

  // --- PIÈGES ET ATTRACTIFS ---
  {
    id: 'ctrl_26',
    question: "Les pièges à CO2 simulent :",
    options: ["La respiration d'un hôte vertébré pour attirer les moustiques à distance", "L'odeur de l'eau", "La lumière", "La chaleur"],
    correct: 0,
    explanation: "Le dioxyde de carbone est l'attractif universel des hématophages."
  },
  {
    id: 'ctrl_27',
    question: "Le piège BG-Sentinel est conçu spécifiquement pour capturer :",
    options: ["Aedes albopictus et aegypti (Moustiques tigres) en utilisant un leurre olfactif (odeur humaine)", "Les Culex", "Les Anophèles", "Les mouches"],
    correct: 0,
    explanation: "Il imite l'odeur de la peau humaine (acide lactique, ammoniac, acides gras)."
  },
  {
    id: 'ctrl_28',
    question: "Les écrans violets/bleus (pièges visuels) sont utilisés contre :",
    options: ["Les Glossines (Tsé-tsé) qui sont attirées par ces couleurs", "Les moustiques", "Les tiques", "Les puces"],
    correct: 0,
    explanation: "Le fameux piège biconique ou l'écran bleu/noir imprégné."
  },

  // --- RÉGLEMENTATION ET SÉCURITÉ ---
  {
    id: 'ctrl_29',
    question: "La classification OMS des pesticides classe la classe Ia comme :",
    options: ["Extrêmement dangereux (Toxicité aiguë très élevée)", "Peu dangereux", "Sans danger", "Alimentaire"],
    correct: 0,
    explanation: "Ces produits sont interdits en santé publique."
  },
  {
    id: 'ctrl_30',
    question: "Le délai de réentrée après un traitement insecticide spatial (fogging) est :",
    options: ["Le temps d'attente nécessaire avant de retourner dans la zone traitée (souvent 30min - 1h)", "Le temps de séchage", "Le temps de l'épidémie", "Le temps de pause"],
    correct: 0,
    explanation: "Mesure de sécurité pour éviter l'inhalation du nuage toxique."
  },
  
  // --- CAS PARTICULIERS (SCORPIONS/ARAIGNÉES) ---
  {
    id: 'ctrl_31',
    question: "La lutte contre les scorpions dans les maisons repose sur :",
    options: ["L'obturation des fissures, le nettoyage des débris (pierres/bois) autour de la maison, et l'élevage de poules (prédateurs)", "Les insecticides seuls", "L'eau", "Le froid"],
    correct: 0,
    explanation: "La lutte physique (empêcher l'entrée et supprimer les abris) est plus efficace que la chimie."
  },
  {
    id: 'ctrl_32',
    question: "Contre les araignées dangereuses (Veuve noire), on recommande :",
    options: ["De ne pas laisser traîner de chaussures/vêtements au sol et de secouer avant usage", "De vaporiser toute la maison", "De dormir dehors", "De ne rien faire"],
    correct: 0,
    explanation: "Les accidents arrivent souvent quand on écrase l'araignée cachée dans un vêtement."
  },

  // --- PROTECTION DU VOYAGEUR ---
  {
    id: 'ctrl_33',
    question: "La chimioprophylaxie antipaludique (comprimés) :",
    options: ["Ne remplace PAS la protection contre les piqûres (moustiquaire/répulsifs), les deux sont complémentaires", "Remplace tout le reste", "Est un vaccin", "Tue les moustiques"],
    correct: 0,
    explanation: "Aucun médicament n'est efficace à 100%. Il faut éviter de se faire piquer."
  },
  {
    id: 'ctrl_34',
    question: "La climatisation est-elle un moyen de lutte ?",
    options: ["Oui, elle réduit l'activité des moustiques (froid) et implique des fenêtres fermées", "Non, les moustiques aiment le froid", "Non, ça les attire", "C'est neutre"],
    correct: 0,
    explanation: "C'est une protection très efficace la nuit en hôtel."
  },
  {
    id: 'ctrl_35',
    question: "Dormir sous moustiquaire protège de :",
    options: ["Paludisme, Filarioses, Encéphalite Japonaise (Vecteurs nocturnes)", "Dengue, Zika (Vecteurs diurnes)", "Maladie du sommeil", "Leishmaniose (Phlébotomes trop petits, passent parfois les mailles standard)"],
    correct: 0,
    explanation: "Attention : pour les Phlébotomes, il faut une maille très fine (<1.5mm) ou imprégnée."
  },

  // --- DÉTAILS TECHNIQUES (APPLICATION) ---
  {
    id: 'ctrl_36',
    question: "L'ULV (Ultra Low Volume) ou nébulisation à froid est une technique qui :",
    options: ["Produit un brouillard de gouttelettes microscopiques restant en suspension dans l'air pour toucher les insectes en vol", "Inonde le sol", "Peint les murs", "Fait de la fumée chaude"],
    correct: 0,
    explanation: "Utilisé lors des épidémies de Dengue pour casser la transmission rapidement."
  },
  {
    id: 'ctrl_37',
    question: "La thermonébulisation (Fogging chaud) :",
    options: ["Produit une fumée blanche épaisse visible (insecticide + gazole) pour visualiser le traitement (égouts, végétation)", "Est invisible", "Est inodore", "Est silencieuse"],
    correct: 0,
    explanation: "Spectaculaire et utile pour pénétrer la végétation dense, mais polluant."
  },
  {
    id: 'ctrl_38',
    question: "Quelle est la taille de maille idéale d'une moustiquaire ?",
    options: ["156 trous par pouce carré (standard OMS)", "10 trous", "1000 trous (trop serré, pas d'air)", "1 trou"],
    correct: 0,
    explanation: "Compromis entre barrière physique et ventilation (confort)."
  },
  
  // --- MYTHES ET RÉALITÉS ---
  {
    id: 'ctrl_39',
    question: "Les ultrasons (appareils à prise, applications smartphone) sont-ils efficaces contre les moustiques ?",
    options: ["Non, aucune étude scientifique ne prouve leur efficacité. C'est une arnaque commerciale", "Oui, très efficaces", "Oui, pour les mâles", "Oui, la nuit"],
    correct: 0,
    explanation: "L'OMS et toutes les autorités de santé les déconseillent formellement."
  },
  {
    id: 'ctrl_40',
    question: "La citronnelle (bougies, plantes) :",
    options: ["A une efficacité très faible et de très courte durée (quelques minutes). Insuffisant en zone à risque", "Est aussi efficace que le DEET", "Tue les moustiques", "Protège toute la nuit"],
    correct: 0,
    explanation: "Ne pas compter dessus pour éviter le paludisme."
  },
  {
    id: 'ctrl_41',
    question: "La vitamine B1 (Thiamine) ingérée protège-t-elle des piqûres ?",
    options: ["Non, c'est un mythe sans fondement scientifique", "Oui, elle change l'odeur de la peau", "Oui, elle est toxique pour le moustique", "Oui, à forte dose"],
    correct: 0,
    explanation: "Aucune preuve d'efficacité systémique."
  },

  // --- STRATÉGIE INTÉGRÉE (IVM) ---
  {
    id: 'ctrl_42',
    question: "La Lutte Antivectorielle Intégrée (IVM) préconise :",
    options: ["La combinaison rationnelle de toutes les méthodes disponibles (chimique, biologique, environnementale, éducative) pour un résultat durable", "L'usage unique du DDT", "L'usage unique des moustiquaires", "L'attente du vaccin"],
    correct: 0,
    explanation: "C'est l'approche moderne : ne pas mettre tous ses œufs dans le même panier."
  },
  {
    id: 'ctrl_43',
    question: "La participation communautaire est essentielle pour :",
    options: ["La réduction des gîtes larvaires (Dengue) et l'acceptation des traitements", "Acheter les produits", "Fabriquer les moustiquaires", "Rien"],
    correct: 0,
    explanation: "Sans l'adhésion de la population (qui ouvre sa porte, qui nettoie sa cour), la lutte échoue."
  },

  // --- HISTOIRE DE LA LUTTE ---
  {
    id: 'ctrl_44',
    question: "La campagne d'éradication du paludisme des années 50-60 a échoué globalement à cause de :",
    options: ["L'apparition de la résistance des moustiques au DDT et des parasites à la Chloroquine, et le manque de durabilité", "Le manque de produits", "La guerre", "Le froid"],
    correct: 0,
    explanation: "Leçon apprise : l'éradication est difficile, on vise le 'contrôle'."
  },
  {
    id: 'ctrl_45',
    question: "L'assainissement de Paris (Haussmann) et des villes européennes a fait disparaître :",
    options: ["Le Paludisme autochtone (disparition des marais urbains)", "La Peste", "La Grippe", "La Rougeole"],
    correct: 0,
    explanation: "L'amélioration du cadre de vie est le meilleur 'insecticide' à long terme."
  },

  // --- DIVERS ---
  {
    id: 'ctrl_46',
    question: "Les bracelets anti-moustiques sont-ils recommandés ?",
    options: ["Non, ils ne protègent que quelques millimètres autour du bracelet. Le reste du corps est exposé", "Oui, très efficaces", "Oui, pour les enfants", "Oui, pour la nuit"],
    correct: 0,
    explanation: "Gadget inefficace pour une protection globale."
  },
  {
    id: 'ctrl_47',
    question: "Le ventilateur est-il utile ?",
    options: ["Oui, le vent perturbe le vol des moustiques et disperse les odeurs attractives (CO2)", "Non", "Il les attire", "Il les chauffe"],
    correct: 0,
    explanation: "Moyen mécanique simple et efficace pour réduire les piqûres dans une pièce."
  },
  {
    id: 'ctrl_48',
    question: "Pourquoi ne traite-t-on pas les grands marécages avec des larvicides chimiques ?",
    options: ["Trop cher, trop vaste, et impact écologique désastreux sur la biodiversité non-cible", "Ça ne marche pas", "Les larves sont trop profondes", "L'eau est salée"],
    correct: 0,
    explanation: "On réserve les larvicides aux gîtes limités et identifiés."
  },
  {
    id: 'ctrl_49',
    question: "Les peintures insecticides (Inesfly) contiennent :",
    options: ["Des micro-capsules libérant lentement l'insecticide (organophosphoré/pyréthrinoïde) pendant des mois", "Du plomb", "De l'huile", "Du sucre"],
    correct: 0,
    explanation: "Innovation intéressante pour la lutte contre les Triatomes ou les vecteurs endophiles."
  },
  {
    id: 'ctrl_50',
    question: "La prophylaxie de la Maladie de Chagas passe par :",
    options: ["L'amélioration de l'habitat (boucher les fissures, toits en tôle) pour empêcher les punaises de s'installer", "La moustiquaire imprégnée", "Le vaccin", "L'eau propre"],
    correct: 0,
    explanation: "C'est une maladie de la pauvreté et du logement précaire."
  },
    // --- SURVEILLANCE ENTOMOLOGIQUE APPLIQUÉE ---
    {
      id: 'ctrl_51',
      question: "L'indice de Breteau (pour la Dengue) est :",
      options: ["Le nombre de récipients positifs (contenant des larves) pour 100 maisons inspectées", "Le nombre de moustiques par maison", "Le nombre de malades", "La surface d'eau"],
      correct: 0,
      explanation: "C'est l'indicateur de risque épidémique le plus utilisé pour Aedes aegypti."
    },
    {
      id: 'ctrl_52',
      question: "La 'Capture sur Jambe' (Human Landing Catch) est-elle éthique ?",
      options: ["Controversée (risque d'infection pour le capturer), mais reste le 'Gold Standard' pour mesurer le contact homme-vecteur", "Interdite totalement", "Sans risque", "Obligatoire pour tous"],
      correct: 0,
      explanation: "On donne une chimioprophylaxie aux captureurs, mais le risque zéro n'existe pas (ex: Dengue sans traitement)."
    },
    {
      id: 'ctrl_53',
      question: "Le test de résistance OMS (tube test) mesure :",
      options: ["La mortalité des moustiques après 1h d'exposition à un papier imprégné d'insecticide à dose standard", "La quantité d'insecticide", "La taille des moustiques", "Leur ADN"],
      correct: 0,
      explanation: "Si mortalité < 90%, la résistance est confirmée. Il faut changer d'insecticide."
    },
  
    // --- LUTTE CONTRE LES NUISANCES URBAINES ---
    {
      id: 'ctrl_54',
      question: "Contre Culex pipiens (moustique urbain), le traitement des avaloirs d'eaux pluviales (bouches d'égout) est :",
      options: ["Essentiel, car c'est leur gîte larvaire principal en ville", "Inutile", "Dangereux", "Trop cher"],
      correct: 0,
      explanation: "L'eau y stagne toute l'année. Un larvicide (Bti) y est appliqué régulièrement."
    },
    {
      id: 'ctrl_55',
      question: "Les pièges pondoirs (Lethal Ovitraps) fonctionnent en :",
      options: ["Attirant la femelle pour pondre sur un support imprégné d'insecticide, tuant la femelle et les larves", "Attrapant les mâles", "Faisant du bruit", "Émettant de la lumière"],
      correct: 0,
      explanation: "Stratégie 'Attract & Kill'."
    },
    
    // --- PROTECTION SPÉCIFIQUE (VECTEURS RARES) ---
    {
      id: 'ctrl_56',
      question: "Contre les simulies (Cécité des rivières), le traitement de masse des populations à l'Ivermectine vise à :",
      options: ["Tuer les microfilaires chez l'homme pour qu'il n'infecte plus les simulies (réduire la transmission)", "Tuer les mouches adultes", "Tuer les larves dans la rivière", "Vacciner"],
      correct: 0,
      explanation: "On soigne l'homme pour assainir le vecteur."
    },
    {
      id: 'ctrl_57',
      question: "Le débroussaillage péridomestique (autour de la maison) est efficace contre :",
      options: ["Les Tsé-tsé (Glossines) et les moustiques exophiles qui se reposent dans la végétation basse", "Les poux", "Les punaises de lit", "Les sarcoptes"],
      correct: 0,
      explanation: "Créer une 'zone tampon' sans végétation réduit le contact vecteur-homme."
    },
  
    // --- GESTION DES DÉCHETS & EAU ---
    {
      id: 'ctrl_58',
      question: "Les pneus usagés stockés à l'air libre sont :",
      options: ["Des gîtes larvaires idéaux pour Aedes (sombres, chauds, retiennent l'eau, difficiles à vider)", "Sans danger", "Utiles", "Des pièges"],
      correct: 0,
      explanation: "Le commerce international de pneus usagés a disséminé Aedes albopictus et aegypti dans le monde."
    },
    {
      id: 'ctrl_59',
      question: "Couvrir les fûts de stockage d'eau avec un tissu propre ou un couvercle hermétique est :",
      options: ["La mesure la plus simple et efficace pour empêcher la ponte des moustiques dans l'eau potable", "Inutile", "Dangereux", "Coûteux"],
      correct: 0,
      explanation: "Base de la prévention de la Dengue en zone sans eau courante."
    },
    {
      id: 'ctrl_60',
      question: "Le polystyrène expansé (billes) à la surface des latrines sert à :",
      options: ["Créer une barrière physique étouffant les larves de Culex et empêchant la ponte", "Parfumer", "Nettoyer", "Désinfecter"],
      correct: 0,
      explanation: "Méthode physique low-tech pour les fosses septiques."
    },
  
    // --- NOUVELLES MOLÉCULES ---
    {
      id: 'ctrl_61',
      question: "Le Chlorfénapyr est un nouvel insecticide pour moustiquaires qui agit en :",
      options: ["Perturbant la production d'énergie (mitochondries) du moustique, efficace contre les résistants aux pyréthrinoïdes", "Bloquant les nerfs", "Stérilisant", "Repoussant"],
      correct: 0,
      explanation: "Les nouvelles générations de moustiquaires (ex: Interceptor G2) combinent pyréthrinoïde + chlorfénapyr."
    },
    {
      id: 'ctrl_62',
      question: "Le Pyriproxyfène est un :",
      options: ["Régulateur de croissance (mimétique de l'hormone juvénile) qui empêche la nymphe de devenir adulte", "Un neurotoxique", "Un répulsif", "Un attractif"],
      correct: 0,
      explanation: "Il ne tue pas tout de suite, mais stérilise le gîte (auto-dissémination par les femelles)."
    },
  
    // --- ÉDUCATION SANITAIRE (IEC) ---
    {
      id: 'ctrl_63',
      question: "Le message clé 'Dormez sous moustiquaire toute l'année, toutes les nuits' vise à :",
      options: ["Maintenir l'habitude et protéger même en saison de faible transmission", "Vendre des moustiquaires", "Faire joli", "Protéger du froid"],
      correct: 0,
      explanation: "La régularité est la clé de l'impact communautaire."
    },
    {
      id: 'ctrl_64',
      question: "Pourquoi faut-il rentrer le linge avant la tombée de la nuit en Afrique ?",
      options: ["Pour éviter que les mouches Tumbu (Ver de Cayor) ne pondent dessus (le linge humide les attire)", "Pour éviter la rosée", "Pour éviter le vol", "Pour éviter la poussière"],
      correct: 0,
      explanation: "Prévention simple des myases."
    },
  
    // --- ZOOPROPHYLAXIE & DÉTOURNEMENT ---
    {
      id: 'ctrl_65',
      question: "Le collier insecticide pour chien (Deltaméthrine) protège-t-il l'homme ?",
      options: ["Oui, indirectement, en réduisant la population de phlébotomes (Leishmaniose) ou de tiques autour de la maison", "Non, jamais", "Il attire les insectes", "Il est dangereux"],
      correct: 0,
      explanation: "En santé publique vétérinaire, traiter le réservoir (chien) protège l'homme."
    },
    {
      id: 'ctrl_66',
      question: "Les répulsifs spatiaux (spirales fumigènes) sont efficaces pour :",
      options: ["Réduire les piqûres en extérieur ou en véranda (effet de fumée + insecticide)", "Dormir", "Tuer les larves", "Soigner"],
      correct: 0,
      explanation: "Attention à la toxicité de la fumée en espace clos."
    },
  
    // --- VOYAGEURS ---
    {
      id: 'ctrl_67',
      question: "La 'consultation du voyageur' avant le départ sert à :",
      options: ["Informer sur les risques vectoriels spécifiques à la destination, prescrire la chimio-prophylaxie et les vaccins (Fièvre Jaune)", "Vendre des valises", "Réserver l'hôtel", "Faire peur"],
      correct: 0,
      explanation: "Indispensable 1 mois avant le départ."
    },
    {
      id: 'ctrl_68',
      question: "En cas de fièvre au retour d'une zone tropicale, le réflexe doit être :",
      options: ["Consulter en urgence en mentionnant le voyage (suspecter un Paludisme jusqu'à preuve du contraire)", "Prendre du paracétamol et attendre", "Dormir", "Manger"],
      correct: 0,
      explanation: "Le retard diagnostic est la cause n°1 de décès par paludisme d'importation."
    },
  
    // --- RÉCAPITULATIF MOYENS ---
    {
      id: 'ctrl_69',
      question: "Quelle méthode est la plus écologique pour contrôler les moustiques ?",
      options: ["La réduction des sources (supprimer l'eau stagnante)", "Le DDT", "Le gaz", "Le feu"],
      correct: 0,
      explanation: "Pas de chimie, pas de coût, juste de l'huile de coude."
    },
    {
      id: 'ctrl_70',
      question: "L'efficacité d'une moustiquaire trouée est :",
      options: ["Fortement réduite (les moustiques cherchent activement les trous), mais l'insecticide résiduel aide encore un peu", "Nulle", "Inchangée", "Meilleure"],
      correct: 0,
      explanation: "Une moustiquaire se répare (fil et aiguille) !"
    },
    
    // --- STRATÉGIES GLOBALES ---
    {
      id: 'ctrl_71',
      question: "Le concept 'One Health' (Une seule santé) applique à la lutte vectorielle :",
      options: ["La collaboration entre médecins, vétérinaires et écologues (ex: surveiller les oiseaux pour West Nile, traiter les chiens pour Leishmaniose)", "Traiter juste l'homme", "Traiter juste l'animal", "Ignorer l'environnement"],
      correct: 0,
      explanation: "Les maladies vectorielles sont le modèle parfait de l'interconnexion homme-animal-environnement."
    },
    {
      id: 'ctrl_72',
      question: "La 'Lutte antivectorielle' est-elle gratuite ?",
      options: ["Non, elle a un coût élevé pour les états, mais le coût de la maladie (perte de productivité, soins) est bien supérieur (Ratio Coût-Efficacité favorable)", "Oui", "C'est du gaspillage", "C'est un luxe"],
      correct: 0,
      explanation: "C'est un investissement pour le développement économique."
    },
    
    // --- QUESTIONS FINALES & DÉTAILS ---
    {
      id: 'ctrl_73',
      question: "Les pièges collants jaunes (glue) attirent :",
      options: ["Les insectes volants diurnes (mouches, pucerons) par attraction visuelle", "Les moustiques nocturnes", "Les tiques", "Les poux"],
      correct: 0,
      explanation: "Utilisés en agriculture et parfois dans les étables."
    },
    {
      id: 'ctrl_74',
      question: "L'huile de Neem est un insecticide :",
      options: ["D'origine végétale (Azadirachta indica), agissant comme répulsif et régulateur de croissance", "Synthétique", "Minéral", "Animal"],
      correct: 0,
      explanation: "Alternative bio populaire."
    },
    {
      id: 'ctrl_75',
      question: "Le 'Vapona' (Bandelette insecticide dichlorvos) est :",
      options: ["Un diffuseur passif de vapeur toxique, efficace en espace clos mais toxique pour l'homme à long terme (interdit dans certains pays)", "Un parfum", "Un jouet", "Un aliment"],
      correct: 0,
      explanation: "Ancienne méthode très efficace mais dangereuse."
    },
    {
      id: 'ctrl_76',
      question: "La résistance comportementale (Behavioral resistance) signifie :",
      options: ["Les moustiques changent leurs habitudes (ex: piquer dehors ou plus tôt) pour éviter les moustiquaires et les murs traités", "Ils deviennent fous", "Ils ne piquent plus", "Ils dorment"],
      correct: 0,
      explanation: "Réponse évolutive redoutable aux campagnes de masse (ex: Anopheles changeant ses heures de piqûre)."
    },
    {
      id: 'ctrl_77',
      question: "La prophylaxie de la Peste repose sur :",
      options: ["La lutte contre les puces D'ABORD, puis contre les rats (si on tue les rats en premier, les puces affamées attaquent l'homme)", "Tuer les rats tout de suite", "Vacciner les rats", "Fuir"],
      correct: 0,
      explanation: "Règle d'or : Insecticide avant Rodenticide."
    },
    {
      id: 'ctrl_78',
      question: "Pour éviter les aoûtats, il faut :",
      options: ["Éviter de s'asseoir dans l'herbe en fin d'été et traiter les vêtements/chaussures", "Marcher pieds nus", "Mettre un chapeau", "Nager"],
      correct: 0,
      explanation: "Ils attendent au sommet des brins d'herbe."
    },
    {
      id: 'ctrl_79',
      question: "Les appareils 'Zappers' (lampes bleues avec grille électrique) tuent :",
      options: ["Surtout des insectes inoffensifs ou utiles (papillons), et très peu de moustiques (qui ne sont pas attirés par la lumière UV seule)", "Tous les moustiques", "Les virus", "Les rats"],
      correct: 0,
      explanation: "Inefficaces contre les moustiques, nuisibles pour la biodiversité."
    },
    {
      id: 'ctrl_80',
      question: "L'assèchement des marais Pontins en Italie a permis :",
      options: ["L'élimination du paludisme en Europe du Sud (Mussolini)", "La culture du riz", "La pêche", "Le tourisme"],
      correct: 0,
      explanation: "Victoire historique de la modification de l'environnement."
    },
    {
      id: 'ctrl_81',
      question: "Le 'Screening' des maisons (moustiquaires aux fenêtres/portes) est :",
      options: ["La mesure de protection passive la plus durable pour l'habitat (USA/Europe)", "Inutile", "Moche", "Cher"],
      correct: 0,
      explanation: "Pourquoi le paludisme a disparu des USA ? Grâce aux grillages aux fenêtres."
    },
    {
      id: 'ctrl_82',
      question: "L'ivermectine donnée au bétail (Endectocide) tue :",
      options: ["Les tiques, les poux, les mouches et les moustiques qui piquent la vache traitée", "La vache", "L'herbe", "Le berger"],
      correct: 0,
      explanation: "Outil de 'Zooprophylaxie active'."
    },
    {
      id: 'ctrl_83',
      question: "La lutte contre les simulies par épandage aérien utilise :",
      options: ["Des hélicoptères qui déposent du Bti dans les rapides des rivières", "Des avions qui gazent la forêt", "Des bateaux", "Des camions"],
      correct: 0,
      explanation: "Seul moyen d'atteindre les gîtes inaccessibles en forêt."
    },
    {
      id: 'ctrl_84',
      question: "La 'Confusion sexuelle' (Phéromones) marche bien sur :",
      options: ["Les insectes agricoles (papillons), mais est encore expérimentale/difficile pour les moustiques", "Les tiques", "Les poux", "Les puces"],
      correct: 0,
      explanation: "Difficile en milieu ouvert."
    },
    {
      id: 'ctrl_85',
      question: "La prophylaxie mécanique contre les myases (vers) :",
      options: ["Repasser le linge (chaleur tue les œufs/larves)", "Laver à l'eau froide", "Sécher au soleil", "Secouer"],
      correct: 0,
      explanation: "Le fer à repasser est le meilleur ami de l'homme en Afrique tropicale."
    },
    {
      id: 'ctrl_86',
      question: "Le traitement 'Spot-on' (pipette dorsale) pour chiens/chats :",
      options: ["Diffuse le produit dans le film lipidique de la peau de tout l'animal, protégeant pendant 1 mois", "Reste juste sur le dos", "Entre dans le sang", "Est un vaccin"],
      correct: 0,
      explanation: "Très pratique et efficace contre puces et tiques."
    },
    {
      id: 'ctrl_87',
      question: "Pourquoi l'OMS recommande-t-elle la rotation des insecticides ?",
      options: ["Pour préserver leur efficacité future (retarder la résistance)", "Pour changer de couleur", "Pour faire plaisir aux fabricants", "Pour polluer plus"],
      correct: 0,
      explanation: "L'arsenal chimique est limité, il faut le protéger."
    },
    {
      id: 'ctrl_88',
      question: "Le 'Residual Life' (Durée d'action) d'un insecticide dépend :",
      options: ["De la nature du support (mur en boue absorbe/dégrade vite, ciment/bois moins), de la dose, et du produit", "De la couleur du mur", "De la lune", "Du vent"],
      correct: 0,
      explanation: "Sur un mur en banco (terre), l'insecticide tient moins longtemps."
    },
    {
      id: 'ctrl_89',
      question: "La prophylaxie collective prime sur la prophylaxie individuelle car :",
      options: ["Elle réduit la transmission pour toute la communauté, y compris ceux qui ne peuvent pas se protéger", "Elle est moins chère", "Elle est plus facile", "Elle est obligatoire"],
      correct: 0,
      explanation: "C'est le principe de l'immunité de groupe appliquée aux vecteurs."
    },
    {
      id: 'ctrl_90',
      question: "Les larvicides monomoléculaires (huiles/silicones de surface) agissent en :",
      options: ["Formant un film très fin à la surface de l'eau qui empêche les larves/nymphes de respirer (noyade) et de s'ancrer", "Empoisonnant l'eau", "Brûlant", "Gelant"],
      correct: 0,
      explanation: "Physique, donc pas de résistance possible (ex: Aquatain)."
    },
    {
      id: 'ctrl_91',
      question: "La protection contre la Maladie de Lyme en forêt :",
      options: ["Pantalon dans les chaussettes, vêtements clairs (pour voir les tiques), inspection minutieuse au retour", "Courir vite", "Manger de l'ail", "Prier"],
      correct: 0,
      explanation: "La barrière physique est la meilleure protection."
    },
    {
      id: 'ctrl_92',
      question: "Le 'Tick Twister' (Tire-tique) est conçu pour :",
      options: ["Dévisser la tique sans comprimer son abdomen (risque de régurgitation) et enlever la tête", "Tirer fort", "Couper la tique", "Brûler la tique"],
      correct: 0,
      explanation: "Outil indispensable dans la trousse de secours."
    },
    {
      id: 'ctrl_93',
      question: "La 'Lutte Autocide' est un synonyme de :",
      options: ["La technique de l'insecte stérile (l'espèce se détruit elle-même)", "Le suicide", "L'insecticide", "La lutte biologique"],
      correct: 0,
      explanation: "Utiliser l'insecte contre lui-même."
    },
    {
      id: 'ctrl_94',
      question: "Les OGM (Moustiques génétiquement modifiés) de type RIDL :",
      options: ["Ont une descendance qui meurt au stade larvaire (gène létal tardif)", "Sont stériles", "Sont géants", "Sont fluorescents"],
      correct: 0,
      explanation: "Testé au Brésil contre la Dengue."
    },
    {
      id: 'ctrl_95',
      question: "La prophylaxie de la rage transmise par les chauves-souris (Vecteur mammifère, mais contexte similaire) :",
      options: ["Ne pas toucher, dormir sous moustiquaire (vampires en Amazonie)", "Vacciner les chauves-souris", "Tuer les chauves-souris", "Rien"],
      correct: 0,
      explanation: "Les vampires (Desmodus) piquent la nuit pour boire du sang, comme des moustiques géants."
    },
    {
      id: 'ctrl_96',
      question: "L'éducation des enfants à l'école sur les gîtes larvaires :",
      options: ["Crée des 'brigades anti-moustiques' qui nettoient les maisons et éduquent les parents (très efficace)", "Ne sert à rien", "Est dangereux", "Est interdit"],
      correct: 0,
      explanation: "L'enfant est le meilleur vecteur de changement comportemental."
    },
    {
      id: 'ctrl_97',
      question: "La lutte contre les poux à l'école nécessite :",
      options: ["La coordination des parents (traiter tout le monde le même week-end) pour éviter les ping-pongs", "De fermer l'école", "De raser les têtes", "De punir les enfants"],
      correct: 0,
      explanation: "La synchronisation est la clé."
    },
    {
      id: 'ctrl_98',
      question: "Le 'Fauchage' des herbes (Flagging) sert à :",
      options: ["Capturer les tiques sur un drap blanc traîné sur la végétation (surveillance)", "Couper l'herbe", "Tuer les tiques", "Faire du sport"],
      correct: 0,
      explanation: "Technique d'échantillonnage des tiques."
    },
    {
      id: 'ctrl_99',
      question: "La prévention ultime en entomologie médicale est :",
      options: ["Le Vaccin contre la maladie (quand il existe, ex: Fièvre Jaune, Encéphalite Japonaise), qui rend le vecteur inopérant", "L'insecticide", "La fuite", "L'isolement"],
      correct: 0,
      explanation: "Si l'hôte est immunisé, le cycle s'arrête, même si le moustique pique."
    },
    {
      id: 'ctrl_100',
      question: "En conclusion de ce module, quel est le meilleur outil de lutte ?",
      options: ["Il n'y en a pas un seul : c'est l'intégration intelligente de tous les outils adaptés au contexte local", "Le DDT", "La moustiquaire", "Le piège"],
      correct: 0,
      explanation: "L'intelligence et l'adaptation sont les seules armes durables."
    }
  ];
  
  export default control_prevention;
  
