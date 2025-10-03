// screens/QuizScreen.js - النسخة المحسنة
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle2, AlertCircle, Filter } from 'lucide-react-native';
import { sampleQuestions, topicLabels } from '../data/parasitology';

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [questions] = useState(sampleQuestions);
  const [progressAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: ((currentQuestion + 1) / questions.length) * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentQuestion]);

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    progressAnim.setValue(0);
  };

  // صفحة النتيجة
  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const getResultLevel = () => {
      if (percentage >= 90) return { text: 'Excellent!', emoji: '🌟', color: '#10b981' };
      if (percentage >= 70) return { text: 'Très bien!', emoji: '👍', color: '#3b82f6' };
      if (percentage >= 50) return { text: 'Bien', emoji: '👌', color: '#f59e0b' };
      return { text: 'Révision nécessaire', emoji: '📚', color: '#ef4444' };
    };

    const result = getResultLevel();

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🔬 Quiz de Parasitologie</Text>
        </View>

        <ScrollView contentContainerStyle={styles.resultScrollContent}>
          <View style={styles.resultCard}>
            <Text style={styles.resultEmoji}>{result.emoji}</Text>
            <Text style={[styles.resultLevel, { color: result.color }]}>
              {result.text}
            </Text>
            
            <View style={styles.scoreCircle}>
              <Text style={styles.scorePercentage}>{percentage}%</Text>
              <Text style={styles.scoreText}>
                {score} / {questions.length}
              </Text>
            </View>

            <View style={styles.resultStats}>
              <View style={styles.resultStatItem}>
                <CheckCircle2 size={24} color="#10b981" />
                <Text style={styles.resultStatNumber}>{score}</Text>
                <Text style={styles.resultStatLabel}>Correctes</Text>
              </View>

              <View style={styles.resultStatItem}>
                <AlertCircle size={24} color="#ef4444" />
                <Text style={styles.resultStatNumber}>{questions.length - score}</Text>
                <Text style={styles.resultStatLabel}>Incorrectes</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetQuiz}
            >
              <Text style={styles.resetButtonText}>Recommencer le Quiz</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const question = questions[currentQuestion];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header الرئيسي مع الأيموجي وزر الفلتر */}
      <View style={styles.mainHeader}>
        <Text style={styles.mainTitle}>🔬 Quiz de Parasitologie</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={24} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      {/* إطار رقم السؤال والنتيجة */}
      <View style={styles.statsFrame}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Question</Text>
          <Text style={styles.statValue}>{currentQuestion + 1}/{questions.length}</Text>
        </View>
        <View style={styles.statSeparator} />
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Score</Text>
          <Text style={styles.statValue}>{score}</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Badges */}
        <View style={styles.badgesContainer}>
          <View style={[styles.badge, styles.badgeGreen]}>
            <Text style={styles.badgeText}>Débutant</Text>
          </View>
          <View style={[styles.badge, styles.badgeBlue]}>
            <Text style={styles.badgeText}>{topicLabels[question.topic]}</Text>
          </View>
        </View>

        {/* السؤال */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        {/* الخيارات */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showExplanation && isCorrectAnswer;
            const showWrong = showExplanation && isSelected && !isCorrectAnswer;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  showCorrect && styles.optionCorrect,
                  showWrong && styles.optionWrong,
                  isSelected && !showExplanation && styles.optionSelected,
                ]}
                onPress={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.optionText,
                  (showCorrect || isSelected) && styles.optionTextSelected,
                ]}>
                  {option}
                </Text>
                {showCorrect && (
                  <CheckCircle2 size={20} color="#10b981" style={styles.optionIcon} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* التبرير */}
        {showExplanation && (
          <View style={styles.explanationCard}>
            <View style={styles.explanationHeader}>
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle2 size={20} color="#10b981" />
              ) : (
                <AlertCircle size={20} color="#ef4444" />
              )}
              <Text style={styles.explanationTitle}>
                {selectedAnswer === question.correctAnswer ? 'Réponse correcte !' : 'Réponse incorrecte'}
              </Text>
            </View>
            
            <Text style={styles.explanationText}>
              {question.explanation}
            </Text>
          </View>
        )}

        {/* زر التمرير للسؤال التالي */}
        {showExplanation && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion + 1 === questions.length ? 'Voir les résultats' : 'Question suivante →'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  // Header الرئيسي
  mainHeader: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  // إطار الإحصائيات
  statsFrame: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statSeparator: {
    width: 1,
    height: 40,
    backgroundColor: '#e5e7eb',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeGreen: {
    backgroundColor: '#d1fae5',
  },
  badgeBlue: {
    backgroundColor: '#dbeafe',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    lineHeight: 26,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  optionCorrect: {
    borderColor: '#10b981',
    backgroundColor: '#d1fae5',
  },
  optionWrong: {
    borderColor: '#ef4444',
    backgroundColor: '#fee2e2',
  },
  optionText: {
    fontSize: 16,
    color: '#4b5563',
    flex: 1,
    lineHeight: 22,
  },
  optionTextSelected: {
    color: '#1f2937',
    fontWeight: '500',
  },
  optionIcon: {
    marginLeft: 8,
  },
  explanationCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  explanationText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Result Screen Styles
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  resultScrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  resultEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  resultLevel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#f0f9ff',
    borderWidth: 8,
    borderColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  scorePercentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  scoreText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  resultStats: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 30,
  },
  resultStatItem: {
    alignItems: 'center',
    gap: 8,
  },
  resultStatNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  resultStatLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  resetButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});