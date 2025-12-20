const selles = [
    {
      id: 'micro_selles_1',
      // تأكد من وجود صورة حقيقية في هذا المسار لاحقاً
      image: null, 
      question: "Identifiez l'élément parasitaire ci-contre (Examen direct, Lugol) :",
      options: [
        "Œuf d'Ascaris lumbricoides (fécondé)", 
        "Œuf de Trichuris trichiura", 
        "Œuf d'Ankylostome", 
        "Kyste d'Entamoeba histolytica"
      ],
      correct: 0,
      explanation: "Morphologie typique : Forme ovoïde (50-70 µm), coque épaisse mamelonnée de couleur brune. L'aspect grumeleux interne correspond à la cellule œuf."
    },
    {
      id: 'micro_selles_2',
      image: null, 
      question: "Quel est ce stade protozoaire observé au microscope (40x) ?",
      options: [
        "Kyste de Giardia intestinalis", 
        "Kyste d'Entamoeba coli", 
        "Oocyste de Cryptosporidium", 
        "Blastocystis hominis"
      ],
      correct: 0,
      explanation: "Kyste ovalaire (10-14 µm) à double paroi lisse et réfringente. On distingue les résidus flagellaires (axonèmes) en 'S' et les noyaux (souvent 2 ou 4)."
    }
  ];
  
  export default selles;
  