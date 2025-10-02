export const topicLabels = {
    protozoa: 'الأوليات',
    helminths: 'الديدان',
    arthropods: 'المفصليات',
    diagnosis: 'التشخيص',
    treatment: 'العلاج',
    epidemiology: 'علم الوبائيات',
    lifecycle: 'دورة الحياة',
    pathogenesis: 'الإمراض',
  };
  
  export const sampleQuestions = [
    {
      id: 1,
      topic: 'protozoa',
      question: 'أي من الأوليات التالية يسبب مرض الملاريا؟',
      options: [
        'Toxoplasma gondii',
        'Plasmodium falciparum',
        'Entamoeba histolytica',
        'Giardia lamblia'
      ],
      correctAnswer: 1,
      explanation: 'البلازموديوم الخبيث (Plasmodium falciparum) هو أحد أنواع طفيل الملاريا الأكثر خطورة',
      difficulty: 'medium'
    },
    {
      id: 2,
      topic: 'helminths',
      question: 'ما هو العائل الوسطي لديدان الشستوسوما؟',
      options: [
        'البعوض',
        'الحلزون المائي',
        'الذباب',
        'القراد'
      ],
      correctAnswer: 1,
      explanation: 'الحلزون المائي هو العائل الوسطي الضروري لإكمال دورة حياة الشستوسوما',
      difficulty: 'easy'
    },
    {
      id: 3,
      topic: 'diagnosis',
      question: 'أي من الفحوصات التالية الأكثر دقة لتشخيص الملاريا؟',
      options: [
        'فحص البراز',
        'مسحة الدم المصبوغة',
        'فحص البول',
        'الأشعة السينية'
      ],
      correctAnswer: 1,
      explanation: 'مسحة الدم المصبوغة بصبغة جيمسا هي الطريقة القياسية لتشخيص الملاريا',
      difficulty: 'medium'
    },
    {
      id: 4,
      topic: 'protozoa',
      question: 'ما هو الطفيل المسبب لداء الليشمانيات؟',
      options: [
        'Trypanosoma cruzi',
        'Leishmania donovani',
        'Trichomonas vaginalis',
        'Balantidium coli'
      ],
      correctAnswer: 1,
      explanation: 'الليشمانيا (Leishmania) هي جنس من الطفيليات الأولية المسببة لداء الليشمانيات',
      difficulty: 'medium'
    },
    {
      id: 5,
      topic: 'helminths',
      question: 'أي من الديدان التالية يسبب داء الفيلاريات؟',
      options: [
        'Ascaris lumbricoides',
        'Wuchereria bancrofti',
        'Taenia solium',
        'Trichuris trichiura'
      ],
      correctAnswer: 1,
      explanation: 'Wuchereria bancrofti هي الدودة الخيطية المسؤولة عن معظم حالات داء الفيل',
      difficulty: 'medium'
    },
    {
      id: 6,
      topic: 'treatment',
      question: 'ما هو الدواء المستخدم لعلاج عدوى الجيارديا؟',
      options: [
        'Albendazole',
        'Metronidazole',
        'Praziquantel',
        'Ivermectin'
      ],
      correctAnswer: 1,
      explanation: 'الميترونيدازول (Metronidazole) هو العلاج الأساسي لعدوى الجيارديا',
      difficulty: 'easy'
    },
    {
      id: 7,
      topic: 'lifecycle',
      question: 'في أي عضو يتكاثر طفيل الملاريا بشكل جنسي؟',
      options: [
        'الكبد البشري',
        'كريات الدم الحمراء',
        'بعوضة الأنوفيليس',
        'الطحال'
      ],
      correctAnswer: 2,
      explanation: 'التكاثر الجنسي لطفيل الملاريا يحدث في معدة بعوضة الأنوفيليس',
      difficulty: 'hard'
    },
    {
      id: 8,
      topic: 'pathogenesis',
      question: 'ما هي الآلية الرئيسية لإمراض الإنتاميبا النسيجية؟',
      options: [
        'إنتاج السموم الخارجية',
        'تدمير الأنسجة المباشر',
        'تحفيز الاستجابة المناعية',
        'انسداد الأوعية الدموية'
      ],
      correctAnswer: 1,
      explanation: 'تسبب الإنتاميبا النسيجية المرض عن طريق غزو وتدمير أنسجة القولون مباشرة',
      difficulty: 'hard'
    },
    {
      id: 9,
      topic: 'epidemiology',
      question: 'أي من الأمراض التالية ينتقل عن طريق ذبابة التسي تسي؟',
      options: [
        'داء الليشمانيات',
        'مرض النوم الأفريقي',
        'داء شاغاس',
        'الملاريا'
      ],
      correctAnswer: 1,
      explanation: 'ذبابة التسي تسي هي الناقل لطفيل التريبانوسوما المسبب لمرض النوم الأفريقي',
      difficulty: 'medium'
    },
    {
      id: 10,
      topic: 'arthropods',
      question: 'ما هو الناقل الرئيسي لداء لايم؟',
      options: [
        'البعوض',
        'القراد',
        'البراغيث',
        'القمل'
      ],
      correctAnswer: 1,
      explanation: 'قراد الغزلان (Ixodes) هو الناقل الرئيسي لبكتيريا بوريليا المسببة لداء لايم',
      difficulty: 'easy'
    },
  ];