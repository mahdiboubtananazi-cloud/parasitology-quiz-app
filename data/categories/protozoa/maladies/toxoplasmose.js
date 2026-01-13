// data/categories/protozoa/maladies/toxoplasmose.js

export const questions = [
    // --- Morphology ---
    {
      id: 'toxo_morph_1',
      axis: 'morphology',
      question: "Quelle est la forme infectante de Toxoplasma gondii présente dans les oocystes ?",
      options: ["Sporozoïte", "Tachyzoïte", "Bradyzoïte", "Mérozoïte"],
      correctAnswer: 0,
      explanation: "Les oocystes contiennent des sporozoïtes, forme infectante issue de la reproduction sexuée chez le chat."
    },
    // --- Lifecycle ---
    {
      id: 'toxo_cycle_1',
      axis: 'lifecycle',
      question: "Quel est l'hôte définitif de Toxoplasma gondii ?",
      options: ["Le chat (félidés)", "L'homme", "Le mouton", "La souris"],
      correctAnswer: 0,
      explanation: "Le chat et les autres félidés sont les seuls hôtes définitifs où se déroule la reproduction sexuée."
    },
    // --- Clinical ---
    {
      id: 'toxo_clin_1',
      axis: 'clinical',
      question: "Quelle est la triade classique de la toxoplasmose congénitale grave ?",
      options: ["Hydrocéphalie, calcifications intracrâniennes, choriorétinite", "Fièvre, splénomégalie, ictère", "Diarrhée, vomissements, déshydratation", "Anémie, thrombopénie, leucopénie"],
      correctAnswer: 0,
      explanation: "La triade de Sabin comprend : hydrocéphalie, calcifications intracrâniennes et choriorétinite."
    },
    // --- Diagnosis ---
    {
      id: 'toxo_diag_1',
      axis: 'diagnosis',
      question: "Quel test permet de dater une infection toxoplasmique chez la femme enceinte ?",
      options: ["Test d'avidité des IgG", "Recherche d'antigènes circulants", "Frottis sanguin", "Coproculture"],
      correctAnswer: 0,
      explanation: "Une avidité élevée des IgG exclut une infection récente (moins de 4 mois)."
    },
    // --- Treatment ---
    {
      id: 'toxo_treat_1',
      axis: 'treatment',
      question: "Quel traitement est prescrit en cas de séroconversion toxoplasmique chez la femme enceinte (avant atteinte fœtale) ?",
      options: ["Spiramycine", "Pyriméthamine + Sulfadiazine", "Métronidazole", "Albendazole"],
      correctAnswer: 0,
      explanation: "La Rovamycine (Spiramycine) est utilisée pour réduire le risque de transmission verticale."
    }
  ];