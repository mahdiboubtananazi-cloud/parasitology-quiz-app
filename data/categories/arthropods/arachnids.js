const arachnids = [
  // --- GÉNÉRALITÉS ARACHNIDES ---
  {
    id: 'arach_1',
    question: "Quelle est la caractéristique morphologique principale distinguant les Arachnides des Insectes à l'état adulte ?",
    options: ["Ils ont 4 paires de pattes (8 pattes) et pas d'antennes ni d'ailes", "Ils ont 3 paires de pattes (6 pattes) et des ailes", "Ils ont 10 pattes", "Ils ont des antennes"],
    correct: 0,
    explanation: "C'est le critère de base. Les insectes sont hexapodes (6), les arachnides sont octopodes (8)."
  },
  {
    id: 'arach_2',
    question: "Le corps des Acariens et Tiques est divisé en :",
    options: ["Une seule masse (Idiosome) où céphalothorax et abdomen sont fusionnés, avec un rostre (Gnathosome) à l'avant", "Trois parties distinctes (Tête, Thorax, Abdomen)", "Deux parties (Céphalothorax et Abdomen)", "Une tête et une queue"],
    correct: 0,
    explanation: "Contrairement aux araignées (2 parties) ou insectes (3 parties), les acariens semblent n'avoir qu'un seul corps globuleux."
  },

  // --- SARCOPTES SCABIEI (GALE) ---
  {
    id: 'arach_3',
    question: "Quel est l'agent causal de la Gale humaine ?",
    options: ["Sarcoptes scabiei var. hominis", "Demodex folliculorum", "Ixodes ricinus", "Pediculus humanus"],
    correct: 0,
    explanation: "C'est un acarien microscopique spécifique de l'homme, agent d'une ectoparasitose contagieuse."
  },
  {
    id: 'arach_4',
    question: "Où vit la femelle fécondée de Sarcoptes scabiei ?",
    options: ["Elle creuse un tunnel (sillon) dans la couche cornée de l'épiderme", "À la surface de la peau", "Dans le follicule pileux", "Dans le sang"],
    correct: 0,
    explanation: "Elle progresse de 1 à 2 mm par jour dans l'épaisseur de la peau pour y pondre ses œufs."
  },
  {
    id: 'arach_5',
    question: "Le symptôme majeur et évocateur de la gale est :",
    options: ["Un prurit féroce à recrudescence nocturne, épargnant le visage (sauf nourrisson)", "Une fièvre élevée", "Des douleurs musculaires", "Une perte de cheveux"],
    correct: 0,
    explanation: "Le prurit nocturne familial est le signe d'appel clinique n°1."
  },
  {
    id: 'arach_6',
    question: "Qu'est-ce que le 'sillon scabieux' ?",
    options: ["Une lésion sinueuse, filiforme, de quelques millimètres, terminée par une 'perle' (l'acarien)", "Une croûte noire", "Un bouton rouge simple", "Une morsure"],
    correct: 0,
    explanation: "C'est la lésion pathognomonique, correspondant au trajet de la femelle. On le cherche entre les doigts et aux poignets."
  },
  {
    id: 'arach_7',
    question: "Les zones de prédilection des lésions de la gale sont :",
    options: ["Espaces interdigitaux, poignets, aisselles, aréoles (femme), organes génitaux (homme)", "Le dos et le cuir chevelu", "Les plantes de pieds uniquement", "Le nez"],
    correct: 0,
    explanation: "Ce sont les zones où la peau est fine et chaude."
  },
  {
    id: 'arach_8',
    question: "Qu'est-ce que le 'chancre scabieux' ?",
    options: ["Un nodule rouge prurigineux sur le gland ou la verge chez l'homme", "Une ulcération buccale", "Une lésion du visage", "Une infection bactérienne"],
    correct: 0,
    explanation: "C'est une localisation génitale fréquente et très évocatrice chez l'homme."
  },
  {
    id: 'arach_9',
    question: "La 'Gale Norvégienne' (hyperkératosique) survient sur quel terrain ?",
    options: ["Sujets immunodéprimés (SIDA, corticoïdes) ou âgés grabataires", "Sportifs en bonne santé", "Enfants", "Femmes enceintes"],
    correct: 0,
    explanation: "L'absence de grattage (déficit moteur/sensoriel) ou d'immunité permet une pullulation de millions de sarcoptes sous des croûtes épaisses."
  },
  {
    id: 'arach_10',
    question: "La transmission de la gale commune se fait principalement par :",
    options: ["Contact cutané direct, prolongé ('peau contre peau')", "Par l'air (toux)", "Par l'eau", "Par piqûre de moustique"],
    correct: 0,
    explanation: "C'est souvent une infection sexuellement transmissible ou familiale (dormir dans le même lit)."
  },
  {
    id: 'arach_11',
    question: "La transmission indirecte (linge, literie) est-elle possible dans la gale ?",
    options: ["Oui, car le sarcopte survit 24 à 48h hors de l'hôte", "Non, le sarcopte meurt instantanément dehors", "Oui, il vit des mois dans le linge", "Uniquement par les animaux"],
    correct: 0,
    explanation: "C'est pourquoi il faut traiter l'environnement (linge à 60°C ou sac plastique) en même temps que le patient."
  },
  {
    id: 'arach_12',
    question: "Le diagnostic de certitude de la gale repose sur :",
    options: ["La mise en évidence du sarcopte (ou œufs/fèces) au microscope après grattage d'un sillon", "Une prise de sang", "Une biopsie profonde", "L'examen des urines"],
    correct: 0,
    explanation: "Le test à l'encre de Chine peut aider à visualiser les sillons avant le prélèvement."
  },
  {
    id: 'arach_13',
    question: "Le traitement de référence par voie orale de la gale est :",
    options: ["L'Ivermectine (Stromectol)", "Le Métronidazole", "L'Amoxicilline", "La Chloroquine"],
    correct: 0,
    explanation: "Prise unique, à répéter souvent à J+7 ou J+14 pour tuer les larves écloses des œufs survivants."
  },
  {
    id: 'arach_14',
    question: "Qu'est-ce que les 'nodules scabieux post-scabieux' ?",
    options: ["Des nodules rouges et prurigineux qui persistent plusieurs semaines après guérison (réaction immuno-allergique)", "Une récidive de la maladie", "Une surinfection", "Des kystes de graisse"],
    correct: 0,
    explanation: "Ils ne contiennent plus de sarcoptes vivants mais sont dus à une hypersensibilité persistante aux antigènes du parasite mort."
  },
  {
    id: 'arach_15',
    question: "La gale animale (chien/chat) transmise à l'homme provoque :",
    options: ["Une pseudo-gale : prurit vif mais pas de sillons, et ça guérit tout seul si l'animal est traité", "Une gale humaine classique", "Une maladie mortelle", "Rien"],
    correct: 0,
    explanation: "Sarcoptes scabiei var. canis ne peut pas se reproduire durablement sur la peau humaine (impasse parasitaire)."
  },

  // --- AUTRES ACARIENS (NON GALE) ---
  {
    id: 'arach_16',
    question: "Demodex folliculorum est un acarien qui :",
    options: ["Vit dans les follicules pilo-sébacés du visage (commensal fréquent)", "Creuse des sillons sur les mains", "Vit dans le sang", "Transmet la peste"],
    correct: 0,
    explanation: "Il est souvent inoffensif mais sa prolifération est associée à la rosacée ou la blépharite."
  },
  {
    id: 'arach_17',
    question: "Les Trombiculidés (Aoûtats) provoquent des démangeaisons intenses. Quel stade est parasite ?",
    options: ["Seule la larve hexapode (6 pattes) est parasite temporaire", "L'adulte", "La nymphe", "L'œuf"],
    correct: 0,
    explanation: "Les larves rouges attendent dans l'herbe en fin d'été et piquent aux zones de striction (ceinture, chaussettes)."
  },
  {
    id: 'arach_18',
    question: "L'allergie aux acariens de la poussière (Dermatophagoides) est due à :",
    options: ["L'inhalation de leurs déjections et cadavres", "Leur piqûre", "Leur présence sous la peau", "Leur venin"],
    correct: 0,
    explanation: "Ces acariens ne sont pas parasites (ils mangent les squames de peau morte dans le lit) mais sont hautement allergisants (asthme)."
  },

  // --- TIQUES (IXODIDAE - Tiques dures) ---
  {
    id: 'arach_19',
    question: "Quelle est la caractéristique morphologique des tiques dures (Ixodidae) ?",
    options: ["Présence d'un écusson dorsal (scutum) et rostre visible apicalement", "Absence de scutum, corps mou", "Elles ont des ailes", "Elles ont 6 pattes"],
    correct: 0,
    explanation: "Le scutum est rigide. Chez la femelle, il ne couvre qu'une partie du dos pour permettre le gorgement."
  },
  {
    id: 'arach_20',
    question: "Ixodes ricinus est le vecteur principal en Europe de :",
    options: ["La Maladie de Lyme (Borreliose) et l'Encéphalite à tiques (TBE)", "La Peste", "Le Paludisme", "La Dengue"],
    correct: 0,
    explanation: "C'est la tique la plus commune dans les forêts tempérées humides."
  },
  {
    id: 'arach_21',
    question: "Rhipicephalus sanguineus (Tique du chien) transmet :",
    options: ["La Fièvre Boutonneuse Méditerranéenne (Rickettsia conorii)", "La Maladie du sommeil", "La Rage", "La Gale"],
    correct: 0,
    explanation: "Elle vit près des habitations (chenils, fissures). La morsure cause souvent une 'tache noire'."
  },
  {
    id: 'arach_22',
    question: "La transmission de la maladie de Lyme se fait :",
    options: ["En fin de repas sanguin (la tique doit rester fixée > 24-48h)", "Immédiatement dès la piqûre", "Par simple contact", "Par les fèces"],
    correct: 0,
    explanation: "Les bactéries Borrelia sont dans l'intestin de la tique et migrent vers les glandes salivaires pendant le repas. Retirer la tique tôt évite l'infection."
  },
  {
    id: 'arach_23',
    question: "Qu'est-ce que l'Erythème Migrant ?",
    options: ["Une tache rouge centrifuge s'étendant autour de la piqûre de tique, signe précoce de Lyme", "Une allergie au soleil", "Une nécrose noire", "Un œdème"],
    correct: 0,
    explanation: "C'est le stade primaire de la borréliose de Lyme (cible). Il impose un traitement antibiotique immédiat."
  },
  {
    id: 'arach_24',
    question: "Comment retirer correctement une tique ?",
    options: ["Avec un tire-tique (mouvement de rotation) sans produit chimique", "En l'asphyxiant avec de l'éther ou de l'huile", "En tirant fort avec une pince à épiler", "En la brûlant"],
    correct: 0,
    explanation: "L'éther ou le stress fait régurgiter la tique, augmentant le risque d'infection."
  },
  {
    id: 'arach_25',
    question: "Le cycle des tiques Ixodidae comprend :",
    options: ["Larve (6 pattes) -> Nymphe (8 pattes) -> Adulte (8 pattes), avec un repas sanguin à chaque stade", "Larve -> Adulte direct", "Œuf -> Adulte", "Nymphe uniquement"],
    correct: 0,
    explanation: "C'est un cycle triphasique qui peut durer plusieurs années (tiques à cycle long)."
  },
  {
    id: 'arach_26',
    question: "Hyalomma marginatum est une tique géante qui arrive en Europe, vecteur de :",
    options: ["La Fièvre Hémorragique de Crimée-Congo (FHCC)", "Lyme", "Paludisme", "Chikungunya"],
    correct: 0,
    explanation: "C'est une tique chasseresse (elle court vers l'hôte) adaptée aux climats chauds/secs."
  },
  {
    id: 'arach_27',
    question: "La paralysie à tiques est causée par :",
    options: ["Une neurotoxine présente dans la salive de certaines tiques femelles (Dermacentor)", "Une bactérie", "Un virus", "Une réaction allergique"],
    correct: 0,
    explanation: "Ce n'est pas une infection. C'est une envenimation progressive. Le retrait de la tique guérit la paralysie."
  },

  // --- TIQUES (ARGASIDAE - Tiques molles) ---
  {
    id: 'arach_28',
    question: "Les tiques molles (Ornithodoros) diffèrent des tiques dures par :",
    options: ["Absence de scutum, repas sanguin court et nocturne, vie dans les terriers/murs", "Présence d'un scutum, repas long de plusieurs jours", "Vie sur les plantes", "Ailes"],
    correct: 0,
    explanation: "Elles se comportent comme des punaises de lit : elles piquent la nuit rapidement (15-30 min) et retournent se cacher."
  },
  {
    id: 'arach_29',
    question: "Ornithodoros moubata est le vecteur de :",
    options: ["La Fièvre Récurrente à tiques (Borrelia duttoni) en Afrique", "Lyme", "Peste", "Typhus"],
    correct: 0,
    explanation: "Maladie caractérisée par des accès fébriles répétés. Transmission par le liquide coxal (excrété par les hanches) de la tique."
  },

  // --- MALACOLOGIE & PROPHYLAXIE ---
  {
    id: 'arach_30',
    question: "Pour se protéger des tiques en forêt, il faut :",
    options: ["Porter des vêtements longs, fermés aux chevilles, et s'inspecter le corps au retour", "Marcher pieds nus", "Mettre du parfum", "Courir vite"],
    correct: 0,
    explanation: "L'inspection minutieuse (plis, cuir chevelu) permet d'enlever les tiques avant la transmission des bactéries."
  },
  {
    id: 'arach_31',
    question: "L'Haller's organ (Organe de Haller) sur les pattes avant des tiques sert à :",
    options: ["Détecter le CO2, la chaleur et l'humidité de l'hôte (organe sensoriel)", "Marcher", "Piquer", "Respirer"],
    correct: 0,
    explanation: "C'est leur 'nez'. Les tiques font la quête en haut des herbes, pattes avant levées, attendant un passage."
  },
  {
    id: 'arach_32',
    question: "La 'Tache noire' de la Fièvre Boutonneuse Méditerranéenne est :",
    options: ["Une escarre nécrotique au point de morsure de la tique, indolore", "Un bleu", "Une verrue", "Une tumeur"],
    correct: 0,
    explanation: "Signe clinique majeur à rechercher (souvent caché dans les cheveux ou les plis) devant une fièvre estivale."
  },

  // --- DÉTAILS BIOLOGIQUES ---
  {
    id: 'arach_33',
    question: "Combien de pattes ont les larves de tiques et d'acariens ?",
    options: ["6 pattes (Hexapodes)", "8 pattes (Octopodes)", "4 pattes", "10 pattes"],
    correct: 0,
    explanation: "Piège classique. Seules les nymphes et adultes ont 8 pattes. La larve ressemble à un insecte."
  },
  {
    id: 'arach_34',
    question: "Le rostre des tiques (Hypostome) est muni de :",
    options: ["Dents rétrogrades (harpons) qui l'ancrent solidement dans la peau", "Un tube lisse", "Une ventouse", "Un dard"],
    correct: 0,
    explanation: "C'est pourquoi il est difficile de tirer une tique sans arracher la tête. Le ciment salivaire renforce la fixation."
  },
  {
    id: 'arach_35',
    question: "La transmission trans-ovarienne (verticale) chez les tiques signifie :",
    options: ["La femelle infectée transmet le pathogène (ex: Rickettsies, Babesia) à ses œufs", "Le mâle infecte la femelle", "La larve s'infecte seule", "L'œuf meurt"],
    correct: 0,
    explanation: "Ainsi, les larves qui naissent sont déjà infectantes sans avoir jamais piqué (Tique = Vecteur + Réservoir)."
  },
  
  // --- SCORPIONS (SCORPIONIDA) ---
  {
    id: 'arach_36',
    question: "Où se situe l'appareil venimeux du scorpion ?",
    options: ["Au bout de la 'queue' (telson), terminé par un aiguillon", "Dans la bouche (chélicères)", "Dans les pinces", "Sur le dos"],
    correct: 0,
    explanation: "Le telson contient deux glandes à venin et un aiguillon courbe."
  },
  {
    id: 'arach_37',
    question: "Quel genre de scorpion est le plus dangereux au Maghreb (Algérie/Tunisie/Maroc) ?",
    options: ["Androctonus (ex: A. australis) et Buthus", "Pandinus (Scorpion empereur)", "Euscorpius (petit noir)", "Heterometrus"],
    correct: 0,
    explanation: "Androctonus australis (le scorpion jaune à queue large) est responsable de la majorité des décès par envenimation scorpionique."
  },
  {
    id: 'arach_38',
    question: "Le venin de scorpion est principalement :",
    options: ["Neurotoxique (agit sur les canaux sodium/potassium)", "Hémolytique", "Nécrotisant", "Allergisant"],
    correct: 0,
    explanation: "Il provoque une libération massive de neuromédiateurs (catécholamines), causant une détresse cardio-respiratoire."
  },
  {
    id: 'arach_39',
    question: "Quel est le signe clinique de gravité majeure chez un enfant piqué par un scorpion ?",
    options: ["Priapisme, sueurs froides, vomissements, tachycardie/HTA (Orage adrénergique)", "Douleur locale seule", "Rougeur", "Démangeaison"],
    correct: 0,
    explanation: "C'est une urgence vitale. L'œdème pulmonaire cardiogénique est la cause de décès."
  },
  {
    id: 'arach_40',
    question: "Les scorpions noirs à pinces fines vivant dans les maisons en Europe (Euscorpius) sont :",
    options: ["Peu dangereux (piqûre type guêpe)", "Mortels", "Très agressifs", "Vecteurs de maladies"],
    correct: 0,
    explanation: "Leur venin est faible. En général, plus les pinces sont fines et la queue large, plus le scorpion est dangereux (Androctonus)."
  },

  // --- ARAIGNÉES (ARANEIDA) ---
  {
    id: 'arach_41',
    question: "Le Latrodectisme (Veuve Noire) se manifeste par :",
    options: ["Des douleurs musculaires généralisées, contractures abdominales (ventre de bois), angoisse", "Une nécrose de la peau", "Une hémorragie", "Un sommeil profond"],
    correct: 0,
    explanation: "Le venin (alpha-latrotoxine) est neurotoxique. Ça ressemble à une urgence chirurgicale (appendicite)."
  },
  {
    id: 'arach_42',
    question: "Le Loxoscelisme (Araignée violoniste / Recluse brune) se manifeste par :",
    options: ["Une plaque nécrotique cutanée (escarre) extensive, parfois hémolyse et insuffisance rénale", "Des spasmes musculaires", "Une paralysie", "Une fièvre immédiate"],
    correct: 0,
    explanation: "C'est un venin nécrosant (enzymatique). La lésion devient noire et creuse après quelques jours."
  },
  {
    id: 'arach_43',
    question: "L'araignée Phoneutria (Araignée banane) d'Amérique du Sud est connue pour :",
    options: ["Son agressivité et son venin neurotoxique puissant provoquant un priapisme douloureux", "Sa toile géante", "Être inoffensive", "Voler"],
    correct: 0,
    explanation: "C'est l'une des araignées les plus dangereuses au monde, souvent trouvée dans les régimes de bananes importés."
  },
  {
    id: 'arach_44',
    question: "Les Tarentules (Lycoses) et Mygales sont-elles mortelles ?",
    options: ["Rarement, leur morsure est douloureuse (mécanique) mais leur venin est peu toxique pour l'homme", "Oui, toujours", "Non, elles n'ont pas de venin", "Elles transmettent le SIDA"],
    correct: 0,
    explanation: "Leur dangerosité est exagérée par le cinéma. Les scorpions sont bien plus dangereux."
  },
  {
    id: 'arach_45',
    question: "Les poils urticants des Mygales servent à :",
    options: ["La défense (elles les bombardent en se frottant l'abdomen), causant des irritations oculaires/cutanées", "L'audition", "Le vol", "La nage"],
    correct: 0,
    explanation: "C'est souvent leur principale arme défensive contre les prédateurs, plus que la morsure."
  },

  // --- CLINIQUE COMPARÉE ---
  {
    id: 'arach_46',
    question: "Quelle lésion cutanée est typique d'une envenimation par Loxosceles (Violoniste) ?",
    options: ["Lésion en 'cocarde' : centre noir (nécrose), anneau blanc (ischémie), halo rouge (inflammation)", "Deux points rouges", "Un sillon", "Une bulle d'eau"],
    correct: 0,
    explanation: "C'est l'évolution classique vers l'escarre nécrotique."
  },
  {
    id: 'arach_47',
    question: "La différence entre une piqûre d'insecte et une morsure d'araignée est souvent :",
    options: ["L'araignée laisse deux points (chélicères) rapprochés, l'insecte un seul point", "L'araignée laisse 4 points", "L'insecte laisse une croix", "Pas de différence"],
    correct: 0,
    explanation: "Les deux crochets venimeux de l'araignée laissent une double ponction caractéristique."
  },
  {
    id: 'arach_48',
    question: "Le sérum antivenimeux est le traitement de choix pour :",
    options: ["Les envenimations graves à Scorpions (Androctonus) ou Araignées (Veuve noire/Loxosceles)", "La gale", "Les tiques", "Les aoûtats"],
    correct: 0,
    explanation: "Il neutralise les toxines circulantes. Doit être administré tôt en cas de signes systémiques."
  },
  {
    id: 'arach_49',
    question: "L'ivermectine est-elle efficace sur les poux ?",
    options: ["Oui, c'est aussi un traitement de deuxième intention des pédiculoses résistantes", "Non, uniquement sur la gale", "Non, c'est pour les vers", "C'est un antibiotique"],
    correct: 0,
    explanation: "L'ivermectine tue la plupart des ectoparasites (gale, poux) et des nématodes."
  },
  {
    id: 'arach_50',
    question: "La 'Gale des gens propres' est :",
    options: ["Une gale paucisymptomatique (peu de lésions) chez des sujets à l'hygiène rigoureuse, difficile à diagnostiquer", "Une gale imaginaire", "Une allergie au savon", "Une gale sans prurit"],
    correct: 0,
    explanation: "Le lavage fréquent élimine beaucoup de sarcoptes en surface, rendant les sillons rares et le diagnostic difficile, mais le prurit persiste."
  },
  // --- BIOLOGIE DES ACARIENS ---
  {
    id: 'arach_51',
    question: "Quelle est la nourriture principale de Sarcoptes scabiei ?",
    options: ["La kératine et les liquides tissulaires de l'épiderme", "Le sang", "Le sébum", "Les poils"],
    correct: 0,
    explanation: "Le sarcopte n'est pas hématophage (ne boit pas de sang), il est histophage (mange les tissus)."
  },
  {
    id: 'arach_52',
    question: "La durée du cycle évolutif (œuf à adulte) du sarcopte est d'environ :",
    options: ["10 à 15 jours", "2 mois", "24 heures", "1 an"],
    correct: 0,
    explanation: "C'est un cycle rapide, ce qui explique l'explosion démographique du parasite en cas d'absence de réaction immunitaire."
  },
  {
    id: 'arach_53',
    question: "Les acariens des poussières (Dermatophagoides) prolifèrent surtout :",
    options: ["Dans les matelas, oreillers et moquettes (chaleur + humidité + squames humaines)", "Dans la cuisine", "Sur les animaux", "Dehors"],
    correct: 0,
    explanation: "Ils se nourrissent de nos peaux mortes. L'éviction (housses, lavage à 60°C) est la base du traitement de l'asthme."
  },
  {
    id: 'arach_54',
    question: "L'allergie à la viande rouge (Syndrome alpha-gal) peut être déclenchée par :",
    options: ["Une morsure de tique (Amblyomma) qui sensibilise le patient à un sucre (alpha-gal)", "Une piqûre de moustique", "La gale", "Une araignée"],
    correct: 0,
    explanation: "Phénomène émergent : la salive de la tique induit une allergie croisée avec la viande de mammifère."
  },
  {
    id: 'arach_55',
    question: "Les tiques Argasidae (molles) sont souvent associées aux :",
    options: ["Pigeons (Argas reflexus) et chauves-souris, envahissant parfois les greniers", "Chiens", "Chevaux", "Poissons"],
    correct: 0,
    explanation: "Elles peuvent piquer l'homme si leur hôte habituel disparaît (ex: délogement des pigeons)."
  },

  // --- ARTHROPODES VENIMEUX (DÉTAILS) ---
  {
    id: 'arach_56',
    question: "Le venin de scorpion est plus toxique chez :",
    options: ["Les espèces à pinces fines et queue épaisse (ex: Androctonus)", "Les espèces à grosses pinces (ex: Pandinus)", "Les espèces noires", "Les espèces géantes"],
    correct: 0,
    explanation: "Règle empirique : grosses pinces = force mécanique (peu de venin) ; pinces fines = dépendance au venin puissant pour tuer."
  },
  {
    id: 'arach_57',
    question: "En cas de piqûre de scorpion, l'application de glace est-elle recommandée ?",
    options: ["Oui, pour calmer la douleur et vasoconstricter (retarder la diffusion)", "Non, ça ne sert à rien", "Non, il faut mettre du chaud", "Il faut inciser"],
    correct: 0,
    explanation: "C'est un geste de premier secours utile, contrairement au garrot ou à l'incision (dangereux)."
  },
  {
    id: 'arach_58',
    question: "L'envenimation par Phoneutria (Araignée banane) provoque un symptôme unique chez l'homme :",
    options: ["Priapisme (érection pathologique douloureuse et durable)", "Cécité", "Surdité", "Perte des cheveux"],
    correct: 0,
    explanation: "Son venin contient une toxine (Tx2-6) qui stimule fortement l'érection."
  },
  {
    id: 'arach_59',
    question: "La Veuve Noire (Latrodectus mactans) se reconnait à :",
    options: ["Son corps noir brillant avec une tache rouge en forme de sablier sous l'abdomen", "Son corps poilu", "Sa grande taille", "Ses rayures jaunes"],
    correct: 0,
    explanation: "C'est une petite araignée discrète mais très dangereuse."
  },
  {
    id: 'arach_60',
    question: "Les Atrax robustus (Sydney Funnel-web) sont des araignées :",
    options: ["Australiennes très agressives au venin neurotoxique mortel", "Inoffensives", "Américaines", "Européennes"],
    correct: 0,
    explanation: "Leur venin (atracotoxine) tue un homme en moins d'une heure sans sérum."
  },

  // --- VECTEURS & MALADIES (FOCUS TIQUES) ---
  {
    id: 'arach_61',
    question: "La Babésiose (Piroplasmose) est une maladie parasitaire transmise par :",
    options: ["Les tiques (Ixodes)", "Les puces", "Les moustiques", "Les poux"],
    correct: 0,
    explanation: "C'est le 'paludisme du Nord'. Le parasite (Babesia) infecte les globules rouges, transmis par la même tique que Lyme."
  },
  {
    id: 'arach_62',
    question: "La Tularémie (Maladie des chasseurs) peut être transmise par :",
    options: ["Morsure de tique, contact avec un lièvre malade, ou taon", "Moustique", "Puce", "Araignée"],
    correct: 0,
    explanation: "Francisella tularensis est une bactérie très virulente transmise par divers arthropodes."
  },
  {
    id: 'arach_63',
    question: "Les tiques Dermacentor (tiques ornées) transmettent :",
    options: ["La Rickettsiose (TIBOLA/DEBONEL) et la Tularémie", "Lyme", "Le SIDA", "La Gale"],
    correct: 0,
    explanation: "Elles ont un scutum orné de motifs émaillés blancs/argentés. Souvent retrouvées dans les cheveux."
  },
  {
    id: 'arach_64',
    question: "La fièvre hémorragique de Crimée-Congo (FHCC) est transmise par des tiques du genre :",
    options: ["Hyalomma", "Ixodes", "Argas", "Sarcoptes"],
    correct: 0,
    explanation: "C'est une urgence virale grave (mortalité 30%). Hyalomma est le vecteur et réservoir."
  },
  {
    id: 'arach_65',
    question: "Pourquoi les tiques sont-elles d'excellents vecteurs ?",
    options: ["Elles vivent longtemps (années), prennent de gros repas sanguins, et transmettent à leur descendance (trans-ovarienne)", "Elles volent vite", "Elles sont invisibles", "Elles sont résistantes aux antibiotiques"],
    correct: 0,
    explanation: "Elles cumulent longévité, grand volume de sang ingéré, et transmission verticale."
  },

  // --- DÉTAILS CLINIQUES (GALE & PÉDICULOSE) ---
  {
    id: 'arach_66',
    question: "Le 'signe du deltaplane' en dermatoscopie évoque :",
    options: ["La tête et les pattes avant du sarcopte au bout du sillon (Gale)", "Un pou", "Une tique", "Une myase"],
    correct: 0,
    explanation: "Image triangulaire caractéristique vue au dermatoscope qui confirme le diagnostic de gale."
  },
  {
    id: 'arach_67',
    question: "La pédiculose du corps (Poux de corps) entraîne des lésions de grattage :",
    options: ["Dans le dos (région interscapulaire) : Leucomélanodermie des vagabonds", "Sur la tête", "Sur les mains", "Sur les pieds"],
    correct: 0,
    explanation: "La peau devient épaisse et pigmentée (grise) à force de grattage chronique."
  },
  {
    id: 'arach_68',
    question: "Les aoûtats (larves de Trombicula) ne transmettent pas de maladie en Europe, mais en Asie ils transmettent :",
    options: ["Le Typhus des broussailles (Tsutsugamushi)", "La Peste", "La Dengue", "Le Paludisme"],
    correct: 0,
    explanation: "Maladie grave due à Orientia tsutsugamushi."
  },
  {
    id: 'arach_69',
    question: "La Gale croûteuse (Norvégienne) est-elle prurigineuse ?",
    options: ["Souvent peu ou pas prurigineuse (ce qui retarde le diagnostic)", "Toujours très prurigineuse", "Douloureuse", "Brûlante"],
    correct: 0,
    explanation: "L'absence de grattage est justement ce qui permet l'accumulation des croûtes."
  },
  {
    id: 'arach_70',
    question: "Le traitement de l'environnement pour les acariens (gale/poussière) nécessite une température de :",
    options: ["60°C minimum", "30°C", "40°C", "0°C"],
    correct: 0,
    explanation: "Les acariens résistent aux lavages tièdes. Il faut de l'eau très chaude ou de la vapeur."
  },

  // --- LUTTE & PRÉVENTION ---
  {
    id: 'arach_71',
    question: "Les répulsifs cutanés (DEET) sont-ils efficaces contre les tiques ?",
    options: ["Oui, mais moins longtemps que contre les moustiques (nécessite réapplication)", "Non, totalement inutiles", "Oui, ils les tuent", "Oui, à vie"],
    correct: 0,
    explanation: "Le DEET perturbe les sens de la tique, mais la protection physique (vêtements) reste supérieure."
  },
  {
    id: 'arach_72',
    question: "La désinsectisation d'une maison est-elle nécessaire pour une araignée ?",
    options: ["Non, la morsure est accidentelle et l'araignée ne cherche pas l'homme. Capturer et sortir l'animal suffit", "Oui, il faut gazer la maison", "Il faut brûler la maison", "Il faut traiter les animaux"],
    correct: 0,
    explanation: "Les araignées sont des prédateurs utiles d'insectes. Elles ne sont pas des parasites domestiques."
  },
  {
    id: 'arach_73',
    question: "Pour éviter les scorpions en bivouac, il faut :",
    options: ["Secouer ses chaussures et vêtements le matin, et ne pas dormir à même le sol", "Mettre du parfum", "Laisser la lumière allumée", "Manger de l'ail"],
    correct: 0,
    explanation: "Les scorpions cherchent la chaleur et l'abri (chaussure) la nuit."
  },
  {
    id: 'arach_74',
    question: "Le Benzoate de Benzyle (Ascabiol) est :",
    options: ["Un traitement local (lotion) de la gale", "Un comprimé", "Un vaccin", "Un shampoing poux"],
    correct: 0,
    explanation: "C'est le traitement topique classique, à appliquer au pinceau sur tout le corps (sauf visage)."
  },
  {
    id: 'arach_75',
    question: "La perméthrine en crème est utilisée pour :",
    options: ["Le traitement topique de la gale (Topiscab/Lyclear)", "Les moustiques", "Les araignées", "Les serpents"],
    correct: 0,
    explanation: "Très efficace et moins irritante que le benzoate de benzyle, c'est le standard dans de nombreux pays."
  },

  // --- ZOOLOGIE COMPARÉE ---
  {
    id: 'arach_76',
    question: "Les Pseudoscorpions (livresques) sont :",
    options: ["De minuscules arachnides inoffensifs sans queue, utiles car ils mangent les acariens", "Des bébés scorpions mortels", "Des araignées", "Des tiques"],
    correct: 0,
    explanation: "On les trouve dans les vieux livres. Ils ont des pinces mais pas de queue venimeuse."
  },
  {
    id: 'arach_77',
    question: "Les Opilions (Faucheux) se distinguent des Araignées par :",
    options: ["Leur corps en une seule partie ovale (céphalothorax et abdomen fusionnés) et leurs très longues pattes", "Ils ont des ailes", "Ils sont venimeux", "Ils tissent des toiles"],
    correct: 0,
    explanation: "Ce ne sont pas des araignées. Ils n'ont pas de venin et ne tissent pas de toile."
  },
  {
    id: 'arach_78',
    question: "Les chélicères des araignées servent à :",
    options: ["Injecter le venin et manipuler la proie", "Marcher", "Respirer", "Voir"],
    correct: 0,
    explanation: "Ce sont les pièces buccales en forme de crochets."
  },
  {
    id: 'arach_79',
    question: "Les pédipalpes chez les scorpions sont :",
    options: ["Les pinces", "Les pattes", "La queue", "La bouche"],
    correct: 0,
    explanation: "Les pinces ne sont pas des pattes, mais des appendices buccaux modifiés pour la préhension."
  },
  {
    id: 'arach_80',
    question: "Les tiques font partie de l'ordre des :",
    options: ["Acariens (Acarina)", "Araignées (Araneae)", "Scorpions", "Insectes"],
    correct: 0,
    explanation: "Les tiques SONT des acariens géants hématophages."
  },

  // --- CAS CLINIQUES (QUIZ) ---
  {
    id: 'arach_81',
    question: "Patient revenant de forêt, présente une paralysie ascendante des jambes. Pas de fièvre. Que chercher ?",
    options: ["Une tique fixée dans le cuir chevelu (Paralysie à tiques)", "Une morsure de serpent", "Une méningite", "Une fracture"],
    correct: 0,
    explanation: "Réflexe clinique : paralysie flasque sans fièvre = chercher la tique."
  },
  {
    id: 'arach_82',
    question: "Enfant avec prurit nocturne et lésions de grattage entre les doigts. Sa mère se gratte aussi. Diagnostic ?",
    options: ["Gale", "Eczéma", "Psoriasis", "Varicelle"],
    correct: 0,
    explanation: "Le caractère familial et la topographie interdigitale signent la gale."
  },
  {
    id: 'arach_83',
    question: "Jardinier avec une lésion noire nécrotique sur la main, douleur retardée, pas de fièvre. Diagnostic ?",
    options: ["Loxoscelisme cutané (Araignée violoniste)", "Piqûre de guêpe", "Morsure de vipère", "Brûlure"],
    correct: 0,
    explanation: "L'escarre nécrotique est typique du venin de Loxosceles."
  },
  {
    id: 'arach_84',
    question: "Randonneur avec fièvre élevée au retour d'été, et une tache noire sur la jambe. Diagnostic ?",
    options: ["Fièvre Boutonneuse Méditerranéenne (Rickettsiose)", "Grippe", "Insolation", "Allergie"],
    correct: 0,
    explanation: "La tache noire (escarre d'inoculation) est le site de morsure de la tique Rhipicephalus."
  },
  {
    id: 'arach_85',
    question: "Homme piqué au pied la nuit en marchant, douleur atroce immédiate, sueurs, vomissements. Diagnostic ?",
    options: ["Envenimation scorpionique", "Gale", "Tique", "Aoûtat"],
    correct: 0,
    explanation: "La douleur immédiate et les signes généraux (adrénergiques) évoquent le scorpion."
  },

  // --- DIVERS (ANTIGÈNES, SYMBIOSE) ---
  {
    id: 'arach_86',
    question: "Les allergènes majeurs des acariens (Der p 1) sont :",
    options: ["Des enzymes digestives présentes dans leurs fèces", "Leur sang", "Leurs pattes", "Leurs œufs"],
    correct: 0,
    explanation: "Les crottes d'acariens contiennent des protéases qui traversent les muqueuses respiratoires."
  },
  {
    id: 'arach_87',
    question: "Wolbachia est une bactérie endosymbiotique présente chez :",
    options: ["De nombreuses filaires et insectes, mais pas les tiques Ixodes", "Les tiques uniquement", "Les scorpions", "L'homme"],
    correct: 0,
    explanation: "Elle est la cible de la Doxycycline dans le traitement des filarioses, mais absente chez Ixodes (qui a d'autres symbiotes)."
  },
  {
    id: 'arach_88',
    question: "Le terme 'Mite' en anglais désigne :",
    options: ["Les Acariens (sauf les tiques)", "Les Moustiques", "Les Fourmis", "Les Rats"],
    correct: 0,
    explanation: "House Dust Mite = Acarien de poussière. Scabies Mite = Sarcoptes."
  },
  {
    id: 'arach_89',
    question: "La 'Gale des oreilles' du chat (Otodectes) peut-elle toucher l'homme ?",
    options: ["Rarement, donne des papules passagères, mais ne s'installe pas", "Oui, c'est mortel", "C'est la même que la gale humaine", "Non, jamais"],
    correct: 0,
    explanation: "Spécificité d'hôte. Nos oreilles ne leur conviennent pas."
  },
  {
    id: 'arach_90',
    question: "Les tiques Argas (molles) peuvent survivre sans manger pendant :",
    options: ["Plusieurs années (5-10 ans)", "24 heures", "1 semaine", "1 mois"],
    correct: 0,
    explanation: "Leur résistance au jeûne est phénoménale, rendant l'éradication dans les habitats difficile."
  },
  {
    id: 'arach_91',
    question: "Le principal prédateur naturel des tiques est :",
    options: ["Certains oiseaux (pintades, poules) et guêpes parasitoïdes", "Le loup", "L'homme", "Le chat"],
    correct: 0,
    explanation: "La lutte biologique par les oiseaux de basse-cour est anecdotique mais existe."
  },
  {
    id: 'arach_92',
    question: "L'acarophobie est :",
    options: ["La peur irrationnelle d'être infesté par des acariens/gale (délire parasitaire)", "La peur des araignées (Arachnophobie)", "La peur des tiques", "La peur des scorpions"],
    correct: 0,
    explanation: "Le patient s'excorie la peau pour 'enlever' des parasites invisibles."
  },
  {
    id: 'arach_93',
    question: "Les scorpions sont fluorescents sous :",
    options: ["La lumière UV (Lumière noire)", "La lumière rouge", "Le soleil", "La lune"],
    correct: 0,
    explanation: "Leur cuticule contient une substance fluorescente. Utile pour les chasser ou les éviter la nuit."
  },
  {
    id: 'arach_94',
    question: "La 'Danse de Saint-Guy' (Chorée) était historiquement attribuée à :",
    options: ["La morsure de la Tarentule (Tarentisme) en Italie", "Un scorpion", "Une tique", "Un pou"],
    correct: 0,
    explanation: "On croyait devoir danser (Tarentelle) pour évacuer le venin."
  },
  {
    id: 'arach_95',
    question: "Les tiques ixodidae s'accouplent généralement :",
    options: ["Sur l'hôte, pendant le repas sanguin de la femelle", "Au sol", "Dans l'eau", "En vol"],
    correct: 0,
    explanation: "Le mâle cherche la femelle fixée sur l'animal pour la féconder pendant qu'elle mange."
  },
  {
    id: 'arach_96',
    question: "La spermathèque des tiques femelles sert à :",
    options: ["Stocker les spermatozoïdes pour féconder les œufs au moment de la ponte (après la chute de l'hôte)", "Digérer le sang", "Respirer", "Rien"],
    correct: 0,
    explanation: "La ponte a lieu au sol, une fois la femelle gorgée et tombée."
  },
  {
    id: 'arach_97',
    question: "Quelle est la taille d'un sarcopte adulte ?",
    options: ["0,3 à 0,4 mm (limite de la visibilité à l'œil nu, point blanc)", "1 cm", "1 mètre", "Microscopique invisible"],
    correct: 0,
    explanation: "C'est un point blanc minuscule au bout du sillon."
  },
  {
    id: 'arach_98',
    question: "Les chélicères des tiques sont adaptées pour :",
    options: ["Lacérer la peau (ciseaux) avant d'insérer l'hypostome", "Aspirer", "Injecter", "Mordre"],
    correct: 0,
    explanation: "Ce sont des outils de coupe chirurgicale."
  },
  {
    id: 'arach_99',
    question: "Le 'Gorgement' de la tique est dû à :",
    options: ["La synthèse de nouvelle cuticule (néosynthèse) permettant l'extension massive de l'abdomen", "L'élasticité simple", "L'eau", "L'air"],
    correct: 0,
    explanation: "La tique fabrique de la peau pour pouvoir grossir de 100 fois son poids."
  },
  {
    id: 'arach_100',
    question: "En conclusion, quel est l'arachnide vecteur le plus important en médecine humaine ?",
    options: ["La Tique (Vecteur de Lyme, TBE, Fièvres hémorragiques...)", "Le Scorpion", "L'Araignée", "Le Sarcopte"],
    correct: 0,
    explanation: "Après le moustique, la tique est le 2ème vecteur mondial de maladies infectieuses."
  }
];

export default arachnids;
