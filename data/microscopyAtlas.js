// data/microscopyAtlas.js
// 🧬 The Ultimate Parasitology Diagnostic Database
// تغطية كاملة: Nematodes, Cestodes, Trematodes, Protozoa (All Stages), Artifacts

export const microscopyAtlas = [
  // ==========================================================
  // 1. NEMATODES (الديدان الخيطية)
  // ==========================================================
  {
    id: 'nem_1',
    parasiteName: 'Ascaris lumbricoides (Fertile)',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/ascaris_fertile.jpg'),
    size: '45-75 µm',
    technique: 'Saline Wet Mount',
    clue: 'Ovipare, coque épaisse mamelonnée, coloration brune (bile-stained).',
    options: ['Ascaris lumbricoides (Fertile)', 'Ascaris lumbricoides (Infertile)', 'Taenia spp.', 'Trichuris trichiura'],
    difficulty: 'Easy'
  },
  {
    id: 'nem_2',
    parasiteName: 'Ascaris lumbricoides (Infertile)',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/ascaris_infertile.jpg'),
    size: '85-95 µm',
    technique: 'Saline Wet Mount',
    clue: 'Plus allongé, coque mince irrégulière, contenu granuleux réfringent.',
    options: ['Ascaris lumbricoides (Infertile)', 'Ascaris lumbricoides (Fertile)', 'Fasciola hepatica', 'Hookworm'],
    difficulty: 'Medium'
  },
  {
    id: 'nem_3',
    parasiteName: 'Trichuris trichiura',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/trichuris_egg.jpg'),
    size: '50-55 µm',
    technique: 'Iodine Stain',
    clue: 'Forme de citron (ou baril), deux bouchons muqueux polaires clairs.',
    options: ['Trichuris trichiura', 'Capillaria philippinensis', 'Enterobius vermicularis', 'Schistosoma mansoni'],
    difficulty: 'Easy'
  },
  {
    id: 'nem_4',
    parasiteName: 'Enterobius vermicularis',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/enterobius_egg.jpg'),
    size: '50-60 µm',
    technique: 'Scotch Test',
    clue: 'Asymétrique (forme en "D"), coque lisse et transparente, larve souvent visible.',
    options: ['Enterobius vermicularis', 'Hookworm', 'Ascaris lumbricoides', 'Strongyloides stercoralis'],
    difficulty: 'Easy'
  },
  {
    id: 'nem_5',
    parasiteName: 'Hookworm (Ankylostome)',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/hookworm_egg.jpg'),
    size: '60-75 µm',
    technique: 'Saline Wet Mount',
    clue: 'Coque très mince et transparente, contient 4-8 blastomères (stade morula).',
    options: ['Hookworm (Ankylostome)', 'Trichostrongylus spp.', 'Enterobius vermicularis', 'Hymenolepis diminuta'],
    difficulty: 'Medium'
  },
  {
    id: 'nem_6', // New Larva
    parasiteName: 'Strongyloides stercoralis (Larva)',
    family: 'Nematodes',
    image: require('../assets/images/microscopy/helminths/nematodes/strongy_larva.jpg'),
    size: '200-250 µm',
    technique: 'Direct Smear',
    clue: 'Larve Rhabditoïde, cavité buccale très courte, primordium génital visible.',
    options: ['Strongyloides stercoralis (Larva)', 'Hookworm Larva', 'Ascaris Larva', 'Enterobius vermicularis'],
    difficulty: 'Hard'
  },

  // ==========================================================
  // 2. CESTODES (الديدان الشريطية)
  // ==========================================================
  {
    id: 'ces_1',
    parasiteName: 'Taenia spp.',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/helminths/cestodes/taenia_egg.jpg'),
    size: '30-40 µm',
    technique: 'Saline Wet Mount',
    clue: 'Sphérique, coque épaisse radiée (striée), hexacanthe (3 paires de crochets).',
    options: ['Taenia spp.', 'Hymenolepis nana', 'Echinococcus granulosus', 'Ascaris lumbricoides'],
    difficulty: 'Easy'
  },
  {
    id: 'ces_2',
    parasiteName: 'Hymenolepis nana',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/helminths/cestodes/hymenolepis_nana_egg.jpg'),
    size: '30-45 µm',
    technique: 'Saline Wet Mount',
    clue: 'Embryophore avec filaments polaires, coque externe mince.',
    options: ['Hymenolepis nana', 'Hymenolepis diminuta', 'Taenia spp.', 'Dipylidium caninum'],
    difficulty: 'Medium'
  },
  {
    id: 'ces_3',
    parasiteName: 'Hymenolepis diminuta',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/helminths/cestodes/h_dim.jpg'),
    size: '70-85 µm',
    technique: 'Saline Wet Mount',
    clue: 'Plus grand que H.nana, coque jaune-brun striée, PAS de filaments polaires.',
    options: ['Hymenolepis diminuta', 'Hymenolepis nana', 'Hookworm', 'Fasciolopsis buski'],
    difficulty: 'Hard'
  },

  // ==========================================================
  // 3. TREMATODES (المثقوبات)
  // ==========================================================
  {
    id: 'trem_1',
    parasiteName: 'Schistosoma mansoni',
    family: 'Trematodes',
    image: require('../assets/images/microscopy/helminths/trematodes/schisto_man.jpg'),
    size: '114-175 µm',
    technique: 'Kato-Katz',
    clue: 'Grande taille, éperon LATÉRAL très visible.',
    options: ['Schistosoma mansoni', 'Schistosoma haematobium', 'Fasciola hepatica', 'Schistosoma japonicum'],
    difficulty: 'Easy'
  },
  {
    id: 'trem_2',
    parasiteName: 'Schistosoma haematobium',
    family: 'Trematodes',
    image: require('../assets/images/microscopy/helminths/trematodes/schisto_haem.jpg'),
    size: '112-170 µm',
    technique: 'Urine Sedimentation',
    clue: 'Trouvé dans l\'urine, éperon TERMINAL.',
    options: ['Schistosoma haematobium', 'Schistosoma mansoni', 'Enterobius vermicularis', 'Trichuris trichiura'],
    difficulty: 'Easy'
  },
  {
    id: 'trem_3',
    parasiteName: 'Fasciola hepatica',
    family: 'Trematodes',
    image: require('../assets/images/microscopy/helminths/trematodes/fasciola.jpg'),
    size: '130-150 µm',
    technique: 'Sedimentation',
    clue: 'Très grand œuf, operculé (couvercle), contenu non embryonné.',
    options: ['Fasciola hepatica', 'Ascaris lumbricoides', 'Diphyllobothrium latum', 'Paragonimus westermani'],
    difficulty: 'Medium'
  },

  // ==========================================================
  // 4. PROTOZOA - AMOEBAE (الأميبا)
  // ==========================================================
  {
    id: 'proto_am_1',
    parasiteName: 'Entamoeba histolytica (Cyst)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/amoebae/hist_cyst.jpg'),
    size: '10-20 µm',
    technique: 'Trichrome Stain',
    clue: 'Sphérique, 1 à 4 noyaux max, barre chromatoïde à bouts ronds (Cigar shape).',
    options: ['Entamoeba histolytica (Cyst)', 'Entamoeba coli (Cyst)', 'Endolimax nana', 'Blastocystis hominis'],
    difficulty: 'Medium'
  },
  {
    id: 'proto_am_2',
    parasiteName: 'Entamoeba histolytica (Trophozoite)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/amoebae/hist_troph.jpg'),
    size: '15-60 µm',
    technique: 'Trichrome Stain',
    clue: 'Forme irrégulière, pseudopodes, hématies ingérées (Pathognomonique).',
    options: ['Entamoeba histolytica (Troph)', 'Entamoeba coli (Troph)', 'Giardia lamblia', 'Balantidium coli'],
    difficulty: 'Hard'
  },
  {
    id: 'proto_am_3',
    parasiteName: 'Entamoeba coli (Cyst)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/amoebae/coli_cyst.jpg'),
    size: '15-25 µm',
    technique: 'Iodine Stain',
    clue: 'Plus grand que E.histolytica, plus de 4 noyaux (souvent 8), barres chromatoïdes effilées.',
    options: ['Entamoeba coli (Cyst)', 'Entamoeba histolytica (Cyst)', 'Iodamoeba bütschlii', 'Giardia lamblia'],
    difficulty: 'Medium'
  },

  // ==========================================================
  // 5. PROTOZOA - FLAGELLATES & OTHERS
  // ==========================================================
  {
    id: 'proto_fl_1',
    parasiteName: 'Giardia lamblia (Cyst)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/flagellates/giardia_cyst.jpg'),
    size: '8-12 µm',
    technique: 'Iodine Stain',
    clue: 'Ovale, 4 noyaux, fibrilles longitudinales visibles (Axostyle).',
    options: ['Giardia lamblia (Cyst)', 'Chilomastix mesnili', 'Endolimax nana', 'Cryptosporidium spp.'],
    difficulty: 'Easy'
  },
  {
    id: 'proto_fl_2',
    parasiteName: 'Giardia lamblia (Trophozoite)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/flagellates/giardia_troph.jpg'),
    size: '10-20 µm',
    technique: 'Trichrome Stain',
    clue: 'Forme de poire (piriforme), 2 noyaux (aspect de visage/lunettes), flagelles.',
    options: ['Giardia lamblia (Troph)', 'Trichomonas vaginalis', 'Chilomastix mesnili', 'Dientamoeba fragilis'],
    difficulty: 'Easy'
  },
  {
    id: 'proto_fl_3',
    parasiteName: 'Trichomonas vaginalis',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/flagellates/tricho_vag.jpg'),
    size: '7-30 µm',
    technique: 'Wet Mount (Urine/Vaginal)',
    clue: 'Mobile (Wet mount), membrane ondulante courte, axostyle saillant.',
    options: ['Trichomonas vaginalis', 'Giardia lamblia', 'Candida albicans', 'Gardnerella vaginalis'],
    difficulty: 'Medium'
  },
  {
    id: 'proto_cil_1',
    parasiteName: 'Balantidium coli (Cyst)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/ciliates/bal_cyst.jpg'),
    size: '50-70 µm',
    technique: 'Wet Mount',
    clue: 'Très grand kyste, paroi épaisse double, macronoyau en forme de haricot (Reniform).',
    options: ['Balantidium coli (Cyst)', 'Entamoeba coli', 'Ascaris lumbricoides', 'Fasciola hepatica'],
    difficulty: 'Medium'
  },

  // ==========================================================
  // 6. COCCIDIA & BLOOD (أوالي خاصة)
  // ==========================================================
  {
    id: 'proto_coc_1',
    parasiteName: 'Cryptosporidium spp.',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/coccidia/crypto_af.jpg'),
    size: '4-6 µm',
    technique: 'Modified Ziehl-Neelsen',
    clue: 'Oocystes rouge vif (Acid-Fast) sur fond bleu/vert, très petite taille.',
    options: ['Cryptosporidium spp.', 'Cyclospora cayetanensis', 'Isospora belli', 'Yeast Cells'],
    difficulty: 'Hard'
  },
  {
    id: 'proto_bld_1',
    parasiteName: 'Plasmodium falciparum (Rings)',
    family: 'Protozoa',
    image: require('../assets/images/microscopy/protozoa/blood/malaria_ring.jpg'),
    size: 'Inside RBC',
    technique: 'Giemsa Stain (Thin Smear)',
    clue: 'Trophozoïtes jeunes en forme de bague (Ring stage), souvent plusieurs par GR.',
    options: ['Plasmodium falciparum', 'Plasmodium vivax', 'Babesia spp.', 'Trypanosoma brucei'],
    difficulty: 'Hard'
  },

  // ==========================================================
  // 7. ARTIFACTS (الشوائب والأفخاخ - هام جداً!)
  // ==========================================================
  {
    id: 'art_1',
    parasiteName: 'Pollen Grain (Artifact)',
    family: 'Artifacts',
    image: require('../assets/images/microscopy/artifacts/pollen.jpg'),
    size: 'Variable',
    technique: 'Wet Mount',
    clue: 'Ressemble à un œuf de Taenia/Ascaris, mais paroi irrégulière et sans structure interne claire.',
    options: ['Pollen Grain (Artifact)', 'Taenia spp.', 'Ascaris lumbricoides', 'Hymenolepis nana'],
    difficulty: 'Tricky' // تصنيف جديد للمصائد
  },
  {
    id: 'art_2',
    parasiteName: 'Air Bubble (Artifact)',
    family: 'Artifacts',
    image: require('../assets/images/microscopy/artifacts/bubble.jpg'),
    size: 'Variable',
    technique: 'Wet Mount',
    clue: 'Contours noirs très épais (Réfringence), centre vide clair. À ne pas confondre avec un kyste.',
    options: ['Air Bubble (Artifact)', 'Entamoeba cyst', 'Blastocystis hominis', 'Fat globule'],
    difficulty: 'Tricky'
  },
  {
    id: 'art_3',
    parasiteName: 'White Blood Cell (WBC)',
    family: 'Artifacts',
    image: require('../assets/images/microscopy/artifacts/wbc_artifact.jpg'),
    size: '10-15 µm',
    technique: 'Wet Mount',
    clue: 'Ressemble à un kyste amibien, mais noyaux polymorphes irréguliers, pas de corps chromatoïde.',
    options: ['White Blood Cells (Artifact)', 'Entamoeba histolytica', 'Entamoeba coli', 'Endolimax nana'],
    difficulty: 'Hard'
  }
];
