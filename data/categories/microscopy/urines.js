// data/categories/microscopy/urines.js

export const urines = [
  // --- SCHISTOSOMA HAEMATOBIUM ---
  {
    id: 'tp_urine_1',
    question: "Quel est le moment optimal pour recueillir les urines pour rechercher Schistosoma haematobium ?",
    options: ["Entre 10h et 14h (après effort)", "Première urine du matin", "Urine de 24h", "Au coucher"],
    correct: 0,
    explanation: "L'excrétion des œufs est maximale en milieu de journée et est favorisée par l'exercice physique (sauts) qui détache les œufs de la paroi vésicale."
  },
  {
    id: 'tp_urine_2',
    question: "Quelle est la caractéristique morphologique clé de l'œuf de Schistosoma haematobium ?",
    options: ["Éperon TERMINAL", "Éperon Latéral", "Opercule", "Forme ronde"],
    correct: 0,
    explanation: "S. haematobium a un éperon terminal (au bout). S. mansoni (selles) a un éperon latéral."
  },
  {
    id: 'tp_urine_3',
    question: "La technique de filtration des urines utilise des filtres de quelle porosité ?",
    options: ["12 à 20 µm", "0.2 µm", "100 µm", "1 mm"],
    correct: 0,
    explanation: "On utilise des filtres polycarbonate de 12-20 µm pour retenir les œufs (qui mesurent ~150µm) tout en laissant passer les cellules et débris."
  },
  {
    id: 'tp_urine_4',
    question: "Quel signe clinique accompagne presque toujours la bilharziose urinaire ?",
    options: ["Hématurie (sang dans les urines)", "Protéinurie massive", "Glycosurie", "Anurie"],
    correct: 0,
    explanation: "Le passage des œufs à travers la paroi vésicale provoque des micro-hémorragies. Une hématurie macroscopique est le signe d'appel classique."
  },

  // --- AUTRES PARASITES & ARTEFACTS ---
  {
    id: 'tp_urine_5',
    question: "Quel protozoaire flagellé peut-on retrouver vivant et mobile dans le culot urinaire ?",
    options: ["Trichomonas vaginalis", "Giardia lamblia", "Entamoeba coli", "Balantidium coli"],
    correct: 0,
    explanation: "T. vaginalis est un parasite urogénital. On peut le voir bouger dans l'urine fraîchement émise (surtout chez l'homme ou en cas de contamination vaginale)."
  },
  {
    id: 'tp_urine_6',
    question: "La présence d'œufs de Schistosoma mansoni (éperon latéral) dans les urines est-elle possible ?",
    options: ["Oui, rarement (contamination fécale ou fistule)", "Non, c'est impossible", "Oui, c'est sa localisation normale", "Seulement chez l'enfant"],
    correct: 0,
    explanation: "Bien que rare, on peut en trouver en cas de très forte charge parasitaire, de fistule recto-vésicale, ou simplement par contamination de l'urine par des selles."
  },
  {
    id: 'tp_urine_7',
    question: "Comment évaluer la viabilité des œufs de Schistosoma dans les urines ?",
    options: ["Test d'éclosion (Miracidium nageant)", "Coloration de Gram", "Flottaison", "Culture sur gélose"],
    correct: 0,
    explanation: "On met les œufs dans l'eau douce et on expose à la lumière. Si les œufs éclosent et libèrent des miracidiums mobiles, ils sont vivants (indique un traitement inefficace ou une réinfection)."
  },
  
  // --- TISSUS & BIOPSIES (Bonus) ---
  {
    id: 'tp_tissus_1',
    question: "Quelle est la technique de prélèvement pour diagnostiquer l'Onchocercose (Cécité des rivières) ?",
    options: ["Biopsie exsangue (Snip-skin)", "Prise de sang", "Ponction lombaire", "Frottis urétral"],
    correct: 0,
    explanation: "On prélève un petit morceau de peau (sans faire saigner) qu'on immerge dans du sérum phy pour voir sortir les microfilaires d'Onchocerca volvulus."
  },
  {
    id: 'tp_tissus_2',
    question: "Le diagnostic de la Gale (Sarcoptes scabiei) se fait par :",
    options: ["Grattage des sillons cutanés", "Biopsie profonde", "Scotch-test", "Prise de sang"],
    correct: 0,
    explanation: "On gratte les lésions (sillons) avec une lame de bistouri pour récupérer l'acarien femelle, les œufs ou les déjections."
  }
];

export default urines;
