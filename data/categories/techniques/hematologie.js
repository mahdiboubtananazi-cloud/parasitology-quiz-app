// data/categories/techniques/hematologie.js

export const questions = [
  {
    id: 'tech_hemato_1',
    axis: 'technique',
    question: "Quelle est la différence fondamentale entre la Goutte Épaisse (GE) et le Frottis Sanguin ?",
    options: ["La GE concentre les parasites par hémolyse, le frottis préserve la morphologie", "La GE utilise du sang artériel, le frottis du sang veineux", "Le frottis est plus sensible que la GE", "La GE ne nécessite pas de coloration"],
    correctAnswer: 0,
    explanation: "La GE permet d'examiner un grand volume de sang (sensibilité x20) mais lyse les globules rouges. Le frottis permet l'identification précise des espèces."
  },
  {
    id: 'tech_hemato_2',
    axis: 'coloration',
    question: "Pourquoi ne doit-on JAMAIS fixer la Goutte Épaisse à l'alcool avant coloration ?",
    options: ["Pour permettre l'hémolyse des globules rouges par l'eau du Giemsa", "Pour éviter de tuer les parasites", "Parce que l'alcool dissout le Plasmodium", "Pour économiser de l'alcool"],
    correctAnswer: 0,
    explanation: "La fixation empêcherait l'eau de pénétrer et d'éclater les hématies, rendant la lecture impossible (trop dense)."
  },
  {
    id: 'tech_hemato_3',
    axis: 'technique',
    question: "Dans le test QBC (Quantitative Buffy Coat), quel colorant fluorescent est utilisé ?",
    options: ["Orange d'Acridine", "Fluorescéine", "Auramine", "Bleu de Méthylène"],
    correctAnswer: 0,
    explanation: "L'Orange d'Acridine se fixe à l'ADN/ARN des parasites, les rendant fluorescents à l'interface globules rouges/plasma."
  },
  {
    id: 'tech_hemato_4',
    axis: 'interpretation',
    question: "Sur un frottis sanguin coloré au Giemsa, quelle est la couleur du cytoplasme de Plasmodium ?",
    options: ["Bleu ciel", "Rouge rubis", "Noir", "Jaune"],
    correctAnswer: 0,
    explanation: "Le cytoplasme est bleu, le noyau (chromatine) est rouge rubis, et le pigment palustre (hémozoïne) est brun/noir."
  }
];