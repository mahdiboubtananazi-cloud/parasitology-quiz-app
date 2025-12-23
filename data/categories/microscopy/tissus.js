// data/categories/microscopy/tissus.js

export const tissus = [
  // --- PEAU & ECTOPARASITES ---
  {
    id: 'tp_tiss_1',
    question: "Pour diagnostiquer une Gale (Sarcoptes scabiei), quel est le site de prélèvement de choix ?",
    options: ["Les sillons interdigitaux et les poignets", "Le dos", "Le cuir chevelu", "Les plantes des pieds"],
    correct: 0,
    explanation: "Les femelles creusent leurs galeries (sillons) préférentiellement dans les zones à peau fine : espaces entre les doigts, poignets, aisselles."
  },
  {
    id: 'tp_tiss_2',
    question: "Quelle substance utilise-t-on pour éclaircir les squames cutanées lors d'une recherche de champignons ou d'acariens ?",
    options: ["Potasse (KOH) 10-20%", "Eau physiologique", "Alcool iodé", "Formol"],
    correct: 0,
    explanation: "La potasse (KOH) dissout la kératine de la peau mais laisse intacts les éléments fongiques et les exosquelettes des parasites."
  },
  {
    id: 'tp_tiss_3',
    question: "L'identification des larves de mouches (Myiases) se fait principalement sur :",
    options: ["La forme des stigmates respiratoires postérieurs", "La couleur de la larve", "La taille uniquement", "Le nombre de pattes"],
    correct: 0,
    explanation: "L'examen des stigmates (orifices respiratoires) à l'arrière de la larve est le critère clé pour identifier l'espèce (ex: Dermatobia, Lucilia). (Les larves n'ont pas de pattes)."
  },

  // --- FILARIOSES CUTANÉES ---
  {
    id: 'tp_tiss_4',
    question: "La technique de 'Snip-Skin' (biopsie exsangue) est le Gold Standard pour :",
    options: ["Onchocerca volvulus", "Loa loa", "Wuchereria bancrofti", "Dracunculus medinensis"],
    correct: 0,
    explanation: "Les microfilaires d'Onchocerca ne circulent pas dans le sang mais dans le derme. On prélève un copeau de peau qu'on immerge dans du sérum pour les voir sortir."
  },
  {
    id: 'tp_tiss_5',
    question: "Après immersion de la biopsie cutanée (Snip-skin), combien de temps faut-il attendre avant lecture ?",
    options: ["30 minutes à 24 heures", "Immédiatement", "1 minute", "1 semaine"],
    correct: 0,
    explanation: "Il faut laisser le temps aux microfilaires de s'extraire du tissu. Une lecture est faite à 30min, puis à quelques heures si négatif."
  },

  // --- LEISHMANIOSE CUTANÉE ---
  {
    id: 'tp_tiss_6',
    question: "Où doit-on prélever pour un frottis de Leishmaniose cutanée (Bouton d'Orient) ?",
    options: ["En bordure active de la lésion (bourrelet)", "Au centre de l'ulcère (nécrose)", "Sur la peau saine à distance", "Dans le sang veineux"],
    correct: 0,
    explanation: "Les parasites (amastigotes) se trouvent dans les macrophages de la zone active (le bord rouge surélevé). Le centre nécrotique est souvent vide ou surinfecté."
  },
  {
    id: 'tp_tiss_7',
    question: "Quelle coloration est utilisée pour visualiser les corps de Leishman-Donovan (Amastigotes) ?",
    options: ["Giemsa ou MGG", "Gram", "Ziehl-Neelsen", "Encre de Chine"],
    correct: 0,
    explanation: "Comme pour le sang, le Giemsa colore le noyau et le kinétoplaste (la structure clé) du parasite."
  },

  // --- MUSCLES & KYSTES ---
  {
    id: 'tp_tiss_8',
    question: "La biopsie musculaire est indiquée pour le diagnostic de :",
    options: ["Trichinella spiralis", "Taenia solium", "Ascaris lumbricoides", "Echinococcus granulosus"],
    correct: 0,
    explanation: "Les larves de Trichinella s'enkystent dans les muscles striés. Une biopsie permet de voir les larves enroulées."
  },
  {
    id: 'tp_tiss_9',
    question: "Lors de la ponction d'un kyste hydatique (Echinococcose), que recherche-t-on dans le liquide ?",
    options: ["Des scolex (têtes) et crochets (Sable hydatique)", "Des œufs", "Des larves rhabditoïdes", "Des trophozoïtes"],
    correct: 0,
    explanation: "Le liquide contient du 'sable hydatique' formé de protoscolex invaginés et de crochets libérés."
  },
  
  // --- LIQUIDE CÉPHALO-RACHIDIEN (LCR) ---
  {
    id: 'tp_lcr_1',
    question: "Dans le LCR, quel parasite peut causer une méningite foudroyante (amibes libres) ?",
    options: ["Naegleria fowleri", "Entamoeba histolytica", "Giardia lamblia", "Toxoplasma gondii"],
    correct: 0,
    explanation: "Naegleria fowleri ('l'amibe mangeuse de cerveau') se trouve dans les eaux douces chaudes et pénètre par le nez, causant une méningo-encéphalite mortelle."
  }
];

export default tissus;
