// screens/QuizScreen.js - Version Améliorée (Phase 2)
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle2, AlertCircle, Filter, X, Clock } from 'lucide-react-native';
import { sampleQuestions, topicLabels } from '../data/parasitology';

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
  };

  const handleFilterSelect = (type, value) => {
    setSelectedFilters(prev => {
      const currentArray = prev[type];
      const isSelected = currentArray.includes(value);
      
      if (isSelected) {
        return {
          ...prev,
          [type]: currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentArray, value]
        };
      }
    });
  };

  const applyFilters = () => {
    const newFilteredQuestions = applyFiltersToQuestions(selectedFilters);
    
    if (newFilteredQuestions.length === 0) {
      setShowNoQuestions(true);
      setFilteredQuestions([]);
    } else {
      setFilteredQuestions(newFilteredQuestions);
      setShowNoQuestions(false);
    }
    
    setShowFilterModal(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExplanation(false);
    setShowResult(false);
    setTimeLeft(30);
  };

  const resetFilters = () => {
    setSelectedFilters({
      difficulty: [],
      topics: []
    });
    setFilteredQuestions(allQuestions);
    setShowNoQuestions(false);
    setShowFilterModal(false);
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
            onPress={resetFilters}
          >
            <Text style={styles.secondaryButtonText}>Réinitialiser tout</Text>
          </TouchableOpacity>
        </View>

        <FilterModal 
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          selectedFilters={selectedFilters}
          handleFilterSelect={handleFilterSelect}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
          topicLabels={topicLabels}
        />
      </SafeAreaView>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    const getResultLevel = () => {
      if (percentage >= 90) return { text: 'Excellent !', emoji: '🌟', color: '#10b981' };
      if (percentage >= 70) return { text: 'Très bien !', emoji: '👍', color: '#3b82f6' };
      if (percentage >= 50) return { text: 'Bien', emoji: '👌', color: '#f59e0b' };
      return { text: 'À réviser', emoji: '📚', color: '#ef4444' };
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

        <ScrollView contentContainerStyle={styles.resultScrollContent}>
          <View style={styles.resultCard}>
            <Text style={styles.resultEmoji}>{result.emoji}</Text>
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
                <View style={styles.statIconContainer}>
                  <CheckCircle2 size={20} color="#10b981" />
                </View>
                <Text style={styles.resultStatNumber}>{score}</Text>
                <Text style={styles.resultStatLabel}>Correctes</Text>
              </View>

              <View style={styles.resultDivider} />

              <View style={styles.resultStatItem}>
                <View style={styles.statIconContainer}>
                  <AlertCircle size={20} color="#ef4444" />
                </View>
                <Text style={styles.resultStatNumber}>{filteredQuestions.length - score}</Text>
                <Text style={styles.resultStatLabel}>Incorrectes</Text>
              </View>
            </View>

            <View style={styles.resultActions}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={resetQuiz}
              >
                <Text style={styles.primaryButtonText}>Recommencer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => setShowFilterModal(true)}
              >
                <Text style={styles.secondaryButtonText}>Changer filtres</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <FilterModal 
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          selectedFilters={selectedFilters}
          handleFilterSelect={handleFilterSelect}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
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
      {/* Header Principal */}
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

      {/* Barre de Statistiques */}
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
          
          <View style={[styles.statBox, styles.timerBox]}>
            <Clock size={14} color={timeLeft <= 10 ? '#ef4444' : '#6b7280'} />
            <Text style={[styles.statValue, timeLeft <= 10 && styles.timeWarning]}>
              {timeLeft}s
            </Text>
          </View>
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
                  (showCorrect || showWrong || isSelected) && styles.optionTextBold,
                ]}>
                  {option}
                </Text>
                {showCorrect && (
                  <CheckCircle2 size={20} color="#10b981" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Explication */}
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
                { color: isCorrect ? '#047857' : '#dc2626' }
              ]}>
                {isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}
              </Text>
            </View>
            
            <Text style={styles.explanationText}>
              {question.explanation}
            </Text>
          </View>
        )}

        {/* Bouton Suivant */}
        {showExplanation && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion + 1 === filteredQuestions.length ? 'Voir les résultats' : 'Question suivante'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <FilterModal 
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        selectedFilters={selectedFilters}
        handleFilterSelect={handleFilterSelect}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        topicLabels={topicLabels}
      />
    </SafeAreaView>
  );
}

