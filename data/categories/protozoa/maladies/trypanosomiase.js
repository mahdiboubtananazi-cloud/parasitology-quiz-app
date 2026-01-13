// data/categories/protozoa/maladies/trypanosomiase.js

export const questions = [
    // --- Morphology ---
    {
      id: 'tryp_morph_1',
      axis: 'morphology',
      question: "Quelle forme de Trypanosoma brucei retrouve-t-on dans le sang périphérique ?",
      options: ["Trypomastigote", "Amastigote", "Promastigote", "Epimastigote"],
      correctAnswer: 0,
      explanation: "La forme trypomastigote extracellulaire est la forme circulante chez l'homme."
    },
    // --- Lifecycle ---
    {
      id: 'tryp_cycle_1',
      axis: 'lifecycle',
      question: "Quel est le vecteur de la Trypanosomiase Humaine Africaine (THA) ?",
      options: ["Mouche Tsé-tsé (Glossine)", "Moustique Anophèle", "Réduve", "Phlébotome"],
      correctAnswer: 0,
      explanation: "La Glossine (Mouche Tsé-tsé) transmet T. brucei."
    },
    {
      id: 'tryp_cycle_2',
      axis: 'lifecycle',
      question: "Quel est le vecteur de la Maladie de Chagas (T. cruzi) ?",
      options: ["Réduve (Punaise)", "Mouche Tsé-tsé", "Tique", "Pou"],
      correctAnswer: 0,
      explanation: "Les réduves transmettent T. cruzi via leurs déjections."
    },
    // --- Clinical ---
    {
      id: 'tryp_clin_1',
      axis: 'clinical',
      question: "Quel signe est pathognomonique de la phase lymphatico-sanguine de la THA ?",
      options: ["Signe de Winterbottom (adénopathies cervicales)", "Signe de Romaña", "Hépatomégalie", "Ulcère de Baurou"],
      correctAnswer: 0,
      explanation: "Le signe de Winterbottom correspond à des adénopathies cervicales postérieures."
    },
    // --- Diagnosis ---
    {
      id: 'tryp_diag_1',
      axis: 'diagnosis',
      question: "Quel examen permet le diagnostic de certitude à la phase nerveuse de la THA ?",
      options: ["Ponction Lombaire (LCR)", "Hémoculture", "Biopsie cutanée", "Frottis sanguin"],
      correctAnswer: 0,
      explanation: "L'examen du LCR (Liquide Céphalo-Rachidien) est indispensable pour confirmer l'atteinte neurologique."
    }
  ];