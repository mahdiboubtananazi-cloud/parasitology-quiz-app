import React, { useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 👇 1. الاستيراد من ملف الفهرس الجديد (تأكدنا من صحته سابقاً)
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

// 🎨 خريطة ألوان وتسميات للمحاور (تم تحديثها لتشمل التقنيات الجديدة)
const AXIS_CONFIG = {
  // المحاور الأساسية للأمراض
  morphology: { label: "Morphologie", color: "#3b82f6" }, // Blue
  lifecycle: { label: "Cycle de Vie", color: "#10b981" }, // Green
  clinical: { label: "Clinique", color: "#f59e0b" },     // Orange
  diagnosis: { label: "Diagnostic", color: "#8b5cf6" },  // Purple
  treatment: { label: "Traitement", color: "#ef4444" },  // Red
  
  // المحاور الجديدة للتقنيات (Techniques) 🧪
  prelevement: { label: "Prélèvement", color: "#0891b2" }, // Cyan
  technique: { label: "Technique", color: "#4f46e5" },    // Indigo
  concentration: { label: "Concentration", color: "#be185d" }, // Pink
  coloration: { label: "Coloration", color: "#9333ea" },   // Purple Strong
  immuno: { label: "Immuno/Moléc.", color: "#ea580c" },    // Dark Orange
  biologie: { label: "Biologie", color: "#06b6d4" },
  
  // Fallbacks
  classification: { label: "Classification", color: "#64748b" },
  default: { label: "Général", color: "#64748b" }
};

export default function QuizScreen({ route, navigation }) {
  const { categoryId, categoryName } = route?.params || {};

  // 👇 2. اختيار البيانات
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

  // 🔥 3. المحول الذكي (تم إصلاحه ليدعم الإجابات بدقة) 🔥
  const convertToQuestions = useCallback((data) => {
    const questions = [];

    Object.keys(data).forEach(key => {
      const module = data[key]; 
      
      // التعامل مع الهيكل الجديد { name: "...", data: [...] }
      // (وهذا يشمل الآن التقنيات أيضاً)
      if (module.data && Array.isArray(module.data)) {
        module.data.forEach(q => {
          
          // ✅ FIX: تحديد الإجابة الصحيحة بذكاء (يدعم correctAnswer و correct)
          const correctIndexOriginal = (q.correctAnswer !== undefined) 
                                       ? q.correctAnswer 
                                       : (q.correct !== undefined ? q.correct : 0);

          const correctOptionText = q.options[correctIndexOriginal];

          // حماية من الأخطاء في البيانات
          if (!correctOptionText) {
             console.warn(`Skipping question ${q.id}: Invalid correct index.`);
             return;
          }

          // خلط الخيارات
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          
          // إيجاد المكان الجديد للإجابة الصحيحة
          const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

          questions.push({
            ...q,
            id: q.id || Math.random().toString(),
            topic: key, // مفتاح الفلتر (مثلاً: paludisme, coprologie)
            diseaseName: module.name, // الاسم الظاهر (Paludisme, Coprologie)
            axisConfig: AXIS_CONFIG[q.axis] || AXIS_CONFIG.default, // لون الشارة
            options: shuffledOptions,
            correctAnswer: newCorrectIndex,
            // ضمان وجود النصوص
            question: q.question,
            explanation: q.explanation
          });
        });
      } 
      // التعامل مع الهيكل القديم (احتياط)
      else if (Array.isArray(module)) {
        module.forEach(q => {
          const correctIndexOriginal = (q.correctAnswer !== undefined) ? q.correctAnswer : q.correct;
          const correctOptionText = q.options[correctIndexOriginal];
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

          questions.push({
            ...q,
            topic: key,
            diseaseName: currentLabels[key] || "Question",
            axisConfig: AXIS_CONFIG.default,
            options: shuffledOptions,
            correctAnswer: newCorrectIndex,
          });
        });
      }
    });

    // خلط ترتيب الأسئلة النهائي
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
            <QuestionCard
              currentQuestion={logic.currentQuestion}
              totalQuestions={logic.filteredQuestions.length}
              questionText={question.question}
              topic={question.diseaseName || currentLabels[question.topic]} 
              topicLabel={question.topic} 
              axisConfig={question.axisConfig}
              timeLeft={logic.timeLeft}
              slideAnim={slideAnim}
              scaleAnim={scaleAnim}
              timerPulseAnim={timerPulseAnim}
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
        topicLabels={currentLabels} 
      />
    </SafeAreaView>
  );
}