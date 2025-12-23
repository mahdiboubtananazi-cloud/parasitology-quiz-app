import React, { useMemo, useCallback } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// 👇 1. الاستيراد الشامل (تمت إضافة الميكروسكوب)
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

export default function QuizScreen({ route, navigation }) {
  const { categoryId, categoryName } = route?.params || {};

  // 👇 2. منطق اختيار البيانات (تم تحديثه)
  const { allQuestionsData, currentLabels } = useMemo(() => {
    let data = protozoaQuestions;
    let labels = protozoaLabels;

    if (categoryId === 'helminths') {
      data = helminthsQuestions;
      labels = helminthsLabels;
    } else if (categoryId === 'arthropods') {
      data = arthropodsQuestions;
      labels = arthropodsLabels;
    } else if (categoryId === 'microscopy') { // الشرط الجديد ✅
      data = microscopyQuestions;
      labels = microscopyLabels;
    }

    return { allQuestionsData: data, currentLabels: labels };
  }, [categoryId]);

  // 🔥 وظيفة التحويل (حافظنا عليها كما هي تماماً) 🔥
  const convertToQuestions = useCallback((data) => {
    const questions = [];
    Object.keys(data).forEach(topic => {
      if (Array.isArray(data[topic]) && data[topic].length > 0) {
        data[topic].forEach(q => {
          
          // 1. نحتفظ بنص الإجابة الصحيحة الأصلية
          const correctOptionText = q.options[q.correct];

          // 2. نقوم بخلط الخيارات
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

          // 3. نبحث عن المكان الجديد
          const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

          questions.push({
            ...q,
            topic: topic,
            question: q.question,
            options: shuffledOptions,
            correctAnswer: newCorrectIndex,
            explanation: q.explanation
          });
        });
      }
    });

    // خلط الأسئلة
    return questions.sort(() => Math.random() - 0.5);
    
  }, []);
  // 🔥 نهاية الوظيفة 🔥

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
      // تحديد اسم الفئة للتخزين (تمت إضافة المختبر)
      let categoryNameForStorage = 'Protozoaires';
      if (categoryId === 'helminths') categoryNameForStorage = 'Helminthes';
      else if (categoryId === 'arthropods') categoryNameForStorage = 'Arthropodes';
      else if (categoryId === 'microscopy') categoryNameForStorage = 'Microscopy'; // ✅

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
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <QuizHeader categoryName={categoryName} onFilterPress={() => logic.setShowFilterModal(true)} />
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
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
              topic={question.topic}
              topicLabel={currentLabels[question.topic]}
              timeLeft={logic.timeLeft}
              slideAnim={slideAnim}
              scaleAnim={scaleAnim}
              timerPulseAnim={timerPulseAnim}
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
