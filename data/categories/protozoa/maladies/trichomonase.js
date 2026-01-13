// data/categories/protozoa/maladies/trichomonase.js

export const questions = [
    {
      id: 'trich_morph_1',
      axis: 'morphology',
      question: "Quelle caractéristique morphologique distingue Trichomonas vaginalis ?",
      options: ["Présence d'une membrane ondulante courte", "Absence de kyste", "Présence de 8 flagelles", "Forme intracellulaire"],
      correctAnswer: 1,
      explanation: "T. vaginalis n'a PAS de forme kystique, c'est un trophozoïte strict (fragile dans le milieu extérieur)."
    },
    {
      id: 'trich_treat_1',
      axis: 'treatment',
      question: "Quel est le traitement de référence pour la trichomonase urogénitale ?",
      options: ["Métronidazole (Traitement minute)", "Pénicilline", "Fluconazole", "Doxycycline"],
      correctAnswer: 0,
      explanation: "Le Métronidazole en dose unique (2g) est le standard, et il faut traiter le partenaire."
    }
  ];