const FilterModal = ({ 
  showFilterModal, 
  setShowFilterModal, 
  selectedFilters, 
  handleFilterSelect, 
  applyFilters, 
  resetFilters,
  topicLabels 
}) => (
  <Modal
    visible={showFilterModal}
    animationType="slide"
    transparent={true}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.filterModal}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Filtres</Text>
          <TouchableOpacity onPress={() => setShowFilterModal(false)}>
            <X size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.filterContent}>
          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Niveau de difficulté</Text>
            <View style={styles.filterOptions}>
              {['easy', 'medium', 'hard'].map(difficulty => (
                <TouchableOpacity
                  key={difficulty}
                  style={[
                    styles.filterChip,
                    selectedFilters.difficulty.includes(difficulty) && styles.filterChipSelected
                  ]}
                  onPress={() => handleFilterSelect('difficulty', difficulty)}
                >
                  <Text style={[
                    styles.filterChipText,
                    selectedFilters.difficulty.includes(difficulty) && styles.filterChipTextSelected
                  ]}>
                    {difficulty === 'easy' ? 'Débutant' : 
                     difficulty === 'medium' ? 'Intermédiaire' : 'Avancé'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Catégories</Text>
            <View style={styles.filterOptions}>
              {Object.keys(topicLabels).map(topic => (
                <TouchableOpacity
                  key={topic}
                  style={[
                    styles.filterChip,
                    selectedFilters.topics.includes(topic) && styles.filterChipSelected
                  ]}
                  onPress={() => handleFilterSelect('topics', topic)}
                >
                  <Text style={[
                    styles.filterChipText,
                    selectedFilters.topics.includes(topic) && styles.filterChipTextSelected
                  ]}>
                    {topicLabels[topic]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {(selectedFilters.difficulty.length > 0 || selectedFilters.topics.length > 0) && (
            <View style={styles.selectedFiltersSection}>
              <Text style={styles.selectedFiltersTitle}>Filtres sélectionnés</Text>
              <View style={styles.selectedFiltersList}>
                {selectedFilters.difficulty.map(diff => (
                  <View key={diff} style={styles.selectedFilterTag}>
                    <Text style={styles.selectedFilterText}>
                      {diff === 'easy' ? 'Débutant' : diff === 'medium' ? 'Intermédiaire' : 'Avancé'}
                    </Text>
                  </View>
                ))}
                {selectedFilters.topics.map(topic => (
                  <View key={topic} style={styles.selectedFilterTag}>
                    <Text style={styles.selectedFilterText}>{topicLabels[topic]}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        <View style={styles.modalActions}>
          <TouchableOpacity 
            style={styles.modalResetButton}
            onPress={resetFilters}
          >
            <Text style={styles.modalResetButtonText}>Réinitialiser</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.modalApplyButton}
            onPress={applyFilters}
          >
            <Text style={styles.modalApplyButtonText}>Appliquer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
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
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
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
    padding: 20,
    paddingBottom: 30,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
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
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.2,
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 18,
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
    fontSize: 16,
    color: '#4b5563',
    flex: 1,
    lineHeight: 22,
    letterSpacing: -0.1,
  },
  optionTextBold: {
    color: '#111827',
    fontWeight: '600',
  },
  explanationCard: {
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
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
    gap: 10,
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  explanationText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    letterSpacing: -0.1,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
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
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  resultEmoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  resultLevel: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 28,
    letterSpacing: -0.5,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f9fafb',
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  scorePercentage: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -1,
  },
  scoreText: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 6,
    fontWeight: '600',
  },
  resultStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 16,
  },
  resultDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#e5e7eb',
  },
  resultStatItem: {
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 24,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultStatNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  resultStatLabel: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '600',
  },
  resultActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  secondaryButtonText: {
    color: '#4b5563',
    fontSize: 16,
    fontWeight: '700',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  filterModal: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '85%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  filterContent: {
    padding: 20,
  },
  filterSection: {
    marginBottom: 28,
  },
  filterSectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
    letterSpacing: -0.2,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
  },
  filterChipSelected: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  filterChipText: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  filterChipTextSelected: {
    color: '#ffffff',
  },
  selectedFiltersSection: {
    marginTop: 24,
    padding: 18,
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedFiltersTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6b7280',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  selectedFiltersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectedFilterTag: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  selectedFilterText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  modalActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  modalResetButton: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  modalResetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#dc2626',
    letterSpacing: -0.2,
  },
  modalApplyButton: {
    flex: 2,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  modalApplyButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.2,
  },
});