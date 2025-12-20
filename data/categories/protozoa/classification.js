export const classification = [
  // --- PART 1: GENERAL TAXONOMY & PHYLA ---
  {
    id: 'p_class_1',
    question: "Les Protozoaires sont définis comme des organismes :",
    options: ["Eucaryotes unicellulaires doués de mouvement", "Procaryotes unicellulaires", "Eucaryotes pluricellulaires", "Champignons microscopiques"],
    correct: 0,
    explanation: "Ce sont des organismes eucaryotes (avec noyau vrai) unicellulaires, hétérotrophes et généralement mobiles."
  },
  {
    id: 'p_class_2',
    question: "Le Phylum des Sarcomastigophora regroupe deux sous-phylums majeurs :",
    options: ["Sarcodina (Amibes) et Mastigophora (Flagellés)", "Ciliophora et Apicomplexa", "Sporozoa et Cnidospora", "Nématodes et Cestodes"],
    correct: 0,
    explanation: "Ce phylum regroupe les protozoaires se déplaçant par pseudopodes (Sarcodina) ou par flagelles (Mastigophora)."
  },
  {
    id: 'p_class_3',
    question: "Le Phylum Apicomplexa (Sporozoaires) se caractérise par :",
    options: ["La présence d'un complexe apical et l'absence d'organites locomoteurs visibles (sauf gamètes)", "La présence de cils vibratiles", "La présence de pseudopodes", "Une coquille calcaire"],
    correct: 0,
    explanation: "Ils sont tous parasites obligatoires et possèdent un complexe apical pour pénétrer les cellules hôtes."
  },
  {
    id: 'p_class_4',
    question: "À quel embranchement appartient Balantidium coli ?",
    options: ["Ciliophora (Ciliés)", "Sarcomastigophora", "Apicomplexa", "Microsporidia"],
    correct: 0,
    explanation: "C'est le seul représentant pathogène des Ciliophora chez l'homme, caractérisé par la présence de cils et de deux noyaux."
  },
  {
    id: 'p_class_5',
    question: "Les Microsporidies (ex: Enterocytozoon), autrefois classées comme protozoaires, sont aujourd'hui phylogénétiquement proches des :",
    options: ["Champignons (Fungi)", "Bactéries", "Virus", "Algues"],
    correct: 0,
    explanation: "Les analyses génétiques ont montré qu'elles sont des champignons unicellulaires très spécialisés, mais elles restent étudiées en parasitologie."
  },

  // --- PART 2: FLAGELLATES (MASTIGOPHORA) ---
  {
    id: 'p_class_6',
    question: "L'ordre des Kinetoplastida inclut quels genres importants ?",
    options: ["Trypanosoma et Leishmania", "Giardia et Trichomonas", "Entamoeba et Endolimax", "Plasmodium et Babesia"],
    correct: 0,
    explanation: "Les Kinetoplastida se caractérisent par la présence d'un kinétoplaste (ADN mitochondrial condensé) à la base du flagelle."
  },
  {
    id: 'p_class_7',
    question: "Giardia intestinalis appartient à l'ordre des :",
    options: ["Diplomonadida", "Trichomonadida", "Kinetoplastida", "Amoebida"],
    correct: 0,
    explanation: "Les Diplomonadida sont caractérisés par une symétrie bilatérale, deux noyaux et pas de mitochondries classiques."
  },
  {
    id: 'p_class_8',
    question: "Trichomonas vaginalis appartient à la famille des :",
    options: ["Trichomonadidae", "Trypanosomatidae", "Hexamitidae", "Entamoebidae"],
    correct: 0,
    explanation: "Les Trichomonadidae sont des flagellés parabasaliens possédant un axostyle et une membrane ondulante."
  },
  {
    id: 'p_class_9',
    question: "Quel flagellé est classé parmi les 'Flagellés intestinaux non pathogènes' (Commensaux) ?",
    options: ["Chilomastix mesnili", "Giardia intestinalis", "Leishmania donovani", "Trypanosoma brucei"],
    correct: 0,
    explanation: "Chilomastix mesnili est un commensal fréquent du côlon, témoin de péril fécal mais non pathogène."
  },
  {
    id: 'p_class_10',
    question: "Dientamoeba fragilis a été reclassé récemment parmi les :",
    options: ["Flagellés (Trichomonadida)", "Amibes (Entamoebidae)", "Ciliés", "Sporozoaires"],
    correct: 0,
    explanation: "Bien qu'il se déplace par pseudopodes (aspect amiboïde), l'analyse génétique et ultrastructurale le place parmi les flagellés trichomonadés."
  },

  // --- PART 3: AMOEBAS (RHIZOPODA) ---
  {
    id: 'p_class_11',
    question: "Le genre Entamoeba appartient à la famille des :",
    options: ["Entamoebidae", "Vahlkampfiidae", "Acanthamoebidae", "Hartmannellidae"],
    correct: 0,
    explanation: "C'est la famille principale des amibes parasites du tube digestif."
  },
  {
    id: 'p_class_12',
    question: "Les amibes libres pathogènes ('Amphizoïques') incluent les genres :",
    options: ["Naegleria, Acanthamoeba, Balamuthia", "Entamoeba, Endolimax, Iodamoeba", "Giardia, Trichomonas", "Plasmodium, Babesia"],
    correct: 0,
    explanation: "Ce sont des amibes qui vivent librement dans l'environnement (eau, sol) mais peuvent parasiter l'homme accidentellement."
  },
  {
    id: 'p_class_13',
    question: "Naegleria fowleri appartient à la classe des :",
    options: ["Heterolobosea (Amibo-flagellés)", "Lobosea", "Filosea", "Granuloreticulosea"],
    correct: 0,
    explanation: "Elle peut alterner entre une forme amibe et une forme flagellée, d'où sa classification à part des amibes strictes."
  },
  {
    id: 'p_class_14',
    question: "Laquelle de ces amibes est considérée comme une 'Amibe non pathogène' (Commensale) ?",
    options: ["Entamoeba coli", "Entamoeba histolytica", "Acanthamoeba castellanii", "Naegleria fowleri"],
    correct: 0,
    explanation: "Entamoeba coli est un hôte habituel et inoffensif du gros intestin, à ne pas confondre avec E. histolytica."
  },
  {
    id: 'p_class_15',
    question: "Blastocystis hominis est actuellement classé dans le groupe des :",
    options: ["Stramenopiles (hétérocontes)", "Amibes", "Levures", "Flagellés"],
    correct: 0,
    explanation: "C'est une révolution taxonomique : il est plus proche des algues brunes et des diatomées que des protozoaires classiques."
  },

  // --- PART 4: APICOMPLEXA (COCCIDIA & HAEMOSPORIDIA) ---
  {
    id: 'p_class_16',
    question: "La classe des Coccidea (Coccidies) inclut les genres :",
    options: ["Toxoplasma, Isospora, Cryptosporidium", "Plasmodium, Babesia", "Entamoeba, Giardia", "Leishmania, Trypanosoma"],
    correct: 0,
    explanation: "Ce sont des parasites intracellulaires obligatoires de l'épithélium intestinal (sauf Toxoplasma qui est tissulaire)."
  },
  {
    id: 'p_class_17',
    question: "L'ordre des Haemosporidia (Hémosporidies) contient le genre :",
    options: ["Plasmodium", "Toxoplasma", "Eimeria", "Cyclospora"],
    correct: 0,
    explanation: "Ce sont des Apicomplexa qui parasitent les cellules sanguines et sont transmis par des vecteurs arthropodes."
  },
  {
    id: 'p_class_18',
    question: "Babesia (Piroplasmes) est phylogénétiquement très proche de :",
    options: ["Theileria et Plasmodium", "Trypanosoma", "Entamoeba", "Toxoplasma"],
    correct: 0,
    explanation: "Ils appartiennent tous deux aux Apicomplexa sanguicoles, bien que Babesia soit transmis par des tiques et non des moustiques."
  },
  {
    id: 'p_class_19',
    question: "Cryptosporidium est parfois classé à part des autres coccidies car :",
    options: ["Il est plus proche des Grégarines", "Il possède des flagelles", "Il a un kinétoplaste", "Il est extracellulaire"],
    correct: 0,
    explanation: "Des études récentes suggèrent qu'il est évolutivement distinct des coccidies classiques (Eimeria) et proche des Grégarines primitives."
  },
  {
    id: 'p_class_20',
    question: "Sarcocystis appartient à la famille des :",
    options: ["Sarcocystidae", "Plasmodiidae", "Eimeriidae", "Cryptosporidiidae"],
    correct: 0,
    explanation: "Cette famille (incluant aussi Toxoplasma) se caractérise par un cycle hétéroxène facultatif ou obligatoire kystique."
  },

  // --- PART 5: VECTORS & HOSTS CLASSIFICATION ---
  {
    id: 'p_class_21',
    question: "Les protozoaires 'Hétéroxènes' sont ceux qui :",
    options: ["Ont besoin de plusieurs hôtes pour compléter leur cycle", "N'ont qu'un seul hôte", "Vivent librement", "Sont hermaphrodites"],
    correct: 0,
    explanation: "Hétéroxène = Cycle complexe impliquant au moins un hôte définitif et un hôte intermédiaire (ex: Plasmodium)."
  },
  {
    id: 'p_class_22',
    question: "Les protozoaires 'Monoxènes' (cycle direct) incluent :",
    options: ["Entamoeba histolytica et Giardia lamblia", "Plasmodium falciparum", "Trypanosoma brucei", "Leishmania infantum"],
    correct: 0,
    explanation: "Ils se transmettent directement d'homme à homme (ou via l'environnement) sans passer par un autre animal ou vecteur."
  },
  {
    id: 'p_class_23',
    question: "Trypanosoma cruzi (Maladie de Chagas) appartient à la section des :",
    options: ["Stercoraria", "Salivaria", "Cysticeria", "Sporozoa"],
    correct: 0,
    explanation: "Stercoraria = Transmission par les fèces du vecteur (la punaise dépose ses déjections infectantes sur la peau)."
  },
  {
    id: 'p_class_24',
    question: "Trypanosoma brucei (Maladie du sommeil) appartient à la section des :",
    options: ["Salivaria", "Stercoraria", "Fecalia", "Urinaria"],
    correct: 0,
    explanation: "Salivaria = Transmission par la salive lors de la piqûre (la glossine injecte les parasites)."
  },
  {
    id: 'p_class_25',
    question: "Quel parasite est une 'Zoonose' (réservoir animal important) ?",
    options: ["Balantidium coli (Porc)", "Plasmodium falciparum (Homme strict)", "Entamoeba histolytica (Homme strict)", "Trichomonas vaginalis (Homme strict)"],
    correct: 0,
    explanation: "Balantidium coli est un parasite habituel du porc, qui est le réservoir principal contaminant l'homme."
  },

  // --- PART 6: MOLECULAR & EVOLUTIONARY CLASSIFICATION ---
  {
    id: 'p_class_26',
    question: "Les 'Excavata' sont un super-groupe d'eucaryotes incluant :",
    options: ["Giardia, Trichomonas, Trypanosoma", "Amoebozoa", "Opisthokonta", "Archaeplastida"],
    correct: 0,
    explanation: "C'est un groupe majeur caractérisé par une structure de 'sillon ventral' (excavation) primitive, incluant la plupart des flagellés parasites."
  },
  {
    id: 'p_class_27',
    question: "Le super-groupe 'Amoebozoa' contient :",
    options: ["Entamoeba et Acanthamoeba", "Giardia", "Plasmodium", "Leishmania"],
    correct: 0,
    explanation: "Ce groupe rassemble les organismes se déplaçant par pseudopodes lobés (Lobosea)."
  },
  {
    id: 'p_class_28',
    question: "Les Chromalveolata (Alveolata) incluent :",
    options: ["Apicomplexa et Ciliophora", "Excavata", "Rhizaria", "Unikonta"],
    correct: 0,
    explanation: "Ils partagent la présence d'alvéoles corticaux (sacs membranaires) sous la membrane plasmique."
  },
  {
    id: 'p_class_29',
    question: "Pneumocystis jirovecii, historiquement traité en parasitologie, est un :",
    options: ["Champignon (Ascomycète)", "Protozoaire", "Bactérie", "Virus"],
    correct: 0,
    explanation: "Bien qu'il réponde aux antiparasitaires, son ARN ribosomique montre qu'il appartient au règne des Fungi."
  },
  {
    id: 'p_class_30',
    question: "Quel terme désigne un protozoaire qui vit aux dépens de l'hôte sans lui nuire ?",
    options: ["Commensal", "Parasite pathogène", "Symbiote mutualiste", "Prédateur"],
    correct: 0,
    explanation: "Le commensalisme est une association bénéfique pour le parasite (gîte et couvert) mais neutre pour l'hôte."
  },

  // --- PART 7: GENUS SPECIFIC CLASSIFICATION ---
  {
    id: 'p_class_31',
    question: "Le genre Plasmodium compte 5 espèces infectant l'homme naturellement, dont la plus récente reconnue est :",
    options: ["Plasmodium knowlesi", "Plasmodium cynomolgi", "Plasmodium brasilianum", "Plasmodium simium"],
    correct: 0,
    explanation: "P. knowlesi, parasite du macaque, est désormais reconnu comme la 5ème espèce causant le paludisme humain (Zoonose en Asie)."
  },
  {
    id: 'p_class_32',
    question: "Le complexe 'Entamoeba histolytica / dispar / moshkovskii' regroupe des amibes :",
    options: ["Morphologiquement identiques mais génétiquement différentes", "Morphologiquement très différentes", "De tailles différentes", "Flagellées"],
    correct: 0,
    explanation: "On ne peut pas les distinguer au microscope optique standard, seule la biologie moléculaire ou les tests enzymatiques le peuvent."
  },
  {
    id: 'p_class_33',
    question: "Leishmania infantum appartient au complexe :",
    options: ["Leishmania donovani", "Leishmania tropica", "Leishmania major", "Leishmania braziliensis"],
    correct: 0,
    explanation: "C'est l'agent de la leishmaniose viscérale (Kala-Azar) dans le bassin méditerranéen, appartenant au groupe L. donovani."
  },
  {
    id: 'p_class_34',
    question: "Trypanosoma brucei rhodesiense est l'agent de la maladie du sommeil en :",
    options: ["Afrique de l'Est (Savane)", "Afrique de l'Ouest (Forêt)", "Amérique du Sud", "Asie"],
    correct: 0,
    explanation: "C'est la forme aiguë de la trypanosomose, zoonotique, présente en Afrique orientale et australe."
  },
  {
    id: 'p_class_35',
    question: "Cyclospora cayetanensis a été classé parmi les coccidies grâce à sa ressemblance avec le genre :",
    options: ["Eimeria", "Isospora", "Toxoplasma", "Sarcocystis"],
    correct: 0,
    explanation: "Ses oocystes sporulés contiennent 2 sporocystes, une caractéristique typique des Eimeriidae."
  },

  // --- PART 8: REPRODUCTION & LIFECYCLE CLASSIFICATION ---
  {
    id: 'p_class_36',
    question: "Les protozoaires qui se divisent par 'Schizogonie' sont :",
    options: ["Les Sporozoaires (ex: Plasmodium)", "Les Flagellés", "Les Amibes", "Les Ciliés"],
    correct: 0,
    explanation: "La schizogonie est une reproduction asexuée multiple typique des Apicomplexa."
  },
  {
    id: 'p_class_37',
    question: "La 'Conjugaison' est un mode de reproduction sexuée spécifique aux :",
    options: ["Ciliés (ex: Balantidium)", "Flagellés", "Amibes", "Sporozoaires"],
    correct: 0,
    explanation: "Les ciliés échangent du matériel génétique (micronoyaux) via un pont cytoplasmique."
  },
  {
    id: 'p_class_38',
    question: "La 'Fission binaire longitudinale' est le mode de division des :",
    options: ["Flagellés", "Ciliés (Transversale)", "Amibes (Quelconque)", "Sporozoaires"],
    correct: 0,
    explanation: "Les flagellés se divisent dans le sens de la longueur (longitudinal)."
  },
  {
    id: 'p_class_39',
    question: "Les parasites 'Opportunistes' sont classés ainsi car :",
    options: ["Ils ne deviennent pathogènes que chez les immunodéprimés", "Ils profitent de la nourriture de l'hôte", "Ils sont toujours mortels", "Ils sont rares"],
    correct: 0,
    explanation: "Ex: Cryptosporidium, Toxoplasma, Microsporidies, qui sont bénins chez le sujet sain mais graves chez le patient SIDA."
  },
  {
    id: 'p_class_40',
    question: "Un parasite 'Sténoxène' est un parasite qui :",
    options: ["A une spécificité d'hôte très étroite (ex: P. falciparum chez l'homme)", "Peut infecter de nombreux animaux", "Vit dans le sang", "A un cycle simple"],
    correct: 0,
    explanation: "Contrairement aux parasites euryxènes (spectre large), les sténoxènes sont très exigeants et infectent peu d'espèces."
  },

  // --- PART 9: HISTORICAL & MISC ---
  {
    id: 'p_class_41',
    question: "Qui a découvert l'hématozoaire du paludisme (Plasmodium) ?",
    options: ["Alphonse Laveran", "Ronald Ross", "Louis Pasteur", "Robert Koch"],
    correct: 0,
    explanation: "Alphonse Laveran, médecin militaire français, a observé le parasite pour la première fois en Algérie en 1880."
  },
  {
    id: 'p_class_42',
    question: "Le terme 'Amibe' vient du grec 'amoibe' qui signifie :",
    options: ["Changement / Transformation", "Gelée", "Mangeur", "Invisible"],
    correct: 0,
    explanation: "Cela fait référence à leur capacité constante à changer de forme grâce aux pseudopodes."
  },
  {
    id: 'p_class_43',
    question: "Les 'Ameobo-flagellés' comme Naegleria sont un lien évolutif entre :",
    options: ["Les amibes et les flagellés", "Les amibes et les champignons", "Les plantes et les animaux", "Les bactéries et les virus"],
    correct: 0,
    explanation: "Leur capacité à exprimer des flagelles sous stress montre la plasticité génétique des protozoaires primitifs."
  },
  {
    id: 'p_class_44',
    question: "Quelle espèce de Leishmania cause la forme cutanéo-muqueuse (Espundia) ?",
    options: ["Leishmania braziliensis", "Leishmania donovani", "Leishmania major", "Leishmania infantum"],
    correct: 0,
    explanation: "C'est une forme défigurante du Nouveau Monde (Amérique du Sud), classée dans le complexe Viannia."
  },
  {
    id: 'p_class_45',
    question: "Lequel est un flagellé urogénital ?",
    options: ["Trichomonas vaginalis", "Giardia intestinalis", "Trypanosoma brucei", "Leishmania"],
    correct: 0,
    explanation: "C'est la seule IST majeure causée par un protozoaire, colonisant le vagin et l'urètre."
  },
  {
    id: 'p_class_46',
    question: "Les Isospora sont désormais souvent appelés :",
    options: ["Cystoisospora", "Eimeria", "Cyclospora", "Sarcocystis"],
    correct: 0,
    explanation: "Le nom scientifique correct et moderne pour l'espèce humaine est Cystoisospora belli."
  },
  {
    id: 'p_class_47',
    question: "Le genre Babesia est transmis par :",
    options: ["Les tiques (Ixodes)", "Les moustiques", "Les phlébotomes", "Les mouches"],
    correct: 0,
    explanation: "Contrairement au Paludisme, la Babésiose est une maladie transmise par les tiques dures."
  },
  {
    id: 'p_class_48',
    question: "Quelle forme parasitaire n'existe PAS chez les protozoaires ?",
    options: ["L'œuf (Embryophore)", "Le kyste", "Le trophozoïte", "L'oocyste"],
    correct: 0,
    explanation: "Les protozoaires ne pondent pas d'œufs. Ce sont les Helminthes (Vers) qui pondent des œufs."
  },
  {
    id: 'p_class_49',
    question: "Les 'Hémoflagellés' incluent :",
    options: ["Trypanosoma et Leishmania", "Plasmodium et Babesia", "Giardia et Trichomonas", "Entamoeba"],
    correct: 0,
    explanation: "Ce sont des flagellés qui vivent dans le sang ou les tissus profonds (système réticulo-endothélial)."
  },
  {
    id: 'p_class_50',
    question: "La classification moderne basée sur l'ARNr 18S divise les eucaryotes en 6 super-groupes. Leishmania est dans :",
    options: ["Excavata", "Chromalveolata", "Rhizaria", "Amoebozoa"],
    correct: 0,
    explanation: "Comme tous les Trypanosomatidae, Leishmania appartient au super-groupe Excavata."
  },
  {
    id: 'p_class_51',
    question: "Quel genre de moustique transmet le genre Plasmodium ?",
    options: ["Anopheles", "Aedes", "Culex", "Phlebotomus"],
    correct: 0,
    explanation: "Seules les femelles d'Anophèles sont vectrices du paludisme humain."
  },
  {
    id: 'p_class_52',
    question: "Les Phlébotomes (Sandflies) sont les vecteurs biologiques de :",
    options: ["Leishmania", "Trypanosoma", "Plasmodium", "Giardia"],
    correct: 0,
    explanation: "Ces petits moucherons velus transmettent la leishmaniose lors de leur repas sanguin."
  },
  {
    id: 'p_class_53',
    question: "La mouche Tsé-tsé (Glossina) est le vecteur de :",
    options: ["Trypanosoma brucei (Maladie du sommeil)", "Trypanosoma cruzi (Chagas)", "Leishmania", "Loa loa"],
    correct: 0,
    explanation: "La Tsé-tsé est strictement africaine, ce qui limite la maladie du sommeil à ce continent."
  },
  {
    id: 'p_class_54',
    question: "Les Réduves (Triatomes) sont les vecteurs de :",
    options: ["Trypanosoma cruzi", "Trypanosoma brucei", "Leishmania", "Babesia"],
    correct: 0,
    explanation: "Ces grosses punaises d'Amérique latine transmettent la maladie de Chagas par leurs déjections."
  },
  {
    id: 'p_class_55',
    question: "Le chat (Félidés) est l'hôte définitif exclusif de :",
    options: ["Toxoplasma gondii", "Giardia", "Plasmodium", "Leishmania"],
    correct: 0,
    explanation: "C'est seulement dans l'intestin du chat que la reproduction sexuée de Toxoplasma a lieu (production d'oocystes)."
  },

  // --- PART 11: SUB-GROUPS & FAMILIES ---
  {
    id: 'p_class_56',
    question: "Les Diplomonadines (ex: Giardia) se caractérisent par la possession de :",
    options: ["2 noyaux (caryomastigotes) et une symétrie bilatérale", "1 seul noyau", "De nombreux noyaux", "Aucun noyau"],
    correct: 0,
    explanation: "Le terme 'Diplo-monas' signifie littéralement 'deux unités', référant aux deux noyaux symétriques."
  },
  {
    id: 'p_class_57',
    question: "La famille des Trypanosomatidae inclut uniquement des parasites :",
    options: ["Monoflagellés (un seul flagelle)", "Multiflagellés", "Ciliés", "Amiboïdes"],
    correct: 0,
    explanation: "Ils possèdent un seul flagelle (parfois formant une membrane ondulante) et un kinétoplaste."
  },
  {
    id: 'p_class_58',
    question: "Le terme 'Apicomplexa' remplace l'ancien terme :",
    options: ["Sporozoaires", "Cnidosporidies", "Amibes", "Infusoires"],
    correct: 0,
    explanation: "Le terme Sporozoa est jugé obsolète car il regroupait des organismes non apparentés (comme les Microsporidies)."
  },
  {
    id: 'p_class_59',
    question: "Les Coccidies intestinales incluent trois genres majeurs pathogènes pour l'homme :",
    options: ["Cryptosporidium, Cyclospora, Cystoisospora", "Giardia, Entamoeba, Trichomonas", "Plasmodium, Babesia, Toxoplasma", "Leishmania, Trypanosoma"],
    correct: 0,
    explanation: "Ce trio forme le groupe des coccidies causant des diarrhées, souvent opportunistes."
  },
  {
    id: 'p_class_60',
    question: "Les amibes du groupe 'Limax' (ex: Naegleria, Acanthamoeba) sont appelées ainsi car :",
    options: ["Elles se déplacent comme des limaces", "Elles sont visqueuses", "Elles vivent sur les limaces", "Elles n'ont pas de coquille"],
    correct: 0,
    explanation: "Leur déplacement unidirectionnel et fluide rappelle celui d'une limace (Limax)."
  },

  // --- PART 12: ECOLOGICAL CLASSIFICATION ---
  {
    id: 'p_class_61',
    question: "Un parasite 'Cosmopolite' est un parasite qui :",
    options: ["Est présent partout dans le monde", "Vit dans les villes", "Vit dans l'espace", "Est rare"],
    correct: 0,
    explanation: "Ex: Giardia intestinalis et Cryptosporidium sont trouvés sur tous les continents."
  },
  {
    id: 'p_class_62',
    question: "Un parasite 'Tropical' strict est limité par :",
    options: ["La présence de son vecteur (climat chaud)", "La nourriture", "L'eau", "L'altitude"],
    correct: 0,
    explanation: "Ex: La maladie du sommeil ou le paludisme à P. falciparum dépendent de la température nécessaire au vecteur."
  },
  {
    id: 'p_class_63',
    question: "Lequel est un parasite 'Xénophile' (transmis par vecteur) ?",
    options: ["Plasmodium", "Giardia", "Entamoeba", "Trichomonas"],
    correct: 0,
    explanation: "Giardia, Entamoeba et Trichomonas sont transmis directement (eau/contact). Plasmodium nécessite un vecteur."
  },
  {
    id: 'p_class_64',
    question: "Les 'Amibes libres' sont des parasites :",
    options: ["Accidentels (Facultatifs)", "Obligatoires", "Permanents", "Symbiotiques"],
    correct: 0,
    explanation: "Elles vivent normalement librement dans la nature et n'infectent l'homme que par accident (impasse parasitaire souvent)."
  },
  {
    id: 'p_class_65',
    question: "Les parasites 'Intracellulaires obligatoires' ne peuvent vivre qu'à l'intérieur d'une cellule. Ex :",
    options: ["Toxoplasma, Plasmodium, Leishmania", "Giardia, Trichomonas", "Entamoeba, Balantidium", "Trypanosoma (stade sanguin)"],
    correct: 0,
    explanation: "Ils ont besoin de la machinerie cellulaire hôte pour se diviser et se cacher du système immunitaire."
  },

  // --- PART 13: TERMINOLOGY QUIZ ---
  {
    id: 'p_class_66',
    question: "Quelle est la différence entre un 'Kyste' et un 'Oocyste' ?",
    options: ["Le kyste est végétatif/résistance, l'oocyste est le produit de la reproduction sexuée", "Le kyste est sexué, l'oocyste asexué", "C'est la même chose", "Le kyste est mobile"],
    correct: 0,
    explanation: "L'Oocyste (œuf-kyste) résulte toujours de la fécondation (zygote), alors que le Kyste est une forme de résistance asexuée."
  },
  {
    id: 'p_class_67',
    question: "Le terme 'Trophozoïte' désigne la forme :",
    options: ["Végétative active (nutrition/division)", "De résistance", "Infectante du moustique", "Sexuée"],
    correct: 0,
    explanation: "C'est la forme qui cause la pathologie dans l'hôte."
  },
  {
    id: 'p_class_68',
    question: "Un hôte 'Définitif' est celui qui héberge :",
    options: ["La forme sexuée (adulte) du parasite", "La forme larvaire", "La forme asexuée", "Le vecteur"],
    correct: 0,
    explanation: "Par définition, c'est l'hôte où a lieu la reproduction sexuelle. (Ex: Anophèle pour Plasmodium, Chat pour Toxoplasma)."
  },
  {
    id: 'p_class_69',
    question: "Un hôte 'Intermédiaire' héberge :",
    options: ["Les formes larvaires ou asexuées", "Les formes adultes sexuées", "Aucun parasite", "Uniquement les kystes"],
    correct: 0,
    explanation: "C'est un hôte nécessaire au cycle pour la maturation ou la multiplication asexuée."
  },
  {
    id: 'p_class_70',
    question: "Une 'Impasse parasitaire' se produit lorsque :",
    options: ["Le parasite infecte un hôte où il ne peut pas poursuivre son cycle", "Le parasite meurt immédiatement", "Le parasite tue l'hôte", "Le parasite se multiplie indéfiniment"],
    correct: 0,
    explanation: "Ex: Naegleria fowleri chez l'homme. Le parasite ne peut pas être transmis à un autre hôte, le cycle s'arrête."
  },

  // --- PART 14: IDENTIFICATION BY GROUP ---
  {
    id: 'p_class_71',
    question: "Groupe : Flagellé sanguin transmis par piqûre. Lequel ?",
    options: ["Trypanosoma", "Giardia", "Trichomonas", "Entamoeba"],
    correct: 0,
    explanation: "Trypanosoma vit dans le plasma sanguin."
  },
  {
    id: 'p_class_72',
    question: "Groupe : Protozoaire tissulaire causant des malformations fœtales. Lequel ?",
    options: ["Toxoplasma gondii", "Plasmodium", "Leishmania", "Giardia"],
    correct: 0,
    explanation: "La toxoplasmose congénitale est le danger majeur de ce parasite."
  },
  {
    id: 'p_class_73',
    question: "Groupe : Amibe intestinale hématophage. Laquelle ?",
    options: ["Entamoeba histolytica", "Entamoeba coli", "Entamoeba hartmanni", "Endolimax nana"],
    correct: 0,
    explanation: "Seule la forme histolytica est capable de manger des globules rouges (hématophagie)."
  },
  {
    id: 'p_class_74',
    question: "Groupe : Coccidie opportuniste causant des diarrhées aqueuses chez le sidéen. Laquelle ?",
    options: ["Cryptosporidium parvum", "Plasmodium", "Leishmania", "Trichomonas"],
    correct: 0,
    explanation: "La cryptosporidiose est une cause majeure de diarrhée chronique chez les patients VIH+."
  },
  {
    id: 'p_class_75',
    question: "Groupe : Flagellé commensal de la bouche. Lequel ?",
    options: ["Trichomonas tenax", "Trichomonas vaginalis", "Giardia", "Chilomastix"],
    correct: 0,
    explanation: "Il vit dans le tartre dentaire et les poches parodontales."
  },

  // --- PART 15: MOLECULAR PHYLOGENY (BONUS) ---
  {
    id: 'p_class_76',
    question: "Les Kinetoplastida (Leishmania, Trypanosoma) sont uniques car ils possèdent :",
    options: ["Un organite appelé glycosome (pour la glycolyse)", "Des chloroplastes", "Une paroi cellulaire", "Des cils"],
    correct: 0,
    explanation: "Le glycosome est un organite spécialisé unique où se déroule la glycolyse, cible potentielle de médicaments."
  },
  {
    id: 'p_class_77',
    question: "Les Apicomplexa ont une origine évolutive surprenante. Ils proviendraient :",
    options: ["D'algues rouges photosynthétiques (endosymbiose secondaire)", "De bactéries", "De champignons", "D'animaux"],
    correct: 0,
    explanation: "Ils possèdent un vestige de chloroplaste appelé 'Apicoplaste', preuve de leur origine algale lointaine."
  },
  {
    id: 'p_class_78',
    question: "L'apicoplaste des Plasmodium est une cible thérapeutique car :",
    options: ["Il est d'origine végétale (sensible aux herbicides/antibiotiques)", "Il est humain", "Il est viral", "Il est indestructible"],
    correct: 0,
    explanation: "C'est pourquoi certains antibiotiques (Doxycycline) fonctionnent contre le paludisme : ils tuent l'apicoplaste 'végétal'."
  },
  {
    id: 'p_class_79',
    question: "Les Parabasalidea (Trichomonas) sont des eucaryotes primitifs car :",
    options: ["Ils n'ont pas de mitochondries mais des hydrogénosomes", "Ils n'ont pas de noyau", "Ils ont de l'ADN circulaire", "Ils font la photosynthèse"],
    correct: 0,
    explanation: "Les hydrogénosomes produisent de l'énergie en anaérobiose en dégageant de l'hydrogène."
  },
  {
    id: 'p_class_80',
    question: "Le super-groupe 'Opisthokonta' (Opisthocontes) regroupe :",
    options: ["Les Animaux (Métazoaires), les Champignons et les Microsporidies", "Les Plantes", "Les Algues", "Les Amibes"],
    correct: 0,
    explanation: "C'est pourquoi les Microsporidies (parasites) sont si difficiles à traiter : elles sont biochimiquement proches de nous (animaux) et des champignons."
  },

  // --- PART 16: FINAL CLASSIFICATION MIX ---
  {
    id: 'p_class_81',
    question: "Laquelle n'est PAS une classe de Protozoaires ?",
    options: ["Nématodes", "Rhizopodes", "Ciliés", "Flagellés"],
    correct: 0,
    explanation: "Les Nématodes sont des vers ronds (Helminthes), des animaux pluricellulaires, pas des protozoaires."
  },
  {
    id: 'p_class_82',
    question: "Quel protozoaire a un cycle 'Dixène' (deux hôtes) ?",
    options: ["Leishmania (Homme + Phlébotome)", "Giardia (Homme)", "Entamoeba (Homme)", "Trichomonas (Homme)"],
    correct: 0,
    explanation: "Leishmania alterne obligatoirement entre un vertébré et un insecte vecteur."
  },
  {
    id: 'p_class_83',
    question: "Les amibes à thèque (Testacea) diffèrent des amibes nues par :",
    options: ["Une coquille externe protectrice", "Des flagelles", "Des cils", "L'absence de noyau"],
    correct: 0,
    explanation: "Elles ne sont généralement pas parasites de l'homme."
  },
  {
    id: 'p_class_84',
    question: "Les Grégarines sont des parasites Apicomplexa de :",
    options: ["Invertébrés (Insectes, Vers)", "Humains", "Mammifères", "Oiseaux"],
    correct: 0,
    explanation: "Elles sont importantes en biologie évolutive mais ne parasitent pas l'homme."
  },
  {
    id: 'p_class_85',
    question: "Lequel appartient au groupe des 'Stramenopiles' ?",
    options: ["Blastocystis", "Giardia", "Entamoeba", "Leishmania"],
    correct: 0,
    explanation: "Comme vu précédemment, Blastocystis est un hétéroconte (algue sans chlorophylle)."
  },
  {
    id: 'p_class_86',
    question: "Le genre Encephalitozoon (Microsporidie) est classé dans les :",
    options: ["Fungi (Champignons)", "Protozoa", "Bacteria", "Virus"],
    correct: 0,
    explanation: "Classification phylogénétique moderne."
  },
  {
    id: 'p_class_87',
    question: "Les protozoaires 'Anaérobies' (ex: Entamoeba, Giardia) vivent :",
    options: ["Sans oxygène (fermentation)", "Avec beaucoup d'oxygène", "Dans le sang artériel", "Sur la peau"],
    correct: 0,
    explanation: "C'est pourquoi le Métronidazole (actif en anaérobiose) est le traitement de choix."
  },
  {
    id: 'p_class_88',
    question: "Quel parasite possède un 'axostyle' (squelette interne) ?",
    options: ["Trichomonas", "Entamoeba", "Plasmodium", "Toxoplasma"],
    correct: 0,
    explanation: "L'axostyle est la caractéristique des flagellés de l'ordre Trichomonadida."
  },
  {
    id: 'p_class_89',
    question: "Les Hémosporidies (Plasmodium) diffèrent des Coccidies vraies car :",
    options: ["Elles n'ont pas de kyste de résistance extérieur", "Elles sont plus petites", "Elles sont ciliées", "Elles sont des bactéries"],
    correct: 0,
    explanation: "Plasmodium passe directement d'un hôte à l'autre (Vecteur -> Homme) sans jamais être exposé à l'environnement extérieur sous forme de kyste."
  },
  {
    id: 'p_class_90',
    question: "Le phylum Ciliophora se distingue par la présence de deux types de noyaux :",
    options: ["Macronucleus (végétatif) et Micronucleus (reproductif)", "Deux noyaux identiques", "Un seul noyau", "Pas de noyau"],
    correct: 0,
    explanation: "C'est le dimorphisme nucléaire unique des ciliés."
  },
  {
    id: 'p_class_91',
    question: "Quel est le nom de la famille des amibes 'sociales' (qui s'agrègent) ?",
    options: ["Dictyosteliidae (ex: Dictyostelium)", "Entamoebidae", "Acanthamoebidae", "Naegleriidae"],
    correct: 0,
    explanation: "Elles forment des structures pluricellulaires temporaires (pseudoplasmodiums), modèle d'étude biologique."
  },
  {
    id: 'p_class_92',
    question: "L'ordre des Piroplasmida (Piroplasmes) doit son nom à :",
    options: ["La forme en poire (Piro-) des parasites dans les hématies", "Le feu (Pyro-)", "La forme ronde", "La forme carrée"],
    correct: 0,
    explanation: "Piro- (poire) décrit la forme des mérozoïtes de Babesia."
  },
  {
    id: 'p_class_93',
    question: "Les Haemogregarines sont des parasites de :",
    options: ["Reptiles et Poissons (rarement Mammifères)", "Humains", "Oiseaux", "Insectes seulement"],
    correct: 0,
    explanation: "Elles sont proches de Plasmodium mais infectent les animaux à sang froid."
  },
  {
    id: 'p_class_94',
    question: "Le genre Sappinia est une amibe libre rare caractérisée par :",
    options: ["Deux noyaux accolés dans le trophozoïte", "Un seul noyau", "Des flagelles", "Des cils"],
    correct: 0,
    explanation: "C'est une amibe libre très rarement pathogène pour l'homme (encéphalite)."
  },
  {
    id: 'p_class_95',
    question: "La classification des Trypanosomes en 'Stercoraria' et 'Salivaria' a été proposée par :",
    options: ["Hoare", "Laveran", "Chagas", "Darwin"],
    correct: 0,
    explanation: "C'est la classification épidémiologique classique de Cecil Hoare."
  },
  {
    id: 'p_class_96',
    question: "Le genre Leishmania est divisé en deux sous-genres :",
    options: ["Leishmania et Viannia", "Major et Minor", "Tropica et Donovani", "Intestinal et Sanguin"],
    correct: 0,
    explanation: "Viannia regroupe les espèces du Nouveau Monde qui se développent dans l'intestin postérieur du phlébotome."
  },
  {
    id: 'p_class_97',
    question: "Les protozoaires sont-ils un groupe monophylétique (un seul ancêtre commun) ?",
    options: ["Non, ils sont polyphylétiques (origines multiples)", "Oui, absolument", "On ne sait pas", "Ils descendent des virus"],
    correct: 0,
    explanation: "Le terme 'Protozoaire' est un terme pratique mais artificiel. Ils proviennent de plusieurs lignées évolutives distinctes."
  },
  {
    id: 'p_class_98',
    question: "Lequel est un eucaryote 'primitif' sans mitochondries (perte secondaire) ?",
    options: ["Giardia intestinalis", "Plasmodium", "Paramecium", "Euglena"],
    correct: 0,
    explanation: "Giardia a perdu ses mitochondries au cours de l'évolution pour s'adapter à la vie anaérobie (mitosomes)."
  },
  {
    id: 'p_class_99',
    question: "La classe des Litostomatea inclut le genre :",
    options: ["Balantidium", "Entamoeba", "Giardia", "Trypanosoma"],
    correct: 0,
    explanation: "C'est la classe taxonomique précise de Balantidium coli."
  },
  {
    id: 'p_class_100',
    question: "En taxonomie, le suffixe '-idae' (ex: Trypanosomatidae) indique :",
    options: ["Une Famille", "Un Ordre", "Une Classe", "Un Genre"],
    correct: 0,
    explanation: "Règle de nomenclature zoologique : Famille = -idae, Sous-famille = -inae."
  }
];
