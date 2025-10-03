// screens/QuizScreen.js - النسخة المُصلحة
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

  // تطبيق الفلاتر على الأسئلة
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

  // صفحة لا توجد أسئلة
  if (showNoQuestions) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🔬 Quiz de Parasitologie</Text>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={20} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsEmoji}>😕</Text>
          <Text style={styles.noQuestionsTitle}>Aucune question trouvée</Text>
          <Text style={styles.noQuestionsText}>
            Aucune question ne correspond aux filtres sélectionnés.
            Veuillez modifier vos critères de filtrage.
          </Text>
          <TouchableOpacity
            style={styles.changeFilterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Text style={styles.changeFilterButtonText}>Modifier les Filtres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetAllButton}
            onPress={resetFilters}
          >
            <Text style={styles.resetAllButtonText}>Réinitialiser tous les Filtres</Text>
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

  // صفحة النتيجة
  if (showResult) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
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
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={20} color="#3b82f6" />
          </TouchableOpacity>
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
                {score} / {filteredQuestions.length}
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
                <Text style={styles.resultStatNumber}>{filteredQuestions.length - score}</Text>
                <Text style={styles.resultStatLabel}>Incorrectes</Text>
              </View>
            </View>

            <View style={styles.resultActions}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={resetQuiz}
              >
                <Text style={styles.resetButtonText}>Recommencer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.changeFilterButton}
                onPress={() => setShowFilterModal(true)}
              >
                <Text style={styles.changeFilterButtonText}>Changer les Filtres</Text>
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

  // تحقق إضافي لمنع الأخطاء
  if (!question) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🔬 Quiz de Parasitologie</Text>
        </View>
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header الرئيسي مع الأيموجي وزر الفلتر */}
      <View style={styles.mainHeader}>
        <Text style={styles.mainTitle}>🔬 Quiz de Parasitologie</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilterModal(true)}
        >
          <Filter size={20} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      {/* إطار رقم السؤال والنتيجة */}
      <View style={styles.statsFrame}>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Question: </Text>
            <Text style={styles.statValue}>{currentQuestion + 1}/{filteredQuestions.length}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Score: </Text>
            <Text style={styles.statValue}>{score}</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={16} color="#ef4444" />
            <Text style={[styles.statValue, timeLeft <= 10 && styles.timeWarning]}>
              {timeLeft}s
            </Text>
          </View>
        </View>
        
        {/* شريط التقدم */}
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
            question.difficulty === 'medium' ? styles.badgeYellow : styles.badgeRed
          ]}>
            <Text style={styles.badgeText}>
              {question.difficulty === 'easy' ? 'Débutant' : 
               question.difficulty === 'medium' ? 'Intermédiaire' : 'Avancé'}
            </Text>
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
                  <CheckCircle2 size={18} color="#10b981" style={styles.optionIcon} />
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
                <CheckCircle2 size={18} color="#10b981" />
              ) : (
                <AlertCircle size={18} color="#ef4444" />
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
              {currentQuestion + 1 === filteredQuestions.length ? 'Voir les résultats' : 'Question suivante →'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Modal الفلتر */}
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

// مكون منفصل للفلتر Modal
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
          {/* فلتر المستوى */}
          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Niveau de difficulté</Text>
            <View style={styles.filterOptions}>
              {['easy', 'medium', 'hard'].map(difficulty => (
                <TouchableOpacity
                  key={difficulty}
                  style={[
                    styles.filterOption,
                    selectedFilters.difficulty.includes(difficulty) && styles.filterOptionSelected
                  ]}
                  onPress={() => handleFilterSelect('difficulty', difficulty)}
                >
                  <Text style={[
                    styles.filterOptionText,
                    selectedFilters.difficulty.includes(difficulty) && styles.filterOptionTextSelected
                  ]}>
                    {difficulty === 'easy' ? 'Débutant' : 
                     difficulty === 'medium' ? 'Intermédiaire' : 'Avancé'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* فلتر المواضيع */}
          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Catégories</Text>
            <View style={styles.filterOptions}>
              {Object.keys(topicLabels).map(topic => (
                <TouchableOpacity
                  key={topic}
                  style={[
                    styles.filterOption,
                    selectedFilters.topics.includes(topic) && styles.filterOptionSelected
                  ]}
                  onPress={() => handleFilterSelect('topics', topic)}
                >
                  <Text style={[
                    styles.filterOptionText,
                    selectedFilters.topics.includes(topic) && styles.filterOptionTextSelected
                  ]}>
                    {topicLabels[topic]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* عرض الفلاتر المختارة */}
          <View style={styles.selectedFiltersSection}>
            <Text style={styles.selectedFiltersTitle}>Filtres appliqués:</Text>
            <View style={styles.selectedFiltersList}>
              {selectedFilters.difficulty.length === 0 && selectedFilters.topics.length === 0 ? (
                <Text style={styles.noFiltersText}>Aucun filtre sélectionné</Text>
              ) : (
                <>
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
                </>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.modalActions}>
          <TouchableOpacity 
            style={styles.resetAllButton}
            onPress={resetFilters}
          >
            <Text style={styles.resetAllButtonText}>Tout effacer</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => setShowFilterModal(false)}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.applyButton}
            onPress={applyFilters}
          >
            <Text style={styles.applyButtonText}>Appliquer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  // Header الرئيسي - مضغوط
  mainHeader: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  filterButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  // إطار الإحصائيات - مضغوط ومحسن
  statsFrame: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  timeWarning: {
    color: '#ef4444',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 2,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeGreen: {
    backgroundColor: '#d1fae5',
  },
  badgeYellow: {
    backgroundColor: '#fef3c7',
  },
  badgeRed: {
    backgroundColor: '#fecaca',
  },
  badgeBlue: {
    backgroundColor: '#dbeafe',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1f2937',
  },
  questionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  questionText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f2937',
    lineHeight: 24,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 10,
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
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
    fontSize: 15,
    color: '#4b5563',
    flex: 1,
    lineHeight: 20,
  },
  optionTextSelected: {
    color: '#1f2937',
    fontWeight: '500',
  },
  optionIcon: {
    marginLeft: 6,
  },
  explanationCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  explanationTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  explanationText: {
    fontSize: 13,
    color: '#4b5563',
    lineHeight: 18,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 15,
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
    justifyContent: 'space-between',
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
  resultActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  changeFilterButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  changeFilterButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '600',
  },
  // No Questions Styles
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noQuestionsEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  noQuestionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  noQuestionsText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  // Filter Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  filterModal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  filterContent: {
    padding: 20,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  filterOptionSelected: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  filterOptionText: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },
  filterOptionTextSelected: {
    color: 'white',
  },
  selectedFiltersSection: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  selectedFiltersTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  selectedFiltersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectedFilterTag: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  selectedFilterText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  noFiltersText: {
    fontSize: 14,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  modalActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  resetAllButton: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    flex: 1,
  },
  resetAllButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
  },
  cancelButton: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    flex: 1,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  applyButton: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    flex: 1,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});