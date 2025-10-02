// screens/QuizScreen.js - نسخة Rork الكاملة
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle2, AlertCircle, Book, Trophy } from 'lucide-react-native';
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
    if (showExplanation) return; // منع التغيير بعد الإجابة
    
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
      if (percentage >= 90) return { text: 'ممتاز!', emoji: '🌟', color: '#10b981' };
      if (percentage >= 70) return { text: 'جيد جداً!', emoji: '👍', color: '#3b82f6' };
      if (percentage >= 50) return { text: 'جيد', emoji: '👌', color: '#f59e0b' };
      return { text: 'تحتاج للمراجعة', emoji: '📚', color: '#ef4444' };
    };

    const result = getResultLevel();

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
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
                <Text style={styles.resultStatLabel}>صحيحة</Text>
              </View>

              <View style={styles.resultStatItem}>
                <AlertCircle size={24} color="#ef4444" />
                <Text style={styles.resultStatNumber}>{questions.length - score}</Text>
                <Text style={styles.resultStatLabel}>خاطئة</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetQuiz}
            >
              <Text style={styles.resetButtonText}>إعادة الكويز</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} sur {questions.length}
          </Text>
          <Text style={styles.scoreText}>Score : {score}</Text>
        </View>
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
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

        {/* Question */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showExplanation && isCorrectAnswer;
            const showWrong = showExplanation && isSelected && !isCorrect;

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
                  (showCorrect || (isSelected && !showExplanation)) && styles.optionTextSelected,
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

        {/* Explanation */}
        {showExplanation && (
          <View style={[
            styles.explanationCard,
            isCorrect ? styles.explanationCorrect : styles.explanationWrong
          ]}>
            <View style={styles.explanationHeader}>
              {isCorrect ? (
                <CheckCircle2 size={20} color="#10b981" />
              ) : (
                <AlertCircle size={20} color="#ef4444" />
              )}
              <Text style={[
                styles.explanationTitle,
                isCorrect ? styles.explanationTitleCorrect : styles.explanationTitleWrong
              ]}>
                {isCorrect ? 'Réponse correcte !' : 'Temps écoulé ! Réponse correcte :'}
              </Text>
            </View>
            
            {!isCorrect && (
              <Text style={styles.correctAnswerText}>
                {question.options[question.correctAnswer]}
              </Text>
            )}

            <View style={styles.explanationContent}>
              <Text style={styles.explanationLabel}>Explication :</Text>
              <Text style={styles.explanationText}>{question.explanation}</Text>
            </View>
          </View>
        )}

        {/* Next Button */}
        {showExplanation && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion + 1 === questions.length ? 'Terminer' : 'Question suivante'}
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
  progressContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  scoreText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 3,
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
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
  },
  explanationCorrect: {
    backgroundColor: '#d1fae5',
    borderColor: '#10b981',
  },
  explanationWrong: {
    backgroundColor: '#fee2e2',
    borderColor: '#ef4444',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  explanationTitleCorrect: {
    color: '#047857',
  },
  explanationTitleWrong: {
    color: '#dc2626',
  },
  correctAnswerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
    paddingLeft: 28,
  },
  explanationContent: {
    paddingLeft: 28,
  },
  explanationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
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
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Result Screen Styles
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