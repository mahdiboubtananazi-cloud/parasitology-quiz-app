import React, { useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 👇 1. الاستيراد من ملف الفهرس الجديد
import { 
  protozoaQuestions, 
  protozoaLabels, 
  helminthsQuestions, 
  helminthsLabels, 
  arthropodsQuestions, 
  arthropodsLabels,
  microscopyQuestions,
  microscopyLabels 
} from '../data/categories';

import { storage } from '../utils/storage';
import HorizontalFilter from '../components/HorizontalFilter';
import QuizHeader from './QuizScreen_components/QuizHeader';
import QuestionCard from './QuizScreen_components/QuestionCard';
import OptionsList from './QuizScreen_components/OptionsList';
import ExplanationCard from './QuizScreen_components/ExplanationCard';
import ResultsScreen from './QuizScreen_components/ResultsScreen';
import NoQuestionsView from './QuizScreen_components/NoQuestionsView';
import useQuizLogic from './QuizScreen_hooks/useQuizLogic';
import useQuizAnimations from './QuizScreen_hooks/useQuizAnimations';
import { styles } from './QuizScreen_styles/styles';

// 🎨 خريطة ألوان وتسميات للمحاور الخمسة (للعرض البصري)
const AXIS_CONFIG = {
  morphology: { label: "Morphologie", color: "#3b82f6" }, // Blue
  lifecycle: { label: "Cycle de Vie", color: "#10b981" }, // Green
  clinical: { label: "Clinique", color: "#f59e0b" },     // Orange
  diagnosis: { label: "Diagnostic", color: "#8b5cf6" },  // Purple
  treatment: { label: "Traitement", color: "#ef4444" },  // Red
  // Fallbacks
  biology: { label: "Biologie", color: "#06b6d4" },
  classification: { label: "Classification", color: "#64748b" },
  default: { label: "Général", color: "#64748b" }
};

export default function QuizScreen({ route, navigation }) {
  const { categoryId, categoryName } = route?.params || {};

  // 👇 2. اختيار البيانات (لم يتغير المنطق، ولكن المحتوى تغير)
  const { allQuestionsData, currentLabels } = useMemo(() => {
    let data = protozoaQuestions;
    let labels = protozoaLabels;

    if (categoryId === 'helminths') {
      data = helminthsQuestions;
      labels = helminthsLabels;
    } else if (categoryId === 'arthropods') {
      data = arthropodsQuestions;
      labels = arthropodsLabels;
    } else if (categoryId === 'microscopy') {
      data = microscopyQuestions;
      labels = microscopyLabels;
    }

    return { allQuestionsData: data, currentLabels: labels };
  }, [categoryId]);

  // 🔥 3. المحول الذكي الجديد (The Adapter) 🔥
  // يقوم بفك هيكل { name: "Paludisme", data: [...] } وتحويله لمصفوفة مسطحة
  const convertToQuestions = useCallback((data) => {
    const questions = [];

    Object.keys(data).forEach(key => {
      const module = data[key]; 
      
      // التعامل مع الهيكل الجديد (الأمراض)
      // module يكون كائناً: { name: "Paludisme", data: [...] }
      if (module.data && Array.isArray(module.data)) {
        module.data.forEach(q => {
          // خلط الخيارات
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          const newCorrectIndex = shuffledOptions.indexOf(q.options[q.correct]); // لاحظ: q.correct قد يكون index في البيانات الأصلية

          questions.push({
            ...q,
            id: q.id || Math.random().toString(),
            topic: key, // هذا سيستخدم للفلترة (مثلاً: paludisme)
            diseaseName: module.name, // الاسم المقروء (Paludisme)
            axisConfig: AXIS_CONFIG[q.axis] || AXIS_CONFIG.default, // إعدادات المحور للعرض
            options: shuffledOptions,
            correctAnswer: newCorrectIndex,
            // التأكد من وجود الخصائص الأساسية
            question: q.question,
            explanation: q.explanation
          });
        });
      } 
      // التعامل مع الهيكل القديم/المباشر (مثل الميكروسكوب)
      // module يكون مصفوفة مباشرة: [...]
      else if (Array.isArray(module)) {
        module.forEach(q => {
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          const newCorrectIndex = shuffledOptions.indexOf(q.options[q.correct]);

          questions.push({
            ...q,
            topic: key,
            diseaseName: currentLabels[key], // محاولة جلب الاسم من Labels
            axisConfig: AXIS_CONFIG.default,
            options: shuffledOptions,
            correctAnswer: newCorrectIndex,
          });
        });
      }
    });

    // خلط جميع الأسئلة النهائية عشوائياً
    return questions.sort(() => Math.random() - 0.5);
    
  }, [currentLabels]); 
  // 🔥 نهاية المحول 🔥

  const animations = useQuizAnimations(0, false, false, 30, false);

  const logic = useQuizLogic(
    allQuestionsData,
    convertToQuestions,
    animations.resetAnimations,
    categoryId
  );

  // ... (بقية الـ Animations والـ SaveLogic تبقى كما هي تماماً) ...
  const {
    slideAnim,
    scaleAnim,
    timerPulseAnim,
    explanationFadeAnim,
    explanationSlideAnim
  } = useQuizAnimations(
    logic.currentQuestion,
    logic.showExplanation,
    logic.showResult,
    logic.timeLeft,
    logic.showFilterModal
  );

  const saveQuizResults = useCallback(async () => {
    // ... (نفس كود الحفظ السابق)
    try {
        let categoryNameForStorage = 'Protozoaires';
        if (categoryId === 'helminths') categoryNameForStorage = 'Helminthes';
        else if (categoryId === 'arthropods') categoryNameForStorage = 'Arthropodes';
        else if (categoryId === 'microscopy') categoryNameForStorage = 'Microscopy';
  
        if (!logic.filteredQuestions || logic.filteredQuestions.length === 0) return false;
  
        const totalQuestions = logic.filteredQuestions.length;
        const correctAnswers = logic.score;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const timeSpentInSeconds = logic.getElapsedTime();
  
        await storage.saveQuizResult({
          categoryName: categoryNameForStorage,
          totalQuestions,
          correctAnswers,
          percentage,
          timeSpent: timeSpentInSeconds
        });
  
        await storage.saveCategoryResult(categoryNameForStorage, {
          percentage,
          correct: correctAnswers,
          total: totalQuestions
        });
  
        return true;
      } catch (error) {
        console.error('❌ Error saving quiz results:', error);
        return false;
      }
  }, [categoryId, logic.score, logic.filteredQuestions, logic.getElapsedTime]);

  const goHome = useCallback(async () => {
    if (logic.showResult && logic.filteredQuestions.length > 0) {
      await saveQuizResults();
    }
    if (navigation) navigation.goBack();
  }, [navigation, logic.showResult, logic.filteredQuestions, saveQuizResults]);

  const handleRestart = useCallback(async () => {
    if (logic.filteredQuestions.length > 0) {
      await saveQuizResults();
    }
    logic.resetQuiz();
  }, [logic, saveQuizResults]);

  // --- RENDERING ---

  if (logic.showNoQuestions || (logic.filteredQuestions.length === 0)) {
    return (
      <NoQuestionsView
        categoryName={categoryName}
        timerPulseAnim={timerPulseAnim}
        onFilterPress={() => logic.setShowFilterModal(true)}
        onResetFilters={logic.resetAllFilters}
        showFilterModal={logic.showFilterModal}
        setShowFilterModal={logic.setShowFilterModal}
        selectedFilters={logic.selectedFilters}
        onApplyFilters={logic.handleApplyFilters}
        currentLabels={currentLabels}
      />
    );
  }

  if (logic.showResult) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <QuizHeader
          categoryName={categoryName}
          onFilterPress={() => logic.setShowFilterModal(true)}
        />
        <ResultsScreen
          score={logic.score}
          totalQuestions={logic.filteredQuestions.length}
          mistakes={logic.mistakes} 
          onRestart={handleRestart}
          onGoHome={goHome}
        />
        <HorizontalFilter
          visible={logic.showFilterModal}
          onClose={() => logic.setShowFilterModal(false)}
          selectedFilters={logic.selectedFilters}
          onApplyFilters={logic.handleApplyFilters}
          topicLabels={currentLabels}
        />
      </SafeAreaView>
    );
  }

  const question = logic.filteredQuestions[logic.currentQuestion];

  if (!question) {
    // Loading State
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <QuizHeader
        categoryName={categoryName}
        onFilterPress={() => logic.setShowFilterModal(true)}
      />

      <View style={styles.content}>
        <View style={styles.scrollContent}>
          <View>
            {/* 👇 تحديث: نمرر بيانات المحور والمرض لبطاقة السؤال */}
            <QuestionCard
              currentQuestion={logic.currentQuestion}
              totalQuestions={logic.filteredQuestions.length}
              questionText={question.question}
              
              // التعديل هنا: نعرض اسم المرض + شارة المحور
              topic={question.diseaseName || currentLabels[question.topic]} 
              topicLabel={question.topic} // للإبقاء على التوافق إذا كنت تستخدمه
              axisConfig={question.axisConfig} // 🔥 جديد: لون واسم المحور
              
              timeLeft={logic.timeLeft}
              slideAnim={slideAnim}
              scaleAnim={scaleAnim}
              timerPulseAnim={timerPulseAnim}
              // دعم الصور (Labo-Vision)
              image={question.image} 
            />
          </View>

          <OptionsList
            options={question.options}
            selectedAnswer={logic.selectedAnswer}
            correctAnswer={question.correctAnswer}
            showExplanation={logic.showExplanation}
            onAnswerSelect={logic.handleAnswerSelect}
          />

          <View style={styles.bottomSection}>
            {logic.showExplanation && (
              <ExplanationCard
                isCorrect={logic.selectedAnswer === question.correctAnswer}
                explanation={question.explanation}
                isLastQuestion={logic.currentQuestion + 1 === logic.filteredQuestions.length}
                onNext={logic.handleNextQuestion}
                explanationFadeAnim={explanationFadeAnim}
                explanationSlideAnim={explanationSlideAnim}
              />
            )}
          </View>
        </View>
      </View>

      <HorizontalFilter
        visible={logic.showFilterModal}
        onClose={() => logic.setShowFilterModal(false)}
        selectedFilters={logic.selectedFilters}
        onApplyFilters={logic.handleApplyFilters}
        topicLabels={currentLabels} // الآن سيعرض أسماء الأمراض (Paludisme, etc.)
      />
    </SafeAreaView>
  );
}