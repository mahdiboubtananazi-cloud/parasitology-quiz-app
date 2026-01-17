// data/microscopyAtlas.js
// 🧬 ATLAS DE DIAGNOSTIC PARASITOLOGIQUE (v6.0 - Path Correction)
// Corrected to match your actual file tree perfectly.

export const microscopyAtlas = [
  // =========================
  // 1. PROTOZOA (AMIBES)
  // =========================
  {
    id: 'am_hist_lugol',
    parasiteName: 'Entamoeba histolytica (Kyste)',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/hist_cyst_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: 'Sphérique (12µm), 1 à 4 noyaux, barre chromatoïde à bouts ronds.',
    options: ['E. histolytica (Kyste)', 'E. coli (Kyste)', 'Leucocyte', 'Endolimax nana'],
    difficulty: 'Medium'
  },
  {
    id: 'am_hist_tri',
    parasiteName: 'Entamoeba histolytica (Kyste)',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/hist_cyst_trichrome.jpg'),
    stain: 'Trichrome',
    magnification: 'x100',
    clue: 'Cytoplasme bleu-vert, corps chromatoïde rouge vif (Cigare).',
    options: ['E. histolytica (Kyste)', 'E. coli (Kyste)', 'Giardia', 'Blastocystis'],
    difficulty: 'Medium'
  },
  {
    id: 'am_hist_troph',
    parasiteName: 'E. histolytica (Trophozoïte)',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/hist_troph_rbc.jpg'),
    stain: 'Trichrome',
    magnification: 'x100',
    clue: 'Hématophage (GR ingérés), noyau en "roue de charrette". Pathognomonique.',
    options: ['E. histolytica (Troph)', 'E. coli (Troph)', 'Macrophage', 'Balantidium'],
    difficulty: 'Hard'
  },
  {
    id: 'am_coli_lugol',
    parasiteName: 'Entamoeba coli (Kyste)',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/coli_cyst_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: '> 4 noyaux (souvent 8), plus grand que Histolytica (15-25µm).',
    options: ['E. coli (Kyste)', 'E. histolytica (Kyste)', 'Bulle d\'air', 'Blastocystis'],
    difficulty: 'Easy'
  },
  {
    id: 'am_nana',
    parasiteName: 'Endolimax nana (Kyste)',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/nana_cyst_trichrome.jpg'),
    stain: 'Trichrome',
    magnification: 'x100',
    clue: 'Très petit, forme ovale (Ballon de rugby), 4 petits noyaux (Bouton).',
    options: ['Endolimax nana', 'E. hartmanni', 'Levure', 'Chilomastix'],
    difficulty: 'Hard'
  },
  {
    id: 'am_iodo',
    parasiteName: 'Iodamoeba buetschlii',
    family: 'Amibes',
    image: require('../assets/images/microscopy/stool/protozoa/amoebae/iodamoeba_cyst_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: 'Une énorme vacuole iodophile (brune foncée) qui occupe tout le kyste.',
    options: ['Iodamoeba buetschlii', 'Blastocystis', 'E. coli', 'Amidon'],
    difficulty: 'Easy'
  },

  // =========================
  // 2. PROTOZOA (FLAGELLÉS)
  // =========================
  {
    id: 'giardia_k_lugol',
    parasiteName: 'Giardia intestinalis (Kyste)',
    family: 'Flagellés',
    image: require('../assets/images/microscopy/stool/protozoa/flagellates/giardia_cyst_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: 'Ovale, paroi lisse, axostyle et corps médians visibles.',
    options: ['Giardia (Kyste)', 'Chilomastix', 'Levure', 'Enterobius'],
    difficulty: 'Easy'
  },
  {
    id: 'giardia_t_tri',
    parasiteName: 'Giardia (Trophozoïte)',
    family: 'Flagellés',
    image: require('../assets/images/microscopy/stool/protozoa/flagellates/giardia_troph_trichrome.jpg'),
    stain: 'Trichrome',
    magnification: 'x100',
    clue: 'Forme de poire, 2 noyaux (visage de clown), flagelles.',
    options: ['Giardia (Troph)', 'Trichomonas', 'Chilomastix', 'Amibe'],
    difficulty: 'Easy'
  },
  {
    id: 'chilo_cyst',
    parasiteName: 'Chilomastix mesnili (Kyste)',
    family: 'Flagellés',
    image: require('../assets/images/microscopy/stool/protozoa/flagellates/chilo_cyst_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: 'Forme de citron (ou poire) avec un petit bouton, petit (6-10µm).',
    options: ['Chilomastix (Kyste)', 'Giardia', 'Levure', 'Trichomonas'],
    difficulty: 'Medium'
  },
  {
    id: 'tricho_vag',
    parasiteName: 'Trichomonas vaginalis',
    family: 'Flagellés',
    image: require('../assets/images/microscopy/stool/protozoa/flagellates/tricho_vag_giemsa.jpg'),
    stain: 'Giemsa',
    magnification: 'x100',
    clue: 'Axostyle saillant, membrane ondulante courte, noyau antérieur.',
    options: ['Trichomonas vaginalis', 'Giardia', 'Spermatozoïde', 'Leucocyte'],
    difficulty: 'Medium'
  },

  // =========================
  // 3. PROTOZOA - CILIATES & COCCIDIA
  // ==========================================================
  {
    id: 'bal_cyst',
    parasiteName: 'Balantidium coli (Kyste)',
    family: 'Ciliés',
    image: require('../assets/images/microscopy/stool/protozoa/ciliates/bal_cyst.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Géant (50µm), paroi double, macronoyau en haricot.',
    options: ['Balantidium coli', 'Oeuf Ascaris', 'Fasciola', 'Artefact'],
    difficulty: 'Medium'
  },
  {
    id: 'crypto_zn',
    parasiteName: 'Cryptosporidium spp.',
    family: 'Coccidies',
    image: require('../assets/images/microscopy/stool/protozoa/coccidia/crypto_af.jpg'),
    stain: 'Ziehl-Neelsen Modifié',
    magnification: 'x100',
    clue: 'Petits ronds rouge fuchsia (4-5µm) sur fond vert.',
    options: ['Cryptosporidium', 'Cyclospora', 'Levures', 'Isospora'],
    difficulty: 'Hard'
  },
  {
    id: 'cyclo_uv',
    parasiteName: 'Cyclospora cayetanensis',
    family: 'Coccidies',
    image: require('../assets/images/microscopy/stool/protozoa/coccidia/cyclo_uv.jpg'),
    stain: 'Auto-fluorescence UV',
    magnification: 'x40',
    clue: 'Cercle bleu néon (Neon Blue) sous microscope UV.',
    options: ['Cyclospora', 'Cryptosporidium', 'Isospora', 'Giardia'],
    difficulty: 'Hard'
  },
  {
    id: 'iso_wet',
    parasiteName: 'Cystoisospora belli',
    family: 'Coccidies',
    image: require('../assets/images/microscopy/stool/protozoa/coccidia/iso_wet.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Oocyste très grand, forme de ballon de rugby, contient 1 sporoblaste.',
    options: ['Cystoisospora belli', 'Fasciola', 'Schistosoma', 'Ascaris'],
    difficulty: 'Medium'
  },
  {
    id: 'blasto_vac',
    parasiteName: 'Blastocystis hominis',
    family: 'Divers',
    image: require('../assets/images/microscopy/stool/protozoa/blastocystis/blasto_vacuolar_lugol.jpg'),
    stain: 'Lugol',
    magnification: 'x40',
    clue: 'Grande vacuole centrale, noyaux repoussés en périphérie (Bague).',
    options: ['Blastocystis', 'Kyste Amibien', 'Kyste Giardia', 'Leucocyte'],
    difficulty: 'Easy'
  },

  // ==========================================================
  // 4. NEMATODES (Oeufs & Larves)
  // ==========================================================
  {
    id: 'asc_fert',
    parasiteName: 'Ascaris lumbricoides (Fécondé)',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/eggs/ascaris_fertile.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Ovale, brun, coque mamelonnée épaisse.',
    options: ['Ascaris (Fécondé)', 'Ascaris (Décortiqué)', 'Taenia', 'Fasciola'],
    difficulty: 'Easy'
  },
  {
    id: 'asc_inf',
    parasiteName: 'Ascaris (Non fécondé)',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/eggs/ascaris_infertile.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Allongé, coque mince irrégulière, contenu granuleux.',
    options: ['Ascaris (Non fécondé)', 'Ankylostome', 'Fasciola', 'Débris'],
    difficulty: 'Medium'
  },
  {
    id: 'trichuris',
    parasiteName: 'Trichuris trichiura',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/eggs/trichuris_egg.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Forme de citron/baril, deux bouchons polaires.',
    options: ['Trichuris trichiura', 'Capillaria', 'Enterobius', 'Ascaris'],
    difficulty: 'Easy'
  },
  {
    id: 'ent_egg',
    parasiteName: 'Enterobius vermicularis',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/eggs/enterobius_egg.jpg'),
    stain: 'Scotch-Test',
    magnification: 'x40',
    clue: 'Asymétrique (Forme en D), coque lisse, embryonné.',
    options: ['Enterobius vermicularis', 'Ankylostome', 'Ascaris', 'Taenia'],
    difficulty: 'Easy'
  },
  {
    id: 'hook_egg',
    parasiteName: 'Ankylostome (Oeuf)',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/eggs/hookworm_egg.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Coque très fine, stade Morula (4-8 cellules), vide autour.',
    options: ['Ankylostome', 'Hymenolepis nana', 'Enterobius', 'Trichostrongylus'],
    difficulty: 'Medium'
  },
  {
    id: 'strongy_l1',
    parasiteName: 'Strongyloides (Larve L1)',
    family: 'Nématodes',
    image: require('../assets/images/microscopy/stool/nematodes/larvae/strongy_larva_l1.jpg'),
    stain: 'Frais',
    magnification: 'x100',
    clue: 'Larve rhabditoïde, canal buccal court, ébauche génitale visible.',
    options: ['Strongyloides (L1)', 'Ankylostome (L1)', 'Fibre végétale', 'Ascaris'],
    difficulty: 'Hard'
  },

  // ==========================================================
  // 5. CESTODES (Vers Plats)
  // ==========================================================
  {
    id: 'taenia_egg',
    parasiteName: 'Taenia spp.',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/stool/cestodes/taenia/taenia_egg.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Rond, coque épaisse radiée (Pneu), embryon hexacanthe.',
    options: ['Taenia spp.', 'Hymenolepis', 'Ascaris', 'Pollen'],
    difficulty: 'Easy'
  },
  {
    id: 'h_nana',
    parasiteName: 'Hymenolepis nana',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/stool/cestodes/hymenolepis/h_nana_egg.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Coque mince, filaments polaires entre les deux membranes.',
    options: ['Hymenolepis nana', 'H. diminuta', 'Taenia', 'Entamoeba coli'],
    difficulty: 'Medium'
  },
  {
    id: 'h_dim',
    parasiteName: 'Hymenolepis diminuta',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/stool/cestodes/hymenolepis/h_diminuta_egg.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Grand, coque épaisse, PAS de filaments polaires.',
    options: ['Hymenolepis diminuta', 'H. nana', 'Hookworm', 'Ascaris'],
    difficulty: 'Hard'
  },
  {
    id: 'diphy_egg',
    parasiteName: 'Diphyllobothrium latum',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/stool/cestodes/diphyllobothrium/diphyllobothrium_egg_operculum.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Ovale, opercule (clapet) discret, petit bouton au pôle opposé.',
    options: ['Diphyllobothrium', 'Fasciola', 'Paragonimus', 'Ascaris'],
    difficulty: 'Hard'
  },
  {
    id: 'hydatid_sand',
    parasiteName: 'Sable Hydatique',
    family: 'Cestodes',
    image: require('../assets/images/microscopy/stool/cestodes/echinococcus/hydatid_sand.jpg'),
    stain: 'Frais',
    magnification: 'x100',
    clue: 'Protoscolex invaginés (Têtes de ténia) et crochets libres.',
    options: ['Echinococcus (Sable)', 'Cysticerque', 'Coenurose', 'Pus'],
    difficulty: 'Medium'
  },

  // ==========================================================
  // 6. TREMATODES (Douves & Schistosomes)
  // ==========================================================
  {
    id: 'schisto_man',
    parasiteName: 'Schistosoma mansoni',
    family: 'Trématodes',
    image: require('../assets/images/microscopy/stool/trematodes/schistosoma/schisto_mansoni_egg.jpg'),
    stain: 'Kato-Katz',
    magnification: 'x40',
    clue: 'Grand œuf (140µm), éperon LATÉRAL.',
    options: ['S. mansoni', 'S. haematobium', 'Fasciola', 'Diphyllobothrium'],
    difficulty: 'Easy'
  },
  {
    id: 'schisto_haem',
    parasiteName: 'Schistosoma haematobium',
    family: 'Trématodes',
    image: require('../assets/images/microscopy/stool/trematodes/schistosoma/schisto_haematobium_egg.jpg'),
    stain: 'Urine',
    magnification: 'x40',
    clue: 'Grand œuf, éperon TERMINAL. Dans les urines.',
    options: ['S. haematobium', 'S. mansoni', 'S. japonicum', 'Cristaux'],
    difficulty: 'Easy'
  },
  {
    id: 'fasciola_egg',
    parasiteName: 'Fasciola hepatica',
    family: 'Trématodes',
    image: require('../assets/images/microscopy/stool/trematodes/fasciola/fasciola_egg.jpg'),
    stain: 'Sédimentation',
    magnification: 'x40',
    clue: 'Géant (140µm), operculé, contenu jaune plein.',
    options: ['Fasciola hepatica', 'Ascaris', 'Paragonimus', 'Diphyllobothrium'],
    difficulty: 'Medium'
  },

  // ==========================================================
  // 7. BLOOD - MALARIA & OTHERS (مسارات مصححة)
  // ==========================================================
  {
    id: 'pf_rings',
    parasiteName: 'P. falciparum (Rings)',
    family: 'Paludisme',
    // ✅ تصحيح المسار: لا يوجد falciparum folder في شجرتك، بل هم تحت malaria مباشرة
    image: require('../assets/images/microscopy/blood/malaria/pf_rings.jpg'),
    stain: 'Giemsa',
    magnification: 'x100',
    clue: 'Petits anneaux fins, polyparasitisme, formes appliquées.',
    options: ['P. falciparum', 'P. vivax', 'Babesia', 'Plaquettes'],
    difficulty: 'Medium'
  },
  {
    id: 'pf_gamet',
    parasiteName: 'P. falciparum (Gamétocyte)',
    family: 'Paludisme',
    // ✅ تصحيح المسار
    image: require('../assets/images/microscopy/blood/malaria/pf_gametocyte.jpg'),
    stain: 'Giemsa',
    magnification: 'x100',
    clue: 'Forme en banane (croissant). Diagnostic de certitude.',
    options: ['P. falciparum (Gamet)', 'P. vivax', 'Trypanosome', 'Filaire'],
    difficulty: 'Easy'
  },
  {
    id: 'pv_troph',
    parasiteName: 'P. vivax (Trophozoïte)',
    family: 'Paludisme',
    // ✅ تصحيح المسار
    image: require('../assets/images/microscopy/blood/malaria/pv_troph.jpg'),
    stain: 'Giemsa',
    magnification: 'x100',
    clue: 'Forme amiboïde, GR élargi, granulations de Schüffner.',
    options: ['P. vivax', 'P. falciparum', 'P. malariae', 'P. ovale'],
    difficulty: 'Medium'
  },
  {
    id: 'trypano_thin',
    parasiteName: 'Trypanosoma brucei',
    family: 'Flagellés Sang.',
    image: require('../assets/images/microscopy/blood/filariose_trypano/trypanosoma/trypano_thin.jpg'),
    stain: 'Giemsa',
    magnification: 'x100',
    clue: 'Extracellulaire, membrane ondulante, flagelle libre.',
    options: ['Trypanosoma brucei', 'T. cruzi', 'Leishmania', 'Microfilaire'],
    difficulty: 'Medium'
  },
  {
    id: 'loa_mf',
    parasiteName: 'Loa loa (Microfilaire)',
    family: 'Filaires',
    image: require('../assets/images/microscopy/blood/filariose_trypano/filaria/loa_loa_mf.jpg'),
    stain: 'Giemsa',
    magnification: 'x40',
    clue: 'Gaine visible, noyaux jusqu\'au bout de la queue.',
    options: ['Loa loa', 'Wuchereria', 'Mansonella', 'Onchocerca'],
    difficulty: 'Hard'
  },
  {
    id: 'leish_amast',
    parasiteName: 'Leishmania (Amastigotes)',
    family: 'Tissulaire',
    image: require('../assets/images/microscopy/blood/filariose_trypano/leishmania/leishmania_amastigotes.jpg'),
    stain: 'Giemsa (Moelle)',
    magnification: 'x100',
    clue: 'Intracellulaires (Macrophage), petit point (Kinéto) + noyau.',
    options: ['Leishmania', 'Histoplasma', 'Toxoplasma', 'Trypanosoma'],
    difficulty: 'Hard'
  },

  // ==========================================================
  // 8. ARTEFACTS (الشوائب والأفخاخ)
  // ==========================================================
  {
    id: 'art_pollen',
    parasiteName: 'Grain de Pollen',
    family: 'Artefact',
    image: require('../assets/images/microscopy/artifacts/vegetal/pollen.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Paroi épaisse irrégulière, pas d\'organisation interne.',
    options: ['Grain de Pollen', 'Oeuf de Taenia', 'Ascaris', 'Hymenolepis'],
    difficulty: 'Tricky'
  },
  {
    id: 'art_wbc',
    parasiteName: 'Leucocyte (GB)',
    family: 'Artefact',
    image: require('../assets/images/microscopy/artifacts/cells/wbc_artifact.jpg'),
    stain: 'Frais',
    magnification: 'x40',
    clue: 'Noyaux polymorphes brillants, pas de paroi kystique.',
    options: ['Leucocyte (GB)', 'Entamoeba histolytica', 'E. coli', 'Kyste'],
    difficulty: 'Tricky'
  },
  {
    id: 'art_bubble',
    parasiteName: 'Bulle d\'air',
    family: 'Artefact',
    image: require('../assets/images/microscopy/artifacts/others/air_bubble.jpg'),
    stain: 'Frais',
    magnification: 'Variable',
    clue: 'Contour noir très épais, centre vide.',
    options: ['Bulle d\'air', 'Kyste', 'Blastocystis', 'Gouttelette graisse'],
    difficulty: 'Easy'
  }
];