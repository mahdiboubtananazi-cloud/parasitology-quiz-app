import React, { useMemo, useCallback } from 'react';
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  protozoaQuestions, 
  protozoaLabels, 
  helminthsQuestions, 
  helminthsLabels, 
  arthropodsQuestions, 
  arthropodsLabels 
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

  const { allQuestionsData, currentLabels } = useMemo(() => {
    let data = protozoaQuestions;
    let labels = protozoaLabels;

    if (categoryId === 'helminths') {
      data = helminthsQuestions;
      labels = helminthsLabels;
    } else if (categoryId === 'arthropods') {
      data = arthropodsQuestions;
      labels = arthropodsLabels;
    }

    return { allQuestionsData: data, currentLabels: labels };
  }, [categoryId]);

  const convertToQuestions = useCallback((data) => {
    const questions = [];
    Object.keys(data).forEach(topic => {
      if (Array.isArray(data[topic]) && data[topic].length > 0) {
        data[topic].forEach(q => {
          questions.push({
            ...q,
            topic: topic,
            question: q.question,
            options: q.options,
            correctAnswer: q.correct,
            explanation: q.explanation
          });
        });
      }
    });
    return questions;
  }, []);

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
    explanationSlideAnim,
    resultScaleAnim
  } = useQuizAnimations(
    logic.currentQuestion,
    logic.showExplanation,
    logic.showResult,
    logic.timeLeft,
    logic.showFilterModal
  );

  const saveQuizResults = useCallback(async () => {
    try {
      let categoryNameForStorage = categoryId === 'protozoa' ? 'Protozoaires' : 
                                   categoryId === 'helminths' ? 'Helminthes' : 'Arthropodes';

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
        {/* نظهر الهيدر حتى في صفحة النتيجة ليتمكن من الفلترة أو الرجوع */}
        <QuizHeader
          categoryName={categoryName}
          onFilterPress={() => logic.setShowFilterModal(true)}
        />
        
        {/* مكون النتيجة الجديد */}
        <ResultsScreen
          score={logic.score}
          totalQuestions={logic.filteredQuestions.length}
          onRestart={handleRestart}
          onGoHome={goHome}
        />
        
        {/* نبقي مودال الفلتر متاحاً */}
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
      {/* Header */}
      <QuizHeader
        categoryName={categoryName}
        onFilterPress={() => logic.setShowFilterModal(true)}
      />

      {/* Main Content Area - No ScrollView */}
      <View style={styles.content}>
        <View style={styles.scrollContent}>
          {/* Top Section: Timer & Question */}
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

          {/* Middle Section: Options (Takes available space) */}
          <OptionsList
            options={question.options}
            selectedAnswer={logic.selectedAnswer}
            correctAnswer={question.correctAnswer}
            showExplanation={logic.showExplanation}
            onAnswerSelect={logic.handleAnswerSelect}
          />

          {/* Bottom Section: Explanation & Button */}
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
