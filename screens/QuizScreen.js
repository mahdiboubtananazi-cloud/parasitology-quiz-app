// screens/QuizScreen.js - النسخة الصحيحة مع حساب timeSpent
import React, { useMemo, useCallback } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Text } from 'react-native';
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

  // ✅ FIXED: دالة حفظ النتائج مع حساب timeSpent الصحيح
  const saveQuizResults = useCallback(async () => {
    try {
      let categoryNameForStorage = '';
      if (categoryId === 'protozoa') {
        categoryNameForStorage = 'Protozoaires';
      } else if (categoryId === 'helminths') {
        categoryNameForStorage = 'Helminthes';
      } else if (categoryId === 'arthropods') {
        categoryNameForStorage = 'Arthropodes';
      }

      if (!logic.filteredQuestions || logic.filteredQuestions.length === 0) {
        console.log('⚠️ No questions to save');
        return false;
      }

      const totalQuestions = logic.filteredQuestions.length;
      const correctAnswers = logic.score;
      const percentage = Math.round((correctAnswers / totalQuestions) * 100);
      
      // ✅ FIXED: Calculate actual time spent using the hook's method
      const timeSpentInSeconds = logic.getElapsedTime();

      console.log('💾 Saving quiz results...');
      console.log('Category:', categoryNameForStorage);
      console.log('Score:', correctAnswers, '/', totalQuestions);
      console.log('Percentage:', percentage + '%');
      console.log('Time Spent:', timeSpentInSeconds, 'seconds');

      // Save quiz result with correct timeSpent value
      await storage.saveQuizResult({
        categoryName: categoryNameForStorage,
        totalQuestions: totalQuestions,
        correctAnswers: correctAnswers,
        percentage: percentage,
        timeSpent: timeSpentInSeconds // ✅ FIXED: Real time value instead of 0
      });

      // Save category-specific result
      await storage.saveCategoryResult(categoryNameForStorage, {
        percentage: percentage,
        correct: correctAnswers,
        total: totalQuestions
      });

      console.log('✅ Results saved successfully!');
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

    if (navigation) {
      navigation.goBack();
    }
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
      <ResultsScreen
        score={logic.score}
        totalQuestions={logic.filteredQuestions.length}
        categoryName={categoryName}
        categoryId={categoryId}
        resultScaleAnim={resultScaleAnim}
        onRestart={handleRestart}
        onGoHome={goHome}
        onFilterPress={() => logic.setShowFilterModal(true)}
        showFilterModal={logic.showFilterModal}
        setShowFilterModal={logic.setShowFilterModal}
        selectedFilters={logic.selectedFilters}
        onApplyFilters={logic.handleApplyFilters}
        currentLabels={currentLabels}
      />
    );
  }

  const question = logic.filteredQuestions[logic.currentQuestion];

  if (!question) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <QuizHeader
          categoryName={categoryName}
          onFilterPress={() => logic.setShowFilterModal(true)}
        />
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <QuizHeader
        categoryName={categoryName}
        onFilterPress={() => logic.setShowFilterModal(true)}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          scrollEnabled={!logic.showExplanation}
        >
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

          <OptionsList
            options={question.options}
            selectedAnswer={logic.selectedAnswer}
            correctAnswer={question.correctAnswer}
            showExplanation={logic.showExplanation}
            onAnswerSelect={logic.handleAnswerSelect}
          />

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
        </ScrollView>
      </KeyboardAvoidingView>

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
