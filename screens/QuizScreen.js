// screens/QuizScreen.js - الإصدار النهائي المحسن
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Modal, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle2, AlertCircle, Filter, X, Clock, RotateCcw, Star, Trophy, Target, Home } from 'lucide-react-native';
import { sampleQuestions, topicLabels } from '../data/parasitology';
import HorizontalFilter from '../components/HorizontalFilter';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allQuestions] = useState(sampleQuestions);
  const [filteredQuestions, setFilteredQuestions] = useState(sampleQuestions);
  const [progressAnim] = useState(new Animated.Value(0));
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    difficulty: [],
    topics: []
  });
  const [showNoQuestions, setShowNoQuestions] = useState(false);

  // Animations
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const timerPulseAnim = useRef(new Animated.Value(1)).current;
  const explanationFadeAnim = useRef(new Animated.Value(0)).current;
  const explanationSlideAnim = useRef(new Animated.Value(30)).current;
  const resultScaleAnim = useRef(new Animated.Value(0.8)).current;

  // ✅ إصلاح الفلتر - استخدام useEffect للتتبع
  useEffect(() => {
    console.log('Selected filters updated:', selectedFilters);
  }, [selectedFilters]);

  // Animation de la carte lors du changement de question
  useEffect(() => {
    slideAnim.setValue(50);
    scaleAnim.setValue(0.95);

    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestion]);

  // Animation du timer (pulse quand < 10s)
  useEffect(() => {
    if (timeLeft <= 10 && timeLeft > 0) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(timerPulseAnim, {
            toValue: 1.15,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(timerPulseAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      timerPulseAnim.setValue(1);
    }
  }, [timeLeft]);

  // Animation de l'explication
  useEffect(() => {
    if (showExplanation) {
      explanationFadeAnim.setValue(0);
      explanationSlideAnim.setValue(30);

      Animated.parallel([
        Animated.timing(explanationFadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(explanationSlideAnim, {
          toValue: 0,
          tension: 80,
          friction: 10,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showExplanation]);

  // Animation des résultats
  useEffect(() => {
    if (showResult) {
      Animated.spring(resultScaleAnim, {
        toValue: 1,
        tension: 60,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [showResult]);

  const applyFiltersToQuestions = (filters) => {
    let filtered = [...allQuestions];
    
    if (filters.difficulty.length > 0) {
      filtered = filtered.filter(q => filters.difficulty.includes(q.difficulty));
    }
    
    if (filters.topics.length > 0) {
      filtered = filtered.filter(q => filters.topics.includes(q.topic));
    }
    
    return filtered;
  };

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      setShowNoQuestions(true);
      return;
    }
    
    setTimeLeft(30);
    
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, filteredQuestions]);

  useEffect(() => {
    if (filteredQuestions.length > 0) {
      Animated.timing(progressAnim, {
        toValue: ((currentQuestion + 1) / filteredQuestions.length) * 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [currentQuestion, filteredQuestions]);

  const handleTimeUp = () => {
    if (!showExplanation && filteredQuestions.length > 0) {
      setShowExplanation(true);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation || filteredQuestions.length === 0) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === filteredQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < filteredQuestions.length) {
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
    setShowNoQuestions(false);
    progressAnim.setValue(0);
    setTimeLeft(30);
    resultScaleAnim.setValue(0.8);
  };

  // ✅ ✅ ✅ الإصلاح النهائي للفلتر - استخدام functional update
  const handleFilterSelect = (type, values) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: values
    }));
  };

  // ✅ ✅ ✅ الإصلاح النهائي - تمرير الفلاتر مباشرة
  const handleApplyFilters = (filters) => {
    console.log('Applying filters directly:', filters);
    
    const newFilteredQuestions = applyFiltersToQuestions(filters);
    
    if (newFilteredQuestions.length === 0) {
      setShowNoQuestions(true);
      setFilteredQuestions([]);
    } else {
      setFilteredQuestions(newFilteredQuestions);
      setShowNoQuestions(false);
    }
    
    // تحديث selectedFilters مع الفلاتر المطبقة
    setSelectedFilters(filters);
    
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
    setShowFilterModal(false);
  };

  const resetAllFilters = () => {
    setSelectedFilters({
      difficulty: [],
      topics: []
    });
    setFilteredQuestions(allQuestions);
    setShowNoQuestions(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
  };

  if (showNoQuestions) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={22} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsEmoji}>🔍</Text>
          <Text style={styles.noQuestionsTitle}>Aucune question trouvée</Text>
          <Text style={styles.noQuestionsText}>
            Les filtres sélectionnés ne correspondent à aucune question.{'\n'}
            Veuillez ajuster vos critères.
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Text style={styles.primaryButtonText}>Modifier les filtres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={resetAllFilters}
          >
            <Text style={styles.secondaryButtonText}>Réinitialiser tout</Text>
          </TouchableOpacity>
        </View>

        <HorizontalFilter
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          selectedFilters={selectedFilters}
          onFilterSelect={handleFilterSelect}
          onApplyFilters={handleApplyFilters}
          topicLabels={topicLabels}
        />
      </SafeAreaView>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    
    const getResultLevel = () => {
      if (percentage >= 90) return { 
        text: 'Excellent !', 
        emoji: '🏆', 
        color: '#f59e0b', 
        icon: <Trophy size={32} color="#f59e0b" />,
        advice: 'Maîtrise exceptionnelle ! Continuez à maintenir ce niveau d\'excellence.'
      };
      if (percentage >= 70) return { 
        text: 'Très bien !', 
        emoji: '⭐', 
        color: '#3b82f6', 
        icon: <Star size={32} color="#3b82f6" />,
        advice: 'Très bon niveau ! Quelques révisions pour atteindre l\'excellence.'
      };
      if (percentage >= 50) return { 
        text: 'Bien', 
        emoji: '👍', 
        color: '#10b981', 
        icon: <CheckCircle2 size={32} color="#10b981" />,
        advice: 'Niveau correct. Concentrez-vous sur vos points faibles pour progresser.'
      };
      return { 
        text: 'À réviser', 
        emoji: '📚', 
        color: '#ef4444', 
        icon: <Target size={32} color="#ef4444" />,
        advice: 'Des révisions sont nécessaires. Recommencez le quiz pour améliorer votre score.'
      };
    };

    const result = getResultLevel();

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={22} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <ScrollView 
          contentContainerStyle={styles.resultScrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View 
            style={[
              styles.resultCard,
              { transform: [{ scale: resultScaleAnim }] }
            ]}
          >
            <View style={styles.resultHeader}>
              <View style={[styles.resultIconContainer, { backgroundColor: `${result.color}20` }]}>
                {result.icon}
              </View>
              <Text style={styles.resultEmoji}>{result.emoji}</Text>
            </View>
            
            <Text style={[styles.resultLevel, { color: result.color }]}>
              {result.text}
            </Text>
            
            <View style={[styles.scoreCircle, { borderColor: result.color }]}>
              <Text style={[styles.scorePercentage, { color: result.color }]}>{percentage}%</Text>
              <Text style={styles.scoreText}>
                {score} / {filteredQuestions.length}
              </Text>
            </View>

            <View style={styles.resultStats}>
              <View style={styles.resultStatItem}>
                <View style={[styles.statIconContainer, { backgroundColor: '#10b98120' }]}>
                  <CheckCircle2 size={24} color="#10b981" />
                </View>
                <Text style={styles.resultStatNumber}>{score}</Text>
                <Text style={styles.resultStatLabel}>Correctes</Text>
              </View>

              <View style={styles.resultDivider} />

              <View style={styles.resultStatItem}>
                <View style={[styles.statIconContainer, { backgroundColor: '#ef444420' }]}>
                  <AlertCircle size={24} color="#ef4444" />
                </View>
                <Text style={styles.resultStatNumber}>{filteredQuestions.length - score}</Text>
                <Text style={styles.resultStatLabel}>Incorrectes</Text>
              </View>
            </View>

            {/* ✅ قسم النصيحة الجديد */}
            <View style={styles.adviceContainer}>
              <Text style={styles.adviceTitle}>Conseil</Text>
              <Text style={styles.adviceText}>{result.advice}</Text>
            </View>
          </Animated.View>
        </ScrollView>

        {/* ✅ الأزرار المحسنة مع زر العودة */}
        <View style={styles.resultActionsContainer}>
          <View style={styles.resultActions}>
            <TouchableOpacity
              style={[styles.primaryButton, styles.resultButton]}
              onPress={resetQuiz}
            >
              <RotateCcw size={20} color="#ffffff" />
              <Text style={styles.primaryButtonText}>Recommencer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.homeButton, styles.resultButton]}
              onPress={() => {
                // العودة للشاشة الرئيسية - إعادة تعيين كامل
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setScore(0);
                setShowExplanation(false);
                setShowResult(false);
                setShowNoQuestions(false);
                setSelectedFilters({ difficulty: [], topics: [] });
                setFilteredQuestions(allQuestions);
                setTimeLeft(30);
              }}
            >
              <Home size={20} color="#ffffff" />
              <Text style={styles.homeButtonText}>Accueil</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.resultActionsRow}>
            <TouchableOpacity
              style={[styles.tertiaryButton, styles.resultButton]}
              onPress={() => setShowFilterModal(true)}
            >
              <Filter size={20} color="#6b7280" />
              <Text style={styles.tertiaryButtonText}>Changer filtres</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HorizontalFilter
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          selectedFilters={selectedFilters}
          onFilterSelect={handleFilterSelect}
          onApplyFilters={handleApplyFilters}
          topicLabels={topicLabels}
        />
      </SafeAreaView>
    );
  }

  const question = filteredQuestions[currentQuestion];

  if (!question) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔬</Text>
            <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
          </View>
        </View>
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🔬</Text>
          <Text style={styles.headerTitle}>Quiz de Parasitologie</Text>
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilterModal(true)}
        >
          <Filter size={22} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsBar}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Question</Text>
            <Text style={styles.statValue}>{currentQuestion + 1}/{filteredQuestions.length}</Text>
          </View>
          
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Score</Text>
            <Text style={styles.statValue}>{score}</Text>
          </View>
          
          <Animated.View style={[styles.statBox, styles.timerBox, { transform: [{ scale: timerPulseAnim }] }]}>
            <Clock size={14} color={timeLeft <= 10 ? '#ef4444' : '#6b7280'} />
            <Text style={[styles.statValue, timeLeft <= 10 && styles.timeWarning]}>
              {timeLeft}s
            </Text>
          </Animated.View>
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
        <View style={styles.badgesContainer}>
          <View style={[styles.badge, 
            question.difficulty === 'easy' ? styles.badgeGreen : 
            question.difficulty === 'medium' ? styles.badgeOrange : styles.badgeRed
          ]}>
            <Text style={styles.badgeText}>
              {question.difficulty === 'easy' ? 'Débutant' : 
               question.difficulty === 'medium' ? 'Intermédiaire' : 'Avancé'}
            </Text>
          </View>
          <View style={styles.badgeBlue}>
            <Text style={styles.badgeText}>{topicLabels[question.topic]}</Text>
          </View>
        </View>

        <Animated.View 
          style={[
            styles.questionCard,
            {
              transform: [
                { translateX: slideAnim },
                { scale: scaleAnim }
              ]
            }
          ]}
        >
          <Text style={styles.questionText}>{question.question}</Text>
        </Animated.View>

        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showExplanation && isCorrectAnswer;
            const showWrong = showExplanation && isSelected && !isCorrect;

            return (
              <AnimatedOption
                key={index}
                option={option}
                isSelected={isSelected}
                showCorrect={showCorrect}
                showWrong={showWrong}
                showExplanation={showExplanation}
                onPress={() => handleAnswerSelect(index)}
              />
            );
          })}
        </View>

        {showExplanation && (
          <Animated.View 
            style={[
              styles.explanationCard,
              isCorrect ? styles.explanationCorrect : styles.explanationWrong,
              {
                opacity: explanationFadeAnim,
                transform: [{ translateY: explanationSlideAnim }]
              }
            ]}
          >
            <View style={styles.explanationHeader}>
              {isCorrect ? (
                <CheckCircle2 size={20} color="#10b981" />
              ) : (
                <AlertCircle size={20} color="#ef4444" />
              )}
              <Text style={[
                styles.explanationTitle,
                { color: isCorrect ? '#047857' : '#dc2626' }
              ]}>
                {isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}
              </Text>
            </View>
            
            <Text style={styles.explanationText}>
              {question.explanation}
            </Text>
          </Animated.View>
        )}

        {showExplanation && (
          <Animated.View
            style={{
              opacity: explanationFadeAnim,
              transform: [{ translateY: explanationSlideAnim }]
            }}
          >
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextQuestion}
            >
              <Text style={styles.nextButtonText}>
                {currentQuestion + 1 === filteredQuestions.length ? 'Voir les résultats' : 'Question suivante'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </ScrollView>

      <HorizontalFilter
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
        onApplyFilters={handleApplyFilters}
        topicLabels={topicLabels}
      />
    </SafeAreaView>
  );
}

