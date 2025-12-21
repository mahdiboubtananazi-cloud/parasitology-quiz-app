// data/microscopyAtlas.js
// ✅ تم تعديل هذا الملف لاستخدام الصور المحلية بدلاً من الروابط المعطلة

export const microscopyAtlas = [
    // ==========================================================
    // 1. NEMATODES (الديدان الخيطية)
    // ==========================================================
    {
      id: 'nem_1',
      parasiteName: 'Ascaris lumbricoides (Fertile)',
      family: 'Nematodes',
      // ✅ استخدام require للملف المحلي
      image: require('../assets/images/microscopy/helminths/nematodes/ascaris_fertile.jpg'),
      options: [
        'Ascaris lumbricoides (Fertile)',
        'Ascaris lumbricoides (Infertile)',
        'Taenia spp.',
        'Trichuris trichiura'
      ],
      difficulty: 'Easy'
    },
    {
      id: 'nem_2',
      parasiteName: 'Ascaris lumbricoides (Infertile)',
      family: 'Nematodes',
      image: require('../assets/images/microscopy/helminths/nematodes/ascaris_infertile.jpg'),
      options: [
        'Ascaris lumbricoides (Infertile)',
        'Ascaris lumbricoides (Fertile)',
        'Fasciola hepatica',
        'Hookworm'
      ],
      difficulty: 'Medium'
    },
    {
      id: 'nem_3',
      parasiteName: 'Trichuris trichiura',
      family: 'Nematodes',
      image: require('../assets/images/microscopy/helminths/nematodes/trichuris_egg.jpg'),
      options: [
        'Trichuris trichiura',
        'Capillaria philippinensis',
        'Enterobius vermicularis',
        'Schistosoma mansoni'
      ],
      difficulty: 'Easy'
    },
    {
      id: 'nem_4',
      parasiteName: 'Enterobius vermicularis',
      family: 'Nematodes',
      image: require('../assets/images/microscopy/helminths/nematodes/enterobius_egg.jpg'),
      options: [
        'Enterobius vermicularis',
        'Hookworm',
        'Ascaris lumbricoides',
        'Strongyloides stercoralis'
      ],
      difficulty: 'Easy'
    },
    {
      id: 'nem_5',
      parasiteName: 'Hookworm (Ankylostome)',
      family: 'Nematodes',
      image: require('../assets/images/microscopy/helminths/nematodes/hookworm_egg.jpg'),
      options: [
        'Hookworm (Ankylostome)',
        'Trichostrongylus spp.',
        'Enterobius vermicularis',
        'Hymenolepis diminuta'
      ],
      difficulty: 'Medium'
    },
  
    // ==========================================================
    // 2. CESTODES (الديدان الشريطية)
    // ==========================================================
    {
      id: 'ces_1',
      parasiteName: 'Taenia spp.',
      family: 'Cestodes',
      image: require('../assets/images/microscopy/helminths/cestodes/taenia_egg.jpg'),
      options: [
        'Taenia spp.',
        'Hymenolepis nana',
        'Echinococcus granulosus',
        'Ascaris lumbricoides'
      ],
      difficulty: 'Easy'
    },
    {
      id: 'ces_2',
      parasiteName: 'Hymenolepis nana',
      family: 'Cestodes',
      image: require('../assets/images/microscopy/helminths/cestodes/hymenolepis_nana_egg.jpg'),
      options: [
        'Hymenolepis nana',
        'Hymenolepis diminuta',
        'Taenia spp.',
        'Dipylidium caninum'
      ],
      difficulty: 'Medium'
    },
    {
      id: 'ces_3',
      parasiteName: 'Hymenolepis diminuta',
      family: 'Cestodes',
      image: require('../assets/images/microscopy/helminths/cestodes/h_dim.jpg'),
      options: [
        'Hymenolepis diminuta',
        'Hymenolepis nana',
        'Hookworm',
        'Fasciolopsis buski'
      ],
      difficulty: 'Hard'
    },
  ];
  