// Composant option animé
const AnimatedOption = ({ option, isSelected, showCorrect, showWrong, showExplanation, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          showCorrect && styles.optionCorrect,
          showWrong && styles.optionWrong,
          isSelected && !showExplanation && styles.optionSelected,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={showExplanation}
        activeOpacity={0.8}
      >
        <Text style={[
          styles.optionText,
          (showCorrect || showWrong || isSelected) && styles.optionTextBold,
        ]}>
          {option}
        </Text>
        {showCorrect && (
          <CheckCircle2 size={20} color="#10b981" />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerIcon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111827',
    letterSpacing: -0.3,
  },
  filterButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
  },
  statsBar: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  timerBox: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 11,
    color: '#9ca3af',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },
  timeWarning: {
    color: '#ef4444',
  },
  progressBar: {
    height: 5,
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
    padding: 18,
    paddingBottom: 100,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  badgeGreen: {
    backgroundColor: '#d1fae5',
  },
  badgeOrange: {
    backgroundColor: '#fed7aa',
  },
  badgeRed: {
    backgroundColor: '#fecaca',
  },
  badgeBlue: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 14,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.2,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    lineHeight: 26,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  optionsContainer: {
    gap: 10,
    marginBottom: 16,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
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
    fontSize: 15,
    color: '#4b5563',
    flex: 1,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  optionTextBold: {
    color: '#111827',
    fontWeight: '600',
  },
  explanationCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1.5,
  },
  explanationCorrect: {
    backgroundColor: '#ecfdf5',
    borderColor: '#10b981',
  },
  explanationWrong: {
    backgroundColor: '#fef2f2',
    borderColor: '#ef4444',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  explanationTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  explanationText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  resultScrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 16,
  },
  resultIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  resultEmoji: {
    fontSize: 48,
  },
  resultLevel: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 28,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#f9fafb',
    borderWidth: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  scorePercentage: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1,
  },
  scoreText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 6,
    fontWeight: '600',
  },
  resultStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 16,
  },
  resultDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#e5e7eb',
  },
  resultStatItem: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultStatNumber: {
    fontSize: 32,
    fontWeight: '900',
    color: '#111827',
  },
  resultStatLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // ✅ الأنماط الجديدة للنتائج المحسنة
  adviceContainer: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    width: '100%',
  },
  adviceTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  adviceText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  resultActionsContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  resultActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  resultActionsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginTop: 12,
  },
  resultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  homeButton: {
    flex: 1,
    backgroundColor: '#10b981',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  tertiaryButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  tertiaryButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noQuestionsEmoji: {
    fontSize: 72,
    marginBottom: 20,
  },
  noQuestionsTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  noQuestionsText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
});